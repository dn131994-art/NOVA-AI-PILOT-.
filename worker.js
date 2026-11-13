// Nova AI Pilot - Cloudflare Worker API
// Set OPENAI_API_KEY as a Worker secret. Never put it in website JavaScript.
const ALLOWED_ORIGIN = "https://dn131994-art.github.io";
const MAX_BODY_BYTES = 12000;
const MAX_INPUT_CHARS = 6000;
const MODES = new Set(["business", "education", "innovation", "personal"]);

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin === ALLOWED_ORIGIN ? ALLOWED_ORIGIN : "null",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin"
  };
}

function reply(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...corsHeaders(origin),
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff"
    }
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    if (request.method === "OPTIONS") {
      if (origin !== ALLOWED_ORIGIN) return new Response(null, { status: 403 });
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }
    if (origin !== ALLOWED_ORIGIN) return reply({ error: "Origin not allowed." }, 403, origin);
    if (new URL(request.url).pathname !== "/api/chat") return reply({ error: "Not found." }, 404, origin);
    if (request.method !== "POST") return reply({ error: "Method not allowed." }, 405, origin);
    if (!env.OPENAI_API_KEY) return reply({ error: "AI service is not configured yet." }, 503, origin);

    const declaredLength = Number(request.headers.get("Content-Length") || 0);
    if (declaredLength > MAX_BODY_BYTES) return reply({ error: "Request too large." }, 413, origin);

    let body;
    try { body = await request.json(); }
    catch { return reply({ error: "Invalid JSON." }, 400, origin); }

    const mode = String(body.mode || "");
    const prompt = typeof body.prompt === "string" ? body.prompt.trim() : "";
    if (!MODES.has(mode)) return reply({ error: "Unknown AI module." }, 400, origin);
    if (!prompt || prompt.length > MAX_INPUT_CHARS) {
      return reply({ error: "Enter a prompt up to 6,000 characters." }, 400, origin);
    }

    const instructions = {
      business: "You are Nova Business AI. Give practical, ethical business growth guidance. State assumptions, suggest measurable next steps, and never guarantee revenue.",
      education: "You are Nova Education AI. Teach clearly at the learner's level, use examples, and encourage understanding rather than simply giving answers.",
      innovation: "You are Nova Innovation Lab. Help evaluate ideas, users, feasibility, risks, prototypes, and experiments. Do not present speculation as fact.",
      personal: "You are Nova Personal AI. Help with realistic goals, routines, and progress plans. Be supportive and avoid pretending to be a medical, legal, or financial professional."
    };

    try {
      const upstream = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + env.OPENAI_API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: env.OPENAI_MODEL || "gpt-4.1-mini",
          instructions: instructions[mode],
          input: prompt,
          max_output_tokens: 900
        })
      });
      const result = await upstream.json();
      if (!upstream.ok) {
        return reply({ error: "AI provider request failed. Check the Worker secret and API billing." }, 502, origin);
      }
      const answer = (result.output || [])
        .flatMap(item => item.content || [])
        .filter(part => part.type === "output_text")
        .map(part => part.text)
        .join("\n")
        .trim();
      if (!answer) return reply({ error: "No answer was returned. Please try again." }, 502, origin);
      return reply({ answer }, 200, origin);
    } catch {
      return reply({ error: "Could not reach the AI service. Please try again." }, 502, origin);
    }
  }
};

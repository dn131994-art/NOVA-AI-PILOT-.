# Nova AI Pilot — secure AI setup

## Current state
The GitHub Pages site is static. It cannot safely store an OpenAI API key. The Worker in `worker.js` is a separate backend starter; the live AI is **not active** until the steps below are completed.

## 1. Create the backend
1. Sign in to Cloudflare and open **Workers & Pages**.
2. Create a Worker named `nova-ai-pilot-api`.
3. Open its editor and replace the starter code with the contents of `worker.js`.
4. Deploy the Worker. Its URL will look like `https://nova-ai-pilot-api.<your-account>.workers.dev`.

## 2. Add the secret safely
1. In the Worker, open **Settings → Variables and Secrets**.
2. Add a secret named `OPENAI_API_KEY`.
3. Paste the API key directly into Cloudflare's secret field and save it. Do not paste it into GitHub, HTML, JavaScript, or this chat.
4. Optional: add a plain-text variable named `OPENAI_MODEL` with value `gpt-4.1-mini`.
5. Before sharing the site, configure Cloudflare rate limiting for the Worker route to limit abuse and unexpected API charges. Set an API spending limit/alert in the OpenAI dashboard too.

## 3. Important current limitation
This Worker only provides the protected server endpoint at `/api/chat`. The website's four module forms still use their current demo planners; they have not yet been switched to call the Worker. Do not consider the AI connected until the Worker is deployed, the secret is set, the frontend is configured with the Worker URL, and a live test succeeds.

## 4. Endpoint contract
Send a JSON POST to `/api/chat` with:
```json
{ "mode": "business", "prompt": "I run a small clothing shop. Suggest a 30-day plan." }
```
Allowed modes: `business`, `education`, `innovation`, `personal`.
Successful response: `{ "answer": "..." }`.

The Worker allows requests only from this GitHub Pages origin: `https://dn131994-art.github.io`. If the repository's Pages URL/origin changes, update `ALLOWED_ORIGIN` in `worker.js` before deploying.

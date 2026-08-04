<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Nova AI Pilot</title>

<style>
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,sans-serif;
}
.navbar{
position:fixed;
top:0;
left:0;
width:100%;
padding:18px 8%;
display:flex;
justify-content:space-between;
align-items:center;
background:rgba(5,8,22,.75);
backdrop-filter:blur(12px);
border-bottom:1px solid rgba(255,255,255,.08);
z-index:1000;
}

.logo{
font-size:24px;
font-weight:bold;
color:#00e5ff;
}

.nav-links{
display:flex;
gap:30px;
list-style:none;
}

.nav-links a{
text-decoration:none;
color:white;
transition:.3s;
}

.nav-links a:hover{
color:#00e5ff;
text-shadow:0 0 10px #00e5ff;
}
body{
background:#050816;
color:white;
overflow-x:hidden;
}

.hero{
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
padding-top:80px;
background:radial-gradient(circle at center,#16213e,#050816);
}
.btn{
text-decoration:none;
display:inline-block;
transition:0.3s;
}

.btn:hover{
transform:scale(1.08);
box-shadow:0 0 35px #00e5ff;
}
.hero h1{
font-size:4rem;
color:#00e5ff;
text-shadow:0 0 20px #00e5ff;
}

.hero p{
margin-top:20px;
font-size:1.2rem;
max-width:700px;
color:#dcdcdc;
}

.btn{
margin-top:30px;
padding:15px 35px;
border:none;
border-radius:30px;
cursor:pointer;
font-size:18px;
background:linear-gradient(45deg,#00e5ff,#7b2cff);
color:white;
box-shadow:0 0 20px #00e5ff;
}

section{
padding:80px 10%;
}

.section-title{
font-size:2.5rem;
text-align:center;
margin-bottom:40px;
color:#00e5ff;
}

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:25px;
}

.card{
background:rgba(255,255,255,0.05);
padding:25px;
border-radius:20px;
backdrop-filter:blur(10px);
border:1px solid rgba(255,255,255,0.1);
transition:0.3s;
}

.card:hover{
transform:translateY(-10px);
box-shadow:0 0 25px rgba(0,229,255,0.5);
}

.card h3{
margin-bottom:15px;
color:#00e5ff;
}

footer{
text-align:center;
padding:40px;
border-top:1px solid rgba(255,255,255,0.1);
}

footer h2{
color:#00e5ff;
margin-bottom:10px;
}

.stars{
position:fixed;
width:100%;
height:100%;
background:
radial-gradient(white 1px, transparent 1px);
background-size:50px 50px;
opacity:0.15;
z-index:-1;
animation:moveStars 120s linear infinite;
}
.hero h1{
font-size:4rem;
color:#00e5ff;
text-shadow:0 0 20px #00e5ff;
animation: glow 2s infinite alternate;
}

@keyframes glow{
from{
text-shadow:0 0 10px #00e5ff;
}
to{
text-shadow:0 0 20px #00e5ff,0 0 40px #7b2cff;
}
}
@keyframes moveStars{
from{transform:translateY(0);}
to{transform:translateY(-1000px);}
}
</style>
</head>

<body>

<div class="stars"></div>
<nav class="navbar">
    <div class="logo">🚀 Nova AI Pilot</div>

    <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#vision">Vision</a></li>
        <li><a href="ai.html">AI</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
<section class="hero"><div class="ai-orb"></div>
<h1>Nova AI Pilot</h1>.ai-orb{
width:140px;
height:140px;
border-radius:50%;
background:radial-gradient(circle,#00e5ff,#7b2cff);
box-shadow:0 0 60px #00e5ff;
margin-bottom:30px;
animation:float 3s ease-in-out infinite;
}

@keyframes float{
0%,100%{transform:translateY(0);}
50%{transform:translateY(-15px);}
}

<p>
The Future Starts Here.
AI + Human. Building the Future Together.
</p>

<a href="ai.html" class="btn">Start AI</a>
</section>

<section>
<section id="vision">
<h2 class="section-title">AI Human Vision</h2>

<div class="grid">

<div class="card">
<h3>🤖 AI Collaboration</h3>
<p>AI and Humans working together to solve problems.</p>
</div>

<div class="card">
<h3>🔒 Trust & Safety</h3>
<p>Responsible AI with transparency and security.</p>
</div>

<div class="card">
<h3>🚀 Future Building</h3>
<p>Create technologies that improve life and innovation.</p>
</div>

</div>
</section>

<section>
<h2 class="section-title">Core Modules</h2>

<div class="grid">

<div class="card">
<h3>🏢 Business AI</h3>
<p>Growth analysis, strategy planning and AI co-pilot.</p>
</div>

<div class="card">
<h3>📚 Education AI</h3>
<p>Personal teacher and learning roadmap.</p>
</div>

<div class="card">
<h3>💡 Innovation Lab</h3>
<p>Startup ideas, inventions and future technology.</p>
</div>

<div class="card">
<h3>👤 Personal AI</h3>
<p>Goals, productivity and life planning assistant.</p>
</div>

</div>
</section>

<section>
<h2 class="section-title">Universe AI Pilot</h2>

<div class="card">
<h3>🌌 One AI. Infinite Possibilities.</h3>
<p>
Business, Education, Innovation and Personal Growth
combined into one futuristic AI platform.
</p>
</div>
</section>

<footer>
<h2>Universe AI Pilot</h2>
<p>AI Human — Together Building The Future</p>
</footer>

</body>
</html>
 

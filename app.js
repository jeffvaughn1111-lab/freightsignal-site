/* ── RESET ─────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }

/* ── TOKENS ─────────────────────────────────────── */
:root {
  --bg:       #081418;
  --surf:     #0d1f24;
  --surf2:    #122830;
  --surf3:    #172f38;
  --teal:     #00c8c8;
  --teal-dim: #009898;
  --teal-glow:rgba(0,200,200,0.15);
  --white:    #f0f8fa;
  --t2:       #8ab8c0;
  --t3:       #4a7880;
  --border:   rgba(0,200,200,0.10);
  --border2:  rgba(0,200,200,0.24);
  --ff: 'Inter', sans-serif;
  --fm: 'JetBrains Mono', monospace;
}

/* ── BASE ────────────────────────────────────────── */
body {
  font-family: var(--ff);
  background: var(--bg);
  color: var(--white);
  overflow-x: hidden;
  line-height: 1.6;
}
body::before {
  content: '';
  position: fixed; inset: 0; z-index: 0;
  background-image:
    linear-gradient(rgba(0,200,200,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,200,200,0.03) 1px, transparent 1px);
  background-size: 48px 48px;
  pointer-events: none;
}
a { text-decoration: none; }

/* ── NAV ─────────────────────────────────────────── */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  height: 76px;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 48px;
  background: rgba(8,20,24,0.94);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border2);
}
.nav-logo {
  display: flex; align-items: center;
  flex-shrink: 0;
}
.nav-logo img {
  height: 52px;
  width: auto;
  display: block;
}
.nav-links {
  display: flex; gap: 36px;
}
.nav-link {
  font-size: 13px; font-weight: 500;
  color: var(--t2);
  transition: color .15s;
}
.nav-link:hover { color: var(--teal); }
.nav-cta {
  display: flex; gap: 10px; align-items: center;
}
.btn-outline {
  font-size: 13px; font-weight: 600;
  padding: 7px 18px; border-radius: 6px;
  border: 1px solid var(--border2);
  background: transparent; color: var(--t2);
  cursor: pointer; transition: all .15s;
}
.btn-outline:hover { border-color: var(--teal); color: var(--teal); }
.btn-teal {
  font-size: 13px; font-weight: 700;
  padding: 8px 22px; border-radius: 6px;
  border: none; background: var(--teal);
  color: var(--bg); cursor: pointer;
  transition: all .15s;
}
.btn-teal:hover {
  background: #28e0e0;
  box-shadow: 0 0 20px var(--teal-glow);
  transform: translateY(-1px);
}

/* ── TICKER ──────────────────────────────────────── */
.ticker {
  position: fixed; top: 76px; left: 0; right: 0; z-index: 99;
  height: 44px;
  background: var(--surf);
  border-bottom: 2px solid var(--teal);
  overflow: hidden; display: flex; align-items: center;
}
.ticker-label {
  height: 100%; padding: 0 22px;
  background: var(--teal);
  color: var(--bg);
  font-family: var(--fm); font-size: 10px; font-weight: 700;
  letter-spacing: 2px; white-space: nowrap;
  display: flex; align-items: center; flex-shrink: 0;
}
.ticker-track-wrap { overflow: hidden; flex: 1; }
.ticker-track {
  display: flex; white-space: nowrap;
  animation: ticker-scroll 90s linear infinite;
}
.ticker-item {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 0 32px;
  font-family: var(--fm); font-size: 10px;
  color: var(--t3);
  border-right: 1px solid var(--border);
}
.ticker-item .flag { font-size: 14px; }
.ticker-item .company { color: var(--white); font-weight: 600; }
.ticker-item .tag {
  font-size: 8px; font-weight: 700; letter-spacing: .5px;
  padding: 2px 7px; border-radius: 3px;
}
.tag-plant  { background: rgba(0,200,200,.14); color: var(--teal); }
.tag-dc     { background: rgba(0,180,200,.10); color: #00d8e0; }
.tag-store  { background: rgba(0,160,160,.12); color: #00b8b8; }
.tag-expand { background: rgba(0,200,200,.08); color: var(--teal-dim); }
@keyframes ticker-scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* ── HERO ─────────────────────────────────────────── */
.hero {
  position: relative; z-index: 1;
  min-height: 100vh;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  text-align: center;
  padding: 168px 40px 100px;
}
.hero-glow {
  position: absolute; top: 15%; left: 50%;
  transform: translateX(-50%);
  width: 800px; height: 500px;
  background: radial-gradient(ellipse, rgba(0,200,200,.07) 0%, transparent 65%);
  pointer-events: none;
}
.hero-eye {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--fm); font-size: 9px; letter-spacing: 2.5px;
  color: var(--teal);
  border: 1px solid var(--border2); border-radius: 3px;
  padding: 5px 14px; margin-bottom: 28px;
  background: rgba(0,200,200,.04);
}
.hero-eye .dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--teal);
  animation: blink 1.4s ease-in-out infinite;
}
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:.2} }
.hero h1 {
  font-size: clamp(48px, 8vw, 108px);
  font-weight: 900; line-height: .9;
  letter-spacing: -3px; margin-bottom: 24px;
}
.hero h1 .line1 { display: block; color: var(--white); }
.hero h1 .line2 { display: block; color: var(--teal); }
.hero h1 .line3 { display: block; color: var(--white); }
.hero-sub {
  font-size: 18px; color: var(--t2);
  max-width: 600px; margin: 0 auto 40px;
  line-height: 1.7;
}
.hero-sub strong { color: var(--white); }
.hero-btns {
  display: flex; gap: 12px; justify-content: center;
  flex-wrap: wrap; margin-bottom: 14px;
}
.btn-hero-primary {
  font-size: 16px; font-weight: 700;
  padding: 14px 36px; border-radius: 8px;
  background: var(--teal); color: var(--bg);
  border: none; cursor: pointer;
  transition: all .2s;
  display: inline-flex; align-items: center; gap: 8px;
}
.btn-hero-primary:hover {
  background: #28e0e0;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0,200,200,.3);
}
.btn-hero-ghost {
  font-size: 16px; font-weight: 600;
  padding: 14px 28px; border-radius: 8px;
  background: transparent; color: var(--white);
  border: 1.5px solid rgba(255,255,255,.18);
  cursor: pointer; transition: all .2s;
  display: inline-flex; align-items: center; gap: 8px;
}
.btn-hero-ghost:hover { border-color: var(--teal); color: var(--teal); }
.hero-note {
  font-family: var(--fm); font-size: 10px;
  color: var(--t3); letter-spacing: .5px;
}
.hero-stats {
  display: flex; gap: 56px; flex-wrap: wrap;
  justify-content: center;
  margin-top: 64px; padding-top: 48px;
  border-top: 1px solid var(--border);
}
.hero-stat-val {
  font-family: var(--fm); font-size: 36px; font-weight: 700;
  color: var(--teal); line-height: 1;
}
.hero-stat-lbl {
  font-size: 11px; color: var(--t3);
  margin-top: 5px; letter-spacing: .3px;
}

/* ── SHARED SECTION STYLES ───────────────────────── */
.section { position: relative; z-index: 1; }
.section-inner { max-width: 1100px; margin: 0 auto; padding: 96px 40px; }
.section.alt { background: var(--surf); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.sec-label {
  font-family: var(--fm); font-size: 9px;
  letter-spacing: 3px; color: var(--teal);
  text-transform: uppercase; margin-bottom: 12px;
}
.sec-h2 {
  font-size: clamp(32px, 4.5vw, 58px);
  font-weight: 900; line-height: .95;
  letter-spacing: -1.5px; margin-bottom: 16px;
  color: var(--white);
}
.sec-sub { font-size: 15px; color: var(--t2); max-width: 560px; line-height: 1.65; }
.fade-in {
  opacity: 0; transform: translateY(20px);
  transition: opacity .6s ease, transform .6s ease;
}
.fade-in.visible { opacity: 1; transform: translateY(0); }

/* ── MOCKUP ──────────────────────────────────────── */
.mockup-wrap { max-width: 1060px; margin: 0 auto; padding: 0 40px 80px; position: relative; z-index: 1; }
.mockup-frame {
  border: 1px solid var(--border2); border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 40px 100px rgba(0,0,0,.6), 0 0 60px rgba(0,200,200,.05);
}
.mockup-titlebar {
  height: 36px; background: var(--surf2);
  display: flex; align-items: center; padding: 0 14px; gap: 7px;
  border-bottom: 1px solid var(--border);
}
.m-dot { width: 10px; height: 10px; border-radius: 50%; }
.mockup-url {
  flex: 1; height: 20px;
  margin: 0 12px;
  background: var(--bg); border-radius: 4px;
  display: flex; align-items: center; padding: 0 10px;
  font-family: var(--fm); font-size: 9px; color: var(--t3);
}
.mockup-app { display: grid; grid-template-columns: 190px 1fr; min-height: 360px; }
.mockup-sidebar { background: rgba(8,20,24,.95); border-right: 1px solid var(--border); padding: 10px 0; }
.sidebar-item {
  padding: 7px 14px;
  display: flex; align-items: center; gap: 7px;
  font-family: var(--fm); font-size: 8px; letter-spacing: .5px;
  color: var(--t3); cursor: default;
}
.sidebar-item.active {
  color: var(--teal); background: rgba(0,200,200,.07);
  border-left: 2px solid var(--teal);
}
.sidebar-dot { width: 4px; height: 4px; border-radius: 50%; background: currentColor; flex-shrink: 0; }
.sidebar-sep { font-family: var(--fm); font-size: 7px; color: var(--border2); padding: 8px 14px 2px; letter-spacing: 1px; }
.mockup-main { display: flex; flex-direction: column; gap: 10px; padding: 12px; background: var(--bg); }
.mockup-stats { display: grid; grid-template-columns: repeat(5,1fr); gap: 6px; }
.mockup-stat {
  background: var(--surf); border: 1px solid var(--border);
  border-radius: 5px; padding: 8px 10px;
}
.mockup-stat::before { content: ''; display: block; height: 2px; border-radius: 1px; background: var(--teal); opacity: .5; margin-bottom: 6px; }
.mockup-stat-val { font-family: var(--fm); font-size: 18px; font-weight: 700; color: var(--teal); line-height: 1; }
.mockup-stat-lbl { font-size: 8px; color: var(--t3); margin-top: 2px; letter-spacing: .5px; text-transform: uppercase; }
.mockup-table { background: var(--surf); border: 1px solid var(--border); border-radius: 5px; overflow: hidden; }
.mockup-thead {
  display: grid; grid-template-columns: 2fr 1.2fr .9fr .7fr .9fr;
  padding: 6px 10px;
  background: var(--teal); color: var(--bg);
  font-family: var(--fm); font-size: 7px; letter-spacing: 1px; text-transform: uppercase;
}
.mockup-row {
  display: grid; grid-template-columns: 2fr 1.2fr .9fr .7fr .9fr;
  padding: 7px 10px; align-items: center;
  border-bottom: 1px solid rgba(0,200,200,.04);
}
.row-co { font-size: 10px; font-weight: 600; color: var(--white); }
.row-sub { font-family: var(--fm); font-size: 7px; color: var(--t3); }
.row-lane { font-family: var(--fm); font-size: 8px; color: var(--t2); }
.badge { font-family: var(--fm); font-size: 7px; padding: 2px 5px; border-radius: 2px; font-weight: 700; display: inline-block; }
.badge-hot { background: rgba(0,200,200,.12); color: var(--teal); border: 1px solid rgba(0,200,200,.22); }
.badge-warm { background: rgba(0,160,160,.1); color: var(--teal-dim); border: 1px solid rgba(0,160,160,.2); }
.row-score { font-family: var(--fm); font-size: 9px; font-weight: 700; color: var(--teal); }
.row-action { font-family: var(--fm); font-size: 7px; padding: 3px 7px; border-radius: 2px; border: 1px solid var(--border2); background: transparent; color: var(--teal); cursor: pointer; font-weight: 700; }

/* ── HOW IT WORKS ─────────────────────────────────── */
.steps-grid {
  display: grid; grid-template-columns: repeat(4,1fr);
  margin-top: 52px;
  border: 1px solid var(--border); gap: 1px; background: var(--border);
}
.step-card {
  background: var(--surf); padding: 28px 24px;
  transition: background .2s;
}
.step-card:hover { background: var(--surf2); }
.step-n { font-family: var(--fm); font-size: 9px; font-weight: 700; letter-spacing: 2px; color: var(--teal); margin-bottom: 14px; }
.step-icon { font-size: 28px; margin-bottom: 12px; display: block; }
.step-title { font-size: 18px; font-weight: 800; letter-spacing: -.3px; margin-bottom: 8px; color: var(--white); }
.step-desc { font-size: 12px; color: var(--t2); line-height: 1.65; }
.step-tag { font-family: var(--fm); font-size: 8px; padding: 2px 7px; border-radius: 2px; border: 1px solid var(--border2); color: var(--teal); display: inline-block; margin-top: 12px; letter-spacing: .5px; }

/* ── FEATURES ─────────────────────────────────────── */
.features-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; margin-top: 48px; }
.feature-card {
  background: var(--surf); border: 1px solid var(--border);
  border-radius: 8px; padding: 24px;
  transition: all .2s; cursor: default;
}
.feature-card:hover { border-color: var(--border2); background: var(--surf2); transform: translateY(-2px); }
.feature-card.highlight { border-color: var(--border2); background: rgba(0,200,200,.03); }
.feature-icon { font-size: 24px; margin-bottom: 12px; display: block; }
.feature-title { font-size: 16px; font-weight: 700; margin-bottom: 8px; color: var(--white); }
.feature-desc { font-size: 12px; color: var(--t2); line-height: 1.65; }
.feature-tag {
  font-family: var(--fm); font-size: 7px; padding: 2px 7px;
  border-radius: 2px; border: 1px solid var(--border2);
  color: var(--teal); background: rgba(0,200,200,.06);
  display: inline-block; margin-top: 10px; letter-spacing: .5px;
}

/* ── TERRITORY ────────────────────────────────────── */
.territory-box {
  margin-top: 44px;
  background: var(--surf); border: 1px solid var(--border2);
  border-radius: 10px; overflow: hidden;
}
.territory-header {
  background: var(--surf2); padding: 13px 20px;
  border-bottom: 2px solid var(--teal);
  display: flex; align-items: center; gap: 10px;
}
.territory-header-title { font-family: var(--fm); font-size: 10px; letter-spacing: 1.5px; color: var(--t2); text-transform: uppercase; }
.territory-live { font-family: var(--fm); font-size: 8px; color: var(--teal); margin-left: auto; display: flex; align-items: center; gap: 5px; }
.territory-live::before { content:''; width:5px; height:5px; border-radius:50%; background:var(--teal); display:inline-block; animation:blink 1.4s infinite; }
.territory-cols { display: grid; grid-template-columns: 1fr 1fr 1fr; border-top: 1px solid var(--border); }
.territory-col { padding: 18px; border-right: 1px solid var(--border); }
.territory-col:last-child { border-right: none; }
.col-label { font-family: var(--fm); font-size: 8px; letter-spacing: 1.5px; color: var(--t3); text-transform: uppercase; margin-bottom: 10px; display: flex; align-items: center; gap: 6px; }
.col-label::before { content:''; width:6px; height:6px; border-radius:50%; background:var(--teal); }
.terr-select {
  width: 100%; background: var(--surf2); border: 1px solid var(--border);
  border-radius: 5px; color: var(--white); font-family: var(--fm); font-size: 10px;
  padding: 8px 10px; outline: none; cursor: pointer; margin-bottom: 7px;
  transition: border-color .15s;
}
.terr-select:focus { border-color: var(--teal); }
.terr-select option { background: var(--surf2); }
.pill-row { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 6px; }
.pill {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 4px 10px; border-radius: 20px;
  border: 1px solid var(--border); background: rgba(0,200,200,.04);
  font-family: var(--fm); font-size: 9px; color: var(--t2);
  cursor: pointer; transition: all .12s;
}
.pill:hover { border-color: var(--border2); color: var(--teal); }
.pill.on { border-color: var(--teal); color: var(--teal); background: rgba(0,200,200,.1); }
.signal-type-row { display: flex; flex-direction: column; gap: 6px; }
.sig-type {
  display: flex; align-items: center; justify-content: space-between;
  padding: 6px 10px; border-radius: 5px;
  border: 1px solid var(--border); background: rgba(0,200,200,.03);
  font-family: var(--fm); font-size: 9px; color: var(--t2);
}
.sig-type .dot-on { color: var(--teal); font-size: 10px; }

/* ── ALERTS ───────────────────────────────────────── */
.alerts-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 48px; }
.alert-card { background: var(--surf); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }
.alert-card-head {
  background: var(--surf2); padding: 11px 14px;
  border-bottom: 2px solid var(--teal);
  display: flex; align-items: center; gap: 8px;
}
.alert-card-title { font-size: 12px; font-weight: 600; color: var(--white); }
.alert-card-sub { font-size: 10px; color: var(--t3); }
.alert-live { margin-left: auto; font-family: var(--fm); font-size: 8px; color: var(--teal); display: flex; align-items: center; gap: 4px; }
.alert-live::before { content:''; width:5px; height:5px; border-radius:50%; background:var(--teal); animation:blink 1.4s infinite; }
.alert-body { padding: 14px; }
.email-mock { background: var(--bg); border: 1px solid var(--border); border-radius: 5px; overflow: hidden; }
.email-head { background: var(--surf2); padding: 8px 12px; border-bottom: 1px solid var(--border); }
.email-from { font-family: var(--fm); font-size: 8px; color: var(--t3); }
.email-from strong { color: var(--teal); }
.email-subject { font-size: 11px; font-weight: 600; color: var(--white); margin-top: 2px; }
.email-body { padding: 10px 12px; color: var(--t2); font-size: 11px; line-height: 1.6; }
.email-body strong { color: var(--white); }
.email-signal { background: var(--surf); border: 1px solid var(--border2); border-radius: 4px; padding: 8px 10px; margin: 8px 0; font-size: 10px; }
.email-signal-co { font-weight: 700; color: var(--white); margin-bottom: 2px; }
.email-signal-detail { color: var(--t3); }
.email-btn { display: inline-flex; align-items: center; gap: 5px; padding: 6px 12px; border-radius: 4px; background: var(--teal); color: var(--bg); font-family: var(--fm); font-size: 9px; font-weight: 700; margin-top: 8px; }
.li-mock { border: 1px solid rgba(10,102,194,.35); border-radius: 5px; overflow: hidden; }
.li-topbar { background: #0A66C2; padding: 7px 12px; display: flex; align-items: center; gap: 7px; }
.li-in { background: #fff; border-radius: 3px; padding: 1px 3px; font-size: 9px; font-weight: 700; color: #0A66C2; }
.li-topbar-title { font-size: 10px; font-weight: 600; color: #fff; }
.li-topbar-status { margin-left: auto; font-family: var(--fm); font-size: 7px; color: rgba(255,255,255,.7); display: flex; align-items: center; gap: 4px; }
.li-topbar-status::before { content:''; width:4px; height:4px; border-radius:50%; background:#4ade80; display:inline-block; }
.li-body { padding: 12px; }
.li-profile { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; }
.li-avatar { width: 32px; height: 32px; border-radius: 50%; background: var(--surf2); border: 1px solid var(--border2); display: flex; align-items: center; justify-content: center; font-size: 13px; flex-shrink: 0; }
.li-name { font-size: 11px; font-weight: 600; color: var(--white); }
.li-role { font-size: 9px; color: var(--t3); }
.li-message { background: var(--surf); border: 1px solid var(--border); border-radius: 4px; padding: 9px; font-size: 10px; color: var(--t2); line-height: 1.65; margin-bottom: 9px; }
.li-message strong { color: var(--white); }
.li-actions { display: flex; gap: 6px; }
.li-send { padding: 5px 12px; border-radius: 3px; background: var(--teal); color: var(--bg); font-family: var(--fm); font-size: 8px; font-weight: 700; border: none; cursor: pointer; }
.li-edit { padding: 5px 10px; border-radius: 3px; background: transparent; border: 1px solid var(--border2); color: var(--t3); font-family: var(--fm); font-size: 8px; cursor: pointer; }
.li-queue { font-family: var(--fm); font-size: 8px; color: var(--t3); margin-top: 8px; }
.li-queue strong { color: var(--teal-dim); }

/* ── GOOGLE VS TABLE ──────────────────────────────── */
.vs-table { margin-top: 44px; border: 1px solid var(--border2); border-radius: 8px; overflow: hidden; }
.vs-thead { display: grid; grid-template-columns: 2fr 1fr 1fr 1.4fr; background: var(--surf2); border-bottom: 1px solid var(--border); }
.vs-th { padding: 11px 16px; font-family: var(--fm); font-size: 9px; letter-spacing: 1px; text-transform: uppercase; font-weight: 700; color: var(--t3); }
.vs-th.ours { color: var(--teal); background: rgba(0,200,200,.05); border-left: 2px solid var(--teal); }
.vs-row { display: grid; grid-template-columns: 2fr 1fr 1fr 1.4fr; border-bottom: 1px solid rgba(0,200,200,.04); }
.vs-row:nth-child(even) { background: rgba(255,255,255,.01); }
.vs-cell { padding: 10px 16px; font-size: 12px; color: var(--t2); display: flex; align-items: center; gap: 6px; }
.vs-cell.feat { color: var(--white); font-weight: 500; }
.vs-cell.ours { background: rgba(0,200,200,.04); border-left: 2px solid rgba(0,200,200,.15); color: var(--white); font-weight: 600; }
.check { color: var(--teal); font-weight: 700; font-size: 14px; }
.cross { color: #ef4444; font-weight: 700; font-size: 14px; }
.part  { color: var(--teal-dim); font-weight: 700; font-size: 14px; }
.vs-footnote { font-family: var(--fm); font-size: 9px; color: var(--t3); margin-top: 12px; padding: 10px 14px; background: rgba(239,68,68,.04); border: 1px solid rgba(239,68,68,.1); border-radius: 5px; }

/* ── REGIONS ──────────────────────────────────────── */
.regions-list { display: flex; flex-direction: column; gap: 8px; margin-top: 44px; }
.region-row { background: var(--surf); border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }
.region-head {
  padding: 13px 18px; display: flex; align-items: center; gap: 12px;
  background: var(--surf2); border-bottom: 1px solid var(--border);
  cursor: pointer; transition: background .15s;
}
.region-head:hover { background: var(--surf3); }
.region-flag { font-size: 20px; }
.region-name { font-size: 14px; font-weight: 700; color: var(--white); }
.region-count { font-family: var(--fm); font-size: 8px; padding: 2px 7px; border-radius: 2px; border: 1px solid var(--border2); color: var(--t3); margin-left: auto; }
.region-chevron { color: var(--t3); font-size: 11px; transition: transform .2s; }
.region-body { display: none; flex-wrap: wrap; gap: 6px; padding: 14px 18px; }
.region-body.open { display: flex; }
.region-chip {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 5px 12px; border-radius: 20px;
  border: 1px solid var(--border); background: rgba(0,200,200,.03);
  font-size: 12px; font-weight: 500; color: var(--t2);
  cursor: pointer; transition: all .12s; white-space: nowrap;
}
.region-chip:hover { border-color: var(--border2); color: var(--teal); }
.region-chip.on { border-color: var(--teal); color: var(--teal); background: rgba(0,200,200,.1); font-weight: 700; }

/* ── LOCAL SOURCES ────────────────────────────────── */
.sources-box {
  margin-top: 32px;
  background: var(--surf); border: 1px solid var(--border2); border-radius: 10px; overflow: hidden;
}
.sources-head {
  background: var(--surf2); padding: 12px 18px;
  border-bottom: 2px solid var(--teal);
  display: flex; align-items: center; gap: 10px;
}
.sources-head-title { font-family: var(--fm); font-size: 9px; letter-spacing: 1.5px; color: var(--t2); text-transform: uppercase; }
.sources-active { margin-left: auto; font-family: var(--fm); font-size: 8px; color: var(--teal); display: flex; align-items: center; gap: 4px; }
.sources-active::before { content:''; width:5px; height:5px; border-radius:50%; background:var(--teal); display:inline-block; animation:blink 1.4s infinite; }
.sources-cols { display: grid; grid-template-columns: repeat(3,1fr); }
.sources-col { padding: 16px 18px; border-right: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.sources-col:nth-child(3), .sources-col:nth-child(6) { border-right: none; }
.sources-col:nth-child(4), .sources-col:nth-child(5), .sources-col:nth-child(6) { border-bottom: none; }
.sources-col-label { font-family: var(--fm); font-size: 8px; letter-spacing: 1.5px; color: var(--teal); text-transform: uppercase; margin-bottom: 10px; display: flex; align-items: center; gap: 6px; }
.sources-col-label::before { content:''; width:5px; height:5px; border-radius:50%; background: var(--teal); }
.source-item { font-size: 11px; color: var(--t2); padding: 4px 0; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(0,200,200,.05); }
.source-item:last-of-type { border-bottom: none; }
.source-tag { font-family: var(--fm); font-size: 7px; padding: 1px 5px; border-radius: 2px; border: 1px solid var(--border2); color: var(--teal); background: rgba(0,200,200,.05); white-space: nowrap; margin-left: 6px; flex-shrink: 0; }
.sources-footer { background: var(--surf2); padding: 10px 18px; border-top: 1px solid var(--border); display: flex; gap: 28px; flex-wrap: wrap; }
.sources-stat { font-family: var(--fm); font-size: 9px; color: var(--t2); }
.sources-stat strong { color: var(--teal); }
.sources-explainer { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; margin-top: 16px; }
.explainer-card { background: var(--surf); border: 1px solid var(--border); border-radius: 8px; padding: 18px; }
.explainer-icon { font-size: 20px; margin-bottom: 10px; }
.explainer-title { font-size: 14px; font-weight: 700; margin-bottom: 6px; color: var(--white); }
.explainer-desc { font-size: 12px; color: var(--t2); line-height: 1.65; }

/* ── PRICING ──────────────────────────────────────── */
.pricing-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; margin-top: 52px; align-items: start; }
.price-card { background: var(--surf); border: 1.5px solid var(--border); border-radius: 10px; padding: 28px; position: relative; transition: transform .2s; }
.price-card:hover { transform: translateY(-4px); }
.price-card.pop { border-color: var(--teal); border-width: 2px; background: linear-gradient(135deg, rgba(0,200,200,.06), var(--surf)); }
.price-card.pop::before { content:'MOST POPULAR'; position:absolute; top:14px; right:14px; font-family:var(--fm); font-size:7px; letter-spacing:1.5px; color:var(--teal); background:rgba(0,200,200,.1); border:1px solid rgba(0,200,200,.25); padding:3px 8px; border-radius:2px; }
.price-tier { font-family: var(--fm); font-size: 9px; letter-spacing: 2px; color: var(--t3); text-transform: uppercase; margin-bottom: 12px; }
.price-amount { font-size: 50px; font-weight: 900; letter-spacing: -2px; color: var(--white); line-height: 1; }
.price-amount em { font-size: 22px; color: var(--t3); font-style: normal; }
.price-period { font-family: var(--fm); font-size: 8px; color: var(--t3); margin-bottom: 16px; letter-spacing: .5px; }
.price-tag { font-size: 13px; color: var(--t2); margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid var(--border); line-height: 1.5; }
.price-features { list-style: none; margin-bottom: 26px; display: flex; flex-direction: column; gap: 8px; }
.price-features li { display: flex; align-items: flex-start; gap: 7px; font-size: 12px; color: var(--t2); }
.price-features li::before { content:'✓'; color: var(--teal); font-weight: 700; flex-shrink: 0; margin-top: 1px; }
.price-features li.no { color: var(--t3); }
.price-features li.no::before { content:'·'; color: var(--t3); }
.price-btn { width: 100%; padding: 12px; border-radius: 6px; font-size: 14px; font-weight: 700; cursor: pointer; text-align: center; text-decoration: none; display: block; letter-spacing: -.2px; transition: all .15s; }
.price-btn-solid { background: var(--teal); color: var(--bg); border: none; }
.price-btn-solid:hover { background: #28e0e0; }
.price-btn-ghost { border: 1px solid var(--border2); background: transparent; color: var(--t2); }
.price-btn-ghost:hover { border-color: var(--teal); color: var(--teal); }

/* ── TESTIMONIALS ─────────────────────────────────── */
.test-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; margin-top: 44px; }
.test-card { background: var(--surf); border: 1px solid var(--border); border-radius: 8px; padding: 22px; transition: border-color .15s; }
.test-card:hover { border-color: var(--border2); }
.test-stars { color: var(--teal); font-size: 12px; margin-bottom: 10px; letter-spacing: 2px; }
.test-quote { font-size: 13px; color: var(--t2); line-height: 1.7; margin-bottom: 14px; font-style: italic; }
.test-name { font-size: 12px; font-weight: 700; color: var(--white); }
.test-role { font-size: 10px; color: var(--t3); }

/* ── FAQ ──────────────────────────────────────────── */
.faq-list { margin-top: 44px; display: flex; flex-direction: column; gap: 3px; }
.faq-item { background: var(--surf); border: 1px solid var(--border); border-radius: 6px; overflow: hidden; transition: border-color .15s; }
.faq-item.open, .faq-item:hover { border-color: var(--border2); }
.faq-q { display: flex; align-items: center; justify-content: space-between; padding: 16px 18px; cursor: pointer; font-size: 14px; font-weight: 600; color: var(--white); }
.faq-icon { font-size: 18px; color: var(--teal); font-weight: 700; transition: transform .2s; }
.faq-item.open .faq-icon { transform: rotate(45deg); }
.faq-a { display: none; padding: 0 18px 16px; font-size: 13px; color: var(--t2); line-height: 1.7; }
.faq-item.open .faq-a { display: block; }

/* ── CTA BAND ─────────────────────────────────────── */
.cta-band {
  background: linear-gradient(135deg, rgba(0,200,200,.08), rgba(0,200,200,.03));
  border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
}
.cta-inner { max-width: 660px; margin: 0 auto; padding: 88px 40px; text-align: center; }
.cta-h { font-size: clamp(36px, 5vw, 64px); font-weight: 900; line-height: 1; letter-spacing: -1.5px; margin-bottom: 14px; color: var(--white); }
.cta-sub { font-size: 15px; color: var(--t2); margin-bottom: 32px; }
.cta-form { display: flex; gap: 10px; max-width: 440px; margin: 0 auto 13px; }
.cta-email { flex: 1; background: var(--surf); border: 1px solid var(--border2); border-radius: 6px; color: var(--white); font-family: var(--ff); font-size: 14px; padding: 12px 16px; outline: none; transition: border-color .15s; }
.cta-email:focus { border-color: var(--teal); }
.cta-email::placeholder { color: var(--t3); }
.cta-note { font-family: var(--fm); font-size: 9px; color: var(--t3); letter-spacing: .5px; }

/* ── FOOTER ───────────────────────────────────────── */
footer {
  background: var(--surf);
  border-top: 2px solid var(--teal);
  padding: 36px 48px;
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 16px;
}
footer img { height: 44px; width: auto; }
.footer-links { display: flex; gap: 22px; flex-wrap: wrap; }
.footer-link { font-size: 11px; color: var(--t3); transition: color .15s; }
.footer-link:hover { color: var(--teal); }
.footer-copy { font-family: var(--fm); font-size: 8px; color: var(--t3); }

/* ── MODAL ────────────────────────────────────────── */
.modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.8); z-index: 500; display: none; align-items: center; justify-content: center; backdrop-filter: blur(8px); }
.modal-overlay.open { display: flex; }
.modal { background: var(--surf); border: 1px solid var(--border2); border-radius: 12px; width: 520px; max-width: 95vw; padding: 30px; position: relative; box-shadow: 0 40px 100px rgba(0,0,0,.6); }
.modal-logo { height: 36px; width: auto; margin-bottom: 16px; display: block; }
.modal-title { font-size: 24px; font-weight: 900; letter-spacing: -.5px; margin-bottom: 4px; color: var(--white); }
.modal-sub { font-size: 13px; color: var(--t2); margin-bottom: 22px; }
.modal-plans { display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; margin-bottom: 20px; }
.modal-plan { border: 1.5px solid var(--border); border-radius: 6px; padding: 11px 8px; cursor: pointer; text-align: center; transition: all .12s; }
.modal-plan:hover { border-color: var(--border2); }
.modal-plan.sel { border-color: var(--teal); background: rgba(0,200,200,.07); }
.plan-name { font-family: var(--fm); font-size: 8px; letter-spacing: 1px; color: var(--t3); text-transform: uppercase; margin-bottom: 3px; }
.plan-price { font-size: 18px; font-weight: 900; color: var(--white); letter-spacing: -.5px; }
.plan-price em { font-size: 10px; color: var(--t3); font-style: normal; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.form-group { margin-bottom: 12px; }
.form-label { display: block; font-family: var(--fm); font-size: 8px; letter-spacing: 1.5px; color: var(--t3); text-transform: uppercase; margin-bottom: 4px; }
.form-input, .form-select { width: 100%; background: var(--bg); border: 1px solid var(--border); border-radius: 5px; color: var(--white); font-family: var(--ff); font-size: 13px; padding: 10px 13px; outline: none; transition: border-color .15s; }
.form-input:focus, .form-select:focus { border-color: var(--teal); }
.form-input::placeholder { color: var(--t3); }
.form-select option { background: var(--surf2); }
.modal-submit { width: 100%; padding: 12px; border-radius: 6px; border: none; background: var(--teal); color: var(--bg); font-size: 14px; font-weight: 700; cursor: pointer; transition: all .15s; margin-top: 4px; }
.modal-submit:hover { background: #28e0e0; }
.modal-close { position: absolute; top: 14px; right: 14px; background: none; border: none; color: var(--t3); font-size: 20px; cursor: pointer; line-height: 1; }
.modal-close:hover { color: var(--white); }
.modal-note { text-align: center; font-family: var(--fm); font-size: 8px; color: var(--t3); margin-top: 12px; }
.modal-note a { color: var(--teal); }
#toast { position: fixed; bottom: 20px; right: 20px; background: var(--surf2); border: 1px solid var(--border2); border-radius: 6px; padding: 10px 16px; font-family: var(--fm); font-size: 11px; color: var(--teal); z-index: 9999; display: none; }

/* ── RESPONSIVE ───────────────────────────────────── */
@media (max-width: 768px) {
  nav { padding: 0 20px; }
  .nav-links { display: none; }
  .nav-logo img { height: 40px; }
  .steps-grid, .features-grid, .pricing-grid, .test-grid,
  .alerts-grid, .territory-cols, .sources-cols, .sources-explainer { grid-template-columns: 1fr; }
  .hero-stats { gap: 28px; }
  .mockup-sidebar { display: none; }
  .mockup-app { grid-template-columns: 1fr; }
  .mockup-stats { grid-template-columns: 1fr 1fr; }
  .cta-form { flex-direction: column; }
  footer { flex-direction: column; text-align: center; }
  .footer-links { justify-content: center; }
  .modal-plans { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; }
  .section-inner { padding: 64px 24px; }
}

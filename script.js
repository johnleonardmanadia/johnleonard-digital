// ===== EDIT HERE. Empty "" values are skipped automatically. =====
var LINKS = { formspree: "", booking: "", email: "johnleonardmanadia@gmail.com", linkedin: "", facebook: "", response: "" };   // response example: "24-48 hours"
var WORKS = [   // img: screenshot path, demo: live link, cat: "Funnel" or "Website" (decides which button shows it; default Funnel)
  { title: "Project name", type: "Type of funnel", industry: "Industry", img: "", demo: "", cat: "Funnel" },
  { title: "Project name", type: "Type of funnel", industry: "Industry", img: "", demo: "", cat: "Funnel" },
  { title: "Project name", type: "Type of funnel", industry: "Industry", img: "", demo: "", cat: "Funnel" },
  { title: "Project name", type: "Type of funnel", industry: "Industry", img: "", demo: "", cat: "Funnel" },
  { title: "Project name", type: "Type of website", industry: "Industry", img: "", demo: "", cat: "Website" },
  { title: "Project name", type: "Type of website", industry: "Industry", img: "", demo: "", cat: "Website" },
  { title: "Project name", type: "Type of website", industry: "Industry", img: "", demo: "", cat: "Website" }
];

document.documentElement.classList.add("js");
document.querySelectorAll("[data-book]").forEach(function (a) {
  if (LINKS.booking) { a.href = LINKS.booking; a.target = "_blank"; a.rel = "noopener"; }
});
if (LINKS.email) {
  var m = document.getElementById("mail-a");
  m.href = "mailto:" + LINKS.email; m.textContent = LINKS.email;
  document.getElementById("mail").hidden = false;
}

var pvd = document.createElement("dialog"); pvd.className = "pv"; pvd.setAttribute("aria-labelledby", "pv-t");
pvd.innerHTML = '<div class="pv-in"><div class="pv-h"><div><h3 id="pv-t"></h3><p id="pv-m"></p></div><a id="pv-a" target="_blank" rel="noopener" hidden>OPEN LIVE DEMO</a><button class="pv-x" type="button" aria-label="Close">&times;</button></div><div class="pv-b" id="pv-b"></div></div>';
document.body.append(pvd);
function openPV(w) {
  pvd.querySelector("#pv-t").textContent = w.title; pvd.querySelector("#pv-m").textContent = w.type + " · " + w.industry;
  var a = pvd.querySelector("#pv-a"), bd = pvd.querySelector("#pv-b"); bd.innerHTML = "";
  if (w.demo) { a.href = w.demo; a.hidden = false; } else a.hidden = true;
  if (w.img) { var im = document.createElement("img"); im.src = w.img; im.alt = w.title + " design"; bd.append(im); }
  else if (w.demo) { var f = document.createElement("iframe"); f.src = w.demo; f.title = w.title + " live preview"; f.loading = "lazy"; bd.append(f); }
  else { var ph = document.createElement("div"); ph.className = "ph"; ph.textContent = "Design preview coming soon."; bd.append(ph); }
  if (pvd.showModal) pvd.showModal();
}
pvd.querySelector(".pv-x").addEventListener("click", function () { pvd.close(); });
pvd.addEventListener("click", function (e) { if (e.target === pvd) pvd.close(); });
pvd.addEventListener("close", function () { pvd.querySelector("#pv-b").innerHTML = ""; });
var grid = document.getElementById("works-grid");
WORKS.forEach(function (w) {
  var d = document.createElement("div"); d.className = "work rv"; d.dataset.cat = w.cat || "Funnel";
  var s = document.createElement("div"); s.className = "shot"; if (w.img) { var im = document.createElement("img"); im.src = w.img; im.alt = w.title; s.append(im); } else s.textContent = w.title;
  var b = document.createElement("div"); b.className = "body";
  var h = document.createElement("h3"); h.textContent = w.title;
  var t = document.createElement("p"); t.textContent = "Type: " + w.type;
  var i = document.createElement("p"); i.textContent = "Industry: " + w.industry;
  b.append(h, t, i);
  var vb = document.createElement("button"); vb.type = "button"; vb.className = "vbtn"; vb.textContent = "VIEW DESIGN"; vb.setAttribute("aria-label", "View design: " + w.title); b.append(vb);
  d.addEventListener("click", function (e) { if (e.target.closest("a")) return; openPV(w); });
  if (w.demo) {
    var a = document.createElement("a"); a.className = "btn"; a.href = w.demo; a.target = "_blank"; a.rel = "noopener"; a.textContent = "VIEW LIVE DEMO"; b.append(a);
  }
  d.append(s, b); grid.append(d);
});
var P = function (a, t) { return { a: a, t: t }; };
var WF = [
  { t: "Lead Capture", d: "Every sign-up is saved, tagged and confirmed, and the business owner is notified right away.", s: [P("Form", "Visitor submits the opt-in form"), P("Systeme.io", "Contact is created in the list"), P("Tag", "Add tag: new-lead"), P("Page", "Show the thank-you page"), P("Email", "Send the welcome email with the resource"), P("Email", "Alert the owner about the new lead")] },
  { t: "Booking Request", d: "A new inquiry is sorted and answered quickly so the person is still interested when you reply.", s: [P("Form", "Visitor sends a booking request"), P("Systeme.io", "Contact is saved"), P("Tag", "Add tag: needs-reply"), P("Email", "Alert the owner about the request")], b: [{ l: "Replied", s: [P("Tag", "Remove tag: needs-reply"), P("Tag", "Add tag: in-conversation")] }, { l: "No reply in 1 day", s: [P("Delay", "Wait 1 day"), P("Email", "Send a friendly reminder to the owner"), P("Tag", "Add tag: follow-up-due")] }] },
  { t: "Appointment Confirmation", d: "Once a visit is arranged, the person gets a clear confirmation and a reminder before the date.", s: [P("Booking", "Appointment is arranged"), P("Tag", "Add tag: booked"), P("Email", "Send the confirmation email"), P("Delay", "Wait until 1 day before")], b: [{ l: "Confirmed", s: [P("Email", "Send the reminder with details"), P("Tag", "Add tag: confirmed")] }, { l: "Needs to reschedule", s: [P("Email", "Send the reschedule link"), P("Tag", "Add tag: reschedule")] }] },
  { t: "Follow-up Sequence", d: "A short series of helpful emails that stops as soon as the person replies.", s: [P("Tag", "Contact receives tag: new-lead"), P("Delay", "Wait 1 day"), P("Condition", "Replied or booked?")], b: [{ l: "Replied", s: [P("Tag", "Add tag: engaged"), P("Rule", "Stop the sequence"), P("Email", "Owner reviews the reply")] }, { l: "Booked", s: [P("Tag", "Add tag: booked"), P("Rule", "Remove from the sequence"), P("Email", "Send the confirmation")] }, { l: "No reply", s: [P("Email", "Send a helpful tip email"), P("Delay", "Wait 2 days"), P("Email", "Send a short example"), P("Email", "Soft offer to talk")] }] },
  { t: "No-Show Recovery", d: "If someone misses a visit, a friendly message offers an easy way to rebook.", s: [P("Booking", "Visit is marked as missed"), P("Tag", "Add tag: no-show"), P("Delay", "Wait 2 hours"), P("Email", "Send a friendly check-in")], b: [{ l: "Rebooked", s: [P("Tag", "Remove tag: no-show"), P("Tag", "Add tag: booked")] }, { l: "No answer", s: [P("Delay", "Wait 3 days"), P("Email", "Send one last rebook link"), P("Tag", "Add tag: cold")] }] },
  { t: "Opt-in + Thank-you Setup", d: "A simple page, a short form and a clear confirmation, so every sign-up knows it worked.", s: [P("Page", "Visitor opens the landing page"), P("Form", "Fills in name and email"), P("Systeme.io", "Contact is saved"), P("Tag", "Add tag: subscriber"), P("Page", "Thank-you page with the download"), P("Email", "Confirmation email is sent")] },
  { t: "Welcome Email Series", d: "A few short, useful emails after sign-up, before any offer is made.", s: [P("Tag", "Contact receives tag: subscriber"), P("Email", "Email 1: welcome and download"), P("Delay", "Wait 1 day"), P("Email", "Email 2: one quick tip"), P("Delay", "Wait 2 days"), P("Email", "Email 3: short example"), P("Delay", "Wait 2 days"), P("Email", "Email 4: soft offer")] },
  { t: "Inquiry Notification", d: "The business owner is alerted the moment a new inquiry comes in.", s: [P("Form", "Inquiry form is submitted"), P("Systeme.io", "Contact is saved"), P("Tag", "Add tag: new-inquiry"), P("Email", "Instant email alert to the owner"), P("Rule", "Status set to: new")] },
  { t: "Booking Reminder Flow", d: "Reminders go out before the date, with an easy way to reschedule.", s: [P("Booking", "Date is set"), P("Email", "Send the confirmation"), P("Delay", "Wait until 2 days before"), P("Email", "Send the first reminder")], b: [{ l: "Confirms", s: [P("Tag", "Add tag: confirmed")] }, { l: "No reply", s: [P("Delay", "Wait 1 day"), P("Email", "Send a second reminder"), P("Email", "Include the reschedule link")] }] },
  { t: "Lead Routing", d: "New leads are sorted by their answers so each one gets the right next step.", s: [P("Form", "Lead answers the qualifying questions"), P("Systeme.io", "Contact is saved"), P("Condition", "How ready are they to start?")], b: [{ l: "Ready now", s: [P("Tag", "Add tag: hot"), P("Email", "Send the booking link"), P("Email", "Alert the owner")] }, { l: "Exploring", s: [P("Tag", "Add tag: warm"), P("Email", "Send a helpful guide"), P("Delay", "Wait 3 days"), P("Email", "Invite to book a call")] }, { l: "Just curious", s: [P("Tag", "Add tag: cold"), P("Email", "Add to the newsletter list")] }] }
];
var wg = document.getElementById("wf-grid"), cars = document.getElementById("cars"), dlg = document.getElementById("wfd");
var cv = document.getElementById("cv"), cvs = document.getElementById("cvs"), g = document.getElementById("cvg"), st = { k: 1, x: 0, y: 0 }, FW = 300;
var NS = "http://www.w3.org/2000/svg", NW = 220, NH = 62, GY = 40, GX = 26;
var COL = { Form: "#2563eb", Tag: "#7a45d6", Email: "#d9480f", Delay: "#6b7280", Condition: "#b7791f", Page: "#0f766e", "Systeme.io": "#4a63e6", Booking: "#0f766e", Rule: "#7a45d6" };
function el(n, at, tx) { var e = document.createElementNS(NS, n); for (var k in at) e.setAttribute(k, at[k]); if (tx != null) e.textContent = tx; return e; }
function wrap(t, m) { if (t.length <= m) return [t]; var i = t.lastIndexOf(" ", m); if (i < 0) i = m; return [t.slice(0, i), t.slice(i + 1)]; }
function node(cx, y, n, s) {
  var x = cx - NW / 2, c = COL[s.a] || "#4a63e6", L = wrap(n + ". " + s.t, 30);
  g.append(el("rect", { x: x, y: y, width: NW, height: NH, rx: 9, fill: "#fff", stroke: "#dedbcf" }), el("rect", { x: x + 10, y: y + 10, width: 3, height: 12, rx: 1.5, fill: c }), el("text", { x: x + 18, y: y + 20, "font-size": 9, "font-weight": 700, fill: c }, s.a.toUpperCase()));
  L.forEach(function (l, i) { g.append(el("text", { x: x + 12, y: y + 38 + i * 15, "font-size": 12, "font-weight": 600, fill: "#10132b" }, l)); });
}
function arrow(x, y1, y2) { g.append(el("path", { d: "M" + x + " " + y1 + "V" + y2, stroke: "#6b73d9", "stroke-width": 1.6, fill: "none" }), el("path", { d: "M" + (x - 4) + " " + (y2 - 7) + "L" + x + " " + y2 + "L" + (x + 4) + " " + (y2 - 7), stroke: "#6b73d9", "stroke-width": 1.6, fill: "none" })); }
function flow(w) {
  g.innerHTML = ""; var cols = w.b ? w.b.length : 1, W = cols * NW + (cols - 1) * GX + 60, cx = W / 2, y = 24, n = 1, mx = 0;
  w.s.forEach(function (s, i) { node(cx, y, n++, s); y += NH; if (i < w.s.length - 1) { arrow(cx, y, y + GY); y += GY; } });
  if (w.b) {
    var by = y + 22, xs = w.b.map(function (_, i) { return 30 + NW / 2 + i * (NW + GX); });
    g.append(el("path", { d: "M" + cx + " " + y + "V" + by + "M" + xs[0] + " " + by + "H" + xs[xs.length - 1], stroke: "#6b73d9", "stroke-width": 1.6, fill: "none" }));
    w.b.forEach(function (b, i) {
      var yy = by + 14; g.append(el("path", { d: "M" + xs[i] + " " + by + "V" + yy, stroke: "#6b73d9", "stroke-width": 1.6, fill: "none" }), el("rect", { x: xs[i] - 62, y: yy, width: 124, height: 26, rx: 13, fill: "#fff", stroke: "#c9cdf2" }), el("text", { x: xs[i], y: yy + 17, "text-anchor": "middle", "font-size": 11, "font-weight": 600, fill: "#3b4290" }, b.l));
      yy += 26; arrow(xs[i], yy, yy + 22); yy += 22;
      b.s.forEach(function (s, j) { node(xs[i], yy, n++, s); yy += NH; if (j < b.s.length - 1) { arrow(xs[i], yy, yy + GY); yy += GY; } });
      mx = Math.max(mx, yy);
    });
    y = mx;
  } else y += 0;
  return { W: W, H: y + 30 };
}
function ap() { g.setAttribute("transform", "translate(" + st.x + " " + st.y + ") scale(" + st.k + ")"); }
function fit() { var cw = cv.clientWidth, k = Math.min(1.2, cw / FW * .96); st = { k: k, x: (cw - FW * k) / 2, y: 10 }; ap(); }
function zm(f, p) { var nk = Math.min(4, Math.max(.3, st.k * f)), r = nk / st.k; st.x = p.x - (p.x - st.x) * r; st.y = p.y - (p.y - st.y) * r; st.k = nk; ap(); }
function pt(e) { var r = cv.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; }
function mid() { return { x: cv.clientWidth / 2, y: cv.clientHeight / 2 }; }
function open(w) {
  document.getElementById("wfd-t").textContent = w.t; document.getElementById("wfd-d").textContent = w.d;
  var ol = document.getElementById("wfd-s"); ol.innerHTML = "";
  w.s.concat.apply(w.s, (w.b || []).map(function (b) { return b.s; })).forEach(function (s) { var li = document.createElement("li"); li.textContent = s.t; ol.append(li); });
  if (dlg.showModal) dlg.showModal();
  var r = flow(w); FW = r.W; cvs.setAttribute("viewBox", "0 0 " + cv.clientWidth + " " + cv.clientHeight); fit();
}
var drag = false;
WF.forEach(function (w, i) {
  var b = document.createElement("button"); b.type = "button";
  if (i < 5) { b.className = "wfc rv"; b.innerHTML = '<span class="ln" aria-hidden="true"></span><span class="go" aria-hidden="true">VIEW FLOW</span><span class="t"></span>'; b.querySelector(".t").textContent = w.t; wg.append(b); }
  else { b.className = "cc c" + (i % 4); b.innerHTML = "<span></span>"; b.firstChild.textContent = w.t; cars.append(b); }
  b.addEventListener("click", function () { if (!drag) open(w); });
});
document.getElementById("cl").onclick = function () { cars.scrollBy({ left: -240, behavior: "smooth" }); };
document.getElementById("cr").onclick = function () { cars.scrollBy({ left: 240, behavior: "smooth" }); };
var cx0 = 0, cs0 = 0, cd = false;
cars.addEventListener("pointerdown", function (e) { if (e.pointerType !== "mouse") return; cd = true; drag = false; cx0 = e.clientX; cs0 = cars.scrollLeft; cars.style.scrollSnapType = "none"; });
window.addEventListener("pointermove", function (e) { if (!cd) return; var d = e.clientX - cx0; if (Math.abs(d) > 5) drag = true; cars.scrollLeft = cs0 - d; });
window.addEventListener("pointerup", function () { if (!cd) return; cd = false; cars.style.scrollSnapType = ""; setTimeout(function () { drag = false; }, 0); });
document.getElementById("zi").onclick = function () { zm(1.25, mid()); };
document.getElementById("zo").onclick = function () { zm(0.8, mid()); };
document.getElementById("zr").onclick = fit;
cv.addEventListener("wheel", function (e) { e.preventDefault(); zm(e.deltaY < 0 ? 1.1 : 0.9, pt(e)); }, { passive: false });
var dr = null;
cv.addEventListener("pointerdown", function (e) { dr = pt(e); cv.setPointerCapture(e.pointerId); });
cv.addEventListener("pointermove", function (e) { if (!dr) return; var p = pt(e); st.x += p.x - dr.x; st.y += p.y - dr.y; dr = p; ap(); });
cv.addEventListener("pointerup", function () { dr = null; });
document.getElementById("wfd-x").addEventListener("click", function () { dlg.close(); });
dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
var lw = document.getElementById("lw"), ln = document.getElementById("ln");
ln.innerHTML = lw.querySelector(".base").innerHTML;
lw.addEventListener("mousemove", function (e) { var r = lw.getBoundingClientRect(); lw.style.setProperty("--x", (e.clientX - r.left) + "px"); lw.style.setProperty("--y", (e.clientY - r.top) + "px"); });
var fl = document.getElementById("fl");
[["email", "mailto:", "Email"], ["linkedin", "", "LinkedIn"], ["facebook", "", "Facebook"]].forEach(function (x) {
  var v = LINKS[x[0]]; if (!v) return;
  var li = document.createElement("li"), a = document.createElement("a"); a.href = x[1] + v; a.textContent = x[0] === "email" ? v : x[2]; if (x[0] !== "email") { a.target = "_blank"; a.rel = "noopener"; } li.append(a); fl.append(li);
});
if (LINKS.response) { document.getElementById("resp-t").textContent = LINKS.response; document.getElementById("resp").hidden = false; }
var io = new IntersectionObserver(function (es) {
  es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".rv").forEach(function (el) { io.observe(el); });

(function(){var c=document.getElementById("cols");if(!c)return;var n=c.children.length,d=document.createElement("div");d.className="sdots";d.setAttribute("aria-hidden","true");for(var i=0;i<n;i++)d.appendChild(document.createElement("i"));c.after(d);
function u(){var k=c.children[1]?c.children[1].offsetLeft-c.children[0].offsetLeft:1,x=Math.round(c.scrollLeft/k);x=Math.max(0,Math.min(n-1,x));[].forEach.call(d.children,function(e,j){e.className=j===x?"on":""})}
c.addEventListener("scroll",u,{passive:true});u()})();

var TESTIMONIALS = [];   // add REAL ones only: { quote: "...", name: "...", role: "Client, Business" }
(function () {
  var TM = TESTIMONIALS.length ? TESTIMONIALS : [0, 1, 2].map(function () { return { quote: "Your first client’s feedback will appear here.", name: "Client name", role: "Role, Business", ph: true }; });
  var tg = document.getElementById("tgrid"), tpg = document.getElementById("tpg"), tpi = document.getElementById("tpi"), tpn = 0, TPER = 3, tpages = Math.ceil(TM.length / TPER);
  function showT() {
    tg.innerHTML = "";
    TM.slice(tpn * TPER, tpn * TPER + TPER).forEach(function (t) { var q = document.createElement("blockquote"), c = document.createElement("cite"), s = document.createElement("small"); if (t.ph) q.className = "ph"; q.append(document.createTextNode(t.quote)); c.append(document.createTextNode(t.name)); s.textContent = t.role || ""; c.append(s); q.append(c); tg.append(q); });
    tpg.hidden = tpages < 2; tpi.textContent = (tpn + 1) + " / " + tpages;
  }
  document.getElementById("tprev").onclick = function () { tpn = (tpn - 1 + tpages) % tpages; showT(); };
  document.getElementById("tnext").onclick = function () { tpn = (tpn + 1) % tpages; showT(); };
  showT();
  if (LINKS.email) document.getElementById("tmail").href = "mailto:" + LINKS.email + "?subject=" + encodeURIComponent("My testimonial for John Leonard");
  var bg = document.getElementById("bg"), mn = document.getElementById("mn");
  function menu(o) { mn.classList.toggle("open", o); bg.classList.toggle("x", o); bg.setAttribute("aria-expanded", o); bg.setAttribute("aria-label", o ? "Close menu" : "Open menu"); }
  bg.onclick = function () { menu(!mn.classList.contains("open")); };
  mn.addEventListener("click", function (e) { if (e.target.closest("a")) menu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") menu(false); });
  document.addEventListener("click", function (e) { if (!e.target.closest(".nav")) menu(false); });
  var fb = document.createElement("div"), em = document.createElement("p"), wgr = document.getElementById("works-grid");
  fb.className = "wfil"; fb.setAttribute("role", "group"); fb.setAttribute("aria-label", "Choose project type");
  em.className = "wempty"; em.textContent = "Projects in this category are coming soon."; em.hidden = true;
  function pick(c, btn) {
    [].forEach.call(fb.children, function (x) { x.className = x === btn ? "on" : ""; x.setAttribute("aria-pressed", x === btn); });
    var n = 0; [].forEach.call(wgr.querySelectorAll(".work"), function (d) { var show = d.dataset.cat === c; d.hidden = !show; if (show) n++; });
    em.hidden = n > 0;
  }
  [["Funnel", "Funnel Design"], ["Website", "Website"]].forEach(function (x) { var b = document.createElement("button"); b.type = "button"; b.textContent = x[1]; b.onclick = function () { pick(x[0], b); }; fb.append(b); });
  wgr.before(fb); wgr.after(em); pick("Funnel", fb.children[0]);
  var f = document.getElementById("cf"), st = document.getElementById("cf-s"), bt = document.getElementById("cf-b");
  function say(m, k) { st.textContent = m; st.className = k || ""; }
  f.addEventListener("submit", function (e) {
    e.preventDefault(); var n = f.name, em = f.email, m = f.message, bad = [];
    [n, em, m].forEach(function (x) { x.classList.remove("bad"); });
    if (!n.value.trim()) bad.push(n); if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em.value.trim())) bad.push(em); if (m.value.trim().length < 10) bad.push(m);
    if (bad.length) { bad.forEach(function (x) { x.classList.add("bad"); }); say("Please enter your name, a valid email and a message of at least 10 characters.", "err"); bad[0].focus(); return; }
    if (f._gotcha.value) return;
    var v = LINKS.formspree;
    if (!v) { say("This form is not connected yet, so nothing was sent." + (LINKS.email ? " Please email " + LINKS.email + " directly." : ""), "err"); return; }
    var url = /^https?:/.test(v) ? v : "https://formspree.io/f/" + v;
    bt.disabled = true; bt.textContent = "Sending…"; say("");
    fetch(url, { method: "POST", headers: { "Accept": "application/json", "Content-Type": "application/json" }, body: JSON.stringify({ name: n.value.trim(), email: em.value.trim(), message: m.value.trim() }) })
      .then(function (r) { if (!r.ok) throw new Error("bad"); f.reset(); say("Thank you! Your inquiry was sent. I will reply to your email.", "ok"); })
      .catch(function () { say("Sorry, your message could not be sent." + (LINKS.email ? " Please try again or email " + LINKS.email + "." : " Please try again."), "err"); })
      .then(function () { bt.disabled = false; bt.textContent = "Send Inquiry"; });
  });
})();

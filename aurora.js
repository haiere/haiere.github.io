/* ============================================================
   aurora.js — "Aurora" space theme behaviour (additive layer)
   - Keeps html[data-theme] ("night" | "day") in sync with the
     site's existing `.dark` class + #theme-toggle (no 2nd toggle).
   - Stars (generated), meteors, cursor spotlight, click/tap FX.
   - No dependencies. Does not touch script.js.
   ============================================================ */
(function () {
  'use strict';

  var root = document.documentElement;
  var bg = document.getElementById('aurora-bg');
  var spot = document.querySelector('.spotlight');
  var canvas = document.getElementById('fx');
  if (!bg || !spot || !canvas) return;

  var TAU = Math.PI * 2;

  /* ---------- media queries ---------- */
  var mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var mqMobile = window.matchMedia('(max-width: 768px), (pointer: coarse)');

  function onChange(mq, fn) {
    if (mq.addEventListener) mq.addEventListener('change', fn);
    else if (mq.addListener) mq.addListener(fn);
  }

  /* ---------- low-end detection ---------- */
  var conn = navigator.connection || {};
  var lowEnd =
    (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) ||
    (navigator.deviceMemory && navigator.deviceMemory <= 2) ||
    conn.saveData === true;
  if (lowEnd) root.classList.add('aurora-lite');

  /** 1 on desktop, lower on mobile / low-end. */
  function intensity() {
    var s = mqMobile.matches ? 0.5 : 1;
    if (lowEnd) s *= 0.6;
    return s;
  }

  /* ============================================================
     THEME SYNC  (.dark  ->  data-theme)
     ============================================================ */
  var fx1 = { rgb: 'rgb(120,180,255)', clear: 'rgba(120,180,255,0)' };
  var fx2 = { rgb: 'rgb(167,139,250)', clear: 'rgba(167,139,250,0)' };

  function parseRgb(str, fallback) {
    var m = String(str).match(/\d+/g);
    if (!m || m.length < 3) return fallback;
    var c = m[0] + ',' + m[1] + ',' + m[2];
    return { rgb: 'rgb(' + c + ')', clear: 'rgba(' + c + ',0)' };
  }

  function readFxColors() {
    var cs = getComputedStyle(root);
    fx1 = parseRgb(cs.getPropertyValue('--fx-rgb-1'), fx1);
    fx2 = parseRgb(cs.getPropertyValue('--fx-rgb-2'), fx2);
  }

  function syncTheme() {
    var t = root.classList.contains('dark') ? 'night' : 'day';
    if (root.getAttribute('data-theme') !== t) root.setAttribute('data-theme', t);
    readFxColors();
  }
  new MutationObserver(syncTheme).observe(root, { attributes: true, attributeFilter: ['class'] });
  syncTheme();

  /* ============================================================
     STARS  (box-shadow dots, 3 depth layers, scroll parallax)
     ============================================================ */
  // [selector, base count, parallax fraction of viewport height]
  var STAR_LAYERS = [
    ['.stars-back', 90, 0.04],
    ['.stars-mid', 50, 0.09],
    ['.stars-front', 22, 0.16]
  ];
  var starEls = [];

  function rnd(min, max) { return min + Math.random() * (max - min); }

  function buildStars() {
    var k = intensity();
    starEls = [];
    STAR_LAYERS.forEach(function (l) {
      var el = bg.querySelector(l[0]);
      if (!el) return;
      var n = Math.max(8, Math.round(l[1] * k));
      var yMax = 100 + l[2] * 100 + 2; // extra rows so parallax never exposes an empty edge
      var a = [], b = [];
      for (var i = 0; i < n; i++) {
        var s = rnd(0, 100).toFixed(2) + 'vw ' + rnd(0, yMax).toFixed(2) + 'vh 0 0 var(--star-color)';
        (i % 2 ? a : b).push(s);
      }
      el.style.setProperty('--sa', a.join(','));
      el.style.setProperty('--sb', b.join(','));
      starEls.push({ el: el, f: l[2] });
    });
    applyParallax();
  }

  var parQueued = false;
  function applyParallax() {
    parQueued = false;
    if (mqReduce.matches) return;
    var max = Math.max(1, root.scrollHeight - window.innerHeight);
    var y = window.pageYOffset || root.scrollTop || 0;
    var p = Math.min(1, Math.max(0, y / max));
    for (var i = 0; i < starEls.length; i++) {
      starEls[i].el.style.transform =
        'translate3d(0,' + (-p * starEls[i].f * window.innerHeight).toFixed(1) + 'px,0)';
    }
  }
  window.addEventListener('scroll', function () {
    if (parQueued) return;
    parQueued = true;
    requestAnimationFrame(applyParallax);
  }, { passive: true });

  /* ============================================================
     METEORS  (CSS keyframes, JS only spawns/removes)
     ============================================================ */
  var meteorsEl = bg.querySelector('.meteors');
  var MAX_METEORS = 2;
  var meteorTimer = 0;

  function killAllMeteors() {
    if (meteorsEl) {
      var live = meteorsEl.querySelectorAll('.meteor');
      for (var i = 0; i < live.length; i++) live[i].remove();
    }
    clearTimeout(meteorTimer);
  }

  function spawnMeteor() {
    if (!meteorsEl || document.hidden || mqReduce.matches) return;
    if (meteorsEl.childElementCount >= MAX_METEORS) return;
    var w = window.innerWidth, h = window.innerHeight;
    var fromTop = Math.random() < 0.65;
    var x = fromTop ? w * rnd(0.35, 1) : w + 10;
    var y = fromTop ? -10 : h * rnd(0, 0.4);
    var m = document.createElement('div');
    m.className = 'meteor';
    m.style.left = x.toFixed(0) + 'px';
    m.style.top = y.toFixed(0) + 'px';
    m.style.setProperty('--dist', Math.min(Math.max(w, h) * rnd(0.5, 0.85), 900).toFixed(0) + 'px');
    m.style.setProperty('--dur', rnd(1.1, 1.9).toFixed(2) + 's');
    m.addEventListener('animationend', function () { m.remove(); }, { once: true });
    meteorsEl.appendChild(m);
  }

  function scheduleMeteor(first) {
    clearTimeout(meteorTimer);
    if (mqReduce.matches) return;
    var min = mqMobile.matches ? 10000 : 6000;
    var max = mqMobile.matches ? 24000 : 15000;
    if (lowEnd) { min *= 1.5; max *= 1.5; }
    var delay = first ? rnd(2500, 5000) : rnd(min, max);
    meteorTimer = setTimeout(function () { spawnMeteor(); scheduleMeteor(false); }, delay);
  }

  /* ============================================================
     SPOTLIGHT  (desktop: eased cursor follow, mobile: fixed glow)
     ============================================================ */
  var sx = 0, sy = 0, tx = 0, ty = 0, spotRaf = 0;

  function placeSpot() {
    spot.style.transform = 'translate3d(' + sx.toFixed(1) + 'px,' + sy.toFixed(1) + 'px,0)';
  }
  function canTrack() { return !mqMobile.matches && !mqReduce.matches; }

  function restSpot() {
    cancelAnimationFrame(spotRaf); spotRaf = 0;
    tx = sx = window.innerWidth * 0.5;
    ty = sy = window.innerHeight * (mqMobile.matches ? 0.28 : 0.34);
    placeSpot();
  }

  function spotLoop() {
    var dx = tx - sx, dy = ty - sy;
    if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
      sx = tx; sy = ty; placeSpot(); spotRaf = 0; return;
    }
    var stepX = Math.max(-36, Math.min(36, dx * 0.08)); // eased + speed-limited
    var stepY = Math.max(-36, Math.min(36, dy * 0.08));
    sx += stepX; sy += stepY;
    placeSpot();
    spotRaf = requestAnimationFrame(spotLoop);
  }

  window.addEventListener('pointermove', function (e) {
    if (e.pointerType !== 'mouse' || !canTrack()) return;
    tx = e.clientX; ty = e.clientY;
    if (!spotRaf) spotRaf = requestAnimationFrame(spotLoop);
  }, { passive: true });

  /* ============================================================
     FX CANVAS  (ripple + particles + glow, pooled, capped)
     ============================================================ */
  var ctx = canvas.getContext('2d');
  var cw = 0, ch = 0;

  function sizeCanvas() {
    var dpr = Math.min(window.devicePixelRatio || 1, lowEnd ? 1.25 : 2);
    cw = window.innerWidth; ch = window.innerHeight;
    canvas.width = Math.round(cw * dpr);
    canvas.height = Math.round(ch * dpr);
    if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  var MAX_P = 140, MAX_R = 4;
  var particles = [], ripples = [], i0;
  for (i0 = 0; i0 < MAX_P; i0++) particles.push({ on: false, x: 0, y: 0, vx: 0, vy: 0, age: 0, life: 1, size: 2, c: 0 });
  for (i0 = 0; i0 < MAX_R; i0++) ripples.push({ on: false, x: 0, y: 0, age: 0, dur: 800, maxR: 110, glow: true, born: 0 });

  var fxRaf = 0, lastT = 0;

  function takeRipple() {
    var oldest = ripples[0], i;
    for (i = 0; i < ripples.length; i++) {
      if (!ripples[i].on) return ripples[i];
      if (ripples[i].age > oldest.age) oldest = ripples[i];
    }
    return oldest; // cap reached: recycle the oldest
  }

  function explode(x, y) {
    if (!ctx) return;
    var reduced = mqReduce.matches;
    var small = mqMobile.matches || lowEnd;

    var r = takeRipple();
    r.on = true; r.x = x; r.y = y; r.age = 0;
    r.dur = reduced ? 500 : 800;
    r.maxR = reduced ? 48 : (small ? 88 : 120);
    r.glow = !reduced;

    if (!reduced) {
      var n = small ? Math.round(rnd(8, 12)) : Math.round(rnd(12, 20));
      var base = Math.random() * TAU;
      for (var i = 0, p = 0; i < MAX_P && p < n; i++) {
        var q = particles[i];
        if (q.on) continue;
        var a = base + (p / n) * TAU + rnd(-0.25, 0.25);
        var sp = small ? rnd(70, 190) : rnd(90, 250);
        q.on = true; q.x = x; q.y = y;
        q.vx = Math.cos(a) * sp; q.vy = Math.sin(a) * sp;
        q.age = 0; q.life = rnd(600, 900);
        q.size = rnd(1.6, 3.4);
        q.c = Math.random() < 0.65 ? 0 : 1;
        p++;
      }
    }
    if (!fxRaf) { lastT = performance.now(); fxRaf = requestAnimationFrame(frame); }
  }

  function frame(now) {
    var real = Math.min(0.5, (now - lastT) / 1000); // wall-clock, so durations hold on slow frames
    var dt = Math.min(0.05, real);                  // physics step stays small
    lastT = now;
    ctx.clearRect(0, 0, cw, ch);
    var busy = false, i, t, e;

    // ripples + glow pulse
    for (i = 0; i < MAX_R; i++) {
      var r = ripples[i];
      if (!r.on) continue;
      r.age += real * 1000;
      t = r.age / r.dur;
      if (t >= 1) { r.on = false; continue; }
      busy = true;
      e = 1 - Math.pow(1 - t, 3);

      if (r.glow && t < 0.4) {
        var gt = t / 0.4, gr = 46 + 34 * gt;
        var g = ctx.createRadialGradient(r.x, r.y, 0, r.x, r.y, gr);
        g.addColorStop(0, fx1.rgb);
        g.addColorStop(1, fx1.clear);
        ctx.globalAlpha = (1 - gt) * 0.38;
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(r.x, r.y, gr, 0, TAU); ctx.fill();
      }

      ctx.globalAlpha = (1 - t) * 0.7;
      ctx.strokeStyle = fx1.rgb;
      ctx.lineWidth = 0.6 + 2.2 * (1 - t);
      ctx.beginPath(); ctx.arc(r.x, r.y, Math.max(0.1, r.maxR * e), 0, TAU); ctx.stroke();
    }

    // particles
    var lastC = -1;
    for (i = 0; i < MAX_P; i++) {
      var q = particles[i];
      if (!q.on) continue;
      q.age += real * 1000;
      t = q.age / q.life;
      if (t >= 1) { q.on = false; continue; }
      busy = true;
      var drag = 1 - 2.4 * dt;
      q.vx *= drag; q.vy *= drag;
      q.x += q.vx * dt; q.y += q.vy * dt;
      if (q.c !== lastC) { ctx.fillStyle = q.c ? fx2.rgb : fx1.rgb; lastC = q.c; }
      ctx.globalAlpha = (1 - t) * 0.95;
      ctx.beginPath(); ctx.arc(q.x, q.y, Math.max(0.1, q.size * (1 - t * 0.75)), 0, TAU); ctx.fill();
    }

    ctx.globalAlpha = 1;
    if (busy) {
      fxRaf = requestAnimationFrame(frame);
    } else {
      fxRaf = 0;
      ctx.clearRect(0, 0, cw, ch);
    }
  }

  /* ---------- click / tap detection ---------- */
  var INTERACTIVE =
    'a[href],button,input,select,textarea,label,summary,iframe,video,audio,' +
    '[role="button"],[role="link"],[role="tab"],[role="switch"],[role="option"],[role="combobox"],[role="dialog"],' +
    '[contenteditable=""],[contenteditable="true"],[tabindex]:not([tabindex="-1"]),' +
    '#nav,#nav-drawer,#drawer-overlay,.docs-modal,.docs-overlay,.cookie-banner';

  function isBackground(target) {
    if (document.body.classList.contains('modal-open')) return false;
    return !(target && target.closest && target.closest(INTERACTIVE));
  }

  var down = null;
  document.addEventListener('pointerdown', function (e) {
    if (!e.isPrimary || (e.pointerType === 'mouse' && e.button !== 0)) { down = null; return; }
    down = { x: e.clientX, y: e.clientY, t: performance.now(), id: e.pointerId };
  }, { passive: true });

  document.addEventListener('pointerup', function (e) {
    if (!down || e.pointerId !== down.id) return;
    var d = down; down = null;
    var dx = e.clientX - d.x, dy = e.clientY - d.y;
    // a scroll/drag/long-press is not a tap
    if (dx * dx + dy * dy > 100 || performance.now() - d.t > 600) return;
    if (!isBackground(e.target)) return;
    explode(e.clientX, e.clientY);
  }, { passive: true });

  document.addEventListener('pointercancel', function () { down = null; }, { passive: true });

  /* ============================================================
     INIT + responsive hooks
     ============================================================ */
  var resizeTimer = 0;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      sizeCanvas();
      if (!canTrack()) restSpot();
      applyParallax();
    }, 200);
  }, { passive: true });

  onChange(mqMobile, function () {
    buildStars();
    restSpot();
    if (mqReduce.matches) killAllMeteors();
    else scheduleMeteor(false);
  });

  // FIX: saat reduce-motion di-toggle, batalkan meteor in-flight + timer,
  // lalu restart jadwal saat dimatikan.
  onChange(mqReduce, function () {
    restSpot();
    if (mqReduce.matches) {
      starEls.forEach(function (s) { s.el.style.transform = ''; });
      killAllMeteors();
    } else {
      applyParallax();
      scheduleMeteor(false);
    }
  });

  sizeCanvas();
  buildStars();
  restSpot();
  scheduleMeteor(true);
})();
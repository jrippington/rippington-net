// Live bathymetric contour lines (marching squares over drifting Perlin noise),
// plus the nav's scrolled state. No dependencies, no tracking.
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Perlin noise ---------------------------------------------------------
  const perm = new Uint8Array(512), grad = [];
  let seed = 20260929;
  const rand = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
  const p = [...Array(256).keys()];
  for (let i = 255; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; }
  for (let i = 0; i < 512; i++) perm[i] = p[i & 255];
  for (let i = 0; i < 256; i++) { const a = rand() * Math.PI * 2; grad.push([Math.cos(a), Math.sin(a)]); }
  const fade = t => t * t * t * (t * (t * 6 - 15) + 10);
  const noise = (x, y) => {
    const X = Math.floor(x) & 255, Y = Math.floor(y) & 255, xf = x - Math.floor(x), yf = y - Math.floor(y);
    const g = (h, dx, dy) => grad[h][0] * dx + grad[h][1] * dy;
    const aa = perm[perm[X] + Y], ab = perm[perm[X] + Y + 1], ba = perm[perm[X + 1] + Y], bb = perm[perm[X + 1] + Y + 1];
    const u = fade(xf), v = fade(yf);
    const x1 = g(aa, xf, yf) + u * (g(ba, xf - 1, yf) - g(aa, xf, yf));
    const x2 = g(ab, xf, yf - 1) + u * (g(bb, xf - 1, yf - 1) - g(ab, xf, yf - 1));
    return x1 + v * (x2 - x1);
  };

  // --- Contour renderer -----------------------------------------------------
  const MODES = {
    // hero: quiet texture, a little stronger towards the lower right
    hero: { step: 9, levels: 15, scale: 0.0019, alpha: 0.13, mask: (x, y, w, h) => 0.2 + 0.8 * (x / w) * (0.45 + 0.55 * y / h) },
    soft: { step: 10, levels: 14, scale: 0.0018, alpha: 0.10, mask: (x, y, w, h) => 0.25 + 0.75 * Math.max(0, x / w - 0.25) },
  };
  const BUCKETS = 6;

  function makeLayer(canvas) {
    const cfg = MODES[canvas.dataset.mode] || MODES.soft;
    const ctx = canvas.getContext('2d');
    let w = 0, h = 0, gw = 0, gh = 0, field = null;

    function resize() {
      const r = canvas.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      gw = Math.ceil(w / cfg.step) + 1; gh = Math.ceil(h / cfg.step) + 1;
      field = new Float32Array(gw * gh);
    }

    function draw(t) {
      if (!w || !h) return;
      const s = cfg.scale, st = cfg.step;
      for (let j = 0; j < gh; j++) for (let i = 0; i < gw; i++) {
        const x = i * st, y = j * st;
        field[j * gw + i] = 0.65 * noise(x * s + t * 0.010, y * s - t * 0.005) + 0.35 * noise(x * s * 2.1 - t * 0.016, y * s * 2.1 + t * 0.009);
      }
      ctx.clearRect(0, 0, w, h);
      ctx.lineCap = 'round';
      const paths = Array.from({ length: BUCKETS }, () => new Path2D());
      const majors = Array.from({ length: BUCKETS }, () => new Path2D());
      for (let L = 1; L < cfg.levels; L++) {
        const th = -0.55 + 1.1 * L / cfg.levels, target = L % 5 === 0 ? majors : paths;
        for (let j = 0; j < gh - 1; j++) for (let i = 0; i < gw - 1; i++) {
          const a = field[j * gw + i], b = field[j * gw + i + 1], c = field[(j + 1) * gw + i + 1], d = field[(j + 1) * gw + i];
          const k = (a > th) | ((b > th) << 1) | ((c > th) << 2) | ((d > th) << 3);
          if (k === 0 || k === 15) continue;
          const x = i * st, y = j * st;
          const m = cfg.mask(x, y, w, h); if (m <= 0.03) continue;
          const bi = Math.min(BUCKETS - 1, Math.floor(m * BUCKETS)), path = target[bi];
          const lp = (p, q) => (th - p) / (q - p);
          const T = [x + st * lp(a, b), y], R = [x + st, y + st * lp(b, c)], B = [x + st * lp(d, c), y + st], Lf = [x, y + st * lp(a, d)];
          const seg = (P, Q) => { path.moveTo(P[0], P[1]); path.lineTo(Q[0], Q[1]); };
          switch (k) {
            case 1: case 14: seg(Lf, T); break;
            case 2: case 13: seg(T, R); break;
            case 3: case 12: seg(Lf, R); break;
            case 4: case 11: seg(R, B); break;
            case 5: seg(Lf, T); seg(R, B); break;
            case 6: case 9: seg(T, B); break;
            case 7: case 8: seg(Lf, B); break;
            case 10: seg(T, R); seg(B, Lf); break;
          }
        }
      }
      for (let bi = 0; bi < BUCKETS; bi++) {
        const a = cfg.alpha * (bi + 1) / BUCKETS;
        ctx.strokeStyle = `rgba(165,212,231,${a})`; ctx.lineWidth = 1; ctx.stroke(paths[bi]);
        ctx.strokeStyle = `rgba(165,212,231,${Math.min(1, a * 1.7)})`; ctx.lineWidth = 1.5; ctx.stroke(majors[bi]);
      }
    }
    return { canvas, resize, draw, visible: true };
  }

  const layers = [...document.querySelectorAll('canvas.contours')].map(makeLayer);
  layers.forEach(l => l.resize());
  let t0 = performance.now(), last = 0, running = false;
  const frame = now => {
    if (!running) return;
    if (now - last > 80) { // ~12 fps is plenty for a slow drift
      last = now;
      const t = (now - t0) / 1000;
      layers.forEach(l => l.visible && l.draw(t));
    }
    requestAnimationFrame(frame);
  };
  const start = () => { if (!running && !reduceMotion && !document.hidden) { running = true; requestAnimationFrame(frame); } };
  const stop = () => { running = false; };
  layers.forEach(l => l.draw(0));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      const l = layers.find(x => x.canvas === e.target); if (l) l.visible = e.isIntersecting;
      layers.some(x => x.visible) ? start() : stop();
    }));
    layers.forEach(l => io.observe(l.canvas));
  } else start();
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
  let rt;
  window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { layers.forEach(l => { l.resize(); l.draw((performance.now() - t0) / 1000); }); }, 150); });

  // --- Contact form (Web3Forms) ----------------------------------------------
  // Spam defences: hidden honeypot field, a minimum time on page, and hCaptcha,
  // which is only loaded once someone starts using the form.
  const form = document.querySelector('.contact-form');
  if (form) {
    const openedAt = Date.now();
    const status = form.querySelector('.form-status');
    const button = form.querySelector('button[type="submit"]');
    const say = (msg, cls) => { status.textContent = msg; status.className = 'form-status ' + (cls || ''); };
    let captchaRequested = false;
    const loadCaptcha = () => {
      if (captchaRequested) return; captchaRequested = true;
      const s = document.createElement('script');
      s.src = 'https://web3forms.com/client/script.js'; s.async = true; s.defer = true;
      document.body.appendChild(s);
    };
    form.addEventListener('focusin', loadCaptcha);

    form.addEventListener('submit', async e => {
      e.preventDefault();
      let firstBad = null;
      form.querySelectorAll('[required]').forEach(el => {
        const bad = !el.value.trim() || (el.type === 'email' && !el.checkValidity());
        el.setAttribute('aria-invalid', bad ? 'true' : 'false');
        if (bad && !firstBad) firstBad = el;
      });
      if (firstBad) { say('Please fill in your name, a valid email address and a message.', 'err'); firstBad.focus(); return; }
      // Bots: quietly pretend it worked
      if (form.botcheck.checked || Date.now() - openedAt < 4000) { form.reset(); say('Thanks. Your message is on its way.', 'ok'); return; }
      const data = new FormData(form);
      if (form.querySelector('.h-captcha') && !data.get('h-captcha-response')) { say('Please complete the check above the button.', 'err'); return; }
      button.disabled = true; say('Sending…');
      try {
        const res = await fetch(form.action, { method: 'POST', headers: { Accept: 'application/json' }, body: data });
        const json = await res.json();
        if (!json.success) throw new Error(json.message || 'Failed');
        form.reset(); form.querySelectorAll('[aria-invalid]').forEach(el => el.removeAttribute('aria-invalid'));
        say('Thanks. Your message is on its way, and I’ll reply by email.', 'ok');
        if (window.hcaptcha) try { window.hcaptcha.reset(); } catch (_) {}
      } catch (_) {
        say('Sorry, that didn’t send. Please email john@rippington.net directly.', 'err');
      } finally { button.disabled = false; }
    });
    form.querySelectorAll('[required]').forEach(el => el.addEventListener('input', () => el.removeAttribute('aria-invalid')));
  }

  // --- Copy email -----------------------------------------------------------
  document.querySelectorAll('button[data-copy]').forEach(b => b.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(b.dataset.copy); b.textContent = 'Copied'; }
    catch (_) { b.textContent = 'Select and copy'; }
    setTimeout(() => (b.textContent = 'Copy'), 2000);
  }));

  // --- Nav background once scrolled -----------------------------------------
  const nav = document.querySelector('.nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
})();

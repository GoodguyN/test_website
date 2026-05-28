/* ── Apply config tokens ─────────────────────────────────── */
(function () {
  const r = document.documentElement.style;
  r.setProperty('--brand',      SITE.couleur);
  r.setProperty('--brand-dark', shadeColor(SITE.couleur, -15));
  r.setProperty('--brand-soft', hexToSoft(SITE.couleur));
  r.setProperty('--accent',     SITE.couleurVive);
  r.setProperty('--accent-dark',shadeColor(SITE.couleurVive, -15));

  function shadeColor(hex, pct) {
    const n = parseInt(hex.slice(1), 16);
    const t = pct < 0 ? 0 : 255;
    const p = pct < 0 ? pct * -1 : pct;
    const R = (n >> 16) + Math.round((t - (n >> 16)) * p / 100);
    const G = (n >> 8 & 0x00FF) + Math.round((t - (n >> 8 & 0x00FF)) * p / 100);
    const B = (n & 0x0000FF) + Math.round((t - (n & 0x0000FF)) * p / 100);
    return '#' + (0x1000000 + (Math.min(255,Math.max(0,R)) << 16)
      + (Math.min(255,Math.max(0,G)) << 8) + Math.min(255,Math.max(0,B)))
      .toString(16).slice(1);
  }
  function hexToSoft(hex) {
    const n = parseInt(hex.slice(1), 16);
    const R = Math.min(255, Math.round((n >> 16) * .15 + 240));
    const G = Math.min(255, Math.round((n >> 8 & 0xFF) * .15 + 240));
    const B = Math.min(255, Math.round((n & 0xFF) * .15 + 240));
    return `rgb(${R},${G},${B})`;
  }
})();

/* ── Header scroll ───────────────────────────────────────── */
(function () {
  const h = document.querySelector('.site-header');
  if (!h) return;
  const onScroll = () => h.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── Mobile menu ─────────────────────────────────────────── */
(function () {
  const btn  = document.getElementById('ham');
  const menu = document.getElementById('mob-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      document.body.style.overflow = '';
    })
  );
})();

/* ── Active nav link ─────────────────────────────────────── */
(function () {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.header-nav a, .mob-menu a').forEach(a => {
    const href = a.getAttribute('href').replace(/\/$/, '') || '/';
    if (path === href || (href !== '/' && path.startsWith(href))) {
      a.classList.add('active');
    }
  });
})();

/* ── Inject dynamic text via CONFIG ─────────────────────── */
(function () {
  const set = (sel, txt) =>
    document.querySelectorAll(sel).forEach(el => { el.textContent = txt; });
  const setHref = (sel, href) =>
    document.querySelectorAll(sel).forEach(el => { el.href = href; });

  set('[data-site="nom"]',    SITE.nom);
  set('[data-site="metier"]', SITE.metier);
  set('[data-site="ville"]',  SITE.ville);
  set('[data-site="tel"]',    SITE.tel);
  set('[data-site="email"]',  SITE.email);
  set('[data-site="adresse"]',SITE.adresse);
  set('[data-site="horaires"]',SITE.horaires);
  set('[data-site="slogan"]', SITE.slogan);

  setHref('[data-href="tel"]',   SITE.telHref);
  setHref('[data-href="email"]', 'mailto:' + SITE.email);

  // Year in copyright
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
})();

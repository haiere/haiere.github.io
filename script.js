/* ============================================================
   script.js — Haiere v2026.10.08.4
   Everything UI: theme, i18n, drawer, search, filters,
   docs modal (README via GitHub raw), contact form, cookies,
   scroll animations, counters, hero spotlight, tilt/magnetic.

   Default language: English (en).
   The browser locale only switches to Indonesian (id) if the
   user has explicitly chosen it, or their locale is Indonesian.

   v2026.10.08.4 changes:
   - Reads <html data-perf> ("eco" | "normal" | "premium").
   - Hero spotlight & tilt/magnetic cards run on premium only.
   - Added Games to section search index and .game-card indexing.
   - MyDev removed.
   ============================================================ */

function whenTailwindReady(cb) {
  if (window.tailwind) return cb();
  requestAnimationFrame(() => requestAnimationFrame(cb));
}

(function () {
  'use strict';

  /* ==========================================================
     0. STATE + HELPERS
     ========================================================== */
  const i18n = window.i18n || {};
  const DEFAULT_LANG = 'en';
  let currentLang = DEFAULT_LANG;
  let searchIndex = [];
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const perfTier = document.documentElement.getAttribute('data-perf') || 'premium';

  function getFocusable(container) {
    if (!container) return [];
    return Array.from(container.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )).filter((el) => {
      if (el.hasAttribute('hidden')) return false;
      if (el.getAttribute('aria-hidden') === 'true') return false;
      return el.offsetParent !== null || el.getClientRects().length > 0;
    });
  }

  function detectLang() {
    try {
      return navigator.language.toLowerCase().startsWith('id') ? 'id' : DEFAULT_LANG;
    } catch (_) {
      return DEFAULT_LANG;
    }
  }

  function getI18nText(key, fallback) {
    const dict = i18n[currentLang] || i18n[DEFAULT_LANG] || {};
    return dict[key] !== undefined ? dict[key] : (fallback || '');
  }
  window.getI18nText = getI18nText;

  /* ---------- Body scroll lock (reference-counted) ---------- */
  const bodyLocks = new Set();
  function setBodyScrollLock(locked, id) {
    id = id || 'global';
    if (locked) bodyLocks.add(id);
    else bodyLocks.delete(id);
    const on = bodyLocks.size > 0;
    document.body.style.overflow = on ? 'hidden' : '';
    document.body.classList.toggle('modal-open', on);
  }

  function renderAllIcons(scope) {
    if (typeof renderIcons === 'function') renderIcons(scope);
  }

  /* ==========================================================
     1. I18N
     ========================================================== */
  function updateLastUpdated() {
    const el = document.getElementById('last-updated-date');
    if (!el) return;
    const now = new Date();
    const months = {
      en: ['January','February','March','April','May','June','July','August','September','October','November','December'],
      id: ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'],
    };
    const list = months[currentLang] || months[DEFAULT_LANG];
    const month = list[now.getMonth()] || list[0];
    const day   = String(now.getDate()).padStart(2, '0');
    el.textContent = `${day} ${month} ${now.getFullYear()}`;
  }

  function refreshSearchPlaceholder() {
    const input = document.getElementById('header-search-input');
    if (!input) return;
    const label = getI18nText('search_placeholder', 'Search…');
    input.setAttribute('placeholder', label);
  }

  function applyLang(lang) {
    currentLang = lang;
    const fallback = i18n[DEFAULT_LANG] || {};
    const tr = i18n[lang] || fallback;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (tr[key] !== undefined) el.textContent = tr[key];
      else if (fallback[key] !== undefined) el.textContent = fallback[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (tr[key] !== undefined) el.placeholder = tr[key];
      else if (fallback[key] !== undefined) el.placeholder = fallback[key];
    });
    document.querySelectorAll('[data-i18n-label]').forEach((el) => {
      const key = el.dataset.i18nLabel;
      if (tr[key] !== undefined) el.setAttribute('aria-label', tr[key]);
      else if (fallback[key] !== undefined) el.setAttribute('aria-label', fallback[key]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const key = el.dataset.i18nAlt;
      if (tr[key] !== undefined) el.setAttribute('alt', tr[key]);
      else if (fallback[key] !== undefined) el.setAttribute('alt', fallback[key]);
    });
    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const key = el.dataset.i18nTitle;
      if (tr[key] !== undefined) el.setAttribute('title', tr[key]);
      else if (fallback[key] !== undefined) el.setAttribute('title', fallback[key]);
    });

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    document.documentElement.lang = lang;

    const tTitle = tr.page_title || fallback.page_title;
    if (tTitle) document.title = tTitle;

    if (menuBtn && !isDrawerOpen) {
      menuBtn.setAttribute('aria-label', getI18nText('open_menu', 'Open menu'));
    }

    try { localStorage.setItem('haiere-lang', lang); } catch (_) {}

    updateLastUpdated();
    buildSearchIndex();
    refreshSearchPlaceholder();
  }
  window.applyLang = applyLang;

  /* ==========================================================
     2. THEME
     ========================================================== */
  const LOGO_LIGHT = 'https://i.postimg.cc/GmWt2wch/H-blue.webp';
  const LOGO_DARK  = 'https://i.postimg.cc/8PJ0bhb1/H-haiere.webp';

  function updateLogo() {
    const isDark = document.documentElement.classList.contains('dark');
    const newSrc = isDark ? LOGO_DARK : LOGO_LIGHT;
    document.querySelectorAll('.logo-img').forEach((img) => {
      if (img.getAttribute('src') === newSrc) return;
      img.classList.add('logo-switching');
      const pre = new Image();
      pre.onload = () => {
        img.src = newSrc;
        img.classList.remove('logo-switching');
      };
      pre.onerror = () => { img.src = newSrc; img.classList.remove('logo-switching'); };
      pre.src = newSrc;
    });
  }

  function setTheme(theme) {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    try { localStorage.setItem('theme', theme); } catch (_) {}
    const t = document.getElementById('theme-toggle');
    if (t) t.setAttribute('aria-pressed', String(theme === 'dark'));
    updateLogo();
  }

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed',
      String(document.documentElement.classList.contains('dark')));
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'light' : 'dark');
    });
  }

  /* ==========================================================
     3. SCROLL PROGRESS + NAV SCROLL STATE + BACK TO TOP
     ========================================================== */
  const scrollProgress = document.getElementById('scroll-progress');
  const header = document.getElementById('nav');
  const backTop = document.getElementById('back-top');
  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;

      if (scrollProgress) scrollProgress.style.transform = `scaleX(${ratio})`;
      if (header) header.classList.toggle('scrolled', scrollTop > 20);

      if (backTop) {
        const shouldShow = scrollTop > 400;
        backTop.style.opacity = shouldShow ? '1' : '0';
        backTop.style.pointerEvents = shouldShow ? 'auto' : 'none';
        backTop.setAttribute('aria-hidden', shouldShow ? 'false' : 'true');
      }
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (backTop) backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ==========================================================
     4. DRAWER
     ========================================================== */
  const menuBtn = document.getElementById('menu-btn');
  const drawer = document.getElementById('nav-drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const drawerClose = document.getElementById('drawer-close');
  let isDrawerOpen = false;
  let drawerLastFocused = null;

  function trapDrawerFocus(e) {
    if (e.key !== 'Tab' || !isDrawerOpen) return;
    const focusable = getFocusable(drawer);
    if (!focusable.length) { e.preventDefault(); drawer.focus(); return; }
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    const active = document.activeElement;

    if (!drawer.contains(active)) {
      e.preventDefault();
      (e.shiftKey ? last : first).focus();
      return;
    }
    if (e.shiftKey && active === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
  }

  function openDrawer() {
    if (!drawer || !menuBtn || !drawerOverlay) return;
    drawerLastFocused = document.activeElement;
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    drawer.removeAttribute('inert');
    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.setAttribute('aria-label', getI18nText('close_menu', 'Close menu'));
    drawerOverlay.classList.add('active');
    isDrawerOpen = true;
    setBodyScrollLock(true, 'drawer');
    const f = getFocusable(drawer);
    if (f.length) f[0].focus();
  }

  function closeDrawer() {
    if (!drawer || !menuBtn || !drawerOverlay) return;
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
    drawer.setAttribute('inert', '');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', getI18nText('open_menu', 'Open menu'));
    drawerOverlay.classList.remove('active');
    isDrawerOpen = false;
    setBodyScrollLock(false, 'drawer');
    if (drawerLastFocused && typeof drawerLastFocused.focus === 'function') drawerLastFocused.focus();
    else if (menuBtn) menuBtn.focus();
    drawerLastFocused = null;
  }

  if (menuBtn && drawer && drawerOverlay) {
    drawer.setAttribute('aria-hidden', 'true');
    if ('inert' in HTMLElement.prototype) drawer.setAttribute('inert', '');
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      isDrawerOpen ? closeDrawer() : openDrawer();
    });
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
    drawerOverlay.addEventListener('click', closeDrawer);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isDrawerOpen) { closeDrawer(); return; }
      trapDrawerFocus(e);
    });

    document.querySelectorAll('#nav-drawer .drawer-item').forEach((link) => {
      link.addEventListener('click', () => { if (isDrawerOpen) closeDrawer(); });
    });

    document.addEventListener('click', (e) => {
      if (isDrawerOpen && !drawer.contains(e.target) && !menuBtn.contains(e.target)) closeDrawer();
    });

    window.addEventListener('hashchange', () => { if (isDrawerOpen) closeDrawer(); });

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth >= 1024 && isDrawerOpen) closeDrawer();
      }, 150);
    });
  }

  /* ==========================================================
     5. REVEAL ON SCROLL
     ========================================================== */
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
  }

  /* ==========================================================
     6. SECTION HIGHLIGHTING
     ========================================================== */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function setActiveNavLink(id) {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === '#' + id;
      link.classList.toggle('active', isActive);
      if (isActive) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  if ('IntersectionObserver' in window && navLinks.length) {
    const secObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActiveNavLink(entry.target.id); });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach((s) => secObs.observe(s));
  }

  /* ==========================================================
     7. TOAST
     ========================================================== */
  function showToast(message, type) {
    const container = document.getElementById('toast-container');
    if (!container || !message) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', type === 'error' ? 'alert' : 'status');

    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    iconSvg.setAttribute('data-icon', type === 'error' ? 'ic34' : 'ic39');
    iconSvg.setAttribute('class', 'toast-icon ' + (type === 'error' ? 'toast-icon--error' : 'toast-icon--success'));
    iconSvg.setAttribute('aria-hidden', 'true');

    const textSpan = document.createElement('span');
    textSpan.textContent = message;

    toast.appendChild(iconSvg);
    toast.appendChild(textSpan);
    container.appendChild(toast);

    renderAllIcons(toast);

    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }
  window.showToast = showToast;

  /* ==========================================================
     8. SEARCH (Ctrl/Cmd + K)
     ========================================================== */
  const searchWrap    = document.getElementById('header-search');
  const searchInput   = document.getElementById('header-search-input');
  const searchClear   = document.getElementById('header-search-clear');
  const searchResults = document.getElementById('header-search-results');
  const searchKeyHint = document.getElementById('header-search-key');

  function buildSearchIndex() {
    const items = [];
    const sectionMap = {
      hero:    { labelKey: 'nav_home' },
      about:   { labelKey: 'nav_about' },
      rwr:     { labelKey: 'RWR' },
      music:   { labelKey: 'nav_music' },
      quotes:  { labelKey: 'nav_quotes' },
      tools:   { labelKey: 'nav_tools' },
      games:   { labelKey: 'nav_games' },
      contact: { labelKey: 'nav_contact' },
      support: { labelKey: 'support_title' },
    };
    const tr = i18n[currentLang] || i18n[DEFAULT_LANG] || {};

    Object.entries(sectionMap).forEach(([id, meta]) => {
      if (!document.getElementById(id)) return;
      items.push({
        href: '#' + id,
        title: tr[meta.labelKey] || meta.labelKey,
        meta: 'Section',
        haystack: ((tr[meta.labelKey] || '') + ' ' + id).toLowerCase(),
      });
    });

    document.querySelectorAll('.tool-card').forEach((card) => {
      const h3 = card.querySelector('h3');
      const desc = card.querySelector('p');
      if (!h3) return;
      const title = (h3.textContent || '').trim();
      const description = desc ? (desc.textContent || '').trim() : '';
      const category = card.dataset.category || '';
      const repo = card.dataset.repo || '';
      items.push({
        href: '#tools',
        title,
        meta: `${category} · ${repo}`,
        haystack: `${title} ${description} ${category} ${repo}`.toLowerCase(),
      });
    });

    // Games — index khusus agar pencarian "chess" / "loveyou" muncul
    document.querySelectorAll('.game-card').forEach((card) => {
      const h3 = card.querySelector('.game-title');
      const desc = card.querySelector('.game-desc');
      if (!h3) return;
      const title = (h3.textContent || '').trim();
      const description = desc ? (desc.textContent || '').trim() : '';
      items.push({
        href: '#games',
        title,
        meta: 'Game',
        haystack: `${title} ${description} game play`.toLowerCase(),
      });
    });

    searchIndex = items;
  }

  function renderSearchResults(query) {
    if (!searchResults) return;
    const q = query.trim().toLowerCase();
    if (!q) { searchResults.innerHTML = ''; return; }
    const matches = searchIndex.filter((item) => item.haystack.includes(q)).slice(0, 8);
    if (!matches.length) {
      searchResults.innerHTML = `<div class="header-search-empty">${getI18nText('search_no_results', 'No results.')}</div>`;
      return;
    }
    searchResults.innerHTML = '';
    matches.forEach((m) => {
      const a = document.createElement('a');
      a.className = 'header-search-result';
      a.href = m.href;
      a.setAttribute('role', 'option');
      a.tabIndex = 0;
      const titleEl = document.createElement('span');
      titleEl.className = 'header-search-result-title';
      titleEl.textContent = m.title;
      const metaEl = document.createElement('span');
      metaEl.className = 'header-search-result-meta';
      metaEl.textContent = m.meta;
      a.appendChild(titleEl);
      a.appendChild(metaEl);
      a.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        closeSearchResults();
      });
      a.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          if (searchInput) searchInput.value = '';
          closeSearchResults();
        }
      });
      searchResults.appendChild(a);
    });
  }

  function openSearchResults() { searchWrap && searchWrap.classList.add('has-query'); }
  function closeSearchResults() {
    if (!searchWrap) return;
    searchWrap.classList.remove('has-query');
    if (searchResults) searchResults.innerHTML = '';
  }

  if (searchInput && searchWrap) {
    searchInput.addEventListener('input', () => {
      const v = searchInput.value;
      searchWrap.classList.toggle('has-query', v.trim().length > 0);
      renderSearchResults(v);
    });

    searchInput.addEventListener('focus', () => {
      if (searchInput.value.trim()) openSearchResults();
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        searchInput.value = '';
        closeSearchResults();
        searchInput.blur();
        return;
      }
      if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && searchResults) {
        const items = searchResults.querySelectorAll('.header-search-result');
        if (!items.length) return;
        e.preventDefault();
        const idx = Array.from(items).indexOf(document.activeElement);
        const next = e.key === 'ArrowDown'
          ? (idx + 1) % items.length
          : (idx <= 0 ? items.length - 1 : idx - 1);
        items[next].focus();
      }
    });

    if (searchResults) {
      searchResults.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          searchInput.focus();
          searchInput.value = '';
          closeSearchResults();
        }
      });
    }

    if (searchClear) {
      searchClear.addEventListener('click', () => {
        searchInput.value = '';
        closeSearchResults();
        searchInput.focus();
      });
    }

    document.addEventListener('click', (e) => {
      if (!searchWrap.contains(e.target)) closeSearchResults();
    });

    document.addEventListener('keydown', (e) => {
      const isK = e.key === 'k' || e.key === 'K';
      if ((e.ctrlKey || e.metaKey) && isK) {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
      }
    });

    if (searchKeyHint) {
      const isMac = /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent);
      searchKeyHint.textContent = isMac ? '⌘' : 'Ctrl';
    }
  }

  /* ==========================================================
     9. HERO SPOTLIGHT — premium only (mousemove-heavy)
     ========================================================== */
  const heroSection = document.getElementById('hero');
  const heroSpotlight = document.getElementById('hero-spotlight');

  if (heroSection && heroSpotlight && !prefersReducedMotion && !isCoarsePointer && perfTier === 'premium') {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      heroSpotlight.style.setProperty('--x', x + '%');
      heroSpotlight.style.setProperty('--y', y + '%');
      heroSpotlight.classList.add('active');
    });
    heroSection.addEventListener('mouseleave', () => heroSpotlight.classList.remove('active'));
  }

  /* ==========================================================
     10. STAT COUNTER
     ========================================================== */
  const statEls = document.querySelectorAll('.stat-number');
  if (statEls.length && 'IntersectionObserver' in window) {
    const statObs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10) || 0;
        const suffix = el.dataset.suffix || '';
        const duration = 1200;
        let startTime = null;
        function step(timestamp) {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target) + suffix;
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = target + suffix;
        }
        requestAnimationFrame(step);
        statObs.unobserve(el);
      });
    }, { threshold: 0.4 });
    statEls.forEach((el) => statObs.observe(el));
  }

  /* ==========================================================
     11. TOOL FILTER
     ========================================================== */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const toolCards = document.querySelectorAll('.tool-card');

  function setActiveFilter(active) {
    filterButtons.forEach((btn) => {
      const on = btn.dataset.filter === active;
      btn.classList.toggle('active', on);
      btn.setAttribute('aria-pressed', String(on));
      btn.tabIndex = 0;
    });
    toolCards.forEach((card) => {
      const show = active === 'all' || card.dataset.category === active;
      card.hidden = !show;
      card.setAttribute('aria-hidden', String(!show));
    });
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => setActiveFilter(btn.dataset.filter));
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const btns = Array.from(filterButtons);
        const idx = btns.indexOf(btn);
        const next = e.key === 'ArrowRight' ? (idx + 1) % btns.length : (idx - 1 + btns.length) % btns.length;
        btns[next].focus();
        btns[next].click();
      }
    });
  });
  setActiveFilter('all');

  /* ==========================================================
     12. SANITIZE MARKDOWN
     ========================================================== */
  function sanitizeMarkdown(container) {
    if (!container) return;

    container.querySelectorAll('[width], [height]').forEach((el) => {
      el.removeAttribute('width');
      el.removeAttribute('height');
    });

    container.querySelectorAll('img').forEach((img) => {
      img.style.maxWidth = '100%';
      img.style.height = 'auto';
    });

    container.querySelectorAll('a[href^="http"]').forEach((a) => {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    });

    container.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
      cb.disabled = true;
    });
  }

  /* ==========================================================
     13. DOCS MODAL — README via GitHub raw
     ========================================================== */
  const docsOverlay      = document.getElementById('docsOverlay');
  const docsModal        = document.getElementById('docsModal');
  const docsModalTitle   = document.getElementById('docsModalTitle');
  const docsModalBody    = document.getElementById('docsModalBody');
  const docsModalClose   = document.getElementById('docsModalClose');
  const docsModalRepoLink= document.getElementById('docsModalRepoLink');
  const docsCache        = {};
  let docsLastFocused    = null;

  function mdToHtml(md) {
    if (typeof marked !== 'undefined' && marked && typeof marked.parse === 'function') {
      marked.setOptions({ gfm: true, breaks: true });
      return marked.parse(md);
    }
    return null;
  }

  function fetchReadme(repo) {
    if (docsCache[repo]) return Promise.resolve(docsCache[repo]);
    const branches = ['main', 'master'];
    const attempt = (i) => {
      if (i >= branches.length) return Promise.reject(new Error('not-found'));
      const url = `https://raw.githubusercontent.com/haiere/${repo}/${branches[i]}/README.md`;
      return fetch(url).then((res) => {
        if (!res.ok) throw new Error('http-' + res.status);
        return res.text();
      }).catch(() => attempt(i + 1));
    };
    return attempt(0).then((text) => { docsCache[repo] = text; return text; });
  }

  function openDocsModal(repo, toolName) {
    if (!docsModal || !docsOverlay) return;
    docsLastFocused = document.activeElement;

    const baseTitle = getI18nText('tool_docs', 'How to Use');
    if (docsModalTitle) docsModalTitle.textContent = `${baseTitle} — ${toolName}`;
    if (docsModalBody)  docsModalBody.innerHTML = `<div class="docs-modal-loading">${getI18nText('docs_loading', 'Loading…')}</div>`;
    if (docsModalRepoLink) docsModalRepoLink.href = `https://github.com/haiere/${repo}`;

    docsOverlay.classList.add('active');
    docsModal.classList.add('active');
    docsOverlay.setAttribute('aria-hidden', 'false');
    docsModal.setAttribute('aria-hidden', 'false');
    setBodyScrollLock(true, 'docs');
    if (docsModalClose) docsModalClose.focus();

    fetchReadme(repo)
      .then((md) => {
        const rendered = mdToHtml(md);
        if (rendered !== null && docsModalBody) {
          docsModalBody.innerHTML = `<div class="docs-markdown">${rendered}</div>`;
          sanitizeMarkdown(docsModalBody);
        } else if (docsModalBody) {
          docsModalBody.innerHTML = '';
          const pre = document.createElement('pre');
          pre.className = 'docs-markdown-fallback';
          pre.textContent = md;
          docsModalBody.appendChild(pre);
          sanitizeMarkdown(docsModalBody);
        }
      })
      .catch(() => {
        if (docsModalBody) {
          docsModalBody.innerHTML = `<div class="docs-modal-error">${getI18nText('docs_error', 'Documentation is not available yet for this tool.')}</div>`;
        }
      });
  }

  function closeDocsModal() {
    if (!docsModal || !docsOverlay) return;
    docsOverlay.classList.remove('active');
    docsModal.classList.remove('active');
    docsOverlay.setAttribute('aria-hidden', 'true');
    docsModal.setAttribute('aria-hidden', 'true');
    setBodyScrollLock(false, 'docs');
    if (docsLastFocused && typeof docsLastFocused.focus === 'function') docsLastFocused.focus();
  }

  document.querySelectorAll('.tool-docs-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const repo = btn.dataset.repo;
      const name = btn.dataset.toolName || '';
      if (!repo) return;
      openDocsModal(repo, name);
    });
  });

  if (docsModalClose) docsModalClose.addEventListener('click', closeDocsModal);
  if (docsOverlay) docsOverlay.addEventListener('click', closeDocsModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && docsModal && docsModal.classList.contains('active')) closeDocsModal();
  });

  /* ==========================================================
     14. CONTACT FORM
     ========================================================== */
  const nameInp  = document.getElementById('name');
  const emailInp = document.getElementById('email');
  const msgInp   = document.getElementById('message');
  const nameErr  = document.getElementById('name-error');
  const emailErr = document.getElementById('email-error');
  const msgErr   = document.getElementById('message-error');
  const form     = document.getElementById('contact-form');
  const statusDiv= document.getElementById('form-status');

  const primaryEndpoint  = 'https://formspree.io/f/mpqkqanp';
  const fallbackEndpoint = 'https://formspree.io/xgvkobyl';

  function clearFieldError(input, errorEl) {
    if (!input || !errorEl) return;
    input.classList.remove('input-error');
    input.setAttribute('aria-invalid', 'false');
    errorEl.textContent = '';
  }
  function setFieldError(input, errorEl, msg) {
    if (!input || !errorEl) return;
    input.classList.add('input-error');
    input.setAttribute('aria-invalid', 'true');
    errorEl.textContent = msg;
  }

  let formStatusTimer = 0;
  function setFormStatus(kind, msg) {
    if (!statusDiv) return;
    statusDiv.textContent = msg;
    statusDiv.dataset.state = kind || '';
    statusDiv.style.color =
      kind === 'success' ? '#10b981' :
      kind === 'error'   ? '#ef4444' :
      kind === 'pending' ? 'var(--text-soft)' : '';
  }
  function flashFormStatus(kind, msg, ms) {
    clearTimeout(formStatusTimer);
    setFormStatus(kind, msg);
    if (ms) formStatusTimer = setTimeout(() => setFormStatus('', ''), ms);
  }
  function clearStatus() { flashFormStatus('', ''); }

  [nameInp, emailInp, msgInp].forEach((input) => {
    if (!input) return;
    input.addEventListener('input', () => {
      if (input === nameInp)  clearFieldError(nameInp, nameErr);
      if (input === emailInp) clearFieldError(emailInp, emailErr);
      if (input === msgInp)   clearFieldError(msgInp, msgErr);
      clearStatus();
    });
  });

  function validateForm() {
    const tr = i18n[currentLang] || {};
    const fb = i18n[DEFAULT_LANG] || {};
    const msg = (k) => tr[k] || fb[k] || '';
    let valid = true;
    clearFieldError(nameInp, nameErr);
    clearFieldError(emailInp, emailErr);
    clearFieldError(msgInp, msgErr);

    const name  = nameInp  ? nameInp.value.trim()  : '';
    const email = emailInp ? emailInp.value.trim() : '';
    const text  = msgInp   ? msgInp.value.trim()   : '';

    if (name.length < 4) {
      setFieldError(nameInp, nameErr, msg('err_name_short'));
      valid = false;
    } else if (!/^[\p{L}\s'-]+$/u.test(name)) {
      setFieldError(nameInp, nameErr, msg('err_name_pattern'));
      valid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFieldError(emailInp, emailErr, msg('err_email_invalid'));
      valid = false;
    }
    if (text.length < 20) {
      setFieldError(msgInp, msgErr, msgErr && msg('err_message_short'));
      valid = false;
    }
    return valid;
  }

  function submitTo(url, formData) {
    return fetch(url, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    }).then((res) => {
      if (!res.ok) throw new Error('Request failed');
      return res.json().catch(() => ({}));
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const tr = i18n[currentLang] || {};
      const fb = i18n[DEFAULT_LANG] || {};
      const t  = (k) => tr[k] || fb[k] || '';
      if (!validateForm()) {
        flashFormStatus('error', t('form_error'), 6000);
        return;
      }
      setFormStatus('pending', t('form_sending'));
      const formData = new FormData(form);

      submitTo(primaryEndpoint, formData)
        .then(() => {
          flashFormStatus('success', t('form_success'), 5000);
          form.reset();
        })
        .catch(() => {
          submitTo(fallbackEndpoint, formData)
            .then(() => {
              flashFormStatus('success', t('form_success'), 5000);
              form.reset();
            })
            .catch(() => {
              flashFormStatus('error', t('form_error'), 6000);
            });
        });
    });
  }

  /* ==========================================================
     15. COOKIE BANNER + SETTINGS MODAL
     ========================================================== */
  (function cookieSystem() {
    const banner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('acceptCookiesBtn');
    const declineBtn = document.getElementById('declineCookiesBtn');
    const customizeBtn = document.getElementById('customizeCookiesBtn');
    const reopenBtnFooter = document.getElementById('reopenCookieSettingsBtn');
    const reopenBtnDrawer = document.getElementById('reopenCookieSettingsBtnDrawer');

    const settingsOverlay = document.getElementById('cookieSettingsOverlay');
    const settingsModal = document.getElementById('cookieSettingsModal');
    const settingsClose = document.getElementById('cookieSettingsClose');
    const settingsSave = document.getElementById('cookieSettingsSave');

    const toggleAnalytics  = document.getElementById('toggleAnalytics');
    const toggleMarketing  = document.getElementById('toggleMarketing');
    const togglePreferences= document.getElementById('togglePreferences');

    const PREFS_KEY   = 'haiere-cookie-prefs';
    const CONSENT_KEY = 'haiere-cookie';
    const DEFAULT_PREFS = { analytics: false, marketing: false, preferences: true };

    let returnFocusEl = null;
    let consent = null;
    try { consent = localStorage.getItem(CONSENT_KEY); } catch (_) { consent = null; }

    function normalizePrefs(v) {
      if (!v || typeof v !== 'object') return { ...DEFAULT_PREFS };
      return {
        analytics: v.analytics === true,
        marketing: v.marketing === true,
        preferences: v.preferences !== false,
      };
    }

    function getStoredPrefs() {
      try {
        const raw = localStorage.getItem(PREFS_KEY);
        if (!raw) return { ...DEFAULT_PREFS };
        return normalizePrefs(JSON.parse(raw));
      } catch (_) { return { ...DEFAULT_PREFS }; }
    }

    function savePrefs(prefs, consentValue) {
      const safe = normalizePrefs(prefs);
      try {
        localStorage.setItem(PREFS_KEY, JSON.stringify(safe));
        localStorage.setItem(CONSENT_KEY, consentValue || 'customized');
      } catch (_) {}
    }

    function getToggleValue(toggle, fallback) {
      if (!toggle) return fallback;
      return toggle.getAttribute('aria-checked') === 'true';
    }
    function setToggleValue(toggle, checked) {
      if (!toggle) return;
      const on = Boolean(checked);
      toggle.setAttribute('aria-checked', on ? 'true' : 'false');
      toggle.classList.toggle('is-on', on);
    }
    function applyPrefsToToggles(prefs) {
      const p = normalizePrefs(prefs);
      setToggleValue(toggleAnalytics, p.analytics);
      setToggleValue(toggleMarketing, p.marketing);
      setToggleValue(togglePreferences, p.preferences);
    }
    function readTogglesToPrefs() {
      return {
        analytics: getToggleValue(toggleAnalytics, false),
        marketing: getToggleValue(toggleMarketing, false),
        preferences: getToggleValue(togglePreferences, true),
      };
    }

    function showBanner() {
      if (!banner) return;
      banner.classList.add('show');
      banner.classList.remove('hide');
      banner.setAttribute('aria-hidden', 'false');
    }
    function hideBanner() {
      if (!banner) return;
      banner.classList.remove('show');
      banner.classList.add('hide');
      banner.setAttribute('aria-hidden', 'true');
    }

    function focusFirstModalEl() {
      if (!settingsModal) return;
      const f = getFocusable(settingsModal);
      (f[0] || settingsModal).focus();
    }

    function isSettingsOpen() {
      return Boolean(settingsModal && settingsModal.classList.contains('active'));
    }

    function trapSettingsFocus(e) {
      if (!isSettingsOpen() || e.key !== 'Tab') return;
      const f = getFocusable(settingsModal);
      if (!f.length) { e.preventDefault(); settingsModal.focus(); return; }
      const first = f[0], last = f[f.length - 1];
      const active = document.activeElement;
      if (!settingsModal.contains(active)) {
        e.preventDefault();
        (e.shiftKey ? last : first).focus();
        return;
      }
      if (e.shiftKey && active === first) { e.preventDefault(); last.focus(); return; }
      if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
    }

    function openSettings(trigger) {
      if (!settingsModal) return;
      returnFocusEl = trigger || document.activeElement || null;
      applyPrefsToToggles(getStoredPrefs());
      if (settingsOverlay) {
        settingsOverlay.classList.add('active');
        settingsOverlay.setAttribute('aria-hidden', 'false');
      }
      settingsModal.classList.add('active');
      settingsModal.setAttribute('aria-hidden', 'false');
      setBodyScrollLock(true, 'cookie');
      requestAnimationFrame(focusFirstModalEl);
    }

    function closeSettings(restore) {
      if (settingsOverlay) {
        settingsOverlay.classList.remove('active');
        settingsOverlay.setAttribute('aria-hidden', 'true');
      }
      if (settingsModal) {
        settingsModal.classList.remove('active');
        settingsModal.setAttribute('aria-hidden', 'true');
      }
      setBodyScrollLock(false, 'cookie');
      if (restore !== false && returnFocusEl && document.contains(returnFocusEl)) {
        returnFocusEl.focus();
      }
      returnFocusEl = null;
    }

    [toggleAnalytics, toggleMarketing, togglePreferences].forEach((t) => {
      if (!t) return;
      t.addEventListener('click', () => {
        const current = t.getAttribute('aria-checked') === 'true';
        setToggleValue(t, !current);
      });
      t.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          t.click();
        }
      });
    });

    if (banner) {
      if (!consent) {
        banner.setAttribute('aria-hidden', 'true');
        setTimeout(showBanner, 1500);
      } else {
        hideBanner();
      }
    }

    if (acceptBtn) {
      acceptBtn.addEventListener('click', () => {
        savePrefs({ analytics: true, marketing: true, preferences: true }, 'accepted');
        hideBanner();
        showToast(getI18nText('toast_cookie_accepted', 'Cookies accepted'), 'success');
      });
    }
    if (declineBtn) {
      declineBtn.addEventListener('click', () => {
        savePrefs({ analytics: false, marketing: false, preferences: false }, 'declined');
        hideBanner();
        showToast(getI18nText('toast_cookie_declined', 'Cookies declined'), 'success');
      });
    }
    if (customizeBtn) {
      customizeBtn.addEventListener('click', () => {
        hideBanner();
        openSettings(customizeBtn);
      });
    }
    [reopenBtnFooter, reopenBtnDrawer].forEach((btn) => {
      if (!btn) return;
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        hideBanner();
        openSettings(btn);
      });
    });

    if (settingsClose) settingsClose.addEventListener('click', () => closeSettings(true));
    if (settingsOverlay) settingsOverlay.addEventListener('click', () => closeSettings(true));
    if (settingsSave) {
      settingsSave.addEventListener('click', () => {
        savePrefs(readTogglesToPrefs(), 'customized');
        closeSettings(true);
        hideBanner();
        showToast(getI18nText('toast_cookie_saved', 'Cookie settings saved'), 'success');
      });
    }

    document.addEventListener('keydown', (e) => {
      if (!isSettingsOpen()) return;
      if (e.key === 'Escape') { e.preventDefault(); closeSettings(true); return; }
      trapSettingsFocus(e);
    });
  })();

  /* ==========================================================
     16. NEWSLETTER (graceful no-op if not present)
     ========================================================== */
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterStatus = document.getElementById('newsletter-status');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const tr = i18n[currentLang] || {};
      const fb = i18n[DEFAULT_LANG] || {};
      const t  = (k) => tr[k] || fb[k] || '';
      const emailField = document.getElementById('newsletter-email');
      const email = emailField ? emailField.value.trim() : '';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        if (newsletterStatus) newsletterStatus.textContent = t('err_email_invalid');
        return;
      }
      if (newsletterStatus) newsletterStatus.textContent = t('footer_newsletter_sending');
      const fd = new FormData();
      fd.append('email', email);
      fd.append('form_type', 'newsletter');
      submitTo(primaryEndpoint, fd)
        .catch(() => submitTo(fallbackEndpoint, fd))
        .then(() => {
          if (newsletterStatus) newsletterStatus.textContent = t('footer_newsletter_success');
          newsletterForm.reset();
        })
        .catch(() => {
          if (newsletterStatus) newsletterStatus.textContent = t('footer_newsletter_error');
        });
    });
  }

  /* ==========================================================
     17. TILT & MAGNETIC — premium only (mousemove-heavy)
     ========================================================== */
  if (!prefersReducedMotion && !isCoarsePointer && perfTier === 'premium') {
    const tiltTargets = document.querySelectorAll('.tool-card, .quote-card, .about-card');
    tiltTargets.forEach((card) => {
      card.classList.add('tilt-card');
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform =
          `perspective(900px) rotateX(${py * -4}deg) rotateY(${px * 4}deg) translateY(-2px)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });

    const magnetTargets = document.querySelectorAll('.btn-primary, .btn-secondary, .tool-open-btn, .tool-docs-btn');
    magnetTargets.forEach((btn) => {
      btn.classList.add('magnetic');
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
        btn.style.transform = `translate(${x}px, ${y}px)`;
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });
  }

  /* ==========================================================
     18. INIT
     ========================================================== */
  let savedLang = null;
  try { savedLang = localStorage.getItem('haiere-lang'); } catch (_) {}

  let urlLang = null;
  try {
    const params = new URLSearchParams(window.location.search);
    const q = (params.get('lang') || '').toLowerCase();
    if (q === 'id' || q === 'en') urlLang = q;
  } catch (_) {}

  applyLang(urlLang || savedLang || detectLang());

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang) applyLang(lang);
    });
  });

  whenTailwindReady(() => renderAllIcons());
  renderAllIcons();

  console.log('Haiere v2026.10.08.4 — ready (perf tier: ' + perfTier + ', default lang: en)');
})();
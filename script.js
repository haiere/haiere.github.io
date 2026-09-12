(function() {
        'use strict';

        // ===== ICONS (rendered from icons.js registry) =====
        if (typeof renderIcons === 'function') renderIcons();

        // ===== I18N =====
        // Strings live in i18n.js (loaded before this file) as window.i18n.
        var i18n = window.i18n || {};

        var currentLang = 'id';

        function detectLang() {
            try {
                return navigator.language.toLowerCase().startsWith('id') ? 'id' : 'en';
            } catch (_) {
                return 'en';
            }
        }

        function applyLang(lang) {
            currentLang = lang;
            var tr = i18n[lang] || i18n.id;

            document.querySelectorAll('[data-i18n]').forEach(function(el) {
                var key = el.dataset.i18n;
                if (tr[key] !== undefined) el.textContent = tr[key];
            });

            document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
                var key = el.dataset.i18nPlaceholder;
                if (tr[key] !== undefined) el.placeholder = tr[key];
            });

            document.querySelectorAll('[data-i18n-label]').forEach(function(el) {
                var key = el.dataset.i18nLabel;
                if (tr[key] !== undefined) el.setAttribute('aria-label', tr[key]);
            });

            // NEW: translate alt attributes on <img> elements
            document.querySelectorAll('[data-i18n-alt]').forEach(function(el) {
                var key = el.dataset.i18nAlt;
                if (tr[key] !== undefined) el.setAttribute('alt', tr[key]);
            });

            // NEW: translate title attributes (e.g. iframe title, tooltips)
            document.querySelectorAll('[data-i18n-title]').forEach(function(el) {
                var key = el.dataset.i18nTitle;
                if (tr[key] !== undefined) el.setAttribute('title', tr[key]);
            });

            document.querySelectorAll('.lang-btn').forEach(function(btn) {
                var btnLang = btn.dataset.lang;
                var isActive = btnLang === lang;
                btn.classList.toggle('active', isActive);
                btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
            });

            document.documentElement.lang = lang;
            try {
                localStorage.setItem('haiere-lang', lang);
            } catch (_) {}

            updateLastUpdated();
        }

        window.applyLang = applyLang;

        var savedLang;
        try {
            savedLang = localStorage.getItem('haiere-lang');
        } catch (_) {}
        applyLang(savedLang || detectLang());

        // ===== THEME & LOGO =====
        var LOGO_LIGHT = 'https://i.postimg.cc/GmWt2wch/H-blue.webp';
        var LOGO_DARK = 'https://i.postimg.cc/8PJ0bhb1/H-haiere.webp';

        function updateLogo() {
            var isDark = document.documentElement.classList.contains('dark');
            var newSrc = isDark ? LOGO_DARK : LOGO_LIGHT;

            document.querySelectorAll('.logo-img').forEach(function(img) {
                if (img.getAttribute('src') === newSrc) return;
                img.classList.add('logo-switching');
                setTimeout(function() {
                    img.src = newSrc;
                    img.onload = function() {
                        img.classList.remove('logo-switching');
                        img.onload = null;
                    };
                    setTimeout(function() {
                        img.classList.remove('logo-switching');
                    }, 400);
                }, 120);
            });
        }

        function setTheme(theme) {
            document.documentElement.classList.toggle('dark', theme === 'dark');
            try {
                localStorage.setItem('theme', theme);
            } catch (_) {}
            var themeToggle = document.getElementById('theme-toggle');
            if (themeToggle) themeToggle.setAttribute('aria-pressed', String(theme === 'dark'));
            updateLogo();
        }

        var themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', function() {
                var isDark = document.documentElement.classList.contains('dark');
                setTheme(isDark ? 'light' : 'dark');
            });
        }

        document.querySelectorAll('.lang-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var lang = this.dataset.lang;
                if (lang && typeof applyLang === 'function') applyLang(lang);
            });
        });

        // ===== DRAWER =====
        var menuBtn = document.getElementById('menu-btn');
        var drawer = document.getElementById('nav-drawer');
        var overlay = document.getElementById('drawer-overlay');
        var drawerClose = document.getElementById('drawer-close');
        var isDrawerOpen = false;
        var drawerLastFocused = null;

        function setBodyScrollLock(locked) {
            document.body.style.overflow = locked ? 'hidden' : '';
        }

        function getDrawerFocusable() {
            if (!drawer) return [];
            return Array.prototype.slice.call(
                drawer.querySelectorAll('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])')
            );
        }

        function trapDrawerFocus(e) {
            if (e.key !== 'Tab' || !isDrawerOpen) return;
            var focusable = getDrawerFocusable();
            if (!focusable.length) return;
            var first = focusable[0];
            var last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }

        function openDrawer() {
            if (!drawer || !menuBtn || !overlay) return;
            drawerLastFocused = document.activeElement;
            drawer.classList.add('open');
            drawer.setAttribute('aria-hidden', 'false');
            menuBtn.setAttribute('aria-expanded', 'true');
            overlay.classList.add('active');
            isDrawerOpen = true;
            setBodyScrollLock(true);
            var focusable = getDrawerFocusable();
            if (focusable.length) focusable[0].focus();
        }

        function closeDrawer() {
            if (!drawer || !menuBtn || !overlay) return;
            drawer.classList.remove('open');
            drawer.setAttribute('aria-hidden', 'true');
            menuBtn.setAttribute('aria-expanded', 'false');
            overlay.classList.remove('active');
            isDrawerOpen = false;
            setBodyScrollLock(false);
            if (drawerLastFocused && typeof drawerLastFocused.focus === 'function') {
                drawerLastFocused.focus();
            } else {
                menuBtn.focus();
            }
            drawerLastFocused = null;
        }

        function toggleDrawer() {
            isDrawerOpen ? closeDrawer() : openDrawer();
        }

        if (menuBtn && drawer && overlay) {
            drawer.setAttribute('aria-hidden', 'true');
            menuBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                toggleDrawer();
            });
            if (drawerClose) {
                drawerClose.addEventListener('click', closeDrawer);
            }
            overlay.addEventListener('click', closeDrawer);
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && isDrawerOpen) {
                    closeDrawer();
                    return;
                }
                trapDrawerFocus(e);
            });
            document.querySelectorAll('#nav-drawer .drawer-item').forEach(function(link) {
                link.addEventListener('click', function() {
                    if (isDrawerOpen) closeDrawer();
                });
            });
            document.addEventListener('click', function(e) {
                if (isDrawerOpen && !drawer.contains(e.target) && !menuBtn.contains(e.target)) {
                    closeDrawer();
                }
            });
            // Close on route change (hash navigation)
            window.addEventListener('hashchange', function() {
                if (isDrawerOpen) closeDrawer();
            });

            var resizeTimerDrawer;
            window.addEventListener('resize', function() {
                clearTimeout(resizeTimerDrawer);
                resizeTimerDrawer = setTimeout(function() {
                    if (window.innerWidth >= 1024 && isDrawerOpen) closeDrawer();
                }, 150);
            });
        }

        // ===== SCROLL PROGRESS =====
        var scrollProgress = document.getElementById('scroll-progress');
        if (scrollProgress) {
            var progressTicking = false;

            function updateProgress() {
                var scrollTop = window.scrollY || document.documentElement.scrollTop;
                var docHeight = document.documentElement.scrollHeight - window.innerHeight;
                var ratio = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
                scrollProgress.style.transform = 'scaleX(' + ratio + ')';
                progressTicking = false;
            }

            window.addEventListener('scroll', function() {
                if (!progressTicking) {
                    requestAnimationFrame(updateProgress);
                    progressTicking = true;
                }
            }, { passive: true });
            updateProgress();
        }

        // ===== NAV EFFECTS =====
        var header = document.getElementById('nav');
        if (header) {
            window.addEventListener('scroll', function() {
                header.classList.toggle('scrolled', window.scrollY > 20);
            }, { passive: true });
        }

        // ===== REVEAL ON SCROLL =====
        if ('IntersectionObserver' in window) {
            var revealObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.08 });
            document.querySelectorAll('.reveal').forEach(function(el) {
                revealObserver.observe(el);
            });
        } else {
            document.querySelectorAll('.reveal').forEach(function(el) {
                el.classList.add('visible');
            });
        }

        // ===== SECTION HIGHLIGHTING =====
        var sections = document.querySelectorAll('section[id]');
        var navLinks = document.querySelectorAll('.nav-link');

        function setActiveNavLink(id) {
            navLinks.forEach(function(link) {
                var isActive = link.getAttribute('href') === '#' + id;
                link.classList.toggle('active', isActive);
                if (isActive) {
                    link.setAttribute('aria-current', 'location');
                } else {
                    link.removeAttribute('aria-current');
                }
            });
        }

        if ('IntersectionObserver' in window && navLinks.length) {
            var sectionObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) setActiveNavLink(entry.target.id);
                });
            }, { rootMargin: '-40% 0px -55% 0px' });
            sections.forEach(function(section) {
                sectionObserver.observe(section);
            });
        }

        // ===== BACK TO TOP =====
        var backTop = document.getElementById('back-top');
        if (backTop) {
            window.addEventListener('scroll', function() {
                var show = window.scrollY > 400;
                backTop.style.opacity = show ? '1' : '0';
                backTop.style.pointerEvents = show ? 'auto' : 'none';
            }, { passive: true });
            backTop.addEventListener('click', function() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // ===== LAST UPDATED =====
        function updateLastUpdated() {
            var el = document.getElementById('last-updated-date');
            if (!el) return;
            var now = new Date();
            var months = {
                id: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober',
                    'November', 'Desember'
                ],
                en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
                    'November', 'December'
                ]
            };
            var monthList = months[currentLang] || months.id;
            var monthName = monthList[now.getMonth()] || monthList[0];
            var day = String(now.getDate()).padStart(2, '0');
            var year = now.getFullYear();
            el.textContent = day + ' ' + monthName + ' ' + year;
        }

        // Call updateLastUpdated on load
        updateLastUpdated();

        // ===== TOAST =====
        function showToast(message, type) {
            var toastContainer = document.getElementById('toast-container');
            if (!toastContainer || !message) return;
            var toast = document.createElement('div');
            toast.className = 'toast';
            var iconClass = type === 'error' ?
                'fas fa-circle-exclamation text-rose-400' :
                'fas fa-circle-check text-emerald-400';
            toast.innerHTML = '<i class="' + iconClass + '" aria-hidden="true"></i><span></span>';
            toast.querySelector('span').textContent = message;
            toastContainer.appendChild(toast);
            requestAnimationFrame(function() {
                toast.classList.add('show');
            });
            setTimeout(function() {
                toast.classList.remove('show');
                setTimeout(function() {
                    toast.remove();
                }, 400);
            }, 3000);
        }

        window.showToast = showToast;

        function getI18nText(key, fallback) {
            if (window.i18n && window.i18n[currentLang] && window.i18n[currentLang][key]) {
                return window.i18n[currentLang][key];
            }
            return fallback || '';
        }

        // ===== COPY BUTTON =====
        function handleCopySuccess(btn) {
            var icon = btn ? btn.querySelector('i') : null;
            if (icon) {
                var orig = icon.className;
                icon.className = 'fas fa-check text-xs text-green-400';
                setTimeout(function() {
                    icon.className = orig;
                }, 1500);
            }
            showToast(getI18nText('toast_copied', 'Copied!'), 'success');
        }

        function fallbackCopy(text, btn) {
            try {
                var ta = document.createElement('textarea');
                ta.value = text;
                ta.setAttribute('readonly', '');
                ta.style.position = 'fixed';
                ta.style.left = '-9999px';
                ta.style.top = '-9999px';
                document.body.appendChild(ta);
                ta.select();
                ta.setSelectionRange(0, ta.value.length);
                var ok = document.execCommand('copy');
                ta.remove();
                if (ok) handleCopySuccess(btn);
                else showToast(getI18nText('toast_copy_failed', 'Copy failed'), 'error');
            } catch (_) {
                showToast(getI18nText('toast_copy_failed', 'Copy failed'), 'error');
            }
        }

        document.querySelectorAll('.copy-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var text = btn.dataset.copy;
                if (!text) return;
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(text)
                        .then(function() { handleCopySuccess(btn); })
                        .catch(function() { fallbackCopy(text, btn); });
                } else {
                    fallbackCopy(text, btn);
                }
            });
        });

        // ===== COOKIE BANNER =====
        var cookieBanner = document.getElementById('cookieBanner');
        var acceptBtn = document.getElementById('acceptCookiesBtn');
        var declineBtn = document.getElementById('declineCookiesBtn');
        var cookieConsent = null;

        function hideCookieBanner() {
            if (cookieBanner) cookieBanner.classList.remove('show');
        }

        try {
            cookieConsent = localStorage.getItem('haiere-cookie');
        } catch (_) {}

        if (cookieBanner) {
            if (!cookieConsent) {
                setTimeout(function() {
                    cookieBanner.classList.add('show');
                }, 1500);
            } else {
                hideCookieBanner();
            }
        }

        if (acceptBtn) {
            acceptBtn.addEventListener('click', function() {
                try {
                    localStorage.setItem('haiere-cookie', 'accepted');
                } catch (_) {}
                hideCookieBanner();
                showToast(getI18nText('toast_cookie_accepted', 'Cookies accepted'), 'success');
            });
        }

        if (declineBtn) {
            declineBtn.addEventListener('click', function() {
                try {
                    localStorage.setItem('haiere-cookie', 'declined');
                } catch (_) {}
                hideCookieBanner();
                showToast(getI18nText('toast_cookie_declined', 'Cookies declined'), 'success');
            });
        }

        // ===== CONTACT FORM =====
        var nameInp = document.getElementById('name');
        var emailInp = document.getElementById('email');
        var msgInp = document.getElementById('message');
        var nameErr = document.getElementById('name-error');
        var emailErr = document.getElementById('email-error');
        var msgErr = document.getElementById('message-error');
        var form = document.getElementById('contact-form');
        var statusDiv = document.getElementById('form-status');

        var primaryEndpoint = 'https://formspree.io/f/mpqkqanp';
        var fallbackEndpoint = 'https://formspree.io/f/xgvkobyl';

        function clearFieldError(input, errorEl) {
            if (!input || !errorEl) return;
            input.classList.remove('input-error');
            input.setAttribute('aria-invalid', 'false');
            errorEl.textContent = '';
        }

        function setFieldError(input, errorEl, message) {
            if (!input || !errorEl) return;
            input.classList.add('input-error');
            input.setAttribute('aria-invalid', 'true');
            errorEl.textContent = message;
        }

        function clearStatus() {
            if (statusDiv) statusDiv.textContent = '';
        }

        [nameInp, emailInp, msgInp].forEach(function(input) {
            if (!input) return;
            input.addEventListener('input', function() {
                if (input === nameInp) clearFieldError(nameInp, nameErr);
                if (input === emailInp) clearFieldError(emailInp, emailErr);
                if (input === msgInp) clearFieldError(msgInp, msgErr);
                clearStatus();
            });
        });

        function validateForm() {
            var tr = i18n[currentLang];
            var valid = true;
            clearFieldError(nameInp, nameErr);
            clearFieldError(emailInp, emailErr);
            clearFieldError(msgInp, msgErr);

            var name = nameInp ? nameInp.value.trim() : '';
            var email = emailInp ? emailInp.value.trim() : '';
            var msg = msgInp ? msgInp.value.trim() : '';

            if (name.length < 4) {
                setFieldError(nameInp, nameErr, tr.err_name_short);
                valid = false;
            } else if (!/^[\p{L}\s'-]+$/u.test(name)) {
                setFieldError(nameInp, nameErr, tr.err_name_pattern);
                valid = false;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                setFieldError(emailInp, emailErr, tr.err_email_invalid);
                valid = false;
            }

            if (msg.length < 20) {
                setFieldError(msgInp, msgErr, tr.err_message_short);
                valid = false;
            }

            return valid;
        }

        function submitTo(url, formData) {
            return fetch(url, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            }).then(function(res) {
                if (!res.ok) throw new Error('Request failed');
                return res.json();
            });
        }

        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                var tr = i18n[currentLang];
                if (!validateForm()) {
                    if (statusDiv) statusDiv.textContent = tr.form_error;
                    return;
                }
                if (statusDiv) statusDiv.textContent = tr.form_sending;

                var formData = new FormData(form);

                submitTo(primaryEndpoint, formData)
                    .then(function() {
                        if (statusDiv) statusDiv.textContent = tr.form_success;
                        form.reset();
                    })
                    .catch(function() {
                        if (statusDiv) statusDiv.textContent = tr.form_fallback;
                        submitTo(fallbackEndpoint, formData)
                            .then(function() {
                                if (statusDiv) statusDiv.textContent = tr.form_success;
                                form.reset();
                            })
                            .catch(function() {
                                if (statusDiv) statusDiv.textContent = tr.form_error;
                            });
                    });
            });
        }

        // ===== HERO SPOTLIGHT =====
        var heroSection = document.getElementById('hero');
        var heroSpotlight = document.getElementById('hero-spotlight');
        var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        var isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

        if (heroSection && heroSpotlight && !prefersReducedMotion && !isCoarsePointer) {
            heroSection.addEventListener('mousemove', function(e) {
                var rect = heroSection.getBoundingClientRect();
                var x = ((e.clientX - rect.left) / rect.width) * 100;
                var y = ((e.clientY - rect.top) / rect.height) * 100;
                heroSpotlight.style.setProperty('--x', x + '%');
                heroSpotlight.style.setProperty('--y', y + '%');
                heroSpotlight.classList.add('active');
            });
            heroSection.addEventListener('mouseleave', function() {
                heroSpotlight.classList.remove('active');
            });
        }

        // ===== TILT & MAGNETIC =====
        if (!prefersReducedMotion && !isCoarsePointer) {
            var tiltTargets = document.querySelectorAll('.tool-card, #quotes .glass-hover, #about .glass-hover:not(.contact-link)');
            tiltTargets.forEach(function(card) {
                card.classList.add('tilt-card');
                card.addEventListener('mousemove', function(e) {
                    var rect = card.getBoundingClientRect();
                    var px = (e.clientX - rect.left) / rect.width - 0.5;
                    var py = (e.clientY - rect.top) / rect.height - 0.5;
                    card.style.transform = 'perspective(900px) rotateX(' + (py * -4) + 'deg) rotateY(' + (px * 4) +
                        'deg) translateY(-2px)';
                });
                card.addEventListener('mouseleave', function() {
                    card.style.transform = '';
                });
            });

            var magnetTargets = document.querySelectorAll('.btn-primary, .btn-secondary, .tool-open-btn, .tool-docs-btn');
            magnetTargets.forEach(function(btn) {
                btn.classList.add('magnetic');
                btn.addEventListener('mousemove', function(e) {
                    var rect = btn.getBoundingClientRect();
                    var x = (e.clientX - rect.left - rect.width / 2) * 0.25;
                    var y = (e.clientY - rect.top - rect.height / 2) * 0.25;
                    btn.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
                });
                btn.addEventListener('mouseleave', function() {
                    btn.style.transform = '';
                });
            });
        }

        // ===== STAT COUNTER =====
        var statEls = document.querySelectorAll('.stat-number');
        if (statEls.length && 'IntersectionObserver' in window) {
            var statObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (!entry.isIntersecting) return;
                    var el = entry.target;
                    var target = parseInt(el.dataset.count, 10) || 0;
                    var suffix = el.dataset.suffix || '';
                    var duration = 1200;
                    var startTime = null;

                    function step(timestamp) {
                        if (!startTime) startTime = timestamp;
                        var progress = Math.min((timestamp - startTime) / duration, 1);
                        var eased = 1 - Math.pow(1 - progress, 3);
                        el.textContent = Math.round(eased * target) + suffix;
                        if (progress < 1) {
                            requestAnimationFrame(step);
                        } else {
                            el.textContent = target + suffix;
                        }
                    }
                    requestAnimationFrame(step);
                    statObserver.unobserve(el);
                });
            }, { threshold: 0.4 });
            statEls.forEach(function(el) {
                statObserver.observe(el);
            });
        }

        // ===== TOOL FILTER =====
        var filterButtons = document.querySelectorAll('.filter-btn');
        var toolCards = document.querySelectorAll('.tool-card');

        function setActiveFilter(activeFilter) {
            filterButtons.forEach(function(button) {
                var isActive = button.dataset.filter === activeFilter;
                button.classList.toggle('active', isActive);
                button.setAttribute('aria-pressed', String(isActive));
            });
            toolCards.forEach(function(card) {
                var shouldShow = activeFilter === 'all' || card.dataset.category === activeFilter;
                card.hidden = !shouldShow;
                card.setAttribute('aria-hidden', String(!shouldShow));
            });
        }

        filterButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                setActiveFilter(button.dataset.filter);
            });
        });
        setActiveFilter('all');

        // ===== TOOL DOCS MODAL (README viewer) =====
        var docsOverlay = document.getElementById('docsOverlay');
        var docsModal = document.getElementById('docsModal');
        var docsModalTitle = document.getElementById('docsModalTitle');
        var docsModalBody = document.getElementById('docsModalBody');
        var docsModalClose = document.getElementById('docsModalClose');
        var docsModalRepoLink = document.getElementById('docsModalRepoLink');
        var docsCache = {};
        var docsLastFocused = null;

        // Markdown rendering via the `marked` library (loaded in index.html
        // before this file). Falls back to plain text if the CDN failed.
        function mdToHtml(md) {
            if (typeof marked !== 'undefined' && marked && typeof marked.parse === 'function') {
                marked.setOptions({ gfm: true, breaks: true, headerIds: false, mangle: false });
                return marked.parse(md);
            }
            return null;
        }

        function fetchReadme(repo) {
            if (docsCache[repo]) return Promise.resolve(docsCache[repo]);
            var branches = ['main', 'master'];
            var attempt = function(i) {
                if (i >= branches.length) return Promise.reject(new Error('not-found'));
                var url = 'https://raw.githubusercontent.com/haiere/' + repo + '/' + branches[i] + '/README.md';
                return fetch(url).then(function(res) {
                    if (!res.ok) return attempt(i + 1);
                    return res.text();
                }).catch(function() {
                    return attempt(i + 1);
                });
            };
            return attempt(0).then(function(text) {
                docsCache[repo] = text;
                return text;
            });
        }

        function openDocsModal(repo, toolName) {
            if (!docsModal || !docsOverlay) return;
            var tr = i18n[currentLang];
            docsLastFocused = document.activeElement;

            docsModalTitle.textContent = (tr.tool_docs || 'How to Use') + ' — ' + toolName;
            docsModalBody.innerHTML = '<div class="docs-modal-loading">' + (tr.docs_loading || 'Loading...') + '</div>';
            docsModalRepoLink.href = 'https://github.com/haiere/' + repo;

            docsOverlay.classList.add('active');
            docsModal.classList.add('active');
            docsOverlay.setAttribute('aria-hidden', 'false');
            docsModal.setAttribute('aria-hidden', 'false');
            setBodyScrollLock(true);
            docsModalClose.focus();

            fetchReadme(repo)
                .then(function(md) {
                    var rendered = mdToHtml(md);
                    if (rendered !== null) {
                        docsModalBody.innerHTML = '<div class="docs-markdown">' + rendered + '</div>';
                    } else {
                        // marked failed to load from the CDN — show the raw
                        // README as plain text rather than nothing.
                        docsModalBody.innerHTML = '';
                        var fallbackPre = document.createElement('pre');
                        fallbackPre.className = 'docs-markdown-fallback';
                        fallbackPre.textContent = md;
                        docsModalBody.appendChild(fallbackPre);
                    }
                })
                .catch(function() {
                    docsModalBody.innerHTML = '<div class="docs-modal-error">' +
                        (tr.docs_error || 'Documentation is not available yet for this tool.') + '</div>';
                });
        }

        function closeDocsModal() {
            if (!docsModal || !docsOverlay) return;
            docsOverlay.classList.remove('active');
            docsModal.classList.remove('active');
            docsOverlay.setAttribute('aria-hidden', 'true');
            docsModal.setAttribute('aria-hidden', 'true');
            setBodyScrollLock(false);
            if (docsLastFocused && typeof docsLastFocused.focus === 'function') {
                docsLastFocused.focus();
            }
        }

        document.querySelectorAll('.tool-docs-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var repo = btn.dataset.repo;
                var name = btn.dataset.toolName || '';
                if (!repo) return;
                openDocsModal(repo, name);
            });
        });

        if (docsModalClose) docsModalClose.addEventListener('click', closeDocsModal);
        if (docsOverlay) docsOverlay.addEventListener('click', closeDocsModal);
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && docsModal && docsModal.classList.contains('active')) {
                closeDocsModal();
            }
        });

        console.log('Haiere Studio - Cleaned & Optimized');
    })();
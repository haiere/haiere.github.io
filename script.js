    (function() {
        'use strict';

        // ===== I18N =====
        var i18n = {
            id: {
                skip_to_main: 'Langsung ke konten utama',
                raia_open: 'Buka RAIA AI',
                raia_try: 'Coba RAIA AI',
                home_label: 'Haiere - Beranda',
                logo_alt: 'Logo Haiere',
                toggle_theme: 'Ubah tema',
                open_menu: 'Buka menu',
                menu_title: 'Menu',
                nav_about: 'Tentang',
                nav_music: 'Musik',
                nav_tools: 'Tools',
                nav_contact: 'Kontak',
                nav_quotes: 'Kutipan',
                nav_privacy: 'Privasi',
                nav_github: 'GitHub',
                nav_raia: 'RAIA',
                nav_language: 'Bahasa',
                nav_tagline: 'Software, AI, dan tools yang dibuat dengan privasi sebagai prioritas',
                nav_privacy_policy: 'Kebijakan Privasi',
                nav_terms: 'Syarat & Ketentuan',
                hero_title_1: 'Hajir',
                hero_title_2: 'Studio',
                hero_desc: 'Halo! Aku Hajir. Aku bikin software, web tools, dan AI yang cepat, simpel, dan mudah dipakai.',
                hero_cta1: 'Lihat Karyaku',
                hero_cta2: 'Coba RAIA AI',
                about_role: 'Developer · AI Builder',
                about_role_musician: 'Musisi',
                about_role_developer: 'Developer',
                tag_developer: 'Developer',
                tag_musician: 'Musik',
                about_p1: 'Aku fokus bikin software, aplikasi web, tools, dan AI yang benar-benar membantu kerja jadi lebih cepat.',
                about_p2: 'Semua proyek kubuat tetap ringan, aman, mudah dipakai, dan hanya memakai data yang memang dibutuhkan.',
                about_p3: 'Kalau lagi nggak ngoding, aku biasanya bikin musik untuk menyalurkan ide di luar dunia teknologi.',
                about_cta: 'Lihat RAIA',
                stat_approach: 'Fokus',
                stat_philosophy: 'Prinsip',
                stat_tools_label: 'Tools Rilis',
                stat_albums_label: 'Rilis Musik',
                stat_songs_label: 'Lagu Original',
                stat_privacy_label: 'Privasi Diutamakan',
                RWR: 'RWR - AMA',
                RWR_closing: 'RWR adalah bagian dari rencana jangka panjangku untuk membangun teknologi yang benar-benar berguna.',
                toast_copied: 'Berhasil disalin!',
                toast_cookie_accepted: 'Pengaturan cookie berhasil disimpan.',
                toast_cookie_declined: 'Cookie tetap dimatikan.',
                toast_copy_failed: 'Gagal menyalin, coba lagi.',
                music_title: 'Musik Andalan',
                music_subtitle: 'Beberapa lagu yang kubuat saat ada waktu luang.',
                music_player_label: 'Pemutar Musik',
                music_player_desc: 'Pilih lagu lalu langsung dengarkan.',
                music_open_link: 'Kalau pemutar tidak muncul, klik di sini.',
                quotes_title: 'Kutipan',
                quotes_subtitle: 'Beberapa kutipan yang jadi inspirasi buatku.',
                q1_text: 'Waktumu terbatas, jadi jangan habiskan untuk menjalani hidup orang lain.',
                q1_author: 'Steve Jobs',
                q2_text: 'Tantangannya adalah melakukannya lebih cepat daripada orang lain tanpa kehilangan kendali.',
                q2_author: 'Adrian Newey',
                q3_text: 'Semuanya dimulai dari orang yang ada di depan cermin.',
                q3_author: 'Michael Jackson',
                q4_text: 'Musik adalah penghubung antara kehidupan spiritual dan kehidupan indrawi.',
                q4_author: 'Ludwig van Beethoven',
                tools_title: 'Tools Gratis yang Siap Dipakai',
                tools_subtitle: 'Gratis, cepat, aman, dan bisa langsung dipakai tanpa perlu daftar.',
                filter_all: 'Semua',
                filter_music: 'Musik',
                filter_security: 'Keamanan',
                filter_web: 'Web',
                status_stable: 'Stabil',
                tool1_desc: 'Buat file lirik LRC yang sinkron dengan lagu dalam hitungan detik.',
                tool2_desc: 'Buat password acak yang kuat untuk menjaga akun tetap aman.',
                tool3_desc: 'Hapus metadata sensitif, seperti lokasi, sebelum foto dibagikan.',
                tool4_desc: 'Bandingkan dua teks dan lihat perbedaannya secara langsung.',
                tool5_desc: 'AI ringan yang membantu kerja jadi lebih cepat tanpa ribet.',
                tool6_desc: 'Chat AI yang bisa dipakai dengan berbagai provider sesuai kebutuhan.',
                tool_open: 'Buka Tool',
                contact_title: 'Yuk Ngobrol atau Kolaborasi',
                contact_subtitle: 'Punya pertanyaan, ide, atau cuma ingin menyapa? Kirim pesan saja.',
                form_name: 'Nama',
                form_email: 'Email',
                form_message: 'Pesan',
                form_submit: 'Kirim',
                form_name_placeholder: 'Masukkan nama lengkapmu',
                form_email_placeholder: 'nama@contoh.com',
                form_message_placeholder: 'Tulis pesanmu di sini...',
                form_sending: 'Mengirim...',
                form_success: 'Pesan berhasil dikirim!',
                form_error: 'Pesan gagal dikirim. Coba lagi, ya.',
                form_fallback: 'Atau hubungi aku lewat platform berikut.',
                err_name_short: 'Nama minimal 4 karakter.',
                err_name_pattern: 'Nama hanya boleh berisi huruf dan spasi.',
                err_email_invalid: 'Masukkan alamat email yang valid.',
                err_message_short: 'Pesan minimal 20 karakter.',
                footer_tagline: 'Website Pribadi · Tools Gratis · by Haiere',
                footer_copy: '© 2026 Haiere · Dibuat dengan sepenuh hati.',
                footer_disclaimer: 'Disclaimer: Semua tools digunakan atas tanggung jawab masing-masing. Haiere tidak bertanggung jawab atas kehilangan atau kerusakan data.'
            },
            en: {
                skip_to_main: 'Skip to main content',
                raia_open: 'Open RAIA AI',
                raia_try: 'Try RAIA AI',
                home_label: 'Haiere - Home',
                logo_alt: 'Haiere logo',
                toggle_theme: 'Change theme',
                open_menu: 'Open menu',
                menu_title: 'Menu',
                nav_about: 'About',
                nav_music: 'Music',
                nav_tools: 'Tools',
                nav_contact: 'Contact',
                nav_quotes: 'Quotes',
                nav_privacy: 'Privacy',
                nav_github: 'GitHub',
                nav_raia: 'RAIA',
                nav_language: 'Language',
                nav_tagline: 'Software, AI, and tools built with privacy as a priority',
                nav_privacy_policy: 'Privacy Policy',
                nav_terms: 'Terms & Conditions',
                hero_title_1: 'Hajir',
                hero_title_2: 'Studio',
                hero_desc: "Hi! I'm Hajir. I build software, web tools, and AI that are fast, simple, and easy to use.",
                hero_cta1: 'See My Work',
                hero_cta2: 'Try RAIA AI',
                about_role: 'Developer · AI Builder',
                about_role_musician: 'Musician',
                about_role_developer: 'Developer',
                tag_developer: 'Developer',
                tag_musician: 'Music',
                about_p1: 'I focus on building software, web apps, tools, and AI that really help people work faster.',
                about_p2: 'I make everything lightweight, secure, easy to use, and limited to the data that is actually needed.',
                about_p3: 'When I am not coding, I usually make music to express ideas outside the tech world.',
                about_cta: 'Explore RAIA',
                stat_approach: 'Focus',
                stat_philosophy: 'Principles',
                stat_tools_label: 'Tools Released',
                stat_albums_label: 'Music Releases',
                stat_songs_label: 'Original Songs',
                stat_privacy_label: 'Privacy First',
                RWR: 'RWR - AMA',
                RWR_closing: 'RWR is part of my long-term plan to build technology that is genuinely useful.',
                toast_copied: 'Copied successfully!',
                toast_cookie_accepted: 'Cookie settings saved.',
                toast_cookie_declined: 'Cookies remain disabled.',
                toast_copy_failed: 'Failed to copy, try again.',
                music_title: 'Signature Music',
                music_subtitle: 'A few songs I made in my spare time.',
                music_player_label: 'Music Player',
                music_player_desc: 'Choose a song and listen right away.',
                music_open_link: "Click here if the player doesn't appear.",
                quotes_title: 'Quotes',
                quotes_subtitle: 'A few quotes that inspire me.',
                q1_text: "Your time is limited, so don't waste it living someone else's life.",
                q1_author: 'Steve Jobs',
                q2_text: 'The challenge is to do it faster than others without losing control.',
                q2_author: 'Adrian Newey',
                q3_text: 'It all starts with the person in the mirror.',
                q3_author: 'Michael Jackson',
                q4_text: 'Music is the bridge between spiritual life and sensory life.',
                q4_author: 'Ludwig van Beethoven',
                tools_title: 'Free Tools Ready to Use',
                tools_subtitle: 'Free, fast, secure, and ready to use without sign-up.',
                filter_all: 'All',
                filter_music: 'Music',
                filter_security: 'Security',
                filter_web: 'Web',
                status_stable: 'Stable',
                tool1_desc: 'Create synchronized LRC lyric files in seconds.',
                tool2_desc: 'Generate strong random passwords to keep your accounts secure.',
                tool3_desc: 'Remove sensitive metadata, such as location, before sharing your photos.',
                tool4_desc: 'Compare two texts and see the differences instantly.',
                tool5_desc: 'A lightweight AI tool that helps you work faster without hassle.',
                tool6_desc: 'An AI chat that can be used with different providers based on your needs.',
                tool_open: 'Open Tool',
                contact_title: "Let's Chat or Collaborate",
                contact_subtitle: 'Got a question, idea, or just want to say hi? Send a message.',
                form_name: 'Name',
                form_email: 'Email',
                form_message: 'Message',
                form_submit: 'Send',
                form_name_placeholder: 'Enter your full name',
                form_email_placeholder: 'name@example.com',
                form_message_placeholder: 'Write your message here...',
                form_sending: 'Sending...',
                form_success: 'Message sent successfully!',
                form_error: 'Message failed to send. Please try again.',
                form_fallback: 'Or reach me through the following platforms.',
                err_name_short: 'Name must be at least 4 characters.',
                err_name_pattern: 'Name may only contain letters and spaces.',
                err_email_invalid: 'Please enter a valid email address.',
                err_message_short: 'Message must be at least 20 characters.',
                footer_tagline: 'Personal Website · Free Tools · by Haiere',
                footer_copy: '© 2026 Haiere · Made with care.',
                footer_disclaimer: 'Disclaimer: Use all tools at your own risk. Haiere is not responsible for any data loss or damage.'
            }
        };

        // Expose i18n globally so getI18nText can access it
        window.i18n = i18n;

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

        function setBodyScrollLock(locked) {
            document.body.style.overflow = locked ? 'hidden' : '';
        }

        function openDrawer() {
            if (!drawer || !menuBtn || !overlay) return;
            drawer.classList.add('open');
            menuBtn.setAttribute('aria-expanded', 'true');
            overlay.classList.add('active');
            isDrawerOpen = true;
            setBodyScrollLock(true);
        }

        function closeDrawer() {
            if (!drawer || !menuBtn || !overlay) return;
            drawer.classList.remove('open');
            menuBtn.setAttribute('aria-expanded', 'false');
            overlay.classList.remove('active');
            isDrawerOpen = false;
            setBodyScrollLock(false);
        }

        function toggleDrawer() {
            isDrawerOpen ? closeDrawer() : openDrawer();
        }

        if (menuBtn && drawer && overlay) {
            menuBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                toggleDrawer();
            });
            if (drawerClose) {
                drawerClose.addEventListener('click', closeDrawer);
            }
            overlay.addEventListener('click', closeDrawer);
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && isDrawerOpen) closeDrawer();
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

        // ===== AMBIENT BACKGROUND PARALLAX (very light, respects reduced motion) =====
        (function() {
            var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            var blobs = document.querySelectorAll('.aurora-blob');
            if (!blobs.length || reduceMotion) return;

            var parallaxTicking = false;
            function updateParallax() {
                var y = window.scrollY || document.documentElement.scrollTop;
                blobs.forEach(function(blob, i) {
                    var depth = 0.015 + i * 0.008;
                    blob.style.marginTop = (y * depth * -1) + 'px';
                });
                parallaxTicking = false;
            }
            window.addEventListener('scroll', function() {
                if (!parallaxTicking) {
                    requestAnimationFrame(updateParallax);
                    parallaxTicking = true;
                }
            }, { passive: true });
        })();

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

            var magnetTargets = document.querySelectorAll('.btn-primary, .btn-secondary, .tool-open-btn');
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

        console.log('Haiere Studio - Cleaned & Optimized');
    })();
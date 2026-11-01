/* ============================================================
   i18n.js Nova v1.0.2, Haiere
   Complete bilingual string table. Every data-i18n* attribute in
   index.html resolves here. Keys are shared across id/en.

   Nova v1.0.2 changes:
   - Removed all "Privacy First" phrasing and replaced it with a
     neutral "Useful tools, thoughtful experiments." identity.
   - Added AI & Bots section keys (ai_eyebrow, ai_title, ai_subtitle,
     ai_raia_desc, ai_kirana_desc, cat_ai_bot, nav_ai_bots).
   - Rewrote tool and game descriptions to match the new ordering.
   - RWR_closing retained solely for the footer.
   - Added footer_version / footer_last_updated keys.
   - Copy revision: clearer, more natural id/en wording, consistent
     tone, fixed quotation marks in quotes, removed em dashes.
   - Added status_demo key, used on RaiaSpace and the Chess, Orbit
     Weaver and Starfall cards. Loveyou is not a demo.
   ============================================================ */
window.i18n = {
  id: {
    /* --- Page title --- */
    page_title: 'Hajir Muhaajir: Pembuat Web, AI & Alat Gratis | Haiere',

    /* --- Accessibility / global --- */
    skip_to_main: 'Lewati ke konten utama',
    raia_open: 'Buka RAIA AI',
    raia_try: 'Coba RAIA AI',
    home_label: 'Beranda Haiere',
    logo_alt: 'Logo Haiere',
    toggle_theme: 'Ganti tema',
    open_menu: 'Buka menu',
    close_menu: 'Tutup menu',
    menu_title: 'Menu',
    back_to_top: 'Kembali ke atas',

    /* --- Navigation --- */
    nav_home: 'Beranda',
    nav_about: 'Tentang',
    nav_tools: 'Alat',
    nav_ai_bots: 'AI & Bot',
    nav_games: 'Game',
    nav_music: 'Musik',
    nav_quotes: 'Kutipan',
    nav_contact: 'Kontak',
    nav_privacy: 'Privasi',
    nav_github: 'GitHub',
    nav_raia: 'RAIA',
    nav_kirana: 'Kirana',
    nav_language: 'Bahasa',
    nav_tagline: 'Alat, AI, dan aplikasi untuk belajar dan kerja harian',
    nav_privacy_policy: 'Kebijakan Privasi',
    nav_terms: 'Syarat & Ketentuan',

    /* --- Hero --- */
    hero_title_1: 'Hajir',
    hero_title_2: 'Muhaajir',
    hero_desc: 'Halo! Saya Hajir. Saya membuat alat, aplikasi web, dan AI untuk membantu kamu belajar, ngoding, dan menyelesaikan pekerjaan harian.',
    hero_cta1: 'Lihat Proyek',
    hero_cta2: 'Coba RAIA AI',

    /* --- Ticker --- */
    ticker_musician: 'Musisi',
    ticker_developer: 'Developer',
    ticker_useful: 'Alat Berguna',
    ticker_ai: 'Pembuat AI',
    ticker_openweb: 'Web Terbuka',
    ticker_github: 'GitHub Pages',
    ticker_creative: 'Teknologi Seru',

    /* --- About --- */
    about_eyebrow: 'Tentang',
    about_title: 'Membuat software yang sederhana dan berguna',
    about_role: 'Developer · Pembuat AI',
    about_role_musician: 'Musisi',
    about_role_developer: 'Developer',
    about_role_ai: 'Pembuat AI',

    tag_developer: 'Developer',
    tag_musician: 'Musik',

    about_p1: 'Saya suka membuat alat, aplikasi web, dan AI. Semuanya saya buat agar kamu bisa bekerja lebih cepat dan lebih mudah.',
    about_p2: 'Semua proyek saya dibuat ringan dan mudah dipakai, dengan fokus pada fitur yang benar-benar berguna.',
    about_p3: 'Saya memakai HTML, CSS, JavaScript, dan teknologi web lainnya untuk mengubah ide menjadi aplikasi yang bisa dipakai.',
    about_p4: 'Saya juga membuat musik. Keduanya adalah cara saya mengekspresikan diri.',

    about_cta: 'Coba RAIA',
    about_cta_secondary: 'Hubungi Saya',

    /* --- Statistics --- */
    stat_approach: 'Fokus Utama',
    stat_philosophy: 'Prinsip Kerja',
    stat_tools_label: 'Alat yang Dirilis',
    stat_albums_label: 'Album Musik',
    stat_songs_label: 'Lagu Buatan Sendiri',
    stat_openweb_label: 'Web Terbuka',

    /* --- RWR (footer only) --- */
    RWR_closing: 'RWR adalah bagian dari hidup saya, suatu hari nanti RWR',

    /* --- Toasts --- */
    toast_copied: 'Sudah disalin!',
    toast_cookie_accepted: 'Pengaturan cookie disimpan!',
    toast_cookie_declined: 'Cookie dimatikan.',
    toast_copy_failed: 'Gagal menyalin. Silakan coba lagi.',

    /* --- Music --- */
    music_eyebrow: 'Musik',
    music_title: 'Signature Music',
    music_subtitle: 'Beberapa lagu buatan saya. Cocok untuk belajar, ngoding, atau bersantai.',
    music_player_label: 'Pemutar Musik',
    music_player_desc: 'Pilih lagu dan langsung putar di browser.',
    music_open_link: 'Pemutar tidak muncul? Buka lewat tautan ini.',
    music_open_app: 'Buka Pemutar',
    music_readme_guide: 'Baca panduan lengkap di GitHub',
    music_iframe_title: 'Pemutar Signature Music',
    logo_music_alt: 'Logo Signature Music',

    music_features_title: 'Fitur',
    music_features_1: 'Memutar musik langsung di browser.',
    music_features_2: 'Atur volume dan pilih lagu yang kamu suka.',
    music_features_3: 'Ringan, tanpa server, dan mudah dipakai.',
    music_usage_title: 'Cara Pakai',
    music_usage_desc: 'Pilih lagu dari daftar, atur volume, lalu putar. Semuanya berjalan di browser tanpa perlu login.',
    music_setup_title: 'Cara Memasang di Komputer',
    music_setup_desc: 'Unduh repositori, jalankan server sederhana, lalu buka di browser.',
    music_readme_title: 'Panduan Lengkap',
    music_readme_desc: 'Panduan fitur dan cara memasang ada di GitHub.',

    /* --- Quotes --- */
    quotes_eyebrow: 'Kutipan',
    quotes_title: 'Kutipan Pilihan',
    quotes_subtitle: 'Beberapa kutipan yang menginspirasi saya saat belajar dan berkarya.',

    q1_text: '“Satu-satunya cara untuk melakukan pekerjaan hebat adalah dengan mencintai apa yang kamu kerjakan.”',
    q1_author: 'Steve Jobs',
    q2_text: '“Saya tidak gagal. Saya hanya menemukan 10.000 cara yang tidak berhasil.”',
    q2_author: 'Thomas Edison',
    q3_text: '“Jika kamu tidak bisa membuatnya bagus, setidaknya buat agar terlihat bagus.”',
    q3_author: 'Bill Gates',
    q4_text: '“Saya sudah gagal berulang kali dalam hidup. Itulah alasan saya bisa berhasil.”',
    q4_author: 'Michael Jordan',

    /* --- Beat Tools --- */
    tools_eyebrow: 'Alat Bantu',
    tools_title: 'Beat Tools',
    tools_subtitle: 'Alat gratis untuk ngoding, mengolah data, mencoba AI, dan pekerjaan harian.',

    filter_all: 'Semua',
    filter_ai: 'AI',
    filter_developer: 'Developer',
    filter_web: 'Web',
    filter_security: 'Keamanan',
    filter_music: 'Musik',

    status_stable: 'Stabil',
    status_beta: 'Beta',
    status_experimental: 'Uji Coba',
    status_demo: 'Demo',

    cat_lrc: 'Pembuat LRC',
    cat_password: 'Pengelola Kata Sandi',
    cat_metadata: 'Penghapus Metadata',
    cat_text: 'Pembanding Teks',
    cat_ai_tool: 'Alat AI',
    cat_ai_bot: 'AI/Bot',
    cat_ai_chatbot: 'Chatbot AI',
    cat_search: 'Mesin Pencari',
    cat_calc: 'Kalkulator',
    cat_chess: 'Permainan Catur',
    cat_dev_tool: 'Alat Developer',
    cat_creative: 'Kreatif',

    tool1_desc: 'Buat file lirik LRC yang tersinkron dengan audiomu, dengan cepat dan mudah.',
    tool2_desc: 'Buat kata sandi acak yang kuat agar akunmu tetap aman.',
    tool3_desc: 'Hapus data sensitif, seperti lokasi, dari foto sebelum dibagikan.',
    tool4_desc: 'Bandingkan dua teks dan lihat perbedaannya dengan jelas.',
    tool5_desc: 'Perkecil dan optimalkan kode atau teks langsung di browser.',
    tool6_desc: 'Mesin pencari ringan untuk menemukan hal baru di web terbuka.',
    tool7_desc: 'Kalkulator sederhana dan cepat untuk hitungan sehari-hari.',

    tool_open: 'Buka Alat',
    tool_docs: 'Cara Pakai',

    docs_loading: 'Memuat panduan…',
    docs_error: 'Panduan untuk alat ini belum tersedia.',
    docs_view_repo: 'Lihat Repositori',
    docs_modal_close: 'Tutup',

    /* --- AI & Bots --- */
    ai_eyebrow: 'AI & Bot',
    ai_title: 'AI & Bot',
    ai_subtitle: 'Chatbot dan asisten untuk ngobrol, mencari ide, dan membantu pekerjaan harian.',
    ai_raia_desc: 'Chatbot AI untuk ngobrol, mencari ide, dan alur kerja yang berguna.',
    ai_kirana_desc: 'Teman ngobrol AI yang hangat untuk obrolan kreatif dan ide harian.',

    /* --- Games --- */
    games_eyebrow: 'Game',
    games_title: 'Permainan Mini',
    games_subtitle: 'Game ringan yang bisa langsung dimainkan di browser. Tanpa instal, tanpa login.',
    game_play: 'Mainkan',
    game_chess_name: 'Catur',
    game_chess_desc: 'Main catur klasik langsung di browser.',
    game_chess_tag: 'Papan Klasik',
    game_loveyou_name: 'Loveyou',
    game_loveyou_desc: 'Halaman interaktif kecil sebagai hadiah digital yang hangat.',
    game_loveyou_tag: 'Interaktif',
    game_orbit_name: 'Orbit Weaver',
    game_orbit_desc: 'Bawa pesawatmu melewati jalur orbit dan bintang-bintang.',
    game_orbit_tag: 'Arcade',
    game_starfall_name: 'Starfall',
    game_starfall_desc: 'Tangkap bintang yang jatuh di game arcade singkat ini.',
    game_starfall_tag: 'Arcade',

    /* --- Contact --- */
    contact_eyebrow: 'Kontak',
    contact_title: 'Yuk, Ngobrol!',
    contact_subtitle: 'Punya pertanyaan, ide, atau proyek yang ingin dibahas? Hubungi saya lewat formulir ini atau kirim email langsung ke',

    form_name: 'Nama',
    form_email: 'Email',
    form_message: 'Pesan',
    form_submit: 'Kirim',

    form_name_placeholder: 'Tulis namamu di sini',
    form_email_placeholder: 'emailkamu@contoh.com',
    form_message_placeholder: 'Tulis pesan atau pertanyaanmu di sini…',

    form_sending: 'Mengirim…',
    form_success: 'Pesanmu sudah terkirim!',
    form_error: 'Pesan gagal terkirim. Coba lagi, ya.',
    form_fallback: 'Atau sapa saya lewat media sosial:',

    err_name_short: 'Nama minimal 4 huruf, ya.',
    err_name_pattern: 'Nama hanya boleh berisi huruf dan spasi.',
    err_email_invalid: 'Isi alamat email yang benar, ya.',
    err_message_short: 'Pesan minimal 20 huruf, ya.',

    /* --- Support --- */
    support_title: 'Dukung Karya Saya',
    support_note: 'Donasi kamu membantu saya terus membuat alat gratis dan eksperimen untuk web terbuka.',
    donate_coffee: 'Coffee',
    donate_buzz: 'Buzz',

    /* --- Footer --- */
    footer_tagline: 'Alat · AI · Aplikasi Web · oleh Haiere',
    footer_copy: '© 2026 Haiere · Dibuat dengan sederhana dan penuh perhatian.',
    footer_disclaimer: 'Catatan: gunakan alat ini dengan bijak. Haiere tidak bertanggung jawab atas kehilangan data.',
    footer_about: 'Pembuat web dan musisi. Semua alat dibuat untuk web terbuka: ringan, fokus, dan mudah dipakai.',
    footer_last_updated: 'Terakhir diperbarui:',
    footer_version: 'Nova v1.0.2',
    footer_secure: 'HTTPS AMAN · WEB TERBUKA',
    footer_brand_line: 'Alat yang berguna, eksperimen yang penuh pemikiran.',
    footer_badge: 'Pembuat web independen',
    footer_connect_desc: 'Lihat karya, musik, dan eksperimen terbaru saya di kanal berikut.',
    footer_beat_tools: 'Beat Tools',
    footer_sitemap_title: 'Jelajahi',
    footer_connect_title: 'Terhubung',
    written_by_human_alt: 'Dibuat oleh manusia, bukan AI',

    logo_rwr_alt: 'Logo RWR',
    logo_ama_alt: 'Logo AMA',

    /* --- Search --- */
    search_placeholder: 'Cari bagian atau alat…',
    search_no_results: 'Tidak ada hasil. Coba kata kunci lain.',
    search_clear: 'Hapus pencarian',

    /* --- Cookie banner & settings --- */
    cookie_text: 'Situs ini memakai cookie agar pengalamanmu lebih baik. Dengan menggunakan Haiere, kamu menyetujui',
    cookie_policy: 'Kebijakan Cookie',
    cookie_reject: 'Tolak',
    cookie_accept: 'Terima',
    cookie_customize: 'Atur',
    cookie_settings_title: 'Pengaturan Cookie',
    cookie_settings_desc: 'Pilih cookie yang boleh aktif di situs ini. Kamu bisa mengubahnya kapan saja lewat ikon cookie di footer.',
    cookie_necessary: 'Wajib',
    cookie_necessary_desc: 'Diperlukan agar situs berjalan dengan baik. Selalu aktif.',
    cookie_analytics: 'Analitik',
    cookie_analytics_desc: 'Membantu saya melihat bagian mana yang paling sering dikunjungi.',
    cookie_marketing: 'Pemasaran',
    cookie_marketing_desc: 'Dipakai untuk melihat seberapa jauh alat dan musik saya menjangkau orang.',
    cookie_preferences: 'Preferensi',
    cookie_preferences_desc: 'Mengingat tema dan bahasa pilihanmu untuk kunjungan berikutnya.',
    cookie_always_on: 'Selalu aktif',
    cookie_save: 'Simpan Pengaturan',
    cookie_settings_reopen_label: 'Buka pengaturan cookie',
    toast_cookie_saved: 'Pengaturan cookie disimpan.',

    /* --- Newsletter (reserved) --- */
    footer_newsletter_title: 'Kabar Terbaru [BETA]',
    footer_newsletter_desc: 'Info rilis alat dan lagu baru. Tidak sering, dan tanpa spam.',
    footer_newsletter_placeholder: 'Alamat email kamu',
    footer_newsletter_submit: 'Ikuti',
    footer_newsletter_sending: 'Mengirim…',
    footer_newsletter_success: 'Terima kasih! Kamu sudah terdaftar.',
    footer_newsletter_error: 'Gagal mendaftar. Coba lagi nanti.',
  },

  en: {
    /* --- Page title --- */
    page_title: 'Hajir Muhaajir: Web Maker, AI Builder & Free Tools | Haiere',

    /* --- Accessibility / global --- */
    skip_to_main: 'Skip to main content',
    raia_open: 'Open RAIA AI',
    raia_try: 'Try RAIA AI',
    home_label: 'Haiere home',
    logo_alt: 'Haiere logo',
    toggle_theme: 'Switch theme',
    open_menu: 'Open menu',
    close_menu: 'Close menu',
    menu_title: 'Menu',
    back_to_top: 'Back to top',

    /* --- Navigation --- */
    nav_home: 'Home',
    nav_about: 'About',
    nav_tools: 'Tools',
    nav_ai_bots: 'AI & Bots',
    nav_games: 'Games',
    nav_music: 'Music',
    nav_quotes: 'Quotes',
    nav_contact: 'Contact',
    nav_privacy: 'Privacy',
    nav_github: 'GitHub',
    nav_raia: 'RAIA',
    nav_kirana: 'Kirana',
    nav_language: 'Language',
    nav_tagline: 'Tools, AI, and apps for learning and everyday work',
    nav_privacy_policy: 'Privacy Policy',
    nav_terms: 'Terms & Conditions',

    /* --- Hero --- */
    hero_title_1: 'Hajir',
    hero_title_2: 'Muhaajir',
    hero_desc: 'Hi, I’m Hajir. I build tools, web apps, and AI to help you learn, code, and get things done.',
    hero_cta1: 'View Projects',
    hero_cta2: 'Try RAIA AI',

    /* --- Ticker --- */
    ticker_musician: 'Musician',
    ticker_developer: 'Developer',
    ticker_useful: 'Useful Tools',
    ticker_ai: 'AI Maker',
    ticker_openweb: 'Open Web',
    ticker_github: 'GitHub Pages',
    ticker_creative: 'Fun Tech',

    /* --- About --- */
    about_eyebrow: 'About',
    about_title: 'Building simple, useful software',
    about_role: 'Developer · AI Maker',
    about_role_musician: 'Musician',
    about_role_developer: 'Developer',
    about_role_ai: 'AI Maker',

    tag_developer: 'Developer',
    tag_musician: 'Music',

    about_p1: 'I love making tools, web apps, and AI. I build them to help you work faster and with less hassle.',
    about_p2: 'All my projects are light and easy to use. I focus on the features people actually need.',
    about_p3: 'I use HTML, CSS, JavaScript, and other web technologies to turn ideas into real apps.',
    about_p4: 'I also make music. Both are ways I express myself.',

    about_cta: 'Try RAIA',
    about_cta_secondary: 'Get in Touch',

    /* --- Statistics --- */
    stat_approach: 'Main Focus',
    stat_philosophy: 'Core Values',
    stat_tools_label: 'Tools Released',
    stat_albums_label: 'Music Albums',
    stat_songs_label: 'Songs I Wrote',
    stat_openweb_label: 'Open Web',

    /* --- RWR (footer only) --- */
    RWR_closing: 'RWR is part of my life, and someday RWR',

    /* --- Toasts --- */
    toast_copied: 'Copied!',
    toast_cookie_accepted: 'Cookie settings saved!',
    toast_cookie_declined: 'Cookies turned off.',
    toast_copy_failed: 'Could not copy. Please try again.',

    /* --- Music --- */
    music_eyebrow: 'Music',
    music_title: 'Signature Music',
    music_subtitle: 'A few songs I made. Great for studying, coding, or relaxing.',
    music_player_label: 'Music Player',
    music_player_desc: 'Pick a song and play it right in your browser.',
    music_open_link: 'Player not showing? Open it with this link.',
    music_open_app: 'Open Player',
    music_readme_guide: 'Read the full guide on GitHub',
    music_iframe_title: 'Signature Music player',
    logo_music_alt: 'Signature Music logo',

    music_features_title: 'Features',
    music_features_1: 'Plays music right in your browser.',
    music_features_2: 'Set the volume and pick any song you like.',
    music_features_3: 'Lightweight, no server needed, and easy to use.',
    music_usage_title: 'How to Use',
    music_usage_desc: 'Pick a song, set the volume, and press play. Everything runs in your browser. No login needed.',
    music_setup_title: 'Run It on Your Computer',
    music_setup_desc: 'Download the repo, start a simple server, and open it in your browser.',
    music_readme_title: 'Full Guide',
    music_readme_desc: 'Feature and setup guides are on GitHub.',

    /* --- Quotes --- */
    quotes_eyebrow: 'Quotes',
    quotes_title: 'Favorite Quotes',
    quotes_subtitle: 'A few quotes that keep me inspired while I learn and build.',

    q1_text: '“The only way to do great work is to love what you do.”',
    q1_author: 'Steve Jobs',
    q2_text: '“I have not failed. I’ve just found 10,000 ways that won’t work.”',
    q2_author: 'Thomas Edison',
    q3_text: '“If you can’t make it good, at least make it look good.”',
    q3_author: 'Bill Gates',
    q4_text: '“I’ve failed over and over and over again in my life. And that is why I succeed.”',
    q4_author: 'Michael Jordan',

    /* --- Beat Tools --- */
    tools_eyebrow: 'Beat Tools',
    tools_title: 'Beat Tools',
    tools_subtitle: 'Free tools for coding, working with data, trying AI, and everyday tasks.',

    filter_all: 'All',
    filter_ai: 'AI',
    filter_developer: 'Developer',
    filter_web: 'Web',
    filter_security: 'Security',
    filter_music: 'Music',

    status_stable: 'Stable',
    status_beta: 'Beta',
    status_experimental: 'Experimental',
    status_demo: 'Demo',

    cat_lrc: 'LRC Maker',
    cat_password: 'Password Manager',
    cat_metadata: 'Metadata Remover',
    cat_text: 'Text Comparison',
    cat_ai_tool: 'AI Tool',
    cat_ai_bot: 'AI/Bot',
    cat_ai_chatbot: 'AI Chatbot',
    cat_search: 'Search Engine',
    cat_calc: 'Calculator',
    cat_chess: 'Chess Game',
    cat_dev_tool: 'Developer Tool',
    cat_creative: 'Creative',

    tool1_desc: 'Create LRC lyric files that sync with your audio, quickly and easily.',
    tool2_desc: 'Generate strong random passwords to keep your accounts safe.',
    tool3_desc: 'Remove sensitive data, like location, from photos before you share them.',
    tool4_desc: 'Compare two texts and see the differences at a glance.',
    tool5_desc: 'Minify and optimize code or text right in your browser.',
    tool6_desc: 'A lightweight search engine for discovering new things on the open web.',
    tool7_desc: 'A simple, fast calculator for everyday math.',

    tool_open: 'Open Tool',
    tool_docs: 'How to Use',

    docs_loading: 'Loading guide…',
    docs_error: 'A guide for this tool is not available yet.',
    docs_view_repo: 'View Repository',
    docs_modal_close: 'Close',

    /* --- AI & Bots --- */
    ai_eyebrow: 'AI & Bots',
    ai_title: 'AI & Bots',
    ai_subtitle: 'Chatbots and assistants for conversations, brainstorming, and everyday work.',
    ai_raia_desc: 'An AI chatbot for conversations, ideas, and useful workflows.',
    ai_kirana_desc: 'A warm AI companion for creative chats and everyday ideas.',

    /* --- Games --- */
    games_eyebrow: 'Games',
    games_title: 'Mini Games',
    games_subtitle: 'Light games you can play right in your browser. No install, no login.',
    game_play: 'Play',
    game_chess_name: 'Chess',
    game_chess_desc: 'Play classic chess right in your browser.',
    game_chess_tag: 'Classic Board',
    game_loveyou_name: 'Loveyou',
    game_loveyou_desc: 'A small interactive page, made as a warm digital gift.',
    game_loveyou_tag: 'Interactive',
    game_orbit_name: 'Orbit Weaver',
    game_orbit_desc: 'Guide your ship through orbit paths and past the stars.',
    game_orbit_tag: 'Arcade',
    game_starfall_name: 'Starfall',
    game_starfall_desc: 'Catch falling stars in this quick arcade game.',
    game_starfall_tag: 'Arcade',

    /* --- Contact --- */
    contact_eyebrow: 'Contact',
    contact_title: 'Let’s Talk!',
    contact_subtitle: 'Have a question, an idea, or a project to discuss? Reach out with this form or email me directly at',

    form_name: 'Name',
    form_email: 'Email',
    form_message: 'Message',
    form_submit: 'Send',

    form_name_placeholder: 'Enter your name',
    form_email_placeholder: 'you@example.com',
    form_message_placeholder: 'Write your message or question here…',

    form_sending: 'Sending…',
    form_success: 'Your message has been sent!',
    form_error: 'Your message could not be sent. Please try again.',
    form_fallback: 'Or reach me on social media:',

    err_name_short: 'Name must be at least 4 letters.',
    err_name_pattern: 'Name can only include letters and spaces.',
    err_email_invalid: 'Please enter a valid email address.',
    err_message_short: 'Message must be at least 20 letters.',

    /* --- Support --- */
    support_title: 'Support My Work',
    support_note: 'Your donation helps me keep making free tools and experiments for the open web.',
    donate_coffee: 'Coffee',
    donate_buzz: 'Buzz',

    /* --- Footer --- */
    footer_tagline: 'Tools · AI · Web Apps · by Haiere',
    footer_copy: '© 2026 Haiere · Made simply, with care.',
    footer_disclaimer: 'Note: Please use these tools wisely. Haiere is not responsible for lost data.',
    footer_about: 'Web maker and musician. Every tool is built for the open web: light, focused, and easy to use.',
    footer_last_updated: 'Last updated:',
    footer_version: 'Nova v1.0.2',
    footer_secure: 'HTTPS SECURE · OPEN WEB',
    footer_brand_line: 'Useful tools, thoughtful experiments.',
    footer_badge: 'Independent web creator',
    footer_connect_desc: 'Find my latest work, music, and experiments on the channels below.',
    footer_beat_tools: 'Beat Tools',
    footer_sitemap_title: 'Explore',
    footer_connect_title: 'Connect',
    written_by_human_alt: 'Developed by a human, not by AI',

    logo_rwr_alt: 'RWR logo',
    logo_ama_alt: 'AMA logo',

    /* --- Search --- */
    search_placeholder: 'Search sections or tools…',
    search_no_results: 'No results found. Try another keyword.',
    search_clear: 'Clear search',

    /* --- Cookie banner & settings --- */
    cookie_text: 'This site uses cookies to give you a better experience. By using Haiere, you agree to our',
    cookie_policy: 'Cookie Policy',
    cookie_reject: 'Reject',
    cookie_accept: 'Accept',
    cookie_customize: 'Customize',
    cookie_settings_title: 'Cookie Settings',
    cookie_settings_desc: 'Choose which cookies can run on this site. You can change this anytime from the cookie icon in the footer.',
    cookie_necessary: 'Necessary',
    cookie_necessary_desc: 'Needed for the site to work properly. Always on.',
    cookie_analytics: 'Analytics',
    cookie_analytics_desc: 'Helps me see which sections people visit the most.',
    cookie_marketing: 'Marketing',
    cookie_marketing_desc: 'Helps me see how well my tools and music reach people.',
    cookie_preferences: 'Preferences',
    cookie_preferences_desc: 'Remembers your theme and language for your next visit.',
    cookie_always_on: 'Always on',
    cookie_save: 'Save Settings',
    cookie_settings_reopen_label: 'Open cookie settings',
    toast_cookie_saved: 'Cookie settings saved.',

    /* --- Newsletter (reserved) --- */
    footer_newsletter_title: 'Stay in the Loop [BETA]',
    footer_newsletter_desc: 'News about new tools and songs. Infrequent, and never spammy.',
    footer_newsletter_placeholder: 'Your email address',
    footer_newsletter_submit: 'Join',
    footer_newsletter_sending: 'Sending…',
    footer_newsletter_success: 'Thanks! You’re on the list.',
    footer_newsletter_error: 'Could not sign up. Please try again later.',
  },
};

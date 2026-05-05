/* ═══════════════  app.min.js  ═══════════════ */
(function(){
'use strict';

/* ─── I18N ─── */
const translations={
 id:{nav_about:"Cerita Saya",nav_music:"Musik",nav_tools:"Alat Gratis",nav_contact:"Sapa Saya",nav_privacy:"Privasi Aman",
 hero_title_1:"Hajir",hero_title_2:"Muhaajir",
 hero_desc:"Halo! Aku Hajir Muhaajir, orang Bogor yang hobi foto-foto, bikin lagu, dan buat aplikasi yang bermanfaat buat semua orang.",
 hero_cta1:"Kenalan Yuk",hero_cta2:"Ayo Ngobrol",
 about_tag:"// Kenalan Lebih Dekat",about_title:"Siapa sih Hajir?",about_subtitle:"Cuma orang biasa yang senang memotret, bermusik, dan membuat aplikasi sederhana.",
 about_role:"Fotografer · Pemusik · Pembuat Aplikasi",tag_photographer:"Tukang Foto",tag_musician:"Pemusik",tag_developer:"Pembuat Aplikasi",
 about_p1:"Hai! Namaku Muhaajir. Aku tinggal di Bogor dan suka sekali dengan seni. Bagiku, foto itu cara bercerita lewat gambar, sedangkan musik adalah cara mengungkapkan isi hati.",
 about_p2:"Lewat karya-karyaku, aku ingin berbagi kebahagiaan dan semangat buat kamu. Ayo berteman!",
 about_p3:"Selain foto dan musik, aku juga buat beberapa alat bantu di internet. Semuanya mudah dipakai, cepat, dan aman karena aku sama sekali tidak menyimpan data pribadi kamu.",
 about_cta:"Dengar Musikku",about_cv:"Lihat Riwayat Hidup (PDF)",stat_approach:"Cara Kerja",stat_philosophy:"Prinsip",stat_location:"Tempat Tinggal",
 motorsport_team_name:"RWR - AMA",motorsport_closing:"RWR bagian dari hidupku, suatu hari nanti RWR",
 music_tag:"// Karya Musik",music_title:"Dengar Lagu Saya, Yuk!",
 music_subtitle:'Dari album "Resonansi Dalam Diam" sampai "Fragmen Suara" — semua dibuat tulus dari hati.',
 music_player_label:"Pemutar Musik Resmi",
 music_player_desc:"Kamu bisa dengar semua lagu aku di sini. Pilih saja yang kamu suka dan langsung putar dari browser kamu.",
 music_player_note:"* Pemutar musik ini pakai Bahasa Indonesia.",music_open_link:"Klik di sini kalau musiknya tidak muncul",
 music_download_title:"Aplikasi Android",music_download_desc:"Mau dengar musikku kapan saja di HP? Kamu bisa download aplikasinya di sini.",
 music_download_button:"Download Aplikasi (APK)",music_download_note:"* Khusus buat HP Android ya. Download lalu pasang sendiri.",music_powered_by:"* Dibuat lewat appsgeyser.com",
 foto_tag:"// Cerita Gambar",foto_title:"Foto Hari Ini",foto_subtitle:"Satu gambar setiap hari, menceritakan kisah tanpa perlu kata-kata.",
 foto_caption:'"Kisah hari ini aku abadikan di sini…"',
 quotes_tag:"// Kata Semangat",quotes_title:"Kata Mutiara Pilihan",quotes_subtitle:"Beberapa kalimat indah dari orang hebat yang selalu memotivasi aku.",
 q1_text:'"Memotret itu bukan cuma ambil gambar, tapi sedang menciptakan karya seni."',q1_author:"— Ansel Adams, Fotografer",
 q2_text:'"Musik adalah bahasa yang bisa dimengerti semua orang di dunia."',q2_author:"— Henry Wadsworth Longfellow, Penyair",
 q3_text:'"Desain itu bukan cuma biar kelihatan bagus, tapi juga harus nyaman dipakai."',q3_author:"— Steve Jobs, Pendiri Apple",
 q4_text:'"Terus berkembang adalah kunci kalau kita sudah di jalan yang benar."',q4_author:"— Adrian Newey, Desainer F1",
 q5_text:'"Kesederhanaan adalah bentuk kemewahan yang paling tinggi."',q5_author:"— Coco Chanel, Desainer Fashion",
 tools_tag:"// Alat Buatan Saya",tools_title:"Alat Gratis yang Bisa Kamu Pakai",
 tools_subtitle:"Semua alat ini gratis, cepat, dan privasi kamu aman. Tidak perlu daftar-daftar segala.",
 tool1_desc:"Bantu kamu buat lirik lagu (LRC) dengan mudah dan cepat langsung dari browser.",
 tool2_desc:"Buat kata sandi (password) yang kuat supaya akun kamu aman dari orang jahat.",
 tool3_desc:"Hapus data rahasia di foto (seperti lokasi) sebelum kamu pamerkan di internet.",
 tool4_desc:"Bandingkan dua tulisan yang mirip dan cari perbedaannya dengan gampang.",
 tool_open:"Buka Alatnya",tool_coming_tag:"Sabar Ya",tool_coming_title:"Alat Baru",
 tool_coming_desc:"Masih ada alat seru lainnya yang lagi aku buat. Tunggu tanggal mainnya!",
 tools_badge:"Gratis · Aman · Langsung Pakai",stack_tag:"// Teknologi yang Digunakan",
 stack1_desc:"Dasar pembuatan web — dipakai di semua alat",stack2_desc:"Tempat menyimpan web — gratis dan sangat cepat",
 stack3_desc:"Tampilan gelombang suara di aplikasi HajirSync",
 stack4_desc:"Biar tampilan web jadi modern dan rapi di HP maupun Laptop",
 stack5_desc:"Untuk edit foto dan gambar supaya lebih keren",
 filter_all:"Semua",filter_music:"Musik",filter_security:"Keamanan",filter_web:"Web",
 status_stable:"Lancar",status_beta:"Uji Coba",
 contact_tag:"// Mari Ngobrol",contact_title:"Mau Kerjasama atau Sekadar Tanya?",
 contact_subtitle:"Kirim pesan di sini kalau ada yang mau ditanyakan atau cuma mau menyapa.",
 contact_intro:"Kalau kamu mau diskusi atau bikin proyek bareng, aku senang banget bisa kenal kamu.",
 contact_cta:"Lihat Kode Pembuatanku di GitHub",
 form_name:"Nama Kamu",form_email:"Email Kamu",form_message:"Isi Pesan",form_submit:"Kirim Sekarang",
 form_name_placeholder:"Nama lengkap kamu",form_email_placeholder:"alamat-email@kamu.com",
 form_message_placeholder:"Tulis pesan kamu di sini...",form_sending:"Sedang dikirim...",
 form_success:"Pesan sudah terkirim, terima kasih!",form_error:"Gagal kirim, coba lagi ya.",
 form_fallback:"Mencoba cara lain untuk mengirim...",
 footer_tagline:"Web Pribadi · Alat Gratis · Punya Muhaajir",footer_copy:"© 2026 Hajir Muhaajir · Dibuat dengan sepenuh hati.",
 cookie_title:"Info Cookie",cookie_desc:'Web ini pakai "cookie" supaya kamu lebih nyaman saat membukanya.',
 cookie_ok:"Siap!",cookie_no:"Tidak Usah",back_top_label:"Kembali ke atas",
 err_name_short:"Namanya jangan pendek-pendek ya, minimal 4 huruf.",
 err_name_pattern:"Nama tolong jangan pakai angka atau simbol aneh.",
 err_email_invalid:"Alamat emailnya sepertinya ada yang salah tulis.",
 err_message_short:"Tulis pesannya agak panjang sedikit ya, minimal 20 huruf."},
 en:{nav_about:"My Story",nav_music:"Music",nav_tools:"Free Tools",nav_contact:"Say Hello",nav_privacy:"Your Privacy",
 hero_title_1:"Hajir",hero_title_2:"Muhaajir",
 hero_desc:"Hi! I’m Hajir Muhaajir, a photographer, musician, and app maker from Bogor who loves creating useful digital things for everyone.",
 hero_cta1:"Get to Know Me",hero_cta2:"Let’s Chat",
 about_tag:"// A Little Bit About Me",about_title:"Who is Hajir?",about_subtitle:"Just a person who loves taking photos, making music, and building simple apps.",
 about_role:"Photographer · Musician · App Maker",tag_photographer:"Photographer",tag_musician:"Musician",tag_developer:"App Maker",
 about_p1:"Hi! I’m Muhaajir. I live in Bogor and I really love art. To me, a photo tells a story, while music shares a feeling.",
 about_p2:"Through my work, I want to share happiness and a little bit of spirit with you. Let’s be friends!",
 about_p3:"Besides photos and music, I also make simple online tools. They are fast, easy to use, and safe because I never save your personal data.",
 about_cta:"Listen to My Music",about_cv:"Download My CV (PDF)",stat_approach:"My Way",stat_philosophy:"Principles",stat_location:"Based In",
 motorsport_team_name:"RWR - AMA",motorsport_closing:"RWR is a part of my life, someday RWR.",
 music_tag:"// My Music",music_title:"Come Listen to My Songs!",
 music_subtitle:"From \"Resonansi Dalam Diam\" to \"Fragmen Suara\" — every song is made with heart.",
 music_player_label:"Official Player",
 music_player_desc:"You can listen to all my songs right here. Pick your favorite and enjoy it straight from your browser.",
 music_player_note:"* This music player uses Indonesian language.",music_open_link:"Click here if the player doesn’t show up",
 music_download_title:"Android App",music_download_desc:"Want to listen to my music anytime on your phone? Download the Android app here!",
 music_download_button:"Download App (APK)",music_download_note:"* For Android only. Download and install it manually.",music_powered_by:"* Created via appsgeyser.com",
 foto_tag:"// Visual Story",foto_title:"Photo of the Day",foto_subtitle:"One photo every day, a story told without words.",
 foto_caption:'"Today’s story captured in this image…"',
 quotes_tag:"// Inspiring Words",quotes_title:"Favorite Quotes",quotes_subtitle:"A few beautiful words from great people that keep me motivated.",
 q1_text:'"You don’t just take a photograph, you make it."',q1_author:"— Ansel Adams, Photographer",
 q2_text:'"Music is the universal language of mankind."',q2_author:"— Henry Wadsworth Longfellow, Poet",
 q3_text:'"Design is not just what it looks like, but how it works."',q3_author:"— Steve Jobs, Apple Co-Founder",
 q4_text:'"Evolution is often the key, when a good direction has been set."',q4_author:"— Adrian Newey, F1 Designer",
 q5_text:'"Simplicity is the ultimate sophistication."',q5_author:"— Coco Chanel, Fashion Designer",
 tools_tag:"// My Own Tools",tools_title:"Free Tools You Can Use",
 tools_subtitle:"All these tools are free, fast, and respect your privacy. No sign-up needed.",
 tool1_desc:"Create song lyric files (LRC) easily and quickly right in your browser.",
 tool2_desc:"Generate very strong passwords to keep your accounts safe from hackers.",
 tool3_desc:"Remove hidden info (like location) from your photos before sharing them online.",
 tool4_desc:"Compare two texts and find the differences between them instantly.",
 tool_open:"Open Tool",tool_coming_tag:"Stay Tuned",tool_coming_title:"New Tool",
 tool_coming_desc:"I’m currently working on more fun tools. Coming soon!",
 tools_badge:"Free · Safe · Instant Use",stack_tag:"// Tech Stack & Main Tools",
 stack1_desc:"Web foundation — used in all tools",stack2_desc:"Hosting — free, fast, and secure",
 stack3_desc:"Audio visualizer and waveform for HajirSync",
 stack4_desc:"Modern and clean look for mobile and desktop",
 stack5_desc:"Photo and visual editing for my creative works",
 filter_all:"All",filter_music:"Music",filter_security:"Security",filter_web:"Web",
 status_stable:"Stable",status_beta:"Beta",
 contact_tag:"// Let’s Talk",contact_title:"Have a Project or Just Want to Say Hi?",
 contact_subtitle:"Send me a message if you have questions or just want to chat.",
 contact_intro:"Whether you want to work together or discuss ideas, I’d love to hear from you.",
 contact_cta:"Check My Code on GitHub",
 form_name:"Your Name",form_email:"Your Email",form_message:"Your Message",form_submit:"Send Now",
 form_name_placeholder:"Full name",form_email_placeholder:"email@example.com",
 form_message_placeholder:"Write your message here...",form_sending:"Sending...",
 form_success:"Message sent successfully!",form_error:"Failed to send, please try again.",
 form_fallback:"Trying an alternative way...",
 footer_tagline:"Personal Website · Free Tools · by Muhaajir",footer_copy:"© 2026 Hajir Muhaajir · Made with heart.",
 cookie_title:"Cookie Info",cookie_desc:"This website uses cookies to make your experience more comfortable.",
 cookie_ok:"Got it!",cookie_no:"No Thanks",back_top_label:"Back to top",
 err_name_short:"Name must be at least 4 letters long.",
 err_name_pattern:"Please don’t use numbers or special symbols in your name.",
 err_email_invalid:"The email address looks a bit off.",
 err_message_short:"Please write a slightly longer message (at least 20 letters)."}};

let currentLang='id';
function applyLang(l){
 currentLang=l;const t=translations[l];
 document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.dataset.i18n;if(t[k]){if(k==='music_player_desc')el.innerHTML=t[k];else el.textContent=t[k];}});
 document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{const k=el.dataset.i18nPlaceholder;if(t[k])el.placeholder=t[k];});
 document.querySelectorAll('[data-i18n-aria]').forEach(el=>{const k=el.dataset.i18nAria;if(t[k])el.setAttribute('aria-label',t[k]);});
 document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(a=>{const sec=a.dataset.section;if(sec&&t['nav_'+sec])a.textContent=t['nav_'+sec];});
 document.getElementById('btn-id').classList.toggle('active',l==='id');
 document.getElementById('btn-en').classList.toggle('active',l==='en');
 document.documentElement.lang=l;
 try{localStorage.setItem('hajir-lang',l);}catch(e){}
}
window.setLang=lang=>applyLang(lang);
(function(){const saved=localStorage.getItem('hajir-lang');applyLang(saved||(navigator.language.startsWith('id')?'id':'en'));})();

/* ─── LOGO ADAPTIF ─── */
const LOGO_DARK='https://i.postimg.cc/JztFxsRH/hajir-logo-putih.webp';
const LOGO_LIGHT='https://i.postimg.cc/3xWq1k3v/hajir-logo-hitam.webp';
(new Image()).src=LOGO_DARK;(new Image()).src=LOGO_LIGHT;
const logoImages=document.querySelectorAll('.logo-img');
function updateLogo(){
 const isDark=document.documentElement.classList.contains('dark');
 const newSrc=isDark?LOGO_DARK:LOGO_LIGHT;
 logoImages.forEach(img=>{
   if(img.src!==newSrc){
     img.classList.add('logo-switching');
     setTimeout(()=>{img.src=newSrc;requestAnimationFrame(()=>img.classList.remove('logo-switching'));},150);
   }
 });
}
updateLogo();

/* ─── THEME ─── */
const themeToggle=document.getElementById('theme-toggle');
function setTheme(t){
 document.documentElement.classList.toggle('dark',t==='dark');
 localStorage.setItem('theme',t);updateLogo();
}
themeToggle.addEventListener('click',()=>setTheme(document.documentElement.classList.contains('dark')?'light':'dark'));

/* ─── MOBILE NAV ─── */
const hbgBtn=document.getElementById('hbg-btn'),mobileNav=document.getElementById('mobile-nav');
hbgBtn.addEventListener('click',()=>{
 const open=mobileNav.classList.toggle('flex');
 mobileNav.classList.toggle('hidden',!open);
 hbgBtn.setAttribute('aria-expanded',open);
 hbgBtn.classList.toggle('hbg-open',open);
});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
 mobileNav.classList.remove('flex','hidden');hbgBtn.classList.remove('hbg-open');hbgBtn.setAttribute('aria-expanded','false');
}));
document.addEventListener('click',e=>{if(!hbgBtn.contains(e.target)&&!mobileNav.contains(e.target)){mobileNav.classList.remove('flex');hbgBtn.classList.remove('hbg-open');}});

/* ─── SCROLL REVEAL ─── */
const revealObs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObs.unobserve(e.target);}}),{threshold:0.08});
document.querySelectorAll('.reveal').forEach(el=>revealObs.observe(el));

/* ─── ACTIVE NAV ─── */
const sections=document.querySelectorAll('section[id]'),navLinks=document.querySelectorAll('.nav-link');
const sectionObs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id));}}),{rootMargin:'-40% 0px -55% 0px'});
sections.forEach(s=>sectionObs.observe(s));

/* ─── BACK TO TOP ─── */
const backTop=document.getElementById('back-top');
window.addEventListener('scroll',()=>{const show=window.scrollY>400;backTop.style.opacity=show?'1':'0';backTop.style.pointerEvents=show?'auto':'none';},{passive:true});

/* ─── COOKIE ─── */
const banner=document.getElementById('cookie-banner');
function hideBanner(){banner.style.transform='translateX(-50%) translateY(120%)';banner.style.opacity='0';}
if(!localStorage.getItem('hajir-cookie'))setTimeout(()=>{banner.style.transform='translateX(-50%) translateY(0)';banner.style.opacity='1';},2000);
document.getElementById('cookie-ok').addEventListener('click',()=>{localStorage.setItem('hajir-cookie','accepted');hideBanner();});
document.getElementById('cookie-no').addEventListener('click',()=>{localStorage.setItem('hajir-cookie','declined');hideBanner();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){mobileNav.classList.remove('flex');hbgBtn.classList.remove('hbg-open');hideBanner();}});

/* ─── TOOLS FILTER ─── */
document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',function(){
 document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
 this.classList.add('active');
 const f=this.dataset.filter;
 document.querySelectorAll('#tools-container .tool-card').forEach(card=>card.style.display=(f==='all'||card.dataset.category.includes(f))?'':'none');
}));

/* ─── COPY CLIPBOARD ─── */
document.querySelectorAll('.copy-btn').forEach(btn=>btn.addEventListener('click',async()=>{
 try{
   await navigator.clipboard.writeText(btn.dataset.copy);
   const icon=btn.querySelector('i'),orig=icon.className;
   icon.className='fas fa-check text-xs text-green-400';
   setTimeout(()=>icon.className=orig,1500);
 }catch(e){alert('Gagal menyalin teks');}
}));

/* ─── FOTO OF THE DAY (setelah dihapus 9 foto) ─── */
(function(){
 const fotoUrls=[
   '',
   'https://i.postimg.cc/442qk8r5/foto-of-the-day-01.webp',
   'https://i.postimg.cc/WbDK2Gvm/foto-of-the-day-02.webp',
   'https://i.postimg.cc/QxBPXQ3Q/foto-of-the-day-03.webp',
   'https://i.postimg.cc/h4Z6WCH3/foto-of-the-day-04.webp',
   'https://i.postimg.cc/3rfV5LPL/foto-of-the-day-05.webp',
   'https://i.postimg.cc/fT3FwcNv/foto-of-the-day-06.webp',
   'https://i.postimg.cc/bNGMzxh3/foto-of-the-day-08.webp',
   'https://i.postimg.cc/xTk70v2x/foto-of-the-day-11.webp',
   'https://i.postimg.cc/xTk70v2F/foto-of-the-day-12.webp',
   'https://i.postimg.cc/fT3FwcNF/foto-of-the-day-13.webp',
   'https://i.postimg.cc/hPJwSLnc/foto-of-the-day-15.webp',
   'https://i.postimg.cc/NfyVg6tQ/foto-of-the-day-16.webp',
   'https://i.postimg.cc/02L4rz5q/foto-of-the-day-17.webp',
   'https://i.postimg.cc/15Ld48mk/foto-of-the-day-18.webp',
   'https://i.postimg.cc/hPHYhX4n/foto-of-the-day-19.webp',
   'https://i.postimg.cc/fT6PkVWw/foto-of-the-day-21.webp',
   'https://i.postimg.cc/L6rWhJ4h/foto-of-the-day-22.webp',
   'https://i.postimg.cc/yYwGWD6k/foto-of-the-day-23.webp',
   'https://i.postimg.cc/CxkQ8wdC/foto-of-the-day-26.webp',
   'https://i.postimg.cc/TYZshK2r/foto-of-the-day-27.webp',
   'https://i.postimg.cc/L8LbPmht/foto-of-the-day-28.webp',
   'https://i.postimg.cc/x1M4m9q3/foto-of-the-day-29.webp',
   'https://i.postimg.cc/HkXhMTjB/foto-of-the-day-30.webp',
   'https://i.postimg.cc/Qd1y7jVY/foto-of-the-day-31.webp',
   'https://i.postimg.cc/4xVScXnS/foto-of-the-day-32.webp',
   'https://i.postimg.cc/yNKrX2Sv/foto-of-the-day-33.webp',
   'https://i.postimg.cc/HLmP4F73/foto-of-the-day-34.webp',
   'https://i.postimg.cc/Jh8dcSBv/foto-of-the-day-35.webp',
   'https://i.postimg.cc/yNKrX2ZB/foto-of-the-day-36.webp',
   'https://i.postimg.cc/8CGnBx6G/foto-of-the-day-37.webp',
   'https://i.postimg.cc/DzhYdRXm/foto-of-the-day-38.webp',
   'https://i.postimg.cc/nL1SdT4H/foto-of-the-day-39.webp',
   'https://i.postimg.cc/yNTpfnmY/foto-of-the-day-40.webp',
   'https://i.postimg.cc/jjh38vHD/foto-of-the-day-41.webp',
   'https://i.postimg.cc/R0TpPG7H/foto-of-the-day-42.webp',
   'https://i.postimg.cc/k5yYjwQF/foto-of-the-day-43.webp',
   'https://i.postimg.cc/FKxCPGyb/foto-of-the-day-44.webp',
   'https://i.postimg.cc/rmFn7Wj4/foto-of-the-day-45.webp',
   'https://i.postimg.cc/8kYKn76d/foto-of-the-day-47.webp',
   'https://i.postimg.cc/tRcSmsxw/foto-of-the-day-48.webp',
   'https://i.postimg.cc/gc7SBxZv/foto-of-the-day-49.webp',
   'https://i.postimg.cc/vT4PZspV/foto-of-the-day-50.webp',
   'https://i.postimg.cc/mZnX6PH7/foto-of-the-day-51.webp',
   'https://i.postimg.cc/y6GQrDZM/foto-of-the-day-52.webp'
 ];
 const dayIndex=Math.floor(Date.now()/86400000) % 44 + 1;
 const url=fotoUrls[dayIndex];
 document.getElementById('foto-main').src=url;
 document.getElementById('thumb-9-16').src=url;
 document.getElementById('thumb-16-9').src=url;
 document.getElementById('thumb-4-3').src=url;
 document.getElementById('foto-main').addEventListener('contextmenu',e=>e.preventDefault());
 document.querySelectorAll('.aspect-thumb').forEach(btn=>btn.addEventListener('click',function(){
   document.getElementById('foto-main-container').style.aspectRatio=this.dataset.ratio;
 }));
})();

/* ─── FORM VALIDATION & SUBMIT ─── */
const nameInput=document.getElementById('name'),emailInput=document.getElementById('email'),messageInput=document.getElementById('message');
const nameErr=document.getElementById('name-error'),emailErr=document.getElementById('email-error'),messageErr=document.getElementById('message-error');
function clearErr(inp,el){inp.classList.remove('input-invalid');el.textContent='';}
function setErr(inp,el,msg){inp.classList.add('input-invalid');el.textContent=msg;}
[nameInput,emailInput,messageInput].forEach(inp=>inp.addEventListener('input',function(){clearErr(inp,document.getElementById(inp.id+'-error'));}));
function validate(){
 const t=translations[currentLang];let valid=true;
 clearErr(nameInput,nameErr);clearErr(emailInput,emailErr);clearErr(messageInput,messageErr);
 const name=nameInput.value.trim(),email=emailInput.value.trim(),msg=messageInput.value.trim();
 if(name.length<3){setErr(nameInput,nameErr,t.err_name_short);valid=false;}else if(!/^[A-Za-z\s]+$/.test(name)){setErr(nameInput,nameErr,t.err_name_pattern);valid=false;}
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){setErr(emailInput,emailErr,t.err_email_invalid);valid=false;}
 if(msg.length<20){setErr(messageInput,messageErr,t.err_message_short);valid=false;}
 return valid;
}
const form=document.getElementById('contact-form'),status=document.getElementById('form-status');
form.addEventListener('submit',async e=>{
 e.preventDefault();const t=translations[currentLang];if(!validate())return;
 status.textContent=t.form_sending;
 const fd=new FormData(form);
 const send=url=>fetch(url,{method:'POST',body:fd,headers:{'Accept':'application/json'}}).then(r=>{if(!r.ok)throw new Error('fail');return r.json();});
 try{await send('https://formspree.io/f/mpqkqanp');status.textContent=t.form_success;form.reset();}
 catch(pri){console.warn('primary failed',pri);status.textContent=t.form_fallback;
   try{await send('https://formspree.io/f/xgvkobyl');status.textContent=t.form_success;form.reset();}
   catch(fb){console.error('fallback failed',fb);status.textContent=t.form_error;}
 }
});

/* ─── PWA SW ─── */
if('serviceWorker'in navigator){
 const swCode="self.addEventListener('install',e=>self.skipWaiting());self.addEventListener('activate',e=>e.waitUntil(clients.claim()));self.addEventListener('fetch',e=>e.respondWith(caches.open('hajir-v1').then(c=>fetch(e.request).then(res=>{c.put(e.request,res.clone());return res;}).catch(()=>c.match(e.request))));";
 const blob=new Blob([swCode],{type:'application/javascript'});
 navigator.serviceWorker.register(URL.createObjectURL(blob)).catch(()=>{});
}
})();
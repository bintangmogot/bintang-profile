<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue';
import { language, toggleLanguage } from '../store.js';
import LeafVillageScene from './LeafVillageScene.vue';
import { atSecret, findRoute, LOCATIONS, movePlayer, START, walkable } from '../data/village-game.js';

const en = computed(() => language.value === 'EN');
const hero = ref(null);
const scene = ref(null), closeButton = ref(null);
const player = ref({ ...START }), moving = ref(false), facing = ref(1);
const active = ref(null), visited = ref(new Set()), route = ref([]), goal = ref(null);
const mobile = ref(false), message = ref('');
const secretFound = ref(false);
const secretSpeech = computed(() => secretFound.value && atSecret(player.value, 65));
const keys = new Set();
let frame = null, lastTime = 0, observer, mediaQuery, visible = false;
const content = computed(() => ({
  about: { name: en.value ? 'Hokage Office' : 'Kantor Hokage', label: 'HOKAGE OFFICE', title: en.value ? 'A little about me.' : 'Sedikit tentang aku.', text: en.value ? 'I’m Bintang Surya Aprilian Mogot. I live in Bali and work with clients in Indonesia and abroad. I build websites, booking systems, and tools that make daily work easier.' : 'Aku Bintang Surya Aprilian Mogot. Tinggal di Bali dan mengerjakan proyek untuk klien lokal maupun luar negeri. Aku membuat website, sistem booking, dan alat untuk mempermudah pekerjaan sehari-hari.', action: en.value ? 'More about me' : 'Kenali aku lebih dekat', href: '#about' },
  projects: { name: en.value ? 'Mission Board' : 'Papan Misi', label: 'MISSION BOARD', title: en.value ? 'Projects I’ve worked on.' : 'Proyek yang kukerjakan.', text: en.value ? 'From tattoo bookings to gym tools and creative portfolios. Here are the projects I’ve finished and the ones I’m still working on.' : 'Mulai dari booking studio tato, alat operasional gym, sampai portofolio kreatif. Di sini ada proyek yang sudah selesai dan yang masih kukerjakan.', action: en.value ? 'See my projects' : 'Lihat proyekku', href: '/projects' },
  skills: { name: en.value ? 'Training Dojo' : 'Dojo Latihan', label: 'TRAINING DOJO', title: en.value ? 'What I work with.' : 'Teknologi yang kupakai.', text: en.value ? 'I use Vue, Next.js, Laravel, WordPress, and Supabase. I also work with Figma and GSAP for design and animation. You can find more about my work experience below.' : 'Aku menggunakan Vue, Next.js, Laravel, WordPress, dan Supabase. Untuk desain dan animasi, aku juga memakai Figma dan GSAP. Pengalaman kerjaku bisa dilihat di bawah.', action: en.value ? 'My experience' : 'Pengalaman kerjaku', href: '#experience' },
  contact: { name: en.value ? 'Ichiraku Ramen' : 'Ramen Ichiraku', label: 'ICHIRAKU RAMEN', title: en.value ? 'Got something in mind?' : 'Punya ide atau proyek?', text: en.value ? 'Tell me what you’re planning. I can help with a new website, improve an existing one, or build an app for your business.' : 'Ceritakan apa yang ingin kamu buat. Aku bisa bantu membuat website baru, memperbaiki website yang sudah ada, atau membangun aplikasi untuk bisnismu.', action: en.value ? 'Get in touch' : 'Hubungi aku', href: '#contact' },
}));
const locations = computed(() => LOCATIONS.map((s,i) => ({ ...s, ...content.value[s.id], number: `0${i+1}`, mapLabel: content.value[s.id].label })));
const nearby = computed(() => locations.value.find(s => Math.hypot(player.value.x-s.x, player.value.y-s.y) < 48));
const selected = computed(() => locations.value.find(s => s.id === active.value));
const routeEnd = computed(() => route.value.at(-1));
const viewBox = computed(() => mobile.value ? `${Math.max(0,Math.min(500,player.value.x-250))} 225 500 395` : '0 60 1000 560');

function clearKeys() { keys.clear(); moving.value = false; }
function reset() { clearKeys(); player.value = { ...START }; route.value = []; goal.value = null; active.value = null; message.value = ''; }
async function discover(stop) {
  clearKeys(); route.value = []; goal.value = null; active.value = stop.id;
  visited.value = new Set([...visited.value,stop.id]);
  message.value = `${en.value ? 'Discovered' : 'Ditemukan'}: ${stop.name}`;
  await nextTick(); closeButton.value?.focus({ preventScroll:true });
}
async function unlockSecret() {
  secretFound.value = true;
  clearKeys(); route.value = []; goal.value = null; active.value = 'hokage';
  message.value = en.value ? 'Secret found. I want to be Hokage!' : 'Rahasia ditemukan. Aku ingin jadi Hokage!';
  await nextTick(); closeButton.value?.focus({ preventScroll:true });
}
function closeDiscovery() { active.value = null; scene.value?.focus({ preventScroll:true }); }
function revealScene() {
  scene.value?.scrollIntoView({ block:'center', behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
}
function travel(stop) {
  clearKeys(); active.value = null; goal.value = stop.id;
  route.value = findRoute(player.value,stop);
  scene.value?.focus({ preventScroll:true });
  revealScene();
  if (!route.value.length) { goal.value = null; message.value = en.value ? 'Use the path in front of the building.' : 'Gunakan jalan di depan bangunan.'; }
}
function ground(event) {
  if (active.value) return;
  const svg = event.currentTarget, point = svg.createSVGPoint();
  point.x = event.clientX; point.y = event.clientY;
  const p = point.matrixTransform(svg.getScreenCTM().inverse());
  if (!walkable(p.x,p.y)) return;
  clearKeys(); goal.value = null; route.value = findRoute(player.value,p);
  scene.value?.focus({ preventScroll:true });
}
function keyDown(event) {
  if (!visible || document.hidden || event.ctrlKey || event.metaKey || event.altKey || event.isComposing) return;
  if (event.target.closest('input,textarea,select,[contenteditable]:not([contenteditable="false"]),[role="textbox"]')) return;
  // Body focus works on arrival; controls elsewhere on the page keep their normal behavior.
  if (event.target !== document.body && event.target !== document.documentElement && !hero.value?.contains(event.target)) return;
  const key = event.key.toLowerCase();
  if (key === 'e' && event.repeat) return;
  if ((key === 'escape' || key === 'e') && active.value) { event.preventDefault(); closeDiscovery(); return; }
  if (active.value) return;
  if (['arrowup','arrowdown','arrowleft','arrowright','w','a','s','d'].includes(key)) {
    if (!keys.size) {
      const bounds = scene.value.getBoundingClientRect();
      if (bounds.top < 0 || bounds.bottom > window.innerHeight) revealScene();
    }
    event.preventDefault(); keys.add(key); route.value = []; goal.value = null;
  }
  if ((key === 'e' || key === 'enter') && nearby.value && !event.target.closest('button,a')) { event.preventDefault(); discover(nearby.value); }
}
function keyUp(event) { keys.delete(event.key.toLowerCase()); }
function touchStart(event,key) { event.currentTarget.setPointerCapture(event.pointerId); keys.add(key); route.value = []; goal.value = null; }
function tick(time) {
  const dt = Math.min((time-lastTime)/1000 || 0,.035); lastTime = time;
  let dx = Number(keys.has('d') || keys.has('arrowright')) - Number(keys.has('a') || keys.has('arrowleft'));
  let dy = Number(keys.has('s') || keys.has('arrowdown')) - Number(keys.has('w') || keys.has('arrowup'));
  const next = route.value[0];
  if (next && !active.value) {
    dx = next.x-player.value.x; dy = next.y-player.value.y;
    if (Math.hypot(dx,dy) <= 165*dt + .5) {
      player.value = { x:next.x,y:next.y }; route.value.shift(); dx = 0; dy = 0;
      if (!route.value.length && goal.value) {
        const stop = locations.value.find(s => s.id === goal.value);
        if (stop) discover(stop);
      }
    }
  }
  moving.value = !!(dx || dy) && !active.value;
  if (moving.value) {
    if (dx) facing.value = dx > 0 ? 1 : -1;
    player.value = movePlayer(player.value,dx,dy,165*dt);
  }
  if (!active.value && !secretFound.value && atSecret(player.value)) unlockSecret();
  frame = requestAnimationFrame(tick);
}
function syncLoop() {
  if (visible && !document.hidden && frame === null) { lastTime = 0; frame = requestAnimationFrame(tick); }
  if ((!visible || document.hidden) && frame !== null) { cancelAnimationFrame(frame); frame = null; clearKeys(); }
}
function syncMobile(event) { mobile.value = event.matches; }
onMounted(() => {
  mediaQuery = window.matchMedia('(max-width: 767px)'); mobile.value = mediaQuery.matches;
  mediaQuery.addEventListener('change',syncMobile);
  observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; syncLoop(); });
  observer.observe(scene.value);
  window.addEventListener('keydown',keyDown); window.addEventListener('keyup',keyUp);
  window.addEventListener('blur',clearKeys); document.addEventListener('visibilitychange',syncLoop);
});
onUnmounted(() => { cancelAnimationFrame(frame); observer?.disconnect(); mediaQuery?.removeEventListener('change',syncMobile); window.removeEventListener('keydown',keyDown); window.removeEventListener('keyup',keyUp); window.removeEventListener('blur',clearKeys); document.removeEventListener('visibilitychange',syncLoop); });
</script>

<template>
  <section id="home" ref="hero" class="village-hero">
    <header class="village-masthead"><a href="#home" class="village-wordmark">BINTANG<span>CODES</span><small>Web developer / Bali, Indonesia</small></a><div class="village-masthead-right"><span class="village-availability"><i></i>{{ en ? 'Available for work' : 'Tersedia untuk proyek baru' }}</span><button @click="toggleLanguage" class="village-language" aria-label="Switch language">{{ language }}</button></div></header>
    <div class="village-intro"><div><p class="village-eyebrow">{{ en ? 'Based in Bali, Indonesia' : 'Berbasis di Bali, Indonesia' }}</p><h1>{{ en ? 'Hi, I’m Bintang.' : 'Hai, aku Bintang.' }}<br><em>Web developer.</em></h1></div><div class="village-intro-aside"><p>{{ en ? 'I build websites and apps for clients in Indonesia and abroad. Take Naruto for a walk, or jump straight to my projects.' : 'Aku membuat website dan aplikasi untuk klien lokal dan luar negeri. Ajak Naruto jalan-jalan, atau langsung lihat proyekku.' }}</p><a href="/projects">{{ en ? 'See my projects' : 'Lihat proyekku' }} <span>↗</span></a></div></div>
    <div class="village-game-shell">
      <div class="village-toolbar"><span class="village-map-title"><span class="village-leaf">葉</span><span>{{ en ? 'Get to know me with Naruto' : 'Kenali aku bersama Naruto' }}</span></span><span class="village-progress">{{ visited.size }} / 4 {{ en ? 'discovered' : 'ditemukan' }}</span></div>
      <div ref="scene" class="village-stage" tabindex="0" role="group" :aria-label="en ? 'Village game. Use WASD or arrow keys to walk immediately, or click a path. Press E near a location to open it. Location buttons below also work with a keyboard.' : 'Game desa. Langsung gunakan WASD atau tombol panah untuk berjalan, atau klik jalan. Tekan E dekat lokasi untuk membuka informasi.'">
        <LeafVillageScene :locations="locations" :player="player" :moving="moving" :facing="facing" :visited="visited" :route-end="routeEnd" :view-box="viewBox" :secret-found="secretFound" :secret-speech="secretSpeech" @travel="travel" @ground="ground" />
        <div class="village-character-tag"><i></i><span>NARUTO UZUMAKI</span><small>{{ en ? 'WASD to walk · E to open' : 'WASD untuk jalan · E untuk buka' }}</small><small v-if="secretFound" class="village-secret-badge">★ {{ en ? 'Hokage in training' : 'Calon Hokage' }}</small></div>
        <div v-if="nearby && !active" class="village-interaction"><button @click="discover(nearby)"><kbd>E</kbd>{{ en ? 'Discover' : 'Jelajahi' }} {{ nearby.name }} ↗</button></div>
        <div v-if="selected" class="village-discovery" role="region" :aria-label="selected.name">
          <button ref="closeButton" class="village-close" @click="closeDiscovery" :aria-label="en ? 'Close discovery' : 'Tutup informasi'">×</button><p class="village-eyebrow">{{ selected.number }} / {{ selected.name }}</p><h2>{{ selected.title }}</h2><p>{{ selected.text }}</p><a :href="selected.href">{{ selected.action }}<span>↗</span></a>
        </div>
        <div v-if="active === 'hokage'" class="village-discovery village-secret" role="region" :aria-label="en ? 'Secret training spot' : 'Tempat latihan rahasia'">
          <button ref="closeButton" class="village-close" @click="closeDiscovery" :aria-label="en ? 'Close secret' : 'Tutup rahasia'">×</button>
          <p class="village-eyebrow">{{ en ? 'You found a secret' : 'Kamu menemukan rahasia' }}</p>
          <svg class="village-headband" viewBox="0 0 200 70" aria-hidden="true"><path d="M39 29L5 15 17 37 1 53 47 45M160 29L195 15 184 37 199 53 153 45" fill="#355979"/><rect x="33" y="16" width="134" height="40" rx="8" fill="#284760"/><rect x="46" y="21" width="109" height="30" rx="6" fill="#bacddc" stroke="#6f8da6" stroke-width="2"/><g fill="#55768f"><circle cx="54" cy="28" r="2"/><circle cx="54" cy="44" r="2"/><circle cx="146" cy="28" r="2"/><circle cx="146" cy="44" r="2"/></g><path d="M108 28c-11-7-22 5-15 12s20-3 11-8-14 6-7 7m-8-3-9 7m22-18 7-5" fill="none" stroke="#42617a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <h2>I want to be Hokage!</h2>
          <p class="village-secret-credit">Naruto Uzumaki</p>
          <p>{{ en ? 'You found the spot I hid by the trees. This one’s for the Naruto fans.' : 'Kamu menemukan tempat yang kusembunyikan dekat pepohonan. Ini khusus buat penggemar Naruto.' }}</p>
          <div class="village-secret-reward"><span>★</span><div><strong>{{ en ? 'Hokage in training' : 'Calon Hokage' }}</strong><small>{{ en ? 'Secret badge unlocked' : 'Lencana rahasia terbuka' }}</small></div></div>
          <button class="village-secret-return" @click="closeDiscovery">{{ en ? 'Back to the village' : 'Kembali ke desa' }} <span>↗</span></button>
        </div>
      </div>
      <div class="village-footer"><p><kbd>W A S D</kbd><span>{{ en ? 'or arrows to move' : 'atau panah untuk bergerak' }}</span><kbd>E</kbd><span>{{ en ? 'to discover' : 'untuk jelajahi' }}</span><span class="village-click-tip">· {{ en ? 'Click a path or building' : 'Klik jalan atau bangunan' }}</span></p><button @click="reset">{{ en ? 'Reset position' : 'Ulangi posisi' }} ↺</button></div>
      <div class="village-touch-controls" :aria-label="en ? 'Movement controls' : 'Kontrol gerakan'"><button v-for="(key,i) in ['arrowleft','arrowup','arrowdown','arrowright']" :key="key" :aria-label="['Move left','Move up','Move down','Move right'][i]" @pointerdown.prevent="touchStart($event,key)" @pointerup="clearKeys" @pointercancel="clearKeys" @lostpointercapture="clearKeys">{{ ['←','↑','↓','→'][i] }}</button><button class="village-touch-discover" :disabled="!nearby || !!active" @click="nearby && discover(nearby)">{{ en ? 'Explore' : 'Jelajahi' }}</button></div>
    </div>
    <nav class="village-location-nav" :aria-label="en ? 'Choose a village location' : 'Pilih lokasi desa'"><button v-for="stop in locations" :key="stop.id" @click="travel(stop)"><span>{{ visited.has(stop.id) ? '✓' : stop.number }}</span>{{ stop.name }}<span>↗</span></button></nav>
    <div class="village-signoff"><span>{{ en ? 'You can also scroll down to read more about me.' : 'Kamu juga bisa scroll ke bawah untuk kenalan lebih lanjut.' }}</span><a href="#about">{{ en ? 'About me' : 'Tentang aku' }} ↓</a></div>
    <p class="village-screen-reader" role="status" aria-live="polite">{{ message }}</p>
  </section>
</template>

<style scoped>
.village-hero {
  --v-inset: clamp(20px,4vw,64px);
  --v-ink: #f1f5f9;
  --v-muted: #94a3b8;
  --v-accent: var(--color-primary, #0ea5e9);
  background: var(--color-dark-bg, #0f172a);
  color: var(--v-ink);
  font-family: inherit;
  padding: 28px var(--v-inset) 38px;
}
.village-masthead, .village-masthead-right, .village-toolbar, .village-footer, .village-signoff { display:flex; align-items:center; justify-content:space-between; gap:20px; }
.village-masthead { max-width:1280px; margin:auto; padding-bottom:19px; border-bottom:1px solid #ffffff15; }
.village-wordmark { font-size:17px; font-weight:800; letter-spacing:1px; text-decoration:none; }
.village-wordmark span { color:var(--v-accent); margin-left:4px; }
.village-wordmark small { display:block; font-size:11px; font-weight:400; letter-spacing:.5px; color:var(--v-muted); margin-top:5px; }
.village-availability { display:flex; align-items:center; gap:8px; font-size:11px; }
.village-availability i, .village-character-tag i { width:6px; height:6px; border-radius:50%; background:var(--v-accent); }
.village-language { border:1px solid #ffffff25; border-radius:6px; padding:7px 10px; font-size:11px; }
.village-intro { max-width:1280px; margin:32px auto 27px; display:grid; grid-template-columns:1fr 285px; gap:30px; align-items:end; }
.village-eyebrow { font-size:11px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:var(--v-accent); margin:0 0 12px; }
.village-intro h1 { font-family:inherit; font-weight:700; font-size:clamp(36px,4.4vw,64px); line-height:1.08; letter-spacing:-1.5px; margin:0; }
.village-intro h1 em { font-style:normal; font-weight:700; color:var(--v-accent); }
.village-intro-aside { font-size:13px; line-height:1.75; color:#cbd5e1; }
.village-intro-aside p { margin:0; }
.village-intro-aside a { display:flex; justify-content:space-between; color:var(--v-accent); margin-top:13px; border-bottom:1px solid #0ea5e940; padding-bottom:6px; font-weight:600; }
.village-game-shell { margin:0 calc(-1 * var(--v-inset)); border:1px solid #ffffff20; border-radius:14px; overflow:hidden; background:var(--color-card-bg, #1e293b); }
.village-toolbar { padding:12px 20px; border-bottom:1px solid #ffffff20; }
.village-map-title { display:flex; min-width:0; gap:10px; align-items:center; font-size:10px; line-height:1.5; letter-spacing:1.5px; font-weight:700; }
.village-leaf { font-family:inherit; font-size:21px; color:var(--v-accent); }
.village-progress { flex-shrink:0; white-space:nowrap; font-size:11px; color:var(--v-muted); font-variant-numeric:tabular-nums; }
.village-stage { position:relative; aspect-ratio:25/14; background:#37516a; outline-offset:-4px; }
.village-stage:focus-visible { outline:2px solid var(--v-accent); }
.village-character-tag { position:absolute; top:17px; left:18px; background:#0f172ae8; color:var(--v-ink); padding:11px 14px; border:1px solid #ffffff25; border-radius:6px; display:grid; grid-template-columns:6px 1fr; align-items:center; gap:5px 8px; pointer-events:none; }
.village-character-tag span { font-size:10px; letter-spacing:1px; font-weight:700; }
.village-character-tag small { grid-column:2; font-size:11px; color:#b3c5d9; }
.village-interaction { position:absolute; bottom:13px; left:50%; transform:translateX(-50%); white-space:nowrap; border:1px solid #0ea5e980; background:#0f172a; color:var(--v-ink); font-size:12px; padding:10px 14px; border-radius:6px; }
.village-interaction kbd { margin-right:9px; }
.village-footer { padding:14px 20px; font-size:11px; color:var(--v-muted); }
.village-footer p { display:flex; align-items:center; gap:8px; margin:0; }
kbd { font-family:inherit; font-size:10px; border:1px solid #ffffff25; border-radius:4px; padding:3px 5px; color:var(--v-ink); }
.village-discovery { position:absolute; right:20px; top:20px; width:min(355px,calc(100% - 40px)); max-height:calc(100% - 40px); overflow:auto; overscroll-behavior:contain; background:#0f172af5; color:var(--v-ink); border:1px solid #ffffff25; border-radius:12px; padding:28px; box-shadow:0 10px 30px #02061740; }
.village-discovery .village-eyebrow { padding-right:22px; }
.village-discovery h2 { font-family:inherit; font-size:29px; font-weight:700; line-height:1.2; margin:20px 0 16px; letter-spacing:-.5px; }
.village-discovery>p:not(.village-eyebrow) { font-size:14px; line-height:1.75; color:#cbd5e1; }
.village-discovery>a { display:flex; align-items:center; justify-content:space-between; margin-top:23px; padding-top:14px; border-top:1px solid #ffffff20; font-size:13px; font-weight:700; color:var(--v-accent); }
.village-close { position:absolute; right:13px; top:8px; font-size:27px; width:36px; height:36px; line-height:1; }
.village-location-nav { margin:16px calc(-1 * var(--v-inset)) 0; border:1px solid #ffffff15; border-radius:8px; display:grid; grid-template-columns:repeat(4,1fr); overflow:hidden; }
.village-location-nav button { display:flex; gap:12px; align-items:center; text-align:left; padding:16px; font-size:12px; border-right:1px solid #ffffff15; }
.village-location-nav button:last-child { border-right:0; }
.village-location-nav button>span:first-child { color:var(--v-accent); font-size:10px; }
.village-location-nav button>span:last-child { margin-left:auto; color:var(--v-muted); }
.village-location-nav button:hover { background:#0ea5e90a; }
.village-signoff { max-width:1280px; margin:23px auto 0; font-size:11px; color:var(--v-muted); }
.village-signoff a { color:var(--v-accent); }
button { cursor:pointer; }
button:disabled { opacity:.4; cursor:default; }
button,a { -webkit-tap-highlight-color:transparent; }
button:focus-visible,a:focus-visible { outline:2px solid var(--v-accent); outline-offset:4px; }
.village-touch-controls { display:none; }
.village-character-tag .village-secret-badge { color:#e6bb7a; margin-top:3px; font-weight:600; }
.village-secret { border-color:#d6ab6459; }
.village-secret .village-eyebrow { color:#e6bb7a; }
.village-headband { display:block; width:145px; margin:12px auto 0; }
.village-secret h2 { font-size:30px; margin:15px 0 6px; }
.village-secret .village-secret-credit { font-size:11px; color:#94a3b8; margin:0 0 16px; }
.village-secret-reward { display:flex; align-items:center; gap:12px; margin-top:18px; padding:13px; border:1px solid #d6ab6433; border-radius:8px; background:#d6ab6407; }
.village-secret-reward>span { color:#e6bb7a; font-size:24px; }
.village-secret-reward strong { display:block; font-size:13px; color:#e6bb7a; }
.village-secret-reward small { display:block; font-size:11px; margin-top:3px; color:#94a3b8; }
.village-secret-return { display:flex; align-items:center; justify-content:space-between; width:100%; border-top:1px solid #ffffff20; padding-top:14px; margin-top:20px; color:var(--v-accent); font-size:12px; font-weight:700; }
.village-screen-reader { position:absolute; width:1px; height:1px; overflow:hidden; clip-path:inset(50%); white-space:nowrap; }
@media(max-width:1023px) {
  .village-click-tip { display:none; }
  .village-intro { grid-template-columns:1fr 240px; gap:20px; }
  .village-location-nav button { padding:13px 10px; font-size:11px; gap:7px; }
}
@media(max-width:767px) {
  .village-hero { padding-top:22px; }
  .village-availability { display:none; }
  .village-intro { grid-template-columns:1fr; margin:26px auto 22px; gap:16px; }
  .village-intro h1 { font-size:38px; }
  .village-intro-aside { max-width:360px; font-size:13px; }
  .village-toolbar { padding:11px 12px; gap:10px; }
  .village-map-title { font-size:9px; letter-spacing:.7px; }
  .village-progress { font-size:10px; }
  .village-stage { aspect-ratio:auto; height:350px; }
  .village-character-tag { top:12px; left:12px; padding:8px 10px; }
  .village-character-tag span { font-size:9px; }
  .village-character-tag small { font-size:10px; }
  .village-footer { justify-content:center; padding:12px; }
  .village-footer p { display:none; }
  .village-touch-controls { display:flex; justify-content:center; gap:7px; padding:0 12px 13px; }
  .village-touch-controls button { min-width:44px; height:44px; border:1px solid #ffffff25; border-radius:6px; touch-action:none; font-size:16px; }
  .village-touch-controls .village-touch-discover { font-size:11px; padding:0 10px; }
  .village-location-nav { grid-template-columns:1fr 1fr; }
  .village-location-nav button { font-size:12px; padding:14px 12px; border-bottom:1px solid #ffffff15; }
  .village-location-nav button:nth-child(2) { border-right:0; }
  .village-location-nav button:nth-child(3) { border-bottom:0; }
  .village-signoff { font-size:10px; gap:16px; align-items:start; }
  .village-discovery { right:12px; top:12px; width:calc(100% - 24px); max-height:calc(100% - 24px); padding:24px; }
  .village-discovery h2 { font-size:26px; margin:13px 0; }
  .village-discovery>a { margin-top:15px; }
  .village-interaction { font-size:11px; max-width:calc(100% - 20px); white-space:normal; width:max-content; text-align:center; }
}
</style>

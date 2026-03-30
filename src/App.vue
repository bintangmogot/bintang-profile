<script setup>
import { language, toggleLanguage } from './store.js';
</script>

<template>
  <div class="bg-dark-bg min-h-screen flex flex-col items-center">
    
    <!-- Centered Layout Container -->
    <div class="antialiased text-slate-200 grid grid-cols-1 lg:grid-cols-[60px_1fr_60px] xl:grid-cols-[100px_1fr_80px] min-h-screen w-full max-w-[1600px] relative">
      
      <!-- Left Sidebar (Desktop Only) -->
      <aside class="hidden lg:flex flex-col items-center justify-end h-screen sticky top-0 pb-0">
        <div class="flex flex-col items-center gap-6 text-slate-400 mb-8 z-20">
          <a href="https://drive.google.com/file/d/1Ydff4zvIXFCUkm5oeyJZoCo-4UF-QveN/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="text-sm tracking-[0.2em] text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all flex flex-row items-start gap-1 rotate-180 justify-self-end self-end" style="writing-mode: vertical-rl;">
            <svg class="w-4 h-4 rotate-90 mb-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path></svg>
             Résumé
          </a>
          <!-- Github -->
          <a href="https://github.com/bintangmogot" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-400 hover:-translate-y-1 transition-all"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg></a>
          <!-- Instagram -->
          <a href="https://www.instagram.com/bintang_s.a.m/" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-400 hover:-translate-y-1 transition-all"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
          <!-- Whatsapp -->
          <a href="https://wa.me/62895353811311" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-400 hover:-translate-y-1 transition-all"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 2c-5.523 0-10 4.477-10 10 0 1.769.461 3.427 1.266 4.872l-1.343 4.91 5.027-1.32c1.404.779 3 1.218 4.697 1.218 5.523 0 10-4.477 10-10s-4.477-10-10-10zm.014 18c-1.579 0-3.056-.441-4.322-1.206l-.31-.186-3.21.843.858-3.136-.204-.325c-.752-1.201-1.15-2.585-1.15-4.004 0-4.045 3.292-7.336 7.336-7.336 4.045 0 7.336 3.291 7.336 7.336 0 4.045-3.291 7.336-7.336 7.336zm4.789-6.52c-.262-.132-1.554-.766-1.794-.852-.239-.087-.414-.132-.589.132-.175.263-.679.852-.831 1.026-.152.175-.304.197-.565.066-.263-.131-1.11-.409-2.113-1.304-.781-.697-1.309-1.558-1.461-1.821-.153-.263-.017-.406.115-.536.119-.117.263-.306.395-.459.132-.153.175-.263.264-.438.087-.175.043-.328-.022-.459-.066-.131-.589-1.42-.807-1.946-.212-.511-.429-.441-.59-.449h-.503c-.175 0-.459.066-.7.328-.239.263-.918.897-.918 2.191s.941 2.541 1.072 2.716c.132.175 1.852 2.828 4.486 3.968.627.272 1.115.434 1.496.554.63.199 1.202.171 1.654.104.505-.075 1.554-.635 1.773-1.248.219-.613.219-1.139.153-1.248-.066-.109-.239-.175-.502-.307z"/>
          </svg></a>
          <!-- LinkedIn -->
          <a href="https://www.linkedin.com/in/contact-bintangsurya/" target="_blank" rel="noopener noreferrer" class="hover:text-cyan-400 hover:-translate-y-1 transition-all"><svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
        </div>
        <div class="w-px h-24 bg-slate-500"></div>
      </aside>

      <main class="w-full flex flex-col min-h-screen">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>

      <!-- Right Sidebar (Desktop Only) -->
      <aside class="hidden lg:flex flex-col items-center justify-end h-screen sticky top-0 pb-0">
        <div class="flex flex-col items-center gap-4 mb-8 z-20">
          <button @click="toggleLanguage" class="flex flex-col items-center gap-2 text-sm tracking-[0.2em] font-bold text-slate-400 hover:text-cyan-400 transition-all border border-slate-500 hover:border-cyan-400 px-2 py-3 rounded">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M3.6 9h16.8 M3.6 15h16.8 M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9z"></path></svg>
            <span style="writing-mode: vertical-rl;">{{ language }}</span>
          </button>
          <a href="mailto:bintangaprilian100@gmail.com" class="text-sm tracking-[0.2em] text-slate-400 hover:text-cyan-400 hover:-translate-y-1 transition-all" style="writing-mode: vertical-rl;">
            bintangaprilian100@gmail.com
          </a>
        </div>
        <div class="w-px h-24 bg-slate-500"></div>
      </aside>

    </div>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>

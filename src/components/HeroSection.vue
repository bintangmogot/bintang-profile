<script setup>
import { language } from '../store.js';
</script>

<template>
  <section id="home" class="min-h-screen flex flex-col justify-center px-4 md:px-12 lg:px-16 xl:px-20 relative overflow-hidden">
    
    <!-- Top Line -->
    <div class="flex items-center w-full mb-12 mt-12 lg:mt-20 lg:mb-20">
      <span class="text-white font-bold text-lg md:text-xl whitespace-nowrap mr-6 tracking-wide">Bintang Aprilian</span>
      <div class="h-[2px] bg-slate-600/50 grow"></div>
    </div>

    <!-- Main Content -->
    <div class="flex flex-col relative z-10 w-full mb-16 md:mb-32">
      <!-- Decorative Sketches (Absolute) - Visible mostly on Desktop -->
      <div class="absolute right-[clamp(10rem,20vw,20rem)] top-[clamp(-60px,5vw,-40px)] opacity-70 w-48 h-48 pointer-events-none hidden xl:block text-cyan-600 rotate-15">
         <svg viewBox="0 0 200 150" fill="none" class="w-full h-full stroke-current stroke-1">
            <!-- Python Text Doodle -->
            <text x="30" y="40" font-family="'Comic Sans MS', cursive, sans-serif" font-size="16" transform="rotate(-15 30,40)">Python</text>
            <!-- JS Text Doodle -->
            <text x="110" y="30" font-family="'Comic Sans MS', cursive, sans-serif" font-size="28" transform="rotate(5 110,30)">JS</text>
            <!-- Gear -->
            <circle cx="50" cy="90" r="14" />
            <path d="M50 68 L50 76 M50 104 L50 112 M28 90 L36 90 M64 90 L72 90 M34 74 L40 80 M60 100 L66 106 M66 74 L60 80 M40 100 L34 106" stroke-width="2" stroke-linecap="round"/>
            <!-- Laptop -->
            <path d="M100 80 L150 80 L145 110 L105 110 Z" stroke-width="1.5" stroke-linejoin="round" />
            <path d="M90 110 L160 110" stroke-width="3" stroke-linecap="round"/>
            <path d="M125 95 C125 95, 130 90, 125 95" stroke-width="2" />
         </svg>
      </div>

      <h1 class="text-[clamp(3.5rem,10vw,6rem)] font-bold tracking-tight text-white leading-[1.1] md:leading-[1.05] mb-0 md:-mb-10 z-11">
        {{ language === 'EN' ? "Hi! I'm Bintang," : "Hai! Aku Bintang," }}<br/>
        {{ language === 'EN' ? "a" : "seorang" }} <span class="text-primary">Web Developer.</span>
      </h1>
      
      <div class="flex flex-col md:flex-row mt-12 md:mt-24 w-full z-11">
         <div class="sm:w-4/5 xl:w-1/2">
            <p class="text-slate-300 text-base md:text-xl leading-relaxed mb-6 font-medium">
               {{ language === 'EN' ? "Building responsive websites from Figma to code, crafting dynamic WordPress experiences, and expanding into full-stack with Laravel." : "Membangun website responsif dari desain Figma ke kode, menciptakan pengalaman WordPress yang dinamis, serta bereksplorasi di ranah full-stack dengan Laravel." }}
            </p>
            <a href="#about" class="inline-flex items-center text-primary font-semibold text-lg hover:text-cyan-300  border-b border-transparent hover:border-cyan-400 pb-1 hover:-translate-y-1 transition-all duration-300">
               {{ language === 'EN' ? "View My Work" : "Lihat Karyaku" }} 
               <svg class="w-4 h-4 ml-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </a>
         </div>
      </div>
    </div>

    <!-- Bottom Line -->
    <div class="flex items-center w-full mt-12 mb-12 lg:mt-24 xl:mb-24">
      <div class="h-[2px] bg-slate-600/50 w-full"></div>
    </div>

  </section>
</template>

<style scoped>
/* Any specific hero styles can go here */
</style>

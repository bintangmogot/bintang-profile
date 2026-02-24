<script setup>
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import BentoAbout from './components/BentoAbout.vue'
import ProjectTabs from './components/ProjectTabs.vue'
import Scrollytelling from './components/Scrollytelling.vue';
</script>

<template>
  <div class="antialiased text-slate-200">
    <Navbar />
    
    <main>
      <HeroSection />
      
      <div id="content" class="relative z-10 bg-[#0B1121]">
        <BentoAbout />
        <ProjectTabs />
        <Scrollytelling />
        
        <section id="contact" class="py-20 text-center border-t border-white/5">
           <h2 class="text-3xl font-bold text-white mb-6">Let's work together.</h2>
           <a href="mailto:email@example.com" class="text-cyan-400 text-xl hover:underline">hello@bintang.dev</a>
           <p class="text-gray-500 mt-8 text-sm">© 2024 Bintang Profile. All rights reserved.</p>
        </section>
      </div>
    </main>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>

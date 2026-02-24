<script setup>
import InteractiveTiltCard from './InteractiveTiltCard.vue'
</script>

<template>
  <section id="home" class="min-h-screen flex items-center justify-center pt-16 px-4">
    <div class="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      <!-- Text Content -->
      <div class="space-y-6 text-center md:text-left order-2 md:order-1 reveal">
        <h2 class="text-xl md:text-2xl text-cyan-400 font-medium tracking-wide">
          Hi There, I'm
        </h2>
        <h1 class="text-5xl md:text-7xl font-bold text-white tracking-tight">
          Bintang
        </h1>
        <h3 class="text-2xl md:text-4xl text-gray-400 h-10">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Web Developer.
          </span>
        </h3>
        
        <p class="text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed text-lg reveal delay-100">
          I build accessible, pixel-perfect, secure, and performant web applications.
          Passionate about creating seamless digital experiences.
        </p>
        
        <div class="flex flex-wrap gap-4 justify-center md:justify-start pt-4 reveal delay-200">
          <a href="#projects" class="px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20">
            View My Work
          </a>
          <a href="#contact" class="px-8 py-3 border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-white rounded-full font-medium transition-all">
            Contact Me
          </a>
        </div>
      </div>

      <!-- Hero Visual (Tilt Card) -->
      <div class="order-1 md:order-2 flex justify-center perspective-1000 reveal delay-300">
        <div class="w-full max-w-md aspect-[4/5] md:aspect-square">
          <InteractiveTiltCard>
            <div class="relative w-full h-full bg-[#1E293B]/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-6 flex flex-col justify-between">
              
              <!-- Floating Elements (Decoration) -->
              <div class="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl"></div>
              <div class="absolute top-1/2 -left-10 w-24 h-24 bg-blue-600/20 rounded-full blur-xl"></div>

              <!-- Fake Code/Profile Card Content -->
              <div class="space-y-4 z-10">
                 <div class="flex items-center space-x-3 border-b border-white/5 pb-4">
                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                 </div>

                 <div class="space-y-2 font-mono text-sm text-gray-300">
                    <p><span class="text-purple-400">const</span> developer = {</p>
                    <p class="pl-4">name: <span class="text-green-400">'Bintang'</span>,</p>
                    <p class="pl-4">role: <span class="text-green-400">'Fullstack Dev'</span>,</p>
                    <p class="pl-4">skills: [</p>
                    <p class="pl-8"><span class="text-yellow-300">'Vue'</span>, <span class="text-cyan-300">'Tailwind'</span>, <span class="text-orange-400">'Laravel'</span></p>
                    <p class="pl-4">]</p>
                    <p>}</p>
                 </div>
              </div>

              <!-- Interactive Badge -->
              <div class="mt-auto z-10">
                 <div class="bg-black/30 backdrop-blur p-4 rounded-xl border border-white/5 flex items-center space-x-4">
                    <div class="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                       <span class="text-xl">🚀</span>
                    </div>
                    <div>
                       <p class="text-xs text-gray-400">Current Status</p>
                       <p class="text-sm font-semibold text-white">Open to Work</p>
                    </div>
                 </div>
              </div>

            </div>
          </InteractiveTiltCard>
        </div>
      </div>
      
    </div>
  </section>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
</style>

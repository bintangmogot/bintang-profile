<script setup>
// Placeholder icons can be replaced with actual SVG assets later
</script>

<template>
  <section id="about" class="py-20 px-4">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-white mb-12 flex items-center reveal">
        <span class="w-12 h-1 bg-cyan-500 mr-4 rounded-full"></span>
        About Me
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[180px]">
        
        <!-- Box 1: Main Bio (Large) -->
        <div class="row-span-2 md:col-span-2 md:row-span-2 rounded-3xl bg-[#1E293B] border border-white/5 p-8 relative overflow-hidden group hover:border-cyan-500/30 transition-colors reveal delay-100">
          <div class="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <svg class="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-4">CS Student & Developer</h3>
          <p class="text-gray-400 leading-relaxed mb-6">
            I'm a Computer Science student with a passion for building full-stack applications. 
            I love turning complex problems into simple, beautiful, and intuitive interface designs.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm border border-cyan-500/20">Frontend</span>
            <span class="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm border border-purple-500/20">Backend</span>
            <span class="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm border border-green-500/20">UI/UX</span>
          </div>
        </div>

        <!-- Box 2: Tech Stack (Tall) -->
        <div class="row-span-2 md:col-span-1 md:row-span-2 rounded-3xl bg-[#1E293B] border border-white/5 p-6 flex flex-col hover:border-cyan-500/30 transition-colors">
          <h3 class="text-xl font-bold text-white mb-6">Tech Stack</h3>
          <div class="flex-1 grid grid-cols-2 gap-4">
             <!-- Icons (Using Text for now) -->
             <div class="flex flex-col items-center justify-center bg-black/20 rounded-xl p-2 hover:bg-cyan-500/10 transition-colors">
                <span class="font-bold text-green-400">Vue</span>
             </div>
             <div class="flex flex-col items-center justify-center bg-black/20 rounded-xl p-2 hover:bg-cyan-500/10 transition-colors">
                <span class="font-bold text-sky-400">React</span>
             </div>
             <div class="flex flex-col items-center justify-center bg-black/20 rounded-xl p-2 hover:bg-cyan-500/10 transition-colors">
                <span class="font-bold text-orange-400">Laravel</span>
             </div>
             <div class="flex flex-col items-center justify-center bg-black/20 rounded-xl p-2 hover:bg-cyan-500/10 transition-colors">
                <span class="font-bold text-cyan-400">Tailwind</span>
             </div>
             <div class="flex flex-col items-center justify-center bg-black/20 rounded-xl p-2 hover:bg-cyan-500/10 transition-colors">
                <span class="font-bold text-yellow-400">JS</span>
             </div>
             <div class="flex flex-col items-center justify-center bg-black/20 rounded-xl p-2 hover:bg-cyan-500/10 transition-colors">
                <span class="font-bold text-red-400">Git</span>
             </div>
          </div>
        </div>

        <!-- Box 3: Socials (Small) -->
        <a href="https://github.com" target="_blank" class="rounded-3xl bg-black border border-white/5 p-6 flex items-center justify-between group hover:border-gray-500 transition-colors cursor-pointer">
           <div>
              <p class="text-gray-400 text-sm">Code</p>
              <p class="text-xl font-bold text-white">GitHub</p>
           </div>
           <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              ↗
           </div>
        </a>

        <!-- Box 4: LinkedIn (Small) -->
        <a href="https://linkedin.com" target="_blank" class="rounded-3xl bg-[#0077b5] p-6 flex items-center justify-between hover:opacity-90 transition-opacity cursor-pointer">
           <div>
              <p class="text-white/80 text-sm">Connect</p>
              <p class="text-xl font-bold text-white">LinkedIn</p>
           </div>
           <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              ↗
           </div>
        </a>

        <!-- Box 5: Stats (Wide) -->
        <div class="md:col-span-2 lg:col-span-1 rounded-3xl bg-gradient-to-br from-cyan-600 to-blue-700 p-6 flex flex-col justify-center relative overflow-hidden">
           <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
           <h4 class="text-4xl font-bold text-white mb-1">3+</h4>
           <p class="text-cyan-100">Years of Coding</p>
        </div>

         <!-- Box 6: Location -->
         <div class="rounded-3xl bg-[#1E293B] border border-white/5 p-6 flex flex-col justify-center hover:border-cyan-500/30 transition-colors">
            <p class="text-gray-400 text-sm">Based in</p>
            <p class="text-lg font-bold text-white">Indonesia 🇮🇩</p>
            <p class="text-xs text-green-400 mt-2 flex items-center">
               <span class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
               Available to Hire
            </p>
         </div>

      </div>
    </div>
  </section>
</template>

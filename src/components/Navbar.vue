<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <nav class="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-opacity-70 border-b border-white/5 bg-[#0B1121]/80">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0 cursor-pointer">
          <span class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Bintang.
          </span>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a href="#home" class="hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
            <a href="#about" class="hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
            <a href="#skills" class="hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Skills</a>
            <a href="#projects" class="hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</a>
            <a href="#contact" class="hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</a>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="-mr-2 flex md:hidden">
          <button @click="isOpen = !isOpen" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isOpen" class="md:hidden bg-[#0B1121] border-b border-white/10">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#home" class="block hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium">Home</a>
        <a href="#about" class="block hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium">About</a>
        <a href="#skills" class="block hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium">Skills</a>
        <a href="#projects" class="block hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium">Projects</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'

const target = ref(null)
const card = ref(null)

const elementX = ref(0)
const elementY = ref(0)
const isHovered = ref(false)

function onMouseMove(e) {
  if (!card.value) return

  const rect = card.value.getBoundingClientRect()
  
  // Calculate center of the card
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  
  // Calculate distance from center
  const mouseX = e.clientX - centerX
  const mouseY = e.clientY - centerY

  // Rotation intensity (divide by larger number for subtler effect)
  elementX.value = (mouseY / rect.height) * -20 // Rotate X axis (up/down tilt)
  elementY.value = (mouseX / rect.width) * 20   // Rotate Y axis (left/right tilt)
}

function onMouseEnter() {
  isHovered.value = true
}

function onMouseLeave() {
  isHovered.value = false
  elementX.value = 0
  elementY.value = 0
}

const cardStyle = computed(() => {
  return {
    transform: `perspective(500px) rotateX(${elementX.value}deg) rotateY(${elementY.value}deg) scale3d(1, 1, 1)`,
    transition: isHovered.value ? 'none' : 'transform 0.5s ease-out'
  }
})
</script>

<template>
  <div 
    ref="card"
    class="relative w-full h-full flex items-center justify-center"
    @mousemove="onMouseMove"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <!-- The Tilting Container -->
    <div 
      :style="cardStyle"
      class="w-full h-full preserve-3d"
    >
      <slot></slot>
      
      <!-- Shine/Gloss Effect -->
      <div 
        class="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 pointer-events-none transition-opacity duration-300 rounded-xl"
        :class="{ 'opacity-100': isHovered }"
        style="mix-blend-mode: overlay;"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.preserve-3d {
  transform-style: preserve-3d;
}
</style>

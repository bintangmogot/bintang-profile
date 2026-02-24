<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('all')

const projects = [
  {
    id: 1,
    title: 'POS System Dashboard',
    category: 'webapp',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'A comprehensive Point of Sale system for retail businesses with inventory management.',
    tech: ['Vue', 'Laravel', 'MySQL']
  },
  {
    id: 2,
    title: 'Company Profile CMS',
    category: 'cms',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Custom CMS for a corporate client allowing dynamic content updates.',
    tech: ['WordPress', 'PHP', 'Bootstrap']
  },
  {
    id: 3,
    title: 'E-Commerce Frontend',
    category: 'frontend',
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'High-performance e-commerce shopping cart and checkout flow.',
    tech: ['React', 'Tailwind', 'Redux']
  },
   {
    id: 4,
    title: 'Task Management App',
    category: 'webapp',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Drag-and-drop task manager with real-time collaboration features.',
    tech: ['Vue', 'Firebase', 'Tailwind']
  }
]

const filteredProjects = computed(() => {
  if (activeTab.value === 'all') return projects
  return projects.filter(project => project.category === activeTab.value)
})

const tabs = [
  { id: 'all', label: 'All Work' },
  { id: 'webapp', label: 'Web Apps' },
  { id: 'cms', label: 'CMS' },
  { id: 'frontend', label: 'Frontend' }
]
</script>

<template>
  <section id="projects" class="py-20 px-4 bg-black/20">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row md:items-center justify-between mb-12 reveal">
        <h2 class="text-3xl font-bold text-white flex items-center mb-6 md:mb-0">
          <span class="w-12 h-1 bg-purple-500 mr-4 rounded-full"></span>
          Selected Projects
        </h2>

        <!-- Tabs -->
        <div class="flex flex-wrap gap-2 p-1 bg-[#1E293B] rounded-xl border border-white/5">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            @click="activeTab = tab.id"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all"
            :class="activeTab === tab.id ? 'bg-cyan-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- Project Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <transition-group name="fade">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="group rounded-2xl bg-[#1E293B] border border-white/5 overflow-hidden hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300"
          >
            <!-- Image Area -->
            <div class="h-48 overflow-hidden relative">
              <div class="absolute inset-0 bg-gradient-to-t from-[#1E293B] to-transparent opacity-60 z-10"></div>
              <img 
                :src="project.image" 
                :alt="project.title" 
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div class="absolute top-4 right-4 z-20">
                <div class="w-10 h-10 rounded-full bg-black/50 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                   ↗
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{{ project.title }}</h3>
              <p class="text-gray-400 text-sm mb-4 line-clamp-2">{{ project.description }}</p>
              
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in project.tech" 
                  :key="tech"
                  class="text-xs px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
      
    </div>
  </section>
</template>

<style scoped>
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

.fade-leave-active {
  position: absolute;
}
</style>

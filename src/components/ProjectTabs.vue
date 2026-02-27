<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('all')

const projects = [
  {
    id: 1,
    title: 'POS System Dashboard',
    category: 'webapp',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=800&q=80',
    description: 'A comprehensive Point of Sale system for retail businesses with inventory management.',
    tech: ['Vue', 'Laravel', 'MySQL'],
    link: '#',
  },
  {
    id: 2,
    title: 'Company Profile CMS',
    category: 'cms',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    description: 'Custom CMS for a corporate client allowing dynamic content updates without code.',
    tech: ['WordPress', 'PHP', 'Bootstrap'],
    link: '#',
  },
  {
    id: 3,
    title: 'E-Commerce Frontend',
    category: 'frontend',
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=800&q=80',
    description: 'High-performance e-commerce shopping cart and checkout flow.',
    tech: ['React', 'Tailwind', 'Redux'],
    link: '#',
  },
  {
    id: 4,
    title: 'Task Management App',
    category: 'webapp',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=800&q=80',
    description: 'Drag-and-drop task manager with real-time collaboration features.',
    tech: ['Vue', 'Firebase', 'Tailwind'],
    link: '#',
  },
  {
    id: 5,
    title: 'Analytics Dashboard',
    category: 'frontend',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    description: 'Data visualization dashboard with real-time KPI tracking and CSV export.',
    tech: ['Vue', 'Chart.js', 'Node.js'],
    link: '#',
  },
  {
    id: 6,
    title: 'Blog CMS Platform',
    category: 'cms',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    description: 'A fully custom blog platform with rich text editor and SEO tools built-in.',
    tech: ['Laravel', 'Vue', 'MySQL'],
    link: '#',
  },
]

const filteredProjects = computed(() => {
  if (activeTab.value === 'all') return projects
  return projects.filter((p) => p.category === activeTab.value)
})

const tabs = [
  { id: 'all',      label: 'All Work' },
  { id: 'webapp',   label: 'Web Apps' },
  { id: 'cms',      label: 'CMS' },
  { id: 'frontend', label: 'Frontend' },
]
</script>

<template>
  <section id="projects" class="py-24 px-4 md:px-8 bg-black/20">
    <div class="max-w-7xl mx-auto">
      
      <!-- Section header + tabs -->
      <div class="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <h2 class="text-3xl font-bold text-white flex items-center shrink-0">
          <span class="text-primary font-mono text-lg mr-3">02.</span>
          Selected Projects
          <span class="flex-1 h-px bg-white/10 ml-6 hidden md:block w-16"></span>
        </h2>

        <!-- Filter tabs — horizontal scrollable on all sizes -->
        <div class="flex gap-1 p-1 bg-slate-800/60 rounded-xl border border-white/5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden shrink-0">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            @click="activeTab = tab.id"
            class="flex-none px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all duration-200 outline-none"
            :class="activeTab === tab.id
              ? 'bg-primary text-slate-900 shadow-lg shadow-primary/20'
              : 'text-slate-400 hover:text-white hover:bg-white/5'"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>

      <!-- Project Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <transition-group name="proj">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="group rounded-2xl bg-slate-800/60 border border-white/5 overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col"
          >
            <!-- Image -->
            <div class="relative h-44 overflow-hidden shrink-0">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <!-- External link hover button -->
              <a
                :href="project.link"
                target="_blank"
                class="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/50 backdrop-blur flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 hover:bg-primary hover:text-slate-900"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>

            <!-- Content -->
            <div class="p-5 flex flex-col flex-1">
              <h3 class="text-base font-bold text-white mb-1.5 group-hover:text-primary transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="text-[10px] px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-bold uppercase tracking-wider"
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
/* Simple fade — no shrink */
.proj-move,
.proj-enter-active,
.proj-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.proj-enter-from,
.proj-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
.proj-leave-active {
  position: absolute;
}
</style>

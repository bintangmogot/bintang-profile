<template>
  <section id="experience" class="py-24 lg:py-40 px-4 md:px-8 bg-dark-bg2">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold text-white mb-12 flex items-center">
        <span class="text-primary font-mono text-lg mr-3">02.</span>
        Where I've Worked
        <span class="flex-1 h-px bg-white/10 ml-6 hidden md:block"></span>
      </h2>

      <!-- Layout: sidebar + content on desktop, tabs on top on mobile -->
      <div class="flex flex-col md:flex-row gap-0 md:gap-8">

        <!-- === TAB LIST === -->
        <!-- Mobile: horizontal scroll -->
        <div class="flex md:hidden overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden border-b border-white/10 mb-8 -mx-4 px-4">
          <button
            v-for="(exp, i) in experiences"
            :key="i"
            @click="activeExp = i"
            class="flex-none px-5 py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-all -mb-px"
            :class="activeExp === i
              ? 'border-primary text-primary'
              : 'border-transparent text-slate-500 hover:text-white'"
          >
            {{ exp.company }}
          </button>
        </div>

        <!-- Desktop: vertical list -->
        <div class="hidden md:flex flex-col shrink-0 w-40 border-l-2 border-white/10">
          <button
            v-for="(exp, i) in experiences"
            :key="i"
            @click="activeExp = i"
            class="px-4 py-4 text-left text-sm transition-all border-l-2 -ml-0.5 group"
            :class="activeExp === i
              ? 'border-primary text-white'
              : 'border-transparent text-slate-500 hover:text-slate-200 hover:bg-white/3'"
          >
            <p class="font-semibold leading-tight transition-colors" :class="activeExp === i ? 'text-primary' : ''">
              {{ exp.company }}
            </p>
            <p class="text-xs text-slate-600 mt-0.5 font-mono">{{ exp.year }}</p>
          </button>
        </div>

        <!-- === CONTENT PANE === -->
        <div class="flex-1 min-w-0">
          <transition name="exp-fade" mode="out-in">
            <div :key="activeExp" class="flex flex-col gap-4">
              <!-- Title -->
              <div>
                <h3 class="text-xl font-bold text-white leading-tight">
                  {{ experiences[activeExp].role }}
                  <span class="text-primary"> @ {{ experiences[activeExp].company }}</span>
                </h3>
                <p class="text-slate-500 text-sm font-mono mt-1">{{ experiences[activeExp].period }}</p>
              </div>

              <!-- Bullet points -->
              <ul class="space-y-3 mt-2">
                <li
                  v-for="(point, j) in experiences[activeExp].bullets"
                  :key="j"
                  class="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                >
                  <svg class="w-1.5 h-1.5 mt-2 shrink-0 text-primary" fill="currentColor" viewBox="0 0 6 6">
                    <circle cx="3" cy="3" r="3"/>
                  </svg>
                  {{ point }}
                </li>
              </ul>

              <!-- View Details button -->
              <button
                @click="openModal(experiences[activeExp])"
                class="mt-4 self-start flex items-center gap-2 text-sm font-bold text-primary hover:text-white border border-primary/30 hover:border-primary px-5 py-2.5 rounded-lg transition-all hover:bg-primary/10"
              >
                View Details
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </button>
            </div>
          </transition>
        </div>

      </div>

      <!-- Download Resume -->
      <div class="mt-16 flex justify-center">
        <a
          href="https://drive.google.com/file/d/1iA80CTcUyFwr2b-n5rToSDhfTgID8wnL/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center gap-3 px-8 py-4 border-2 border-primary/40 hover:border-primary text-white rounded-xl hover:bg-primary/10 transition-all font-bold text-sm uppercase tracking-wider"
        >
          <svg class="w-5 h-5 text-primary group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
          </svg>
          Download Resume
        </a>
      </div>
    </div>

    <!-- ===== DETAIL MODAL ===== -->
    <transition name="exp-modal">
      <div v-if="isModalOpen" class="fixed inset-0 z-200 flex items-center justify-center p-4 md:p-8">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" @click="closeModal"></div>

        <!-- Panel -->
        <div class="relative z-10 bg-slate-900 border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
          <!-- Header -->
          <div class="sticky top-0 bg-slate-900/95 backdrop-blur p-6 border-b border-white/10 flex items-start justify-between">
            <div>
              <h3 class="font-bold text-white text-lg">{{ activeModal?.role }}</h3>
              <p class="text-primary text-sm font-mono mt-0.5">{{ activeModal?.company }} · {{ activeModal?.period }}</p>
            </div>
            <button @click="closeModal" class="shrink-0 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          <!-- Body -->
          <div class="p-6 space-y-6">
            <p class="text-slate-400 text-sm leading-relaxed">{{ activeModal?.description }}</p>

            <ul class="space-y-3">
              <li
                v-for="(point, j) in activeModal?.bullets"
                :key="j"
                class="flex items-start gap-3 text-slate-300 text-sm"
              >
                <svg class="w-1.5 h-1.5 mt-2 shrink-0 text-primary" fill="currentColor" viewBox="0 0 6 6"><circle cx="3" cy="3" r="3"/></svg>
                {{ point }}
              </li>
            </ul>

            <!-- Skills used -->
            <div v-if="activeModal?.skills">
              <p class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Tech Used</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="skill in activeModal.skills" :key="skill" class="px-3 py-1 text-xs font-bold rounded-full bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">
                  {{ skill }}
                </span>
              </div>
            </div>

            <!-- Photo gallery -->
            <div v-if="activeModal?.photos?.length">
              <p class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Documentation</p>
              <div class="grid grid-cols-2 gap-3">
                <div v-for="(photo, pi) in activeModal.photos" :key="pi" class="rounded-xl overflow-hidden aspect-video bg-slate-800">
                  <img :src="photo" :alt="`Photo ${pi + 1}`" class="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const activeExp = ref(0);
const isModalOpen = ref(false);
const activeModal = ref(null);

const openModal = (exp) => {
  activeModal.value = exp;
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden';
};
const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = '';
};

const experiences = [
  {
    company: 'Freelance',
    year: '2024–Now',
    role: 'Fullstack Developer',
    period: 'January 2024 – Present',
    description: 'Working independently with clients across various industries, handling everything from requirements gathering to deployment.',
    bullets: [
      'Designed and built a POS system for a local retail chain using Vue 3 and Laravel, reducing checkout time by 40%.',
      'Developed a company profile website with custom CMS for a marketing agency, enabling non-technical staff to update content.',
      'Implemented interactive dashboards with real-time data syncing via Firebase, serving 500+ daily active users.',
      'Delivered projects on time across multiple clients simultaneously using Agile workflows.',
    ],
    skills: ['Vue 3', 'Laravel', 'Firebase', 'MySQL', 'Tailwind CSS'],
    photos: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=600&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    ],
  },
  {
    company: 'Internship',
    year: '2023',
    role: 'Frontend Developer Intern',
    period: 'July 2023 – December 2023',
    description: 'Joined a software house internship where I contributed to multiple client projects under senior developer mentorship.',
    bullets: [
      'Contributed to the frontend of an e-commerce platform using React and Redux, implementing product filtering and cart logic.',
      'Collaborated with the design team to translate Figma mockups into responsive, pixel-perfect interfaces.',
      'Wrote unit tests for critical UI components using Jest, improving code coverage by 30%.',
      'Participated in daily standups and sprint reviews as part of an Agile Scrum team.',
    ],
    skills: ['React', 'Redux', 'TypeScript', 'Jest', 'Figma'],
    photos: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?w=600&q=80',
    ],
  },
  {
    company: 'University',
    year: '2021–Now',
    role: 'CS Student & Researcher',
    period: 'September 2021 – Present',
    description: 'Pursuing a Computer Science degree with a focus on software engineering and human-computer interaction.',
    bullets: [
      'Built a web-based academic scheduling system as a final year project using Vue 3 and Node.js.',
      'Won 2nd place in the university-level programming hackathon building a civic-tech app in 24 hours.',
      'Served as the lead developer of the Student Tech Association, organizing workshops and technical events.',
      'Maintained a GPA of 3.8+ while managing freelance projects on the side.',
    ],
    skills: ['Vue 3', 'Node.js', 'MongoDB', 'Data Structures', 'Algorithms'],
    photos: [
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=600&q=80',
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80',
    ],
  },
  {
    company: 'Open Source',
    year: '2022–Now',
    role: 'Open Source Contributor',
    period: 'March 2022 – Present',
    description: 'Actively contributing to open-source projects and building personal tools that the community can use.',
    bullets: [
      'Contributed bug fixes and new features to 3 open-source Vue component libraries.',
      'Maintained a developer toolkit CLI tool with 500+ GitHub stars.',
      'Reviewed pull requests and mentored new contributors in community-driven projects.',
    ],
    skills: ['Vue', 'TypeScript', 'GitHub Actions', 'Documentation'],
    photos: [
      'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&q=80',
    ],
  },
];
</script>

<style scoped>
.exp-fade-enter-active,
.exp-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.exp-fade-enter-from,
.exp-fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

.exp-modal-enter-active,
.exp-modal-leave-active {
  transition: opacity 0.25s ease;
}
.exp-modal-enter-from,
.exp-modal-leave-to {
  opacity: 0;
}
</style>

<template>
  <section id="experience" class="py-24 lg:py-40 px-4 md:px-8 bg-dark-bg2">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold text-white mb-12 flex items-center">
        <span class="text-primary font-mono text-lg mr-3">02.</span>
        Where I've Worked
        <span class="flex-1  bg-white/10 ml-6 hidden md:block"></span>
      </h2>

      <!-- Layout: sidebar + content on desktop, tabs on top on mobile -->
    <div class="flex flex-col gap-6 lg:gap-10">
      <!-- === CATEGORY TABS (Level 1) === -->
      <div class="flex w-full gap-2 p-1.5 bg-white/5 rounded-xl border border-white/10 self-start">
        <button
          v-for="(cat, idx) in categories"
          :key="idx"
          @click="activeCat = idx; activeExp = 0"
          class="px-6 py-2.5 flex-1 rounded-lg text-xs sm:text-sm font-bold transition-all uppercase tracking-wider"
          :class="activeCat === idx 
            ? 'bg-primary text-slate-900 shadow-lg shadow-primary/20' 
            : 'text-slate-400 hover:text-white hover:bg-white/5'"
        >
          {{ cat.title }}
        </button>
      </div>

      <div class="flex flex-col md:flex-row gap-0 md:gap-8">
        <!-- === COMPANY TABS (Level 2) === -->
        
        <!-- Mobile: horizontal scroll -->
        <div class="flex md:hidden overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden border-b border-white/10 mb-8 -mx-4 px-4">
          <button
            v-for="(exp, i) in categories[activeCat].items"
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
            v-for="(exp, i) in categories[activeCat].items"
            :key="i"
            @click="activeExp = i"
            class="px-4 py-4 text-left text-sm transition-all border-l-2 -ml-0.5 group"
            :class="activeExp === i
              ? 'border-primary text-white bg-primary/5'
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
            <div :key="`${activeCat}-${activeExp}`" class="flex flex-col gap-4">
              <!-- Title -->
              <div>
                <h3 class="text-xl font-bold text-white leading-tight">
                  {{ categories[activeCat].items[activeExp].role }}
                  <span class="text-primary"> @ {{ categories[activeCat].items[activeExp].company }}</span>
                </h3>
                <p class="text-slate-500 text-sm font-mono mt-1">{{ categories[activeCat].items[activeExp].period }}</p>
              </div>

              <!-- Bullet points -->
              <ul class="space-y-3 mt-2">
                <li
                  v-for="(point, j) in categories[activeCat].items[activeExp].bullets"
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
                @click="openModal(categories[activeCat].items[activeExp])"
                class="mt-4 self-start flex items-center gap-2 text-sm font-bold text-primary hover:text-white border border-primary/30 hover:border-primary px-5 py-2.5 rounded-lg transition-all hover:bg-primary/10"
              >
                View Details
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </button>

              <!-- Certification buttons -->
              <div v-if="categories[activeCat].items[activeExp].certifications && categories[activeCat].items[activeExp].certifications.length" class="mt-4">
                <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Certifications</p>
                <div class="flex flex-wrap gap-2">
                  <a
                    v-for="(cert, ci) in categories[activeCat].items[activeExp].certifications"
                    :key="ci"
                    :href="cert.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-primary border border-white/10 hover:border-primary/40 px-4 py-2 rounded-lg transition-all hover:bg-primary/5"
                  >
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                    {{ cert.name }}
                  </a>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>

      <!-- Download Resume -->
      <div class="mt-16 flex justify-center">
        <a
          href="https://drive.google.com/file/d/1Ydff4zvIXFCUkm5oeyJZoCo-4UF-QveN/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center gap-3 px-8 py-4 border-2 border-primary/40 hover:border-primary bg-primary text-slate-900 rounded-xl hover:bg-sky-400 transition-all font-bold text-sm uppercase tracking-wider"
        >
          <svg class="w-5 h-5 text-slate-900 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
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
              <p class="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Skills Used</p>
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

const activeCat = ref(0);
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

const categories = [
  {
    title: 'Website Developer',
    items: [
      {
        company: 'PT. GIT Solution',
        year: '2024–2025',
        role: 'WordPress Builder & Figma Web Designer',
        period: 'April 2024 – May 2025',
        description: 'Part-time remote position at a digital agency in Yogyakarta (working from Surabaya). Built WordPress websites and designed interfaces with Figma while mentoring junior developers.',
        bullets: [
          'Converted UI/UX designs from Figma into pixel-perfect, responsive websites using Elementor Page Builder.',
          'Developed and maintained 3+ dynamic company profiles and landing pages using WordPress and Elementor, reducing development time by 50%.',
          'Mentored a team of junior web developers and employees in WordPress best practices through internal video tutorials.',
          'Improved website functionality and user experience, contributing to increased client engagement and company revenue.',
          'Designed website interfaces with Figma and collaborated with developers to ensure accurate design implementation.',
          'Received Certificate of Employment from PT. GIT Solution.',
        ],
        skills: ['WordPress', 'Elementor', 'Figma', 'CSS', 'UI/UX Design'],
        certifications: [
          { name: 'Certificate of Employment', link: 'https://drive.google.com/file/d/1ESFdiuRJAxwijjf7nj9VKV1t6dzBbPn5/view?usp=sharing' },
        ],
        photos: [
          'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/work/amikom',
          'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/work/20230929_105258',
          'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/work/20231128_094925',
          'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/work/20231101_152031',
        ],
      },
      {
        company: 'Oemah Bu Liek Restaurant',
        year: '2025',
        role: 'Full Stack Developer',
        period: 'February - June 2025',
        description: "Actively involved in my family's restaurant — Oemah Bu Liek Restaurant, Gwalk Surabaya — taking on multiple operational roles from front-of-house service to back-end stock and finance management.",
        bullets: [
          'Developed an internal restaurant management system (Oemah Bu Liek) with Laravel — featuring employee attendance, payroll with overtime logic, and inventory tracking.',  
          
        ],
        skills: ['Laravel', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
        photos: [
          'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/liek/oemah_bu_liek',
          'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/liek/IMG_20240908_194958',
        ],
      },
      {
        company: 'Freelance',
        year: '2024–Now',
        role: 'Frontend & Web Developer',
        period: '2024 – Present',
        description: 'Taking on freelance projects across various industries — from personal trainer websites with Vue.js to restaurant management systems with Laravel and multi-client landing pages.',
        bullets: [
          'Built a personal trainer portfolio website (Coach Yohanes) using Vue.js, Vite, Tailwind CSS, and DaisyUI for a client in Bali. Now in progress to add tons of features with Laravel, such as admin panel, macro nutrition counter for meal plan order, and booking system for personal trainer.',
          'Built a Company Profile Website for Papua Multi Event Company using Wordpress with Elementor Pro.',
          'Created responsive multi-project landing pages (Greenwick, PAO, Xiao) using HTML, CSS, JavaScript, and Bootstrap.',
        ],
        skills: ['Vue.js', 'Laravel', 'WordPress', 'Bootstrap', 'JavaScript'],
        photos: ['https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/dark/bu_liek',
          'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/dark/coach',
          'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/dark/pao',
          'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/dark/xiao',
        ],
      },
    ]
  },
  {
    title: 'Work & Education',
    items: [
      {
        company: 'Oemah Bu Liek Restaurant',
        year: '2023–2025',
        role: 'Waiter · Stock · Cashier',
        period: 'January 2023 – November 2025',
        description: "Actively involved in my family's restaurant — Oemah Bu Liek Restaurant, Gwalk Surabaya — taking on multiple operational roles from front-of-house service to back-end stock and finance management.",
        bullets: [
          'Served customers as a waiter, ensuring a welcoming and efficient dining experience.',
          'Managed daily stock inventory, tracked supplies, and coordinated restocking with suppliers.',
          'Operated the cashier system, handled transactions, and balanced daily sales reports.',
          'Contributed ideas for promotions and menu updates to help grow the business.',
        ],
        skills: ['Customer Service', 'Stock Management', 'Cashiering', 'Teamwork', 'Operations'],
        photos: [
          'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/liek/IMG_20240908_194958',
          'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/liek/IMG-20240714-WA0024',
          'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/liek/IMG-20240714-WA0018',
        ],
      },
      {
        company: 'University',
        year: '2021–2025',
        role: 'CS Student & Lab Coordinator',
        period: 'August 2021 – July 2025',
        description: 'Bachelor of Computer Science at Wijaya Kusuma Surabaya University. GPA 3.86/4.00 (Honors: Excellent). Also served as Laboratory Assistant Coordinator for the Informatics Program.',
        bullets: [
          'Graduated with a Bachelor of Computer Science degree from Wijaya Kusuma Surabaya University, GPA 3.86/4.00 with Excellent honors.',
          'Served as Laboratory Assistant Coordinator, planning and organizing practical sessions for students.',
          'Oversaw laboratory assistant\'s performance, timeline achievement, and scheduled internal coordination meetings.',
          'Certified Junior Web Developer — BNSP (LSP TIK), valid June 2023 – June 2026.',
          'Internship Certificate MBKM 2023 — PT. GIT Solution.',
        ],
        skills: ['Computer Science', 'Leadership', 'Web Development', 'BNSP Certified'],
        certifications: [
          { name: 'BNSP Junior Web Developer', link: 'https://drive.google.com/file/d/1tteYzbIm9gxoxcJx9gjBPCj3BpX_VUsS/view?usp=sharing' },
          { name: 'Internship Certificate MBKM 2023', link: 'https://drive.google.com/file/d/1Po7n4JJ6rDWLH7rXkem3VRnYrDXGgbRo/view?usp=sharing' },
        ],
        photos: [
          'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/university/IMG_2293',
          'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/university/DSCF1703',
          'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/university/20250813_180027',
          'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/work/dealing2',
        ],
      },
    ]
  }
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

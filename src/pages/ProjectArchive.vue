<template>
  <div class="min-h-screen py-20 lg:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">

      <!-- Header -->
      <div class="mb-16">
        <router-link to="/" class="group inline-flex items-center gap-2 text-sm text-primary hover:text-cyan-400 transition-colors mb-8">
          <svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Bintang Surya
        </router-link>
        <h1 class="text-5xl md:text-7xl font-extrabold text-white tracking-tight">All Projects</h1>
      </div>

      <!-- ===== TABLE ===== -->
      <div class="archive-table">

        <!-- Header Row (hidden on mobile) -->
        <div class="archive-header hidden md:grid">
          <div>Year</div>
          <div>Project</div>
          <div>Made at</div>
          <div>Built with</div>
          <div>Link</div>
        </div>

        <!-- Data Rows -->
        <div
          v-for="(project, index) in archiveProjects"
          :key="index"
          @click="openDetail(project)"
          class="archive-row group"
        >
          <!-- Year -->
          <div class="archive-cell year-cell">
            <span class="mobile-label">Year</span>
            {{ project.year }}
          </div>

          <!-- Project -->
          <div class="archive-cell project-cell">
            <span class="mobile-label">Project</span>
            <span class="project-name">
              {{ project.title }}
              <svg v-if="project.liveLink" class="inline-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </span>
          </div>

          <!-- Made at (hidden on mobile) -->
          <div class="archive-cell made-at-cell hidden md:flex">
            {{ project.madeAt }}
          </div>

          <!-- Built with (hidden on mobile) -->
          <div class="archive-cell built-with-cell hidden md:flex">
            <div class="chip-list">
              <span v-for="tech in project.techStack" :key="tech" class="chip">{{ tech }}</span>
            </div>
          </div>

          <!-- Link (hidden on mobile) -->
          <div class="archive-cell link-cell hidden md:flex">
            <a
              v-if="project.linkDisplay"
              :href="project.liveLink"
              @click.stop
              target="_blank"
              rel="noopener noreferrer"
              class="link-text"
            >
              {{ project.linkDisplay }}
              <svg class="w-3 h-3 shrink-0" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
          </div>
        </div>

      </div>
      <!-- ===== END TABLE ===== -->

    </div>

    <!-- ===== SLIDE-IN MODAL ===== -->
    <transition name="modal">
      <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
        <!-- Panel -->
        <div class="modal-panel">

          <!-- Sticky Header -->
          <div class="modal-header">
            <h2 class="modal-title">{{ selectedProject?.title }}</h2>
            <button @click="closeModal" class="modal-close-btn" aria-label="Close">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>

          <!-- Body -->
          <div class="modal-body">
            <!-- Media -->
            <div v-if="selectedProject?.media" class="media-wrapper">
              <img :src="selectedProject.media" :alt="selectedProject?.title" class="media-img" />
            </div>

            <!-- Meta -->
            <div class="flex items-center gap-3 mt-6 mb-4">
              <span class="text-sm font-bold text-primary uppercase tracking-widest">{{ selectedProject?.year }}</span>
              <span v-if="selectedProject?.madeAt" class="text-slate-500 text-xs px-2 py-0.5 rounded bg-white/5">{{ selectedProject.madeAt }}</span>
            </div>

            <p class="text-slate-300 text-sm md:text-base leading-relaxed mb-8">{{ selectedProject?.longDescription }}</p>

            <!-- Tech Stack -->
            <div class="mb-8">
              <h4 class="section-label">Technologies</h4>
              <div class="chip-list mt-3">
                <span v-for="tech in selectedProject?.techStack" :key="tech" class="chip chip-lg">
                  <svg v-if="techIcons[tech]" class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" v-html="techIcons[tech]"></svg>
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Key Features -->
            <div v-if="selectedProject?.features?.length" class="mb-10">
              <h4 class="section-label">Key Features</h4>
              <ul class="mt-3 space-y-3">
                <li v-for="(feat, i) in selectedProject.features" :key="i" class="flex items-start gap-3 text-slate-400 text-sm">
                  <div class="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0"></div>
                  {{ feat }}
                </li>
              </ul>
            </div>

            <!-- CTA Buttons -->
            <div class="cta-group">
              <a v-if="selectedProject?.liveLink" :href="selectedProject.liveLink" target="_blank" class="cta-primary">
                Visit Site
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
              <a v-if="selectedProject?.githubLink" :href="selectedProject.githubLink" target="_blank" class="cta-secondary">
                Source
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </transition>
    <!-- ===== END MODAL ===== -->

  </div>
</template>

<script setup>
import { ref } from 'vue';

const techIcons = {
  'Vue 3': '<path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" transform="translate(0 -1.61)"/>',
  'Tailwind': '<path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8,1.2-1.6,2.6-2.2,4.2-1.8.913.228,1.565.89,2.288,1.624C13.666,10.614,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8-1.2,1.6-2.6,2.2-4.2,1.8-.913-.228-1.565-.89-2.288-1.624C16.337,6.186,14.976,4.8,12.001,4.8Zm-6,7.2c-3.2,0-5.2,1.6-6,4.8,1.2-1.6,2.6-2.2,4.2-1.8.913.228,1.565.89,2.288,1.624,1.177,1.19,2.538,2.576,5.512,2.576,3.2,0,5.2-1.6,6-4.8-1.2,1.6-2.6,2.2-4.2,1.8-.913-.228-1.565-.89-2.288-1.624C10.337,13.386,8.976,12,6.001,12Z"/>',
  'Node.js': '<path d="M12 21.985c-.275 0-.532-.074-.772-.202l-2.439-1.448c-.365-.203-.182-.277-.072-.314.496-.165.588-.201 1.101-.493.056-.037.129-.02.185.017l1.87 1.12c.074.036.166.036.221 0l7.319-4.237c.074-.036.11-.11.11-.202V7.768c0-.091-.036-.165-.11-.201l-7.319-4.219c-.073-.037-.165-.037-.221 0L4.552 7.566c-.073.036-.11.129-.11.201v8.457c0 .073.037.166.11.202l2 1.157c1.083.548 1.762-.095 1.762-.735V8.502c0-.11.091-.22.22-.22h.936c.11 0 .22.092.22.22v8.347c0 1.449-.788 2.294-2.164 2.294-.422 0-.752 0-1.688-.46l-1.925-1.099A1.55 1.55 0 0 1 3 16.216V7.759c0-.551.293-1.064.771-1.34L11.23 2.2a1.563 1.563 0 0 1 1.54 0l7.46 4.22c.477.275.77.788.77 1.339v8.457c0 .55-.293 1.064-.771 1.34l-7.46 4.219a1.69 1.69 0 0 1-.769.21z"/>',
  'React': '<path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.096-.278zm-.005 1.09c.225.013.538.142.894.35 1.207.645 1.567 3.208.834 6.302A22.073 22.073 0 0 0 15.69 8.52a22.74 22.74 0 0 0-1.503-1.79c.78-.807 1.554-1.508 2.09-1.93zm-6.542 0c.536.42 1.31 1.12 2.09 1.93A22.79 22.79 0 0 0 10.92 8.52a22.073 22.073 0 0 0-2.316.232c-.733-3.094-.387-5.66.834-6.302.37-.213.673-.34.894-.35zm-.884 8.95c-1.167-1.565-1.94-3.28-2.244-4.655a20.526 20.526 0 0 1 2.01-.192 20.526 20.526 0 0 1 1.476 1.61c.463.591.87 1.19 1.205 1.79a20.52 20.52 0 0 1-2.447 1.447zm4.82.145c-.438-.6-.844-1.197-1.207-1.79a20.53 20.53 0 0 1-1.205-1.79 20.526 20.526 0 0 1 1.476-1.61c.695-.059 1.36-.094 2.009-.094.65 0 1.317.037 2.01.097-.463.59-.87 1.19-1.207 1.79a20.53 20.53 0 0 1-1.876 3.407zm.63 1.295a20.54 20.54 0 0 0 2.315-.232c-.375 1.464-1.016 2.7-1.831 3.322-.225.168-.478.286-.768.286-.434-.005-.87-.157-1.347-.426a20.53 20.53 0 0 0 1.631-2.95zm-5.31.232a20.534 20.534 0 0 0 2.316.232 20.53 20.53 0 0 0 1.476 1.61c-.477.27-.913.42-1.347.426-.29 0-.543-.118-.768-.286-.815-.622-1.456-1.858-1.831-3.322z"/>',
  'TypeScript': '<path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.125.196.300.373.527.529.223.156.49.3.8.434l1.766.84c.399.192.764.412 1.097.66.333.244.618.52.854.83.237.31.416.651.538 1.022.122.37.183.79.183 1.26 0 .607-.12 1.148-.362 1.622a3.48 3.48 0 0 1-1.01 1.192 4.603 4.603 0 0 1-1.543.735 7.033 7.033 0 0 1-1.956.252c-.379 0-.75-.021-1.11-.062a7.12 7.12 0 0 1-1.03-.194 6.47 6.47 0 0 1-.91-.327 4.913 4.913 0 0 1-.75-.454v-2.638c.23.194.49.37.78.527.29.155.596.29.916.4.32.11.646.192.98.243.336.052.67.078.998.078a3.4 3.4 0 0 0 .903-.108 2.23 2.23 0 0 0 .668-.3c.185-.13.326-.284.42-.46a1.17 1.17 0 0 0 .142-.57c0-.22-.058-.418-.174-.594a2.114 2.114 0 0 0-.495-.512 5.074 5.074 0 0 0-.776-.46l-1.794-.87a7.38 7.38 0 0 1-1.063-.63 3.879 3.879 0 0 1-.8-.828 3.414 3.414 0 0 1-.504-1.032c-.113-.39-.168-.825-.168-1.308 0-.576.112-1.09.336-1.545.224-.454.535-.842.93-1.162a4.14 4.14 0 0 1 1.42-.73 6.13 6.13 0 0 1 1.797-.249zm-11.65.13h3.49v9.138h2.57V9.88h3.49V7.5H6.838v2.38z"/>',
  'Firebase': '<path d="M3.89 15.672 6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.69-2.25-14.29a.54.54 0 0 0-.918-.296L3.307 19.365zM7.017 18.577l8.487-3.075-3.673-5.514zM6.254.505v-.009a.552.552 0 0 0-.062.154L3.084 15.676l4.17-6.096z"/>',
  'Stripe': '<path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.887 3.333 1.553 3.333 2.46 0 1.059-.783 1.89-2.33 1.89-1.67 0-4.115-.68-5.783-1.649l-.913 5.525C5.508 23.415 8.397 24 11.464 24c2.641 0 4.75-.624 6.265-1.844 1.734-1.378 2.573-3.359 2.573-5.74-.003-4.136-2.529-5.982-6.326-7.266z"/>',
};

const archiveProjects = ref([
  {
    year: '2026',
    title: 'Personal Trainer Website — Coach Yohanes',
    madeAt: 'Freelance',
    techStack: ['Vue 3', 'Tailwind', 'DaisyUI', 'Laravel', 'MySQL'],
    linkDisplay: 'coach-yohanes.vercel.app',
    liveLink: 'https://gym-yohanes.vercel.app',
    githubLink: 'https://github.com/bintangmogot/gym-yohanes',
    media: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/dark/coach',
    longDescription: 'Designed to build a strong digital presence for a premier personal trainer in Canggu, Bali. Features meal plans, training packages, and facility details with a modern, responsive design.',
    features: ['Responsive Landing Page', 'Meal Plan Showcase', 'Training Package Display', 'UI/UX Design Integration'],
  },
  {
    year: '2025',
    title: 'Restaurant Management System — Oemah Bu Liek',
    madeAt: 'Freelance',
    techStack: ['Laravel', 'MySQL', 'Bootstrap'],
    linkDisplay: 'oemahbuliek.com',
    liveLink: 'http://bintangsuryaaprilian.page.gd/',
    githubLink: 'https://github.com/bintangmogot/website_oemahbuliek',
    media: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/dark/bu_liek',
    longDescription: 'Designed to modernize the operations of a busy restaurant in Surabaya. Automates payroll calculations (including overtime logic) and streamlines stock management, ensuring data accuracy and operational speed.',
    features: ['Employee Attendance & Photo Verification', 'Payroll with Overtime Logic', 'Inventory Stock-In/Stock-Out Tracking', 'Role-Based Access Control'],
  },
  {
    year: '2025',
    title: 'Digital Education Hub — Bina Akhlak Digital',
    madeAt: 'PT. GIT Solution',
    techStack: ['WordPress', 'Elementor Pro', 'WooCommerce'],
    linkDisplay: 'binaakhlakdigital.id',
    liveLink: 'https://binaakhlakdigital.id/',
    githubLink: '',
    media: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/dark/bina',
    longDescription: 'A specialized digital education hub focused on character building. Created a user-friendly Learning Management System (LMS) environment where students can access structured educational content. Integrated essential tools to support course delivery and community interaction.',
    features: ['Homeschooling Program', 'LMS Course Delivery', 'Community Interaction Tools', 'Responsive Design'],
  },
  {
    year: '2025',
    title: 'PAO Narrative Landing Page',
    madeAt: 'Freelance',
    techStack: ['HTML5', 'CSS3', 'Bootstrap'],
    linkDisplay: 'pao-coin.vercel.app',
    liveLink: 'https://pao-coin-nine.vercel.app/',
    githubLink: 'https://github.com/bintangmogot/GreenWickCoin',
    media: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/dark/pao',
    longDescription: 'An engaging, narrative-driven landing page for PAO, built using Bootstrap. Focused on presenting a unique brand story through professional layout design and clear step-by-step instructional sections for user onboarding.',
    features: ['Storytelling-focused Layout', 'Instructional UI Design', 'Bootstrap Grid Implementation', 'Responsive Branding'],
  },
  {
      year: '2025',
      title: 'Green Wick Interactive Website',
      madeAt: 'Freelance',
      techStack: ['HTML5', 'CSS3', 'Bootstrap'],
      linkDisplay: 'green-wick-coin.vercel.app',
      liveLink: 'https://green-wick-coin.vercel.app/',
      githubLink: 'https://github.com/bintangmogot/GreenWickCoin',
      media: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/dark/greenwick',
      longDescription: 'A custom landing page for the Green Wick project featuring interactive web elements and CSS animations. Implemented a unique web-based mini-game concept to increase user engagement and time-on-page.',
      features: ['Interactive Web Elements', 'CSS3 Animations', 'Custom Game Logic', 'Community-driven UI'],
    },
    {
      year: '2025',
      title: 'Xiao Portfolio & Gallery Page',
      madeAt: 'Freelance',
      techStack: ['HTML5', 'CSS3', 'Bootstrap'],
      linkDisplay: 'xiao-coin.vercel.app',
      liveLink: 'https://xiao-coin.vercel.app/',
      githubLink: 'https://github.com/bintangmogot/GreenWickCoin',
      media: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/dark/xiao',
      longDescription: 'A multipurpose landing page for Xiao, focusing on media-heavy content and partner integrations. Features an optimized image gallery and a clean, responsive grid system to display professional partnerships.',
      features: ['Media Gallery Showcase', 'Partner Grid System', 'Responsive Navigation', 'Custom UI Components'],
    },
    {
      year: '2024',
      title: 'LMS & Certification Platform — Amikom Center',
      madeAt: 'PT. GIT Solution',
      techStack: ['WordPress', 'Elementor Pro', 'WooCommerce', 'Tutor LMS'],
      linkDisplay: 'amikomcenter.com',
      liveLink: 'https://amikomcenter.com/',
      githubLink: '',
      media: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/dark/amikom',
      longDescription: 'An integrated digital platform that combines a professional corporate identity with a functional E-commerce LMS. Serves as a dual-purpose portal: introducing the company\'s vision and providing a marketplace for professional online courses.',
      features: ['LMS Course Marketplace', 'E-commerce Integration', 'Corporate Profile', 'Responsive UI Implementation'],
    },
    {
      year: '2024',
      title: 'LMS — GITS Training',
      madeAt: 'PT. GIT Solution',
      techStack: ['WordPress', 'Elementor Pro', 'WooCommerce'],
      linkDisplay: 'gitstraining.com',
      liveLink: 'https://gitstraining.com/',
      githubLink: '',
      media: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/dark/gits',
      longDescription: 'A comprehensive Learning Management System (LMS) for GITS Training, a platform dedicated to professional IT certification and digital skills. Designed to handle user registration, course management, and interactive assessments so students can track their learning progress and prepare for national certifications (BNSP).',
      features: ['User Registration & Course Management', 'LMS Video Tutorials', 'BNSP Certification Prep', 'Mentoring System'],
    },
    {
      year: '2024',
      title: 'Multi-Service Platform — Papua Multi Event',
      madeAt: 'Freelance',
      techStack: ['WordPress', 'Elementor'],
      linkDisplay: 'papuamultievent.com',
      liveLink: 'https://papuamultievent.com/',
      githubLink: '',
      media: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/dark/papua',
      longDescription: 'A comprehensive digital platform built to showcase a diverse range of services, from wedding organization to tourism and professional training. Created a clean, responsive interface that allows the owner to manage content easily.',
      features: ['Wedding Organizer Section', 'Tourism Packages', 'Training & Course Listings', 'Responsive on All Devices'],
    },
  ]);

const selectedProject = ref(null);
const isModalOpen = ref(false);

const openDetail = (project) => {
  selectedProject.value = project;
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = '';
};
</script>

<style scoped>
/* ============================
   TABLE LAYOUT
   ============================ */

.archive-table {
  width: 100%;
}

/* Grid: 5 columns on md+, single column on mobile */
.archive-header,
.archive-row {
  display: grid;
  grid-template-columns: 80px 1fr 160px 1fr 200px;
  align-items: center;
  gap: 0 16px;
}

.archive-header {
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #64748b;
}

.archive-row {
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding: 20px 0;
  cursor: pointer;
  transition: background 0.2s ease;
  border-radius: 0;
}

.archive-row:hover {
  background: rgba(255, 255, 255, 0.03);
}

/* Mobile: single-column stack */
@media (max-width: 767px) {
  .archive-header {
    display: none;
  }
  .archive-row {
    grid-template-columns: 1fr;
    gap: 8px;
    padding: 20px 16px;
    border-radius: 12px;
    margin-bottom: 4px;
    background: rgba(255, 255, 255, 0.02);
  }
}

.archive-cell {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

@media (min-width: 768px) {
  .archive-cell {
    flex-direction: row;
    align-items: center;
  }
}

/* Mobile labels */
.mobile-label {
  display: block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #475569;
  margin-bottom: 2px;
}
@media (min-width: 768px) {
  .mobile-label {
    display: none;
  }
}

/* Year Cell */
.year-cell {
  color: #64748b;
  font-size: 14px;
  font-weight: 500;
}

/* Project Cell */
.project-name {
  font-size: 15px;
  font-weight: 700;
  color: #f8fafc;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.2s;
}
.archive-row:hover .project-name {
  color: #67e8f9;
}

.inline-icon {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
  opacity: 0.3;
  transition: opacity 0.2s, transform 0.2s;
}
.archive-row:hover .inline-icon {
  opacity: 1;
  transform: translate(2px, -2px);
}

/* Made at Cell */
.made-at-cell {
  color: #94a3b8;
  font-size: 14px;
}

/* Tech Chips */
.chip-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 10px;
  border-radius: 9999px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  background: rgba(103, 232, 249, 0.08);
  color: #67e8f9;
  border: 1px solid rgba(103, 232, 249, 0.15);
}

.chip-lg {
  font-size: 11px;
  padding: 5px 12px;
}

/* Link Cell */
.link-text {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #475569;
  text-decoration: none;
  transition: color 0.2s;
}
.link-text:hover {
  color: #67e8f9;
}

/* ============================
   MODAL
   ============================ */

.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(2, 6, 23, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: flex-end;
}

.modal-panel {
  width: 100%;
  height: 100%;
  background: #0f172a;
  border-left: 1px solid rgba(255,255,255,0.08);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  box-shadow: -20px 0 60px rgba(0,0,0,0.5);
}

/* 50% width on tablet and desktop */
@media (min-width: 768px) {
  .modal-panel {
    width: 50%;
    max-width: 700px;
  }
}

/* Scrollbar inside modal */
.modal-panel::-webkit-scrollbar { width: 5px; }
.modal-panel::-webkit-scrollbar-track { background: transparent; }
.modal-panel::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 10px; }

.modal-header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 28px;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.modal-title {
  font-size: 18px;
  font-weight: 700;
  color: #f8fafc;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 16px;
}

.modal-close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255,255,255,0.05);
  border: none;
  cursor: pointer;
  color: #94a3b8;
  flex-shrink: 0;
  transition: background 0.2s, color 0.2s;
}
.modal-close-btn:hover {
  background: rgba(255,255,255,0.1);
  color: #f8fafc;
}

.modal-body {
  padding: 28px;
  flex: 1;
}

.media-wrapper {
  width: 100%;
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.06);
}

.media-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: grayscale(20%);
  transition: filter 0.4s;
}
.media-img:hover {
  filter: grayscale(0%);
}

.section-label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #64748b;
  margin: 0;
}

.cta-group {
  display: flex;
  gap: 12px;
  margin-top: 8px;
  padding-top: 24px;
  border-top: 1px solid rgba(255,255,255,0.06);
  flex-wrap: wrap;
}

.cta-primary {
  flex: 1;
  min-width: 120px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 20px;
  background: #67e8f9;
  color: #0f172a;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 10px;
  transition: background 0.2s;
}
.cta-primary:hover { background: #22d3ee; }

.cta-secondary {
  flex: 1;
  min-width: 120px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 20px;
  background: rgba(255,255,255,0.05);
  color: #f8fafc;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.1);
  transition: background 0.2s;
}
.cta-secondary:hover { background: rgba(255,255,255,0.1); }

/* ============================
   MODAL TRANSITION
   ============================ */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-panel,
.modal-leave-active .modal-panel {
  transition: transform 0.35s cubic-bezier(0.19, 1, 0.22, 1);
}
.modal-enter-from .modal-panel,
.modal-leave-to .modal-panel {
  transform: translateX(100%);
}
</style>

<template>
    <section id="scrollytelling" class="bg-dark-bg py-20 md:px-8 relative">
        <!-- HEADING MOBILE (< md) -->
        <div class="md:hidden px-6 mb-8">
            <h2 class="text-4xl font-extrabold text-white tracking-tight leading-none">Featured</h2>
            <h3 class="text-xl font-semibold text-primary mt-2">Projects & Experience</h3>
        </div>

        <div class="flex flex-col md:flex-row items-start max-w-7xl mx-auto relative md:gap-8 lg:gap-12">
            <!-- SISI KIRI (Sticky): MD ke atas -->
            <div class="hidden md:flex w-full md:w-1/2 sticky top-16 h-[90vh] flex-col justify-start py-6 z-20 px-6 md:px-0">
                <div class="flex flex-col">
                    <h2 class="text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-none">Featured</h2>
                    <h3 class="text-xl lg:text-2xl font-semibold text-primary mt-3">Projects & Experience</h3>
                    
                    <!-- Line Nav -->
                    <nav class="mt-4 space-y-1">
                        <button 
                            v-for="(step, index) in steps" 
                            :key="index"
                            @click="scrollToStep(index)"
                            class="group flex items-center py-2 outline-none cursor-pointer"
                        >
                            <span 
                                class="mr-4 h-px transition-all duration-300"
                                :class="activeIndex === index ? 'w-16 bg-white' : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'"
                            ></span>
                            <span 
                                class="text-xs font-bold uppercase tracking-widest transition-colors duration-300"
                                :class="activeIndex === index ? 'text-primary' : 'text-slate-500 group-hover:text-slate-200'"
                            >
                                {{ step.navTitle }}
                            </span>
                        </button>
                    </nav>
                </div>

                <!-- Sticky Media Container (5:4 Ratio) -->
                <div class="aspect-5/4 w-full overflow-hidden rounded-2xl bg-slate-900 shadow-2xl relative group/media border border-white/5 mt-9">
                    <transition name="fade" mode="out-in" style="transition-duration: 200ms;">
                        <div :key="activeIndex" class="w-full h-full">
                            <video 
                                v-if="steps[activeIndex].type === 'video'"
                                :src="steps[activeIndex].media" 
                                autoplay muted loop 
                                class="w-full h-full object-cover grayscale group-hover/media:grayscale-0 transition-all duration-500">
                            </video>
                            <img 
                                v-else 
                                :src="steps[activeIndex].media" 
                                class="w-full h-full object-cover grayscale group-hover/media:grayscale-0 transition-all duration-500" 
                                alt="Project Preview"
                                style="text-align: center;"
                            />
                        </div>
                    </transition>
                    <div class="absolute inset-0 bg-primary/10 pointer-events-none"></div>
                </div>
            </div>

            <!-- SISI KANAN: Scrollable Content -->
            <!-- Mobile (<md): Horizontal Scroll | Tablet/Desktop (>=md): Vertical Stack -->
            <div class="w-full md:w-1/2 flex md:block items-stretch overflow-x-auto md:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory md:snap-none px-6 md:px-0 gap-6">
                <div 
                    v-for="(step, index) in steps" 
                    :key="index"
                    :id="'step-' + index"
                    :data-index="index"
                    class="step-item flex-none w-[85vw] sm:w-[70vw] md:w-full snap-center md:snap-align-none min-h-[40vh] md:min-h-[80vh] xl:min-h-screen flex flex-col justify-center py-6 xl:pt-[160px]"
                >
                    <!-- CARD PROJECT -->
                    <div 
                        @click="openModal(step)"
                        class="group/card relative flex flex-col p-4 sm:p-8 rounded-4xl transition-all duration-200 cursor-pointer 
                               bg-white/3 border border-white/5 hover:border-primary/40 
                               hover:bg-white/5 hover:backdrop-blur-md hover:shadow-2xl overflow-hidden h-full min-h-[580px] md:min-h-[400px]"
                    >
                        <!-- Mobile Media (Muncul hanya jika di bawah md) -->
                        <div class="md:hidden aspect-5/4 w-full rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-lg">
                             <img :src="step.media" class="w-full h-full object-cover" :alt="step.title" />
                        </div>

                        <div class="space-y-4">
                            <div class="flex items-center justify-between">
                                <div class="p-2.5 rounded-xl bg-primary/10 text-primary">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                </div>
                                <div class="flex items-center gap-4 text-slate-400">
                                    <a v-if="step.githubLink" :href="step.githubLink" @click.stop target="_blank" class="hover:text-white transition-colors">
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>
                                    </a>
                                    <a v-if="step.liveLink" :href="step.liveLink" @click.stop target="_blank" class="hover:text-white transition-colors">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                    </a>
                                </div>
                            </div>

                            <div class="pt-2">
                                <h3 class="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">{{ step.navTitle }}</h3>
                                <h3 class="text-2xl sm:text-3xl font-bold text-white group-hover/card:text-primary transition-colors tracking-tight">{{ step.title }}</h3>
                            </div>

                            <p class="text-slate-400 leading-relaxed text-sm sm:text-lg line-clamp-2 group-hover/card:text-white transition-colors">
                                {{ step.description }}
                            </p>
                        
                            <div class="flex flex-wrap gap-3 mt-4">
                                <span 
                                    v-for="tech in step.techStack" 
                                    :key="tech"
                                    class="px-3 py-1 text-xs font-bold rounded-full bg-primary/10 text-primary border border-primary/20"
                                >
                                    {{ tech }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- MODAL DETAIL -->
        <transition name="modal-fade">
            <div v-if="isModalOpen" class="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8">
                <div @click="closeModal" class="absolute inset-0 bg-dark-bg/95 backdrop-blur-2xl"></div>
                
                <div class="bg-slate-900 border border-white/10 rounded-4xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl custom-scrollbar transition-all duration-500">
                    <button @click="closeModal" class="fixed md:absolute top-6 right-6 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white z-20 outline-none backdrop-blur-md">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>

                    <div class="flex flex-col lg:flex-row">
                        <!-- Left: Media -->
                        <div class="lg:w-1/2 p-6 lg:p-10 lg:sticky lg:top-0 lg:h-fit">
                            <div class="aspect-5/4 rounded-2xl overflow-hidden border border-white/5 shadow-2xl" style="text-align: center;">
                                <img :src="selectedProject.media" class="w-full h-full object-cover" :alt="selectedProject.title">
                            </div>
                        </div>

                        <!-- Right: Details -->
                        <div class="lg:w-1/2 p-6 lg:p-10 lg:pl-0 flex flex-col justify-center">
                            <h3 class="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-2">{{ selectedProject.navTitle }}</h3>
                            <h2 class="text-2xl md:text-4xl font-extrabold text-white mb-6 leading-tight">{{ selectedProject.title }}</h2>
                            
                            <p class="text-slate-300 text-lg leading-relaxed mb-8">
                                {{ selectedProject.longDescription }}
                            </p>

                            <div class="mb-8">
                                <h4 class="text-white font-bold mb-4">Key Features</h4>
                                <ul class="grid grid-cols-1 gap-3">
                                    <li v-for="(feat, i) in selectedProject.features" :key="i" class="flex items-center gap-3 text-slate-400">
                                        <div class="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
                                        <span>{{ feat }}</span>
                                    </li>
                                </ul>
                            </div>

                            <div class="flex flex-wrap gap-4 mt-auto">
                                <a v-if="selectedProject.liveLink" :href="selectedProject.liveLink" target="_blank" class="px-8 py-4 bg-primary text-slate-900 font-bold rounded-xl hover:scale-105 transition-transform flex items-center gap-2 text-sm uppercase tracking-wider w-100 sm:w-auto justify-center">
                                    Live Demo
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                </a>
                                <a v-if="selectedProject.githubLink" :href="selectedProject.githubLink" target="_blank" class="px-8 py-4 bg-white/5 text-white font-bold border border-white/10 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2 text-sm uppercase tracking-wider w-100 sm:w-auto justify-center">
                                    GitHub
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <a href="/projects" target="_blank" class="px-8 py-4 mt-8 md:-mt-[20vh] xl:mt-8 mx-6 md:mx-0 bg-primary text-slate-900 hover:bg-sky-400 font-bold rounded-xl transition-transform flex self-center items-center justify-center gap-2 text-sm uppercase tracking-wider">
            More Projects
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
        </a>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const steps = [
    {
        navTitle: "Full-Stack",
        title: "Personal Trainer Website — Coach Yohanes (ongoing)",
        description: "Personal Training & Nutrition Management System for Coach Yohan. A professional fullstack platform featuring dynamic meal tracking, calendar booking, and e-commerce tailored for the fitness industry in Bali. Built with Vue 3, Laravel 11, and Tailwind CSS.",
        longDescription: "A personal trainer in Canggu, Bali, had a growing roster of international clients — but no digital system to match. Training bookings were handled via WhatsApp, meal plans were shared through Instagram stories, and client transformations were buried in phone galleries. I designed and built this full-stack platform to solve that. Starting as a high-conversion landing page showcasing credentials, testimonials, and training packages, the system is progressively evolving into a complete fitness management suite — featuring an interactive 'Build Your Own Plate' nutrition tracker with real-time macro calculations, a calendar-based session booking system with admin approval workflows, and an integrated e-commerce store for gym supplements and gear. The frontend is built with Vue 3 Composition API and Tailwind CSS 4 for a premium, responsive experience, while the backend runs on Laravel 11 serving a RESTful API with PostgreSQL.",
        media: "https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/dark/coach",
        type: "image",
        githubLink: "https://github.com/bintangmogot/fitness-management-app",
        liveLink: "https://gym-yohanes.vercel.app/",
        techStack: ["Vue.js", "Vite", "Tailwind CSS", "DaisyUI", "JavaScript"],
        features: [
            "Conversion-Optimized Landing Page",
            "Dynamic 'Build Your Own Plate' Nutrition Tracker",
            "Real-Time Macro Calculator (Kcal, Protein, Carbs, Fat)",
            "Calendar-Based Session Booking with Admin Approval",
            "E-Commerce for Gym Supplements & Gear",
            "Embedded Video Testimonials",
            "Mobile-First Responsive UI/UX"
        ]

    },
    {
        navTitle: "Web App",
        title: "Restaurant Management System — Oemah Bu Liek",
        description: "Designed to modernize the operations of a busy restaurant in Surabaya, automating payroll calculations and streamlining stock management.",
        longDescription: "Designed to modernize the operations of a busy restaurant in Surabaya. Previously, employee attendance and inventory were tracked manually, leading to inefficiencies. I developed this web-based application to automate payroll calculations (including overtime logic) and streamline stock management, ensuring data accuracy and operational speed.",
        media: "https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/dark/bu_liek",
        type: "image",
        githubLink: "https://github.com/bintangmogot/website_oemahbuliek",
        liveLink: "https://omahbuliek.page.gd/",
        techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript"],
        features: [
            "Employee Attendance & Photo Verification",
            "Payroll with Overtime Logic",
            "Inventory Stock-In/Stock-Out Tracking",
            "Role-Based Access Control"
        ]
    },
    {
        navTitle: "WordPress",
        title: "LMS & Certification Platform — Amikom Center",
        description: "An integrated digital platform that combines a professional corporate identity with a functional E-commerce LMS for online courses.",
        longDescription: "I developed an integrated digital platform that combines a professional corporate identity with a functional E-commerce LMS. The website serves as a dual-purpose portal: introducing the company's vision and providing a marketplace for people to purchase online courses from team Amikom Center. I implemented a system that allows users to seamlessly browse, purchase, and access digital learning materials, all within a responsive environment tailored for an academic and professional audience.",
        media: "https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/dark/amikom",
        type: "image",
        githubLink: "", 
        liveLink: "https://amikomcenter.com/",
        techStack: ["WordPress", "Elementor Pro", "LMS Plugins", "WooCommerce", "Figma"],
        features: [
            "LMS Course Marketplace", 
            "E-commerce Integration", 
            "Corporate Profile", 
            "Responsive UI Implementation"
        ]
    },
    {
        navTitle: "Frontend",
        title: "Landing Pages — Greenwick, PAO & Xiao",
        description: "A series of responsive landing pages for various projects, each with consistent layout presenting roadmaps and key information.",
        longDescription: "I developed a series of responsive landing pages for various projects, including Greenwick, PAO, and Xiao. The goal was to create a clean and consistent layout to present project details such as roadmaps and key information. By coding directly with Bootstrap, I ensured that each site is lightweight, fast, and fully responsive, providing a reliable and professional look for each project's digital presence. \ *There are 3 projects in this section, each with its own unique features and design. You can view complete projects when you click the button \"More Projects\".",
        media: "https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/profile-bintang/dark/xiao",
        type: "image",
        githubLink: "https://github.com/bintangmogot/XiaoCoin",
        liveLink: "https://xiao-coin.vercel.app/",
        techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        features: [
            "Multi-Project Consistency", 
            "Tokenomics Display", 
            "Roadmap Sections", 
            "Fully Responsive Design"
        ]
    }
];

const activeIndex = ref(0);
let observer = null;
const isModalOpen = ref(false);
const selectedProject = ref(null);

const openModal = (project) => {
    selectedProject.value = project;
    isModalOpen.value = true;
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    isModalOpen.value = false;
    document.body.style.overflow = 'auto';
};

const scrollToStep = (index) => {
    const el = document.getElementById('step-' + index);
    if (el) {
        const offset = window.innerWidth < 768 ? 120 : 100;
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    }
};

onMounted(() => {
    const options = {
        root: null,
        threshold: 0.5,
        rootMargin: "-10% 0px -10% 0px"
    };

    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                activeIndex.value = parseInt(entry.target.getAttribute('data-index'));
            }
        });
    }, options);

    document.querySelectorAll('.step-item').forEach((item) => observer.observe(item));
});

onUnmounted(() => {
    if (observer) observer.disconnect();
});
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: all 0.5s ease; }
.fade-enter-from { opacity: 0; transform: scale(1.05); }
.fade-leave-to { opacity: 0; transform: scale(0.95); }

.modal-fade-enter-active, .modal-fade-leave-active { transition: all 0.4s ease-out; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }
.modal-fade-enter-from .bg-slate-900 { transform: scale(0.9) translateY(20px); }

.custom-scrollbar::-webkit-scrollbar { width: 6px; }
.custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
</style>

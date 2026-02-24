<template>
    <section id="scrollytelling" class="bg-base-100 py-24">
        <div class="flex items-start max-w-7xl mx-auto relative gap-16 px-6">
            
            <!-- SISI KIRI: Sticky Container -->
            <div class="w-1/2 sticky top-24 h-[85vh] flex flex-col justify-between py-6">
                
                <!-- 1. Teks Statis (Tetap Sama) -->
                <div class="flex flex-row items-start">
                    <div class="flex flex-col items-start">
                        <h1 class="text-6xl font-extrabold text-white tracking-tight">Bintang S.</h1>
                        <h2 class="text-2xl font-semibold text-slate-200 mt-3">Frontend Developer</h2>
                        <p class="text-slate-400 mt-6 max-w-sm leading-relaxed">
                            Saya membangun pengalaman digital yang fokus pada keindahan visual dan performa yang optimal.
                        </p>
                    </div>

                    <!-- 2. Navbar Interaktif -->
                    <nav class="mt-2 space-y-1">
                        <button 
                            v-for="(step, index) in steps" 
                            :key="index"
                            @click="scrollToStep(index)"
                            class="group flex items-center py-2 outline-none cursor-pointer"
                        >
                            <!-- Garis Animasi -->
                            <span 
                                class="mr-4 h-px transition-all duration-300"
                                :class="[
                                    activeIndex === index 
                                    ? 'w-16 bg-slate-200' // Aktif
                                    : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200' // Non-aktif & Hover
                                ]"
                            ></span>
                            <!-- Teks Menu -->
                            <span 
                                class="text-xs font-bold uppercase tracking-widest transition-colors duration-300"
                                :class="[
                                    activeIndex === index 
                                    ? 'text-primary' // Aktif
                                    : 'text-slate-500 group-hover:text-slate-200' // Non-aktif & Hover
                                ]"
                            >
                                {{ step.navTitle }}
                            </span>
                        </button>
                    </nav>
                </div>

                <!-- 3. Media Dinamis (Di bawah Navbar) -->
                <div class="h-full w-full mt-5 overflow-hidden rounded-2xl bg-slate-900 shadow-2xl relative">
                    <transition name="fade" mode="out-in">
                        <div :key="activeIndex" class="w-full h-full">
                            <video 
                                v-if="steps[activeIndex].type === 'video'"
                                :src="steps[activeIndex].media" 
                                autoplay muted loop 
                                class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-100">
                            </video>
                            <img 
                                v-else 
                                :src="steps[activeIndex].media" 
                                class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-100" 
                                alt="Step preview"
                            />
                        </div>
                    </transition>
                    <!-- Overlay Tipis -->
                    <div class="absolute inset-0 bg-primary/10 pointer-events-none"></div>
                </div>
            </div>

            <!-- SISI KANAN: Scrollable Content -->
            <div class="w-1/2">
                <div 
                    v-for="(step, index) in steps" 
                    :key="index"
                    :id="'step-' + index"
                    :data-index="index"
                    class="step-item min-h-[80vh] flex flex-col justify-center py-10"
                >
                    <!-- CARD DENGAN GLASSMORPHISM -->
                    <a 
                        :href="step.link" 
                        target="_blank"
                        class="group/card relative block p-8 rounded-2xl transition-all duration-100 cursor-pointer 
                               hover:bg-white/[0.03] hover:backdrop-blur-md hover:shadow-2xl hover:ring-1 hover:ring-white/10"
                >
                        <div class="space-y-4">
                            <!-- Judul Proyek dengan Panah -->
                            <div class="flex items-center gap-2 group-hover/card:text-primary transition-colors">
                                <h3 class="text-3xl font-bold text-white tracking-tight">{{ step.title }}</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 transition-transform group-hover/card:-translate-y-1 group-hover/card:translate-x-1">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </div>

                            <p class="text-slate-400 leading-relaxed text-lg">
                            {{ step.description }}
                        </p>
                        
                            <!-- Tags Stack / Teknologi -->
                            <div class="flex flex-wrap gap-2 mt-6">
                                <span 
                                    v-for="tech in step.techStack" 
                                    :key="tech"
                                    class="px-3 py-1 text-xs font-bold rounded-full bg-primary/10 text-primary border border-primary/20"
                                >
                                    {{ tech }}
                                </span>
                            </div>

                            <!-- Detail Tambahan (Fitur) -->
                            <ul class="grid grid-cols-1 gap-2 mt-4">
                                <li v-for="(feat, fIndex) in step.features" :key="fIndex" class="flex items-center gap-3 text-sm text-slate-500 group-hover/card:text-slate-400 transition-colors">
                                    <div class="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover/card:bg-primary/50 transition-colors"></div>
                                    <span>{{ feat }}</span>
                            </li>
                        </ul>
                    </div>
                    </a>
                </div>
                <!-- Spacer Bawah -->
                <div class="h-[20vh]"></div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const steps = [
    {
        navTitle: "Discovery",
        title: "Deep UX Analysis",
        description: "Menganalisis kebutuhan pengguna secara mendalam untuk menciptakan fondasi produk yang solid dan berpusat pada solusi nyata.",
        media: "https://yavuzceliker.github.io/sample-images/image-66.jpg",
        type: "image",
        link: "https://github.com",
        techStack: ["Figma", "User Research", "Miro"],
        features: ["Stakeholder Interview", "Competitor Audit"]
    },
    {
        navTitle: "Strategy",
        title: "Modern Interactive UI",
        description: "Merancang antarmuka yang tidak hanya indah secara visual, tetapi juga memberikan pengalaman interaksi yang mulus dan cepat.",
        media: "src/assets/videos/pizza.webm",
        type: "video",
        link: "https://github.com",
        techStack: ["Vue 3", "Tailwind CSS", "GSAP"],
        features: ["Responsive Design", "Motion Graphics"]
    },
    {
        navTitle: "Execution",
        title: "Scalable Frontend",
        description: "Mengimplementasikan desain ke dalam kode yang bersih, efisien, dan siap hadapi traffic tinggi dengan performa maksimal.",
        media: "https://yavuzceliker.github.io/sample-images/image-3.jpg",
        type: "image",
        link: "https://github.com",
        techStack: ["React", "TypeScript", "Next.js"],
        features: ["Clean Code Standards", "Speed Optimization"]
    }
];

const activeIndex = ref(0);
let observer = null;

// Fungsi untuk scroll otomatis saat menu diklik
const scrollToStep = (index) => {
    const el = document.getElementById('step-' + index);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
};

onMounted(() => {
    const options = {
        root: null,
        threshold: 0.6, // 50% elemen terlihat akan memicu perubahan
        rootMargin: "-20% 0px -20% 0px" 
    };

    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = parseInt(entry.target.getAttribute('data-index'));
                activeIndex.value = index;
            }
        });
    }, options);

    const items = document.querySelectorAll('.step-item');
    items.forEach((item) => observer.observe(item));
});

onUnmounted(() => {
    if (observer) observer.disconnect();
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

/* Scroll Snap (Opsional untuk pengalaman yang lebih 'smooth') */
/* .step-item { scroll-snap-align: center; } */
</style>

<!-- BentoAbout.vue - Irregular Bento Grid Layout -->
<template>
  <section id="about" class="py-24 md:py-32 px-4 md:px-8 lg:px-12 xl:px-24 overflow-hidden bg-dark-bg2 rounded-4xl rounded-b-none">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-white mb-12 flex items-center">
        <span class="text-primary font-mono text-lg mr-3">01.</span>
        About Me
        <span class="flex-1 h-px bg-white/10 ml-6 hidden md:block"></span>
      </h2>

      <!--
        Bento Grid — 12 columns, 3 rows
        Desktop:  5 columns × 3 rows
        Mobile:   single column stack
      -->
      <div class="bento-grid" ref="gridRef">

        <!-- === CELL A: Bio (col 1-2, row 1-2) === -->
        <div class="bento-cell bento-bio slide-from-left">
          <h3 class="text-2xl font-extrabold text-white mb-3 leading-tight">
            CS Graduate &amp; <span class="text-primary">Web Developer</span>
          </h3>
          <p class="text-slate-400 text-sm leading-relaxed">
            I'm a Web Developer and Computer Science graduate from Wijaya Kusuma Surabaya University. I specialize in translating Figma designs into responsive websites using HTML, CSS, JavaScript, and WordPress with Elementor. Currently expanding my skills into full-stack development with Laravel.
          </p>
          <div class="flex flex-wrap gap-2 mt-5">
            <span class="badge badge-cyan">Frontend</span>
            <span class="badge badge-purple">WordPress</span>
            <span class="badge badge-green">UI/UX</span>
          </div>
        </div>

        <!-- === CELL B: Profile Photo (col 3, row 1-3) — CENTER === -->
        <div class="bento-cell bento-photo slide-from-right">
          <div class="w-full h-full relative overflow-hidden rounded-2xl bg-slate-800">
            <img
              src="https://res.cloudinary.com/workstation-/image/upload/v1772202237/profile-bintang/3x4_-_Ink_BG_W.png" 
              alt="Bintang Surya"
              class="w-full h-full object-cover object-top"
            />
            <!-- Overlay name -->
            <div class="absolute bottom-0 inset-x-0 bg-linear-to-t from-slate-900/90 to-transparent p-5">
              <p class="text-white font-bold text-lg leading-tight">Bintang Surya</p>
              <p class="text-primary text-xs font-mono mt-0.5">Web Developer</p>
            </div>
          </div>
        </div>

        <!-- === CELL C: Location (col 4, row 1) === -->
        <div class="bento-cell bento-location slide-from-right">
          <p class="text-slate-500 text-xs font-mono uppercase tracking-widest mb-1">Based in</p>
          <p class="text-white font-bold text-xl flex items-center gap-2">
            Bali, Indonesia
            <span class="inline-flex overflow-hidden rounded-sm border border-white/10 shadow-xs w-6 h-4 shrink-0">
              <svg viewBox="0 0 3 2" class="w-full h-full">
                <rect width="3" height="1" fill="#FF0000" />
                <rect y="1" width="3" height="1" fill="#FFFFFF" />
              </svg>
            </span>
          </p>
          <p class="text-xs text-emerald-400 mt-3 flex items-center gap-2 font-medium">
            <span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse inline-block"></span>
            Available to Hire
          </p>
        </div>

        <!-- === CELL D: GitHub (col 5, row 1) === -->
        <a
          href="https://github.com/bintangmogot"
          target="_blank"
          rel="noopener noreferrer"
          class="bento-cell bento-github slide-from-right group"
        >
          <svg class="w-8 h-8 text-slate-300 group-hover:text-white transition-colors mb-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/></svg>
          <p class="text-white font-bold">GitHub</p>
          <p class="text-slate-500 text-xs mt-0.5">@bintangmogot</p>
          <span class="absolute top-4 right-4 text-slate-600 group-hover:text-white transition-colors text-lg">↗</span>
        </a>

        <!-- === CELL E: Tech Stack (col 1-2, row 3) Wide === -->
        <div class="bento-cell bento-stack slide-from-left">
          <p class="text-slate-500 text-xs font-mono uppercase tracking-widest mb-4">Tech Stack</p>
          <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 xl:grid-cols-6 gap-3">
            <div v-for="tech in techStack" :key="tech.name" class="tech-icon-card" :title="tech.name">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" v-html="tech.path"></svg>
              <span class="text-[10px] font-bold text-slate-400 mt-1 leading-none text-center">{{ tech.name }}</span>
            </div>
          </div>
        </div>

        <!-- === CELL F: Projects Stat (col 5, row 2-3) Tall === -->
        <div class="bento-cell bento-stat2 slide-from-right grid grid-cols-2 gap-4 justify-around">
          <div class="flex flex-col items-center">
            <p class="text-5xl font-black text-primary">10+</p>
            <p class="text-slate-400 text-sm mt-1">Projects Shipped</p>
            <div class="mt-4 w-full h-px bg-white/10"></div>
            <a
            href="https://www.linkedin.com/in/contact-bintangsurya/"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-4 flex items-center gap-2 text-primary text-sm font-bold hover:underline"
            >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
          <div class="flex flex-col items-center">
            <p class="text-5xl font-black text-white">3+</p>
            <p class="text-slate-400 text-sm mt-1">Years of Coding</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const gridRef = ref(null);

// Tech Stack data with SVG path strings
const techStack = [
  {
    name: 'Vue',
    path: '<path d="M24 1.61h-9.94L12 5.16 9.94 1.61H0L12 22.39 24 1.61zM12 14.08 5.16 2.23H9.59L12 6.41l2.41-4.18h4.43z"/>',
  },
  // {
  //   name: 'React',
  //   path: '<path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.096-.278zm-.005 1.09c.225.013.538.142.894.35 1.207.645 1.567 3.208.834 6.302A22.073 22.073 0 0 0 15.69 8.52a22.74 22.74 0 0 0-1.503-1.79c.78-.807 1.554-1.508 2.09-1.93zm-6.542 0c.536.42 1.31 1.12 2.09 1.93A22.79 22.79 0 0 0 10.92 8.52a22.073 22.073 0 0 0-2.316.232c-.733-3.094-.387-5.66.834-6.302.37-.213.673-.34.894-.35zm-.884 8.95c-1.167-1.565-1.94-3.28-2.244-4.655a20.526 20.526 0 0 1 2.01-.192 20.526 20.526 0 0 1 1.476 1.61c.463.591.87 1.19 1.205 1.79a20.52 20.52 0 0 1-2.447 1.447zm4.82.145c-.438-.6-.844-1.197-1.207-1.79a20.53 20.53 0 0 1-1.205-1.79 20.526 20.526 0 0 1 1.476-1.61c.695-.059 1.36-.094 2.009-.094.65 0 1.317.037 2.01.097-.463.59-.87 1.19-1.207 1.79a20.53 20.53 0 0 1-1.876 3.407zm.63 1.295a20.54 20.54 0 0 0 2.315-.232c-.375 1.464-1.016 2.7-1.831 3.322-.225.168-.478.286-.768.286-.434-.005-.87-.157-1.347-.426a20.53 20.53 0 0 0 1.631-2.95zm-5.31.232a20.534 20.534 0 0 0 2.316.232 20.53 20.53 0 0 0 1.476 1.61c-.477.27-.913.42-1.347.426-.29 0-.543-.118-.768-.286-.815-.622-1.456-1.858-1.831-3.322z"/>',
  // },
  {
    name: 'Laravel',
    path: '<path fill="none" stroke="currentColor" stroke-linejoin="round" d="m17 13l3.464-2V7L17 5l-3.464 2v4M17 13l-3.464-2M17 13v4l-7 4m7-8V9m0 4l-7 4m3.536-6L10.5 12.735M10 21l-3.464-2.132M10 21v-4m-3.464 2v-.132m0 0V15l3.964-2.265m-3.964 6.133L3.5 17V5m0 0L7 3l3.5 2m-7 0l3 2m4-2v7.735M10.5 5l-4 2M17 9l3.5-2M17 9l-3.5-2M10 17l-3.5-2m0 .5V7" stroke-width="1"/>',
  },
  {
    name: 'Tailwind',
    path: '<path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.614 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.186 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.19 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.386 8.976 12 6.001 12z"/>',
  },
  {
    name: 'JavaScript',
    path: '<path d="M3 3v18h18V3zm9.813 14.023c0 1.77-1.045 2.584-2.555 2.584c-1.335 0-2.12-.697-2.526-1.568l1.394-.871c.232.493.493.87 1.103.87c.58 0 .9-.203.9-1.073v-5.69h1.684zm4.006 2.584c-1.567 0-2.583-.784-3.106-1.713l1.394-.813c.377.58.87 1.016 1.683 1.016c.697 0 1.133-.32 1.133-.871c0-.58-.436-.784-1.22-1.133l-.406-.174c-1.22-.493-2.033-1.19-2.033-2.584c0-1.277.93-2.206 2.468-2.206c1.075 0 1.83.378 2.38 1.364l-1.305.871c-.29-.493-.581-.725-1.104-.725c-.493 0-.813.32-.813.726c0 .493.32.696 1.017 1.016l.406.174c1.422.61 2.264 1.22 2.264 2.67c.03 1.54-1.16 2.381-2.758 2.381"/>',
  },
  // {
  //   name: 'Node.js',
  //   path: '<path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.249 1.327-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.052-.19-.137-.242L11.13 1.608c-.081-.047-.189-.047-.269 0L2.073 6.68c-.086.053-.139.145-.139.243v10.15c0 .097.053.189.137.236l2.409 1.391c1.307.654 2.108-.116 2.108-.891V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.111.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L1.224 18.57C.47 18.147 0 17.341 0 16.471V6.321c0-.87.47-1.678 1.224-2.102L10.02.143c.734-.424 1.694-.424 2.427 0l8.797 5.076C22.003 5.642 22.47 6.45 22.47 7.321v10.15c0 .87-.467 1.675-1.225 2.1l-8.795 5.076c-.28.165-.6.247-.923.247z"/>',
  // },
  // {
  //   name: 'Git',
  //   path: '<path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.608-.406-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>',
  // },
  {
    name: 'MySQL',
    path: '<path d="m24.129 23.412l-.508-.484a6.7 6.7 0 0 0-.809-.891l-.005-.004q-.448-.407-.931-.774q-.387-.266-1.064-.641a1.6 1.6 0 0 1-.818-.824l-.004-.01l-.048-.024c.212-.021.406-.06.592-.115l-.023.006l.57-.157c.236-.074.509-.122.792-.133h.006q.446-.02.847-.139l-.025.006q.194-.048.399-.109t.351-.109v-.169q-.145-.217-.351-.496a2.6 2.6 0 0 0-.443-.468l-.005-.004q-.629-.556-1.303-1.076a16 16 0 0 0-1.311-.916l-.068-.04a5 5 0 0 0-.825-.435l-.034-.012q-.448-.182-.883-.399a1.6 1.6 0 0 0-.327-.119l-.011-.002a.5.5 0 0 1-.29-.169l-.001-.001a3 3 0 0 1-.355-.609l-.008-.02q-.145-.339-.314-.651q-.363-.702-.702-1.427t-.651-1.452q-.217-.484-.399-.967a5.4 5.4 0 0 0-.461-.942l.013.023a17 17 0 0 0-1.331-1.961l.028.038a14.6 14.6 0 0 0-1.459-1.59l-.008-.007a18 18 0 0 0-1.632-1.356l-.049-.035q-.896-.651-1.96-1.282a3.7 3.7 0 0 0-.965-.393l-.026-.006l-1.113-.278l-.629-.048q-.314-.024-.629-.024a1.7 1.7 0 0 1-.387-.279a4 4 0 0 0-.353-.295l-.01-.007a11.7 11.7 0 0 0-2.043-.93L2.071.18A1.36 1.36 0 0 0 .9.096L.909.093a1.36 1.36 0 0 0-.795.84l-.003.01a1.52 1.52 0 0 0 .232 1.549l-.002-.003q.544.725.834 1.14q.217.291.448.605c.141.188.266.403.367.63l.008.021c.056.119.105.261.141.407l.003.016q.048.206.121.448q.217.556.411 1.14c.141.425.297.785.478 1.128l-.019-.04q.145.266.291.52T3.738 9a.9.9 0 0 0 .241.242l.003.002a.4.4 0 0 1 .169.313v.001a1.3 1.3 0 0 0-.217.586l-.001.006a4 4 0 0 1-.153.695l.008-.03a7.1 7.1 0 0 0-.351 2.231q0 .387.04.763l-.003-.031c.06.958.349 1.838.812 2.6l-.014-.025c.197.295.408.552.641.787a.914.914 0 0 0 1.106.203l-.005.002a.93.93 0 0 0 .617-.827v-.002c.048-.474.12-.898.219-1.312l-.013.067a.6.6 0 0 0 .038-.211l-.002-.045v.002q-.012-.109.133-.206v.048q.145.339.302.677t.326.677c.295.449.608.841.952 1.202l-.003-.003a7.7 7.7 0 0 0 1.127 1.001l.022.015q.316.242.566.528l.004.004q.239.28.56.454l.01.005v-.024h.048a.46.46 0 0 0-.18-.205l-.002-.001a2 2 0 0 1-.211-.136l.005.003q-.217-.217-.448-.484t-.423-.508q-.508-.702-.969-1.467t-.871-1.555q-.194-.387-.375-.798t-.351-.798a1 1 0 0 1-.096-.334v-.005a.32.32 0 0 0-.168-.265l-.002-.001a3 3 0 0 1-.408.545l.001-.001a2 2 0 0 0-.382.58l-.005.013a4.3 4.3 0 0 0-.289 1.154l-.002.019q-.072.641-.145 1.318l-.048.024l-.024.024a.86.86 0 0 1-.59-.443l-.002-.005q-.182-.351-.326-.69a6.5 6.5 0 0 1-.423-2.144v-.009a6.2 6.2 0 0 1 .286-2.318l-.012.044q.072-.266.314-.896t.097-.871a.9.9 0 0 0-.265-.41l-.001-.001a3 3 0 0 1-.335-.335l-.003-.004q-.169-.244-.326-.52t-.278-.544a11 11 0 0 1-.474-1.353l-.022-.089a10 10 0 0 0-.546-1.503l.026.064a3.3 3.3 0 0 0-.39-.669l.006.008q-.244-.326-.436-.617q-.244-.314-.484-.605a3.4 3.4 0 0 1-.426-.657l-.009-.02a1.6 1.6 0 0 1-.119-.327l-.002-.011a.4.4 0 0 1 .049-.34l-.001.002a.3.3 0 0 1 .073-.145a.3.3 0 0 1 .143-.072h.002a.55.55 0 0 1 .536-.035l-.003-.001c.219.062.396.124.569.195l-.036-.013q.459.194.847.375c.298.142.552.292.792.459l-.018-.012q.194.121.387.266t.411.291h.339q.387 0 .822.037c.293.023.564.078.822.164l-.024-.007c.481.143.894.312 1.286.515l-.041-.019q.593.302 1.125.641c.589.367 1.098.743 1.577 1.154l-.017-.014c.5.428.954.867 1.38 1.331l.01.012c.416.454.813.947 1.176 1.464l.031.047c.334.472.671 1.018.974 1.584l.042.085a5 5 0 0 1 .234.536l.011.033q.097.278.217.57q.266.605.57 1.221t.57 1.198l.532 1.161c.187.406.396.756.639 1.079l-.011-.015c.203.217.474.369.778.422l.008.001c.368.092.678.196.978.319l-.047-.017c.143.065.327.134.516.195l.04.011c.212.065.396.151.565.259l-.009-.005c.327.183.604.363.868.559l-.021-.015q.411.302.822.57q.194.145.651.423t.484.52a11 11 0 0 0-1.834.087l.056-.006a6 6 0 0 0-1.479.39l.04-.014a2.6 2.6 0 0 1-.388.129l-.019.004a.31.31 0 0 0-.266.277v.001q.093.115.143.26l.002.006q.05.151.125.272l-.003-.006c.119.211.247.393.391.561l-.004-.005q.212.26.476.454l.007.005q.244.194.508.399c.161.126.343.25.532.362l.024.013c.284.174.614.34.958.479l.046.016c.374.15.695.324.993.531l-.016-.011q.291.169.58.375t.556.399q.11.108.191.239l.003.005a.57.57 0 0 0 .36.193h.003v-.048a.5.5 0 0 1-.184-.267l-.001-.004a1 1 0 0 0-.112-.273l.002.004zM5.553 4.207q-.194 0-.363.012a1.3 1.3 0 0 0-.323.063l.009-.003v.024h.048q.097.145.244.326t.266.351l.387.798l.048-.024a.74.74 0 0 0 .252-.321l.002-.005c.052-.139.082-.301.082-.469l-.001-.054v.003a.5.5 0 0 1-.108-.154l-.001-.003l-.081-.182a.5.5 0 0 0-.214-.192l-.003-.001a1 1 0 0 1-.244-.169"/>',
  },
  {
    name: 'Figma',
    path: '<path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.026-4.49 4.515-4.49c2.489 0 4.515 2.014 4.515 4.49S10.661 24 8.172 24zm0-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019zm13.337-5.003a4.49 4.49 0 1 1-8.981 0 4.49 4.49 0 0 1 8.981 0zm-4.49-3.019c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019c1.666 0 3.02-1.355 3.02-3.019s-1.354-3.019-3.02-3.019z"/>',
  },
  // {
  //   name: 'Firebase',
  //   path: '<path d="M3.89 15.672 6.255.461A.542.542 0 0 1 7.27.288l2.543 4.771zm16.794 3.69-2.25-14.29a.54.54 0 0 0-.918-.296L3.307 19.365zM7.017 18.577l8.487-3.075-3.673-5.514zM6.254.505v-.009a.552.552 0 0 0-.062.154L3.084 15.676l4.17-6.096z"/>',
  // },
  // {
  //   name: 'Docker',
  //   path: '<path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.186.186 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.metam 4.572 4.572 0 0 0 1.892 2.07c.87.49 2.286.76 3.921.76.779.002 1.556-.07 2.32-.217a10.636 10.636 0 0 0 3.365-1.244 8.267 8.267 0 0 0 2.21-1.986c1.063-1.346 1.7-2.843 2.167-4.17h.19c1.176 0 1.895-.467 2.295-1.3.156-.317.232-.661.215-1.008z"/>',
  // },
];

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  const cells = gridRef.value?.querySelectorAll('.bento-cell');
  cells?.forEach((cell) => observer.observe(cell));
});
</script>

<style scoped>
/* ======== BENTO GRID ======== */
.bento-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
  gap: 24px;
}

@media (max-width: 639px) {
  .bento-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    gap: 16px;
  }
}

/* ======== CELL PLACEMENT ======== */

/* On tablet (3 cols) — stack them nicely */
  .bento-bio      { grid-column: 1 / 3; grid-row: 1 / 2; min-height: 200px; }
  .bento-photo    { grid-column: 3 / 4; grid-row: 1 / 3; min-height: 280px; }
  .bento-location { grid-column: 1 / 2; grid-row: 2 / 3; }
  .bento-github   { grid-column: 2 / 3; grid-row: 2 / 3; }
  .bento-stack    { grid-column: 1 / 3; grid-row: 3 / 4; }
  .bento-stat2    { grid-column: 3 / 4; grid-row: 3 / 4; }

/* On mobile — single column */
@media (max-width: 639px) {
  .bento-bio {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    min-height: 260px;
  }
  .bento-photo {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    min-height: 280px;
  }
  .bento-location {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
  .bento-github {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
  .bento-stack {
    grid-column: 1 / 3;
    grid-row: 4 / 5;
  }
  .bento-stat2 {
    grid-column: 1 / 3;
    grid-row: 5 / 6;
  }
  .bento-photo { min-height: 240px; }
  .bento-stat2 { display: flex; }
}

/* ======== CELL BASE STYLES ======== */
.bento-cell {
  background: #1E293B;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease;
}
@media (max-width: 639px) {
  .bento-cell {
    padding: 12px;
  }
}

.bento-cell:hover {
  border-color: rgba(14, 165, 233, 0.2);
}

/* Photo cell override */
.bento-photo {
  padding: 0;
  background: #0f172a;
}

/* ======== SLIDE ANIMATIONS ======== */
.slide-from-left {
  transform: translateX(-60px);
  opacity: 0;
  transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.7s ease;
}
.slide-from-right {
  transform: translateX(60px);
  opacity: 0;
  transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.7s ease;
}
.bento-photo {
  opacity: 1;
  transform: none;
}

.slide-from-left.is-visible,
.slide-from-right.is-visible {
  transform: translateX(0);
  opacity: 1;
}

/* Stagger delays */
.bento-bio     { transition-delay: 0ms; }
.bento-stack   { transition-delay: 100ms; }
.bento-location { transition-delay: 60ms; }
.bento-github  { transition-delay: 120ms; }
.bento-stat    { transition-delay: 180ms; }
.bento-stat2   { transition-delay: 240ms; }

/* ======== TECH ICON CARD ======== */
.tech-icon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 8px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: #94a3b8;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  cursor: default;
}
.tech-icon-card:hover {
  background: rgba(14, 165, 233, 0.1);
  color: #0ea5e9;
  transform: translateY(-2px);
}

@media (max-width: 1024px) {
.tech-icon-card {
  background: rgba(14, 165, 233, 0.1);
  color: #0ea5e9;
}
}

/* ======== BADGE ======== */
.badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
}
.badge-cyan   { background: rgba(14, 165, 233, 0.1); color: #38bdf8; border: 1px solid rgba(14, 165, 233, 0.2); }
.badge-purple { background: rgba(168, 85, 247, 0.1); color: #c084fc; border: 1px solid rgba(168, 85, 247, 0.2); }
.badge-green  { background: rgba(34, 197, 94, 0.1); color: #4ade80; border: 1px solid rgba(34, 197, 94, 0.2); }
</style>

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
            CS Student &amp; <span class="text-primary">Developer</span>
          </h3>
          <p class="text-slate-400 text-sm leading-relaxed">
            I'm a Computer Science student passionate about building clean, performant full-stack
            applications. I turn complex problems into intuitive, beautiful interfaces.
          </p>
          <div class="flex flex-wrap gap-2 mt-5">
            <span class="badge badge-cyan">Frontend</span>
            <span class="badge badge-purple">Backend</span>
            <span class="badge badge-green">UI/UX</span>
          </div>
        </div>

        <!-- === CELL B: Profile Photo (col 3, row 1-3) — CENTER === -->
        <div class="bento-cell bento-photo">
          <div class="w-full h-full relative overflow-hidden rounded-2xl bg-slate-800">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80"
              alt="Bintang Surya"
              class="w-full h-full object-cover object-top"
            />
            <!-- Overlay name -->
            <div class="absolute bottom-0 inset-x-0 bg-linear-to-t from-slate-900/90 to-transparent p-5">
              <p class="text-white font-bold text-lg leading-tight">Bintang Surya</p>
              <p class="text-primary text-xs font-mono mt-0.5">Frontend Developer</p>
            </div>
          </div>
        </div>

        <!-- === CELL C: Location (col 4, row 1) === -->
        <div class="bento-cell bento-location slide-from-right">
          <p class="text-slate-500 text-xs font-mono uppercase tracking-widest mb-1">Based in</p>
          <p class="text-white font-bold text-xl">Bali, Indonesia 🇮🇩</p>
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
            <p class="text-5xl font-black text-primary">15+</p>
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
    path: '<path d="M23.643 5.673c.012.065.012.13.012.196v5.124a.468.468 0 0 1-.235.402l-4.303 2.479v4.919c0 .166-.087.32-.228.402l-8.97 5.17c-.025.013-.05.025-.077.034l-.03.012c-.078.025-.164.025-.242 0l-.03-.012c-.027-.009-.052-.021-.077-.033l-8.97-5.17a.465.465 0 0 1-.228-.402V5.869a.466.466 0 0 1 .012-.197c.013-.047.033-.091.065-.13l.012-.015.012-.013c.025-.027.05-.05.08-.07l4.525-2.609a.465.465 0 0 1 .456 0l4.525 2.61c.03.018.056.043.08.07L11.87 5.67l.012.013c.03.038.052.082.065.128a.451.451 0 0 1 .012.197v9.638l3.84-2.212v-4.92a.461.461 0 0 1 .066-.129l.012-.013.012-.014c.024-.027.05-.051.08-.07l4.524-2.61a.465.465 0 0 1 .457 0l4.524 2.61c.03.019.056.043.08.07l.012.014.013.013c.03.038.052.082.065.129zm-.91.746-4.068-2.346-4.068 2.346 4.068 2.345 4.069-2.345zm-4.53 7.717v-4.437l-3.841 2.212v4.437l3.84-2.212zm-9.431-11.29L4.704 5.191.637 7.537l4.068 2.345 4.068-2.345zm-.457 11.963V9.91l-3.84-2.212v4.437l3.84 2.212zm.456.795 3.84 2.212 3.841-2.212-3.84-2.212-3.841 2.212z"/>',
  },
  {
    name: 'Tailwind',
    path: '<path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.614 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.186 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.19 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.386 8.976 12 6.001 12z"/>',
  },
  {
    name: 'JavaScript',
    path: '<path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.125.196.300.373.527.529.223.156.49.3.8.434l1.766.84c.399.192.764.412 1.097.66.333.244.618.52.854.83.237.31.416.651.538 1.022.122.37.183.79.183 1.26 0 .607-.12 1.148-.362 1.622a3.48 3.48 0 0 1-1.01 1.192 4.603 4.603 0 0 1-1.543.735 7.033 7.033 0 0 1-1.956.252c-.379 0-.75-.021-1.11-.062a7.12 7.12 0 0 1-1.03-.194 6.47 6.47 0 0 1-.91-.327 4.913 4.913 0 0 1-.75-.454v-2.638c.23.194.49.37.78.527.29.155.596.29.916.4.32.11.646.192.98.243.336.052.67.078.998.078a3.4 3.4 0 0 0 .903-.108 2.23 2.23 0 0 0 .668-.3c.185-.13.326-.284.42-.46a1.17 1.17 0 0 0 .142-.57c0-.22-.058-.418-.174-.594a2.114 2.114 0 0 0-.495-.512 5.074 5.074 0 0 0-.776-.46l-1.794-.87a7.38 7.38 0 0 1-1.063-.63 3.879 3.879 0 0 1-.8-.828 3.414 3.414 0 0 1-.504-1.032c-.113-.39-.168-.825-.168-1.308 0-.576.112-1.09.336-1.545.224-.454.535-.842.93-1.162a4.14 4.14 0 0 1 1.42-.73 6.13 6.13 0 0 1 1.797-.249zm-11.63.13h3.49v9.126h2.565V9.88h3.49V7.5H6.858z"/>',
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
    path: '<path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.274.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 0 0-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 0 0-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.534-1.492 4.47-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.88 5.886h-1.173l-1.137-1.075-.584-.581c-.297-.3-.566-.595-.802-.876v2.532h-1.014V14.51h1.014v2.446l.548-.631 1.123-1.232.54-.583h1.176l-1.987 2.28 2.296 2.917z"/>',
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

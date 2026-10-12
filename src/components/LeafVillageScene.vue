<script setup>
import { SECRET } from '../data/village-game.js';
defineProps({ locations: Array, player: Object, moving: Boolean, facing: Number, routeEnd: Object, visited: Set, viewBox: String, secretFound: Boolean, secretSpeech: Boolean });
defineEmits(['travel', 'ground']);
const trees = [[50,346],[98,307],[109,441],[927,313],[960,382],[894,442],[57,554],[158,601],[843,591],[951,530],[421,311],[581,311]];
const houses = [[80,276,.55],[160,262,.42],[837,277,.43],[919,271,.57]];
</script>

<template>
  <svg class="village-art" :viewBox="viewBox" @pointerdown="$emit('ground', $event)" aria-hidden="true">
    <defs>
      <pattern id="village-tiles" width="14" height="12" patternUnits="userSpaceOnUse"><path d="M0 11H14M7 0V11" fill="none" stroke="#b3c7d8" stroke-opacity=".23" stroke-width="1"/></pattern>
      <pattern id="village-grain" width="37" height="31" patternUnits="userSpaceOnUse"><path d="M4 12h2M25 27h3" stroke="#1c354b" stroke-opacity=".15"/></pattern>
    </defs>
    <rect width="1000" height="640" fill="#273e57"/>
    <circle cx="842" cy="76" r="37" fill="#c5dce8"/>
    <g fill="#57738e" opacity=".8"><path d="M70 63h110q12-12-3-17H150q-12-20-29-4H88Q63 42 70 63Z"/><path d="M709 116h112q13-13-3-18h-18q-15-20-32-5h-44q-22 0-15 23Z"/></g>
    <path d="M0 145L99 91 175 113 268 56 361 100 433 46 529 90 650 61 741 107 842 92 1000 134V289H0Z" fill="#36516b"/>
    <path d="M0 205L107 153 209 177 347 124 460 162 573 112 699 178 821 139 1000 181V329H0Z" fill="#2b465f"/>
    <!-- Hokage Rock, carved above the village -->
    <path d="M286 238L309 155 350 112 631 111 686 158 717 240Z" fill="#8499ab" stroke="#566f87" stroke-width="3"/>
    <path d="M309 220L327 155 359 126H624L670 164 691 226" fill="none" stroke="#a3b7c6" stroke-width="7"/>
    <g v-for="(x,i) in [350,399,448,497,546,595,644]" :key="x" data-hokage-face :transform="`translate(${x} ${170 + (i % 2)*12}) scale(.8)`" fill="#748b9e" stroke="#526b81" stroke-width="2.5">
      <path d="M-24-9Q-31-41 0-43Q32-41 24-9L14 23H-12Z"/><path :d="[
        'M-23-24L-25-43Q0-53 25-43L23-24M-22-32H22',
        'M-23-24L-29-46-11-38 0-50 17-37 28-44 23-23',
        'M-26-24L-29-37Q0-56 29-37L26-24M-26-31H26',
        'M-24-22L-32-38-18-35-18-49-5-42 5-54 14-41 29-44 24-22',
        'M-24-16Q-34-47 0-47Q34-47 24-16L18-33 0-42-18-33Z',
        'M-24-24L-29-39-14-36-8-51 3-43 17-50 18-37 29-36 24-24M-21-27H22',
        'M-24-24L-27-39-16-36-13-47-3-40 3-49 12-40 23-44 24-24M-22-29H22'
      ][i]" fill="#8da1b2"/>
      <path d="M-15-8h10M6-8h10M0-7l-5 13h10M-9 14h18" fill="none"/><path d="M-23-1l8 4M15 3l9-4" stroke="#637d93"/>
      <path v-if="i === 5" d="M-20-2H20L12 19H-12Z" fill="#637d93"/>
      <path v-if="i === 6" d="M-19 1l8 2M-19 6l8 2M11 3l8-2M11 8l8-2" fill="none"/>
    </g>
    <path d="M0 263Q126 217 267 266T531 264T803 259T1000 272V640H0Z" fill="#37516a"/>
    <path d="M0 287Q134 257 236 285M761 285Q885 252 1000 296" fill="none" stroke="#25435b" stroke-width="33"/>
    <g v-for="(house,i) in houses" :key="i" :transform="`translate(${house[0]} ${house[1]}) scale(${house[2]})`">
      <path d="M-48 0H35V58H-48Z" fill="#91a8ba"/><path d="M35 0L58-14V45L35 58Z" fill="#6c879f"/>
      <path d="M-61 0L-34-38H55L35 0Z" fill="#365c7b"/><path d="M55-38L72-15 35 0Z" fill="#25445f"/>
      <path d="M-8 28H10V58H-8Z" fill="#20384e"/><path d="M-32 18H-17V34H-32ZM17 18H29V34H17Z" fill="#c1ced7"/>
    </g>
    <path d="M436 640L443 411 463 333 479 279H523L540 333 563 411 574 640Z" fill="#8096aa"/>
    <path d="M78 368Q504 318 925 368L925 410Q504 364 78 410Z" fill="#8096aa"/>
    <path d="M121 517Q493 455 888 517L888 558Q493 503 121 558Z" fill="#8096aa"/>
    <path d="M459 620l14-157M87 391Q504 348 915 391M130 539Q493 482 875 539" fill="none" stroke="#a3b7c7" stroke-width="2" stroke-dasharray="3 12"/>
    <rect y="280" width="1000" height="360" fill="url(#village-grain)"/>
    <!-- No marker or clickable shortcut: the leaf is the only clue to the clearing. -->
    <g :transform="`translate(${SECRET.x} ${SECRET.y})`" pointer-events="none">
      <ellipse rx="28" ry="10" fill="#607c93" opacity=".4"/>
      <path d="M-24-25L11-19 8-10-27-16Z" fill="#55738a" stroke="#2c4c65" stroke-width="2"/><ellipse cx="-25" cy="-21" rx="5" ry="5" fill="#7c95a7"/><path d="M-24-22l3 1" stroke="#375870"/>
      <path d="M-1-7Q-9-20 5-22Q13-10-1-7Z" fill="#dc974e"/><path d="M-1-7L5-19" stroke="#9c6738" stroke-width="1"/>
      <ellipse v-if="secretFound" rx="23" ry="9" fill="none" stroke="#dfb879" stroke-width="1.5" stroke-dasharray="3 5"/>
    </g>
    <g v-for="(tree,i) in trees" :key="i" :transform="`translate(${tree[0]} ${tree[1]})`"><ellipse cy="9" rx="30" ry="9" fill="#172d43" opacity=".18"/><path d="M0 4v-37" stroke="#57718a" stroke-width="8"/><path d="M-33-22L-17-51-24-49 0-91 24-49 17-51 33-22Z" fill="#244a64"/><path d="M-19-47L0-78 9-47Z" fill="#3d6782"/><path d="M-22-23L-4-46 4-23Z" fill="#315873"/></g>
    <!-- Village entrance -->
    <g transform="translate(501 317)"><ellipse cy="19" rx="62" ry="8" fill="#1d354d" opacity=".2"/><path d="M-51 14V-40M51 14V-40" stroke="#447398" stroke-width="9"/><path d="M-68-39Q0-26 68-39M-63-26H63" stroke="#5184a9" stroke-width="9" fill="none"/><rect x="-18" y="-36" width="36" height="21" rx="1" fill="#cbdce7"/><text y="-21" text-anchor="middle" fill="#345873" font-size="13">木ノ葉</text></g>
    <g v-for="stop in locations" :key="stop.id" :transform="`translate(${stop.x} ${stop.y - 43})`" data-location :data-id="stop.id" class="village-building" @pointerdown.stop="$emit('travel',stop)">
      <ellipse cy="25" rx="82" ry="16" fill="#132b41" opacity=".35"/>
      <!-- The office has two round floors, like the Hokage residence. -->
      <g v-if="stop.id === 'about'" stroke="#29455d" stroke-width="2">
        <path d="M-65-86Q0-112 65-86V4Q0 34-65 4Z" fill="#b6c8d5"/>
        <path d="M22-102Q52-100 65-86V4Q48 16 22 21Z" fill="#8da5b8" stroke="none"/>
        <path d="M-41-139Q0-156 41-139V-85Q0-67-41-85Z" fill="#d0dce5"/>
        <path d="M17-149Q32-146 41-139V-85L17-78Z" fill="#a2b8c8" stroke="none"/>
        <path d="M-57-135L-37-157Q0-168 37-157L57-135Q0-114-57-135Z" :fill="stop.color"/>
        <path d="M-80-85L-62-109Q0-126 62-109L80-85Q0-60-80-85Z" :fill="stop.color"/>
        <path d="M-78-86Q0-62 78-86M-56-135Q0-114 56-135" fill="none" stroke="#203b53" stroke-width="5"/>
        <path d="M-62-105Q0-87 62-105M-68-98Q0-78 68-98" fill="none" stroke="#7294b1" stroke-width="1.5"/>
        <path d="M-13-31Q0-39 13-31V23Q0 27-13 23Z" fill="#263f58"/>
        <path d="M-44-45H-25V-18H-44ZM26-45H44V-18H26ZM-27-120H-13V-100H-27ZM14-120H27V-100H14Z" fill="#e7cca0"/>
        <path d="M-35-45v27M-44-32h19M35-45v27M26-32h18" fill="none" stroke="#607a91"/>
        <circle cy="-56" r="12" fill="#e1eaf0"/><text y="-51" text-anchor="middle" fill="#355b7a" font-size="15" stroke="none">火</text>
      </g>
      <!-- Shared roof geometry keeps the other buildings in the same perspective. -->
      <g v-else>
        <path d="M-64-62H44V20H-64Z" fill="#c1d0dc" stroke="#35516a" stroke-width="2"/>
        <path d="M44-62L69-77V5L44 20Z" fill="#8ba4b9" stroke="#35516a" stroke-width="2"/>
        <path d="M-64-53H44V-44H-64Z" fill="#91aabe"/>
        <path d="M-78-62L-43-111H64L44-62Z" :fill="stop.color" stroke="#29465f" stroke-width="2"/>
        <path d="M64-111L84-80 44-62Z" fill="#294b6c" stroke="#29465f" stroke-width="2"/>
        <path d="M-78-62L-43-111H64L44-62Z" fill="url(#village-tiles)"/>
        <path d="M-80-61H45L85-80M-44-112H65" fill="none" stroke="#203b56" stroke-width="5" stroke-linejoin="round"/>
        <path d="M-67-91H56M-72-76H49" stroke="#82a3bc" stroke-width="1" opacity=".45"/>
        <g v-if="stop.id === 'projects'">
          <path d="M-61-43H41V15H-61Z" fill="#344e68"/><rect x="-51" y="-38" width="82" height="47" rx="2" fill="#a38462" stroke="#dac5a0" stroke-width="2"/>
          <g fill="#e1e7e8"><path d="M-44-31H-23V-5H-44Z"/><path d="M-17-28H3V2H-17Z"/><path d="M10-31H24V-9H10Z"/></g>
          <g stroke="#6d8192" stroke-width="1.5"><path d="M-40-23h12M-40-18h9M-40-12h11M-12-19H-1M-12-13H-3M-12-7H0M13-22h7M13-16h6"/></g>
          <path d="M-58-46V18M39-46V18" stroke="#496581" stroke-width="7"/>
          <rect x="-34" y="-101" width="49" height="25" rx="2" fill="#dbe6ed"/><text x="-10" y="-83" text-anchor="middle" fill="#365f7d" font-size="14">任務</text>
        </g>
        <g v-else-if="stop.id === 'skills'" stroke="#4d6b85" stroke-width="2">
          <path d="M-62-44H42V17H-62Z" fill="#54718b"/>
          <path d="M-54-37H-24V6H-54ZM4-37H34V6H4Z" fill="#d3e0e7"/>
          <path d="M-45-37V6M-35-37V6M-54-23H-24M-54-9H-24M14-37V6M24-37V6M4-23H34M4-9H34" fill="none"/>
          <path d="M-23-40H3V17H-23Z" fill="#233e57"/><path d="M-10-40V17" stroke="#7e9cb4"/>
          <path d="M-59 17H40L50 23H-68Z" fill="#93adbf"/>
          <rect x="-34" y="-101" width="49" height="25" rx="2" fill="#dbe6ed"/><text x="-10" y="-83" text-anchor="middle" fill="#365f7d" font-size="14" stroke="none">道場</text>
        </g>
        <g v-else>
          <path d="M-62-42H42V18H-62Z" fill="#233b51"/><path d="M-61-48H42V-19H-61Z" fill="#d7e5ec"/>
          <path d="M-44-48V-19M-23-48V-19M-2-48V-19M19-48V-19" stroke="#284e71" stroke-width="3"/>
          <path d="M-59-3H39V18H-59Z" fill="#7f9eb7"/><path d="M-65-7H44V-1H-65Z" fill="#cedee8"/>
          <path d="M-51 18v9M-29 18v9M-7 18v9M15 18v9" stroke="#304e69" stroke-width="5"/>
          <path d="M-44-9q6 10 12 0M-13-9q6 10 12 0M18-9q6 10 12 0" fill="#ddba80"/>
          <path d="M-60-45V18M40-45V18" stroke="#55758e" stroke-width="6"/>
          <rect x="-34" y="-101" width="49" height="25" rx="2" fill="#dbe6ed"/><text x="-10" y="-83" text-anchor="middle" fill="#365f7d" font-size="14">一楽</text>
          <ellipse cx="-71" cy="-23" rx="7" ry="13" fill="#d9a665" stroke="#725b46"/><path d="M-71-40v4M-71-11v4" stroke="#46627a" stroke-width="2"/>
        </g>
      </g>
      <path d="M-25 21H20L29 28H-32Z" fill="#526e86"/><path d="M-32 28H29L36 34H-38Z" fill="#738fa5"/>
      <g :transform="`translate(0 ${stop.id === 'about' ? -185 : -135})`"><circle r="13" fill="#132a40" stroke="#759bbd" stroke-width="2"/><text y="4" text-anchor="middle" fill="#e2ecf5" font-size="10" font-weight="bold">{{ visited.has(stop.id) ? '✓' : stop.number }}</text></g>
      <g transform="translate(0 50)"><rect x="-70" y="-12" width="140" height="23" rx="4" fill="#152b41" stroke="#728ea9" stroke-width="1"/><text y="3" text-anchor="middle" fill="#e3edf7" font-size="10" letter-spacing=".8">{{ stop.mapLabel }}</text></g>
    </g>
    <g v-if="routeEnd" :transform="`translate(${routeEnd.x} ${routeEnd.y})`" fill="none" stroke="#77d1f4" stroke-width="2"><ellipse rx="12" ry="5"/><path d="M-5 0H5M0-3V3"/></g>
    <!-- Naruto: original vector sprite with headband, whiskers and orange outfit -->
    <g :transform="`translate(${player.x} ${player.y})`" data-player :data-x="player.x.toFixed(1)" :data-y="player.y.toFixed(1)">
      <ellipse cy="6" rx="17" ry="6" fill="#132a40" opacity=".3"/>
      <g class="naruto-sprite" :class="{ 'is-running': moving }" :style="{ '--facing': facing }">
        <path d="M-8-9L-10 4M7-9L10 4" stroke="#294144" stroke-width="7"/><path d="M-14 5h9M6 5h10" stroke="#1d3036" stroke-width="4"/>
        <path d="M-12-34H12L15-9H-15Z" fill="#e88838" stroke="#304548" stroke-width="2"/><path d="M-11-33H11V-24H-11Z" fill="#283f46"/><path d="M0-25V-9" stroke="#ebdfbc" stroke-width="2"/>
        <path d="M-12-28L-19-11M12-28L19-11" stroke="#e88838" stroke-width="7"/><circle cx="-19" cy="-10" r="3" fill="#e4bc94"/><circle cx="19" cy="-10" r="3" fill="#e4bc94"/>
        <path d="M-12-44Q-15-61 0-62Q15-61 12-44L7-35H-7Z" fill="#edc89b" stroke="#806d4b" stroke-width="1"/>
        <path d="M-15-52L-18-65-9-62-9-73-1-66 6-76 10-64 19-66 14-52Z" fill="#e9c246" stroke="#a48d40" stroke-width="1"/>
        <path d="M-13-53H13" stroke="#273d43" stroke-width="7"/><rect x="-7" y="-57" width="14" height="7" rx="1" fill="#bdc9c2"/><path d="M2-55q-4-3-4 0t4 0l-2 3" fill="none" stroke="#5c726d" stroke-width=".8"/>
        <path d="M-6-47h3M3-47h3" stroke="#496276" stroke-width="2"/><path d="M-11-44l5 1M-11-41l5 1M6-43l5-1M6-40l5-1M-3-38h6" stroke="#806d54" stroke-width="1"/>
        <path d="M13-53l17 5-15 3" fill="#293f43"/>
      </g>
    </g>
    <g v-if="secretSpeech" :transform="`translate(${player.x + 22} ${player.y - 130})`" pointer-events="none">
      <g class="secret-speech"><path d="M9 0H245Q254 0 254 9V39Q254 48 245 48H17L0 64 4 44Q0 41 0 33V9Q0 0 9 0Z" fill="#e3eef7" stroke="#263f58" stroke-width="2"/><text x="127" y="30" text-anchor="middle" fill="#203f59" font-size="17" font-weight="700">I want to be Hokage!</text></g>
    </g>
    <text x="500" y="612" text-anchor="middle" font-family="inherit" font-size="11" letter-spacing="3" fill="#b5c7d8">THE HIDDEN LEAF VILLAGE</text>
  </svg>
</template>

<style scoped>
.village-art{display:block;width:100%;height:100%;touch-action:pan-y;cursor:crosshair}.village-building{cursor:pointer}.village-building:hover{filter:brightness(1.08)}.naruto-sprite{transform:scaleX(var(--facing))}.is-running{animation:village-run .16s infinite alternate}@keyframes village-run{to{translate:0 -3px}}@media(prefers-reduced-motion:reduce){.is-running{animation:none}}
.secret-speech{animation:secret-reveal .35s ease-out}@keyframes secret-reveal{from{opacity:0;translate:0 8px}to{opacity:1;translate:0 0}}@media(prefers-reduced-motion:reduce){.secret-speech{animation:none}}
</style>

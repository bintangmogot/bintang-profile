import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Original vector artwork, not screenshots. No client or operational data.
const covers = [
  ['dotlinetattu', 'DOTLINE', 'TATTU', 'TATTOO STUDIO / BOOKING', '#c88962', 'tattoo'],
  ['obsidian-tracker', 'OBSIDIAN', 'TRACKER', 'EQUIPMENT / MAINTENANCE', '#a6cead', 'tracker'],
  ['session-desk', 'SESSION', 'DESK', 'CLIENT VISITS / SESSION CREDITS', '#99c6e4', 'sessions'],
  ['front-office', 'FRONT', 'OFFICE', 'STUDIO KNOWLEDGE / WORKFLOWS', '#c6c1a0', 'checklist'],
  ['bajetku', 'BAJETKU', '', 'PERSONAL FINANCE / SAVINGS', '#adc8a3', 'finance'],
  ['bintang-codes', 'BINTANG', 'CODES', 'DEVELOPER / PORTFOLIO', '#53b7dd', 'code'],
  ['staros', 'STAROS', '', 'EMAIL / CODE / REVIEW', '#c1b4de', 'automation'],
];

const motifs = {
  tattoo: '<path d="M180 35C60 120 275 145 140 245S230 330 185 405M180 35C300 120 85 145 220 245S130 330 175 405"/><path d="M115 100L180 50 245 100 180 165ZM115 235L180 180 245 235 180 290ZM155 365L180 325 205 365 180 405Z"/>',
  tracker: '<rect x="40" y="70" width="285" height="280" rx="18"/><path d="M40 130H325M85 103H125"/><circle cx="118" cy="205" r="35"/><path d="M99 205L112 218 137 190M185 180H280M185 205H255M185 230H270M85 280H275M85 308H210"/>',
  sessions: '<rect x="45" y="95" width="265" height="185" rx="20"/><rect x="65" y="115" width="265" height="185" rx="20" fill="#172733"/><circle cx="125" cy="175" r="24"/><path d="M100 230Q125 200 150 230M190 160H285M190 190H265M190 235H245"/><circle cx="260" cy="325" r="48" fill="#172733"/><path d="M242 325L255 338 280 311"/>',
  checklist: '<rect x="70" y="65" width="225" height="300" rx="16"/><rect x="127" y="46" width="110" height="38" rx="10" fill="#172733"/><path d="M100 135L110 146 129 124M155 138H260M100 205L110 216 129 194M155 208H240"/><rect x="101" y="267" width="25" height="25" rx="4"/><path d="M155 278H260M155 302H220"/>',
  finance: '<circle cx="180" cy="195" r="112"/><path d="M180 83V195L279 247M180 195L83 251"/><path d="M80 358V320M130 358V295M180 358V310M230 358V268M280 358V248M65 370H305"/>',
  code: '<rect x="35" y="82" width="300" height="252" rx="16"/><path d="M35 127H335M64 105H67M84 105H87M104 105H107M124 185L82 224 124 263M246 185L288 224 246 263M204 168L164 280"/>',
  automation: '<rect x="28" y="163" width="82" height="66" rx="10"/><path d="M28 170L69 200 110 170M114 196H156M143 186L156 196 143 206"/><rect x="163" y="160" width="82" height="72" rx="10"/><path d="M183 185L173 196 183 207M224 185L234 196 224 207M210 179L199 214M249 196H291M278 186L291 196 278 206"/><circle cx="318" cy="196" r="24"/><path d="M307 196L315 204 329 188M204 236V299H69V235M197 286L204 299 211 286"/>',
  film: '<rect x="45" y="82" width="280" height="270" rx="8"/><path d="M45 122H325M45 312H325M90 82V122M135 82V122M180 82V122M225 82V122M270 82V122M90 312V352M135 312V352M180 312V352M225 312V352M270 312V352"/><path d="M155 167L230 216 155 265Z"/>',
  fitness: '<path d="M75 216H290M60 166V266M85 146V286M280 146V286M305 166V266M105 180H265M105 252H265M155 110L180 75 205 110M155 325L180 360 205 325"/>',
  restaurant: '<circle cx="185" cy="216" r="92"/><circle cx="185" cy="216" r="65"/><path d="M45 145V205Q45 220 60 220Q75 220 75 205V145M60 145V335M318 145Q292 165 292 225H318V335M130 84H245M155 365H215"/>',
  learning: '<path d="M38 135L182 72 326 135 182 198ZM82 162V249Q182 310 282 249V162M326 135V255M180 200V278"/><rect x="81" y="326" width="202" height="35" rx="8"/><path d="M122 326V361M246 326V361"/>',
  landscape: '<circle cx="265" cy="115" r="36"/><path d="M25 282L132 125 215 244 264 170 341 282ZM63 318Q123 285 182 318T304 318M96 353Q160 331 244 353"/>',
  coin: '<circle cx="182" cy="217" r="116"/><circle cx="182" cy="217" r="88"/><path d="M160 166L218 217 160 268ZM182 51V70M182 364V383M18 217H37M328 217H347"/>',
  gallery: '<rect x="30" y="120" width="190" height="218" rx="12"/><rect x="155" y="65" width="190" height="218" rx="12" fill="#172733"/><circle cx="285" cy="120" r="18"/><path d="M177 249L221 176 261 227 287 193 326 249M55 295L99 238 140 281"/>',
  zen: '<circle cx="183" cy="216" r="111"/><path d="M78 185Q148 282 281 175M91 251Q189 152 278 251M159 105Q116 214 208 323"/><path d="M39 193V239M16 206V226M326 193V239M349 206V226"/>',
};

const output = fileURLToPath(new URL('../public/images/projects/', import.meta.url));
mkdirSync(output, { recursive: true });
for (const [id, line1, line2, label, accent, motif] of covers) {
  const size = Math.max(line1.length, line2.length) > 10 ? 39 : 51;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500" role="img" aria-labelledby="title desc">
<title id="title">${line1} ${line2} — project cover</title><desc id="desc">Original illustrated cover for ${label.toLowerCase()}.</desc>
<rect width="800" height="500" fill="#111e2a"/>
<path d="M480 0H800V500H480Z" fill="#172733"/>
<path d="M40 58H760M40 443H760M480 58V443" stroke="#e7e8df" stroke-opacity=".15"/>
<circle cx="51" cy="38" r="5" fill="${accent}"/>
<text x="67" y="43" fill="#b6c3cb" font-family="Arial,sans-serif" font-size="12" letter-spacing="2.4">BINTANG CODES / SELECTED WORK</text>
<text x="42" y="${line2 ? 220 : 248}" fill="#f0eee6" font-family="Arial,sans-serif" font-size="${size}" font-weight="700" letter-spacing="-1.5">${line1}</text>
${line2 ? `<text x="42" y="278" fill="${accent}" font-family="Arial,sans-serif" font-size="${size}" font-weight="700" letter-spacing="-1.5">${line2}</text>` : ''}
<rect x="43" y="319" width="44" height="3" fill="${accent}"/>
<text x="43" y="355" fill="#b6c3cb" font-family="Arial,sans-serif" font-size="11" letter-spacing="1.3">${label}</text>
<g transform="translate(463 21) scale(.89)" fill="none" stroke="${accent}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">${motifs[motif]}</g>
<text x="42" y="471" fill="#80939f" font-family="Arial,sans-serif" font-size="11" letter-spacing="2">DESIGN &amp; DEVELOPMENT</text>
<path d="M720 463H754M747 456L754 463 747 470" stroke="${accent}" stroke-width="2" fill="none"/>
</svg>`;
  writeFileSync(`${output}${id}.svg`, svg);
}
console.log(`Created ${covers.length} original SVG project covers.`);

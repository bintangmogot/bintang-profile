<template>
  <section id="pricing" class="py-24 px-4 md:px-8 xl:px-20 bg-black/20">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-white flex items-center justify-center">
          <span class="text-primary font-mono text-lg mr-3">03.</span>
          {{ language === 'EN' ? "Pricing Plans" : "Paket Harga" }}
        </h2>
        <p class="text-slate-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
          {{ language === 'EN' ? "Simple, transparent pricing. Every plan includes a free consultation and revision rounds. More complex requirements? Let's talk!" : "Harga simpel dan transparan. Setiap paket mencakup konsultasi gratis dan revisi. Proyek lebih kompleks? Mari berdiskusi!" }}
        </p>
      </div>

      <!-- Cards: grid on desktop, horizontal scroll on mobile -->
      <div class="pricing-scroll">
        <div class="pricing-track">
          <div
            v-for="(plan, i) in plans"
            :key="i"
            class="pricing-card"
            :class="{ 'pricing-card--featured': plan.featured }"
          >
            <!-- Badge -->
            <div v-if="plan.featured" class="featured-badge">{{ language === 'EN' ? "Most Popular" : "Paling Populer" }}</div>

            <div class="flex flex-col h-full">
              <!-- Plan header -->
              <div class="mb-6">
                <p class="text-xs font-bold uppercase tracking-widest mb-2" :class="plan.featured ? 'text-primary' : 'text-slate-500'">
                  {{ plan.name }}
                </p>
                <div class="flex items-end gap-1">
                  <span class="text-4xl font-black text-white">{{ plan.price }}</span>
                  <span class="text-slate-500 text-sm mb-1" v-if="plan.priceNote">{{ plan.priceNote }}</span>
                </div>
                <p class="text-slate-400 text-sm mt-2">{{ plan.description }}</p>
              </div>

              <!-- Divider -->
              <div class="h-px bg-white/5 mb-6"></div>

              <!-- Features -->
              <ul class="space-y-3 flex-1">
                <li
                  v-for="feature in plan.features"
                  :key="feature.text"
                  class="flex items-start gap-3 text-sm"
                  :class="feature.included ? 'text-slate-300' : 'text-slate-600'"
                >
                  <svg
                    class="w-4 h-4 mt-0.5 shrink-0"
                    :class="feature.included ? 'text-emerald-400' : 'text-slate-700'"
                    fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"
                  >
                    <path v-if="feature.included" stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                    <path v-else stroke-linecap="round" stroke-linejoin="round" d="M18 12H6"/>
                  </svg>
                  {{ feature.text }}
                </li>
              </ul>

              <!-- CTA -->
              <a
                :href="buildWALink(plan)"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-8 w-full py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2"
                :class="plan.featured
                  ? 'bg-primary text-slate-900 hover:bg-sky-400 shadow-lg shadow-primary/20'
                  : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 2c-5.523 0-10 4.477-10 10 0 1.769.461 3.427 1.266 4.872l-1.343 4.91 5.027-1.32c1.404.779 3 1.218 4.697 1.218 5.523 0 10-4.477 10-10s-4.477-10-10-10zm4.789 13.48c-.262-.132-1.554-.766-1.794-.852-.239-.087-.414-.132-.589.132-.175.263-.679.852-.831 1.026-.152.175-.304.197-.565.066-.263-.131-1.11-.409-2.113-1.304-.781-.697-1.309-1.558-1.461-1.821-.153-.263-.017-.406.115-.536.119-.117.263-.306.395-.459.132-.153.175-.263.264-.438.087-.175.043-.328-.022-.459-.066-.131-.589-1.42-.807-1.946-.212-.511-.429-.441-.59-.449h-.503c-.175 0-.459.066-.7.328-.239.263-.918.897-.918 2.191s.941 2.541 1.072 2.716c.132.175 1.852 2.828 4.486 3.968.627.272 1.115.434 1.496.554.63.199 1.202.171 1.654.104.505-.075 1.554-.635 1.773-1.248.219-.613.219-1.139.153-1.248-.066-.109-.239-.175-.502-.307z"/>
                </svg>
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <p class="text-center text-slate-600 text-xs mt-8">
        {{ language === 'EN' ? "Prices are estimates. Final cost depends on project scope. Contact me for a custom quote." : "Harga di atas adalah estimasi. Total harga bergantung pada cakupan proyek. Hubungi aku untuk penawaran khusus." }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { language } from '../store.js';

const WA_NUMBER = '62895353811311';

// We use `computed` so that the plans update whenever the `language` state changes.
const plans = computed(() => [
  {
    name: 'Starter',
    // Change price format based on selected language
    price: language.value === 'EN' ? '$100' : 'Rp 1.5 Juta',
    priceNote: language.value === 'EN' ? '/ project' : '/ proyek',
    featured: false,
    description: language.value === 'EN' 
      ? 'A high-impact single-page presence. Perfect for landing pages, personal profiles, or simple company showcases.' 
      : 'Halaman tunggal yang berdampak besar. Cocok untuk landing page, profil pribadi, atau showcase perusahaan simpel.',
    // Also updating the WhatsApp message to match the selected pricing plan.
    message: language.value === 'EN'
      ? "Hi Bintang! I'm interested in your Starter plan for a high-impact landing page. Looking forward to discussing the project with you!"
      : 'Halo Bintang! Saya tertarik dengan paket Starter untuk membuat landing page. Mari diskusikan detail proyeknya!',
    features: [
      { text: language.value === 'EN' ? 'Up to 3 pages' : 'Maksimal 3 halaman', included: true },
      { text: language.value === 'EN' ? '1 rounds of revisions' : '1 kali revisi', included: true },
      { text: language.value === 'EN' ? 'Responsive design' : 'Desain Responsif', included: true },
      { text: language.value === 'EN' ? 'Contact form integration' : 'Integrasi Form Kontak', included: true },
      { text: language.value === 'EN' ? 'Multi-Language Support' : 'Dukungan Multi-Bahasa', included: false },
      { text: language.value === 'EN' ? 'Basic SEO setup' : 'Setup SEO Dasar', included: false },
      { text: language.value === 'EN' ? 'CMS / Admin panel' : 'CMS / Panel Admin', included: false },
      { text: language.value === 'EN' ? 'Priority support' : 'Prioritas Dukungan', included: false },
      { text: language.value === 'EN' ? 'Custom UI Design (Figma)' : 'Desain UI Custom (Figma)', included: false },
      { text: language.value === 'EN' ? 'E-commerce / Payment Integration' : 'Integrasi E-commerce / Pembayaran', included: false },
      { text: language.value === 'EN' ? 'Custom backend / API' : 'Custom Backend / API', included: false },
    ],
  },
  {
    name: 'Professional',
    price: language.value === 'EN' ? '$300' : 'Rp 5 Juta',
    priceNote: language.value === 'EN' ? '/ project' : '/ proyek',
    featured: true,
    description: language.value === 'EN' 
      ? 'Scalable multi-page websites and web apps. Ideal for growing businesses needing SEO and multi-language support.' 
      : 'Website multi-halaman dan web app yang skalabel. Ideal untuk bisnis berkembang yang butuh SEO dan multi-bahasa.',
    message: language.value === 'EN'
      ? "Hi Bintang! I'd like to inquire about the Professional plan for a scalable multi-page project. Can we discuss the details?"
      : 'Halo Bintang! Saya ingin bertanya tentang paket Professional untuk proyek multi-halaman. Bisa kita bahas lebih lanjut?',
    features: [
      { text: language.value === 'EN' ? 'Up to 10 pages' : 'Maksimal 10 halaman', included: true },
      { text: language.value === 'EN' ? '3 rounds of revisions' : '3 kali revisi', included: true },
      { text: language.value === 'EN' ? 'Responsive design' : 'Desain Responsif', included: true },
      { text: language.value === 'EN' ? 'Contact form integration' : 'Integrasi Form Kontak', included: true },
      { text: language.value === 'EN' ? 'Multi-Language Support' : 'Dukungan Multi-Bahasa', included: true },
      { text: language.value === 'EN' ? 'Basic SEO setup' : 'Setup SEO Dasar', included: true },
      { text: language.value === 'EN' ? 'CMS / Admin panel' : 'CMS / Panel Admin', included: false },
      { text: language.value === 'EN' ? 'Priority support' : 'Prioritas Dukungan', included: false },
      { text: language.value === 'EN' ? 'Custom UI Design (Figma)' : 'Desain UI Custom (Figma)', included: false },
      { text: language.value === 'EN' ? 'E-commerce / Payment Integration' : 'Integrasi E-commerce / Pembayaran', included: false },
      { text: language.value === 'EN' ? 'Custom backend / API' : 'Custom Backend / API', included: false },
    ],
  },
  {
    name: 'Business',
    price: language.value === 'EN' ? '$600' : 'Rp 9 Juta',
    priceNote: language.value === 'EN' ? '/ project' : '/ proyek',
    featured: false,
    description: language.value === 'EN' 
      ? 'Complete digital solutions with custom designs. Best for E-commerce, CMS-driven platforms, and corporate systems.' 
      : 'Solusi digital lengkap dengan desain kustom. Terbaik untuk E-commerce, platform berbasis CMS, dan sistem perusahaan.',
    message: language.value === 'EN'
      ? "Hi Bintang! I'm interested in the Business plan with custom Figma design and E-commerce/CMS features. Let's talk about the scope!"
      : 'Halo Bintang! Saya tertarik dengan paket Business yang mencakup desain Figma dan fitur E-commerce/CMS. Mari diskusikan cakupannya!',
    features: [
      { text: language.value === 'EN' ? 'Up to 20 pages' : 'Maksimal 20 halaman', included: true },
      { text: language.value === 'EN' ? '5 rounds of revisions' : '5 kali revisi', included: true },
      { text: language.value === 'EN' ? 'Responsive design' : 'Desain Responsif', included: true },
      { text: language.value === 'EN' ? 'Contact form integration' : 'Integrasi Form Kontak', included: true },
      { text: language.value === 'EN' ? 'Multi-Language Support' : 'Dukungan Multi-Bahasa', included: true },
      { text: language.value === 'EN' ? 'Advanced SEO setup' : 'Setup SEO Lanjutan', included: true },
      { text: language.value === 'EN' ? 'CMS / Admin panel' : 'CMS / Panel Admin', included: true },
      { text: language.value === 'EN' ? 'Priority support' : 'Prioritas Dukungan', included: true },
      { text: language.value === 'EN' ? 'Custom UI Design (Figma)' : 'Desain UI Custom (Figma)', included: true },
      { text: language.value === 'EN' ? 'E-commerce / Payment Integration' : 'Integrasi E-commerce / Pembayaran', included: true },
      { text: language.value === 'EN' ? 'Custom backend / API' : 'Custom Backend / API', included: false },
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    priceNote: null,
    featured: false,
    description: language.value === 'EN' 
      ? 'Tailor-made full-stack ecosystems. For high-performance POS, ERP, or complex custom internal tools.' 
      : 'Ekosistem full-stack kustom. Untuk POS, ERP berperforma tinggi, atau alat internal kustom yang kompleks.',
    message: language.value === 'EN' 
      ? "Hi Bintang! I have a complex full-stack project in mind and would like to discuss a custom Enterprise solution with you."
      : 'Halo Bintang! Saya memiliki proyek full-stack yang kompleks dan ingin mendiskusikan solusi Enterprise kustom dengan Anda.',
    features: [
      { text: language.value === 'EN' ? 'Unlimited pages' : 'Halaman tak terbatas', included: true },
      { text: language.value === 'EN' ? 'Unlimited revisions' : 'Revisi tak terbatas', included: true },
      { text: language.value === 'EN' ? 'Responsive design' : 'Desain Responsif', included: true },
      { text: language.value === 'EN' ? 'Contact form integration' : 'Integrasi Form Kontak', included: true },
      { text: language.value === 'EN' ? 'Multi-Language Support' : 'Dukungan Multi-Bahasa', included: true },
      { text: language.value === 'EN' ? 'Advanced SEO setup' : 'Setup SEO Lanjutan', included: true },
      { text: language.value === 'EN' ? 'CMS / Admin panel' : 'CMS / Panel Admin', included: true },
      { text: language.value === 'EN' ? 'Priority support' : 'Prioritas Dukungan', included: true },
      { text: language.value === 'EN' ? 'Custom UI Design (Figma)' : 'Desain UI Custom (Figma)', included: true },
      { text: language.value === 'EN' ? 'E-commerce / Payment Integration' : 'Integrasi E-commerce / Pembayaran', included: true },
      { text: language.value === 'EN' ? 'Custom backend / API' : 'Custom Backend / API', included: true },
    ],
  },
]);

const buildWALink = (plan) => {
  const encoded = encodeURIComponent(plan.message);
  return `https://wa.me/${WA_NUMBER}?text=${encoded}`;
};
</script>

<style scoped>
/* On mobile: horizontal scroll track */
.pricing-scroll {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding-bottom: 8px;
}
.pricing-scroll::-webkit-scrollbar { display: none; }

.pricing-track {
  display: flex;
  gap: 20px;
  width: max-content;
  padding: 40px 2px;
}

/* On desktop: normal grid */
@media (min-width: 768px) {
  .pricing-track {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    width: 100%;
  }
}

@media (min-width: 1280px) {
  .pricing-track {
    grid-template-columns: repeat(4, 1fr);
  }
}

.pricing-card {
  flex: none;
  width: 85vw;
  max-width: 340px;
  background: #1E293B;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s;
}

@media (min-width: 768px) {
  .pricing-card {
    width: auto;
    max-width: none;
  }
  .pricing-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
}

.pricing-card--featured {
  background: linear-gradient(135deg, #0f1f38 0%, #0d1f33 100%);
  border-color: rgba(14, 165, 233, 0.3);
  box-shadow: 0 0 0 1px rgba(14, 165, 233, 0.15), 0 20px 40px rgba(0, 0, 0, 0.3);
}

.featured-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, #0ea5e9, #38bdf8);
  color: #0f172a;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 4px 16px;
  border-radius: 9999px;
  white-space: nowrap;
}
</style>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import {
  Sparkles,
  Hotel,
  Landmark,
  HeartPulse,
  GraduationCap,
  Truck,
  ArrowRight,
} from "lucide-vue-next";
import AnimatedText from "./AnimatedText.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);
const projects = [
  {
    title: "AI Smart Sales Negotiation",
    slug: "ai-sales-negotiator",
    category: "AI & Intelligent Systems",
    icon: Sparkles,
    iconColor: "text-amber-400",
    desc: "Sistem AI percakapan yang dirancang untuk otomatisasi sales, negosiasi harga, dan reservasi pelanggan 24/7 di berbagai platform.",
  },
  {
    title: "SaaS Digital Invitation Maker",
    slug: "saas-digital-invitation",
    category: "SaaS Platform",
    icon: Sparkles,
    desc: "Platform pembuatan undangan digital mandiri dengan kustomisasi tema dinamis dan antarmuka interaktif.",
    iconColor: "text-purple-400",
  },
  {
    title: "Integrated CRM & Sales Hotel",
    slug: "integrated-crm-hotel",
    category: "Hospitality",
    icon: Hotel,
    desc: "Sistem CRM end-to-end untuk manajemen siklus penjualan, telemarketing, hingga dokumen operasional hotel (BEO).",
    iconColor: "text-cyan-400",
  },
  {
    title: "E-Government Asset Management",
    slug: "egov-asset-management",
    category: "Public Sector",
    icon: Landmark,
    desc: "Sistem pengelolaan, digitalisasi, dan hierarki persetujuan dokumen Rencana Kebutuhan Barang Milik Daerah (RKBMD).",
    iconColor: "text-blue-400",
  },
  {
    title: "Private Hospital Portal",
    slug: "private-hospital-portal",
    category: "Healthcare",
    icon: HeartPulse,
    desc: "Website komprehensif berfokus pada pengalaman pasien, mencakup pelacakan rawat inap dan janji temu online.",
    iconColor: "text-emerald-400",
  },
  {
    title: "Distribution Dashboard",
    slug: "distribution-dashboard",
    category: "Logistics & Industrial",
    icon: Truck,
    desc: "Sistem dashboard admin terpusat untuk memantau penjualan dan pelacakan pengiriman logistik secara real-time.",
    iconColor: "text-red-400",
  },
];

let ctx = null;

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.fromTo(
      sectionRef.value.querySelectorAll(".portfolio-card"),
      { opacity: 0, y: 24, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.value,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    );
  });
});

onBeforeUnmount(() => ctx?.revert());
</script>

<template>
  <section id="portfolio" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <AnimatedText
          tag="h2"
          type="words"
          class="text-nexavira-secondary font-bold uppercase tracking-[0.2em] text-xs mb-3"
        >
          Our Work & Experience
        </AnimatedText>
        <AnimatedText
          tag="h3"
          type="words"
          class="text-4xl font-extrabold text-nexavira-primary mb-4 tracking-tight"
        >
          Jejak Karya Tim Kami
        </AnimatedText>
        <AnimatedText
          tag="p"
          type="words"
          stagger="0.015"
          class="text-nexavira-slate max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Kumpulan pengalaman dan dedikasi tim kami dalam mentransformasi proses
          bisnis konvensional menjadi sistem digital yang terukur di berbagai
          sektor industri.
        </AnimatedText>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        ref="sectionRef"
      >
        <router-link
          v-for="(project, index) in projects"
          :key="index"
          :to="`/portfolio/${project.slug}`"
          class="portfolio-card group relative bg-nexavira-primary rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all block cursor-pointer h-[250px]"
        >
          <div
            class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-nexavira-primary to-[#0a3255] group-hover:scale-110 transition duration-700"
          >
            <component
              :is="project.icon"
              :size="64"
              :stroke-width="1.2"
              :class="[
                'filter drop-shadow-2xl transition-colors duration-500 opacity-80',
                project.iconColor,
              ]"
            />
          </div>

          <div
            class="absolute inset-0 bg-gradient-to-t from-nexavira-primary via-nexavira-primary/80 to-transparent p-6 flex flex-col justify-end"
          >
            <span
              class="text-nexavira-secondary text-[10px] font-bold uppercase tracking-widest mb-1"
              >{{ project.category }}</span
            >
            <h4 class="text-xl font-bold text-white mb-1 leading-tight">
              {{ project.title }}
            </h4>

            <div
              class="max-h-0 overflow-hidden group-hover:max-h-64 transition-all duration-500 ease-in-out"
            >
              <p
                class="text-white/70 text-sm leading-relaxed mb-3 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150"
              >
                {{ project.desc }}
              </p>
              <div
                class="inline-flex items-center gap-2 text-nexavira-secondary font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
              >
                Lihat Studi Kasus <ArrowRight :size="14" />
              </div>
            </div>
          </div>
        </router-link>
      </div>

      <div class="mt-16 text-center">
        <router-link
          to="/portfolio"
          class="inline-flex items-center gap-3 px-8 py-4 bg-white text-nexavira-primary border border-gray-200 rounded-full font-bold hover:bg-gray-50 hover:border-nexavira-secondary hover:text-nexavira-secondary transition-all shadow-sm"
        >
          Lihat Semua Portofolio Kami <ArrowRight :size="18" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portfolio-card {
  will-change: transform, opacity, filter;
}
</style>

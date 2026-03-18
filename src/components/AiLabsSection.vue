<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import {
  Bot,
  BrainCircuit,
  Sparkles,
  LayoutDashboard,
  Cpu,
  CheckCircle2,
  ArrowRight,
} from "lucide-vue-next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "./AnimatedText.vue";

gsap.registerPlugin(ScrollTrigger);

const leftRef = ref(null);
const rightRef = ref(null);
let ctx = null;

onMounted(() => {
  ctx = gsap.context(() => {
    // Left detail items stagger in one by one with fade-up + blur
    gsap.fromTo(
      leftRef.value.querySelectorAll(".ai-detail"),
      { opacity: 0, y: 24, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.15,
        duration: 1,
        delay: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftRef.value,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      },
    );

    // Right cards stagger in one by one with fade-up + blur
    gsap.fromTo(
      rightRef.value.querySelectorAll(".ai-card"),
      { opacity: 0, y: 32, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rightRef.value,
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
  <section
    class="py-24 bg-[#05111d] overflow-hidden relative border-y border-white/5"
  >
    <div
      class="absolute top-0 left-1/4 w-96 h-96 bg-nexavira-secondary/10 blur-[120px] rounded-full"
    ></div>
    <div
      class="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <!-- Left column -->
        <div ref="leftRef" class="lg:w-1/2">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Cpu class="text-nexavira-secondary" :size="16" />
            <span
              class="text-white text-[10px] font-bold uppercase tracking-widest"
              >Advanced AI Solutions</span
            >
          </div>

          <AnimatedText
            tag="h2"
            type="words"
            :duration="0.75"
            class="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
          >
            Berikan "Otak" Pada <br />
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-nexavira-secondary to-blue-400 text-6xl"
              >Bisnis Digital Anda.</span
            >
          </AnimatedText>

          <AnimatedText
            tag="p"
            delay="0.4"
            type="words"
            :duration="0.75"
            stagger="0.015"
            class="text-gray-400 text-lg leading-relaxed mb-8"
          >
            Kami melampaui website standar. Kami mengintegrasikan Agentic AI
            yang mampu bekerja mandiri dan RAG System yang memahami seluruh
            dokumen perusahaan Anda secara instan.
          </AnimatedText>

          <div class="space-y-4 mb-10">
            <div class="ai-detail flex items-center gap-4 text-white/80">
              <div
                class="w-12 h-12 bg-white/5 text-nexavira-secondary rounded-2xl flex items-center justify-center"
              >
                <CheckCircle2 class="text-nexavira-secondary" :size="20" />
              </div>
              <p class="font-medium text-sm md:text-base">
                Otomatisasi Operasional via Agentic Framework
              </p>
            </div>
            <div class="ai-detail flex items-center gap-4 text-white/80">
              <div
                class="w-12 h-12 bg-white/5 text-nexavira-secondary rounded-2xl flex items-center justify-center"
              >
                <CheckCircle2 class="text-nexavira-secondary" :size="20" />
              </div>
              <p class="font-medium text-sm md:text-base">
                Private Knowledge Base (RAG) Anti-Halusinasi
              </p>
            </div>
            <div class="ai-detail flex items-center gap-4 text-white/80">
              <div
                class="w-12 h-12 bg-white/5 text-nexavira-secondary rounded-2xl flex items-center justify-center"
              >
                <CheckCircle2 class="text-nexavira-secondary" :size="20" />
              </div>
              <p class="font-medium text-sm md:text-base">
                Integrasi Langsung ke API & Database Internal
              </p>
            </div>
          </div>

          <router-link
            to="/contact"
            class="inline-flex items-center gap-3 bg-nexavira-secondary text-white hover:bg-white hover:text-nexavira-primary px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-xl shadow-nexavira-secondary/20"
          >
            Mulai Proyek AI <ArrowRight :size="18" />
          </router-link>
        </div>

        <!-- Right grid -->
        <div
          ref="rightRef"
          class="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div
            class="ai-card bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group shadow-2xl"
          >
            <div
              class="w-12 h-12 bg-nexavira-secondary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
            >
              <Bot class="text-nexavira-secondary" :size="32" />
            </div>
            <h4 class="text-white font-bold text-lg mb-2">Agentic Bot</h4>
            <p class="text-gray-500 text-sm leading-relaxed">
              AI mandiri yang mampu mengeksekusi API, cek database, dan
              menyelesaikan tugas operasional.
            </p>
          </div>

          <div
            class="ai-card bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl md:mt-8 hover:bg-white/10 transition-colors group shadow-2xl"
          >
            <div
              class="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
            >
              <BrainCircuit class="text-blue-400" :size="32" />
            </div>
            <h4 class="text-white font-bold text-lg mb-2">Knowledge RAG</h4>
            <p class="text-gray-500 text-sm leading-relaxed">
              Pelatihan AI menggunakan data internal (PDF, Doc) untuk akurasi
              informasi perusahaan 100%.
            </p>
          </div>

          <div
            class="ai-card bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group shadow-2xl"
          >
            <div
              class="w-12 h-12 bg-amber-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
            >
              <Sparkles class="text-amber-400" :size="32" />
            </div>
            <h4 class="text-white font-bold text-lg mb-2">AI Sales Agent</h4>
            <p class="text-gray-500 text-sm leading-relaxed">
              Standby 24/7 di WhatsApp atau Web untuk negosiasi harga dan
              closing order secara otomatis.
            </p>
          </div>

          <div
            class="ai-card bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl md:mt-8 hover:bg-white/10 transition-colors group shadow-2xl"
          >
            <div
              class="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
            >
              <LayoutDashboard class="text-emerald-400" :size="32" />
            </div>
            <h4 class="text-white font-bold text-lg mb-2">AI Analytics</h4>
            <p class="text-gray-500 text-sm leading-relaxed">
              Gunakan Machine Learning untuk memprediksi tren bisnis, perilaku
              pembeli, dan stok barang.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ai-card,
.ai-detail {
  will-change: transform, opacity, filter;
}
</style>

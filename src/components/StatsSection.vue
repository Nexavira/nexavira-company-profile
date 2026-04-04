<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Zap, ShieldCheck, MousePointer2, Layout } from "lucide-vue-next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "./AnimatedText.vue";

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref(null);
let ctx = null;

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.from(".stat-card", {
      opacity: 0,
      y: 40,
      stagger: 0.14,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });
});

onBeforeUnmount(() => ctx?.revert());
</script>

<template>
  <section
    ref="sectionRef"
    class="py-20 bg-nexavira-primary relative overflow-hidden"
  >
    <Layout
      class="absolute -bottom-10 -left-10 text-white/5 w-64 h-64 -rotate-12"
    />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10"
      >
        <div class="stat-card py-6 md:py-0 px-4 group">
          <div
            class="w-16 h-16 bg-white/5 text-nexavira-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-nexavira-secondary/20 transition-all duration-300"
          >
            <Zap :size="32" :stroke-width="1.5" />
          </div>
          <AnimatedText
            tag="h3"
            type="words"
            :stagger="0.04"
            :duration="0.75"
            class="text-xl font-bold text-white mb-3 tracking-tight"
          >
            Scalable Architecture
          </AnimatedText>
          <AnimatedText
            tag="p"
            type="words"
            :stagger="0.04"
            :duration="0.75"
            class="text-white/60 text-sm leading-relaxed font-light italic"
          >
            Sistem dirancang untuk tumbuh seiring dengan perkembangan bisnis
            Anda.
          </AnimatedText>
        </div>

        <div class="stat-card py-6 md:py-0 px-4 group">
          <div
            class="w-16 h-16 bg-white/5 text-nexavira-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-nexavira-secondary/20 transition-all duration-300"
          >
            <ShieldCheck :size="32" :stroke-width="1.5" />
          </div>
          <AnimatedText
            tag="h3"
            type="words"
            :stagger="0.04"
            :duration="0.75"
            class="text-xl font-bold text-white mb-3 tracking-tight"
          >
            High Security Focus
          </AnimatedText>
          <AnimatedText
            tag="p"
            type="words"
            :stagger="0.04"
            :duration="0.75"
            class="text-white/60 text-sm leading-relaxed font-light italic"
          >
            Implementasi standar keamanan ketat untuk melindungi data sensitif
            klien.
          </AnimatedText>
        </div>

        <div class="stat-card py-6 md:py-0 px-4 group">
          <div
            class="w-16 h-16 bg-white/5 text-nexavira-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-nexavira-secondary/20 transition-all duration-300"
          >
            <MousePointer2 :size="32" :stroke-width="1.5" />
          </div>
          <AnimatedText
            tag="h3"
            type="words"
            :stagger="0.04"
            :duration="0.75"
            class="text-xl font-bold text-white mb-3 tracking-tight"
          >
            Seamless UI/UX
          </AnimatedText>
          <AnimatedText
            tag="p"
            type="words"
            :stagger="0.04"
            :duration="0.75"
            class="text-white/60 text-sm leading-relaxed font-light italic"
          >
            Antarmuka yang modern, responsif, dan mudah digunakan oleh siapapun.
          </AnimatedText>
        </div>
      </div>
    </div>
  </section>
</template>

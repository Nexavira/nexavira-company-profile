<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Search, PenTool, Code2, Rocket } from "lucide-vue-next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "./AnimatedText.vue";

gsap.registerPlugin(ScrollTrigger);

const dividerRef = ref(null);
const stepsRef = ref(null);
let ctx = null;

const steps = [
  {
    title: "Discovery",
    icon: Search,
    desc: "Konsultasi ide dan analisa mendalam terhadap kebutuhan bisnis Anda.",
  },
  {
    title: "Design",
    icon: PenTool,
    desc: "Perancangan arsitektur database dan UI/UX yang modern serta intuitif.",
  },
  {
    title: "Development",
    icon: Code2,
    desc: "Proses coding menggunakan standar industri dan clean-code.",
  },
  {
    title: "Launch",
    icon: Rocket,
    desc: "Deployment ke production server dan dukungan maintenance berkala.",
  },
];

onMounted(() => {
  ctx = gsap.context(() => {
    gsap.from(dividerRef.value, {
      scaleX: 0,
      transformOrigin: "left center",
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: dividerRef.value,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".workflow-step", {
      opacity: 0,
      y: 44,
      stagger: 0.14,
      duration: 0.75,
      ease: "power2.out",
      scrollTrigger: {
        trigger: stepsRef.value,
        start: "top 82%",
        toggleActions: "play none none none",
      },
    });
  });
});

onBeforeUnmount(() => ctx?.revert());
</script>

<template>
  <section class="py-24 bg-[#F7F9FA]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-20">
        <AnimatedText
          tag="h2"
          type="words"
          :stagger="0.06"
          :duration="0.75"
          class="text-nexavira-primary text-3xl md:text-4xl font-black tracking-tight"
        >
          Bagaimana Kami Membantu Anda?
        </AnimatedText>
        <div
          ref="dividerRef"
          class="h-1.5 w-20 bg-nexavira-secondary mx-auto mt-4 rounded-full"
        ></div>
      </div>

      <div class="relative">
        <div
          class="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-nexavira-secondary/20"
        ></div>

        <div ref="stepsRef" class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="workflow-step relative text-center group"
          >
            <div
              class="w-24 h-24 bg-white border-4 border-gray-50 rounded-full flex flex-col items-center justify-center mx-auto mb-8 relative z-10 shadow-xl group-hover:border-nexavira-secondary transition-all duration-500 group-hover:-translate-y-2"
            >
              <component
                :is="step.icon"
                :size="28"
                stroke-width="1.5"
                class="text-nexavira-secondary mb-1"
              />
            </div>

            <h5 class="text-xl font-bold text-nexavira-primary mb-3">
              {{ index + 1 }} . {{ step.title }}
            </h5>
            <p class="text-sm text-nexavira-slate leading-relaxed px-4">
              {{ step.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

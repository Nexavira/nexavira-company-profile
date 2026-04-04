<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Code2 } from "lucide-vue-next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedText from "./AnimatedText.vue";

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Laravel",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
  },
  {
    name: "Vue",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "Next",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "Postgre",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Javascript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Nginx",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  {
    name: "pnpm",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pnpm/pnpm-original.svg",
  },
  {
    name: "Midtrans",
    icon: "https://img.icons8.com/color/48/bank-card-back-side.png",
  },
];
</script>

<template>
  <section class="py-16 bg-[#0a3255] overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 mb-12 text-center">
      <div class="flex justify-center mb-4">
        <Code2 class="text-nexavira-secondary opacity-50" :size="32" />
      </div>
      <AnimatedText
        tag="h2"
        type="words"
        :duration="0.75"
        class="text-sm font-bold text-nexavira-secondary uppercase tracking-[0.2em] mb-3"
      >
        Our Tech Stack
      </AnimatedText>
      <AnimatedText
        tag="h2"
        delay="0.4"
        type="words"
        stagger="0.06"
        :duration="0.75"
        class="text-3xl font-extrabold text-white tracking-tight"
      >
        Teknologi Terstandarisasi Industri
      </AnimatedText>
    </div>

    <div
      class="relative flex overflow-hidden group border-y border-white/10 bg-nexavira-primary/20 py-10"
    >
      <div class="flex flex-nowrap shrink-0 items-center animate-scroll">
        <div
          v-for="(tech, index) in [...technologies, ...technologies]"
          :key="index"
          class="flex items-center gap-4 mx-10 group/item"
        >
          <div
            class="w-14 h-14 flex items-center justify-center grayscale opacity-50 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-500 transform group-hover/item:scale-110"
          >
            <img
              :src="tech.icon"
              :alt="tech.name"
              class="max-w-full max-h-full object-contain filter drop-shadow-lg"
            />
          </div>
          <span
            class="text-nexavira-slate font-black text-2xl tracking-tighter uppercase group-hover/item:text-nexavira-secondary transition-colors duration-300"
          >
            {{ tech.name }}
          </span>
        </div>
      </div>

      <div
        class="pointer-events-none absolute inset-y-0 left-0 w-48 bg-linear-to-r from-[#0a3255] via-[#0a3255]/50 to-transparent"
      ></div>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 w-48 bg-linear-to-l from-[#0a3255] via-[#0a3255]/50 to-transparent"
      ></div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
.animate-scroll {
  display: flex;
  width: max-content;
  animation: scroll 40s linear infinite;
}
.group:hover .animate-scroll {
  animation-play-state: paused;
}
</style>

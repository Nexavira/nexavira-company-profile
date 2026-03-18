<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Zap } from "lucide-vue-next";
import gsap from "gsap";
import AnimatedText from "./AnimatedText.vue";

const badgeRef = ref(null);
const buttonsRef = ref(null);
const imageRef = ref(null);
const floatTop = ref(null);
const floatBottom = ref(null);

let ctx = null;

onMounted(() => {
  ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      delay: 0.1,
    });

    tl.from(badgeRef.value, { opacity: 0, y: -12, duration: 0.5 })
      .from(
        Array.from(buttonsRef.value.children),
        {
          opacity: 0,
          y: 16,
          stagger: 0.1,
          duration: 0.6,
        },
        "-=0.45",
      )
      .from(
        imageRef.value,
        { opacity: 0, scale: 0.96, duration: 0.9, ease: "power3.out" },
        "-=0.7",
      )
      .from(
        [floatTop.value, floatBottom.value],
        {
          opacity: 0,
          y: 12,
          stagger: 0.15,
          duration: 0.5,
        },
        "-=0.45",
      );
  });
});

onBeforeUnmount(() => ctx?.revert());
</script>

<template>
  <section
    class="relative bg-white overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40"
  >
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none"
    >
      <div
        class="absolute top-0 left-0 w-96 h-96 bg-nexavira-secondary rounded-full filter blur-3xl"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left column -->
        <div class="text-center lg:text-left">
          <div
            ref="badgeRef"
            class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nexavira-secondary/10 border border-nexavira-secondary/20 text-nexavira-secondary text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-nexavira-secondary opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-2 w-2 bg-nexavira-secondary"
              ></span>
            </span>
            Tech Partner Terpercaya
          </div>

          <AnimatedText
            tag="h1"
            type="words"
            delay="0.5"
            :stagger="0.1"
            class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-nexavira-primary leading-tight"
          >
            Architecting the <br />
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-nexavira-primary to-nexavira-secondary"
            >
              Digital Future
            </span>
          </AnimatedText>

          <AnimatedText
            delay="1"
            blur="2"
            :stagger="0.02"
            type="words"
            class="mt-6 text-lg text-nexavira-slate max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            Nexavira System mentransformasi kompleksitas bisnis menjadi
            arsitektur digital yang elegan menggunakan teknologi modern.
          </AnimatedText>

          <div
            ref="buttonsRef"
            class="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
          >
            <router-link
              to="/contact"
              class="px-8 py-3.5 bg-nexavira-primary text-white font-medium rounded-lg hover:bg-nexavira-secondary transition shadow-lg shadow-nexavira-primary/30 text-center"
            >
              Konsultasi Proyek
            </router-link>
            <a
              href="#portfolio"
              class="px-8 py-3.5 bg-white text-nexavira-slate border border-nexavira-slate/30 font-medium rounded-lg hover:bg-gray-50 hover:text-nexavira-primary transition text-center"
            >
              Lihat Portofolio
            </a>
          </div>
        </div>

        <!-- Right column -->
        <div class="relative lg:block">
          <div
            ref="imageRef"
            class="relative z-10 w-full max-w-[500px] mx-auto aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-8 border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
              alt="Programming Illustration"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-nexavira-primary/60 to-transparent"
            ></div>
          </div>

          <div
            ref="floatTop"
            class="absolute -top-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-bounce-slow hidden sm:block"
          >
            <div class="flex items-center gap-3">
              <div
                class="p-2 bg-nexavira-secondary/10 rounded-lg text-nexavira-secondary flex items-center justify-center"
              >
                <Zap :size="24" stroke-width="2" />
              </div>
              <div>
                <p class="text-[10px] text-nexavira-slate font-bold uppercase">
                  Performance
                </p>
                <p class="text-sm font-bold text-nexavira-primary">
                  99.9% Optimized
                </p>
              </div>
            </div>
          </div>

          <div
            ref="floatBottom"
            class="absolute -bottom-10 -right-6 z-20 bg-nexavira-primary p-5 rounded-2xl shadow-2xl border border-white/10 hidden sm:block"
          >
            <div class="flex gap-2 mb-3">
              <div class="w-2 h-2 rounded-full bg-red-500"></div>
              <div class="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div class="w-2 h-2 rounded-full bg-nexavira-secondary"></div>
            </div>
            <code class="text-xs text-blue-100 font-mono">
              <span class="text-nexavira-secondary">const</span> nexavira = {<br />
              &nbsp;&nbsp;focus:
              <span class="text-yellow-200">'Scalability'</span>,<br />
              &nbsp;&nbsp;tech:
              <span class="text-yellow-200">'Next/Vue/Laravel'</span><br />
              };
            </code>
          </div>

          <div
            class="absolute -z-10 -top-20 -right-20 w-80 h-80 bg-nexavira-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes bounce-slow {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
.animate-bounce-slow {
  animation: bounce-slow 4s ease-in-out infinite;
}
</style>

<script setup>
  import { Zap, ShieldCheck, MousePointer2, Layout } from 'lucide-vue-next';
</script>

<template>
  <section class="py-20 bg-nexavira-primary relative overflow-hidden">
    <Layout class="absolute -bottom-10 -left-10 text-white/5 w-64 h-64 -rotate-12" />

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
        
        <div class="py-6 md:py-0 px-4 group" data-aos="fade-up">
          <div class="w-16 h-16 bg-white/5 text-nexavira-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-nexavira-secondary/20 transition-all duration-300">
            <Zap :size="32" :stroke-width="1.5" />
          </div>
          <h3 class="text-xl font-bold text-white mb-3 tracking-tight">Scalable Architecture</h3>
          <p class="text-white/60 text-sm leading-relaxed font-light italic">
            Sistem dirancang untuk tumbuh seiring dengan perkembangan bisnis Anda.
          </p>
        </div>

        <div class="py-6 md:py-0 px-4 group" data-aos="fade-up" data-aos-delay="100">
          <div class="w-16 h-16 bg-white/5 text-nexavira-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-nexavira-secondary/20 transition-all duration-300">
            <ShieldCheck :size="32" :stroke-width="1.5" />
          </div>
          <h3 class="text-xl font-bold text-white mb-3 tracking-tight">High Security Focus</h3>
          <p class="text-white/60 text-sm leading-relaxed font-light italic">
            Implementasi standar keamanan ketat untuk melindungi data sensitif klien.
          </p>
        </div>

        <div class="py-6 md:py-0 px-4 group" data-aos="fade-up" data-aos-delay="200">
          <div class="w-16 h-16 bg-white/5 text-nexavira-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-nexavira-secondary/20 transition-all duration-300">
            <MousePointer2 :size="32" :stroke-width="1.5" />
          </div>
          <h3 class="text-xl font-bold text-white mb-3 tracking-tight">Seamless UI/UX</h3>
          <p class="text-white/60 text-sm leading-relaxed font-light italic">
            Antarmuka yang modern, responsif, dan mudah digunakan oleh siapapun.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>
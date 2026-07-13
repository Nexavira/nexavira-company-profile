<script setup>
import HeroSection from "@/components/HeroSection.vue";
import PortfolioSection from "@/components/PortfolioSection.vue";
import StatsSection from "@/components/StatsSection.vue";
import TechStackSection from "@/components/TechStackSection.vue";
import WorkflowSection from "@/components/WorkflowSection.vue";
import AiLabsSection from "@/components/AiLabsSection.vue";
import { useHead } from '@unhead/vue';

useHead({
  title: 'Nexavira - Software House & IT Consultant',
  meta: [
    { name: 'description', content: 'Nexavira adalah Software House & IT Consultant profesional yang menyediakan jasa pembuatan website, aplikasi mobile, dan solusi AI terbaik untuk bisnis Anda.' },
    { name: 'keywords', content: 'software house, it consultant, jasa pembuatan website, aplikasi mobile, ai labs, nexavira, tech company indonesia' },
    { property: 'og:title', content: 'Nexavira - Software House & IT Consultant' },
    { property: 'og:description', content: 'Nexavira adalah Software House & IT Consultant profesional yang menyediakan jasa pembuatan website, aplikasi mobile, dan solusi AI terbaik untuk bisnis Anda.' },
    { property: 'og:image', content: 'https://home.nexavira.my.id/logo.png' },
    { property: 'og:url', content: 'https://home.nexavira.my.id' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
})
</script>

<template>
  <main>
    <HeroSection />
    <TechStackSection />
    <StatsSection />
    <AiLabsSection />
    <PortfolioSection />
    <WorkflowSection />
  </main>
</template>

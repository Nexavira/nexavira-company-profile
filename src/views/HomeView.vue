<script setup>
  import HeroSection from '@/components/HeroSection.vue'
  import PortfolioSection from '@/components/PortfolioSection.vue';
  import StatsSection from '@/components/StatsSection.vue';
  import TechStackSection from '@/components/TechStackSection.vue'
  import WorkflowSection from '@/components/WorkflowSection.vue';
  import AiLabsSection from '@/components/AiLabsSection.vue';
</script>

<template>
  <main>
    <div data-aos="fade-up">
      <HeroSection />
    </div>

    <div data-aos="fade-up" data-aos-delay="100">
      <TechStackSection />
    </div>

    <div data-aos="zoom-in" data-aos-delay="200">
      <StatsSection />
    </div>

    <div data-aos="fade-up">
      <AiLabsSection />
    </div>

    <div data-aos="fade-up" data-aos-delay="100">
      <PortfolioSection />
    </div>

    <div data-aos="fade-up">
      <WorkflowSection />
    </div>
  </main>
</template>
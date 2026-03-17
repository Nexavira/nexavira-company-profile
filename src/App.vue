<script setup>
  import Navbar from './components/Navbar.vue'
  import SiteFooter from './components/Footer.vue'
  import WhatsAppButton from './components/WhatsAppButton.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-blue-600 selection:text-white">
    <Navbar /> <router-view />

    <!-- <main>
    </main> -->
    <WhatsAppButton />
    <SiteFooter id="footer" />
  </div>
</template>
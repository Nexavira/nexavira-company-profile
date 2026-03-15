<script setup>
  import Navbar from './components/Navbar.vue'
  import SiteFooter from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-blue-600 selection:text-white">
    <Navbar /> <router-view />

    <!-- <main>
    </main> -->

    <SiteFooter id="footer" />
  </div>
</template>
<script setup>
import { Phone } from 'lucide-vue-next'

const phoneNumber = '6285659445565' 
const message = 'Halo Nexavira System, saya ingin berkonsultasi mengenai proyek sistem web.'

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
</script>

<template>
  <a 
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300 group"
    aria-label="Hubungi kami via WhatsApp"
  >
    <span class="absolute right-16 bg-gray-800 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      Konsultasi Gratis
    </span>
    
    <Phone class="w-7 h-7" />
    
    <span class="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping -z-10"></span>
  </a>
</template>

<style scoped>
.animate-ping {
  animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes ping {
  75%, 100% {
    transform: scale(1.5);
    opacity: 0;
  }
}
</style>
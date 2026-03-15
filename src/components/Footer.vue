<script setup>
  import { Icon } from '@iconify/vue';
  import { 
    MapPin, 
    Mail, 
    Phone
  } from 'lucide-vue-next';

  const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-nexavira-primary text-white pt-20 pb-10 border-t border-white/5">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        
        <div class="md:col-span-2">
          <router-link to="/" class="flex items-center gap-2">
            <span class="text-3xl font-black tracking-tighter text-white">
              NEXAVIRA<span class="text-nexavira-secondary font-light">SYSTEM</span>
            </span>
          </router-link>
          <p class="mt-6 max-w-sm leading-relaxed text-white/60 text-base antialiased">
            Memberikan solusi teknologi yang inovatif dan terukur melalui analisis mendalam untuk membantu bisnis Anda berkembang di era digital.
          </p>
        </div>

        <div>
          <h3 class="text-xs font-bold text-nexavira-secondary tracking-[0.2em] uppercase mb-6">Tautan Cepat</h3>
          <ul class="space-y-4 text-sm">
            <li v-for="link in ['About Us', 'Services', 'Our Teams', 'Contact']" :key="link">
              <router-link 
                :to="'/' + link.toLowerCase().replace(' ', '-')" 
                class="text-white/70 hover:text-nexavira -secondary transition-colors flex items-center group"
              >
                <span class="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-nexavira -secondary">—</span>
                {{ link }}
              </router-link>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xs font-bold text-nexavira -secondary tracking-[0.2em] uppercase mb-6">Hubungi Kami</h3>
          <ul class="space-y-5 text-sm">
            <li class="flex items-start group">
              <div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mr-3 group-hover:bg-nexavira -secondary/20 transition-colors">
                <MapPin :size="16" class="text-nexavira -secondary" />
              </div>
              <span class="text-white/70 mt-1">Bandung, Indonesia</span>
            </li>
            <li class="flex items-center group">
              <div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mr-3 group-hover:bg-nexavira -secondary/20 transition-colors">
                <Mail :size="16" class="text-nexavira -secondary" />
              </div>
              <a href="mailto:nexavira system@gmail.com" class="text-white/70 hover:text-white transition-colors">nexavira@gmail.com</a>
            </li>
            <li class="flex items-center group">
              <div class="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mr-3 group-hover:bg-nexavira -secondary/20 transition-colors">
                <Phone :size="16" class="text-nexavira -secondary" />
              </div>
              <span class="text-white/70">+62 856 5944 5565</span>
            </li>
          </ul>
        </div>

      </div>

      <div class="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest font-bold">
        <p class="text-white/30 text-center md:text-left">
          &copy; {{ currentYear }} <span class="text-white/50">Nexavira System</span>. All Rights Reserved.
        </p>
        
        <div class="flex space-x-6 mt-6 md:mt-0">
          <a href="#" class="text-white/30 hover:text-nexavira -secondary transition-colors">
            <Icon icon="simple-icons:linkedin" width="18" />
          </a>
          <a href="#" class="text-white/30 hover:text-nexavira -secondary transition-colors">
            <Icon icon="simple-icons:instagram" width="18" />
          </a>
          <a href="#" class="text-white/30 hover:text-nexavira -secondary transition-colors">
            <Icon icon="simple-icons:github" width="18" />
          </a>
        </div>
      </div>

    </div>
  </footer>
</template>
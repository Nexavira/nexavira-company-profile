<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { Menu, X, Languages } from 'lucide-vue-next'

  const isMenuOpen = ref(false)
  const isScrolled = ref(false)
  const route = useRoute()

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  const closeMenu = () => {
    isMenuOpen.value = false
  }

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 20
  }

  onMounted(() => window.addEventListener('scroll', handleScroll))
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav 
    class="sticky top-0 z-50 transition-all duration-500"
    :class="[
      isScrolled ? 'bg-white/80 shadow-lg py-2 backdrop-blur-lg' : 'bg-white py-4',
      'border-b border-gray-100'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-14 items-center">
        
        <div class="flex-shrink-0 flex items-center">
          <router-link to="/" @click="closeMenu">
            <img src="/nexavira.png" alt="nexaviraSystems Logo" class="h-30 w-auto object-contain">
          </router-link>
        </div>

        <div class="hidden md:flex space-x-6 lg:space-x-8 items-center">
          <router-link 
            v-for="link in [
              { name: 'Home', path: '/' },
              { name: 'Portfolio', path: '/portfolio' },
              { name: 'About Us', path: '/about-us' }
            ]" 
            :key="link.path"
            :to="link.path"
            class="transition-all duration-300 font-bold text-xs uppercase tracking-widest relative group"
            :class="route.path === link.path ? 'text-nexavira-primary' : 'text-nexavira-slate hover:text-nexavira-secondary'"
          >
            {{ link.name }}
            <span 
              class="absolute -bottom-1 left-0 w-0 h-0.5 bg-nexavira-secondary transition-all duration-300 group-hover:w-full"
              :class="route.path === link.path ? 'w-full' : ''"
            ></span>
          </router-link>
          
          <router-link 
            to="/contact" 
            class="px-6 py-2 bg-nexavira-primary text-white rounded-full text-xs font-black uppercase tracking-widest hover:bg-nexavira-secondary transition-all shadow-lg shadow-nexavira-primary/20 transform hover:-translate-y-0.5"
          >
            Contact
          </router-link>

          <div class="h-4 w-px bg-gray-200 mx-2"></div>

          <button class="flex items-center gap-1.5 text-[10px] font-black text-nexavira-slate hover:text-nexavira-secondary transition uppercase tracking-tighter">
            <Languages :size="14" />
            ID <span class="text-gray-300">/</span> EN
          </button>
        </div>

        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="text-nexavira-primary p-2 focus:outline-none">
            <Menu v-if="!isMenuOpen" :size="28" stroke-width="1.5" />
            <X v-else :size="28" stroke-width="1.5" class="text-nexavira-secondary" />
          </button>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-10"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-10"
    >
      <div v-show="isMenuOpen" class="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-2xl overflow-hidden">
        <div class="px-6 pt-4 pb-10 space-y-2">
          <router-link 
            v-for="link in [
              { name: 'Home', path: '/' },
              { name: 'Portfolio', path: '/portfolio' },
              { name: 'About Us', path: '/about-us' }
            ]"
            :key="link.path"
            :to="link.path"
            @click="closeMenu"
            class="block px-4 py-4 text-sm font-black uppercase tracking-[0.2em] rounded-2xl transition-all"
            :class="route.path === link.path ? 'bg-nexavira-primary text-white shadow-lg shadow-nexavira-primary/20' : 'text-nexavira-slate hover:bg-gray-50 hover:text-nexavira-secondary'"
          >
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </transition>
  </nav>
</template>
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

// Lenis smooth scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)

// Refresh ScrollTrigger positions after route changes
router.afterEach(() => {
  setTimeout(() => ScrollTrigger.refresh(), 100)
})

createApp(App).use(router).mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { createPinia } from 'pinia'
import router from './router'
import vuetify from './plugins/vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import Vue3TouchEvents from 'vue3-touch-events'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ObserveVisibility } from 'vue-observe-visibility'
import VuePhotoAlbum from 'vue-photo-album'
import '@flaticon/flaticon-uicons/css/all/all.css'

import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

/* -----------------------------
   App bootstrap
------------------------------ */
const app = createApp(App)

app.config.globalProperties.$gsap = gsap

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(Vue3TouchEvents)
app.use(VuePhotoAlbum)
app.directive('observe-visibility', ObserveVisibility)

app.mount('#app')

/* -----------------------------
   GSAP + ScrollTrigger
------------------------------ */
gsap.registerPlugin(ScrollTrigger)

/* -----------------------------
   Lenis smooth scroll (stable)
------------------------------ */
const lenis = new Lenis({
  duration: 1,
  easing: (t) => t * (2 - t),
  smooth: true,
  smoothTouch: false, // ✅ critical for stability
  wheelMultiplier: 1,
})

/* Sync Lenis with GSAP */
lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000) // GSAP time is in seconds
})

gsap.ticker.lagSmoothing(0)

/* Make Lenis accessible if needed */
app.config.globalProperties.$lenis = lenis

/* -----------------------------
   AOS (not ideal with Lenis, but stabilized)
------------------------------ */
AOS.init({
  once: false,
  duration: 500,
  easing: 'ease-in-out',
})

/* Refresh everything after route change */
router.afterEach(() => {
  requestAnimationFrame(() => {
    lenis.resize()
    ScrollTrigger.refresh()
    AOS.refreshHard()
  })
})

import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { createPinia } from 'pinia'
import router from './router'
import vuetify from './plugins/vuetify'
import { VProgressCircular } from 'vuetify/components'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import Vue3TouchEvents from "vue3-touch-events"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ObserveVisibility } from 'vue-observe-visibility'
import VuePhotoAlbum from 'vue-photo-album'
import "@flaticon/flaticon-uicons/css/all/all.css";
import { gsap } from 'gsap'
import Lenis from '@studio-freight/lenis'
const app = createApp(App)
app.config.globalProperties.$gsap = gsap

app.use(createPinia())

app.use(router)
app.use(vuetify) // ✅ Vuetify properly applied
app.use(Vue3TouchEvents)
app.use(VuePhotoAlbum)
app.directive('observe-visibility', ObserveVisibility)
app.mount('#app')

// Lenis smooth scroll
const lenis = new Lenis({
    duration: 1.2,            // time to “catch up” to target
    easing: (t) => t * (2 - t), // ease-out (slows gradually)
    smooth: true,
    direction: 'vertical',
    gestureDirection: 'vertical',
    infinite: false,
    wheelMultiplier: 1,       // adjust scroll speed if needed
    smoothTouch: true,        // enable smoothing on touch devices
})



function raf(time) {
    lenis.raf(time)   // update Lenis scroll
    requestAnimationFrame(raf)
}

// start the loop
requestAnimationFrame(raf)

// Initialize AOS after mounting
AOS.init({
    once: false, // Animation will fire every time element scrolls into view
    duration: 500, // Duration in milliseconds
    easing: 'ease-in-out',
})

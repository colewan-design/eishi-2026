<style>
.desktop-hidden {
  display: none !important;
  opacity: 0;
  transform: translateY(-20px);
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.mobile-menu-sheet {
  transition: all 0.3s ease-in-out;
}

.v-app-bar {
  transition: all 0.3s ease;
}

.v-btn {
  border-radius: 0 !important;
}

.v-app-bar .full-height-btn {
  height: 100%;
  min-height: 0;
}

.full-height-btn {
  transition:
    background-color 0.5s ease,
    color 0.3s ease;
}

.full-height-btn:hover {
  background-color: white !important;
  color: black !important;
  /* change text color if needed */
}

.text-carousel {
  position: relative;
  overflow: hidden;
}

.text-carousel span {
  display: block;
  transition: transform 0.8s ease;
  line-height: 80px;
  /* match button height */
  text-align: center;
}

.text-carousel .text-back {
  position: absolute;
  top: 100%;
  /* hidden below */
  left: 0;
  width: 100%;
}

.text-carousel:hover .text-front {
  transform: translateY(-100%);
}

.text-carousel:hover .text-back {
  transform: translateY(-100%);
}

.btn-fixed-width {
  width: 150px;
  /* set desired width */
  min-width: 150px;
  /* ensure it doesn't shrink */
}
</style>
<template>
  <v-app-bar app flat elevation="0" height="auto" style="background-color: transparent !important">
    <v-container class="pa-0">
      <!-- Desktop Nav -->
      <v-row ref="desktopNav" class="d-none d-md-flex align-center" no-gutters :class="{ 'desktop-hidden': scrolled }">
        <!-- Logo (left) -->
        <v-col cols="auto" class="d-flex align-center">
          <router-link to="/" class="ma-0 pa-0">
            <v-img :width="200" aspect-ratio="16/9" cover src="/eishi/eishi_logo-removebg-preview.webp" />
          </router-link>
        </v-col>

        <!-- Buttons (centered) -->
        <v-col class="d-flex justify-center">
          <div class="d-flex">
            <v-btn to="/" height="80" class="ma-2 px-6 full-height-btn text-capitalize text-carousel btn-fixed-width"
              :class="scrolled || isNotHome ? 'text-black' : 'text-white'">
              <span class="text-front">{{ t.home }}</span>
              <span class="text-back">{{ t.home }}</span>
            </v-btn>

            <v-btn to="/about" height="80"
              class="ma-2 px-6 full-height-btn text-capitalize text-carousel btn-fixed-width"
              :class="scrolled || isNotHome ? 'text-black' : 'text-white'">
              <span class="text-front">{{ t.about }}</span>
              <span class="text-back">{{ t.about }}</span>
            </v-btn>

            <v-btn to="/contact" height="80"
              class="ma-2 px-6 full-height-btn text-capitalize text-carousel btn-fixed-width"
              :class="scrolled || isNotHome ? 'text-black' : 'text-white'">
              <span class="text-front">{{ t.contact }}</span>
              <span class="text-back">{{ t.contact }}</span>
            </v-btn>

            <v-btn to="/property" height="80"
              class="ma-2 px-6 full-height-btn text-capitalize text-carousel btn-fixed-width"
              :class="scrolled || isNotHome ? 'text-black' : 'text-white'">
              <span class="text-front">{{ t.ourBusiness }}</span>
              <span class="text-back">{{ t.ourBusiness }}</span>
            </v-btn>

            <!-- Language Menu -->
            <v-menu>
              <template #activator="{ props }">
                <v-btn v-bind="props" height="80" class="ma-2 px-6 full-height-btn"
                  :class="scrolled ? 'bg-black text-white' : 'bg-white text-black'">
                  <v-icon>mdi-web-box</v-icon>
                  <span class="text-capitalize">
                    {{ selectedLanguage === 'Japanese' ? '日本語' : 'English' }}
                  </span>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="changeLanguage('English')">
                  <v-list-item-title>English</v-list-item-title>
                </v-list-item>
                <v-list-item @click="changeLanguage('Japanese')">
                  <v-list-item-title>日本語</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-col>
      </v-row>

      <!-- Mobile Nav -->
      <v-row class="d-flex d-md-none justify-space-between">
        <v-col cols="auto">
          <router-link to="/" class="">
            <v-img :width="120" aspect-ratio="16/9" cover src="/eishi/eishi_logo-removebg-preview.webp" />
          </router-link>
        </v-col>
        <v-col cols="auto">
          <v-btn icon @click="menuOpen = !menuOpen">
            <v-icon>{{ menuOpen ? 'mdi-close' : 'mdi-menu' }}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- Mobile Menu Drawer -->
    <v-sheet v-if="menuOpen" class="mobile-menu-sheet" height="100vh" width="100%"
      style="position: fixed; top: 0; left: 0; background-color: rgba(0,0,0,0.95); z-index: 9999; overflow-y: auto;">
      <v-container class="pt-12">
        <v-row class="d-flex flex-column align-center">
          <!-- Menu Items -->
          <v-btn v-for="(item, i) in mobileMenuItems" :key="i" block text class="my-4 text-white"
            @click="goToRoute(item.route)">
            {{ item.label }}
          </v-btn>

          <!-- Language Switch -->
          <v-menu>
            <template #activator="{ props }">
              <v-btn v-bind="props" block outlined class="mt-6 text-white">
                {{ selectedLanguage === 'Japanese' ? '日本語' : 'English' }}
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="changeLanguage('English')">
                <v-list-item-title>English</v-list-item-title>
              </v-list-item>
              <v-list-item @click="changeLanguage('Japanese')">
                <v-list-item-title>日本語</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-row>
      </v-container>
    </v-sheet>
  </v-app-bar>


</template>

<script>
import { useLanguageStore } from '@/stores/languageStore'
import { gsap } from 'gsap'
import { mapState, mapActions } from 'pinia'
import { RouterLink } from 'vue-router'

export default {
  name: 'Navigation',
  components: { RouterLink },
  data() {
    return {

      menuOpen: false,
      scrolled: false,
    }
  },
  computed: {
    mobileMenuItems() {
      return [
        { label: this.t.home, route: '/' },
        { label: this.t.about, route: '/about' },
        { label: this.t.contact, route: '/contact' },
        { label: this.t.ourBusiness, route: '/property' },
      ]
    },
    isNotHome() {
      return this.$route.name !== 'home'
    },
    ...mapState(useLanguageStore, ['selectedLanguage', 't']),
  },
  mounted() {

    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    goToRoute(route) {
      this.$router.push(route)
      this.menuOpen = false // close menu after click
    },
    handleScroll() {
      this.scrolled = window.scrollY > window.innerHeight / 2
    },
    animateNav() {
      if (this.scrolled) {
        gsap.to(this.$refs.desktopNav, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: 'power2.out',
          onComplete: () => {
            this.$refs.desktopNav.style.display = 'none' // remove from layout
          },
        })
      } else {
        this.$refs.desktopNav.style.display = 'flex' // restore layout
        gsap.to(this.$refs.desktopNav, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
        })
      }
    },


    ...mapActions(useLanguageStore, ['changeLanguage']),
  },
}
</script>

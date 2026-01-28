<style>
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

.mobile-menu {
  position: fixed;
  top: 62px;
  /* start below the mobile navbar */
  left: 0;
  width: 100%;
  height: calc(100vh - 64px);
  /* fill remaining screen */
  background-color: white;
  z-index: 2000;
  overflow-y: auto;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.slide-down-enter-to,
.slide-down-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.mobile-menu .v-list-item:not(:last-child) {
  border-bottom: 0.5px solid #e0e0e0;
  /* thinner border */
  padding-top: 16px;
  /* increase spacing above text */
  padding-bottom: 16px;
  /* increase spacing below text */
}

.mobile-menu .v-list-item-title {
  line-height: 1.8rem;
}

.blend-text {
  color: white;
  mix-blend-mode: difference;
}
</style>
<template>
  <v-app-bar app flat elevation="0" height="auto" style="background-color: transparent !important">
    <v-container class="pa-0">
      <v-row align="center" justify="space-between" no-gutters>
        <!-- Desktop -->
        <v-col cols="12" class="d-none d-md-flex align-center justify-space-between">
          <!-- Full nav (desktop) -->
          <div ref="desktopNav" class="d-flex align-center">
            <!-- Logo always visible -->
            <div class="d-flex align-center">
              <router-link to="/" class="ma-0 pa-0">
                <v-img
                  :width="200"
                  aspect-ratio="16/9"
                  cover
                  src="/eishi/eishi_logo-removebg-preview.webp"
                />
              </router-link>
            </div>
            <v-btn
              to="/"
              height="80"
              width="200"
              class="ma-0 pa-0 full-height-btn text-capitalize text-carousel btn-fixed-width"
              :class="scrolled || isNotHome ? 'text-black' : 'text-white'"
            >
              <span class="text-front">{{ t.home }}</span>
              <span class="text-back">{{ t.home }}</span>
            </v-btn>

            <v-btn
              to="/about"
              width="200"
              height="80"
              class="ma-0 pa-0 full-height-btn text-capitalize text-carousel btn-fixed-width"
              :class="scrolled || isNotHome ? 'text-black' : 'text-white'"
            >
              <span class="text-front">{{ t.about }}</span>
              <span class="text-back">{{ t.about }}</span>
            </v-btn>

            <v-btn
              to="/contact"
              width="300"
              height="80"
              class="ma-0 pa-0 full-height-btn text-capitalize text-carousel btn-fixed-width"
              variant="plain"
              :class="scrolled || isNotHome ? 'text-black' : 'text-white'"
            >
              <span class="text-front">{{ t.contact }}</span>
              <span class="text-back">{{ t.contact }}</span>
            </v-btn>

            <v-btn
              to="/property"
              width="300"
              height="80"
              class="ma-0 pa-0 full-height-btn text-capitalize text-carousel btn-fixed-width"
              variant="plain"
              :class="scrolled || isNotHome ? 'text-black' : 'text-white'"
            >
              <span class="text-front">{{ t.ourBusiness }}</span>
              <span class="text-back">{{ t.ourBusiness }}</span>
            </v-btn>

            <!-- Language Menu -->
            <v-menu>
              <template #activator="{ props }">
                <v-btn
                  v-bind="props"
                  height="80"
                  class="full-height-btn"
                  width="190"
                  :class="scrolled ? 'bg-black text-white' : 'bg-white text-black'"
                >
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

        <!-- Mobile -->
        <v-col cols="12" class="d-flex d-md-none justify-space-between align-center">
          <router-link to="/" class="ma-2">
            <v-img
              :width="120"
              aspect-ratio="16/9"
              cover
              src="/eishi/eishi_logo-removebg-preview.webp"
            />
          </router-link>

          <v-icon color="blue-grey-darken-2" class="pa-8" @click="menuOpen = !menuOpen">
            {{ menuOpen ? 'fi-tr-x' : 'fi-sr-bars-sort' }}
          </v-icon>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import { gsap } from 'gsap'
import { mapState, mapActions } from 'pinia'
import { RouterLink } from 'vue-router'
import { useLanguageStore } from '@/stores/languageStore'

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
    clearInterval(this.bgInterval)
  },
  methods: {
    handleScroll() {
      const prev = this.scrolled
      this.scrolled = window.scrollY > window.innerHeight / 2
      if (prev !== this.scrolled) this.animateNav()
    },
    animateNav() {
      if (this.scrolled) {
        // Hide full desktop nav: also disable pointer-events
        gsap.to(this.$refs.desktopNav, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: 'power2.out',
          onComplete: () => {
            this.$refs.desktopNav.style.pointerEvents = 'none'
          },
        })
      } else {
        // Show full desktop nav
        this.$refs.desktopNav.style.pointerEvents = 'auto'
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

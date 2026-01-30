<style>
.v-main {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.video-background {
  position: absolute;
  /* relative to v-app now */
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  /* full viewport height */
  object-fit: cover;
  z-index: 0;
  /* behind nav/overlay */
}

html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
  /* avoid width + padding issues */
}

.v-btn:hover {
  transform: scale(1.05);
  transition: 0.2s;
}

/* Splash screen */
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.splash-logo {
  width: 200px;
  height: auto;
}

.splash-logo-wrapper {
  position: relative;
  display: inline-block;
}

.splash-logo-shine {
  position: absolute;
  top: 0;
  left: -75%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: skewX(-25deg);
  pointer-events: none;
}

.side-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw; /* full width */
  height: 100vh; /* full height */
  background: #0b0b0b;
  z-index: 999;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* start hidden above screen */
  transform: translateY(-100%);
  pointer-events: none;
}

.side-nav--open {
  pointer-events: auto;
}

.floating-nav {
  border-radius: 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  z-index: 2000; /* ensure above everything */
  pointer-events: auto; /* ensure clicks work */
  opacity: 1;
}

.menu-btn {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 8px 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  transition: all 0.25s ease;
  pointer-events: auto;
}

.menu-btn:hover {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transform: translateY(-1px);
}

.menu-btn .v-icon {
  font-size: 24px;
  color: #111;
}
.nav-logo {
  height: 32px;
  width: auto;
  max-width: 120px;
  object-fit: contain;
  display: block;
}

.page-scrim {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998; /* below side-nav (999), above content */
}

.content-disabled {
  pointer-events: none;
  user-select: none;
}

.side-nav-inner {
  width: 100%;
}

.side-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 28px;
  align-items: center;
}

/* Nav links */
.side-link {
  position: relative;
  text-decoration: none;
  font-size: 48px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.35s ease;
}

/* Hover center emphasis */
.side-link:hover {
  color: #ffffff;
  transform: scale(1.08);
}

/* Underline accent */
.side-link::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -10px;
  width: 0;
  height: 3px;
  background: linear-gradient(90deg, #ffffff, #888);
  transform: translateX(-50%);
  transition: width 0.35s ease;
}

.side-link:hover::after {
  width: 60%;
}

/* Active route */
.router-link-active.side-link {
  color: #ffffff;
}

.router-link-active.side-link::after {
  width: 60%;
}
</style>
<template>
  <v-app>
    <div v-if="showSplash" class="splash-screen">
      <v-img
        height="100"
        src="/eishi/eishi_logo-removebg-preview.webp"
        alt="Splash Screen"
        contain
        class="splash-logo"
      />

      <div class="splash-logo-wrapper">
        <div class="splash-logo-shine"></div>
      </div>
    </div>

    <v-btn
      rounded="lg"
      icon
      size="small"
      style="position: fixed; bottom: 20px; right: 20px; z-index: 1000"
      @click="toggleAudio"
    >
      <v-icon>{{ isMuted ? 'mdi-volume-off' : 'mdi-volume-high' }}</v-icon>
    </v-btn>

    <video
      v-if="$route.name === 'home'"
      autoplay
      loop
      muted
      playsinline
      class="video-background"
      preload="metadata"
      poster="/images/hero-img.jpg"
    >
      <source src="/eishi/videos/Benguet.mp4" type="video/mp4" />
    </video>
    <audio ref="bgm" src="/eishi/Music/sisiwit.mp3" loop preload="auto" muted></audio>

    <Navigation v-if="showLayout && !sideNavOpen" :color="color" :flat="flat" />

    <!-- Floating Navbar Button -->
    <div ref="navButton" v-if="showFloatingNav && !$vuetify.display.mobile" class="floating-nav">
      <img src="/eishi/eishi_logo-removebg-preview.webp" alt="Logo" class="nav-logo" />
      <v-btn class="menu-btn" icon @click="toggleSideNav">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </div>

    <!-- Side Nav Overlay -->
    <div ref="sideNav" class="side-nav" :class="{ 'side-nav--open': sideNavOpen }">
      <nav class="side-nav-inner">
        <ul class="side-nav-list">
          <li>
            <router-link to="/" class="side-link" @click="onSideNavLinkClick">
              <span>{{ t.home }}</span>
            </router-link>
          </li>

          <li>
            <router-link to="/about" class="side-link" @click="onSideNavLinkClick">
              <span>{{ t.about }}</span>
            </router-link>
          </li>

          <li>
            <router-link to="/contact" class="side-link" @click="onSideNavLinkClick">
              <span>{{ t.contact }}</span>
            </router-link>
          </li>

          <li>
            <router-link to="/property" class="side-link" @click="onSideNavLinkClick">
              <span>{{ t.ourBusiness }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>

    <div v-show="sideNavOpen" class="page-scrim" @click="toggleSideNav" />
    <v-main :class="{ 'content-disabled': sideNavOpen }">
      <router-view />
    </v-main>
    <Footer v-if="showLayout" />
  </v-app>
</template>

<script>
import { useLanguageStore } from '@/stores/languageStore'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import { mapState } from 'pinia'
import { gsap } from 'gsap'
export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
  },

  data: () => ({
    showFloatingNav: false,
    sideNavOpen: false,
    showSplash: true,
    fab: null,
    color: '',
    flat: null,
    isMuted: true,
  }),

  computed: {
    ...mapState(useLanguageStore, ['selectedLanguage', 't']),
    showLayout() {
      return !['tour-cebu', 'tour-batangas'].includes(this.$route.name)
    },
  },

  created() {
    const top = window.pageYOffset || 0
    if (top <= 60) {
      this.color = 'transparent'
      this.flat = true
    }
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = 'secondary'
        this.flat = false
      } else {
        this.color = 'transparent'
        this.flat = true
      }
    },
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll)
    this.sideNav = this.$refs.sideNav
    this.playSplashAnimation()
  },
  methods: {
    onSideNavLinkClick() {
      if (!this.sideNavOpen) return

      this.toggleSideNav()
    },

    onScroll(e) {
      const scrollY = window.scrollY
      const halfScreen = window.innerHeight / 2

      // Show the nav button only after scrolling past half the screen
      this.showFloatingNav = scrollY > halfScreen

      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 60
    },
    toggleSideNav() {
      this.sideNavOpen = !this.sideNavOpen
      document.body.style.overflow = this.sideNavOpen ? 'hidden' : ''

      gsap.to(this.sideNav, {
        y: this.sideNavOpen ? '0%' : '-100%',
        duration: 0.45,
        ease: 'power2.out',
      })
    },
    playSplashAnimation() {
      const tl = this.$gsap.timeline({
        onComplete: () => {
          this.showSplash = false
        },
      })

      // Logo scale/fade
      tl.from('.splash-logo', {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: 'power2.out',
      })
        .to(
          '.splash-logo',
          {
            scale: 1,
            duration: 0.3,
            ease: 'power1.inOut',
          },
          '-=0.2',
        ) // overlap a bit

        // Shine effect
        .fromTo(
          '.splash-logo-shine',
          { x: '-75%' },
          { x: '125%', duration: 1, ease: 'power2.inOut' },
          '-=0.5', // start shine while logo pop ends
        )

        // Slide splash up
        .to('.splash-screen', {
          y: '-100%',
          duration: 1,
          ease: 'power2.inOut',
          delay: 0.3,
        })
    },
    toggleAudio() {
      const audio = this.$refs.bgm
      if (!audio) return

      this.isMuted = !this.isMuted
      audio.muted = this.isMuted

      if (!this.isMuted) {
        audio.play().catch(() => {})
      }
    },
  },
}
</script>

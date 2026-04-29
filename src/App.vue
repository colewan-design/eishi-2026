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
  background: linear-gradient(120deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 100%);
  transform: skewX(-25deg);
  pointer-events: none;
}

.side-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  /* full width */
  height: 100vh;
  /* full height */
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
  z-index: 2000;
  /* ensure above everything */
  pointer-events: auto;
  /* ensure clicks work */
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
  z-index: 998;
  /* below side-nav (999), above content */
}

.content-disabled {
  pointer-events: none;
  user-select: none;
}

/* ── Floating Action Button Group ── */
.fab-group {
  position: fixed;
  bottom: 24px;
  right: 20px;
  z-index: 1050;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.fab-btn {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(15, 23, 42, 0.88);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(96, 165, 250, 0.25);
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3), 0 0 0 0 rgba(96, 165, 250, 0);
  transition: color 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.2s, background 0.2s;
  position: relative;
  overflow: hidden;
}

.fab-btn:hover {
  color: #fff;
  border-color: rgba(96, 165, 250, 0.7);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35), 0 0 0 3px rgba(96, 165, 250, 0.15);
  transform: translateY(-2px);
  background: rgba(15, 23, 42, 0.96);
}

.fab-audio.active {
  border-color: rgba(96, 165, 250, 0.6);
  color: #60A5FA;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3), 0 0 12px rgba(96, 165, 250, 0.2);
}

/* animated equalizer bars when music is playing */
.fab-audio-bar {
  position: absolute;
  bottom: 7px;
  right: 7px;
  display: flex;
  align-items: flex-end;
  gap: 1.5px;
}

.fab-audio-bar span {
  width: 2px;
  background: #60A5FA;
  border-radius: 1px;
  animation: eq-bar 0.9s ease-in-out infinite alternate;
}

.fab-audio-bar span:nth-child(1) { height: 4px; animation-delay: 0s; }
.fab-audio-bar span:nth-child(2) { height: 7px; animation-delay: 0.15s; }
.fab-audio-bar span:nth-child(3) { height: 5px; animation-delay: 0.3s; }
.fab-audio-bar span:nth-child(4) { height: 3px; animation-delay: 0.1s; }

@keyframes eq-bar {
  from { transform: scaleY(0.4); }
  to   { transform: scaleY(1.2); }
}

/* slide-in transition for scroll button */
.fab-slide-enter-active { transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.34,1.56,0.64,1); }
.fab-slide-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.fab-slide-enter-from, .fab-slide-leave-to { opacity: 0; transform: translateY(10px) scale(0.85); }

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


    <div class="fab-group">
      <transition name="fab-slide">
        <button v-show="showScrollTop" class="fab-btn" @click="scrollToTop" aria-label="Scroll to top">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="18 15 12 9 6 15"/>
          </svg>
        </button>
      </transition>
      <button class="fab-btn fab-audio" :class="{ active: !isMuted }" @click="toggleAudio" :aria-label="isMuted ? 'Play music' : 'Mute music'">
        <svg v-if="isMuted" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
          <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
        </svg>
        <span class="fab-audio-bar" v-if="!isMuted">
          <span /><span /><span /><span />
        </span>
      </button>
    </div>


    <audio ref="bgm" src="/eishi/Music/sisiwit.mp3" loop preload="auto" muted></audio>

    <Navigation v-if="showLayout && !sideNavOpen" :color="color" :flat="flat" />
    
    <div v-show="sideNavOpen" class="page-scrim" @click="toggleSideNav" />
    <v-main :class="{ 'content-disabled': sideNavOpen }">
      <router-view />
    </v-main>
    <Footer v-if="showLayout" />
    <ChatBot />
  </v-app>
</template>

<script>
import { useLanguageStore } from '@/stores/languageStore'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import ChatBot from './components/ChatBot.vue'
import { mapState } from 'pinia'
import { gsap } from 'gsap'
export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
    ChatBot,
  },

  data: () => ({
    showScrollTop: false,
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
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    onSideNavLinkClick() {
      if (!this.sideNavOpen) return

      this.toggleSideNav()
    },

    onScroll(e) {
      const scrollY = window.scrollY
      const halfScreen = window.innerHeight / 2

      // Show the nav button only after scrolling past half the screen
      this.showFloatingNav = scrollY > halfScreen
      this.showScrollTop = scrollY > 300

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
        audio.play().catch(() => { })
      }
    },
  },
}
</script>

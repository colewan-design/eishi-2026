<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400&family=DM+Sans:wght@300;400;500&display=swap');

:root {
  --ivory: #f8f5f0;
  --cream: #f0ebe2;
  --linen: #e4ddd3;
  --bronze: #a07840;
  --bronze-l: #c9a96e;
  --charcoal: #1c1a17;
  --ink: #2e2b26;
  --mid: #7a7368;
  --fd: 'Playfair Display', Georgia, serif;
  --dm: 'DM Sans', sans-serif;
}

/* ── App Bar reset ───────────────────────────────────── */
.nav-bar {
  font-family: var(--dm) !important;
  transition: background 0.4s ease, box-shadow 0.4s ease !important;
}

.nav-bar.scrolled-bar {
  background: rgba(248, 245, 240, 0.96) !important;
  box-shadow: 0 1px 0 var(--linen) !important;
  backdrop-filter: blur(12px);
}

/* ── Desktop nav ─────────────────────────────────────── */
.nav-logo {
  height: 36px;
  width: auto;
  object-fit: contain;
  display: block;
}

.nav-link {
  position: relative;
  font-family: var(--dm);
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 8px 0;
  color: #fff;
  transition: color 0.3s;
  background: none;
  border: none;
  cursor: pointer;
}

.nav-link.dark {
  color: var(--ink);
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background: var(--bronze);
  transition: width 0.35s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 100%;
}

.nav-link:hover {
  color: var(--bronze-l);
}

.nav-link.dark:hover {
  color: var(--bronze);
}

.nav-link.router-link-active {
  color: var(--bronze-l);
}

.nav-link.dark.router-link-active {
  color: var(--bronze);
}

/* Language pill */
.lang-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--dm);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #fff;
  background: transparent;
  padding: 6px 14px;
  cursor: pointer;
  transition: border-color 0.3s, color 0.3s, background 0.3s;
}

.lang-pill.dark {
  border-color: rgba(44, 43, 38, 0.25);
  color: var(--ink);
}

.lang-pill:hover {
  border-color: var(--bronze-l);
  color: var(--bronze-l);
  background: transparent;
}

.lang-pill.dark:hover {
  border-color: var(--bronze);
  color: var(--bronze);
}

.lang-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--bronze);
  flex-shrink: 0;
}

/* Desktop nav row */
.desktop-nav-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 6vw;
  transition: padding 0.4s ease;
}

.desktop-nav-row.compact {
  padding: 16px 6vw;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 2rem;
}

/* ── Mobile nav ──────────────────────────────────────── */
.mobile-nav-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 5vw;
}

.mobile-logo {
  height: 28px;
  width: auto;
  object-fit: contain;
  display: block;
}

.hamburger-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.ham-line {
  display: block;
  width: 100%;
  height: 1px;
  background: #fff;
  transition: transform 0.35s ease, opacity 0.25s ease, background 0.3s;
}

.hamburger-btn.dark .ham-line {
  background: var(--ink);
}

.hamburger-btn.open .ham-line:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.hamburger-btn.open .ham-line:nth-child(2) {
  opacity: 0;
}

.hamburger-btn.open .ham-line:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

/* ── Mobile drawer ───────────────────────────────────── */
.mobile-drawer {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: var(--charcoal);
  display: flex;
  flex-direction: column;
  padding: 0 7vw;
  overflow-y: auto;
  opacity: 0;
  transform: translateY(-12px);
  transition: opacity 0.38s ease, transform 0.38s ease;
  pointer-events: none;
}

.mobile-drawer.open {
  opacity: 1;
  transform: none;
  pointer-events: auto;
}

.drawer-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 0;
  flex-shrink: 0;
}

.drawer-logo {
  height: 28px;
  width: auto;
  object-fit: contain;
}

.close-btn {
  width: 36px;
  height: 36px;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.18);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s;
}

.close-btn:hover {
  border-color: var(--bronze-l);
}

.close-x {
  display: block;
  width: 14px;
  height: 14px;
  position: relative;
}

.close-x::before,
.close-x::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.7);
}

.close-x::before {
  transform: translateY(-50%) rotate(45deg);
}

.close-x::after {
  transform: translateY(-50%) rotate(-45deg);
}

.drawer-links {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: 4rem;
  flex: 1;
}

.drawer-link {
  font-family: var(--fd);
  font-size: clamp(2.2rem, 8vw, 3.8rem);
  font-weight: 300;
  color: rgba(248, 245, 240, 0.45);
  text-decoration: none;
  padding: 1.4rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: color 0.3s;
  cursor: pointer;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  width: 100%;
  text-align: left;
}

.drawer-link:first-child {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.drawer-link:hover,
.drawer-link.router-link-active {
  color: var(--ivory);
}

.drawer-link-arrow {
  font-size: 1rem;
  color: var(--bronze);
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
}

.drawer-link:hover .drawer-link-arrow {
  opacity: 1;
  transform: translateX(4px);
}

.drawer-bottom {
  padding: 3rem 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}

.drawer-lang {
  display: flex;
  gap: 1rem;
}

.dlang-btn {
  font-family: var(--dm);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35);
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 0;
  transition: color 0.3s;
}

.dlang-btn.active {
  color: var(--bronze-l);
}

.dlang-btn:hover {
  color: var(--ivory);
}

.dlang-sep {
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.15);
  align-self: center;
}

.drawer-tagline {
  font-family: var(--dm);
  font-size: 0.62rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.2);
}
</style>

<template>
  <div>
    <v-app-bar app flat elevation="0" class="nav-bar" :class="{ 'scrolled-bar': scrolled }" height="auto"
      style="background: transparent">
      <!-- ── Desktop ────────────────────────────────── -->
      <div class="desktop-nav-row d-none d-md-flex" :class="{ compact: scrolled }">
        <!-- Logo -->
        <router-link to="/">
          <img src="/eishi/eishi_logo-removebg-preview.webp" alt="Eishi" class="nav-logo" />
        </router-link>

        <!-- Links -->
        <nav class="nav-links">
          <router-link v-for="item in navItems" :key="item.route" :to="item.route" class="nav-link"
            :class="{ dark: scrolled || isNotHome }">
            {{ item.label }}
          </router-link>
        </nav>

        <!-- Language + CTA -->
        <div class="nav-right">
          <v-menu offset-y>
            <template #activator="{ props }">
              <button v-bind="props" class="lang-pill" :class="{ dark: scrolled || isNotHome }">
                <span class="lang-dot" />
                {{ selectedLanguage === 'Japanese' ? '日本語' : 'EN' }}
              </button>
            </template>
            <v-list density="compact" min-width="120">
              <v-list-item @click="changeLanguage('English')">
                <v-list-item-title style="font-size:0.85rem">English</v-list-item-title>
              </v-list-item>
              <v-list-item @click="changeLanguage('Japanese')">
                <v-list-item-title style="font-size:0.85rem">日本語</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>

      <!-- ── Mobile bar ─────────────────────────────── -->
      <div class="mobile-nav-row d-flex d-md-none">
        <router-link to="/">
          <img src="/eishi/eishi_logo-removebg-preview.webp" alt="Eishi" class="mobile-logo"
            :style="{ filter: scrolled || isNotHome ? 'invert(1) brightness(0)' : 'none' }" />
        </router-link>

        <button class="hamburger-btn" :class="{ open: menuOpen, dark: scrolled || isNotHome }"
          @click="menuOpen = !menuOpen" aria-label="Toggle menu">
          <span class="ham-line" />
          <span class="ham-line" />
          <span class="ham-line" />
        </button>
      </div>

      <!-- ── Mobile drawer ──────────────────────────── -->
      <div class="mobile-drawer" :class="{ open: menuOpen }">
        <!-- Drawer top -->
        <div class="drawer-top">
          <img src="/eishi/eishi_logo-removebg-preview.webp" alt="Eishi" class="drawer-logo" />
          <button class="close-btn" @click="menuOpen = false" aria-label="Close menu">
            <span class="close-x" />
          </button>
        </div>

        <!-- Drawer links -->
        <nav class="drawer-links">
          <router-link v-for="item in navItems" :key="item.route" :to="item.route" class="drawer-link"
            @click="menuOpen = false">
            {{ item.label }}
            <span class="drawer-link-arrow">→</span>
          </router-link>
        </nav>

        <!-- Drawer bottom -->
        <div class="drawer-bottom">
          <div class="drawer-lang">
            <button class="dlang-btn" :class="{ active: selectedLanguage === 'English' }"
              @click="changeLanguage('English')">EN</button>
            <span class="dlang-sep">/</span>
            <button class="dlang-btn" :class="{ active: selectedLanguage === 'Japanese' }"
              @click="changeLanguage('Japanese')">日本語</button>
          </div>
          <span class="drawer-tagline">Eishi Group</span>
        </div>
      </div>
    </v-app-bar>
    <!-- ✅ Drawer is NOW outside v-app-bar, teleported to body -->
    <Teleport to="body">
      <div class="mobile-drawer" :class="{ open: menuOpen }">
        <!-- Drawer top -->
        <div class="drawer-top">
          <img src="/eishi/eishi_logo-removebg-preview.webp" alt="Eishi" class="drawer-logo" />
          <button class="close-btn" @click="menuOpen = false" aria-label="Close menu">
            <span class="close-x" />
          </button>
        </div>

        <!-- Drawer links -->
        <nav class="drawer-links">
          <router-link v-for="item in navItems" :key="item.route" :to="item.route" class="drawer-link"
            @click="menuOpen = false">
            {{ item.label }}
            <span class="drawer-link-arrow">→</span>
          </router-link>
        </nav>

        <!-- Drawer bottom -->
        <div class="drawer-bottom">
          <div class="drawer-lang">
            <button class="dlang-btn" :class="{ active: selectedLanguage === 'English' }"
              @click="changeLanguage('English')">EN</button>
            <span class="dlang-sep">/</span>
            <button class="dlang-btn" :class="{ active: selectedLanguage === 'Japanese' }"
              @click="changeLanguage('Japanese')">日本語</button>
          </div>
          <span class="drawer-tagline">Eishi Group</span>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script>
import { useLanguageStore } from '@/stores/languageStore'
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
    ...mapState(useLanguageStore, ['selectedLanguage', 't']),

    isNotHome() {
      return this.$route.name !== 'home'
    },

    navItems() {
      return [
        { label: this.t.home, route: '/' },
        { label: this.t.about, route: '/about' },
        { label: this.t.contact, route: '/contact' },
        { label: this.t.ourBusiness, route: '/property' },
      ]
    },
  },

  watch: {
    menuOpen(val) {
      document.body.style.overflow = val ? 'hidden' : ''
    },
    $route() {
      this.menuOpen = false
    },
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    document.body.style.overflow = ''
  },

  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > window.innerHeight / 2
    },

    ...mapActions(useLanguageStore, ['changeLanguage']),
  },
}
</script>
<style>
/* ── App Bar ─────────────────────────────────────────── */
.nav-bar {
  font-family: 'Inter', -apple-system, sans-serif !important;
  transition: background 0.4s ease, box-shadow 0.4s ease !important;
}

.nav-bar.scrolled-bar {
  background: rgba(255, 255, 255, 0.97) !important;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06), 0 4px 20px rgba(0, 0, 0, 0.05) !important;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

/* ── Desktop nav ─────────────────────────────────────── */
.nav-logo {
  height: 36px;
  width: auto;
  object-fit: contain;
  display: block;
  transition: opacity 0.2s ease;
}
.nav-logo:hover { opacity: 0.8; }

.nav-link {
  position: relative;
  font-family: 'Inter', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 8px 0;
  color: rgba(255, 255, 255, 0.88);
  transition: color 0.2s ease;
  background: none;
  border: none;
  cursor: pointer;
}

.nav-link.dark { color: #1E293B; }

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 0;
  height: 2px;
  background: #0066CC;
  border-radius: 1px;
  transition: width 0.25s ease;
}

.nav-link:hover::after,
.nav-link.router-link-active::after { width: 100%; }

.nav-link:hover { color: #fff; }
.nav-link.dark:hover { color: #0066CC; }
.nav-link.router-link-active { color: #fff; }
.nav-link.dark.router-link-active { color: #0066CC; }

/* Language pill */
.lang-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'Inter', sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: 1.5px solid rgba(255, 255, 255, 0.32);
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.88);
  background: transparent;
  padding: 5px 12px;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s, background 0.2s;
}

.lang-pill.dark {
  border-color: rgba(30, 41, 59, 0.2);
  color: #1E293B;
}

.lang-pill:hover {
  border-color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.1);
}

.lang-pill.dark:hover {
  border-color: #0066CC;
  color: #0066CC;
  background: rgba(0, 102, 204, 0.06);
}

.lang-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #0066CC;
  flex-shrink: 0;
}

/* Desktop nav row */
.desktop-nav-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 6vw;
  transition: padding 0.4s ease;
}

.desktop-nav-row.compact { padding: 14px 6vw; }

.nav-links {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

/* ── Mobile nav ──────────────────────────────────────── */
.mobile-nav-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 5vw;
}

.mobile-logo {
  height: 32px;
  width: auto;
  object-fit: contain;
  display: block;
}

.hamburger-btn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: background 0.2s ease;
}

.hamburger-btn:hover { background: rgba(255, 255, 255, 0.1); }
.hamburger-btn.dark:hover { background: rgba(0, 0, 0, 0.06); }
.hamburger-btn:focus-visible { outline: 2px solid #0066CC; outline-offset: 2px; }

.ham-line {
  display: block;
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.9);
  transition: transform 250ms ease, opacity 200ms ease, background 200ms ease;
  border-radius: 1px;
}

.hamburger-btn.dark .ham-line { background: #1E293B; }
.hamburger-btn.open .ham-line:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger-btn.open .ham-line:nth-child(2) { opacity: 0; }
.hamburger-btn.open .ham-line:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ── Mobile drawer ───────────────────────────────────── */
.mobile-drawer {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #0F172A;
  display: flex;
  flex-direction: column;
  padding: 0 5vw;
  overflow-y: auto;
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 300ms ease, transform 300ms ease;
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

.drawer-logo { height: 28px; width: auto; object-fit: contain; }

.close-btn {
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s, background 0.2s;
}

.close-btn:hover {
  border-color: #0066CC;
  background: rgba(0, 102, 204, 0.15);
}

.close-x {
  display: block;
  width: 16px;
  height: 16px;
  position: relative;
}

.close-x::before,
.close-x::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 1px;
}

.close-x::before { transform: translateY(-50%) rotate(45deg); }
.close-x::after { transform: translateY(-50%) rotate(-45deg); }

.drawer-links {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-top: 2.5rem;
  flex: 1;
}

.drawer-link {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.25rem, 5.5vw, 1.875rem);
  font-weight: 700;
  letter-spacing: -0.01em;
  color: rgba(255, 255, 255, 0.45);
  text-decoration: none;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: color 200ms ease, padding-left 200ms ease;
  cursor: pointer;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  width: 100%;
  text-align: left;
}

.drawer-link:first-child { border-top: 1px solid rgba(255, 255, 255, 0.07); }
.drawer-link:hover { color: #fff; padding-left: 6px; }
.drawer-link.router-link-active { color: #0066CC; }

.drawer-link-arrow {
  font-size: 1rem;
  color: #0066CC;
  opacity: 0;
  transition: opacity 200ms ease, transform 200ms ease;
}

.drawer-link:hover .drawer-link-arrow { opacity: 1; transform: translateX(4px); }

.drawer-bottom {
  padding: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.drawer-lang {
  display: flex;
  gap: 2px;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 3px;
}

.dlang-btn {
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px 12px;
  border-radius: 6px;
  transition: color 200ms ease, background 200ms ease;
}

.dlang-btn.active {
  color: #fff;
  background: #0066CC;
  font-weight: 600;
}

.dlang-btn:hover:not(.active) {
  color: #fff;
  background: rgba(255, 255, 255, 0.08);
}

.dlang-sep { display: none; }

.drawer-tagline {
  font-family: 'Inter', sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.25);
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

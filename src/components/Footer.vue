<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400&family=DM+Sans:wght@300;400;500&display=swap');

:root {
  --ivory:    #f8f5f0;
  --cream:    #f0ebe2;
  --linen:    #e4ddd3;
  --bronze:   #a07840;
  --bronze-l: #c9a96e;
  --bronze-xl:#ecdfc8;
  --charcoal: #1c1a17;
  --ink:      #2e2b26;
  --mid:      #7a7368;
  --pale:     #b0a898;
  --fd: 'Playfair Display', Georgia, serif;
  --dm: 'DM Sans', sans-serif;
}

.footer-wrap { font-family: var(--dm); }

/* ── Partner strip ───────────────────────────────────── */
.partners-section {
  background: var(--ivory);
  padding: 7vw 8vw 5vw;
  border-top: 1px solid var(--linen);
}
.partners-inner { max-width: 1200px; margin: 0 auto; }

.section-eyebrow {
  font-size: 0.67rem; letter-spacing: 0.32em;
  text-transform: uppercase; color: var(--bronze);
  display: flex; align-items: center; gap: 12px;
  margin-bottom: 3rem;
}
.section-eyebrow::before {
  content: ''; display: block;
  width: 26px; height: 1px; background: var(--bronze);
}
.partners-headline {
  font-family: var(--fd);
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 300; color: var(--charcoal);
  line-height: 1.15; margin-bottom: 4rem;
}
.partners-headline em { font-style: italic; color: var(--mid); }

/* Carousel */
.carousel-outer {
  overflow: hidden; position: relative;
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
}
.carousel-track {
  display: flex; flex-wrap: nowrap;
  animation: logoScroll 28s linear infinite;
}
.carousel-track:hover { animation-play-state: paused; }
@keyframes logoScroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.logo-item {
  flex: 0 0 auto;
  margin: 0 3rem;
  display: flex; flex-direction: column; align-items: center; gap: 10px;
  text-decoration: none;
}
.logo-img-wrap {
  height: 56px; display: flex; align-items: center;
  filter: grayscale(1) opacity(0.55);
  transition: filter 0.4s ease;
}
.logo-item:hover .logo-img-wrap { filter: grayscale(0) opacity(1); }
.logo-img-wrap img { height: 100%; width: auto; object-fit: contain; display: block; }
.logo-name {
  font-size: 0.65rem; letter-spacing: 0.1em;
  text-align: center; color: var(--pale);
  max-width: 120px; line-height: 1.4;
  transition: color 0.3s;
}
.logo-item:hover .logo-name { color: var(--bronze); }

/* CTA row */
.partner-cta {
  margin-top: 4rem;
  display: flex; align-items: center; gap: 2rem;
  padding-top: 3rem;
  border-top: 1px solid var(--linen);
}
.partner-cta-text {
  font-family: var(--fd);
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  font-weight: 300; color: var(--charcoal);
}
.partner-cta-text em { font-style: italic; color: var(--mid); }
.btn-line {
  display: inline-flex; align-items: center; gap: 14px;
  border: 1px solid var(--charcoal);
  color: var(--charcoal); background: transparent;
  font-family: var(--dm); font-size: 0.7rem;
  letter-spacing: 0.22em; text-transform: uppercase;
  text-decoration: none; padding: 14px 28px; cursor: pointer;
  transition: background 0.35s, color 0.35s; white-space: nowrap;
  flex-shrink: 0;
}
.btn-line:hover { background: var(--charcoal); color: var(--ivory); }
.btn-arr {
  width: 18px; height: 1px; background: currentColor;
  position: relative; flex-shrink: 0; transition: width 0.3s;
}
.btn-line:hover .btn-arr { width: 28px; }
.btn-arr::after {
  content: ''; position: absolute; right: 0; top: -3px;
  width: 6px; height: 6px;
  border-right: 1px solid currentColor;
  border-top: 1px solid currentColor;
  transform: rotate(45deg);
}

/* ── Main footer ─────────────────────────────────────── */
.footer-main {
  background: var(--charcoal);
  padding: 7vw 8vw 0;
}
.footer-inner { max-width: 1200px; margin: 0 auto; }

/* Top grid */
.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 4vw;
  padding-bottom: 5rem;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.footer-brand {}
.footer-logo { height: 32px; width: auto; object-fit: contain; display: block; margin-bottom: 2rem; }
.footer-brand-desc {
  font-size: 0.88rem; font-weight: 300;
  line-height: 1.85; color: rgba(248,245,240,0.4);
  max-width: 280px; margin-bottom: 2.5rem;
}
.footer-social { display: flex; gap: 1rem; }
.social-dot {
  width: 36px; height: 36px;
  border: 1px solid rgba(255,255,255,0.15);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; transition: border-color 0.3s, background 0.3s;
  text-decoration: none;
}
.social-dot:hover { border-color: var(--bronze-l); background: rgba(201,169,110,0.08); }
.social-dot svg { width: 14px; height: 14px; fill: rgba(255,255,255,0.5); transition: fill 0.3s; }
.social-dot:hover svg { fill: var(--bronze-l); }

.footer-col-label {
  font-size: 0.62rem; letter-spacing: 0.28em;
  text-transform: uppercase; color: var(--bronze-l);
  margin-bottom: 1.8rem; display: block;
}
.footer-col ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.9rem; }
.footer-col ul li a,
.footer-col ul li span {
  font-size: 0.88rem; font-weight: 300;
  color: rgba(248,245,240,0.45); text-decoration: none;
  transition: color 0.3s; cursor: pointer;
}
.footer-col ul li a:hover { color: var(--ivory); }

/* Bottom bar */
.footer-bottom {
  display: flex; justify-content: space-between; align-items: center;
  padding: 1.8rem 0;
}
.footer-copy {
  font-size: 0.65rem; letter-spacing: 0.15em;
  color: rgba(248,245,240,0.2); text-transform: uppercase;
}
.footer-mark {
  font-family: var(--fd);
  font-size: 0.75rem; font-style: italic;
  color: rgba(248,245,240,0.18);
}

/* ── Responsive ──────────────────────────────────────── */
@media (max-width: 900px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 3rem; }
  .partner-cta { flex-direction: column; align-items: flex-start; }
}
@media (max-width: 600px) {
  .footer-grid { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; gap: 0.8rem; text-align: center; }
  .partners-section { padding: 12vw 6vw 8vw; }
  .footer-main { padding: 12vw 6vw 0; }
}
</style>

<template>
  <footer class="footer-wrap">

    <!-- ── Partners ───────────────────────────────── -->
    <div class="partners-section">
      <div class="partners-inner">
        <p class="section-eyebrow">Our Partners</p>
        <h2 class="partners-headline">
          Trusted by <em>world-class</em><br />organisations
        </h2>

        <!-- Scrolling logos -->
        <div class="carousel-outer">
          <div class="carousel-track">
            <a
              v-for="(logo, i) in repeatedLogos" :key="i"
              :href="logo.link || undefined"
              :target="logo.link ? '_blank' : undefined"
              rel="noopener"
              class="logo-item"
            >
              <div class="logo-img-wrap">
                <img :src="logo.img" :alt="logo.title" loading="lazy" />
              </div>
              <span class="logo-name">{{ logo.title }}</span>
            </a>
          </div>
        </div>

        <!-- Become a partner CTA -->
        <div class="partner-cta">
          <p class="partner-cta-text">
            Interested in working<br /><em>with Eishi Group?</em>
          </p>
          <router-link to="/contact" class="btn-line">
            {{ t.becomePartner || 'Become a Partner' }}
            <span class="btn-arr" />
          </router-link>
        </div>
      </div>
    </div>

    <!-- ── Main footer ────────────────────────────── -->
    <div class="footer-main">
      <div class="footer-inner">
        <div class="footer-grid">

          <!-- Brand col -->
          <div class="footer-brand">
            <img
              src="/eishi/eishi_logo-removebg-preview.webp"
              alt="Eishi Group"
              class="footer-logo"
            />
            <p class="footer-brand-desc">
              A diversified holding company rooted in agriculture, real estate, and community development across the Philippine archipelago.
            </p>
            <div class="footer-social">
              <!-- Email icon -->
              <a class="social-dot" :href="'mailto:' + t.eishiGmail" aria-label="Email">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <!-- Phone icon -->
              <a class="social-dot" href="tel:+639175755044" aria-label="Phone">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Navigation col -->
          <div class="footer-col">
            <span class="footer-col-label">Navigation</span>
            <ul>
              <li><router-link to="/">{{ t.home || 'Home' }}</router-link></li>
              <li><router-link to="/about">{{ t.about || 'About' }}</router-link></li>
              <li><router-link to="/contact">{{ t.contact || 'Contact' }}</router-link></li>
              <li><router-link to="/property">{{ t.ourBusiness || 'Our Business' }}</router-link></li>
            </ul>
          </div>

          <!-- Location col -->
          <div class="footer-col">
            <span class="footer-col-label">{{ t.location || 'Location' }}</span>
            <ul>
              <li><span>{{ t.mainOfficeAddress }}</span></li>
              <li><span>{{ t.mainOfficeAddress2 }}</span></li>
            </ul>
          </div>

          <!-- Contact col -->
          <div class="footer-col">
            <span class="footer-col-label">{{ t.contact || 'Contact' }}</span>
            <ul>
              <li><a :href="'mailto:' + t.eishiGmail">{{ t.eishiGmail }}</a></li>
              <li><a href="tel:+639175755044">(+63) 917-575-5044</a></li>
            </ul>
          </div>

        </div>

        <!-- Bottom bar -->
        <div class="footer-bottom">
          <span class="footer-copy">
            &copy; {{ currentYear }} Eishi Group. All rights reserved.
          </span>
          <span class="footer-mark">Building legacies.</span>
        </div>
      </div>
    </div>

  </footer>
</template>

<script>
import { mapState } from 'pinia'
import { useLanguageStore } from '@/stores/languageStore'

export default {
  name: 'Footer',

  data() {
    return {
      partner_logo: [
        { img: '/eishi/logo/epartners-logo.webp',        title: 'E.PARTNERS Co., Ltd.',                      link: 'https://epartners-offshore.com/' },
        { img: '/eishi/logo/meishin-group.webp',          title: 'Meishin Group Co., Ltd.',                   link: 'https://meishin-group.co.jp/' },
        { img: '/eishi/logo/hotel-osaka-logo.webp',       title: 'Hotel Osaka',                               link: 'https://www.hostelosaka.net/' },
        { img: '/eishi/logo/domoganlawoffice-logo.webp',  title: 'Domogan & Associates Law Office',           link: '' },
        { img: '/eishi/logo/dcm-logo.webp',               title: 'The Law Firm of Domogan, Chan and Mabalot', link: '' },
      ],
    }
  },

  computed: {
    ...mapState(useLanguageStore, ['t']),

    repeatedLogos() {
      return [...this.partner_logo, ...this.partner_logo]
    },

    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>
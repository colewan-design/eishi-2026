<style>
/* ── Footer ─────────────────────────────────────────── */
.footer-wrap {
  font-family: 'Inter', sans-serif;
}

/* ── Partner strip ───────────────────────────────────── */
.partners-section {
  background: #F8FAFC;
  padding: 4rem 2rem;
  border-top: 1px solid #E2E8F0;
}

.partners-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.section-eyebrow {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #0066CC;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.section-eyebrow::before {
  content: '';
  display: block;
  width: 28px;
  height: 2px;
  background: #0066CC;
  border-radius: 1px;
}

.partners-headline {
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 700;
  color: #1E293B;
  line-height: 1.2;
  margin-bottom: 2.5rem;
  letter-spacing: -0.02em;
}

.partners-headline em {
  font-style: italic;
  color: #0066CC;
}

/* Partner groups */
.partner-groups {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
}

.partner-group-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #E2E8F0;
}

.partner-group-flag {
  font-size: 1.2rem;
  line-height: 1;
}

.partner-group-label {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #64748B;
}

.partner-group-divider {
  flex: 1;
  height: 1px;
  background: #E2E8F0;
}

.partner-logos {
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: #E2E8F0;
  border-radius: 10px;
  overflow: hidden;
}

.logo-item {
  background: #FFFFFF;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.9rem 1.2rem;
  text-decoration: none;
  transition: background 0.2s;
}

.logo-item:hover { background: #EFF6FF; }

.logo-img-wrap {
  height: 36px;
  width: 64px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: grayscale(1) opacity(0.5);
  transition: filter 0.25s;
}

.logo-item:hover .logo-img-wrap { filter: grayscale(0) opacity(1); }

.logo-img-wrap img {
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
}

.logo-name {
  font-size: 0.8rem;
  font-weight: 500;
  color: #64748B;
  line-height: 1.4;
  transition: color 0.2s;
}

.logo-item:hover .logo-name { color: #1E293B; }

/* CTA row */
.partner-cta {
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-top: 2.5rem;
  border-top: 1px solid #E2E8F0;
}

.partner-cta-text {
  font-size: clamp(1rem, 1.8vw, 1.35rem);
  font-weight: 400;
  color: #1E293B;
  line-height: 1.5;
}

.partner-cta-text em {
  font-style: italic;
  color: #64748B;
}

.btn-line {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: 2px solid #0066CC;
  color: #0066CC;
  background: transparent;
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  white-space: nowrap;
  flex-shrink: 0;
}

.btn-line:hover {
  background: #0066CC;
  color: #fff;
  transform: translateY(-1px);
}

.btn-arr {
  width: 16px;
  height: 1.5px;
  background: currentColor;
  position: relative;
  flex-shrink: 0;
  transition: width 0.25s;
}

.btn-line:hover .btn-arr { width: 24px; }

.btn-arr::after {
  content: '';
  position: absolute;
  right: 0;
  top: -3px;
  width: 6px;
  height: 6px;
  border-right: 1.5px solid currentColor;
  border-top: 1.5px solid currentColor;
  transform: rotate(45deg);
}

/* ── Main footer ─────────────────────────────────────── */
.footer-main {
  background: #0F172A;
  padding: 4rem 2rem 0;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
}

/* Top grid */
.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 3rem;
  padding-bottom: 3.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-logo {
  height: 28px;
  width: auto;
  object-fit: contain;
  display: block;
  margin-bottom: 1.5rem;
}

.footer-brand-desc {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.45);
  max-width: 280px;
  margin-bottom: 2rem;
}

.footer-social {
  display: flex;
  gap: 0.75rem;
}

.social-dot {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
  text-decoration: none;
}

.social-dot:hover {
  border-color: #0066CC;
  background: rgba(0, 102, 204, 0.15);
}

.social-dot svg {
  width: 14px;
  height: 14px;
  fill: rgba(255, 255, 255, 0.45);
  transition: fill 0.2s;
}

.social-dot:hover svg { fill: #60A5FA; }

.footer-col-label {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #60A5FA;
  margin-bottom: 1.5rem;
  display: block;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.footer-col ul li a,
.footer-col ul li span {
  font-size: 0.875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.45);
  text-decoration: none;
  transition: color 0.2s;
  cursor: pointer;
}

.footer-col ul li a:hover { color: #fff; }

/* Bottom bar */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
}

.footer-copy {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  color: rgba(255, 255, 255, 0.2);
  text-transform: uppercase;
}

.footer-mark {
  font-size: 0.75rem;
  font-style: italic;
  color: rgba(255, 255, 255, 0.15);
}

/* ── Vuetify overrides ───────────────────────────────── */
:deep(.v-footer) {
  background: #0F172A !important;
  color: #fff !important;
  font-family: 'Inter', sans-serif !important;
}

:deep(.v-footer a) {
  color: rgba(255, 255, 255, 0.6) !important;
  transition: color 0.2s !important;
}

:deep(.v-footer a:hover) {
  color: #60A5FA !important;
}

/* ── Responsive ──────────────────────────────────────── */
@media (max-width: 900px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 2.5rem; }
  .partner-cta { flex-direction: column; align-items: flex-start; }
  .partner-groups { grid-template-columns: 1fr; gap: 2rem; }
}

@media (max-width: 600px) {
  .footer-grid { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; gap: 0.6rem; text-align: center; }
  .partners-section { padding: 2.5rem 1.25rem; }
  .footer-main { padding: 3rem 1.25rem 0; }
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

        <!-- Partner groups -->
        <div class="partner-groups">

          <!-- Japan -->
          <div class="partner-group">
            <div class="partner-group-header">
              <span class="partner-group-flag">🇯🇵</span>
              <span class="partner-group-label">Japan</span>
              <span class="partner-group-divider" />
            </div>
            <div class="partner-logos">
              <a
                v-for="(logo, i) in jpLogos" :key="i"
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

          <!-- Philippines -->
          <div class="partner-group">
            <div class="partner-group-header">
              <span class="partner-group-flag">🇵🇭</span>
              <span class="partner-group-label">Philippines</span>
              <span class="partner-group-divider" />
            </div>
            <div class="partner-logos">
              <a
                v-for="(logo, i) in phLogos" :key="i"
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
      jpLogos: [
        { img: '/eishi/logo/epartners-logo.webp',   title: 'E.PARTNERS Co., Ltd.',    link: 'https://epartners-offshore.com/' },
        { img: '/eishi/logo/meishin-group.webp',     title: 'Meishin Group Co., Ltd.', link: 'https://meishin-group.co.jp/' },
        { img: '/eishi/logo/hotel-osaka-logo.webp',  title: 'Hotel Osaka',             link: 'https://www.hostelosaka.net/' },
      ],
      phLogos: [
        { img: '/eishi/logo/domoganlawoffice-logo.webp', title: 'Domogan & Associates Law Office',           link: '' },
        { img: '/eishi/logo/dcm-logo.webp',               title: 'The Law Firm of Domogan, Chan and Mabalot', link: '' },
      ],
    }
  },

  computed: {
    ...mapState(useLanguageStore, ['t']),

    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

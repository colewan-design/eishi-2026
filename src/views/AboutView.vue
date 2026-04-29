<style>
.about-wrap {
  font-family: 'Inter', sans-serif;
  background: #fff;
  color: #1E293B;
}

* { box-sizing: border-box; }

/* ── shared utilities ────────────────────────────────── */
.label-tag {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #0066CC;
  display: flex;
  align-items: center;
  gap: 10px;
}

.label-tag::before {
  content: '';
  display: block;
  width: 28px;
  height: 2px;
  background: #0066CC;
  border-radius: 1px;
}

.section-headline {
  font-size: clamp(1.875rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  color: #1E293B;
  letter-spacing: -0.025em;
  margin: 0;
}

.section-headline em {
  font-style: italic;
  color: #00B4D8;
}

.body-copy {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75;
  color: #64748B;
  margin: 0;
}

.btn-line {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  border: 2px solid #0066CC;
  color: #0066CC;
  background: transparent;
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 12px 24px;
  cursor: pointer;
  transition: background 0.25s, color 0.25s, transform 0.2s;
  border-radius: 8px;
  align-self: flex-start;
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
  transition: width 0.25s ease;
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

/* ── HERO / HEADER ───────────────────────────────────── */
.about-hero {
  background: #fff;
  padding: 6rem var(--space-8, 2rem) 3rem;
  max-width: 1400px;
  margin: 0 auto;
}

.about-hero-inner {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 2px solid #E2E8F0;
  padding-bottom: 3rem;
  gap: 2rem;
}

.about-hero-title {
  font-size: clamp(2.75rem, 9vw, 5rem);
  font-weight: 700;
  line-height: 1.08;
  color: #1E293B;
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.03em;
}

.about-hero-title em {
  font-style: italic;
  color: #0066CC;
}

.about-hero-right {
  text-align: right;
  flex-shrink: 0;
  padding-left: 2rem;
}

.about-hero-since {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #0066CC;
  margin-bottom: 0.5rem;
}

.about-hero-desc {
  font-size: 0.95rem;
  font-weight: 400;
  color: #64748B;
  line-height: 1.65;
  max-width: 300px;
  margin-left: auto;
}

/* ── VIDEO ───────────────────────────────────────────── */
.about-video-section {
  width: 100%;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 20px 48px rgba(0,0,0,0.12);
  margin: 3rem 0;
}

.about-video-section video {
  width: 100%;
  height: 60vh;
  object-fit: cover;
  display: block;
}

/* ── BRIDGING / TEXT SPLIT ───────────────────────────── */
.split-section {
  background: #fff;
  padding: 5rem var(--space-8, 2rem);
}

.split-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}

.split-text-col {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 0.5rem;
}

/* ── DARK BAND ───────────────────────────────────────── */
.dark-band {
  background: #0F172A;
  padding: 5rem var(--space-8, 2rem);
}

.dark-band-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}

.dark-headline {
  font-size: clamp(1.875rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
  letter-spacing: -0.025em;
  margin: 0;
}

.dark-headline em {
  font-style: italic;
  color: #60A5FA;
}

.dark-body {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

/* ── PARTNERS ────────────────────────────────────────── */
.partners-about {
  background: #F8FAFC;
  padding: 5rem var(--space-8, 2rem);
  border-top: 1px solid #E2E8F0;
}

.partners-about-inner { max-width: 1200px; margin: 0 auto; }
.partners-about-head { margin-bottom: 3rem; }

.partner-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: #E2E8F0;
  border: 1px solid #E2E8F0;
  border-radius: 14px;
  overflow: hidden;
}

.partner-card {
  background: #F8FAFC;
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: background 0.25s, box-shadow 0.25s;
  text-decoration: none;
}

.partner-card:hover {
  background: #fff;
  box-shadow: inset 0 0 0 2px #0066CC;
}

.partner-card:hover .partner-logo-img {
  opacity: 1;
  transform: scale(1.05);
}

.partner-logo-img {
  height: 52px;
  width: auto;
  object-fit: contain;
  opacity: 0.55;
  transition: opacity 0.3s, transform 0.3s;
  filter: grayscale(1);
}

.partner-card:hover .partner-logo-img {
  filter: grayscale(0);
}

.partner-name-text {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #64748B;
  text-align: center;
  line-height: 1.5;
  transition: color 0.25s;
}

.partner-card:hover .partner-name-text { color: #0066CC; }

/* ── TIMELINE ────────────────────────────────────────── */
.timeline-section {
  background: #fff;
  padding: 5rem var(--space-8, 2rem);
}

.timeline-inner { max-width: 1200px; margin: 0 auto; }

.timeline-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
}

.timeline-controls { display: flex; gap: 8px; }

.t-ctrl-btn {
  width: 44px;
  height: 44px;
  border: 1.5px solid #E2E8F0;
  border-radius: 10px;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.25s, border-color 0.25s;
}

.t-ctrl-btn:hover {
  background: #0066CC;
  border-color: #0066CC;
}

.t-ctrl-btn:hover svg { stroke: #fff; }

.t-ctrl-btn svg {
  width: 16px;
  height: 16px;
  stroke: #64748B;
  fill: none;
  stroke-width: 2;
}

.timeline-track {
  display: flex;
  gap: 1.25rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  padding-bottom: 0.5rem;
}

.timeline-track::-webkit-scrollbar { display: none; }

.timeline-card {
  flex: 0 0 340px;
  background: #F8FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 14px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition: background 0.25s, box-shadow 0.25s, transform 0.25s;
}

.timeline-card:hover {
  background: #fff;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  transform: translateY(-3px);
}

.t-year {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #0066CC;
}

.t-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1E293B;
  line-height: 1.3;
  letter-spacing: -0.01em;
  margin: 0;
}

.t-img {
  width: 100%;
  aspect-ratio: 16/10;
  overflow: hidden;
  border-radius: 10px;
}

.t-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 400ms ease;
}

.timeline-card:hover .t-img img { transform: scale(1.04); }

.t-desc {
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.7;
  color: #64748B;
  margin: 0;
}

/* ── MISSION / VISION ────────────────────────────────── */
.mission-about {
  background: #0F172A;
  padding: 5rem var(--space-8, 2rem);
}

.mission-about-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}

.mission-about-left { position: sticky; top: 100px; }

.m-img {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  display: block;
  margin-top: 3rem;
  filter: brightness(0.7);
  border-radius: 14px;
}

.pillars { display: flex; flex-direction: column; }

.pillar {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.75rem 0;
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 1.25rem;
  align-items: start;
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}

.pillar.in { opacity: 1; transform: none; }
.pillar:last-child { border-bottom: 1px solid rgba(255, 255, 255, 0.08); }

.p-num {
  font-size: 1.75rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.08);
  line-height: 1;
  padding-top: 2px;
  letter-spacing: -0.03em;
}

.p-title {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 0.5rem;
}

.p-desc {
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.45);
  margin: 0;
}

/* ── RESPONSIVE ─────────────────────────────────────── */
@media (max-width: 768px) {
  .about-hero { padding: 3rem 1.5rem 2rem; }

  .about-hero-inner {
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 2rem;
  }

  .about-hero-right { text-align: left; padding-left: 0; }
  .about-hero-desc { margin-left: 0; }

  .about-video-section video { height: 40vh; }

  .split-inner { grid-template-columns: 1fr; gap: 2.5rem; }
  .dark-band-inner { grid-template-columns: 1fr; gap: 2rem; }
  .partner-grid { grid-template-columns: 1fr 1fr; }
  .mission-about-inner { grid-template-columns: 1fr; gap: 3rem; }
  .mission-about-left { position: static; }
  .timeline-head { flex-direction: column; align-items: flex-start; gap: 1.5rem; }

  .split-section { padding: 3.5rem 1.5rem; }
  .dark-band { padding: 3.5rem 1.5rem; }
  .partners-about { padding: 3.5rem 1.5rem; }
  .timeline-section { padding: 3.5rem 1.5rem; }
  .mission-about { padding: 3.5rem 1.5rem; }
}

@media (max-width: 520px) {
  .partner-grid { grid-template-columns: 1fr; }
  .about-hero-title { font-size: 2.75rem; }
}
</style>

<template>
  <div class="about-wrap">

    <!-- ── HERO ──────────────────────────────────────── -->
    <div class="about-hero">
      <div class="about-hero-inner">
        <div class="about-hero-left">
          <p class="label-tag" style="margin-bottom: 2rem">Who We Are</p>
          <h1 class="about-hero-title">
            {{ t.about || 'About' }}<br /><em>Eishi</em>
          </h1>
        </div>
        <div class="about-hero-right">
          <p class="about-hero-since">{{ t.since2018Label || 'Est. 2018' }}</p>
          <p class="about-hero-desc">{{ t.since2018Description }}</p>
        </div>
      </div>
    </div>

    <!-- ── VIDEO ─────────────────────────────────────── -->
    <div class="about-video-section">
      <video autoplay loop muted playsinline preload="metadata">
        <source src="/eishi/videos/3d Marketing.mp4" type="video/mp4" />
      </video>
    </div>

    <!-- ── BRIDGING / TEXT SPLIT ─────────────────────── -->
    <section class="split-section">
      <div class="split-inner">
        <div class="split-title-col">
          <p class="label-tag" style="margin-bottom: 2rem">Our Story</p>
          <h2 class="section-headline">
            {{ t.bridgingExpertise || 'Bridging Expertise,' }}<br />
            <em>{{ t.buildingOpportunities || 'Building Opportunities' }}</em>
          </h2>
        </div>
        <div class="split-text-col">
          <p class="body-copy">{{ t.aboutP2 }}</p>
          <p class="body-copy">{{ t.aboutP3 }}</p>
        </div>
      </div>
    </section>

    <!-- ── MISSION / VISION INTRO (dark band) ────────── -->
    <section class="dark-band">
      <div class="dark-band-inner">
        <div>
          <h2 class="dark-headline">{{ t.missionVision || 'Mission & Vision' }}</h2>
        </div>
        <div>
          <p class="dark-body" style="padding-top: 0.5rem">{{ t.aboutP4 }}</p>
        </div>
      </div>
    </section>

    <!-- ── WHY US ─────────────────────────────────────── -->
    <section class="split-section" style="background: #F8FAFC">
      <div class="split-inner">
        <div class="split-title-col">
          <p class="label-tag" style="margin-bottom: 2rem">Why Choose Us</p>
          <h2 class="section-headline">
            {{ t.whyUs || 'Why' }}<br /><em>Eishi?</em>
          </h2>
        </div>
        <div class="split-text-col">
          <p class="body-copy">{{ t.aboutP5 }}</p>
        </div>
      </div>
    </section>

    <!-- ── PARTNERS ───────────────────────────────────── -->
    <section class="partners-about">
      <div class="partners-about-inner">
        <div class="partners-about-head">
          <p class="label-tag" style="margin-bottom: 1rem">Affiliates</p>
          <h2 class="section-headline">{{ t.ourPartner || 'Our Partners' }}</h2>
        </div>
        <div class="partner-grid">
          <component
            :is="partner.link ? 'a' : 'div'"
            v-for="(partner, i) in partner_items"
            :key="i"
            :href="partner.link || undefined"
            target="_blank"
            rel="noopener"
            class="partner-card"
          >
            <img :src="partner.img" :alt="partner.title" class="partner-logo-img" loading="lazy" />
            <span class="partner-name-text">{{ partner.title }}</span>
          </component>
        </div>
      </div>
    </section>

    <!-- ── TIMELINE ───────────────────────────────────── -->
    <section class="timeline-section">
      <div class="timeline-inner">
        <div class="timeline-head">
          <div>
            <p class="label-tag" style="margin-bottom: 1rem">History</p>
            <h2 class="section-headline">{{ t.journeyThroughTheYears || 'Journey Through the Years' }}</h2>
          </div>
          <div class="timeline-controls">
            <button class="t-ctrl-btn" @click="scrollTimeline(-1)" aria-label="Previous">
              <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button class="t-ctrl-btn" @click="scrollTimeline(1)" aria-label="Next">
              <svg viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18"/></svg>
            </button>
          </div>
        </div>

        <div class="timeline-track" ref="timelineTrack">
          <div
            v-for="(item, i) in timeline_cards"
            :key="i"
            class="timeline-card"
          >
            <p class="t-year">{{ item.year }}</p>
            <h3 class="t-title">{{ item.title }}</h3>
            <div class="t-img">
              <img :src="item.image" :alt="item.title" loading="lazy" />
            </div>
            <p class="t-desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── MISSION PILLARS ────────────────────────────── -->
    <section class="mission-about">
      <div class="mission-about-inner">
        <div class="mission-about-left">
          <h2 class="dark-headline">
            {{ t.yourVission || 'Your Vision,' }}<br />
            <em>{{ t.ourMission || 'Our Mission' }}</em>
          </h2>
          <p class="dark-body" style="margin-top: 2rem; margin-bottom: 3rem">{{ t.missionDescription }}</p>
          <router-link to="/contact" class="btn-line" style="border-color: rgba(255,255,255,0.28); color: #fff; background: transparent">
            {{ t.moreAboutEishi || 'Get in Touch' }}
            <span class="btn-arr" />
          </router-link>
          <img
            src="/eishi/pexels-rickyrecap-1662159.webp"
            alt="Mission" class="m-img" loading="lazy"
          />
        </div>

        <div class="pillars" ref="pillarsRef">
          <div
            v-for="(item, i) in vission_cards" :key="i"
            class="pillar" :class="{ in: pillarsIn }"
            :style="{ transitionDelay: (i * 0.1) + 's' }"
          >
            <div class="p-num">{{ twoDigits(i + 1) }}</div>
            <div>
              <p class="p-title">{{ item.title }}</p>
              <p class="p-desc">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useLanguageStore } from '@/stores/languageStore'

export default {
  name: 'AboutView',

  data() {
    return {
      pillarsIn: false,
      pillarsObserver: null,
      isMobileView: false,

      partner_items: [
        { img: '/eishi/logo/epartners-logo.webp',        title: 'E.PARTNERS Co., Ltd.',                      link: 'https://epartners-offshore.com/' },
        { img: '/eishi/logo/meishin-group.webp',         title: 'Meishin Group Co., Ltd.',                   link: 'https://meishin-group.co.jp/' },
        { img: '/eishi/logo/hotel-osaka-logo.webp',      title: 'Hotel Osaka',                               link: 'https://www.hostelosaka.net/' },
        { img: '/eishi/logo/domoganlawoffice-logo.webp', title: 'Domogan & Associates Law Office',           link: '' },
        { img: '/eishi/logo/dcm-logo.webp',              title: 'The Law Firm of Domogan, Chan and Mabalot', link: '' },
      ],

      timeline_cards: [],
      vission_cards: [],
    }
  },

  computed: {
    ...mapState(useLanguageStore, ['t']),
  },

  watch: {
    t: {
      handler(newT) {
        this.vission_cards = [
          { title: newT.builtOnTrustTitle,          description: newT.builtOnTrustDescription },
          { title: newT.foodSecurityTitle,           description: newT.foodSecurityDescription },
          { title: newT.foreignInvestmentsTitle,     description: newT.foreignInvestmentsDescription },
          { title: newT.impactfulProjectsTitle,      description: newT.impactfulProjectsDescription },
          { title: newT.expandingFarmsTitle,         description: newT.expandingFarmsDescription },
          { title: newT.growthInnovationTitle,       description: newT.growthInnovationDescription },
        ]
        this.timeline_cards = [
          { year: '2018', title: newT.timeline2018Title || 'Company Founded',          image: '/eishi/pexels-rickyrecap-1662159.webp', description: newT.timeline2018Description || '' },
          { year: '2019', title: newT.timeline2019Title || 'First Agricultural Asset', image: '/eishi/feed_mill/images/new-hero.jpg',  description: newT.timeline2019Description || '' },
          { year: '2020', title: newT.timeline2020Title || 'Real Estate Expansion',    image: '/eishi/kalinga_residential/images/DJI_0591-min.webp', description: newT.timeline2020Description || '' },
          { year: '2021', title: newT.timeline2021Title || 'International Partnerships', image: '/eishi/cebu_condo/images/20240626_094216.webp', description: newT.timeline2021Description || '' },
          { year: '2023', title: newT.timeline2023Title || 'Pangasinan Development',   image: '/eishi/pangasinan_farm/images/dji_fly_20250311_151954_0036_1741678753512_photo.webp', description: newT.timeline2023Description || '' },
        ]
      },
      immediate: true, deep: true,
    },
  },

  mounted() {
    this.$nextTick(() => {
      if (this.$refs.pillarsRef) {
        this.pillarsObserver = new IntersectionObserver(
          ([entry]) => { if (entry.isIntersecting) { this.pillarsIn = true; this.pillarsObserver.disconnect() } },
          { threshold: 0.12 }
        )
        this.pillarsObserver.observe(this.$refs.pillarsRef)
      }
    })
    this.checkMobileView()
    window.addEventListener('resize', this.checkMobileView)
  },

  beforeUnmount() {
    if (this.pillarsObserver) this.pillarsObserver.disconnect()
    window.removeEventListener('resize', this.checkMobileView)
  },

  methods: {
    twoDigits(n) { return n < 10 ? '0' + n : String(n) },

    checkMobileView() {
      this.isMobileView = this.$vuetify.display.mobile
    },

    scrollTimeline(dir) {
      const el = this.$refs.timelineTrack
      if (!el) return
      el.scrollBy({ left: dir * 400, behavior: 'smooth' })
    },

    openPartnerLink(link) {
      if (link) window.open(link, '_blank', 'noopener')
    },
  },
}
</script>

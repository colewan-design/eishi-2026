<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,700;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

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

.about-wrap { font-family: var(--dm); background: var(--ivory); color: var(--ink); }
* { box-sizing: border-box; }

/* ── shared utilities ────────────────────────────────── */
.label-tag {
  font-size: 0.68rem; letter-spacing: 0.3em;
  text-transform: uppercase; color: var(--bronze);
  display: flex; align-items: center; gap: 12px;
}
.label-tag::before {
  content: ''; display: block;
  width: 26px; height: 1px; background: var(--bronze);
}
.section-headline {
  font-family: var(--fd);
  font-size: clamp(2.2rem, 4.5vw, 4rem);
  font-weight: 300; line-height: 1.1; color: var(--charcoal);
}
.section-headline em { font-style: italic; color: var(--mid); }
.body-copy {
  font-size: 0.97rem; font-weight: 300;
  line-height: 1.9; color: var(--mid);
}
.btn-line {
  display: inline-flex; align-items: center; gap: 14px;
  border: 1px solid var(--charcoal); color: var(--charcoal);
  background: transparent; font-family: var(--dm);
  font-size: 0.7rem; letter-spacing: 0.22em; text-transform: uppercase;
  text-decoration: none; padding: 15px 30px; cursor: pointer;
  transition: background 0.35s, color 0.35s; align-self: flex-start;
}
.btn-line:hover { background: var(--charcoal); color: var(--ivory); }
.btn-arr {
  width: 20px; height: 1px; background: currentColor;
  position: relative; flex-shrink: 0; transition: width 0.3s;
}
.btn-line:hover .btn-arr { width: 30px; }
.btn-arr::after {
  content: ''; position: absolute; right: 0; top: -3.5px;
  width: 7px; height: 7px;
  border-right: 1px solid currentColor; border-top: 1px solid currentColor;
  transform: rotate(45deg);
}

/* ── HERO / HEADER ───────────────────────────────────── */
.about-hero {
  background: var(--ivory);
  padding: 14rem 8vw 8vw;
  max-width: 1400px; margin: 0 auto;
}
.about-hero-inner {
  display: flex; justify-content: space-between; align-items: flex-end;
  border-bottom: 1px solid var(--linen); padding-bottom: 5vw;
}
.about-hero-left {}
.about-hero-title {
  font-family: var(--fd);
  font-size: clamp(4rem, 11vw, 10rem);
  font-weight: 300; line-height: 0.93; color: var(--charcoal);
  margin: 0 0 2rem;
}
.about-hero-title em { font-style: italic; color: var(--mid); }
.about-hero-right {
  text-align: right; flex-shrink: 0; padding-left: 4vw;
}
.about-hero-since {
  font-size: 0.65rem; letter-spacing: 0.3em;
  text-transform: uppercase; color: var(--bronze); margin-bottom: 0.6rem;
}
.about-hero-desc {
  font-size: 0.85rem; font-weight: 300;
  color: var(--mid); line-height: 1.7; max-width: 240px; margin-left: auto;
}

/* ── VIDEO ───────────────────────────────────────────── */
.about-video-section {
  width: 100%; overflow: hidden;
}
.about-video-section video {
  width: 100%; height: 70vh;
  object-fit: cover; display: block;
}

/* ── BRIDGING / TEXT SPLIT ───────────────────────────── */
.split-section {
  background: var(--ivory); padding: 10vw 8vw;
}
.split-inner {
  max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr; gap: 8vw; align-items: start;
}
.split-title-col {}
.split-text-col { display: flex; flex-direction: column; gap: 2rem; padding-top: 0.5rem; }

/* ── DARK BAND ───────────────────────────────────────── */
.dark-band {
  background: var(--charcoal); padding: 10vw 8vw;
}
.dark-band-inner {
  max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr; gap: 8vw; align-items: start;
}
.dark-label {
  font-size: 0.68rem; letter-spacing: 0.3em;
  text-transform: uppercase; color: var(--bronze-l);
  display: flex; align-items: center; gap: 12px; margin-bottom: 2rem;
}
.dark-label::before {
  content: ''; display: block; width: 26px; height: 1px; background: var(--bronze-l);
}
.dark-headline {
  font-family: var(--fd);
  font-size: clamp(2.2rem, 4.5vw, 4rem);
  font-weight: 300; line-height: 1.1; color: var(--ivory);
}
.dark-headline em { font-style: italic; color: var(--bronze-l); }
.dark-body {
  font-size: 0.97rem; font-weight: 300;
  line-height: 1.9; color: rgba(248,245,240,0.5);
}

/* ── PARTNERS ────────────────────────────────────────── */
.partners-about {
  background: var(--cream); padding: 10vw 8vw;
  border-top: 1px solid var(--linen);
}
.partners-about-inner { max-width: 1200px; margin: 0 auto; }
.partners-about-head { margin-bottom: 5rem; }
.partner-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 1px; background: var(--linen); border: 1px solid var(--linen);
}
.partner-card {
  background: var(--cream); padding: 3rem 2.5rem;
  display: flex; flex-direction: column; align-items: center; gap: 1.2rem;
  cursor: pointer; transition: background 0.3s;
  text-decoration: none;
}
.partner-card:hover { background: var(--ivory); }
.partner-card:hover .partner-logo-img { opacity: 1; transform: scale(1.04); }
.partner-logo-img {
  height: 52px; width: auto; object-fit: contain;
  opacity: 0.65; transition: opacity 0.3s, transform 0.35s;
}
.partner-name-text {
  font-size: 0.7rem; letter-spacing: 0.12em;
  text-transform: uppercase; color: var(--mid); text-align: center; line-height: 1.5;
}

/* ── TIMELINE ────────────────────────────────────────── */
.timeline-section {
  background: var(--ivory); padding: 10vw 8vw;
}
.timeline-inner { max-width: 1200px; margin: 0 auto; }
.timeline-head {
  display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 5rem;
}
.timeline-controls { display: flex; gap: 8px; }
.t-ctrl-btn {
  width: 44px; height: 44px; border: 1px solid var(--linen);
  background: transparent; cursor: pointer; display: flex;
  align-items: center; justify-content: center;
  transition: background 0.3s, border-color 0.3s;
}
.t-ctrl-btn:hover { background: var(--charcoal); border-color: var(--charcoal); }
.t-ctrl-btn:hover svg { stroke: var(--ivory); }
.t-ctrl-btn svg { width: 14px; height: 14px; stroke: var(--ink); fill: none; stroke-width: 2; }

.timeline-track {
  display: flex; gap: 2px;
  overflow-x: auto; scroll-behavior: smooth;
  background: var(--linen);
  scrollbar-width: none;
}
.timeline-track::-webkit-scrollbar { display: none; }
.timeline-card {
  flex: 0 0 380px; background: var(--ivory);
  padding: 2.5rem 2rem; display: flex; flex-direction: column; gap: 1.5rem;
  transition: background 0.3s;
}
.timeline-card:hover { background: var(--cream); }
.t-year {
  font-size: 0.62rem; letter-spacing: 0.3em;
  text-transform: uppercase; color: var(--bronze);
}
.t-title {
  font-family: var(--fd); font-size: 1.5rem;
  font-weight: 300; color: var(--charcoal); line-height: 1.2;
}
.t-img { width: 100%; aspect-ratio: 16/10; overflow: hidden; }
.t-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
.t-desc {
  font-size: 0.88rem; font-weight: 300;
  line-height: 1.75; color: var(--mid);
}

/* ── MISSION / VISION ────────────────────────────────── */
.mission-about {
  background: var(--charcoal); padding: 10vw 8vw;
}
.mission-about-inner {
  max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr; gap: 8vw; align-items: start;
}
.mission-about-left { position: sticky; top: 100px; }
.m-img {
  width: 100%; aspect-ratio: 4/5;
  object-fit: cover; display: block;
  margin-top: 3.5rem; filter: brightness(0.7);
}
.pillars { display: flex; flex-direction: column; }
.pillar {
  border-top: 1px solid rgba(248,245,240,0.1);
  padding: 2rem 0;
  display: grid; grid-template-columns: 52px 1fr;
  gap: 1.5rem; align-items: start;
  opacity: 0; transform: translateY(18px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}
.pillar.in { opacity: 1; transform: none; }
.pillar:last-child { border-bottom: 1px solid rgba(248,245,240,0.1); }
.p-num {
  font-family: var(--fd); font-size: 1.8rem;
  font-weight: 300; color: rgba(248,245,240,0.12); line-height: 1; padding-top: 2px;
}
.p-title {
  font-size: 0.71rem; font-weight: 500; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--ivory); margin-bottom: 0.55rem;
}
.p-desc {
  font-size: 0.87rem; font-weight: 300;
  line-height: 1.75; color: rgba(248,245,240,0.42);
}

/* ── RESPONSIVE ─────────────────────────────────────── */
@media (max-width: 900px) {
  .about-hero-inner { flex-direction: column; align-items: flex-start; gap: 2.5rem; }
  .about-hero-right { text-align: left; padding-left: 0; }
  .about-hero-desc { margin-left: 0; }
  .split-inner { grid-template-columns: 1fr; }
  .dark-band-inner { grid-template-columns: 1fr; }
  .partner-grid { grid-template-columns: 1fr 1fr; }
  .mission-about-inner { grid-template-columns: 1fr; }
  .mission-about-left { position: static; }
  .timeline-head { flex-direction: column; align-items: flex-start; gap: 2rem; }
}
@media (max-width: 520px) {
  .partner-grid { grid-template-columns: 1fr; }
  .about-hero-title { font-size: 3.5rem; }
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
          <p class="dark-label">Mission &amp; Vision</p>
          <h2 class="dark-headline">
            {{ t.missionVision || 'Mission &' }}<br />
            <em>Vision</em>
          </h2>
        </div>
        <div>
          <p class="dark-body" style="padding-top: 0.5rem">{{ t.aboutP4 }}</p>
        </div>
      </div>
    </section>

    <!-- ── WHY US ─────────────────────────────────────── -->
    <section class="split-section" style="background: var(--cream)">
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
          <router-link to="/contact" class="btn-line" style="border-color: rgba(248,245,240,0.3); color: var(--ivory)">
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
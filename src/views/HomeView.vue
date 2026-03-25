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

.home-wrap { font-family: var(--dm); background: var(--ivory); color: var(--ink); }
* { box-sizing: border-box; }

.hero {
  position: relative; height: 100vh;
  overflow: hidden; background: var(--charcoal);
}
.hero video {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover; z-index: 0; opacity: 0.55;
}
.hero-veil {
  position: absolute; inset: 0; z-index: 1;
  background: linear-gradient(to bottom, transparent 40%, rgba(248,245,240,0.94) 100%);
}
.hero-content {
  position: relative; z-index: 2;
  height: 100%;
  display: flex; flex-direction: column;
  justify-content: flex-end;
  padding: 0 8vw 7vh;
  max-width: 1400px; margin: 0 auto;
}
.hero-eyebrow {
  font-family: var(--dm); font-size: 0.68rem;
  letter-spacing: 0.34em; text-transform: uppercase;
  color: var(--bronze-l); margin-bottom: 1.4rem;
  opacity: 0; transform: translateY(12px);
  transition: opacity 0.9s 0.2s ease, transform 0.9s 0.2s ease;
}
.hero-eyebrow.in { opacity: 1; transform: none; }
.hero-title {
  font-family: var(--fd);
  font-size: clamp(3.8rem, 9.5vw, 9rem);
  font-weight: 300; color: #fff;
  line-height: 0.93; margin: 0 0 2rem;
  opacity: 0; transform: translateY(28px);
  transition: opacity 1.1s 0.45s ease, transform 1.1s 0.45s ease;
}
.hero-title em { font-style: italic; color: var(--bronze-l); }
.hero-title.in { opacity: 1; transform: none; }
.hero-bottom {
  display: flex; justify-content: space-between; align-items: flex-end;
  opacity: 0; transform: translateY(16px);
  transition: opacity 0.9s 0.85s ease, transform 0.9s 0.85s ease;
}
.hero-bottom.in { opacity: 1; transform: none; }
.hero-sub {
  font-size: 1rem; font-weight: 300;
  color: rgba(30,28,23,0.7);
  line-height: 1.8; max-width: 380px;
}
.hero-scroll {
  display: flex; flex-direction: column;
  align-items: center; gap: 8px;
  font-size: 0.62rem; letter-spacing: 0.28em;
  text-transform: uppercase; color: var(--mid);
}
.scroll-bar {
  width: 1px; height: 55px; background: var(--linen);
  animation: breathe 2.2s ease-in-out infinite;
}
@keyframes breathe {
  0%,100% { opacity: 0.4; transform: scaleY(1); }
  50%      { opacity: 1;   transform: scaleY(1.12); }
}

.ticker {
  background: var(--charcoal);
  overflow: hidden; padding: 13px 0; display: flex;
}
.ticker-track {
  display: flex; white-space: nowrap;
  animation: tick 30s linear infinite;
}
.ticker-track span {
  font-size: 0.65rem; letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.4);
  padding: 0 2.2rem;
}
.ticker-accent { color: var(--bronze) !important; }
@keyframes tick { from { transform: translateX(0); } to { transform: translateX(-50%); } }

.intro { background: var(--ivory); padding: 9vw 8vw; }
.intro-inner {
  max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: 0.85fr 1fr;
  gap: 8vw; align-items: center;
}
.intro-img-wrap { position: relative; }
.intro-img-wrap img {
  width: 100%; aspect-ratio: 3/4;
  object-fit: cover; display: block;
}
.intro-caption {
  background: var(--charcoal);
  padding: 1.1rem 1.4rem;
}
.intro-caption p {
  font-size: 0.63rem; letter-spacing: 0.28em;
  text-transform: uppercase; color: var(--bronze-l); margin: 0;
}
.intro-text { display: flex; flex-direction: column; gap: 2rem; }

.label-tag {
  font-size: 0.67rem; letter-spacing: 0.3em;
  text-transform: uppercase; color: var(--bronze);
  display: flex; align-items: center; gap: 12px;
}
.label-tag::before {
  content: ''; display: block;
  width: 26px; height: 1px; background: var(--bronze);
}
.headline {
  font-family: var(--fd);
  font-size: clamp(2rem, 3.8vw, 3.4rem);
  font-weight: 300; line-height: 1.2; color: var(--charcoal);
}
.headline em { font-style: italic; color: var(--mid); }
.body-text {
  font-size: 0.96rem; font-weight: 300;
  line-height: 1.9; color: var(--mid); max-width: 460px;
}
.btn-line {
  display: inline-flex; align-items: center; gap: 14px;
  border: 1px solid var(--charcoal);
  color: var(--charcoal); background: transparent;
  font-family: var(--dm); font-size: 0.7rem;
  letter-spacing: 0.22em; text-transform: uppercase;
  text-decoration: none; padding: 15px 30px; cursor: pointer;
  transition: background 0.35s, color 0.35s; align-self: flex-start;
}
.btn-line:hover { background: var(--charcoal); color: var(--ivory); }
.btn-line-light {
  display: inline-flex; align-items: center; gap: 14px;
  border: 1px solid rgba(248,245,240,0.3);
  color: var(--ivory); background: transparent;
  font-family: var(--dm); font-size: 0.7rem;
  letter-spacing: 0.22em; text-transform: uppercase;
  text-decoration: none; padding: 15px 30px; cursor: pointer;
  transition: background 0.35s, border-color 0.35s; align-self: flex-start;
}
.btn-line-light:hover {
  background: rgba(248,245,240,0.08);
  border-color: rgba(248,245,240,0.65);
}
.btn-arr {
  width: 20px; height: 1px; background: currentColor;
  position: relative; flex-shrink: 0; transition: width 0.3s;
}
.btn-line:hover .btn-arr,
.btn-line-light:hover .btn-arr { width: 30px; }
.btn-arr::after {
  content: ''; position: absolute; right: 0; top: -3.5px;
  width: 7px; height: 7px;
  border-right: 1px solid currentColor;
  border-top: 1px solid currentColor;
  transform: rotate(45deg);
}

.props-section { background: var(--cream); }
.props-head {
  max-width: 1200px; margin: 0 auto;
  padding: 7vw 8vw 3.5rem;
  display: flex; justify-content: space-between; align-items: flex-end;
  border-bottom: 1px solid var(--linen);
}
.props-count {
  font-family: var(--fd);
  font-size: 6rem; font-weight: 300; color: var(--linen); line-height: 1;
}
.prop-item {
  max-width: 1200px; margin: 0 auto; padding: 0 8vw;
  display: grid; grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid var(--linen);
  cursor: pointer; overflow: hidden; transition: background 0.3s;
}
.prop-item:hover { background: var(--linen); }
.prop-item:hover .pi-img img { transform: scale(1.06); }
.prop-item--r .prop-text { order: 2; }
.prop-item--r .pi-img  { order: 1; }
.prop-text {
  padding: 5vw 4vw 5vw 0;
  display: flex; flex-direction: column; justify-content: center;
}
.prop-item--r .prop-text { padding: 5vw 0 5vw 4vw; }
.prop-num {
  font-family: var(--fd); font-size: 4rem;
  font-weight: 300; color: var(--linen); line-height: 1; margin-bottom: 1rem;
}
.prop-cat {
  font-size: 0.64rem; letter-spacing: 0.28em;
  text-transform: uppercase; color: var(--bronze); margin-bottom: 0.75rem;
}
.prop-name {
  font-family: var(--fd); font-size: clamp(1.7rem, 2.8vw, 2.5rem);
  font-weight: 300; color: var(--charcoal);
  line-height: 1.15; margin-bottom: 2rem;
}
.prop-metas { display: flex; flex-direction: column; gap: 0.7rem; }
.prop-meta-row { display: flex; gap: 1.5rem; align-items: baseline; }
.mk { font-size: 0.64rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--pale); min-width: 68px; }
.mv { font-size: 0.88rem; color: var(--mid); font-weight: 300; }
.prop-cta {
  margin-top: 2.5rem; display: inline-flex; align-items: center; gap: 10px;
  font-size: 0.67rem; letter-spacing: 0.22em;
  text-transform: uppercase; color: var(--bronze);
  border-bottom: 1px solid var(--bronze-xl); padding-bottom: 3px;
  align-self: flex-start; transition: gap 0.3s, border-color 0.3s;
}
.prop-item:hover .prop-cta { gap: 18px; border-color: var(--bronze); }
.pi-img { overflow: hidden; }
.pi-img img {
  width: 100%; height: 100%; object-fit: cover;
  display: block; min-height: 420px;
  transition: transform 0.85s cubic-bezier(0.25,0.46,0.45,0.94);
}

.mission { background: var(--charcoal); padding: 10vw 8vw; }
.mission-inner {
  max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 8vw; align-items: start;
}
.mission-left { position: sticky; top: 100px; }
.m-eyebrow {
  font-size: 0.67rem; letter-spacing: 0.3em;
  text-transform: uppercase; color: var(--bronze-l);
  display: flex; align-items: center; gap: 12px; margin-bottom: 2.5rem;
}
.m-eyebrow::before {
  content: ''; display: block;
  width: 26px; height: 1px; background: var(--bronze-l);
}
.m-headline {
  font-family: var(--fd);
  font-size: clamp(2.5rem, 5vw, 5rem);
  font-weight: 300; color: var(--ivory);
  line-height: 1.05; margin-bottom: 2.5rem;
}
.m-headline em { font-style: italic; color: var(--bronze-l); }
.m-body {
  font-size: 0.96rem; font-weight: 300;
  line-height: 1.9; color: rgba(248,245,240,0.5);
  max-width: 420px; margin-bottom: 3rem;
}
.m-img {
  width: 100%; aspect-ratio: 4/5;
  object-fit: cover; display: block;
  margin-top: 3.5rem; filter: brightness(0.72);
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
  font-family: var(--fd); font-size: 1.8rem; font-weight: 300;
  color: rgba(248,245,240,0.12); line-height: 1; padding-top: 2px;
}
.p-title {
  font-size: 0.71rem; font-weight: 500;
  letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--ivory); margin-bottom: 0.55rem;
}
.p-desc {
  font-size: 0.87rem; font-weight: 300;
  line-height: 1.75; color: rgba(248,245,240,0.42);
}

.how { background: var(--ivory); padding: 10vw 8vw; }
.how-inner { max-width: 1200px; margin: 0 auto; }
.how-head { margin-bottom: 5rem; }
.how-grid {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 1px; background: var(--linen); border: 1px solid var(--linen);
}
.how-step {
  background: var(--ivory); padding: 2.5rem 2rem;
  display: flex; flex-direction: column; transition: background 0.3s;
}
.how-step:hover { background: var(--cream); }
.hs-num {
  font-family: var(--fd); font-size: 3.5rem;
  font-weight: 300; color: var(--linen); line-height: 1; margin-bottom: 2rem;
}
.hs-img { width: 100%; aspect-ratio: 4/3; overflow: hidden; margin-bottom: 1.5rem; }
.hs-img img {
  width: 100%; height: 100%; object-fit: cover; display: block;
  filter: brightness(0.88); transition: transform 0.7s ease, filter 0.4s;
}
.how-step:hover .hs-img img { transform: scale(1.05); filter: brightness(1); }
.hs-bar { width: 28px; height: 1px; background: var(--bronze); margin-bottom: 1.1rem; }
.hs-title {
  font-family: var(--fd); font-size: 1.22rem;
  font-weight: 300; color: var(--charcoal); margin-bottom: 0.7rem;
}
.hs-desc {
  font-size: 0.83rem; font-weight: 300;
  line-height: 1.7; color: var(--mid); margin-top: auto;
}

@media (max-width: 900px) {
  .intro-inner { grid-template-columns: 1fr; }
  .intro-aside { display: none; }
  .prop-item { grid-template-columns: 1fr; }
  .prop-item--r .prop-text { order: 1; padding: 5vw 0; }
  .prop-item--r .pi-img { order: 2; }
  .pi-img img { min-height: 260px; }
  .prop-text { padding: 5vw 0 3vw; }
  .mission-inner { grid-template-columns: 1fr; }
  .mission-left { position: static; }
  .how-grid { grid-template-columns: 1fr 1fr; }
  .props-head { flex-direction: column; align-items: flex-start; gap: 1rem; }
  .hero-bottom { flex-direction: column; align-items: flex-start; gap: 2rem; }
}
@media (max-width: 520px) {
  .how-grid { grid-template-columns: 1fr; }
  .hero-title { font-size: 3.2rem; }
}
</style>

<template>
  <div class="home-wrap">

    <!-- HERO -->
    <section class="hero">
      <video v-if="$route.name === 'home'" autoplay loop muted playsinline preload="metadata">
        <source src="/eishi/videos/Benguet.mp4" type="video/mp4" />
      </video>
      <div class="hero-veil" />
      <div class="hero-content">
        <p class="hero-eyebrow" :class="{ in: ready }">
          {{ t.webTagline || 'Philippine Holdings &amp; Investments' }}
        </p>
        <h1 class="hero-title" :class="{ in: ready }">
          {{ t.welcome || 'Eishi' }}<br /><em></em>
        </h1>
        <div class="hero-bottom" :class="{ in: ready }">
          <p class="hero-sub">
            {{ t.missionDescription || 'A diversified holding company rooted in agriculture, real estate, and community development across the Philippine archipelago.' }}
          </p>
          <div class="hero-scroll">
            <div class="scroll-bar" />
            <span>Scroll</span>
          </div>
        </div>
      </div>
    </section>

    <!-- TICKER -->
    <div class="ticker" aria-hidden="true">
      <div class="ticker-track">
        <span v-for="item in tickerFull" :key="item.k">
          <span :class="{ 'ticker-accent': item.accent }">{{ item.text }}</span>
        </span>
      </div>
    </div>

    <!-- INTRO -->
    <section class="intro">
      <div class="intro-inner">
        <div class="intro-aside">
          <div class="intro-img-wrap">
            <img src="/eishi/pexels-rickyrecap-1662159.webp" alt="Eishi Group" loading="lazy" />
          </div>
          <div class="intro-caption">
            <p>Est. Philippines</p>
          </div>
        </div>
        <div class="intro-text">
          <span class="label-tag">About Eishi</span>
          <h2 class="headline">
            {{ t.homeParagraph1 || 'Building legacies across the Philippine archipelago.' }}
          </h2>
          <p class="body-text">
            Eishi Group is a diversified holding company committed to sustainable agriculture,
            responsible real estate, and meaningful partnerships that uplift communities.
          </p>
          <router-link to="/about" class="btn-line">
            {{ t.moreAboutEishi || 'Discover our story' }}
            <span class="btn-arr" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- PROPERTIES -->
    <section class="props-section">
      <div class="props-head">
        <div>
          <p class="label-tag" style="margin-bottom:1rem">Our Business Holdings</p>
          <h2 class="headline" style="margin:0">{{ t.ourBusiness || 'Portfolio' }}</h2>
        </div>
        <div class="props-count">06</div>
      </div>

      <div
        v-for="(p, i) in properties"
        :key="p.route"
        class="prop-item"
        :class="{ 'prop-item--r': i % 2 !== 0 }"
        @click="$router.push(p.route)"
      >
        <div class="prop-text">
          <div class="prop-num">{{ twoDigits(i + 1) }}</div>
          <p class="prop-cat">{{ p.tag }}</p>
          <h3 class="prop-name">{{ p.name }}</h3>
          <div class="prop-metas">
            <div class="prop-meta-row">
              <span class="mk">{{ t.location || 'Location' }}</span>
              <span class="mv">{{ p.location }}</span>
            </div>
            <div v-if="p.detail" class="prop-meta-row">
              <span class="mk">{{ p.detailLabel }}</span>
              <span class="mv">{{ p.detail }}</span>
            </div>
          </div>
          <span class="prop-cta">{{ t.viewProperty || 'View Details' }} →</span>
        </div>
        <div class="pi-img">
          <img :src="p.img" :alt="p.name" loading="lazy" />
        </div>
      </div>
    </section>

    <!-- MISSION / VISION -->
    <section class="mission">
      <div class="mission-inner">
        <div class="mission-left">
          <p class="m-eyebrow">Mission &amp; Vision</p>
          <h2 class="m-headline">
            {{ t.yourVission || 'Your Vision,' }}<br />
            <em>{{ t.ourMission || 'Our Mission' }}</em>
          </h2>
          <p class="m-body">{{ t.missionDescription }}</p>
          <router-link to="/about" class="btn-line-light">
            {{ t.moreAboutEishi || 'Our story' }}
            <span class="btn-arr" />
          </router-link>
          <img
            src="/eishi/pexels-rickyrecap-1662159.webp"
            alt="Mission" class="m-img" loading="lazy"
          />
        </div>

        <div class="pillars" ref="pillarsRef">
          <div
            v-for="(card, i) in cards" :key="i"
            class="pillar" :class="{ in: pillarsIn }"
            :style="{ transitionDelay: (i * 0.1) + 's' }"
          >
            <div class="p-num">{{ twoDigits(i + 1) }}</div>
            <div>
              <p class="p-title">{{ card.title }}</p>
              <p class="p-desc">{{ card.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="how">
      <div class="how-inner">
        <div class="how-head">
          <span class="label-tag" style="margin-bottom:1rem">Process</span>
          <h2 class="headline" style="margin:0">How Eishi<br />Works</h2>
        </div>
        <div class="how-grid">
          <div v-for="(step, i) in eishi_steps" :key="i" class="how-step">
            <div class="hs-num">{{ twoDigits(i + 1) }}</div>
            <div class="hs-img">
              <img :src="step.img" :alt="step.title" loading="lazy" />
            </div>
            <div class="hs-bar" />
            <h3 class="hs-title">{{ step.title }}</h3>
            <p class="hs-desc">{{ step.description }}</p>
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
  name: 'HomeView',

  data() {
    return {
      ready: false,
      pillarsIn: false,
      pillarsObserver: null,

      tickerItems: [
        'Feed Mill', 'Car Rental', 'Poultry Farm',
        'Pangasinan Farm', 'Residential Lands', 'Cebu Condominium',
      ],

      eishi_steps: [
        { img: '/images/browse.webp',  title: 'Browse Listings',  description: 'Explore all available properties and find the perfect fit for you.' },
        { img: '/images/connect.webp', title: 'Connect with Us',  description: 'Reach out to our team for details and a free consultation.' },
        { img: '/images/visit.webp',   title: 'Visit & Verify',   description: 'See the property in person and verify all details firsthand.' },
        { img: '/images/partner.webp', title: 'Become a Partner', description: 'Join our network and enjoy benefits as a trusted partner.' },
      ],

      cards: [],
    }
  },

  computed: {
    ...mapState(useLanguageStore, ['t']),

    tickerFull() {
      const base = this.tickerItems.flatMap((text, i) => [
        { k: 'a' + i, text, accent: false },
        { k: 'd' + i, text: '◆', accent: true },
      ])
      return [...base, ...base.map(x => ({ ...x, k: 'dup' + x.k }))]
    },

    properties() {
      return [
        { route: '/business_holdings/feed_mill',                    tag: 'Agriculture', name: this.t.feedMillDetails?.businessNameValue || 'Feed Mill',         location: this.t.sanJoseMunicipality || 'San Jose, Batangas',     img: '/eishi/feed_mill/images/new-hero.jpg' },
        { route: '/business_holdings/car_rental',                   tag: 'Transport',   name: this.t.carRental || 'Car Rental',                                 location: this.t.carRentalLocation || 'Philippines',             img: '/eishi/car_rental/images/car01.webp' },
        { route: '/business_holdings/batangas/poultry_farm',        tag: 'Agriculture', name: this.t.poultryFarm || 'Poultry Farm',                             location: this.t.sanJoseMunicipality || 'San Jose, Batangas',     img: '/eishi/batangas_tokyo_farm/images/hero.jpg' },
        { route: '/business_holdings/pangasinan_farm',              tag: 'Real Estate', name: this.t.pangasinanFarm || 'Pangasinan Farm',                       location: this.t.balungaoMunicipality || 'Balungao, Pangasinan', detailLabel: this.t.sqm || 'SQM',       detail: '240,500', img: '/eishi/pangasinan_farm/images/dji_fly_20250311_151954_0036_1741678753512_photo.webp' },
        { route: '/business_holdings/kalinga_residential',          tag: 'Real Estate', name: this.t.residentialLands || 'Residential Lands',                  location: this.t.tabukKalinganProvince || 'Tabuk, Kalinga',      detailLabel: this.t.lot || 'Lots',      detail: '42',      img: '/eishi/kalinga_residential/images/DJI_0591-min.webp' },
        { route: '/business_holdings/cebu_condominium',             tag: 'Real Estate', name: this.t.cebuCondo || 'Cebu Condominium',                           location: this.t.cebuDescription || 'Cebu City',                 detailLabel: this.t.residences || 'Units', detail: '1,016', img: '/eishi/cebu_condo/images/20240626_094216.webp' },
      ]
    },
  },

  watch: {
    t: {
      handler(newT) {
        this.cards = [
          { title: newT.builtOnTrustTitle,       description: newT.builtOnTrustDescription },
          { title: newT.foodSecurityTitle,        description: newT.foodSecurityDescription },
          { title: newT.foreignInvestmentsTitle,  description: newT.foreignInvestmentsDescription },
          { title: newT.impactfulProjectsTitle,   description: newT.impactfulProjectsDescription },
          { title: newT.expandingFarmsTitle,      description: newT.expandingFarmsDescription },
          { title: newT.growthInnovationTitle,    description: newT.growthInnovationDescription },
        ]
      },
      immediate: true, deep: true,
    },
  },

  mounted() {
    this.$nextTick(() => {
      setTimeout(() => { this.ready = true }, 180)
      if (this.$refs.pillarsRef) {
        this.pillarsObserver = new IntersectionObserver(
          ([entry]) => { if (entry.isIntersecting) { this.pillarsIn = true; this.pillarsObserver.disconnect() } },
          { threshold: 0.12 }
        )
        this.pillarsObserver.observe(this.$refs.pillarsRef)
      }
    })
  },

  beforeUnmount() {
    if (this.pillarsObserver) this.pillarsObserver.disconnect()
  },

  methods: {
    twoDigits(n) { return n < 10 ? '0' + n : String(n) },
  },
}
</script>
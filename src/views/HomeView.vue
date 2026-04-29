<style>
.home-wrap {
  font-family: 'Inter', sans-serif;
  background: var(--color-bg);
  color: var(--color-text-primary);
}

* { box-sizing: border-box; }

/* ──────────────────────────────────────────────────────────
   HERO SECTION
   ────────────────────────────────────────────────────────── */

.hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: #0F172A;
}

.hero video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 0.4;
}

.hero-veil {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(to bottom, rgba(15,23,42,0.3) 40%, rgba(15,23,42,0.85) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 var(--space-8) 5rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.hero-eyebrow {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #60A5FA;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 10px;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 800ms cubic-bezier(0.4, 0.0, 0.2, 1) 200ms,
              transform 800ms cubic-bezier(0.4, 0.0, 0.2, 1) 200ms;
}

.hero-eyebrow::before {
  content: '';
  display: block;
  width: 28px;
  height: 2px;
  background: #60A5FA;
  border-radius: 1px;
}

.hero-eyebrow.in {
  opacity: 1;
  transform: none;
}

.hero-title {
  font-size: clamp(2.75rem, 9vw, 5.5rem);
  font-weight: 700;
  color: #fff;
  line-height: 1.08;
  margin: 0 0 1.75rem 0;
  letter-spacing: -0.03em;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 900ms cubic-bezier(0.4, 0.0, 0.2, 1) 400ms,
              transform 900ms cubic-bezier(0.4, 0.0, 0.2, 1) 400ms;
}

.hero-title em {
  font-style: italic;
  background: linear-gradient(135deg, #60A5FA, #38BDF8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-title.in {
  opacity: 1;
  transform: none;
}

.hero-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 3rem;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 800ms cubic-bezier(0.4, 0.0, 0.2, 1) 800ms,
              transform 800ms cubic-bezier(0.4, 0.0, 0.2, 1) 800ms;
}

.hero-bottom.in {
  opacity: 1;
  transform: none;
}

.hero-sub {
  font-size: 1.05rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.7;
  max-width: 480px;
}

.hero-scroll {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  flex-shrink: 0;
}

.scroll-bar {
  width: 2px;
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 1px;
  animation: scroll-pulse 2s ease-in-out infinite;
}

@keyframes scroll-pulse {
  0%, 100% { opacity: 0.3; height: 32px; }
  50% { opacity: 1; height: 42px; }
}

/* ──────────────────────────────────────────────────────────
   TICKER SECTION
   ────────────────────────────────────────────────────────── */

.ticker {
  background: #0F172A;
  overflow: hidden;
  padding: 1.25rem 0;
  display: flex;
  border-top: 1px solid rgba(255,255,255,0.06);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.ticker-track {
  display: flex;
  white-space: nowrap;
  animation: ticker-scroll 40s linear infinite;
}

.ticker-track span {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.25);
  padding: 0 2rem;
  flex-shrink: 0;
}

.ticker-accent {
  color: #0066CC !important;
}

@keyframes ticker-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* ──────────────────────────────────────────────────────────
   SHARED BUTTON STYLES
   ────────────────────────────────────────────────────────── */

.btn-line {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  border: 2px solid var(--color-primary, #0066CC);
  color: var(--color-primary, #0066CC);
  background: transparent;
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 13px 28px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.25s, color 0.25s, transform 0.2s;
  align-self: flex-start;
}

.btn-line:hover {
  background: var(--color-primary, #0066CC);
  color: #fff;
  transform: translateY(-1px);
}

.btn-line-light {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  border: 1.5px solid rgba(255, 255, 255, 0.28);
  color: rgba(255, 255, 255, 0.88);
  background: transparent;
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 13px 28px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.25s, border-color 0.25s, transform 0.2s;
  align-self: flex-start;
}

.btn-line-light:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.55);
  transform: translateY(-1px);
}

.btn-arr {
  width: 18px;
  height: 1.5px;
  background: currentColor;
  position: relative;
  flex-shrink: 0;
  transition: width 0.25s ease;
}

.btn-line:hover .btn-arr,
.btn-line-light:hover .btn-arr { width: 26px; }

.btn-arr::after {
  content: '';
  position: absolute;
  right: 0;
  top: -3.5px;
  width: 7px;
  height: 7px;
  border-right: 1.5px solid currentColor;
  border-top: 1.5px solid currentColor;
  transform: rotate(45deg);
}

/* ──────────────────────────────────────────────────────────
   INTRO SECTION
   ────────────────────────────────────────────────────────── */

.intro {
  background: var(--color-bg);
  padding: 5rem var(--space-8);
}

.intro-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: center;
}

.intro-img-wrap {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.12);
}

.intro-img-wrap img {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  display: block;
  transition: transform 500ms ease;
}

.intro-img-wrap:hover img {
  transform: scale(1.03);
}

.intro-caption {
  background: #0F172A;
  padding: 0.875rem 1.25rem;
  border-radius: 0 0 16px 16px;
}

.intro-caption p {
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #60A5FA;
  margin: 0;
  text-align: center;
}

.intro-text {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.label-tag {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-primary, #0066CC);
  display: flex;
  align-items: center;
  gap: 10px;
}

.label-tag::before {
  content: '';
  display: block;
  width: 28px;
  height: 2px;
  background: var(--color-primary, #0066CC);
  border-radius: 1px;
}

.headline {
  font-size: clamp(1.875rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--color-text-primary, #1E293B);
  margin: 0;
  letter-spacing: -0.02em;
}

.headline em {
  font-style: italic;
  color: var(--color-secondary, #00B4D8);
}

.body-text {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75;
  color: var(--color-text-secondary, #64748B);
  max-width: 500px;
  margin: 0;
}

/* ──────────────────────────────────────────────────────────
   PROPERTIES SECTION
   ────────────────────────────────────────────────────────── */

.props-section {
  background: #F8FAFC;
  padding: 4rem 0;
}

.props-head {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-8) 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 2px solid #E2E8F0;
}

.props-count {
  font-size: 4.5rem;
  font-weight: 700;
  color: #E2E8F0;
  line-height: 1;
  letter-spacing: -0.04em;
}

.prop-item {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem var(--space-8);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  border-bottom: 1px solid #E2E8F0;
  cursor: pointer;
  overflow: hidden;
  transition: background 200ms ease;
}

.prop-item:hover {
  background: #EFF6FF;
}

.prop-item:hover .pi-img img {
  transform: scale(1.04);
}

.prop-item--r {
  grid-auto-flow: dense;
}

.prop-item--r .prop-text {
  order: 2;
}

.prop-item--r .pi-img {
  order: 1;
}

.prop-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.prop-num {
  font-size: 3rem;
  font-weight: 700;
  color: #E2E8F0;
  line-height: 1;
  letter-spacing: -0.04em;
}

.prop-cat {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #0066CC;
  background: #EFF6FF;
  padding: 4px 10px;
  border-radius: 4px;
  align-self: flex-start;
}

.prop-name {
  font-size: clamp(1.375rem, 2.5vw, 2rem);
  font-weight: 700;
  color: #1E293B;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin: 0;
}

.prop-metas {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.prop-meta-row {
  display: flex;
  gap: 1.25rem;
  align-items: baseline;
}

.mk {
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #94A3B8;
  min-width: 72px;
}

.mv {
  font-size: 0.9rem;
  color: #64748B;
  font-weight: 500;
}

.prop-cta {
  margin-top: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0066CC;
  border-bottom: 2px solid #BFDBFE;
  padding-bottom: 3px;
  transition: all 200ms ease;
  align-self: flex-start;
}

.prop-item:hover .prop-cta {
  gap: 14px;
  border-color: #0066CC;
}

.pi-img {
  overflow: hidden;
  border-radius: 14px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.pi-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  min-height: 340px;
  transition: transform 600ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* ──────────────────────────────────────────────────────────
   MISSION SECTION
   ────────────────────────────────────────────────────────── */

.mission {
  background: #0F172A;
  color: #fff;
  padding: 5rem var(--space-8);
}

.mission-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}

.mission-left {
  position: sticky;
  top: 100px;
}

.m-eyebrow {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #60A5FA;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1.5rem;
}

.m-eyebrow::before {
  content: '';
  display: block;
  width: 28px;
  height: 2px;
  background: #60A5FA;
  border-radius: 1px;
}

.m-headline {
  font-size: clamp(2rem, 4.5vw, 3.25rem);
  font-weight: 700;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 1.5rem;
  letter-spacing: -0.025em;
}

.m-headline em {
  font-style: italic;
  color: #60A5FA;
}

.m-body {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.55);
  max-width: 480px;
  margin-bottom: 2rem;
}

.m-img {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  display: block;
  margin-top: 2.5rem;
  border-radius: 14px;
  opacity: 0.75;
}

.pillars {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.pillar {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.75rem 0;
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 1.25rem;
  align-items: start;
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 600ms ease 0s, transform 600ms ease 0s;
}

.pillar.in {
  opacity: 1;
  transform: none;
}

.pillar:last-child {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.p-num {
  font-size: 1.75rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.08);
  line-height: 1;
  padding-top: 2px;
  letter-spacing: -0.03em;
}

.p-title {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 0.5rem;
}

.p-desc {
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.45);
}

/* ──────────────────────────────────────────────────────────
   HOW SECTION
   ────────────────────────────────────────────────────────── */

.how {
  background: var(--color-bg);
  padding: 5rem var(--space-8);
}

.how-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.how-head {
  margin-bottom: 3rem;
}

.how-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
}

.how-step {
  background: var(--color-white, #fff);
  border: 1px solid #E2E8F0;
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: all 250ms ease;
  cursor: pointer;
}

.how-step:hover {
  border-color: #0066CC;
  box-shadow: 0 12px 32px rgba(0, 102, 204, 0.12);
  transform: translateY(-4px);
}

.hs-num {
  font-size: 2.25rem;
  font-weight: 700;
  color: #E2E8F0;
  line-height: 1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.04em;
}

.hs-img {
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  margin-bottom: 1.5rem;
  border-radius: 10px;
}

.hs-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: brightness(0.95);
  transition: transform 400ms ease, filter 300ms ease;
}

.how-step:hover .hs-img img {
  transform: scale(1.05);
  filter: brightness(1);
}

.hs-bar {
  width: 28px;
  height: 3px;
  background: #0066CC;
  margin-bottom: 1rem;
  border-radius: 2px;
}

.hs-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1E293B;
  margin-bottom: 0.625rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.hs-desc {
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.65;
  color: #64748B;
  margin-top: auto;
}

/* ──────────────────────────────────────────────────────────
   RESPONSIVE
   ────────────────────────────────────────────────────────── */

@media (max-width: 768px) {
  .intro-inner {
    grid-template-columns: 1fr;
  }

  .intro-aside { display: none; }

  .prop-item {
    grid-template-columns: 1fr;
    padding: 2rem var(--space-4);
  }

  .prop-item--r .prop-text { order: 1; }
  .prop-item--r .pi-img { order: 2; }

  .pi-img img { min-height: 260px; }

  .mission-inner {
    grid-template-columns: 1fr;
  }

  .mission-left {
    position: static;
  }

  .how-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .hero-bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .props-head {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .intro { padding: 3rem var(--space-4); }
  .how { padding: 3rem var(--space-4); }
  .mission { padding: 3rem var(--space-4); }
}

@media (max-width: 480px) {
  .how-grid { grid-template-columns: 1fr; }
  .hero-title { font-size: 2.25rem; }
  .headline { font-size: 1.625rem; }
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

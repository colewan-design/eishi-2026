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
}

.kal-page { font-family: 'DM Sans', sans-serif; background: var(--ivory); color: var(--ink); }
* { box-sizing: border-box; }

/* ── HERO ── */
.kal-hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: var(--charcoal);
}
.kal-hero-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  transform: scale(1.06);
  transition: transform 8s ease;
}
.kal-hero-img.ready { transform: scale(1); }
.kal-hero-veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(28,26,23,0.25) 0%, rgba(248,245,240,0.96) 100%);
}
.kal-hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 8vw 8vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.kal-eyebrow {
  font-size: 0.67rem;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  color: var(--bronze-l);
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1.4rem;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.9s 0.2s ease, transform 0.9s 0.2s ease;
}
.kal-eyebrow::before {
  content: '';
  display: block;
  width: 26px;
  height: 1px;
  background: var(--bronze-l);
}
.kal-eyebrow.in { opacity: 1; transform: none; }
.kal-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(3.5rem, 8vw, 7.5rem);
  font-weight: 300;
  color: var(--ivory);
  line-height: 0.95;
  margin: 0 0 2rem;
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 1.1s 0.4s ease, transform 1.1s 0.4s ease;
}
.kal-title em { font-style: italic; color: var(--bronze-l); }
.kal-title.in { opacity: 1; transform: none; }
.kal-hero-meta {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.8s 0.8s ease, transform 0.8s 0.8s ease;
}
.kal-hero-meta.in { opacity: 1; transform: none; }
.kal-location {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  font-weight: 300;
  color: var(--mid);
}
.kal-location-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--bronze);
  flex-shrink: 0;
}
.kal-scroll {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.6rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--pale);
  margin-left: auto;
}
.kal-scroll-bar {
  width: 1px;
  height: 45px;
  background: var(--linen);
  animation: breathe 2.2s ease-in-out infinite;
}
@keyframes breathe {
  0%,100% { opacity: 0.4; }
  50%      { opacity: 1; }
}

/* ── INTRO ── */
.kal-intro {
  max-width: 1200px;
  margin: 0 auto;
  padding: 7vw 8vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6vw;
  align-items: start;
}
.kal-label-tag {
  font-size: 0.67rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--bronze);
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 2rem;
}
.kal-label-tag::before {
  content: '';
  display: block;
  width: 26px;
  height: 1px;
  background: var(--bronze);
}
.kal-paragraphs { display: flex; flex-direction: column; gap: 1.4rem; }
.kal-p {
  font-size: 0.94rem;
  font-weight: 300;
  line-height: 1.95;
  color: var(--mid);
}

/* ── DETAILS TABLE ── */
.kal-table { display: flex; flex-direction: column; }
.kal-row {
  padding: 14px 0;
  border-bottom: 1px solid var(--linen);
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.kal-row-lbl {
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--pale);
}
.kal-row-val {
  font-size: 0.92rem;
  font-weight: 300;
  color: var(--charcoal);
}
.kal-row-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0 1px;
  background: var(--linen);
  border-bottom: 1px solid var(--linen);
}
.kal-row-group .kal-row {
  background: var(--ivory);
  border-bottom: none;
  padding: 14px 12px;
}

/* ── AERIAL GALLERY ── */
.kal-gallery-section {
  background: var(--cream);
  padding: 6vw 0;
}
.kal-gallery-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 8vw;
}
.kal-gallery-head {
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--linen);
}
.kal-gallery-num {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 4rem;
  font-weight: 300;
  color: var(--linen);
  line-height: 1;
  flex-shrink: 0;
}
.kal-gallery-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 300;
  color: var(--charcoal);
  line-height: 1.15;
}

/* First image full-width, rest 2-col */
.kal-gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--linen);
}
.kal-gallery-grid .kal-gi:first-child {
  grid-column: span 2;
}
.kal-gi {
  overflow: hidden;
  cursor: pointer;
  position: relative;
}
.kal-gi img {
  width: 100%;
  height: 100%;
  min-height: 380px;
  object-fit: cover;
  display: block;
  transition: transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.4s;
  filter: brightness(0.9);
}
.kal-gi:first-child img { min-height: 600px; }
.kal-gi:hover img { transform: scale(1.05); filter: brightness(1); }
.kal-gi-overlay {
  position: absolute;
  inset: 0;
  background: rgba(28,26,23,0);
  transition: background 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.kal-gi:hover .kal-gi-overlay { background: rgba(28,26,23,0.15); }
.kal-gi-zoom {
  width: 40px;
  height: 40px;
  border: 1px solid rgba(248,245,240,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.3s, transform 0.3s;
}
.kal-gi:hover .kal-gi-zoom { opacity: 1; transform: scale(1); }
.kal-zoom-icon { width: 16px; height: 16px; position: relative; }
.kal-zoom-icon::before, .kal-zoom-icon::after {
  content: ''; position: absolute; background: var(--ivory);
}
.kal-zoom-icon::before { width: 1px; height: 16px; left: 50%; top: 0; }
.kal-zoom-icon::after  { width: 16px; height: 1px; left: 0; top: 50%; }

/* ── MAP ── */
.kal-map-section {
  background: var(--ivory);
  padding: 5vw 8vw;
}
.kal-map-inner { max-width: 1200px; margin: 0 auto; }
.kal-map-head {
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--linen);
}
.kal-map-label {
  font-size: 0.67rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--bronze);
  display: flex;
  align-items: center;
  gap: 12px;
}
.kal-map-label::before {
  content: '';
  display: block;
  width: 26px;
  height: 1px;
  background: var(--bronze);
}
.kal-map-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  font-weight: 300;
  color: var(--charcoal);
}
.kal-map-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 46%;
  overflow: hidden;
  background: var(--cream);
}
.kal-map-wrapper iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.kal-map-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 1rem;
  font-size: 0.72rem;
  font-weight: 300;
  color: var(--pale);
  letter-spacing: 0.08em;
}
.kal-map-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--bronze);
  flex-shrink: 0;
}

/* ── RELATED ── */
.kal-related { background: var(--cream); padding: 7vw 0; }
.kal-related-inner { max-width: 1200px; margin: 0 auto; padding: 0 8vw; }
.kal-related-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--linen);
}
.kal-related-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 300;
  color: var(--charcoal);
  line-height: 1.1;
}
.kal-related-title em { font-style: italic; color: var(--mid); }
.kal-related-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--linen);
}
.kal-rel-item {
  background: var(--cream);
  cursor: pointer;
  overflow: hidden;
  transition: background 0.3s;
}
.kal-rel-item:hover { background: var(--linen); }
.kal-rel-img { overflow: hidden; }
.kal-rel-img img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
  transition: transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94);
  filter: brightness(0.9);
}
.kal-rel-item:hover .kal-rel-img img { transform: scale(1.05); filter: brightness(1); }
.kal-rel-body { padding: 1.5rem 0; }
.kal-rel-cat {
  font-size: 0.6rem;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: var(--bronze);
  margin-bottom: 0.4rem;
}
.kal-rel-name {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.4rem;
  font-weight: 300;
  color: var(--charcoal);
  margin-bottom: 1.2rem;
}
.kal-rel-metas { display: flex; flex-direction: column; gap: 0.5rem; }
.kal-rel-meta { display: flex; gap: 1rem; align-items: baseline; }
.kal-rel-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 1.2rem;
  font-size: 0.63rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--bronze);
  border-bottom: 1px solid var(--bronze-xl);
  padding-bottom: 2px;
  transition: gap 0.3s, border-color 0.3s;
}
.kal-rel-item:hover .kal-rel-cta { gap: 14px; border-color: var(--bronze); }
.kal-rel-arr {
  width: 16px; height: 1px; background: var(--bronze);
  position: relative; transition: width 0.3s; flex-shrink: 0;
}
.kal-rel-arr::after {
  content: ''; position: absolute; right: 0; top: -3px;
  width: 6px; height: 6px;
  border-right: 1px solid var(--bronze);
  border-top: 1px solid var(--bronze);
  transform: rotate(45deg);
}
.kal-rel-item:hover .kal-rel-arr { width: 24px; }

/* ── LIGHTBOX ── */
.kal-lightbox {
  position: fixed;
  inset: 0;
  z-index: 999;
  background: rgba(20,18,15,0.96);
  display: flex;
  align-items: center;
  justify-content: center;
}
.kal-lightbox-img {
  max-width: 90vw;
  max-height: 88vh;
  object-fit: contain;
  display: block;
}
.kal-lightbox-close {
  position: absolute;
  top: 24px; right: 28px;
  background: none; border: none;
  color: var(--ivory); cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.65rem; letter-spacing: 0.22em;
  text-transform: uppercase;
  display: flex; align-items: center; gap: 10px;
}
.kal-lightbox-close-x { width: 22px; height: 22px; position: relative; }
.kal-lightbox-close-x::before,
.kal-lightbox-close-x::after {
  content: ''; position: absolute; top: 50%; left: 0;
  width: 100%; height: 1px; background: var(--ivory);
}
.kal-lightbox-close-x::before { transform: rotate(45deg); }
.kal-lightbox-close-x::after  { transform: rotate(-45deg); }
.kal-lightbox-nav {
  position: absolute;
  top: 50%; transform: translateY(-50%);
  background: none;
  border: 1px solid rgba(248,245,240,0.2);
  color: var(--ivory); cursor: pointer;
  width: 50px; height: 50px;
  display: flex; align-items: center; justify-content: center;
  transition: border-color 0.3s, background 0.3s;
  font-size: 1.2rem;
}
.kal-lightbox-nav:hover { border-color: var(--bronze-l); background: rgba(160,120,64,0.15); }
.kal-lightbox-nav--prev { left: 24px; }
.kal-lightbox-nav--next { right: 24px; }
.kal-lightbox-count {
  position: absolute; bottom: 24px;
  font-size: 0.63rem; letter-spacing: 0.2em;
  color: rgba(248,245,240,0.4);
  font-family: 'DM Sans', sans-serif;
}

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .kal-intro { grid-template-columns: 1fr; gap: 3rem; padding: 10vw 6vw; }
  .kal-gallery-grid { grid-template-columns: 1fr; }
  .kal-gallery-grid .kal-gi:first-child { grid-column: span 1; }
  .kal-gi img { min-height: 260px !important; }
  .kal-related-grid { grid-template-columns: 1fr; }
  .kal-related-head { flex-direction: column; align-items: flex-start; gap: 1rem; }
  .kal-gallery-inner { padding: 0 6vw; }
  .kal-related-inner { padding: 0 6vw; }
  .kal-map-section { padding: 10vw 6vw; }
  .kal-map-wrapper { padding-bottom: 65%; }
  .kal-hero-content { padding: 0 6vw 8vh; }
  .kal-title { font-size: 3rem; }
  .kal-row-group { grid-template-columns: 1fr; background: none; }
  .kal-row-group .kal-row { padding: 14px 0; border-bottom: 1px solid var(--linen); }
}
</style>

<template>
  <div class="kal-page">

    <!-- ── LIGHTBOX ── -->
    <teleport to="body">
      <div v-if="lightboxOpen" class="kal-lightbox" @click.self="lightboxOpen = false">
        <img
          :src="images[lightboxIndex]"
          class="kal-lightbox-img"
          :alt="'Aerial photo ' + (lightboxIndex + 1)"
        />
        <button class="kal-lightbox-close" @click="lightboxOpen = false">
          Close <span class="kal-lightbox-close-x" />
        </button>
        <button class="kal-lightbox-nav kal-lightbox-nav--prev" @click="prevImage">&#8592;</button>
        <button class="kal-lightbox-nav kal-lightbox-nav--next" @click="nextImage">&#8594;</button>
        <span class="kal-lightbox-count">{{ lightboxIndex + 1 }} / {{ images.length }}</span>
      </div>
    </teleport>

    <!-- ── HERO ── -->
    <section class="kal-hero">
      <img
        src="/eishi/kalinga_residential/images/DJI_0595-min.webp"
        class="kal-hero-img"
        :class="{ ready }"
        alt="Kalinga Residential Lands"
      />
      <div class="kal-hero-veil" />
      <div class="kal-hero-content">
        <p class="kal-eyebrow" :class="{ in: ready }">
          Real Estate &mdash; Tabuk City, Kalinga
        </p>
        <h1 class="kal-title" :class="{ in: ready }">
          {{ t.residentialLands?.split(' ').slice(0, 1).join(' ') || 'Residential' }}<br />
          <em>{{ t.residentialLands?.split(' ').slice(1).join(' ') || 'Lands' }}</em>
        </h1>
        <div class="kal-hero-meta" :class="{ in: ready }">
          <span class="kal-location">
            <span class="kal-location-dot" />
            {{ t.residentialLocation || t.tabukKalinganProvince || 'Tabuk City, Kalinga Province' }}
          </span>
          <div class="kal-scroll">
            <div class="kal-scroll-bar" />
            <span>Scroll</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── INTRO ── -->
    <div class="kal-intro">

      <!-- Left: paragraphs -->
      <div>
        <p class="kal-label-tag">{{ t.residentialLotsDescription || 'Residential Holdings' }}</p>
        <div class="kal-paragraphs">
          <p class="kal-p">{{ t.residentialLandsP1 }}</p>
          <p class="kal-p">{{ t.residentialLandsP2 }}</p>
        </div>
      </div>

      <!-- Right: details table -->
      <div class="kal-table">
        <div class="kal-row">
          <span class="kal-row-lbl">{{ t.kalingaNameLabel || 'Property Name' }}</span>
          <span class="kal-row-val">{{ t.kalingaNameValue }}</span>
        </div>
        <div class="kal-row">
          <span class="kal-row-lbl">{{ t.kalingaLocationLabel || 'Location' }}</span>
          <span class="kal-row-val">{{ t.kalingaLocationValue }}</span>
        </div>
        <div class="kal-row">
          <span class="kal-row-lbl">{{ t.acquisitionDateLabel || 'Acquisition Date' }}</span>
          <span class="kal-row-val">{{ t.acquisitionDateValue }}</span>
        </div>
        <div class="kal-row">
          <span class="kal-row-lbl">{{ t.kalingaPurposeLabel || 'Purpose' }}</span>
          <span class="kal-row-val">{{ t.purposeValue }}</span>
        </div>

        <div class="kal-row-group">
          <div class="kal-row">
            <span class="kal-row-lbl">{{ t.numberOfLotsLabel || 'No. of Lots' }}</span>
            <span class="kal-row-val">{{ t.numberOfLotsValue }}</span>
          </div>
          <div class="kal-row">
            <span class="kal-row-lbl">{{ t.expectedGrowthLabel || 'Expected Growth' }}</span>
            <span class="kal-row-val">{{ t.expectedGrowthValue }}</span>
          </div>
          <div class="kal-row">
            <span class="kal-row-lbl">{{ t.strategicLocationLabel || 'Strategic Location' }}</span>
            <span class="kal-row-val">{{ t.strategicLocationValue }}</span>
          </div>
        </div>
      </div>

    </div>

    <!-- ── AERIAL GALLERY ── -->
    <section class="kal-gallery-section">
      <div class="kal-gallery-inner">
        <div class="kal-gallery-head">
          <span class="kal-gallery-num">01</span>
          <h2 class="kal-gallery-title">Aerial Views</h2>
        </div>
        <div class="kal-gallery-grid">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="kal-gi"
            @click="openLightbox(index)"
          >
            <img :src="image" :alt="'Kalinga aerial ' + (index + 1)" loading="lazy" />
            <div class="kal-gi-overlay">
              <div class="kal-gi-zoom">
                <span class="kal-zoom-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── MAP ── -->
    <section class="kal-map-section">
      <div class="kal-map-inner">
        <div class="kal-map-head">
          <p class="kal-map-label">Location</p>
          <h2 class="kal-map-title">Bulanao, Tabuk City &mdash; Kalinga</h2>
        </div>
        <div class="kal-map-wrapper">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1wbXT9iDt0fJrKOhDMloD9_GMIjdhZfg&ehbc=2E312F"
            allowfullscreen
            loading="lazy"
          />
        </div>
        <div class="kal-map-footer">
          <span class="kal-map-dot" />
          Bulanao, Tabuk City, Kalinga Province
        </div>
      </div>
    </section>

    <!-- ── RELATED PROPERTIES ── -->
    <section class="kal-related">
      <div class="kal-related-inner">
        <div class="kal-related-head">
          <h2 class="kal-related-title">
            {{ t.relatedProperties || 'Related' }}<br /><em>Properties</em>
          </h2>
        </div>
        <div class="kal-related-grid">
          <div
            v-for="(property, index) in translatedProperties"
            :key="index"
            class="kal-rel-item"
            @click="$router.push(property.route)"
          >
            <div class="kal-rel-img">
              <img :src="property.image" :alt="property.title" loading="lazy" />
            </div>
            <div class="kal-rel-body">
              <p class="kal-rel-cat">{{ t.relatedPropertyCategory || 'Holdings' }}</p>
              <h3 class="kal-rel-name">{{ property.title }}</h3>
              <div class="kal-rel-metas">
                <template v-for="(value, key) in property.details" :key="key">
                  <div v-if="key !== 'description'" class="kal-rel-meta">
                    <span class="kal-row-lbl">{{ key }}</span>
                    <span class="kal-row-val" style="font-size:0.85rem;">{{ value }}</span>
                  </div>
                </template>
              </div>
              <span class="kal-rel-cta">
                {{ t.viewProperty || 'View Details' }}
                <span class="kal-rel-arr" />
              </span>
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
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'KalingaResidentialLands',

  data() {
    return {
      ready: false,
      lightboxOpen: false,
      lightboxIndex: 0,

      images: [
        '/eishi/kalinga_residential/images/DJI_0591-min.webp',
        '/eishi/kalinga_residential/images/DJI_0595-min.webp',
        '/eishi/kalinga_residential/images/DJI_0598+(1)-min.webp',
      ],
    }
  },

  computed: {
    ...mapState(useLanguageStore, ['t']),
    translatedProperties() { return this.t.properties || [] },
  },

  mounted() {
    this.$nextTick(() => {
      setTimeout(() => { this.ready = true }, 180)

      // Gallery scroll-reveals
      const galleryItems = this.$el.querySelectorAll('.kal-gi')
      galleryItems.forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0,
            duration: 0.7,
            delay: (i % 2) * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Related cards
      const relItems = this.$el.querySelectorAll('.kal-rel-item')
      relItems.forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 24 },
          {
            opacity: 1, y: 0,
            duration: 0.7,
            delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    })
  },

  beforeUnmount() {
    ScrollTrigger.getAll().forEach(t => t.kill())
  },

  methods: {
    openLightbox(index) {
      this.lightboxIndex = index
      this.lightboxOpen = true
    },
    nextImage() {
      this.lightboxIndex = (this.lightboxIndex + 1) % this.images.length
    },
    prevImage() {
      this.lightboxIndex = (this.lightboxIndex - 1 + this.images.length) % this.images.length
    },
  },
}
</script>
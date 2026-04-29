<style>
.kal-page { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; background: #FFFFFF; color: #1E293B; }
* { box-sizing: border-box; }

/* ── HERO ── */
.kal-hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: #0F172A;
}
.kal-hero-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.55;
  transform: scale(1.06);
  transition: transform 8s ease;
}
.kal-hero-img.ready { transform: scale(1); }
.kal-hero-veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(15,23,42,0.2) 40%, rgba(15,23,42,0.75) 100%);
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
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #60A5FA;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1.2rem;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.9s 0.2s ease, transform 0.9s 0.2s ease;
}
.kal-eyebrow::before {
  content: '';
  display: block;
  width: 24px;
  height: 2px;
  background: #60A5FA;
  border-radius: 2px;
}
.kal-eyebrow.in { opacity: 1; transform: none; }
.kal-title {
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 700;
  color: #FFFFFF;
  line-height: 0.95;
  letter-spacing: -0.025em;
  margin: 0 0 2rem;
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 1.1s 0.4s ease, transform 1.1s 0.4s ease;
}
.kal-title em { font-style: normal; color: #93C5FD; }
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
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(255,255,255,0.6);
}
.kal-location-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #60A5FA;
  flex-shrink: 0;
}
.kal-scroll {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.35);
  margin-left: auto;
}
.kal-scroll-bar {
  width: 1px;
  height: 45px;
  background: rgba(255,255,255,0.25);
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
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #0066CC;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1.8rem;
}
.kal-label-tag::before {
  content: '';
  display: block;
  width: 22px;
  height: 2px;
  background: #0066CC;
  border-radius: 2px;
}
.kal-paragraphs { display: flex; flex-direction: column; gap: 1.4rem; }
.kal-p {
  font-size: 0.96rem;
  font-weight: 400;
  line-height: 1.75;
  color: #64748B;
}

/* ── DETAILS TABLE ── */
.kal-table { display: flex; flex-direction: column; }
.kal-row {
  padding: 14px 0;
  border-bottom: 1px solid #E2E8F0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.kal-row-lbl {
  font-size: 0.65rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #94A3B8;
  font-weight: 600;
}
.kal-row-val {
  font-size: 0.92rem;
  font-weight: 500;
  color: #1E293B;
}
.kal-row-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0 1px;
  background: #E2E8F0;
  border-bottom: 1px solid #E2E8F0;
}
.kal-row-group .kal-row {
  background: #FFFFFF;
  border-bottom: none;
  padding: 14px 12px;
}

/* ── AERIAL GALLERY ── */
.kal-gallery-section {
  background: #F8FAFC;
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
  border-bottom: 1px solid #E2E8F0;
}
.kal-gallery-num {
  font-size: 3.5rem;
  font-weight: 700;
  color: #E2E8F0;
  line-height: 1;
  flex-shrink: 0;
  letter-spacing: -0.03em;
}
.kal-gallery-title {
  font-size: clamp(1.4rem, 3vw, 2rem);
  font-weight: 700;
  color: #1E293B;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

/* Masonry: first image full-width */
.kal-gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
  background: #E2E8F0;
  border-radius: 10px;
  overflow: hidden;
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
  filter: brightness(0.92);
}
.kal-gi:first-child img { min-height: 600px; }
.kal-gi:hover img { transform: scale(1.05); filter: brightness(1); }
.kal-gi-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15,23,42,0);
  transition: background 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.kal-gi:hover .kal-gi-overlay { background: rgba(15,23,42,0.18); }
.kal-gi-zoom {
  width: 44px;
  height: 44px;
  border: 2px solid rgba(255,255,255,0.75);
  border-radius: 8px;
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
  content: ''; position: absolute; background: #FFFFFF;
}
.kal-zoom-icon::before { width: 1px; height: 16px; left: 50%; top: 0; }
.kal-zoom-icon::after  { width: 16px; height: 1px; left: 0; top: 50%; }

/* ── MAP ── */
.kal-map-section {
  background: #FFFFFF;
  padding: 5vw 8vw;
}
.kal-map-inner { max-width: 1200px; margin: 0 auto; }
.kal-map-head {
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #E2E8F0;
}
.kal-map-label {
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #0066CC;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
}
.kal-map-label::before {
  content: '';
  display: block;
  width: 22px;
  height: 2px;
  background: #0066CC;
  border-radius: 2px;
}
.kal-map-title {
  font-size: clamp(1.2rem, 2.5vw, 1.75rem);
  font-weight: 700;
  color: #1E293B;
  letter-spacing: -0.02em;
}
.kal-map-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 46%;
  overflow: hidden;
  background: #F1F5F9;
  border-radius: 10px;
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
  font-size: 0.75rem;
  font-weight: 500;
  color: #94A3B8;
  letter-spacing: 0.03em;
}
.kal-map-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #0066CC;
  flex-shrink: 0;
}

/* ── RELATED ── */
.kal-related { background: #F8FAFC; padding: 7vw 0; }
.kal-related-inner { max-width: 1200px; margin: 0 auto; padding: 0 8vw; }
.kal-related-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #E2E8F0;
}
.kal-related-title {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  color: #1E293B;
  line-height: 1.1;
  letter-spacing: -0.025em;
}
.kal-related-title em { font-style: normal; color: #0066CC; }
.kal-related-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
.kal-rel-item {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  transition: box-shadow 0.3s, transform 0.3s;
}
.kal-rel-item:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  transform: translateY(-2px);
}
.kal-rel-img { overflow: hidden; }
.kal-rel-img img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
  transition: transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94);
}
.kal-rel-item:hover .kal-rel-img img { transform: scale(1.05); }
.kal-rel-body { padding: 1.25rem 1.25rem 1.5rem; }
.kal-rel-cat {
  font-size: 0.65rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #0066CC;
  font-weight: 700;
  background: #EFF6FF;
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  margin-bottom: 0.6rem;
}
.kal-rel-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1E293B;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
  line-height: 1.3;
}
.kal-rel-metas { display: flex; flex-direction: column; gap: 0.4rem; }
.kal-rel-meta { display: flex; gap: 1rem; align-items: baseline; }
.kal-rel-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 1rem;
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 700;
  color: #0066CC;
  transition: gap 0.3s;
}
.kal-rel-item:hover .kal-rel-cta { gap: 14px; }
.kal-rel-arr {
  width: 16px; height: 1px; background: #0066CC;
  position: relative; transition: width 0.3s; flex-shrink: 0;
}
.kal-rel-arr::after {
  content: ''; position: absolute; right: 0; top: -3px;
  width: 6px; height: 6px;
  border-right: 1.5px solid #0066CC;
  border-top: 1.5px solid #0066CC;
  transform: rotate(45deg);
}
.kal-rel-item:hover .kal-rel-arr { width: 24px; }

/* ── LIGHTBOX ── */
.kal-lightbox {
  position: fixed;
  inset: 0;
  z-index: 999;
  background: rgba(15,23,42,0.97);
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
  color: #FFFFFF; cursor: pointer;
  font-size: 0.7rem; letter-spacing: 0.15em; font-weight: 600;
  text-transform: uppercase;
  display: flex; align-items: center; gap: 10px;
}
.kal-lightbox-close-x { width: 22px; height: 22px; position: relative; }
.kal-lightbox-close-x::before,
.kal-lightbox-close-x::after {
  content: ''; position: absolute; top: 50%; left: 0;
  width: 100%; height: 1.5px; background: #FFFFFF;
}
.kal-lightbox-close-x::before { transform: rotate(45deg); }
.kal-lightbox-close-x::after  { transform: rotate(-45deg); }
.kal-lightbox-nav {
  position: absolute;
  top: 50%; transform: translateY(-50%);
  background: none;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 8px;
  color: #FFFFFF; cursor: pointer;
  width: 50px; height: 50px;
  display: flex; align-items: center; justify-content: center;
  transition: border-color 0.3s, background 0.3s;
  font-size: 1.2rem;
}
.kal-lightbox-nav:hover { border-color: #60A5FA; background: rgba(96,165,250,0.1); }
.kal-lightbox-nav--prev { left: 24px; }
.kal-lightbox-nav--next { right: 24px; }
.kal-lightbox-count {
  position: absolute; bottom: 24px;
  font-size: 0.65rem; letter-spacing: 0.15em;
  color: rgba(255,255,255,0.4);
  font-weight: 500;
}

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .kal-intro { grid-template-columns: 1fr; gap: 3rem; padding: 10vw 6vw; }
  .kal-gallery-grid { grid-template-columns: 1fr; border-radius: 8px; }
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
  .kal-row-group .kal-row { padding: 14px 0; border-bottom: 1px solid #E2E8F0; }
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

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

.car-page { font-family: 'DM Sans', sans-serif; background: var(--ivory); color: var(--ink); }
* { box-sizing: border-box; }

/* ── HERO ── */
.car-hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: var(--charcoal);
}
.car-hero-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  transform: scale(1.06);
  transition: transform 8s ease;
}
.car-hero-img.ready { transform: scale(1); }
.car-hero-veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(28,26,23,0.25) 0%, rgba(248,245,240,0.96) 100%);
}
.car-hero-content {
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
.car-eyebrow {
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
.car-eyebrow::before {
  content: '';
  display: block;
  width: 26px;
  height: 1px;
  background: var(--bronze-l);
}
.car-eyebrow.in { opacity: 1; transform: none; }
.car-title {
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
.car-title em { font-style: italic; color: var(--bronze-l); }
.car-title.in { opacity: 1; transform: none; }
.car-hero-meta {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.8s 0.8s ease, transform 0.8s 0.8s ease;
}
.car-hero-meta.in { opacity: 1; transform: none; }
.car-location {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  font-weight: 300;
  color: var(--mid);
}
.car-location-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--bronze);
  flex-shrink: 0;
}
.car-scroll {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.6rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--pale);
  margin-left: auto;
}
.car-scroll-bar {
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
.car-intro {
  max-width: 1200px;
  margin: 0 auto;
  padding: 7vw 8vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6vw;
  align-items: start;
}
.car-label-tag {
  font-size: 0.67rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--bronze);
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 2rem;
}
.car-label-tag::before {
  content: '';
  display: block;
  width: 26px;
  height: 1px;
  background: var(--bronze);
}
.car-paragraphs { display: flex; flex-direction: column; gap: 1.4rem; }
.car-p {
  font-size: 0.94rem;
  font-weight: 300;
  line-height: 1.95;
  color: var(--mid);
}

/* ── DETAILS TABLE ── */
.car-table { display: flex; flex-direction: column; }
.car-row {
  padding: 14px 0;
  border-bottom: 1px solid var(--linen);
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.car-row-lbl {
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--pale);
}
.car-row-val {
  font-size: 0.92rem;
  font-weight: 300;
  color: var(--charcoal);
}
.car-row-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0 1px;
  background: var(--linen);
  border-bottom: 1px solid var(--linen);
}
.car-row-group .car-row {
  background: var(--ivory);
  border-bottom: none;
  padding: 14px 12px;
}

/* ── FLEET GALLERY ── */
.car-gallery-section {
  background: var(--cream);
  padding: 6vw 0;
}
.car-gallery-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 8vw;
}
.car-gallery-head {
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--linen);
}
.car-gallery-num {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 4rem;
  font-weight: 300;
  color: var(--linen);
  line-height: 1;
  flex-shrink: 0;
}
.car-gallery-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 300;
  color: var(--charcoal);
  line-height: 1.15;
}

/* First image full-width, rest 2-col */
.car-gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--linen);
}
.car-gallery-grid .car-gi:first-child {
  grid-column: span 2;
}
.car-gi {
  overflow: hidden;
  cursor: pointer;
  position: relative;
}
.car-gi img {
  width: 100%;
  height: 100%;
  min-height: 340px;
  object-fit: cover;
  display: block;
  transition: transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.4s;
  filter: brightness(0.9);
}
.car-gi:first-child img { min-height: 580px; }
.car-gi:hover img { transform: scale(1.05); filter: brightness(1); }
.car-gi-overlay {
  position: absolute;
  inset: 0;
  background: rgba(28,26,23,0);
  transition: background 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.car-gi:hover .car-gi-overlay { background: rgba(28,26,23,0.15); }
.car-gi-zoom {
  width: 40px; height: 40px;
  border: 1px solid rgba(248,245,240,0.7);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transform: scale(0.8);
  transition: opacity 0.3s, transform 0.3s;
}
.car-gi:hover .car-gi-zoom { opacity: 1; transform: scale(1); }
.car-zoom-icon { width: 16px; height: 16px; position: relative; }
.car-zoom-icon::before, .car-zoom-icon::after {
  content: ''; position: absolute; background: var(--ivory);
}
.car-zoom-icon::before { width: 1px; height: 16px; left: 50%; top: 0; }
.car-zoom-icon::after  { width: 16px; height: 1px; left: 0; top: 50%; }

/* ── HIGHLIGHTS STRIP ── */
.car-highlights {
  background: var(--charcoal);
  padding: 5vw 8vw;
}
.car-highlights-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(248,245,240,0.07);
}
.car-hl-item {
  background: var(--charcoal);
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  border-right: 1px solid rgba(248,245,240,0.07);
}
.car-hl-item:last-child { border-right: none; }
.car-hl-num {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 2.8rem;
  font-weight: 300;
  color: var(--bronze-l);
  line-height: 1;
}
.car-hl-label {
  font-size: 0.62rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: rgba(248,245,240,0.35);
}
.car-hl-desc {
  font-size: 0.82rem;
  font-weight: 300;
  line-height: 1.7;
  color: rgba(248,245,240,0.5);
  margin-top: 0.5rem;
}

/* ── RELATED ── */
.car-related { background: var(--ivory); padding: 7vw 0; }
.car-related-inner { max-width: 1200px; margin: 0 auto; padding: 0 8vw; }
.car-related-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--linen);
}
.car-related-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 300;
  color: var(--charcoal);
  line-height: 1.1;
}
.car-related-title em { font-style: italic; color: var(--mid); }
.car-related-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--linen);
}
.car-rel-item {
  background: var(--ivory);
  cursor: pointer;
  overflow: hidden;
  transition: background 0.3s;
}
.car-rel-item:hover { background: var(--cream); }
.car-rel-img { overflow: hidden; }
.car-rel-img img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
  transition: transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94);
  filter: brightness(0.9);
}
.car-rel-item:hover .car-rel-img img { transform: scale(1.05); filter: brightness(1); }
.car-rel-body { padding: 1.5rem 0; }
.car-rel-cat {
  font-size: 0.6rem;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: var(--bronze);
  margin-bottom: 0.4rem;
}
.car-rel-name {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.4rem;
  font-weight: 300;
  color: var(--charcoal);
  margin-bottom: 1.2rem;
}
.car-rel-metas { display: flex; flex-direction: column; gap: 0.5rem; }
.car-rel-meta { display: flex; gap: 1rem; align-items: baseline; }
.car-rel-cta {
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
.car-rel-item:hover .car-rel-cta { gap: 14px; border-color: var(--bronze); }
.car-rel-arr {
  width: 16px; height: 1px; background: var(--bronze);
  position: relative; transition: width 0.3s; flex-shrink: 0;
}
.car-rel-arr::after {
  content: ''; position: absolute; right: 0; top: -3px;
  width: 6px; height: 6px;
  border-right: 1px solid var(--bronze);
  border-top: 1px solid var(--bronze);
  transform: rotate(45deg);
}
.car-rel-item:hover .car-rel-arr { width: 24px; }

/* ── LIGHTBOX ── */
.car-lightbox {
  position: fixed;
  inset: 0;
  z-index: 999;
  background: rgba(20,18,15,0.96);
  display: flex;
  align-items: center;
  justify-content: center;
}
.car-lightbox-img {
  max-width: 90vw;
  max-height: 88vh;
  object-fit: contain;
  display: block;
}
.car-lightbox-close {
  position: absolute;
  top: 24px; right: 28px;
  background: none; border: none;
  color: var(--ivory); cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.65rem; letter-spacing: 0.22em;
  text-transform: uppercase;
  display: flex; align-items: center; gap: 10px;
}
.car-lightbox-close-x { width: 22px; height: 22px; position: relative; }
.car-lightbox-close-x::before,
.car-lightbox-close-x::after {
  content: ''; position: absolute; top: 50%; left: 0;
  width: 100%; height: 1px; background: var(--ivory);
}
.car-lightbox-close-x::before { transform: rotate(45deg); }
.car-lightbox-close-x::after  { transform: rotate(-45deg); }
.car-lightbox-nav {
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
.car-lightbox-nav:hover { border-color: var(--bronze-l); background: rgba(160,120,64,0.15); }
.car-lightbox-nav--prev { left: 24px; }
.car-lightbox-nav--next { right: 24px; }
.car-lightbox-count {
  position: absolute; bottom: 24px;
  font-size: 0.63rem; letter-spacing: 0.2em;
  color: rgba(248,245,240,0.4);
  font-family: 'DM Sans', sans-serif;
}

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .car-intro { grid-template-columns: 1fr; gap: 3rem; padding: 10vw 6vw; }
  .car-gallery-grid { grid-template-columns: 1fr; }
  .car-gallery-grid .car-gi:first-child { grid-column: span 1; }
  .car-gi img { min-height: 260px !important; }
  .car-highlights-inner { grid-template-columns: 1fr; }
  .car-hl-item { border-right: none; border-bottom: 1px solid rgba(248,245,240,0.07); }
  .car-related-grid { grid-template-columns: 1fr; }
  .car-related-head { flex-direction: column; align-items: flex-start; gap: 1rem; }
  .car-gallery-inner { padding: 0 6vw; }
  .car-related-inner { padding: 0 6vw; }
  .car-highlights { padding: 10vw 6vw; }
  .car-hero-content { padding: 0 6vw 8vh; }
  .car-title { font-size: 3rem; }
  .car-row-group { grid-template-columns: 1fr; background: none; }
  .car-row-group .car-row { padding: 14px 0; border-bottom: 1px solid var(--linen); }
}
</style>

<template>
  <div class="car-page">

    <!-- ── LIGHTBOX ── -->
    <teleport to="body">
      <div v-if="lightboxOpen" class="car-lightbox" @click.self="lightboxOpen = false">
        <img
          :src="images[lightboxIndex]"
          class="car-lightbox-img"
          :alt="'Car Rental photo ' + (lightboxIndex + 1)"
        />
        <button class="car-lightbox-close" @click="lightboxOpen = false">
          Close <span class="car-lightbox-close-x" />
        </button>
        <button class="car-lightbox-nav car-lightbox-nav--prev" @click="prevImage">&#8592;</button>
        <button class="car-lightbox-nav car-lightbox-nav--next" @click="nextImage">&#8594;</button>
        <span class="car-lightbox-count">{{ lightboxIndex + 1 }} / {{ images.length }}</span>
      </div>
    </teleport>

    <!-- ── HERO ── -->
    <section class="car-hero">
      <img
        src="/eishi/car_rental/images/car01.webp"
        class="car-hero-img"
        :class="{ ready }"
        alt="Car Rental"
      />
      <div class="car-hero-veil" />
      <div class="car-hero-content">
        <p class="car-eyebrow" :class="{ in: ready }">
          Transport &mdash; Philippines
        </p>
        <h1 class="car-title" :class="{ in: ready }">
          {{ t.carRental?.split(' ').slice(0, 1).join(' ') || 'Car' }}<br />
          <em>{{ t.carRental?.split(' ').slice(1).join(' ') || 'Rental' }}</em>
        </h1>
        <div class="car-hero-meta" :class="{ in: ready }">
          <span class="car-location">
            <span class="car-location-dot" />
            {{ t.carRentalLocation || 'Philippines' }}
          </span>
          <div class="car-scroll">
            <div class="car-scroll-bar" />
            <span>Scroll</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── INTRO ── -->
    <div class="car-intro">

      <!-- Left: paragraph -->
      <div>
        <p class="car-label-tag">{{ t.carRentalDescription || 'Vehicle Services' }}</p>
        <div class="car-paragraphs">
          <p class="car-p">{{ t.carRentalP1 }}</p>
        </div>
      </div>

      <!-- Right: details table -->
      <div class="car-table">
        <div class="car-row">
          <span class="car-row-lbl">{{ t.carRentalDetails?.businessNameLabel || 'Business Name' }}</span>
          <span class="car-row-val">{{ t.carRentalDetails?.businessNameValue }}</span>
        </div>
        <div class="car-row">
          <span class="car-row-lbl">{{ t.carRentalDetails?.operatingAreaLabel || 'Operating Area' }}</span>
          <span class="car-row-val">{{ t.carRentalDetails?.operatingAreaValue }}</span>
        </div>
        <div class="car-row">
          <span class="car-row-lbl">{{ t.carRentalDetails?.primaryUseLabel || 'Primary Use' }}</span>
          <span class="car-row-val">{{ t.carRentalDetails?.primaryUseValue }}</span>
        </div>
        <div class="car-row">
          <span class="car-row-lbl">{{ t.carRentalDetails?.ownershipLabel || 'Ownership' }}</span>
          <span class="car-row-val">{{ t.carRentalDetails?.ownershipValue }}</span>
        </div>

        <div class="car-row-group">
          <div class="car-row">
            <span class="car-row-lbl">{{ t.carRentalDetails?.vehicleOriginLabel || 'Vehicle Origin' }}</span>
            <span class="car-row-val">{{ t.carRentalDetails?.vehicleOriginValue }}</span>
          </div>
          <div class="car-row">
            <span class="car-row-lbl">{{ t.carRentalDetails?.maintenanceStandardLabel || 'Maintenance' }}</span>
            <span class="car-row-val">{{ t.carRentalDetails?.maintenanceStandardValue }}</span>
          </div>
          <div class="car-row">
            <span class="car-row-lbl">{{ t.carRentalDetails?.comfortLevelLabel || 'Comfort Level' }}</span>
            <span class="car-row-val">{{ t.carRentalDetails?.comfortLevelValue }}</span>
          </div>
        </div>

        <div class="car-row-group">
          <div class="car-row">
            <span class="car-row-lbl">{{ t.carRentalDetails?.customerBaseLabel || 'Customer Base' }}</span>
            <span class="car-row-val">{{ t.carRentalDetails?.customerBaseValue }}</span>
          </div>
          <div class="car-row">
            <span class="car-row-lbl">{{ t.carRentalDetails?.popularWithLabel || 'Popular With' }}</span>
            <span class="car-row-val">{{ t.carRentalDetails?.popularWithValue }}</span>
          </div>
          <div class="car-row">
            <span class="car-row-lbl">{{ t.carRentalDetails?.valuePropositionLabel || 'Value' }}</span>
            <span class="car-row-val">{{ t.carRentalDetails?.valuePropositionValue }}</span>
          </div>
        </div>
      </div>

    </div>

    <!-- ── FLEET GALLERY ── -->
    <section class="car-gallery-section">
      <div class="car-gallery-inner">
        <div class="car-gallery-head">
          <span class="car-gallery-num">01</span>
          <h2 class="car-gallery-title">Our Fleet</h2>
        </div>
        <div class="car-gallery-grid">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="car-gi"
            @click="openLightbox(index)"
          >
            <img :src="image" :alt="'Car Rental vehicle ' + (index + 1)" loading="lazy" />
            <div class="car-gi-overlay">
              <div class="car-gi-zoom">
                <span class="car-zoom-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── HIGHLIGHTS STRIP ── -->
    <section class="car-highlights">
      <div class="car-highlights-inner">
        <div class="car-hl-item">
          <span class="car-hl-num">JP</span>
          <span class="car-hl-label">{{ t.carRentalDetails?.vehicleOriginLabel || 'Vehicle Origin' }}</span>
          <p class="car-hl-desc">{{ t.carRentalDetails?.vehicleOriginValue }}</p>
        </div>
        <div class="car-hl-item">
          <span class="car-hl-num">A+</span>
          <span class="car-hl-label">{{ t.carRentalDetails?.maintenanceStandardLabel || 'Maintenance Standard' }}</span>
          <p class="car-hl-desc">{{ t.carRentalDetails?.maintenanceStandardValue }}</p>
        </div>
        <div class="car-hl-item">
          <span class="car-hl-num">PH</span>
          <span class="car-hl-label">{{ t.carRentalDetails?.operatingAreaLabel || 'Operating Area' }}</span>
          <p class="car-hl-desc">{{ t.carRentalDetails?.operatingAreaValue }}</p>
        </div>
      </div>
    </section>

    <!-- ── RELATED PROPERTIES ── -->
    <section class="car-related">
      <div class="car-related-inner">
        <div class="car-related-head">
          <h2 class="car-related-title">
            {{ t.relatedProperties || 'Related' }}<br /><em>Properties</em>
          </h2>
        </div>
        <div class="car-related-grid">
          <div
            v-for="(property, index) in translatedProperties"
            :key="index"
            class="car-rel-item"
            @click="$router.push(property.route)"
          >
            <div class="car-rel-img">
              <img :src="property.image" :alt="property.title" loading="lazy" />
            </div>
            <div class="car-rel-body">
              <p class="car-rel-cat">{{ t.relatedPropertyCategory || 'Holdings' }}</p>
              <h3 class="car-rel-name">{{ property.title }}</h3>
              <div class="car-rel-metas">
                <template v-for="(value, key) in property.details" :key="key">
                  <div v-if="key !== 'description'" class="car-rel-meta">
                    <span class="car-row-lbl">{{ key }}</span>
                    <span class="car-row-val" style="font-size:0.85rem;">{{ value }}</span>
                  </div>
                </template>
              </div>
              <span class="car-rel-cta">
                {{ t.viewProperty || 'View Details' }}
                <span class="car-rel-arr" />
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
  name: 'CarRental',

  data() {
    return {
      ready: false,
      lightboxOpen: false,
      lightboxIndex: 0,

      images: [
        '/eishi/car_rental/images/car01.webp',
        '/eishi/car_rental/images/car02.webp',
        '/eishi/car_rental/images/car03.webp',
        '/eishi/car_rental/images/car04.webp',
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
      const galleryItems = this.$el.querySelectorAll('.car-gi')
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

      // Highlights strip
      const hlItems = this.$el.querySelectorAll('.car-hl-item')
      hlItems.forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0,
            duration: 0.65,
            delay: i * 0.12,
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
      const relItems = this.$el.querySelectorAll('.car-rel-item')
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
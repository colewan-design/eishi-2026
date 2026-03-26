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

.pf-page { font-family: 'DM Sans', sans-serif; background: var(--ivory); color: var(--ink); }
* { box-sizing: border-box; }

/* ── HERO ── */
.pf-hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: var(--charcoal);
}
.pf-hero-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  transform: scale(1.06);
  transition: transform 8s ease;
}
.pf-hero-img.ready { transform: scale(1); }
.pf-hero-veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(28,26,23,0.3) 0%, rgba(248,245,240,0.96) 100%);
}
.pf-hero-content {
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
.pf-eyebrow {
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
.pf-eyebrow::before {
  content: '';
  display: block;
  width: 26px;
  height: 1px;
  background: var(--bronze-l);
}
.pf-eyebrow.in { opacity: 1; transform: none; }
.pf-title {
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
.pf-title em { font-style: italic; color: var(--bronze-l); }
.pf-title.in { opacity: 1; transform: none; }
.pf-hero-meta {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.8s 0.8s ease, transform 0.8s 0.8s ease;
}
.pf-hero-meta.in { opacity: 1; transform: none; }
.pf-location {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  font-weight: 300;
  color: var(--mid);
}
.pf-location-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--bronze);
  flex-shrink: 0;
}
.pf-scroll {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.6rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--pale);
  margin-left: auto;
}
.pf-scroll-bar {
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
.pf-intro {
  max-width: 1200px;
  margin: 0 auto;
  padding: 7vw 8vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6vw;
  align-items: start;
}
.pf-label-tag {
  font-size: 0.67rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--bronze);
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 2rem;
}
.pf-label-tag::before {
  content: '';
  display: block;
  width: 26px;
  height: 1px;
  background: var(--bronze);
}
.pf-paragraphs { display: flex; flex-direction: column; gap: 1.4rem; }
.pf-p {
  font-size: 0.94rem;
  font-weight: 300;
  line-height: 1.95;
  color: var(--mid);
}

/* ── DETAILS TABLE ── */
.pf-table { display: flex; flex-direction: column; }
.pf-row {
  padding: 14px 0;
  border-bottom: 1px solid var(--linen);
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.pf-row-lbl {
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--pale);
}
.pf-row-val {
  font-size: 0.92rem;
  font-weight: 300;
  color: var(--charcoal);
}

/* ── VIDEO ── */
.pf-video-section {
  background: var(--charcoal);
  position: relative;
  overflow: hidden;
}
.pf-video-label {
  position: absolute;
  top: 2.5rem;
  left: 8vw;
  z-index: 2;
  font-size: 0.63rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(248,245,240,0.35);
  display: flex;
  align-items: center;
  gap: 10px;
}
.pf-video-label::before {
  content: '';
  display: block;
  width: 20px;
  height: 1px;
  background: var(--bronze-l);
}
.pf-video-section video {
  width: 100%;
  height: 80vh;
  object-fit: cover;
  display: block;
  opacity: 0.75;
}

/* ── GALLERY SECTIONS ── */
.pf-sections { background: var(--cream); padding: 6vw 0; }
.pf-section-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 8vw;
}
.pf-section-block { margin-bottom: 6rem; }
.pf-section-head {
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--linen);
}
.pf-section-num {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 4rem;
  font-weight: 300;
  color: var(--linen);
  line-height: 1;
  flex-shrink: 0;
}
.pf-section-caption {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 300;
  color: var(--charcoal);
  line-height: 1.15;
}
.pf-gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--linen);
}
.pf-gallery-item {
  overflow: hidden;
  cursor: pointer;
  position: relative;
}
.pf-gallery-item img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  display: block;
  transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.4s;
  filter: brightness(0.92);
}
.pf-gallery-item:hover img { transform: scale(1.05); filter: brightness(1); }
.pf-gallery-overlay {
  position: absolute;
  inset: 0;
  background: rgba(28,26,23,0);
  transition: background 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pf-gallery-item:hover .pf-gallery-overlay { background: rgba(28,26,23,0.18); }
.pf-gallery-zoom {
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
.pf-gallery-item:hover .pf-gallery-zoom { opacity: 1; transform: scale(1); }
.pf-zoom-icon { width: 16px; height: 16px; position: relative; }
.pf-zoom-icon::before, .pf-zoom-icon::after {
  content: ''; position: absolute; background: var(--ivory);
}
.pf-zoom-icon::before { width: 1px; height: 16px; left: 50%; top: 0; }
.pf-zoom-icon::after  { width: 16px; height: 1px; left: 0; top: 50%; }

/* ── MAP ── */
.pf-map-section {
  background: var(--ivory);
  padding: 5vw 8vw;
}
.pf-map-inner { max-width: 1200px; margin: 0 auto; }
.pf-map-head {
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--linen);
}
.pf-map-label {
  font-size: 0.67rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--bronze);
  display: flex;
  align-items: center;
  gap: 12px;
}
.pf-map-label::before {
  content: '';
  display: block;
  width: 26px;
  height: 1px;
  background: var(--bronze);
}
.pf-map-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  font-weight: 300;
  color: var(--charcoal);
}
.pf-map-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 46%;
  overflow: hidden;
  background: var(--cream);
}
.pf-map-wrapper iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  filter: grayscale(20%) contrast(1.05);
}
.pf-map-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 1rem;
  font-size: 0.72rem;
  font-weight: 300;
  color: var(--pale);
  letter-spacing: 0.08em;
}
.pf-map-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--bronze);
  flex-shrink: 0;
}

/* ── RELATED ── */
.pf-related { background: var(--cream); padding: 7vw 0; }
.pf-related-inner { max-width: 1200px; margin: 0 auto; padding: 0 8vw; }
.pf-related-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--linen);
}
.pf-related-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 300;
  color: var(--charcoal);
  line-height: 1.1;
}
.pf-related-title em { font-style: italic; color: var(--mid); }
.pf-related-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--linen);
}
.pf-rel-item {
  background: var(--cream);
  cursor: pointer;
  overflow: hidden;
  transition: background 0.3s;
}
.pf-rel-item:hover { background: var(--linen); }
.pf-rel-img { overflow: hidden; }
.pf-rel-img img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
  transition: transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94);
  filter: brightness(0.9);
}
.pf-rel-item:hover .pf-rel-img img { transform: scale(1.05); filter: brightness(1); }
.pf-rel-body { padding: 1.5rem 0; }
.pf-rel-cat {
  font-size: 0.6rem;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: var(--bronze);
  margin-bottom: 0.4rem;
}
.pf-rel-name {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.4rem;
  font-weight: 300;
  color: var(--charcoal);
  margin-bottom: 1.2rem;
}
.pf-rel-metas { display: flex; flex-direction: column; gap: 0.5rem; }
.pf-rel-meta { display: flex; gap: 1rem; align-items: baseline; }
.pf-rel-cta {
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
.pf-rel-item:hover .pf-rel-cta { gap: 14px; border-color: var(--bronze); }
.pf-rel-arr {
  width: 16px; height: 1px; background: var(--bronze);
  position: relative; transition: width 0.3s; flex-shrink: 0;
}
.pf-rel-arr::after {
  content: ''; position: absolute; right: 0; top: -3px;
  width: 6px; height: 6px;
  border-right: 1px solid var(--bronze);
  border-top: 1px solid var(--bronze);
  transform: rotate(45deg);
}
.pf-rel-item:hover .pf-rel-arr { width: 24px; }

/* ── LIGHTBOX ── */
.pf-lightbox {
  position: fixed;
  inset: 0;
  z-index: 999;
  background: rgba(20,18,15,0.96);
  display: flex;
  align-items: center;
  justify-content: center;
}
.pf-lightbox-img {
  max-width: 90vw;
  max-height: 88vh;
  object-fit: contain;
  display: block;
}
.pf-lightbox-close {
  position: absolute;
  top: 24px; right: 28px;
  background: none; border: none;
  color: var(--ivory); cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.65rem; letter-spacing: 0.22em;
  text-transform: uppercase;
  display: flex; align-items: center; gap: 10px;
}
.pf-lightbox-close-x { width: 22px; height: 22px; position: relative; }
.pf-lightbox-close-x::before,
.pf-lightbox-close-x::after {
  content: ''; position: absolute;
  top: 50%; left: 0;
  width: 100%; height: 1px; background: var(--ivory);
}
.pf-lightbox-close-x::before { transform: rotate(45deg); }
.pf-lightbox-close-x::after  { transform: rotate(-45deg); }
.pf-lightbox-nav {
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
.pf-lightbox-nav:hover { border-color: var(--bronze-l); background: rgba(160,120,64,0.15); }
.pf-lightbox-nav--prev { left: 24px; }
.pf-lightbox-nav--next { right: 24px; }
.pf-lightbox-count {
  position: absolute; bottom: 24px;
  font-size: 0.63rem; letter-spacing: 0.2em;
  color: rgba(248,245,240,0.4);
  font-family: 'DM Sans', sans-serif;
}

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .pf-intro { grid-template-columns: 1fr; gap: 3rem; padding: 10vw 6vw; }
  .pf-gallery { grid-template-columns: 1fr; }
  .pf-related-grid { grid-template-columns: 1fr; }
  .pf-related-head { flex-direction: column; align-items: flex-start; gap: 1rem; }
  .pf-section-inner { padding: 0 6vw; }
  .pf-related-inner { padding: 0 6vw; }
  .pf-map-section { padding: 10vw 6vw; }
  .pf-map-wrapper { padding-bottom: 65%; }
  .pf-hero-content { padding: 0 6vw 8vh; }
  .pf-video-section video { height: 50vh; }
  .pf-title { font-size: 3rem; }
  .pf-video-label { left: 6vw; }
}
</style>

<template>
  <div class="pf-page">

    <!-- ── LIGHTBOX ── -->
    <teleport to="body">
      <div v-if="galleryOpen" class="pf-lightbox" @click.self="galleryOpen = false">
        <img
          :src="galleryImages[currentImage]"
          class="pf-lightbox-img"
          :alt="'Gallery image ' + (currentImage + 1)"
        />
        <button class="pf-lightbox-close" @click="galleryOpen = false">
          Close <span class="pf-lightbox-close-x" />
        </button>
        <button class="pf-lightbox-nav pf-lightbox-nav--prev" @click="prevImage">&#8592;</button>
        <button class="pf-lightbox-nav pf-lightbox-nav--next" @click="nextImage">&#8594;</button>
        <span class="pf-lightbox-count">{{ currentImage + 1 }} / {{ galleryImages.length }}</span>
      </div>
    </teleport>

    <!-- ── HERO ── -->
    <section class="pf-hero">
      <img
        src="/eishi/batangas_tokyo_farm/images/hero.jpg"
        class="pf-hero-img"
        :class="{ ready }"
        alt="Batangas Poultry Farm"
      />
      <div class="pf-hero-veil" />
      <div class="pf-hero-content">
        <p class="pf-eyebrow" :class="{ in: ready }">
          Agriculture &mdash; San Jose, Batangas
        </p>
        <h1 class="pf-title" :class="{ in: ready }">
          {{ t.batangasPoultry?.split(' ').slice(0, -1).join(' ') || 'Poultry' }}<br />
          <em>{{ t.batangasPoultry?.split(' ').slice(-1)[0] || 'Farm' }}</em>
        </h1>
        <div class="pf-hero-meta" :class="{ in: ready }">
          <span class="pf-location">
            <span class="pf-location-dot" />
            {{ t.sanJoseMunicipality || 'San Jose, Batangas' }}
          </span>
          <div class="pf-scroll">
            <div class="pf-scroll-bar" />
            <span>Scroll</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── INTRO ── -->
    <div class="pf-intro">

      <!-- Left: paragraphs -->
      <div>
        <p class="pf-label-tag">{{ t.poultrySubtitle || 'Poultry Operations' }}</p>
        <div class="pf-paragraphs">
          <p class="pf-p">{{ t.batangasP1 }}</p>
          <p class="pf-p">{{ t.batangasP2 }}</p>
          <p class="pf-p">{{ t.batangasP3 }}</p>
          <p class="pf-p">{{ t.batangasP4 }}</p>
          <p class="pf-p">{{ t.batangasP5 }}</p>
        </div>
      </div>

      <!-- Right: details table -->
      <div class="pf-table">
        <div class="pf-row">
          <span class="pf-row-lbl">{{ t.propertyNameLabel || 'Property' }}</span>
          <span class="pf-row-val">{{ t.batangasPoultry }}</span>
        </div>
        <div class="pf-row">
          <span class="pf-row-lbl">{{ t.location || 'Location' }}</span>
          <span class="pf-row-val">{{ t.sanJoseMunicipality }}</span>
        </div>
        <div class="pf-row">
          <span class="pf-row-lbl">{{ t.establishedLabel || 'Established' }}</span>
          <span class="pf-row-val">{{ t.establishedPlanned }}</span>
        </div>
        <div class="pf-row">
          <span class="pf-row-lbl">{{ t.projectScaleLabel || 'Project Scale' }}</span>
          <span class="pf-row-val">{{ t.projectScaleLarge }}</span>
        </div>
      </div>

    </div>

    <!-- ── VIDEO ── -->
    <section class="pf-video-section">
      <p class="pf-video-label">Farm Operations</p>
      <video autoplay loop muted playsinline preload="metadata" poster="/images/hero-img.jpg">
        <source src="/eishi/batangas_tokyo_farm/videos/1.mp4" type="video/mp4" />
      </video>
    </section>

    <!-- ── GALLERY SECTIONS ── -->
    <section class="pf-sections">
      <div class="pf-section-inner">
        <div
          v-for="(section, index) in translatedSections"
          :key="section.key"
          class="pf-section-block"
        >
          <div class="pf-section-head">
            <span class="pf-section-num">{{ twoDigits(index + 1) }}</span>
            <h2 class="pf-section-caption">{{ section.caption }}</h2>
          </div>
          <div class="pf-gallery">
            <div
              v-for="(img, i) in section.images"
              :key="i"
              class="pf-gallery-item"
              @click="openGallery(section.images, i)"
            >
              <img :src="img" :alt="section.caption + ' ' + (i + 1)" loading="lazy" />
              <div class="pf-gallery-overlay">
                <div class="pf-gallery-zoom">
                  <span class="pf-zoom-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── MAP ── -->
    <section class="pf-map-section">
      <div class="pf-map-inner">
        <div class="pf-map-head">
          <p class="pf-map-label">Location</p>
          <h2 class="pf-map-title">TOKYO1 Farm &mdash; Sitio Pulo</h2>
        </div>
        <div class="pf-map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.3096626867014!2d121.0837639!3d13.880423299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd1276c1bf74a1%3A0xb096433be623caaf!2sTOKYO1%20FARM%20SlTIO%20PULO!5e0!3m2!1sen!2sph!4v1770646477053!5m2!1sen!2sph"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
        <div class="pf-map-footer">
          <span class="pf-map-dot" />
          TOKYO1 Farm, Sitio Pulo, San Jose, Batangas
        </div>
      </div>
    </section>

    <!-- ── RELATED PROPERTIES ── -->
    <section class="pf-related">
      <div class="pf-related-inner">
        <div class="pf-related-head">
          <h2 class="pf-related-title">
            {{ t.relatedProperties || 'Related' }}<br /><em>Properties</em>
          </h2>
        </div>
        <div class="pf-related-grid">
          <div
            v-for="(property, index) in translatedProperties"
            :key="index"
            class="pf-rel-item"
            @click="$router.push(property.route)"
          >
            <div class="pf-rel-img">
              <img :src="property.image" :alt="property.title" loading="lazy" />
            </div>
            <div class="pf-rel-body">
              <p class="pf-rel-cat">{{ t.relatedPropertyCategory || 'Holdings' }}</p>
              <h3 class="pf-rel-name">{{ property.title }}</h3>
              <div class="pf-rel-metas">
                <template v-for="(value, key) in property.details" :key="key">
                  <div v-if="key !== 'description'" class="pf-rel-meta">
                    <span class="pf-row-lbl">{{ key }}</span>
                    <span class="pf-row-val" style="font-size:0.85rem;">{{ value }}</span>
                  </div>
                </template>
              </div>
              <span class="pf-rel-cta">
                {{ t.viewProperty || 'View Details' }}
                <span class="pf-rel-arr" />
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
  name: 'BatangasPoultryFarm',

  data() {
    return {
      ready: false,
      galleryOpen: false,
      galleryImages: [],
      currentImage: 0,
    }
  },

  computed: {
    ...mapState(useLanguageStore, ['t']),
    translatedProperties() { return this.t.properties || [] },
    translatedSections()   { return this.t.poultry_sections || [] },
  },

  mounted() {
    this.$nextTick(() => {
      setTimeout(() => { this.ready = true }, 180)

      // Gallery scroll-reveals
      const galleryItems = this.$el.querySelectorAll('.pf-gallery-item')
      galleryItems.forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0,
            duration: 0.7,
            delay: (i % 2) * 0.12,
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
      const relItems = this.$el.querySelectorAll('.pf-rel-item')
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
    twoDigits(n) { return n < 10 ? '0' + n : String(n) },

    openGallery(images, index) {
      this.galleryImages = images
      this.currentImage = index
      this.galleryOpen = true
    },
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.galleryImages.length
    },
    prevImage() {
      this.currentImage = (this.currentImage - 1 + this.galleryImages.length) % this.galleryImages.length
    },
  },
}
</script>
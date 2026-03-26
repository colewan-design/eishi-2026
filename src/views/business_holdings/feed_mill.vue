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

.fm-page { font-family: 'DM Sans', sans-serif; background: var(--ivory); color: var(--ink); }
* { box-sizing: border-box; }

/* ── HERO ── */
.fm-hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: var(--charcoal);
}
.fm-hero-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  transform: scale(1.06);
  transition: transform 8s ease;
}
.fm-hero-img.ready { transform: scale(1); }
.fm-hero-veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(28,26,23,0.3) 0%, rgba(248,245,240,0.96) 100%);
}
.fm-hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 8vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 8vh;
}
.fm-eyebrow {
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
.fm-eyebrow::before {
  content: '';
  display: block;
  width: 26px;
  height: 1px;
  background: var(--bronze-l);
}
.fm-eyebrow.in { opacity: 1; transform: none; }
.fm-title {
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
.fm-title em { font-style: italic; color: var(--bronze-l); }
.fm-title.in { opacity: 1; transform: none; }
.fm-hero-meta {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.8s 0.8s ease, transform 0.8s 0.8s ease;
}
.fm-hero-meta.in { opacity: 1; transform: none; }
.fm-location {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  font-weight: 300;
  color: var(--mid);
  letter-spacing: 0.05em;
}
.fm-location-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--bronze);
  flex-shrink: 0;
}
.fm-scroll {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.6rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--pale);
  margin-left: auto;
}
.fm-scroll-bar {
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
.fm-intro {
  max-width: 1200px;
  margin: 0 auto;
  padding: 7vw 8vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6vw;
  align-items: start;
}
.fm-paragraphs { display: flex; flex-direction: column; gap: 1.5rem; }
.fm-p {
  font-size: 0.96rem;
  font-weight: 300;
  line-height: 1.95;
  color: var(--mid);
}
.fm-label-tag {
  font-size: 0.67rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--bronze);
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 2rem;
}
.fm-label-tag::before {
  content: '';
  display: block;
  width: 26px;
  height: 1px;
  background: var(--bronze);
}

/* ── DETAILS TABLE ── */
.fm-table { display: flex; flex-direction: column; }
.fm-table-section { margin-bottom: 0.5rem; }
.fm-row {
  padding: 14px 0;
  border-bottom: 1px solid var(--linen);
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.fm-row-lbl {
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--pale);
}
.fm-row-val {
  font-size: 0.92rem;
  font-weight: 300;
  color: var(--charcoal);
}
.fm-row-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0 1px;
  background: var(--linen);
  border-bottom: 1px solid var(--linen);
}
.fm-row-group .fm-row {
  background: var(--ivory);
  border-bottom: none;
  padding: 14px 12px;
}

/* ── SECTIONS (Gallery) ── */
.fm-sections { background: var(--cream); padding: 6vw 0; }
.fm-section-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 8vw;
}
.fm-section-block { margin-bottom: 6rem; }
.fm-section-head {
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--linen);
}
.fm-section-num {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 4rem;
  font-weight: 300;
  color: var(--linen);
  line-height: 1;
  flex-shrink: 0;
}
.fm-section-caption {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 300;
  color: var(--charcoal);
  line-height: 1.15;
}
.fm-section-caption em { font-style: italic; color: var(--mid); }
.fm-gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--linen);
}
.fm-gallery-item {
  overflow: hidden;
  cursor: pointer;
  position: relative;
}
.fm-gallery-item:first-child:nth-last-child(odd):last-child {
  grid-column: span 2;
}
.fm-gallery-item img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  display: block;
  transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.4s;
  filter: brightness(0.92);
}
.fm-gallery-item:hover img {
  transform: scale(1.05);
  filter: brightness(1);
}
.fm-gallery-overlay {
  position: absolute;
  inset: 0;
  background: rgba(28,26,23,0);
  transition: background 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fm-gallery-item:hover .fm-gallery-overlay { background: rgba(28,26,23,0.18); }
.fm-gallery-zoom {
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
.fm-gallery-item:hover .fm-gallery-zoom {
  opacity: 1;
  transform: scale(1);
}
.fm-gallery-zoom-icon {
  width: 16px;
  height: 16px;
  position: relative;
}
.fm-gallery-zoom-icon::before,
.fm-gallery-zoom-icon::after {
  content: '';
  position: absolute;
  background: var(--ivory);
}
.fm-gallery-zoom-icon::before { width: 1px; height: 16px; left: 50%; top: 0; }
.fm-gallery-zoom-icon::after  { width: 16px; height: 1px; left: 0; top: 50%; }

/* ── DIVIDER ── */
.fm-divider {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 8vw;
  border-top: 1px solid var(--linen);
}

/* ── RELATED ── */
.fm-related { background: var(--ivory); padding: 7vw 0; }
.fm-related-inner { max-width: 1200px; margin: 0 auto; padding: 0 8vw; }
.fm-related-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--linen);
}
.fm-related-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 300;
  color: var(--charcoal);
  line-height: 1.1;
}
.fm-related-title em { font-style: italic; color: var(--mid); }
.fm-related-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--linen);
}
.fm-rel-item {
  background: var(--ivory);
  cursor: pointer;
  overflow: hidden;
  transition: background 0.3s;
}
.fm-rel-item:hover { background: var(--cream); }
.fm-rel-img { overflow: hidden; }
.fm-rel-img img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
  transition: transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94);
  filter: brightness(0.9);
}
.fm-rel-item:hover .fm-rel-img img { transform: scale(1.05); filter: brightness(1); }
.fm-rel-body { padding: 1.5rem 0; }
.fm-rel-cat {
  font-size: 0.6rem;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: var(--bronze);
  margin-bottom: 0.4rem;
}
.fm-rel-name {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.4rem;
  font-weight: 300;
  color: var(--charcoal);
  margin-bottom: 1.2rem;
}
.fm-rel-metas { display: flex; flex-direction: column; gap: 0.5rem; }
.fm-rel-meta { display: flex; gap: 1rem; align-items: baseline; }
.fm-rel-cta {
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
.fm-rel-item:hover .fm-rel-cta { gap: 14px; border-color: var(--bronze); }
.fm-rel-arr {
  width: 16px; height: 1px; background: var(--bronze); position: relative; transition: width 0.3s;
}
.fm-rel-arr::after {
  content: ''; position: absolute; right: 0; top: -3px;
  width: 6px; height: 6px;
  border-right: 1px solid var(--bronze); border-top: 1px solid var(--bronze);
  transform: rotate(45deg);
}
.fm-rel-item:hover .fm-rel-arr { width: 24px; }

/* ── LIGHTBOX ── */
.fm-lightbox {
  position: fixed;
  inset: 0;
  z-index: 999;
  background: rgba(20,18,15,0.96);
  display: flex;
  align-items: center;
  justify-content: center;
}
.fm-lightbox-img {
  max-width: 90vw;
  max-height: 88vh;
  object-fit: contain;
  display: block;
}
.fm-lightbox-close {
  position: absolute;
  top: 24px; right: 28px;
  background: none; border: none;
  color: var(--ivory); cursor: pointer;
  font-size: 0.65rem; letter-spacing: 0.22em;
  text-transform: uppercase; display: flex; align-items: center; gap: 10px;
}
.fm-lightbox-close-x { width: 24px; height: 24px; position: relative; }
.fm-lightbox-close-x::before,
.fm-lightbox-close-x::after {
  content: ''; position: absolute; top: 50%; left: 0;
  width: 100%; height: 1px; background: var(--ivory);
}
.fm-lightbox-close-x::before { transform: rotate(45deg); }
.fm-lightbox-close-x::after  { transform: rotate(-45deg); }
.fm-lightbox-nav {
  position: absolute;
  top: 50%; transform: translateY(-50%);
  background: none; border: 1px solid rgba(248,245,240,0.2);
  color: var(--ivory); cursor: pointer;
  width: 50px; height: 50px;
  display: flex; align-items: center; justify-content: center;
  transition: border-color 0.3s, background 0.3s;
  font-size: 1.2rem;
}
.fm-lightbox-nav:hover { border-color: var(--bronze-l); background: rgba(160,120,64,0.15); }
.fm-lightbox-nav--prev { left: 24px; }
.fm-lightbox-nav--next { right: 24px; }
.fm-lightbox-count {
  position: absolute; bottom: 24px;
  font-size: 0.63rem; letter-spacing: 0.2em;
  color: rgba(248,245,240,0.4);
}

/* ── MOBILE ── */
@media (max-width: 768px) {
  .fm-intro { grid-template-columns: 1fr; gap: 3rem; padding: 10vw 6vw; }
  .fm-gallery { grid-template-columns: 1fr; }
  .fm-gallery-item:first-child:nth-last-child(odd):last-child { grid-column: span 1; }
  .fm-related-grid { grid-template-columns: 1fr; }
  .fm-related-head { flex-direction: column; align-items: flex-start; gap: 1rem; }
  .fm-section-inner { padding: 0 6vw; }
  .fm-related-inner { padding: 0 6vw; }
  .fm-hero-content { padding: 0 6vw 8vh; }
  .fm-row-group { grid-template-columns: 1fr; background: none; }
  .fm-row-group .fm-row { padding: 14px 0; border-bottom: 1px solid var(--linen); }
  .fm-title { font-size: 3rem; }
}
</style>

<template>
  <div class="fm-page">

    <!-- ── LIGHTBOX ── -->
    <teleport to="body">
      <div v-if="galleryOpen" class="fm-lightbox" @click.self="galleryOpen = false">
        <img :src="galleryImages[currentImage]" class="fm-lightbox-img" :alt="'Gallery image ' + (currentImage + 1)" />

        <button class="fm-lightbox-close" @click="galleryOpen = false">
          Close <span class="fm-lightbox-close-x" />
        </button>

        <button class="fm-lightbox-nav fm-lightbox-nav--prev" @click="prevImage">&#8592;</button>
        <button class="fm-lightbox-nav fm-lightbox-nav--next" @click="nextImage">&#8594;</button>

        <span class="fm-lightbox-count">
          {{ currentImage + 1 }} / {{ galleryImages.length }}
        </span>
      </div>
    </teleport>

    <!-- ── HERO ── -->
    <section class="fm-hero">
      <img
        src="/eishi/feed_mill/images/new-hero.jpg"
        class="fm-hero-img"
        :class="{ ready }"
        alt="Feed Mill"
      />
      <div class="fm-hero-veil" />
      <div class="fm-hero-content">
        <p class="fm-eyebrow" :class="{ in: ready }">
          Agriculture &mdash; San Jose, Batangas
        </p>
        <h1 class="fm-title" :class="{ in: ready }">
          {{ t.feedMillDetails?.businessNameValue || 'Feed' }}<br />
          <em>Mill</em>
        </h1>
        <div class="fm-hero-meta" :class="{ in: ready }">
          <span class="fm-location">
            <span class="fm-location-dot" />
            {{ t.feedMillLocation || 'San Jose, Batangas' }}
          </span>
          <div class="fm-scroll">
            <div class="fm-scroll-bar" />
            <span>Scroll</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── INTRO ── -->
    <div class="fm-intro">

      <!-- Left: paragraphs -->
      <div>
        <p class="fm-label-tag">{{ t.feedMillDetails?.businessTypeValue || 'Feed Manufacturing' }}</p>
        <div class="fm-paragraphs">
          <p class="fm-p">{{ t.feedMillText?.paragraph1 }}</p>
          <p class="fm-p">{{ t.feedMillText?.paragraph2 }}</p>
        </div>
      </div>

      <!-- Right: details table -->
      <div class="fm-table">
        <div class="fm-row">
          <span class="fm-row-lbl">{{ t.feedMillDetails?.businessNameLabel || 'Business Name' }}</span>
          <span class="fm-row-val">{{ t.feedMillDetails?.businessNameValue }}</span>
        </div>
        <div class="fm-row">
          <span class="fm-row-lbl">{{ t.feedMillDetails?.businessTypeLabel || 'Type' }}</span>
          <span class="fm-row-val">{{ t.feedMillDetails?.businessTypeValue }}</span>
        </div>
        <div class="fm-row">
          <span class="fm-row-lbl">{{ t.feedMillDetails?.supportsLabel || 'Supports' }}</span>
          <span class="fm-row-val">{{ t.feedMillDetails?.supportsValue }}</span>
        </div>
        <div class="fm-row">
          <span class="fm-row-lbl">{{ t.feedMillDetails?.ownershipLabel || 'Ownership' }}</span>
          <span class="fm-row-val">{{ t.feedMillDetails?.ownershipValue }}</span>
        </div>

        <div class="fm-row-group">
          <div class="fm-row">
            <span class="fm-row-lbl">{{ t.feedMillDetails?.numberOfFactoriesLabel }}</span>
            <span class="fm-row-val">{{ t.feedMillDetails?.numberOfFactoriesValue }}</span>
          </div>
          <div class="fm-row">
            <span class="fm-row-lbl">{{ t.feedMillDetails?.feedProductionLabel }}</span>
            <span class="fm-row-val">{{ t.feedMillDetails?.feedProductionValue }}</span>
          </div>
          <div class="fm-row">
            <span class="fm-row-lbl">{{ t.feedMillDetails?.qualityFocusLabel }}</span>
            <span class="fm-row-val">{{ t.feedMillDetails?.qualityFocusValue }}</span>
          </div>
        </div>

        <div class="fm-row-group">
          <div class="fm-row">
            <span class="fm-row-lbl">{{ t.feedMillDetails?.feedBenefitsLabel }}</span>
            <span class="fm-row-val">{{ t.feedMillDetails?.feedBenefitsValue }}</span>
          </div>
          <div class="fm-row">
            <span class="fm-row-lbl">{{ t.feedMillDetails?.endProductLabel }}</span>
            <span class="fm-row-val">{{ t.feedMillDetails?.endProductValue }}</span>
          </div>
          <div class="fm-row">
            <span class="fm-row-lbl">{{ t.feedMillDetails?.operationalGoalLabel }}</span>
            <span class="fm-row-val">{{ t.feedMillDetails?.operationalGoalValue }}</span>
          </div>
        </div>
      </div>

    </div>

    <!-- ── GALLERY SECTIONS ── -->
    <section class="fm-sections">
      <div class="fm-section-inner">
        <div
          v-for="(section, index) in translatedSections"
          :key="section.key"
          class="fm-section-block"
        >
          <div class="fm-section-head">
            <span class="fm-section-num">{{ twoDigits(index + 1) }}</span>
            <h2 class="fm-section-caption">{{ section.caption }}</h2>
          </div>

          <div class="fm-gallery">
            <div
              v-for="(img, i) in section.images"
              :key="i"
              class="fm-gallery-item"
              @click="openGallery(section.images, i)"
            >
              <img :src="img" :alt="section.caption + ' ' + (i + 1)" loading="lazy" />
              <div class="fm-gallery-overlay">
                <div class="fm-gallery-zoom">
                  <span class="fm-gallery-zoom-icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── RELATED PROPERTIES ── -->
    <section class="fm-related">
      <div class="fm-related-inner">
        <div class="fm-related-head">
          <h2 class="fm-related-title">
            {{ t.relatedProperties || 'Related' }}<br /><em>Properties</em>
          </h2>
        </div>

        <div class="fm-related-grid">
          <div
            v-for="(property, index) in translatedProperties"
            :key="index"
            class="fm-rel-item"
            @click="$router.push(property.route)"
          >
            <div class="fm-rel-img">
              <img :src="property.image" :alt="property.title" loading="lazy" />
            </div>
            <div class="fm-rel-body">
              <p class="fm-rel-cat">{{ t.relatedPropertyCategory || 'Holdings' }}</p>
              <h3 class="fm-rel-name">{{ property.title }}</h3>
              <div class="fm-rel-metas">
                <template v-for="(value, key) in property.details" :key="key">
                  <div v-if="key !== 'description'" class="fm-rel-meta">
                    <span class="fm-row-lbl">{{ key }}</span>
                    <span class="fm-row-val" style="font-size:0.85rem;">{{ value }}</span>
                  </div>
                </template>
              </div>
              <span class="fm-rel-cta">
                {{ t.viewProperty || 'View Details' }}
                <span class="fm-rel-arr" />
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
  name: 'FeedMillPage',

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

    translatedProperties() {
      return this.t.properties || []
    },

    translatedSections() {
      return this.t.feedmill_sections || []
    },
  },

  mounted() {
    this.$nextTick(() => {
      setTimeout(() => { this.ready = true }, 180)

      // Scroll-reveal on gallery items
      const items = this.$el.querySelectorAll('.fm-gallery-item')
      items.forEach((el, i) => {
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

      // Related card reveals
      const relItems = this.$el.querySelectorAll('.fm-rel-item')
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
    twoDigits(n) {
      return n < 10 ? '0' + n : String(n)
    },

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
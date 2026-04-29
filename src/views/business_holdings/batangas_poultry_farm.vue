<style>
.pf-page { font-family: 'Inter', sans-serif; background: #FFFFFF; color: #1E293B; }
* { box-sizing: border-box; }

/* ── HERO ── */
.pf-hero { position: relative; height: 100vh; overflow: hidden; background: #0F172A; }
.pf-hero-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.5; transform: scale(1.06); transition: transform 8s ease; }
.pf-hero-img.ready { transform: scale(1); }
.pf-hero-veil { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(15,23,42,0.2) 40%, rgba(15,23,42,0.75) 100%); }
.pf-hero-content { position: relative; z-index: 2; height: 100%; max-width: 1200px; margin: 0 auto; padding: 0 8vw 8vh; display: flex; flex-direction: column; justify-content: flex-end; }
.pf-eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #60A5FA; display: flex; align-items: center; gap: 10px; margin-bottom: 1.4rem; opacity: 0; transform: translateY(10px); transition: opacity 0.9s 0.2s ease, transform 0.9s 0.2s ease; }
.pf-eyebrow::before { content: ''; display: block; width: 26px; height: 2px; background: #60A5FA; border-radius: 1px; }
.pf-eyebrow.in { opacity: 1; transform: none; }
.pf-title { font-size: clamp(3rem, 8vw, 7rem); font-weight: 700; color: #FFFFFF; line-height: 0.95; letter-spacing: -0.025em; margin: 0 0 2rem; opacity: 0; transform: translateY(28px); transition: opacity 1.1s 0.4s ease, transform 1.1s 0.4s ease; }
.pf-title em { font-style: italic; color: #60A5FA; font-weight: 400; }
.pf-title.in { opacity: 1; transform: none; }
.pf-hero-meta { display: flex; align-items: center; gap: 2.5rem; opacity: 0; transform: translateY(12px); transition: opacity 0.8s 0.8s ease, transform 0.8s 0.8s ease; }
.pf-hero-meta.in { opacity: 1; transform: none; }
.pf-location { display: flex; align-items: center; gap: 8px; font-size: 0.875rem; font-weight: 400; color: rgba(255,255,255,0.6); }
.pf-location-dot { width: 5px; height: 5px; border-radius: 50%; background: #60A5FA; flex-shrink: 0; }
.pf-scroll { display: flex; align-items: center; gap: 10px; font-size: 0.65rem; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.35); margin-left: auto; }
.pf-scroll-bar { width: 1px; height: 45px; background: rgba(255,255,255,0.2); animation: breathe 2.2s ease-in-out infinite; }
@keyframes breathe { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }

/* ── INTRO ── */
.pf-intro { max-width: 1200px; margin: 0 auto; padding: 7vw 8vw; display: grid; grid-template-columns: 1fr 1fr; gap: 6vw; align-items: start; }
.pf-label-tag { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #0066CC; display: flex; align-items: center; gap: 10px; margin-bottom: 2rem; }
.pf-label-tag::before { content: ''; display: block; width: 26px; height: 2px; background: #0066CC; border-radius: 1px; }
.pf-paragraphs { display: flex; flex-direction: column; gap: 1.4rem; }
.pf-p { font-size: 0.95rem; font-weight: 400; line-height: 1.85; color: #64748B; }

/* ── DETAILS TABLE ── */
.pf-table { display: flex; flex-direction: column; }
.pf-row { padding: 14px 0; border-bottom: 1px solid #E2E8F0; display: flex; flex-direction: column; gap: 4px; }
.pf-row-lbl { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #94A3B8; }
.pf-row-val { font-size: 0.92rem; font-weight: 500; color: #1E293B; }

/* ── VIDEO ── */
.pf-video-section { background: #0F172A; position: relative; overflow: hidden; }
.pf-video-label { position: absolute; top: 2.5rem; left: 8vw; z-index: 2; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.35); display: flex; align-items: center; gap: 10px; }
.pf-video-label::before { content: ''; display: block; width: 20px; height: 2px; background: #60A5FA; border-radius: 1px; }
.pf-video-section video { width: 100%; height: 80vh; object-fit: cover; display: block; opacity: 0.75; }

/* ── GALLERY SECTIONS ── */
.pf-sections { background: #F8FAFC; padding: 6vw 0; }
.pf-section-inner { max-width: 1200px; margin: 0 auto; padding: 0 8vw; }
.pf-section-block { margin-bottom: 6rem; }
.pf-section-head { display: flex; align-items: baseline; gap: 1.5rem; margin-bottom: 2.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #E2E8F0; }
.pf-section-num { font-size: 3.5rem; font-weight: 700; color: #E2E8F0; line-height: 1; flex-shrink: 0; letter-spacing: -0.03em; }
.pf-section-caption { font-size: clamp(1.4rem, 2.8vw, 2.2rem); font-weight: 700; color: #1E293B; line-height: 1.15; letter-spacing: -0.02em; }
.pf-gallery { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2px; background: #E2E8F0; border-radius: 10px; overflow: hidden; }
.pf-gallery-item { overflow: hidden; cursor: pointer; position: relative; }
.pf-gallery-item img { width: 100%; aspect-ratio: 4/3; object-fit: cover; display: block; transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.4s; filter: brightness(0.92); }
.pf-gallery-item:hover img { transform: scale(1.05); filter: brightness(1); }
.pf-gallery-overlay { position: absolute; inset: 0; background: rgba(15,23,42,0); transition: background 0.4s; display: flex; align-items: center; justify-content: center; }
.pf-gallery-item:hover .pf-gallery-overlay { background: rgba(15,23,42,0.18); }
.pf-gallery-zoom { width: 40px; height: 40px; border-radius: 8px; border: 1.5px solid rgba(255,255,255,0.6); display: flex; align-items: center; justify-content: center; opacity: 0; transform: scale(0.8); transition: opacity 0.3s, transform 0.3s; }
.pf-gallery-item:hover .pf-gallery-zoom { opacity: 1; transform: scale(1); }
.pf-zoom-icon { width: 16px; height: 16px; position: relative; }
.pf-zoom-icon::before, .pf-zoom-icon::after { content: ''; position: absolute; background: #FFFFFF; }
.pf-zoom-icon::before { width: 1.5px; height: 16px; left: 50%; top: 0; }
.pf-zoom-icon::after  { width: 16px; height: 1.5px; left: 0; top: 50%; }

/* ── MAP ── */
.pf-map-section { background: #FFFFFF; padding: 5vw 8vw; }
.pf-map-inner { max-width: 1200px; margin: 0 auto; }
.pf-map-head { display: flex; align-items: baseline; gap: 1.5rem; margin-bottom: 2rem; padding-bottom: 1.5rem; border-bottom: 1px solid #E2E8F0; }
.pf-map-label { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #0066CC; display: flex; align-items: center; gap: 10px; }
.pf-map-label::before { content: ''; display: block; width: 26px; height: 2px; background: #0066CC; border-radius: 1px; }
.pf-map-title { font-size: clamp(1.2rem, 2vw, 1.75rem); font-weight: 700; color: #1E293B; letter-spacing: -0.01em; }
.pf-map-wrapper { position: relative; width: 100%; padding-bottom: 46%; overflow: hidden; background: #F8FAFC; border-radius: 10px; }
.pf-map-wrapper iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; filter: grayscale(20%) contrast(1.05); }
.pf-map-footer { display: flex; align-items: center; gap: 8px; margin-top: 1rem; font-size: 0.75rem; font-weight: 500; color: #94A3B8; }
.pf-map-dot { width: 5px; height: 5px; border-radius: 50%; background: #0066CC; flex-shrink: 0; }

/* ── RELATED ── */
.pf-related { background: #F8FAFC; padding: 7vw 0; }
.pf-related-inner { max-width: 1200px; margin: 0 auto; padding: 0 8vw; }
.pf-related-head { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 3.5rem; padding-bottom: 2rem; border-bottom: 1px solid #E2E8F0; }
.pf-related-title { font-size: clamp(1.8rem, 3.5vw, 2.8rem); font-weight: 700; color: #1E293B; line-height: 1.1; letter-spacing: -0.02em; }
.pf-related-title em { font-style: italic; color: #64748B; font-weight: 400; }
.pf-related-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
.pf-rel-item { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 12px; overflow: hidden; cursor: pointer; transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s; }
.pf-rel-item:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08); transform: translateY(-2px); border-color: #CBD5E1; }
.pf-rel-img { overflow: hidden; }
.pf-rel-img img { width: 100%; height: 280px; object-fit: cover; display: block; transition: transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94); filter: brightness(0.95); }
.pf-rel-item:hover .pf-rel-img img { transform: scale(1.04); filter: brightness(1); }
.pf-rel-body { padding: 1.25rem 1.25rem 1.5rem; }
.pf-rel-cat { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #0066CC; margin-bottom: 0.4rem; }
.pf-rel-name { font-size: 1.2rem; font-weight: 700; color: #1E293B; margin-bottom: 1rem; line-height: 1.2; letter-spacing: -0.01em; }
.pf-rel-metas { display: flex; flex-direction: column; gap: 0.5rem; }
.pf-rel-meta { display: flex; gap: 1rem; align-items: baseline; }
.pf-rel-cta { display: inline-flex; align-items: center; gap: 8px; margin-top: 1rem; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #0066CC; padding-bottom: 2px; border-bottom: 2px solid #EFF6FF; transition: gap 0.25s, border-color 0.25s; }
.pf-rel-item:hover .pf-rel-cta { gap: 14px; border-color: #0066CC; }
.pf-rel-arr { width: 14px; height: 1.5px; background: #0066CC; position: relative; transition: width 0.25s; flex-shrink: 0; }
.pf-rel-arr::after { content: ''; position: absolute; right: 0; top: -3px; width: 6px; height: 6px; border-right: 1.5px solid #0066CC; border-top: 1.5px solid #0066CC; transform: rotate(45deg); }
.pf-rel-item:hover .pf-rel-arr { width: 22px; }

/* ── LIGHTBOX ── */
.pf-lightbox { position: fixed; inset: 0; z-index: 999; background: rgba(15,23,42,0.97); display: flex; align-items: center; justify-content: center; }
.pf-lightbox-img { max-width: 90vw; max-height: 88vh; object-fit: contain; display: block; border-radius: 4px; }
.pf-lightbox-close { position: absolute; top: 24px; right: 28px; background: none; border: none; color: #FFFFFF; cursor: pointer; font-family: 'Inter', sans-serif; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; display: flex; align-items: center; gap: 10px; }
.pf-lightbox-close-x { width: 22px; height: 22px; position: relative; }
.pf-lightbox-close-x::before, .pf-lightbox-close-x::after { content: ''; position: absolute; top: 50%; left: 0; width: 100%; height: 1.5px; background: #FFFFFF; }
.pf-lightbox-close-x::before { transform: rotate(45deg); }
.pf-lightbox-close-x::after  { transform: rotate(-45deg); }
.pf-lightbox-nav { position: absolute; top: 50%; transform: translateY(-50%); background: none; border: 1.5px solid rgba(255,255,255,0.2); color: #FFFFFF; cursor: pointer; width: 50px; height: 50px; border-radius: 8px; display: flex; align-items: center; justify-content: center; transition: border-color 0.2s, background 0.2s; font-size: 1.2rem; }
.pf-lightbox-nav:hover { border-color: #60A5FA; background: rgba(96,165,250,0.1); }
.pf-lightbox-nav--prev { left: 24px; }
.pf-lightbox-nav--next { right: 24px; }
.pf-lightbox-count { position: absolute; bottom: 24px; font-size: 0.65rem; font-weight: 600; letter-spacing: 0.12em; color: rgba(255,255,255,0.4); }

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
  .pf-title { font-size: 2.8rem; }
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

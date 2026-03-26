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

.cebu-page { font-family: 'DM Sans', sans-serif; background: var(--ivory); color: var(--ink); }
* { box-sizing: border-box; }

/* ── HERO ── */
.cebu-hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: var(--charcoal);
}
.cebu-hero-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  transform: scale(1.06);
  transition: transform 8s ease;
}
.cebu-hero-img.ready { transform: scale(1); }
.cebu-hero-veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(28,26,23,0.25) 0%, rgba(248,245,240,0.96) 100%);
}
.cebu-hero-content {
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
.cebu-eyebrow {
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
.cebu-eyebrow::before {
  content: '';
  display: block;
  width: 26px;
  height: 1px;
  background: var(--bronze-l);
}
.cebu-eyebrow.in { opacity: 1; transform: none; }
.cebu-title {
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
.cebu-title em { font-style: italic; color: var(--bronze-l); }
.cebu-title.in { opacity: 1; transform: none; }
.cebu-hero-bottom {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.8s 0.8s ease, transform 0.8s 0.8s ease;
}
.cebu-hero-bottom.in { opacity: 1; transform: none; }
.cebu-location {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
  font-weight: 300;
  color: var(--mid);
}
.cebu-location-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--bronze);
  flex-shrink: 0;
}
.cebu-tour-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  border: 1px solid rgba(248,245,240,0.35);
  color: var(--ivory);
  background: transparent;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.67rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  padding: 12px 24px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.35s, border-color 0.35s;
}
.cebu-tour-btn:hover {
  background: rgba(248,245,240,0.1);
  border-color: rgba(248,245,240,0.65);
}
.cebu-tour-arr {
  width: 16px; height: 1px; background: currentColor;
  position: relative; transition: width 0.3s; flex-shrink: 0;
}
.cebu-tour-arr::after {
  content: ''; position: absolute; right: 0; top: -3px;
  width: 6px; height: 6px;
  border-right: 1px solid currentColor;
  border-top: 1px solid currentColor;
  transform: rotate(45deg);
}
.cebu-tour-btn:hover .cebu-tour-arr { width: 24px; }
.cebu-scroll {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.6rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--pale);
  margin-left: auto;
}
.cebu-scroll-bar {
  width: 1px; height: 45px; background: var(--linen);
  animation: breathe 2.2s ease-in-out infinite;
}
@keyframes breathe {
  0%,100% { opacity: 0.4; }
  50%      { opacity: 1; }
}

/* ── INTRO ── */
.cebu-intro {
  max-width: 1200px;
  margin: 0 auto;
  padding: 7vw 8vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6vw;
  align-items: start;
}
.cebu-label-tag {
  font-size: 0.67rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--bronze);
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 2rem;
}
.cebu-label-tag::before {
  content: '';
  display: block;
  width: 26px;
  height: 1px;
  background: var(--bronze);
}
.cebu-paragraphs { display: flex; flex-direction: column; gap: 1.4rem; }
.cebu-p {
  font-size: 0.94rem;
  font-weight: 300;
  line-height: 1.95;
  color: var(--mid);
}

/* ── DETAILS TABLE ── */
.cebu-table { display: flex; flex-direction: column; }
.cebu-row {
  padding: 14px 0;
  border-bottom: 1px solid var(--linen);
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.cebu-row-lbl {
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--pale);
}
.cebu-row-val {
  font-size: 0.92rem;
  font-weight: 300;
  color: var(--charcoal);
}
.cebu-row-group {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0 1px;
  background: var(--linen);
  border-bottom: 1px solid var(--linen);
}
.cebu-row-group .cebu-row {
  background: var(--ivory);
  border-bottom: none;
  padding: 14px 12px;
}

/* ── VIDEO ── */
.cebu-video-section {
  background: var(--charcoal);
  position: relative;
  overflow: hidden;
}
.cebu-video-label {
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
.cebu-video-label::before {
  content: '';
  display: block;
  width: 20px;
  height: 1px;
  background: var(--bronze-l);
}
.cebu-video-section video {
  width: 100%;
  height: 80vh;
  object-fit: cover;
  display: block;
  opacity: 0.75;
}

/* ── GALLERY ── */
.cebu-gallery-section {
  background: var(--cream);
  padding: 6vw 0;
}
.cebu-gallery-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 8vw;
}
.cebu-gallery-head {
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--linen);
}
.cebu-gallery-num {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 4rem;
  font-weight: 300;
  color: var(--linen);
  line-height: 1;
  flex-shrink: 0;
}
.cebu-gallery-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 300;
  color: var(--charcoal);
  line-height: 1.15;
}

/* First image full-width, rest 2-col */
.cebu-gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--linen);
}
.cebu-gallery-grid .cebu-gi:first-child {
  grid-column: span 2;
}
.cebu-gi {
  overflow: hidden;
  cursor: pointer;
  position: relative;
}
.cebu-gi img {
  width: 100%;
  height: 100%;
  min-height: 320px;
  object-fit: cover;
  display: block;
  transition: transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.4s;
  filter: brightness(0.9);
}
.cebu-gi:first-child img { min-height: 580px; }
.cebu-gi:hover img { transform: scale(1.05); filter: brightness(1); }
.cebu-gi-overlay {
  position: absolute;
  inset: 0;
  background: rgba(28,26,23,0);
  transition: background 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cebu-gi:hover .cebu-gi-overlay { background: rgba(28,26,23,0.15); }
.cebu-gi-zoom {
  width: 40px; height: 40px;
  border: 1px solid rgba(248,245,240,0.7);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transform: scale(0.8);
  transition: opacity 0.3s, transform 0.3s;
}
.cebu-gi:hover .cebu-gi-zoom { opacity: 1; transform: scale(1); }
.cebu-zoom-icon { width: 16px; height: 16px; position: relative; }
.cebu-zoom-icon::before, .cebu-zoom-icon::after {
  content: ''; position: absolute; background: var(--ivory);
}
.cebu-zoom-icon::before { width: 1px; height: 16px; left: 50%; top: 0; }
.cebu-zoom-icon::after  { width: 16px; height: 1px; left: 0; top: 50%; }

/* ── MAPS (two side-by-side) ── */
.cebu-maps-section {
  background: var(--ivory);
  padding: 5vw 8vw;
}
.cebu-maps-inner { max-width: 1200px; margin: 0 auto; }
.cebu-maps-head {
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--linen);
}
.cebu-maps-label {
  font-size: 0.67rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--bronze);
  display: flex;
  align-items: center;
  gap: 12px;
}
.cebu-maps-label::before {
  content: '';
  display: block;
  width: 26px;
  height: 1px;
  background: var(--bronze);
}
.cebu-maps-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  font-weight: 300;
  color: var(--charcoal);
}
.cebu-maps-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: var(--linen);
}
.cebu-map-block { background: var(--ivory); }
.cebu-map-block-head {
  padding: 1.2rem 1.5rem;
  border-bottom: 1px solid var(--linen);
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.cebu-map-block-name {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.1rem;
  font-weight: 300;
  color: var(--charcoal);
}
.cebu-map-block-addr {
  font-size: 0.72rem;
  font-weight: 300;
  color: var(--pale);
  letter-spacing: 0.06em;
}
.cebu-map-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 60%;
  overflow: hidden;
}
.cebu-map-wrapper iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  filter: grayscale(20%) contrast(1.05);
}
.cebu-map-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.9rem 1.5rem;
  font-size: 0.68rem;
  font-weight: 300;
  color: var(--pale);
  letter-spacing: 0.06em;
  border-top: 1px solid var(--linen);
}
.cebu-map-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background: var(--bronze);
  flex-shrink: 0;
}

/* ── RELATED ── */
.cebu-related { background: var(--cream); padding: 7vw 0; }
.cebu-related-inner { max-width: 1200px; margin: 0 auto; padding: 0 8vw; }
.cebu-related-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--linen);
}
.cebu-related-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 300;
  color: var(--charcoal);
  line-height: 1.1;
}
.cebu-related-title em { font-style: italic; color: var(--mid); }
.cebu-related-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--linen);
}
.cebu-rel-item {
  background: var(--cream);
  cursor: pointer;
  overflow: hidden;
  transition: background 0.3s;
}
.cebu-rel-item:hover { background: var(--linen); }
.cebu-rel-img { overflow: hidden; }
.cebu-rel-img img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
  transition: transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94);
  filter: brightness(0.9);
}
.cebu-rel-item:hover .cebu-rel-img img { transform: scale(1.05); filter: brightness(1); }
.cebu-rel-body { padding: 1.5rem 0; }
.cebu-rel-cat {
  font-size: 0.6rem;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: var(--bronze);
  margin-bottom: 0.4rem;
}
.cebu-rel-name {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.4rem;
  font-weight: 300;
  color: var(--charcoal);
  margin-bottom: 1.2rem;
}
.cebu-rel-metas { display: flex; flex-direction: column; gap: 0.5rem; }
.cebu-rel-meta { display: flex; gap: 1rem; align-items: baseline; }
.cebu-rel-cta {
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
.cebu-rel-item:hover .cebu-rel-cta { gap: 14px; border-color: var(--bronze); }
.cebu-rel-arr {
  width: 16px; height: 1px; background: var(--bronze);
  position: relative; transition: width 0.3s; flex-shrink: 0;
}
.cebu-rel-arr::after {
  content: ''; position: absolute; right: 0; top: -3px;
  width: 6px; height: 6px;
  border-right: 1px solid var(--bronze);
  border-top: 1px solid var(--bronze);
  transform: rotate(45deg);
}
.cebu-rel-item:hover .cebu-rel-arr { width: 24px; }

/* ── LIGHTBOX ── */
.cebu-lightbox {
  position: fixed;
  inset: 0;
  z-index: 999;
  background: rgba(20,18,15,0.96);
  display: flex;
  align-items: center;
  justify-content: center;
}
.cebu-lightbox-img {
  max-width: 90vw;
  max-height: 88vh;
  object-fit: contain;
  display: block;
}
.cebu-lightbox-close {
  position: absolute;
  top: 24px; right: 28px;
  background: none; border: none;
  color: var(--ivory); cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.65rem; letter-spacing: 0.22em;
  text-transform: uppercase;
  display: flex; align-items: center; gap: 10px;
}
.cebu-lightbox-close-x { width: 22px; height: 22px; position: relative; }
.cebu-lightbox-close-x::before,
.cebu-lightbox-close-x::after {
  content: ''; position: absolute; top: 50%; left: 0;
  width: 100%; height: 1px; background: var(--ivory);
}
.cebu-lightbox-close-x::before { transform: rotate(45deg); }
.cebu-lightbox-close-x::after  { transform: rotate(-45deg); }
.cebu-lightbox-nav {
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
.cebu-lightbox-nav:hover { border-color: var(--bronze-l); background: rgba(160,120,64,0.15); }
.cebu-lightbox-nav--prev { left: 24px; }
.cebu-lightbox-nav--next { right: 24px; }
.cebu-lightbox-count {
  position: absolute; bottom: 24px;
  font-size: 0.63rem; letter-spacing: 0.2em;
  color: rgba(248,245,240,0.4);
  font-family: 'DM Sans', sans-serif;
}

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .cebu-intro { grid-template-columns: 1fr; gap: 3rem; padding: 10vw 6vw; }
  .cebu-gallery-grid { grid-template-columns: 1fr; }
  .cebu-gallery-grid .cebu-gi:first-child { grid-column: span 1; }
  .cebu-gi img { min-height: 260px !important; }
  .cebu-maps-grid { grid-template-columns: 1fr; }
  .cebu-related-grid { grid-template-columns: 1fr; }
  .cebu-related-head { flex-direction: column; align-items: flex-start; gap: 1rem; }
  .cebu-gallery-inner { padding: 0 6vw; }
  .cebu-related-inner { padding: 0 6vw; }
  .cebu-maps-section { padding: 10vw 6vw; }
  .cebu-map-wrapper { padding-bottom: 65%; }
  .cebu-hero-content { padding: 0 6vw 8vh; }
  .cebu-video-section video { height: 50vh; }
  .cebu-title { font-size: 3rem; }
  .cebu-video-label { left: 6vw; }
  .cebu-row-group { grid-template-columns: 1fr; background: none; }
  .cebu-row-group .cebu-row { padding: 14px 0; border-bottom: 1px solid var(--linen); }
  .cebu-hero-bottom { flex-wrap: wrap; gap: 1rem; }
  .cebu-scroll { margin-left: 0; }
}
</style>

<template>
  <div class="cebu-page">

    <!-- ── LIGHTBOX ── -->
    <teleport to="body">
      <div v-if="lightboxOpen" class="cebu-lightbox" @click.self="lightboxOpen = false">
        <img
          :src="images[lightboxIndex]"
          class="cebu-lightbox-img"
          :alt="'Cebu Condominium photo ' + (lightboxIndex + 1)"
        />
        <button class="cebu-lightbox-close" @click="lightboxOpen = false">
          Close <span class="cebu-lightbox-close-x" />
        </button>
        <button class="cebu-lightbox-nav cebu-lightbox-nav--prev" @click="prevImage">&#8592;</button>
        <button class="cebu-lightbox-nav cebu-lightbox-nav--next" @click="nextImage">&#8594;</button>
        <span class="cebu-lightbox-count">{{ lightboxIndex + 1 }} / {{ images.length }}</span>
      </div>
    </teleport>

    <!-- ── HERO ── -->
    <section class="cebu-hero">
      <img
        src="/eishi/cebu_condo/images/20240626_094939.webp"
        class="cebu-hero-img"
        :class="{ ready }"
        alt="Cebu Condominium"
      />
      <div class="cebu-hero-veil" />
      <div class="cebu-hero-content">
        <p class="cebu-eyebrow" :class="{ in: ready }">
          Real Estate &mdash; Cebu City
        </p>
        <h1 class="cebu-title" :class="{ in: ready }">
          {{ t.cebuCondo?.split(' ').slice(0, 1).join(' ') || 'Cebu' }}<br />
          <em>{{ t.cebuCondo?.split(' ').slice(1).join(' ') || 'Condominium' }}</em>
        </h1>
        <div class="cebu-hero-bottom" :class="{ in: ready }">
          <span class="cebu-location">
            <span class="cebu-location-dot" />
            {{ t.cebuCondoLocation || 'Cebu City, Philippines' }}
          </span>
          <router-link to="/tour/cebu-condominium" class="cebu-tour-btn">
            {{ t.startTour || 'Start Virtual Tour' }}
            <span class="cebu-tour-arr" />
          </router-link>
          <div class="cebu-scroll">
            <div class="cebu-scroll-bar" />
            <span>Scroll</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── INTRO ── -->
    <div class="cebu-intro">

      <!-- Left: paragraphs -->
      <div>
        <p class="cebu-label-tag">{{ t.cebuPremiumCondo || 'Premium Condominiums' }}</p>
        <div class="cebu-paragraphs">
          <p class="cebu-p">{{ t.cebuP1 }}</p>
          <p class="cebu-p">{{ t.cebuP2 }}</p>
        </div>
      </div>

      <!-- Right: details table -->
      <div class="cebu-table">
        <div class="cebu-row">
          <span class="cebu-row-lbl">{{ t.solineaPropertyName || 'Property Name' }}</span>
          <span class="cebu-row-val">{{ t.solineaPropertyNameValue }}</span>
        </div>
        <div class="cebu-row">
          <span class="cebu-row-lbl">{{ t.solineaLocationLabel || 'Location' }}</span>
          <span class="cebu-row-val">{{ t.solineaLocationValue }}</span>
        </div>
        <div class="cebu-row">
          <span class="cebu-row-lbl">{{ t.solineaOwnedByLabel || 'Owned By' }}</span>
          <span class="cebu-row-val">{{ t.solineaOwnedByValue }}</span>
        </div>

        <div class="cebu-row-group">
          <div class="cebu-row">
            <span class="cebu-row-lbl">{{ t.solineaNumberOfCondosLabel || 'No. of Condos' }}</span>
            <span class="cebu-row-val">{{ t.solineaNumberOfCondosValue }}</span>
          </div>
          <div class="cebu-row">
            <span class="cebu-row-lbl">{{ t.solineaTowerLabel || 'Tower' }}</span>
            <span class="cebu-row-val">{{ t.solineaTowerValue }}</span>
          </div>
          <div class="cebu-row">
            <span class="cebu-row-lbl">{{ t.solineaResidencesLabel || 'Residences' }}</span>
            <span class="cebu-row-val">{{ t.solineaResidencesValue }}</span>
          </div>
        </div>

        <div class="cebu-row-group">
          <div class="cebu-row">
            <span class="cebu-row-lbl">{{ t.solineaTourismAccessLabel || 'Tourism Access' }}</span>
            <span class="cebu-row-val">{{ t.solineaTourismAccessValue }}</span>
          </div>
          <div class="cebu-row">
            <span class="cebu-row-lbl">{{ t.solineaTransportConnectivityLabel || 'Transport' }}</span>
            <span class="cebu-row-val">{{ t.solineaTransportConnectivityValue }}</span>
          </div>
          <div class="cebu-row">
            <span class="cebu-row-lbl">{{ t.solineaPortAccessLabel || 'Port Access' }}</span>
            <span class="cebu-row-val">{{ t.solineaPortAccessValue }}</span>
          </div>
        </div>
      </div>

    </div>

    <!-- ── VIDEO ── -->
    <section class="cebu-video-section">
      <p class="cebu-video-label">Property Walkthrough</p>
      <video autoplay loop muted playsinline preload="metadata" poster="/images/hero-img.jpg">
        <source src="/eishi/cebu_condo/videos/second.mp4" type="video/mp4" />
      </video>
    </section>

    <!-- ── PHOTO GALLERY ── -->
    <section class="cebu-gallery-section">
      <div class="cebu-gallery-inner">
        <div class="cebu-gallery-head">
          <span class="cebu-gallery-num">01</span>
          <h2 class="cebu-gallery-title">Property Gallery</h2>
        </div>
        <div class="cebu-gallery-grid">
          <div
            v-for="(image, index) in images"
            :key="index"
            class="cebu-gi"
            @click="openLightbox(index)"
          >
            <img :src="image" :alt="'Cebu Condo photo ' + (index + 1)" loading="lazy" />
            <div class="cebu-gi-overlay">
              <div class="cebu-gi-zoom">
                <span class="cebu-zoom-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── MAPS ── -->
    <section class="cebu-maps-section">
      <div class="cebu-maps-inner">
        <div class="cebu-maps-head">
          <p class="cebu-maps-label">Locations</p>
          <h2 class="cebu-maps-title">Solinea &amp; 1016 Residences</h2>
        </div>
        <div class="cebu-maps-grid">

          <!-- Solinea Tower 2 -->
          <div class="cebu-map-block">
            <div class="cebu-map-block-head">
              <span class="cebu-map-block-name">Solinea Tower 2 (Turquoise)</span>
              <span class="cebu-map-block-addr">Archbishop Reyes Ave, Cebu City</span>
            </div>
            <div class="cebu-map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.323107217678!2d123.90524699999999!3d10.316005900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9996f0a76a68f%3A0xe00f6ab71e76e84e!2sSolinea%20Tower%202%20(Turquoise)!5e0!3m2!1sen!2sph!4v1770645058541!5m2!1sen!2sph"
                allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
            <div class="cebu-map-footer">
              <span class="cebu-map-dot" />
              Solinea Tower 2 (Turquoise), Cebu City
            </div>
          </div>

          <!-- 1016 Residences -->
          <div class="cebu-map-block">
            <div class="cebu-map-block-head">
              <span class="cebu-map-block-name">1016 Residences</span>
              <span class="cebu-map-block-addr">1016 Masbate Rd, Cebu City, 6000 Cebu</span>
            </div>
            <div class="cebu-map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.321452422929!2d123.90733340000001!3d10.3161386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999a7ed6dd929%3A0x7aac01daa5b61a26!2s1016%20residences!5e0!3m2!1sen!2sph!4v1770646059309!5m2!1sen!2sph"
                allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
            <div class="cebu-map-footer">
              <span class="cebu-map-dot" />
              1016 Masbate Rd, Cebu City, 6000 Cebu
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ── RELATED PROPERTIES ── -->
    <section class="cebu-related">
      <div class="cebu-related-inner">
        <div class="cebu-related-head">
          <h2 class="cebu-related-title">
            {{ t.relatedProperties || 'Related' }}<br /><em>Properties</em>
          </h2>
        </div>
        <div class="cebu-related-grid">
          <div
            v-for="(property, index) in translatedProperties"
            :key="index"
            class="cebu-rel-item"
            @click="$router.push(property.route)"
          >
            <div class="cebu-rel-img">
              <img :src="property.image" :alt="property.title" loading="lazy" />
            </div>
            <div class="cebu-rel-body">
              <p class="cebu-rel-cat">{{ t.relatedPropertyCategory || 'Holdings' }}</p>
              <h3 class="cebu-rel-name">{{ property.title }}</h3>
              <div class="cebu-rel-metas">
                <template v-for="(value, key) in property.details" :key="key">
                  <div v-if="key !== 'description'" class="cebu-rel-meta">
                    <span class="cebu-row-lbl">{{ key }}</span>
                    <span class="cebu-row-val" style="font-size:0.85rem;">{{ value }}</span>
                  </div>
                </template>
              </div>
              <span class="cebu-rel-cta">
                {{ t.viewProperty || 'View Details' }}
                <span class="cebu-rel-arr" />
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
  name: 'CebuCondominium',

  data() {
    return {
      ready: false,
      lightboxOpen: false,
      lightboxIndex: 0,

      images: [
        '/eishi/cebu_condo/images/20240626_094216.webp',
        '/eishi/cebu_condo/images/20240626_094939.webp',
        '/eishi/cebu_condo/images/20250415_141241.webp',
        '/eishi/cebu_condo/images/20250415_141347.webp',
        '/eishi/cebu_condo/images/20250415_141525.webp',
        '/eishi/cebu_condo/images/20250415_142354.webp',
        '/eishi/cebu_condo/images/20250415_143729.webp',
        '/eishi/cebu_condo/images/20250415_143755.webp',
        '/eishi/cebu_condo/images/20250415_143805.webp',
        '/eishi/cebu_condo/images/20250415_142402.webp',
        '/eishi/cebu_condo/images/20250415_142511.webp',
        '/eishi/cebu_condo/images/20250415_143742.webp',
        '/eishi/cebu_condo/images/20250415_141254.webp',
        '/eishi/cebu_condo/images/20250415_141354.webp',
        '/eishi/cebu_condo/images/20250415_142349.webp',
        '/eishi/cebu_condo/images/20250415_142553.webp',
        '/eishi/cebu_condo/images/20250415_143751.webp',
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
      const galleryItems = this.$el.querySelectorAll('.cebu-gi')
      galleryItems.forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0,
            duration: 0.7,
            delay: (i % 2) * 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Related cards
      const relItems = this.$el.querySelectorAll('.cebu-rel-item')
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

      // Map blocks
      const mapBlocks = this.$el.querySelectorAll('.cebu-map-block')
      mapBlocks.forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 20 },
          {
            opacity: 1, y: 0,
            duration: 0.7,
            delay: i * 0.15,
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
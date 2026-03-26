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

.props-page { font-family: var(--dm); background: var(--ivory); color: var(--ink); }
* { box-sizing: border-box; }

/* ── PAGE HERO ── */
.ph-hero {
  background: var(--charcoal);
  padding: 10rem 8vw 5rem;
  position: relative;
  overflow: hidden;
}
.ph-hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: url('/eishi/pangasinan_farm/images/dji_fly_20250311_151954_0036_1741678753512_photo.webp') center/cover no-repeat;
  opacity: 0.12;
  z-index: 0;
}
.ph-hero-inner {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 3rem;
}
.ph-left {}
.ph-eyebrow {
  font-family: var(--dm);
  font-size: 0.67rem;
  letter-spacing: 0.34em;
  text-transform: uppercase;
  color: var(--bronze-l);
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 1.5rem;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.8s 0.1s ease, transform 0.8s 0.1s ease;
}
.ph-eyebrow.in { opacity: 1; transform: none; }
.ph-eyebrow::before {
  content: '';
  display: block;
  width: 26px;
  height: 1px;
  background: var(--bronze-l);
}
.ph-title {
  font-family: var(--fd);
  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 300;
  color: var(--ivory);
  line-height: 1.05;
  margin: 0 0 0.5rem;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 1s 0.3s ease, transform 1s 0.3s ease;
}
.ph-title em { font-style: italic; color: var(--bronze-l); }
.ph-title.in { opacity: 1; transform: none; }
.ph-sub {
  font-size: 0.92rem;
  font-weight: 300;
  color: rgba(248,245,240,0.45);
  line-height: 1.8;
  max-width: 360px;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.8s 0.6s ease, transform 0.8s 0.6s ease;
}
.ph-sub.in { opacity: 1; transform: none; }
.ph-count {
  font-family: var(--fd);
  font-size: clamp(5rem, 10vw, 9rem);
  font-weight: 300;
  color: rgba(255,255,255,0.06);
  line-height: 1;
  flex-shrink: 0;
  opacity: 0;
  transition: opacity 1s 0.5s ease;
}
.ph-count.in { opacity: 1; }

/* ── FILTER BAR ── */
.filter-bar {
  background: var(--cream);
  border-bottom: 1px solid var(--linen);
  position: sticky;
  top: 0;
  z-index: 50;
}
.filter-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.4rem 8vw;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.filter-label {
  font-size: 0.62rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--pale);
  white-space: nowrap;
}
.filter-selects {
  display: flex;
  gap: 1rem;
  flex: 1;
  flex-wrap: wrap;
}
.filter-field {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 160px;
}
.filter-field-label {
  font-size: 0.58rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--pale);
}
.filter-select {
  font-family: var(--dm);
  font-size: 0.82rem;
  font-weight: 300;
  color: var(--ink);
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--linen);
  padding: 6px 24px 6px 0;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23b0a898'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 4px center;
  cursor: pointer;
  outline: none;
  transition: border-color 0.3s;
}
.filter-select:focus { border-color: var(--bronze); }
.filter-divider {
  width: 1px;
  height: 32px;
  background: var(--linen);
  flex-shrink: 0;
}
.filter-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--charcoal);
  color: var(--charcoal);
  background: transparent;
  font-family: var(--dm);
  font-size: 0.67rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 10px 22px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  white-space: nowrap;
}
.filter-btn:hover { background: var(--charcoal); color: var(--ivory); }
.filter-count {
  font-size: 0.67rem;
  letter-spacing: 0.15em;
  color: var(--pale);
  margin-left: auto;
  white-space: nowrap;
}

/* ── PROPERTY LIST ── */
.props-list { background: var(--cream); }

.prop-item {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 8vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid var(--linen);
  cursor: pointer;
  overflow: hidden;
  transition: background 0.3s;
}
.prop-item:first-child { border-top: 1px solid var(--linen); }
.prop-item:hover { background: rgba(228,221,211,0.5); }
.prop-item:hover .pi-img img { transform: scale(1.06); }

/* Alternate: image left on even items */
.prop-item--r .prop-text { order: 2; }
.prop-item--r .pi-img   { order: 1; }

.prop-text {
  padding: 5vw 4vw 5vw 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.prop-item--r .prop-text { padding: 5vw 0 5vw 4vw; }

.prop-num {
  font-family: var(--fd);
  font-size: 3.5rem;
  font-weight: 300;
  color: var(--linen);
  line-height: 1;
  margin-bottom: 1rem;
}
.prop-cat {
  font-size: 0.63rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--bronze);
  margin-bottom: 0.6rem;
}
.prop-name {
  font-family: var(--fd);
  font-size: clamp(1.8rem, 2.8vw, 2.6rem);
  font-weight: 300;
  color: var(--charcoal);
  line-height: 1.12;
  margin-bottom: 0.5rem;
}
.prop-desc {
  font-size: 0.87rem;
  font-weight: 300;
  line-height: 1.8;
  color: var(--mid);
  max-width: 380px;
  margin-bottom: 2rem;
}
.prop-metas {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin-bottom: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--linen);
}
.prop-meta-row { display: flex; gap: 1.5rem; align-items: baseline; }
.mk {
  font-size: 0.62rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--pale);
  min-width: 72px;
}
.mv { font-size: 0.88rem; color: var(--mid); font-weight: 300; }

.prop-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.67rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--bronze);
  border-bottom: 1px solid var(--bronze-xl);
  padding-bottom: 3px;
  align-self: flex-start;
  transition: gap 0.3s, border-color 0.3s;
}
.prop-cta-arr {
  width: 18px;
  height: 1px;
  background: var(--bronze);
  position: relative;
  transition: width 0.3s;
}
.prop-cta-arr::after {
  content: '';
  position: absolute;
  right: 0;
  top: -3px;
  width: 6px;
  height: 6px;
  border-right: 1px solid var(--bronze);
  border-top: 1px solid var(--bronze);
  transform: rotate(45deg);
}
.prop-item:hover .prop-cta { gap: 18px; border-color: var(--bronze); }
.prop-item:hover .prop-cta-arr { width: 28px; }

.pi-img { overflow: hidden; }
.pi-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  min-height: 440px;
  transition: transform 0.85s cubic-bezier(0.25,0.46,0.45,0.94);
}

/* ── EMPTY STATE ── */
.empty-state {
  max-width: 1200px;
  margin: 0 auto;
  padding: 8vw 8vw;
  text-align: center;
}
.empty-num {
  font-family: var(--fd);
  font-size: 6rem;
  font-weight: 300;
  color: var(--linen);
  line-height: 1;
  margin-bottom: 1.5rem;
}
.empty-text {
  font-size: 0.9rem;
  font-weight: 300;
  color: var(--pale);
  letter-spacing: 0.1em;
}

/* ── MOBILE ── */
.mobile-props { background: var(--cream); padding: 2rem 0 4rem; }

.mobile-prop-card {
  background: var(--ivory);
  margin: 0 1.5rem 1.5rem;
  cursor: pointer;
  transition: box-shadow 0.3s;
}
.mobile-prop-card:hover { box-shadow: 0 8px 40px rgba(28,26,23,0.12); }
.mobile-img { overflow: hidden; position: relative; }
.mobile-img img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  display: block;
  transition: transform 0.7s ease;
}
.mobile-prop-card:hover .mobile-img img { transform: scale(1.04); }
.mobile-img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(28,26,23,0.55), transparent 50%);
}
.mobile-img-label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem 1.2rem;
}
.mobile-img-cat {
  font-size: 0.6rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--bronze-l);
  margin-bottom: 0.3rem;
}
.mobile-img-name {
  font-family: var(--fd);
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--ivory);
  line-height: 1.1;
}
.mobile-prop-body { padding: 1.2rem; }
.mobile-prop-desc {
  font-size: 0.83rem;
  font-weight: 300;
  line-height: 1.75;
  color: var(--mid);
  margin-bottom: 1rem;
}
.mobile-metas { display: flex; flex-direction: column; gap: 0.55rem; margin-bottom: 1.2rem; border-top: 1px solid var(--linen); padding-top: 1rem; }
.mobile-meta-row { display: flex; gap: 1rem; align-items: baseline; }
.mobile-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.63rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--bronze);
  border-bottom: 1px solid var(--bronze-xl);
  padding-bottom: 2px;
}

/* mobile hero */
.ph-hero-mobile {
  background: var(--charcoal);
  padding: 7rem 1.5rem 3rem;
  position: relative;
  overflow: hidden;
}
.ph-hero-mobile::after {
  content: '';
  position: absolute;
  inset: 0;
  background: url('/eishi/pangasinan_farm/images/dji_fly_20250311_151954_0036_1741678753512_photo.webp') center/cover no-repeat;
  opacity: 0.12;
  z-index: 0;
}
.ph-hero-mobile-inner { position: relative; z-index: 1; }

/* mobile filter */
.filter-bar-mobile {
  background: var(--cream);
  border-bottom: 1px solid var(--linen);
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: sticky;
  top: 0;
  z-index: 50;
}
.filter-row { display: flex; gap: 0.75rem; }
.filter-field-mobile { flex: 1; display: flex; flex-direction: column; gap: 2px; }
.filter-btn-mobile {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid var(--charcoal);
  color: var(--charcoal);
  background: transparent;
  font-family: var(--dm);
  font-size: 0.67rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 12px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
}
.filter-btn-mobile:hover { background: var(--charcoal); color: var(--ivory); }

@media (max-width: 768px) {
  .ph-hero { display: none; }
  .filter-bar { display: none; }
  .props-list { display: none; }
}
@media (min-width: 769px) {
  .ph-hero-mobile { display: none; }
  .filter-bar-mobile { display: none; }
  .mobile-props { display: none; }
}
</style>

<template>
  <div class="props-page">

    <!-- ── DESKTOP ── -->

    <!-- Hero -->
    <section class="ph-hero">
      <div class="ph-hero-inner">
        <div class="ph-left">
          <p class="ph-eyebrow" :class="{ in: ready }">
            {{ t.exploreEishi || 'Explore Eishi' }}
          </p>
          <h1 class="ph-title" :class="{ in: ready }">
            {{ t.diversePropertyHoldings || 'Diverse' }}<br />
            <em>{{ t.propertyHoldings || 'Property Holdings' }}</em>
          </h1>
          <p class="ph-sub" :class="{ in: ready }">
            {{ t.propertiesSubtitle || 'A curated portfolio of agricultural, residential, and commercial assets across the Philippine archipelago.' }}
          </p>
        </div>
        <div class="ph-count" :class="{ in: ready }">
          {{ twoDigits(filteredProperties.length) }}
        </div>
      </div>
    </section>

    <!-- Filter Bar -->
    <div class="filter-bar">
      <div class="filter-inner">
        <span class="filter-label">{{ t.filter || 'Filter' }}</span>
        <div class="filter-selects">

          <div class="filter-field">
            <span class="filter-field-label">{{ t.location || 'Location' }}</span>
            <select class="filter-select" v-model="filters.location">
              <option :value="null">{{ t.allLocations || 'All Locations' }}</option>
              <option v-for="loc in translatedLocations" :key="loc" :value="loc">{{ loc }}</option>
            </select>
          </div>

          <div class="filter-divider" />

          <div class="filter-field">
            <span class="filter-field-label">{{ t.property || 'Property Type' }}</span>
            <select class="filter-select" v-model="filters.property">
              <option :value="null">{{ t.allProperties || 'All Properties' }}</option>
              <option v-for="pt in translatedPropertyTypes" :key="pt" :value="pt">{{ pt }}</option>
            </select>
          </div>

          <div class="filter-divider" />

          <div class="filter-field">
            <span class="filter-field-label">{{ t.type || 'Category' }}</span>
            <select class="filter-select" v-model="filters.type">
              <option :value="null">{{ t.allTypes || 'All Categories' }}</option>
              <option v-for="tp in translatedTypes" :key="tp" :value="tp">{{ tp }}</option>
            </select>
          </div>

        </div>

        <button class="filter-btn" @click="applyFilters">
          {{ t.search || 'Search' }}
          <span style="display:inline-block;width:14px;height:1px;background:currentColor;position:relative;">
            <span style="position:absolute;right:0;top:-3px;width:6px;height:6px;border-right:1px solid currentColor;border-top:1px solid currentColor;transform:rotate(45deg);display:block;"></span>
          </span>
        </button>

        <span class="filter-count">
          {{ filteredProperties.length }} {{ t.results || 'properties' }}
        </span>
      </div>
    </div>

    <!-- Property List -->
    <section class="props-list">
      <div
        v-for="(property, index) in filteredProperties"
        :key="index"
        class="prop-item"
        :class="{ 'prop-item--r': index % 2 !== 0 }"
        @click="$router.push(property.route)"
      >
        <div class="prop-text">
          <div class="prop-num">{{ twoDigits(index + 1) }}</div>
          <p class="prop-cat">{{ property.tag || getCategoryLabel(property) }}</p>
          <h2 class="prop-name">{{ property.title }}</h2>
          <p v-if="property.details?.description" class="prop-desc">
            {{ property.details.description }}
          </p>

          <div class="prop-metas">
            <template v-for="(value, key) in property.details" :key="key">
              <div v-if="key !== 'description'" class="prop-meta-row">
                <span class="mk">{{ translatedPropertyLabels[key] || key }}</span>
                <span class="mv">{{ value }}</span>
              </div>
            </template>
          </div>

          <span class="prop-cta">
            {{ t.viewProperty || 'View Details' }}
            <span class="prop-cta-arr" />
          </span>
        </div>

        <div class="pi-img">
          <img :src="property.image" :alt="property.title" loading="lazy" />
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredProperties.length === 0" class="empty-state">
        <div class="empty-num">—</div>
        <p class="empty-text">{{ t.noResults || 'No properties match your criteria.' }}</p>
      </div>
    </section>


    <!-- ── MOBILE ── -->

    <!-- Mobile Hero -->
    <section class="ph-hero-mobile">
      <div class="ph-hero-mobile-inner">
        <p class="ph-eyebrow" style="opacity:1;transform:none;margin-bottom:1rem;">
          {{ t.exploreEishi || 'Explore Eishi' }}
        </p>
        <h1 class="ph-title" style="font-size:2.8rem;opacity:1;transform:none;">
          {{ t.diversePropertyHoldings || 'Diverse' }}<br />
          <em>{{ t.propertyHoldings || 'Property Holdings' }}</em>
        </h1>
      </div>
    </section>

    <!-- Mobile Filter -->
    <div class="filter-bar-mobile">
      <div class="filter-row">
        <div class="filter-field-mobile">
          <span class="filter-field-label">{{ t.location || 'Location' }}</span>
          <select class="filter-select" v-model="filters.location">
            <option :value="null">{{ t.allLocations || 'All' }}</option>
            <option v-for="loc in translatedLocations" :key="loc" :value="loc">{{ loc }}</option>
          </select>
        </div>
        <div class="filter-field-mobile">
          <span class="filter-field-label">{{ t.property || 'Type' }}</span>
          <select class="filter-select" v-model="filters.property">
            <option :value="null">{{ t.allProperties || 'All' }}</option>
            <option v-for="pt in translatedPropertyTypes" :key="pt" :value="pt">{{ pt }}</option>
          </select>
        </div>
        <div class="filter-field-mobile">
          <span class="filter-field-label">{{ t.type || 'Category' }}</span>
          <select class="filter-select" v-model="filters.type">
            <option :value="null">{{ t.allTypes || 'All' }}</option>
            <option v-for="tp in translatedTypes" :key="tp" :value="tp">{{ tp }}</option>
          </select>
        </div>
      </div>
      <button class="filter-btn-mobile" @click="applyFilters">
        {{ t.search || 'Search Properties' }}
      </button>
    </div>

    <!-- Mobile Cards -->
    <div class="mobile-props">
      <div
        v-for="(property, index) in filteredProperties"
        :key="'m' + index"
        class="mobile-prop-card"
        @click="$router.push(property.route)"
      >
        <div class="mobile-img">
          <img :src="property.image" :alt="property.title" loading="lazy" />
          <div class="mobile-img-overlay" />
          <div class="mobile-img-label">
            <p class="mobile-img-cat">{{ property.tag || getCategoryLabel(property) }}</p>
            <h2 class="mobile-img-name">{{ property.title }}</h2>
          </div>
        </div>
        <div class="mobile-prop-body">
          <p v-if="property.details?.description" class="mobile-prop-desc">
            {{ property.details.description }}
          </p>
          <div class="mobile-metas">
            <template v-for="(value, key) in property.details" :key="key">
              <div v-if="key !== 'description'" class="mobile-meta-row">
                <span class="mk">{{ translatedPropertyLabels[key] || key }}</span>
                <span class="mv">{{ value }}</span>
              </div>
            </template>
          </div>
          <span class="mobile-cta">
            {{ t.viewProperty || 'View Details' }} →
          </span>
        </div>
      </div>

      <div v-if="filteredProperties.length === 0" class="empty-state">
        <div class="empty-num">—</div>
        <p class="empty-text">{{ t.noResults || 'No properties match your criteria.' }}</p>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useLanguageStore } from '@/stores/languageStore'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'PropertyListingPage',

  data() {
    return {
      ready: false,
      filters: {
        location: null,
        property: null,
        type: null,
      },
    }
  },

  computed: {
    ...mapState(useLanguageStore, ['t']),

    translatedPropertyLabels() {
      return this.t.properties || {}
    },

    translatedTypes() {
      return this.t.types || []
    },

    translatedLocations() {
      return this.t.locations || []
    },

    translatedPropertyTypes() {
      return this.t.propertyTypes || []
    },

    filteredProperties() {
      const props = this.t.properties || []
      return props.filter((p) => {
        const locationMatch =
          !this.filters.location ||
          p.details?.Location?.includes(this.filters.location)

        const propertyMatch =
          !this.filters.property ||
          p.title?.toLowerCase().includes(this.filters.property.toLowerCase())

        const typeMatch =
          !this.filters.type ||
          p.type === this.filters.type

        return locationMatch && propertyMatch && typeMatch
      })
    },
  },

  mounted() {
    this.$nextTick(() => {
      setTimeout(() => { this.ready = true }, 180)
    })
  },

  methods: {
    twoDigits(n) {
      return n < 10 ? '0' + n : String(n)
    },

    getCategoryLabel(property) {
      // Derive a tag from property title or details if not present
      const title = (property.title || '').toLowerCase()
      if (title.includes('farm') || title.includes('poultry') || title.includes('feed'))
        return 'Agriculture'
      if (title.includes('condo') || title.includes('residential') || title.includes('land'))
        return 'Real Estate'
      if (title.includes('car') || title.includes('rental'))
        return 'Transport'
      return 'Holdings'
    },

    applyFilters() {
      // filters are already reactive; this can trigger analytics or scroll
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>
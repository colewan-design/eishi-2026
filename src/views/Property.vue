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
  display: inline-block;
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  padding: 0.25em 0.75em;
  border-radius: 2px;
  margin-bottom: 1rem;
  font-weight: 500;
  /* default: agriculture / operating assets */
  color: var(--bronze);
  background: var(--bronze-xl);
}
.prop-cat--real-estate {
  color: #3d5a4e;
  background: #d4e8df;
}
.prop-cat--operating {
  color: var(--mid);
  background: var(--linen);
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
  display: inline-block;
  font-size: 0.58rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  padding: 0.2em 0.65em;
  border-radius: 2px;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--bronze-l);
  background: rgba(255,255,255,0.15);
}
.mobile-img-cat--real-estate {
  color: #a8dcc4;
  background: rgba(61,90,78,0.55);
}
.mobile-img-cat--operating {
  color: var(--pale);
  background: rgba(255,255,255,0.1);
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

/* ── CUSTOM PROPERTY-TYPE DROPDOWN ── */
.prop-type-select {
  position: relative;
  font-family: var(--dm);
}
.prop-type-trigger {
  display: flex;
  align-items: center;
  gap: 7px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: var(--dm);
  font-size: 0.78rem;
  color: var(--ink);
  padding: 0;
  white-space: nowrap;
}
.prop-type-placeholder { color: var(--mid); }
.prop-type-arrow {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-right: 1px solid var(--mid);
  border-bottom: 1px solid var(--mid);
  transform: rotate(45deg);
  margin-top: -3px;
  transition: transform 0.2s;
}
.prop-type-select.open .prop-type-arrow { transform: rotate(-135deg); margin-top: 3px; }
.prop-type-panel {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  min-width: 200px;
  background: var(--ivory);
  border: 1px solid var(--linen);
  box-shadow: 0 8px 32px rgba(28,26,23,0.12);
  z-index: 200;
  padding: 6px 0;
}
.prop-type-option {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 8px 14px;
  font-size: 0.78rem;
  color: var(--ink);
  cursor: pointer;
  transition: background 0.15s;
}
.prop-type-option:hover { background: var(--cream); }
.prop-type-option.active { color: var(--bronze); }
.type-chip {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--bronze);
}
.type-chip--real-estate { background: #3d5a4e; }
.type-chip--transport   { background: var(--mid); }
</style>

<template>
  <div class="props-page">

    <!-- ── DESKTOP ── -->

    <!-- Hero -->
    <section class="ph-hero">
      <div class="ph-hero-inner">
        <div class="ph-left">
          <p class="ph-eyebrow" :class="{ in: ready }">
            {{ t.exploreEishi }}
          </p>
          <h1 class="ph-title" :class="{ in: ready }">
            {{ t.diversePropertyHoldings }}<br />
            <em>{{ t.propertyHoldings }}</em>
          </h1>
          <p class="ph-sub" :class="{ in: ready }">
            {{ t.propertiesSubtitle }}
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
        <span class="filter-label">{{ t.filter }}</span>
        <div class="filter-selects">

          <div class="filter-field">
            <span class="filter-field-label">{{ t.location }}</span>
            <div class="prop-type-select" :class="{ open: locationOpen }">
              <button class="prop-type-trigger" @click.stop="locationOpen = !locationOpen">
                <span v-if="filters.location">{{ filters.location }}</span>
                <span v-else class="prop-type-placeholder">{{ t.allLocations }}</span>
                <span class="prop-type-arrow"></span>
              </button>
              <div class="prop-type-panel" v-show="locationOpen">
                <div class="prop-type-option" @click.stop="selectLocation(null)">{{ t.allLocations }}</div>
                <div
                  v-for="loc in translatedLocations"
                  :key="loc"
                  class="prop-type-option"
                  :class="{ active: filters.location === loc }"
                  @click.stop="selectLocation(loc)"
                >{{ loc }}</div>
              </div>
            </div>
          </div>

          <div class="filter-divider" />

          <div class="filter-field">
            <span class="filter-field-label">{{ t.property }}</span>
            <div class="prop-type-select" :class="{ open: propTypeOpen }">
              <button class="prop-type-trigger" @click.stop="propTypeOpen = !propTypeOpen">
                <template v-if="filters.property">
                  <span class="type-chip" :class="getPropertyTypeClass(filters.property)"></span>
                  {{ filters.property }}
                </template>
                <span v-else class="prop-type-placeholder">{{ t.allProperties }}</span>
                <span class="prop-type-arrow"></span>
              </button>
              <div class="prop-type-panel" v-show="propTypeOpen">
                <div class="prop-type-option" @click.stop="selectPropertyType(null)">
                  {{ t.allProperties }}
                </div>
                <div
                  v-for="pt in translatedPropertyTypes"
                  :key="pt"
                  class="prop-type-option"
                  :class="{ active: filters.property === pt }"
                  @click.stop="selectPropertyType(pt)"
                >
                  <span class="type-chip" :class="getPropertyTypeClass(pt)"></span>
                  {{ pt }}
                </div>
              </div>
            </div>
          </div>

          <div class="filter-divider" />

          <div class="filter-field">
            <span class="filter-field-label">{{ t.type }}</span>
            <div class="prop-type-select" :class="{ open: typeOpen }">
              <button class="prop-type-trigger" @click.stop="typeOpen = !typeOpen">
                <template v-if="filters.type">
                  <span class="type-chip" :class="getTypeChipClass(filters.type)"></span>
                  {{ filters.type }}
                </template>
                <span v-else class="prop-type-placeholder">{{ t.allTypes }}</span>
                <span class="prop-type-arrow"></span>
              </button>
              <div class="prop-type-panel" v-show="typeOpen">
                <div class="prop-type-option" @click.stop="selectType(null)">{{ t.allTypes }}</div>
                <div
                  v-for="tp in translatedTypes"
                  :key="tp"
                  class="prop-type-option"
                  :class="{ active: filters.type === tp }"
                  @click.stop="selectType(tp)"
                >
                  <span class="type-chip" :class="getTypeChipClass(tp)"></span>
                  {{ tp }}
                </div>
              </div>
            </div>
          </div>

        </div>

        <button class="filter-btn" @click="applyFilters">
          {{ t.search }}
          <span style="display:inline-block;width:14px;height:1px;background:currentColor;position:relative;">
            <span style="position:absolute;right:0;top:-3px;width:6px;height:6px;border-right:1px solid currentColor;border-top:1px solid currentColor;transform:rotate(45deg);display:block;"></span>
          </span>
        </button>

        <span class="filter-count">
          {{ filteredProperties.length }} {{ t.results }}
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
          <p class="prop-cat" :class="getTypeClass(property)">{{ property.tag || getCategoryLabel(property) }}</p>
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
            {{ t.viewProperty }}
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
        <p class="empty-text">{{ t.noResults }}</p>
      </div>
    </section>


    <!-- ── MOBILE ── -->

    <!-- Mobile Hero -->
    <section class="ph-hero-mobile">
      <div class="ph-hero-mobile-inner">
        <p class="ph-eyebrow" style="opacity:1;transform:none;margin-bottom:1rem;">
          {{ t.exploreEishi }}
        </p>
        <h1 class="ph-title" style="font-size:2.8rem;opacity:1;transform:none;">
          {{ t.diversePropertyHoldings }}<br />
          <em>{{ t.propertyHoldings }}</em>
        </h1>
      </div>
    </section>

    <!-- Mobile Filter -->
    <div class="filter-bar-mobile">
      <div class="filter-row">
        <div class="filter-field-mobile">
          <span class="filter-field-label">{{ t.location }}</span>
          <div class="prop-type-select" :class="{ open: locationOpen }">
            <button class="prop-type-trigger" @click.stop="locationOpen = !locationOpen">
              <span v-if="filters.location">{{ filters.location }}</span>
              <span v-else class="prop-type-placeholder">{{ t.allLocations }}</span>
              <span class="prop-type-arrow"></span>
            </button>
            <div class="prop-type-panel" v-show="locationOpen">
              <div class="prop-type-option" @click.stop="selectLocation(null)">{{ t.allLocations }}</div>
              <div
                v-for="loc in translatedLocations"
                :key="loc"
                class="prop-type-option"
                :class="{ active: filters.location === loc }"
                @click.stop="selectLocation(loc)"
              >{{ loc }}</div>
            </div>
          </div>
        </div>
        <div class="filter-field-mobile">
          <span class="filter-field-label">{{ t.property }}</span>
          <div class="prop-type-select" :class="{ open: propTypeOpen }">
            <button class="prop-type-trigger" @click.stop="propTypeOpen = !propTypeOpen">
              <template v-if="filters.property">
                <span class="type-chip" :class="getPropertyTypeClass(filters.property)"></span>
                {{ filters.property }}
              </template>
              <span v-else class="prop-type-placeholder">{{ t.allProperties }}</span>
              <span class="prop-type-arrow"></span>
            </button>
            <div class="prop-type-panel" v-show="propTypeOpen">
              <div class="prop-type-option" @click.stop="selectPropertyType(null)">
                {{ t.allProperties }}
              </div>
              <div
                v-for="pt in translatedPropertyTypes"
                :key="pt"
                class="prop-type-option"
                :class="{ active: filters.property === pt }"
                @click.stop="selectPropertyType(pt)"
              >
                <span class="type-chip" :class="getPropertyTypeClass(pt)"></span>
                {{ pt }}
              </div>
            </div>
          </div>
        </div>
        <div class="filter-field-mobile">
          <span class="filter-field-label">{{ t.type }}</span>
          <div class="prop-type-select" :class="{ open: typeOpen }">
            <button class="prop-type-trigger" @click.stop="typeOpen = !typeOpen">
              <template v-if="filters.type">
                <span class="type-chip" :class="getTypeChipClass(filters.type)"></span>
                {{ filters.type }}
              </template>
              <span v-else class="prop-type-placeholder">{{ t.allTypes }}</span>
              <span class="prop-type-arrow"></span>
            </button>
            <div class="prop-type-panel" v-show="typeOpen">
              <div class="prop-type-option" @click.stop="selectType(null)">{{ t.allTypes }}</div>
              <div
                v-for="tp in translatedTypes"
                :key="tp"
                class="prop-type-option"
                :class="{ active: filters.type === tp }"
                @click.stop="selectType(tp)"
              >
                <span class="type-chip" :class="getTypeChipClass(tp)"></span>
                {{ tp }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="filter-btn-mobile" @click="applyFilters">
        {{ t.search }}
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
            <p class="mobile-img-cat" :class="getTypeClass(property, 'mobile-img-cat')">{{ property.tag || getCategoryLabel(property) }}</p>
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
            {{ t.viewProperty }} →
          </span>
        </div>
      </div>

      <div v-if="filteredProperties.length === 0" class="empty-state">
        <div class="empty-num">—</div>
        <p class="empty-text">{{ t.noResults }}</p>
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
      locationOpen: false,
      propTypeOpen: false,
      typeOpen: false,
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
    this._closeDropdown = () => { this.locationOpen = false; this.propTypeOpen = false; this.typeOpen = false }
    document.addEventListener('click', this._closeDropdown)
  },

  beforeUnmount() {
    document.removeEventListener('click', this._closeDropdown)
  },

  methods: {
    twoDigits(n) {
      return n < 10 ? '0' + n : String(n)
    },

    selectLocation(val) {
      this.filters.location = val
      this.locationOpen = false
    },

    selectPropertyType(val) {
      this.filters.property = val
      this.propTypeOpen = false
    },

    selectType(val) {
      this.filters.type = val
      this.typeOpen = false
    },

    getTypeChipClass(typeName) {
      const n = (typeName || '').toLowerCase()
      if (n === 'real estate' || n === '保有不動産') return 'type-chip--real-estate'
      if (n === 'transport' || n === 'operating assets' || n === '事業資産') return ''
      return ''
    },

    getPropertyTypeClass(name) {
      const n = (name || '').toLowerCase()
      if (n.includes('condo') || n.includes('residential') || n.includes('コンドミニアム') || n.includes('住宅'))
        return 'type-chip--real-estate'
      if (n.includes('car') || n.includes('rental') || n.includes('レンタカー'))
        return 'type-chip--transport'
      return ''
    },

    getCategoryLabel(property) {
      const title = (property.title || '').toLowerCase()
      if (title.includes('farm') || title.includes('poultry') || title.includes('feed')
        || title.includes('農場') || title.includes('養鶏') || title.includes('飼料'))
        return this.t.categoryAgriculture
      if (title.includes('condo') || title.includes('residential') || title.includes('land')
        || title.includes('コンドミニアム') || title.includes('住宅'))
        return this.t.categoryRealEstate
      if (title.includes('car') || title.includes('rental') || title.includes('レンタカー'))
        return this.t.categoryTransport
      return this.t.categoryHoldings
    },

    getTypeClass(property, prefix = 'prop-cat') {
      const type = (property.type || '').toLowerCase()
      if (type === 'real estate' || type === '保有不動産') return `${prefix}--real-estate`
      if (type === 'operating assets' || type === '事業資産') return `${prefix}--operating`
      return ''
    },

    applyFilters() {
      // filters are already reactive; this can trigger analytics or scroll
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>
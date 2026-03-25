<style>
.farm-table .row-item {
  padding: 12px 0;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
}

.farm-table .label {
  font-weight: 100;
  font-size: 0.75rem;
  color: #455a64;
  text-transform: uppercase;
  /* blue-grey-darken-2 tone */
  margin-bottom: 4px;
}

.farm-table .value {
  font-size: 1rem;
  color: #263238;
}

/* 3-column group */
.row-group {
  display: flex;
  gap: 16px;
}

.row-group .small {
  flex: 1;
}

.video-wrapper {
  width: 100%;
  overflow: hidden;
  /* optional */
}

.video-wrapper video {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  /* keep it clean */
}

.img-hover-wrapper {
  overflow: hidden;
  height: 500px;
  width: 100%;
  position: relative;
}

.zoom-img {
  transition: transform 3s ease;
}

.img-hover-wrapper:hover .zoom-img {
  transform: scale(1.1);
}

.zoom-img .v-image__image {
  transition: transform 3s ease;
  transform-origin: center center;
}

.img-hover-wrapper:hover .zoom-img .v-image__image {
  transform: scale(1.1);
  /* only the image zooms in */
}

.scroll-zoom {
  transition: transform 1s ease;
}

.scroll-zoom.zoomed {
  transform: scale(1.1);
}

.section-header {
  display: flex;
  align-items: baseline;
  gap: 16px;
  position: relative;
}

.section-index {
  font-size: 3rem;
  font-weight: 800;
  color: rgba(0, 0, 0, 0.08);
  line-height: 1;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: #1976d2;
  /* Vuetify primary */
  margin-top: 8px;
  border-radius: 2px;
}

/* Image cards */
.image-card {
  overflow: hidden;
  border-radius: 16px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.image-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
}


.related-title {
  font-size: 2.8rem;
  font-weight: 800;
  position: relative;
}

.related-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 5px;
  background: #1976d2;
  margin: 16px auto 0;
  border-radius: 3px;
}

@media (max-width: 600px) {
  .video-wrapper video {
    height: 400px;
    /* smaller height for mobile */
  }
}
</style>
<template>
  <v-dialog v-model="galleryOpen" fullscreen hide-overlay persistent>
    <div class="gallery-wrapper"
      style="position: relative; width: 100%; height: 100vh; background: black; display: flex; align-items: center; justify-content: center;">

      <!-- Image -->
      <v-img v-if="galleryImages.length" :src="encodeURI(galleryImages[currentImage])" max-width="90vw"
        max-height="90vh" contain />

      <!-- Close -->
      <v-btn variant="text" color="white" icon style="position:absolute; top:20px; right:20px; z-index:10"
        @click="galleryOpen = false">
        <v-icon size="30">mdi-close</v-icon>
      </v-btn>

      <!-- Left -->
      <v-btn flat rounded="circle" color="white" icon style="position:absolute; left:20px; z-index:10"
        @click="prevImage">
        <v-icon size="40">mdi-chevron-left</v-icon>
      </v-btn>

      <!-- Right -->
      <v-btn flat rounded="circle" color="white" icon style="position:absolute; right:20px; z-index:10"
        @click="nextImage">
        <v-icon size="40">mdi-chevron-right</v-icon>
      </v-btn>

    </div>
  </v-dialog>
  <!-- desktop view -->
  <v-container v-if="!isMobileView" style="padding-top: 10rem">
    <v-row>
      <v-col cols="9" class="mx-auto">
        <div>
          <p style="font-size: 4.5rem">{{ t.feedMillDetails.businessNameValue }}</p>
          <p style="margin-top: 3rem; font-size: 1rem" class="text-blue-grey-darken-2">
            {{ t.feedMillDetails.supportsValue }}
          </p>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="9" class="mx-auto text-right">
        <span>
          <v-icon>mdi-map-marker-outline</v-icon>
          {{ t.feedMillLocation }}
        </span>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="9" class="mx-auto">
        <v-parallax src="/eishi/feed_mill/images/new-hero.jpg" height="calc(100vh - 200px)">
        </v-parallax>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="mx-auto" cols="9">
        <v-container>
          <v-row>
            <v-col>
              <p class="text-body-1 text-blue-grey-darken-2">
                {{ t.feedMillText.paragraph1 }}
              </p>
              <p class="text-body-1 text-blue-grey-darken-2 mt-4">
                {{ t.feedMillText.paragraph2 }}
              </p>
            </v-col>
            <v-col>
              <div class="farm-table">
                <div class="row-item">
                  <div class="label">{{ t.feedMillDetails.businessNameLabel }}</div>
                  <div class="value">{{ t.feedMillDetails.businessNameValue }}</div>
                </div>

                <div class="row-item">
                  <div class="label">{{ t.feedMillDetails.businessTypeLabel }}</div>
                  <div class="value">{{ t.feedMillDetails.businessTypeValue }}</div>
                </div>

                <div class="row-item">
                  <div class="label">{{ t.feedMillDetails.supportsLabel }}</div>
                  <div class="value">{{ t.feedMillDetails.supportsValue }}</div>
                </div>

                <div class="row-item">
                  <div class="label">{{ t.feedMillDetails.ownershipLabel }}</div>
                  <div class="value">{{ t.feedMillDetails.ownershipValue }}</div>
                </div>

                <div class="row-group">
                  <div class="row-item small">
                    <div class="label">{{ t.feedMillDetails.numberOfFactoriesLabel }}</div>
                    <div class="value">{{ t.feedMillDetails.numberOfFactoriesValue }}</div>
                  </div>
                  <div class="row-item small">
                    <div class="label">{{ t.feedMillDetails.feedProductionLabel }}</div>
                    <div class="value">{{ t.feedMillDetails.feedProductionValue }}</div>
                  </div>
                  <div class="row-item small">
                    <div class="label">{{ t.feedMillDetails.qualityFocusLabel }}</div>
                    <div class="value">{{ t.feedMillDetails.qualityFocusValue }}</div>
                  </div>
                </div>

                <div class="row-group">
                  <div class="row-item small">
                    <div class="label">{{ t.feedMillDetails.feedBenefitsLabel }}</div>
                    <div class="value">{{ t.feedMillDetails.feedBenefitsValue }}</div>
                  </div>
                  <div class="row-item small">
                    <div class="label">{{ t.feedMillDetails.endProductLabel }}</div>
                    <div class="value">{{ t.feedMillDetails.endProductValue }}</div>
                  </div>
                  <div class="row-item small">
                    <div class="label">{{ t.feedMillDetails.operationalGoalLabel }}</div>
                    <div class="value">{{ t.feedMillDetails.operationalGoalValue }}</div>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>

          <section v-for="(section, index) in translatedSections" :key="section.key" :ref="section.key" class="mb-16">
            <!-- Caption block -->
            <div class="section-header mb-6">
              <span class="section-index">
                {{ String(index + 1).padStart(2, '0') }}
              </span>

              <h2 class="section-title">
                {{ section.caption }}
              </h2>
            </div>

            <!-- Images -->
            <v-row>
              <v-col v-for="(img, i) in section.images" :key="i" cols="6">
                <v-card class="image-card" elevation="3" @click="openGallery(section.images, i)">
                  <v-img :src="img" aspect-ratio="1" cover />
                </v-card>
              </v-col>
            </v-row>
          </section>




          <v-row class="my-16">
            <v-col class="text-center">
              <h2 class="related-title">
                {{ t.relatedProperties }}
              </h2>
            </v-col>
          </v-row>

          <v-row dense>
            <v-col v-for="(property, index) in translatedProperties" :key="index" cols="6">
              <!-- Card with image only -->
              <v-card class="overflow-hidden cursor-pointer" variant="text" rounded="lg"
                @click="$router.push(property.route)">
                <div>
                  <v-img :ref="el => propertyCards.push(el)" :src="property.image" height="400" cover></v-img>
                </div>
              </v-card>

              <!-- Property Table outside the card -->
              <div class="farm-table mt-2">
                <div class="row-item">
                  <div class="label">{{ t.propertyNameLabel }}</div>
                  <div class="value">{{ property.title }}</div>
                </div>

                <div v-for="(value, key) in property.details" :key="key" class="row-item">
                  <div class="label">{{ key }}</div>
                  <div class="value">{{ value }}</div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>

  <div v-if="isMobileView" style="padding-top: 5rem">
    <!-- desktop view -->
    <v-container>
      <v-row>
        <v-col>
          <div>
            <p style="font-size: 2.5rem">{{ t.feedMillDetails.businessNameValue }}</p>
            <p style="margin-top: 2rem; font-size: 1rem" class="text-blue-grey-darken-2">
              {{ t.feedMillDetails.supportsValue }}
            </p>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <span>
            <v-icon>mdi-map-marker-outline</v-icon>
            {{ t.feedMillLocation }}
          </span>
        </v-col>
      </v-row>
    </v-container>
    <v-parallax src="/eishi/feed_mill/images/new-hero.jpg" height="calc(100vh - 200px)"> </v-parallax>
    <v-container>
      <v-row>
        <v-col>
          <p class="text-body-1 text-blue-grey-darken-2">
            {{ t.feedMillText.paragraph1 }}
          </p>
          <p class="text-body-1 text-blue-grey-darken-2 mt-4">
            {{ t.feedMillText.paragraph2 }}
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="farm-table">
            <div class="row-item">
              <div class="label">{{ t.feedMillDetails.businessNameLabel }}</div>
              <div class="value">{{ t.feedMillDetails.businessNameValue }}</div>
            </div>

            <div class="row-item">
              <div class="label">{{ t.feedMillDetails.businessTypeLabel }}</div>
              <div class="value">{{ t.feedMillDetails.businessTypeValue }}</div>
            </div>

            <div class="row-item">
              <div class="label">{{ t.feedMillDetails.supportsLabel }}</div>
              <div class="value">{{ t.feedMillDetails.supportsValue }}</div>
            </div>

            <div class="row-item">
              <div class="label">{{ t.feedMillDetails.ownershipLabel }}</div>
              <div class="value">{{ t.feedMillDetails.ownershipValue }}</div>
            </div>

            <div class="row-group">
              <div class="row-item small">
                <div class="label">{{ t.feedMillDetails.numberOfFactoriesLabel }}</div>
                <div class="value">{{ t.feedMillDetails.numberOfFactoriesValue }}</div>
              </div>
              <div class="row-item small">
                <div class="label">{{ t.feedMillDetails.feedProductionLabel }}</div>
                <div class="value">{{ t.feedMillDetails.feedProductionValue }}</div>
              </div>
              <div class="row-item small">
                <div class="label">{{ t.feedMillDetails.qualityFocusLabel }}</div>
                <div class="value">{{ t.feedMillDetails.qualityFocusValue }}</div>
              </div>
            </div>

            <div class="row-group">
              <div class="row-item small">
                <div class="label">{{ t.feedMillDetails.feedBenefitsLabel }}</div>
                <div class="value">{{ t.feedMillDetails.feedBenefitsValue }}</div>
              </div>
              <div class="row-item small">
                <div class="label">{{ t.feedMillDetails.endProductLabel }}</div>
                <div class="value">{{ t.feedMillDetails.endProductValue }}</div>
              </div>
              <div class="row-item small">
                <div class="label">{{ t.feedMillDetails.operationalGoalLabel }}</div>
                <div class="value">{{ t.feedMillDetails.operationalGoalValue }}</div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <section v-for="(section, index) in translatedSections" :key="section.key" :ref="section.key" class="mb-10">
        <!-- Caption -->
        <h2 class="text-h5 font-weight-bold mb-4">
          {{ section.caption }}
        </h2>

        <!-- Images -->
        <v-row>
          <v-col v-for="(img, i) in section.images" :key="i" cols="12" sm="6" md="3">
            <v-img :src="img" aspect-ratio="1" cover />
          </v-col>
        </v-row>
      </section>

      <v-row class="mt-10 mb-10">
        <v-col class="mx-auto">
          <p style="font-size: 2rem">{{ t.relatedProperties }}</p>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col v-for="(property, index) in translatedProperties" :key="index" cols="12">
          <v-card class="overflow-hidden cursor-pointer" variant="text" @click="$router.push(property.route)">
            <!-- Image container -->
            <div>
              <v-img :src="property.image" height="300" cover class="scroll-zoom zoom-img" ref="scrollImages"></v-img>
            </div>

            <div class="farm-table pt-5">
              <div class="row-item">
                <div class="label">{{ t.propertyNameLabel }}</div>
                <div class="value">{{ property.title }}</div>
              </div>

              <div v-for="(value, key) in property.details" :key="key" class="row-item">
                <div class="label">{{ key }}</div>
                <div class="value">{{ value }}</div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useLanguageStore } from '@/stores/languageStore'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText)
export default {
  name: 'batangas_poultry_farm',
  computed: {
    translatedProperties() {
      return this.t.properties
    },

    translatedSections() {
      return this.t.feedmill_sections
    },

    ...mapState(useLanguageStore, ['t']),
  },
  data() {
    return {
      galleryOpen: false,
      galleryImages: [],
      currentImage: 0,

      pageYOffset: 0,

      imageCards: [],
      propertyCards: [],

      isMobileView: false,
      business_holdings: [
        {
          img: '/eishi/Pangasinan Farm.webp',
          title: 'pangasinanFarm',
          link: '/business_holdings/pangasinan_farm',
        },
        {
          img: '/eishi/1732160486501.webp',
          title: 'assignedProperties',
          link: '/business_holdings/assigned_properties',
        },
        {
          img: '/eishi/DJI_0598-min.webp',
          title: 'kalingaResidential',
          link: '/business_holdings/kalinga_residential',
        },
        {
          img: '/eishi/Poultry Farm.webp',
          title: 'batangasPoultry',
          link: '/business_holdings/batangas/poultry_farm',
        },
      ],
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.$nextTick(() => {
      this.propertyCards.forEach((img) => {
        const el = img.$el

        gsap.fromTo(
          el,
          { scale: 1.2 },
          {
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'center 60%',
              end: '+=200',
              scrub: 2,
              invalidateOnRefresh: true,
            },
          },
        )
      })
      this.imageCards.forEach((img) => {
        const el = img.$el

        gsap.fromTo(
          el,
          { scale: 1.2 },
          {
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'center 60%',
              end: '+=200',
              scrub: 2,
              invalidateOnRefresh: true,
            },
          },
        )
      })
    })
    this.checkMobileView() // check on initial load
    window.addEventListener('resize', this.checkMobileView) // attach resize listener
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobileView) // clean up
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    openGallery(images, index) {
      console.log(images, index);
      this.galleryImages = images
      this.currentImage = index
      this.galleryOpen = true
    },

    nextImage() {
      if (this.currentImage < this.galleryImages.length - 1) {
        this.currentImage++
      } else {
        this.currentImage = 0
      }
    },

    prevImage() {
      if (this.currentImage > 0) {
        this.currentImage--
      } else {
        this.currentImage = this.galleryImages.length - 1
      }
    },
    handleScroll() {
      this.pageYOffset = window.pageYOffset
    },
    checkMobileView() {
      this.isMobileView = this.$vuetify.display.mobile
    },
  },
}
</script>

<style>
.hide-scrollbar {
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* Internet Explorer 10+ */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
  /* Safari and Chrome */
}

.thumbnail-card {
  border: 1px solid #ccc;
  /* Default gray border */
  transition: border-color 0.3s ease;
}

.thumbnail-card.selected-thumbnail {
  border-color: #1976d2;
  /* Vuetify primary blue */
}

.spaced-paragraphs p {
  margin-bottom: 2rem;
  /* equivalent to mb-6 */
}

/* Scoped CSS */
@media (max-width: 600px) {
  .main-image {
    height: 100vw !important;
  }

  .spaced-paragraphs p {
    font-size: 14px;
  }

  .spaced-paragraphs h2 {
    font-size: 20px;
  }
}
</style>

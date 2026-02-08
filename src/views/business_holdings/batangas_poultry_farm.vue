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
</style>
<template>
    <!-- desktop view -->
    <v-container v-if="!isMobileView" style="padding-top: 10rem;">
        <v-row>
            <v-col cols="9" class="mx-auto">
                <div>
                    <p style="font-size: 4.5rem;">{{ t.batangasPoultry }}</p style="font-size: 5rem;">
                    <p style="margin-top: 3rem; font-size: 1rem;" class="text-blue-grey-darken-2">
                        {{ t.poultrySubtitle }}
                    </p>
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="9" class="mx-auto text-right">
                <v-row>
                    <v-col cols="2" class="text-left">
                        <!-- <v-btn to="/tour/batangas-poultry-farm" color="black" block> {{ t.startTour }}</v-btn> -->
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col>
                        <span>
                            <v-icon>mdi-map-marker-outline</v-icon>
                            {{ t.sanJoseMunicipality }}
                        </span>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>



        <v-row>
            <v-col cols="9" class="mx-auto">
                <v-parallax src="/eishi/batangas_tokyo_farm/images/hero.jpg" height="calc(100vh - 200px)">
                </v-parallax>
            </v-col>
        </v-row>

        <v-row>
            <v-col class="mx-auto" cols="9">
                <v-container>
                    <v-row>
                        <v-col>
                            <p class="text-body-1 text-blue-grey-darken-2 ">{{ t.batangasP1 }}</p>
                            <p class="text-body-1 text-blue-grey-darken-2 mt-4">{{ t.batangasP2 }}</p>
                            <p class="text-body-1 text-blue-grey-darken-2 mt-4">{{ t.batangasP3 }}</p>
                            <p class="text-body-1 text-blue-grey-darken-2 mt-4">{{ t.batangasP4 }}</p>
                            <p class="text-body-1 text-blue-grey-darken-2 mt-4">{{ t.batangasP5 }}</p>
                        </v-col>
                        <v-col>
                            <div class="farm-table">
                                <div class="row-item">
                                    <div class="label">{{ t.propertyNameLabel }}</div>
                                    <div class="value">{{ t.batangasPoultry }}</div>
                                </div>

                                <div class="row-item">
                                    <div class="label">{{ t.location }}</div>
                                    <div class="value">{{ t.sanJoseMunicipality }}</div>
                                </div>

                                <div class="row-item">
                                    <div class="label">{{ t.establishedLabel }}</div>
                                    <div class="value">{{ t.establishedPlanned }}</div>
                                </div>

                                <div class="row-item">
                                    <div class="label">{{ t.projectScaleLabel }}</div>
                                    <div class="value">{{ t.projectScaleLarge }}</div>
                                </div>

                                <!-- 3-column group -->
                                <div class="row-group">
                                    <div class="row-item small">
                                        <div class="label">{{ t.landAreaLabel }}</div>
                                        <div class="value">24 hectares (approx. 240,000 sqm)</div>
                                    </div>
                                    <div class="row-item small">
                                        <div class="label">{{ t.targetHensLabel }}</div>
                                        <div class="value">{{ t.targetHensValue }}</div>
                                    </div>
                                    <div class="row-item small">
                                        <div class="label">{{ t.dailyEggOutputLabel }}</div>
                                        <div class="value">600,000 – 800,000 eggs</div>
                                    </div>
                                </div>

                                <div class="row-group">
                                    <div class="row-item small">
                                        <div class="label">{{ t.dailyTraysLabel }}</div>
                                        <div class="value">20,000 – 26,600 trays</div>
                                    </div>
                                    <div class="row-item small">
                                        <div class="label">{{ t.distanceFromManilaLabel }}</div>
                                        <div class="value">{{ t.distanceFromManilaValue }}</div>
                                    </div>
                                    <div class="row-item small">
                                        <div class="label">{{ t.feedSupplyAdvantageLabel }}</div>
                                        <div class="value">{{ t.feedSupplyAdvantageValue }}</div>
                                    </div>
                                </div>

                            </div>
                        </v-col>

                    </v-row>
                   
                     <section
            v-for="(section, index) in sections"
            :key="section.key"
            :ref="section.key"
            class="mb-10 mt-10"
          >
            <!-- Caption -->
            <h2 class="text-h5 font-weight-bold mb-4">
              {{ section.caption }}
            </h2>

            <!-- Images -->
            <v-row>
              <v-col v-for="(img, i) in section.images" :key="i" cols="12" sm="6" md="6">
                <v-img :src="img" aspect-ratio="1" cover/>
              </v-col>
            </v-row>
          </section>
                    <v-row>
                        <v-col class="mx-auto">
                            <div class="map-container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.049609986706!2d121.0482168!3d13.8800814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd124260384d8b%3A0x8a158f5013602c26!2sSan%20Jose%2C%20Batangas!5e0!3m2!1sen!2sph!4v1701060000000!5m2!1sen!2sph&maptype=satellite"
                                    width="100%" height="800" style="border:0;" allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row class="mt-10 mb-10">
                        <v-col class="mx-auto">
                            <p style="font-size: 3rem; font-weight: bold;">{{ t.relatedProperties }}</p>
                        </v-col>
                    </v-row>

                    <v-row dense>
                        <v-col v-for="(property, index) in translatedProperties" :key="index" cols="6">
                            <v-card class="overflow-hidden cursor-pointer" variant="text"
                                @click="$router.push(property.route)">

                                <!-- Image container -->
                                <div>
                                    <v-img :ref="el => propertyCards.push(el)" :src="property.image" height="400"
                                        cover></v-img>
                                </div>

                                <!-- Property Table -->
                                <v-card-text>
                                    <div class="farm-table">
                                        <div class="row-item">
                                            <div class="label">{{ t.propertyNameLabel }}</div>
                                            <div class="value">{{ property.title }}</div>
                                        </div>

                                        <div v-for="(value, key) in property.details" :key="key" class="row-item">
                                            <div class="label">{{ key }}</div>
                                            <div class="value">{{ value }}</div>
                                        </div>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>

                </v-container>
            </v-col>
        </v-row>
    </v-container>

    <div v-if="isMobileView" style="padding-top: 5rem;">
        <!-- desktop view -->
        <v-container>
            <v-row>
                <v-col>
                    <div>
                        <p style="font-size: 2.5rem;">{{ t.batangasPoultry }}</p style="font-size: 5rem;">
                        <p style="margin-top: 2rem; font-size: 1rem;" class="text-blue-grey-darken-2">
                            {{ t.poultrySubtitle }}
                        </p>
                    </div>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <span>
                        <v-icon>mdi-map-marker-outline</v-icon>
                        {{ t.sanJoseMunicipality }}
                    </span>
                </v-col>
            </v-row>
        </v-container>

        <v-parallax src="/eishi/batangas_tokyo_farm/images/hero.jpg" height="calc(100vh - 200px)">
        </v-parallax>

        <v-container>
            <v-col>
                <p class="text-body-1 text-blue-grey-darken-2 ">{{ t.batangasP1 }}</p>
                <p class="text-body-1 text-blue-grey-darken-2 mt-4">{{ t.batangasP2 }}</p>
                <p class="text-body-1 text-blue-grey-darken-2 mt-4">{{ t.batangasP3 }}</p>
                <p class="text-body-1 text-blue-grey-darken-2 mt-4">{{ t.batangasP4 }}</p>
                <p class="text-body-1 text-blue-grey-darken-2 mt-4">{{ t.batangasP5 }}</p>
            </v-col>
        </v-container>
        <v-container>
            <v-row>
                <v-col>
                    <div class="farm-table">
                        <div class="row-item">
                            <div class="label">{{ t.propertyNameLabel }}</div>
                            <div class="value">{{ t.batangasPoultry }}</div>
                        </div>

                        <div class="row-item">
                            <div class="label">{{ t.location }}</div>
                            <div class="value">{{ t.sanJoseMunicipality }}</div>
                        </div>

                        <div class="row-item">
                            <div class="label">{{ t.establishedLabel }}</div>
                            <div class="value">{{ t.establishedPlanned }}</div>
                        </div>

                        <div class="row-item">
                            <div class="label">{{ t.projectScaleLabel }}</div>
                            <div class="value">{{ t.projectScaleLarge }}</div>
                        </div>

                        <!-- 3-column group -->
                        <div class="row-group">
                            <div class="row-item small">
                                <div class="label">{{ t.landAreaLabel }}</div>
                                <div class="value">24 hectares (approx. 240,000 sqm)</div>
                            </div>
                            <div class="row-item small">
                                <div class="label">{{ t.targetHensLabel }}</div>
                                <div class="value">{{ t.targetHensValue }}</div>
                            </div>
                            <div class="row-item small">
                                <div class="label">{{ t.dailyEggOutputLabel }}</div>
                                <div class="value">600,000 – 800,000 eggs</div>
                            </div>
                        </div>

                        <div class="row-group">
                            <div class="row-item small">
                                <div class="label">{{ t.dailyTraysLabel }}</div>
                                <div class="value">20,000 – 26,600 trays</div>
                            </div>
                            <div class="row-item small">
                                <div class="label">{{ t.distanceFromManilaLabel }}</div>
                                <div class="value">{{ t.distanceFromManilaValue }}</div>
                            </div>
                            <div class="row-item small">
                                <div class="label">{{ t.feedSupplyAdvantageLabel }}</div>
                                <div class="value">{{ t.feedSupplyAdvantageValue }}</div>
                            </div>
                        </div>

                    </div>
                </v-col>

            </v-row>
        </v-container>

      

     
        <v-container>
               <section
            v-for="(section, index) in sections"
            :key="section.key"
            :ref="section.key"
            class="mb-10"
        >
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
        
            <v-row>
                <v-col class="mx-auto">
                    <div class="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.049609986706!2d121.0482168!3d13.8800814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd124260384d8b%3A0x8a158f5013602c26!2sSan%20Jose%2C%20Batangas!5e0!3m2!1sen!2sph!4v1701060000000!5m2!1sen!2sph&maptype=satellite"
                            width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-row>
                <v-col>
                    <v-container>
                        <v-row class="mt-10 mb-10">
                            <v-col class="mx-auto">
                                <p style="font-size: 2rem;">{{ t.relatedProperties }}</p>
                            </v-col>
                        </v-row>
                        <v-row dense>
                            <v-col v-for="(property, index) in translatedProperties" :key="index" cols="12">
                                <v-card class="overflow-hidden cursor-pointer" variant="text"
                                    @click="$router.push(property.route)">

                                    <!-- Image container -->
                                    <div>
                                        <v-img :src="property.image" height="300" cover></v-img>
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
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapState } from 'pinia';
import { useLanguageStore } from '@/stores/languageStore';
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
        ...mapState(useLanguageStore, ['t']),
    },
    data() {
        return {
             sections: [
        {
          key: 'machines',
          caption: 'Egg-laying hens',
          images: [
            '/eishi/batangas_tokyo_farm/images/Egg Laying Hens/1.jpg',
            '/eishi/batangas_tokyo_farm/images/Egg Laying Hens/2.jpg',
            '/eishi/batangas_tokyo_farm/images/Egg Laying Hens/3.jpg',
            '/eishi/batangas_tokyo_farm/images/Egg Laying Hens/4.jpg',
            '/eishi/batangas_tokyo_farm/images/Egg Laying Hens/5.jpg',
            '/eishi/batangas_tokyo_farm/images/Egg Laying Hens/6.jpg',
            '/eishi/batangas_tokyo_farm/images/Egg Laying Hens/7.jpg',
            '/eishi/batangas_tokyo_farm/images/Egg Laying Hens/8.jpg',
            '/eishi/batangas_tokyo_farm/images/Egg Laying Hens/9.jpg',
            '/eishi/batangas_tokyo_farm/images/Egg Laying Hens/10.jpg'
          ],
        },
        {
          key: 'production',
          caption: 'Production',
          images: [
            '/eishi/batangas_tokyo_farm/images/Production/1.jpg',
            '/eishi/batangas_tokyo_farm/images/Production/2.jpg',
            '/eishi/batangas_tokyo_farm/images/Production/3.jpg',
            '/eishi/batangas_tokyo_farm/images/Production/4.jpg',
            '/eishi/batangas_tokyo_farm/images/Production/5.jpg',
            '/eishi/batangas_tokyo_farm/images/Production/6.jpg'
          ],
        },
        {
          key: 'deliveries',
          caption: 'Deliveries',
          images: [
            '/eishi/batangas_tokyo_farm/images/Poultry Building/1.jpg',
            '/eishi/batangas_tokyo_farm/images/Poultry Building/2.jpg',
            '/eishi/batangas_tokyo_farm/images/Poultry Building/3.jpg',
            '/eishi/batangas_tokyo_farm/images/Poultry Building/4.jpg',
            '/eishi/batangas_tokyo_farm/images/Poultry Building/5.jpg',
            '/eishi/batangas_tokyo_farm/images/Poultry Building/6.jpg',
            '/eishi/batangas_tokyo_farm/images/Poultry Building/7.jpg',
            '/eishi/batangas_tokyo_farm/images/Poultry Building/8.jpg',
            '/eishi/batangas_tokyo_farm/images/Poultry Building/9.jpg',
          ],
        },
      ],
      pageYOffset: 0,
            imageCards: [],
            propertyCards: [],
            dialog: false,
            tab: null,
            selectedIndex: 0,
            isMobileView: false,
            business_holdings: [
                {
                    img: "/eishi/Pangasinan Farm.webp",
                    title: "pangasinanFarm",
                    link: "/business_holdings/pangasinan_farm",
                },
                {
                    img: "/eishi/1732160486501.webp",
                    title: "assignedProperties",
                    link: "/business_holdings/assigned_properties",
                },
                {
                    img: "/eishi/DJI_0598-min.webp",
                    title: "kalingaResidential",
                    link: "/business_holdings/kalinga_residential",
                },
                {
                    img: "/eishi/Solinea3.webp",
                    title: "cebuCondo",
                    link: "/business_holdings/cebu_condominium",
                },
            ],
        };
    },

    mounted() {
        this.$nextTick(() => {
            this.imageCards.forEach(img => {
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
                            invalidateOnRefresh: true
                        }
                    }
                )
            })
            this.propertyCards.forEach(img => {
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
                            invalidateOnRefresh: true
                        }
                    }
                )
            })
        })
        this.checkMobileView(); // check on initial load
        window.addEventListener('resize', this.checkMobileView); // attach resize listener
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkMobileView); // clean up
    },
    methods: {
        checkMobileView() {
            this.isMobileView = this.$vuetify.display.mobile;
        },
    },
};
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
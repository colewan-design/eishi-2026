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


.zoom-img {
    transition: transform 3s ease;
}
</style>
<template>
    <!-- desktop view -->
    <v-container v-if="!isMobileView" style="padding-top: 10rem;">
        <v-row>
            <v-col cols="9" class="mx-auto">
                <div>
                    <p style="font-size: 4.5rem;">{{ t.pangasinanFarm }}</p style="font-size: 5rem;">
                    <p style="margin-top: 3rem; font-size: 1rem;" class="text-blue-grey-darken-2">
                        {{ t.balungaoAgriDescription }}
                    </p>
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="9" class="mx-auto text-right">
                <span>
                    <v-icon>mdi-map-marker-outline</v-icon>
                    {{ t.pangasinanLocation }}
                </span>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="9" class="mx-auto">
                <v-parallax src="/eishi/pangasinan_farm/images/dji_fly_20250311_152206_0041_1741678733665_photo.webp"
                    height="calc(100vh - 200px)">
                </v-parallax>
            </v-col>
        </v-row>

        <v-row>
            <v-col class="mx-auto" cols="9">
                <v-container>
                    <v-row>
                        <v-col>
                            <p class="text-body-1 text-blue-grey-darken-2 ">{{ t.pangasinanP1 }}</p>
                            <p class="text-body-1 text-blue-grey-darken-2 mt-4">{{ t.pangasinanP2 }}</p>
                            <p class="text-body-1 text-blue-grey-darken-2 mt-4">{{ t.pangasinanP3 }}</p>
                            <p class="text-body-1 text-blue-grey-darken-2 mt-4">{{ t.pangasinanP4 }}</p>
                            <p class="text-body-1 text-blue-grey-darken-2 mt-4">{{ t.pangasinanP5 }}</p>
                        </v-col>
                        <v-col>
                            <div class="farm-table">
                                <div class="row-item">
                                    <div class="label">{{ t.propertyNameLabel }}</div>
                                    <div class="value">{{ t.balungaoPropertyName }}</div>
                                </div>

                                <div class="row-item">
                                    <div class="label">{{ t.location }}</div>
                                    <div class="value">{{ t.balungaoLocation }}</div>
                                </div>

                                <div class="row-item">
                                    <div class="label">{{ t.establishedAcquiredLabel }}</div>
                                    <div class="value">{{ t.balungaoEstablished }}</div>
                                </div>

                                <div class="row-item">
                                    <div class="label">{{ t.municipalityClassificationLabel }}</div>
                                    <div class="value">{{ t.municipalityClassificationValue }}</div>
                                </div>

                                <!-- 3-column group -->
                                <div class="row-group">
                                    <div class="row-item small">
                                        <div class="label">{{ t.landAreaSqmLabel }}</div>
                                        <div class="value">240,000</div>
                                    </div>
                                    <div class="row-item small">
                                        <div class="label">{{ t.diversionDamLabel }}</div>
                                        <div class="value">{{ t.diversionDamValue }}</div>
                                    </div>
                                    <div class="row-item small">
                                        <div class="label">{{ t.proximitySmCarmenLabel }}</div>
                                        <div class="value">9 km</div>
                                    </div>
                                </div>

                                <div class="row-group">
                                    <div class="row-item small">
                                        <div class="label">{{ t.proximityTplexLabel }}</div>
                                        <div class="value">6 km</div>
                                    </div>
                                    <div class="row-item small">
                                        <div class="label">{{ t.plannedFacilitiesLabel }}</div>
                                        <div class="value">{{ t.plannedFacilitiesValue }}</div>
                                    </div>
                                    <div class="row-item small">
                                        <div class="label">{{ t.purposeLabel }}</div>
                                        <div class="value">{{ t.purposeNorthernLuzon }}</div>
                                    </div>
                                </div>
                            </div>
                        </v-col>


                    </v-row>
                    <v-row>
                        <v-col class="mx-auto">
                            <div class="video-wrapper">
                                <video autoplay loop muted playsinline preload="metadata" poster="/images/hero-img.jpg">
                                    <source src="/eishi/videos/farm.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col v-for="(image, index) in images" :key="index" cols="6" class="d-flex">

                            <div class="img-hover-wrapper">
                                <v-img :ref="el => imageCards.push(el)" :src="image" height="500" cover>
                                    <template v-slot:placeholder>
                                        <v-row align="center" justify="center" class="fill-height ma-0">
                                            <v-progress-circular color="grey-lighten-5"
                                                indeterminate></v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                            </div>

                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col class="mx-auto">
                            <div class="map-container">

                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d586063.7455595126!2d120.00547478501534!3d16.031247512102407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391609ecf540463%3A0x44bc9c18460340e3!2sPangasinan!5e1!3m2!1sen!2sph!4v1764209764109!5m2!1sen!2sph"
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
        <v-container>
            <v-row>
                <v-col>
                    <div>
                        <p style="font-size: 2.5rem;">{{ t.pangasinanFarm }}</p style="font-size: 5rem;">
                        <p style="margin-top: 2rem; font-size: 1rem;" class="text-blue-grey-darken-2">
                            {{ t.balungaoAgriDescription }}
                        </p>
                    </div>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <span>
                        <v-icon>mdi-map-marker-outline</v-icon>
                        {{ t.balungaoMunicipality }}
                    </span>
                </v-col>
            </v-row>
        </v-container>
        <v-parallax src="/eishi/pangasinan_farm/images/dji_fly_20250311_152206_0041_1741678733665_photo.webp"
            height="calc(100vh - 200px)">
        </v-parallax>
        <v-container>
            <v-row>
                <v-col>
                    <p class="text-body-1 text-blue-grey-darken-2 ">{{ t.pangasinanP1 }}</p>
                    <p class="text-body-1 text-blue-grey-darken-2 mt-4">{{ t.pangasinanP2 }}</p>
                    <p class="text-body-1 text-blue-grey-darken-2 mt-4">{{ t.pangasinanP3 }}</p>
                    <p class="text-body-1 text-blue-grey-darken-2 mt-4">{{ t.pangasinanP4 }}</p>
                    <p class="text-body-1 text-blue-grey-darken-2 mt-4">{{ t.pangasinanP5 }}</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <div class="farm-table">
                        <div class="row-item">
                            <div class="label">{{ t.propertyNameLabel }}</div>
                            <div class="value">{{ t.balungaoPropertyName }}</div>
                        </div>

                        <div class="row-item">
                            <div class="label">{{ t.location }}</div>
                            <div class="value">{{ t.balungaoLocation }}</div>
                        </div>

                        <div class="row-item">
                            <div class="label">{{ t.establishedAcquiredLabel }}</div>
                            <div class="value">{{ t.balungaoEstablished }}</div>
                        </div>

                        <div class="row-item">
                            <div class="label">{{ t.municipalityClassificationLabel }}</div>
                            <div class="value">{{ t.municipalityClassificationValue }}</div>
                        </div>

                        <!-- 3-column group -->
                        <div class="row-group">
                            <div class="row-item small">
                                <div class="label">{{ t.landAreaSqmLabel }}</div>
                                <div class="value">240,000</div>
                            </div>
                            <div class="row-item small">
                                <div class="label">{{ t.diversionDamLabel }}</div>
                                <div class="value">{{ t.diversionDamValue }}</div>
                            </div>
                            <div class="row-item small">
                                <div class="label">{{ t.proximitySmCarmenLabel }}</div>
                                <div class="value">9 km</div>
                            </div>
                        </div>

                        <div class="row-group">
                            <div class="row-item small">
                                <div class="label">{{ t.proximityTplexLabel }}</div>
                                <div class="value">6 km</div>
                            </div>
                            <div class="row-item small">
                                <div class="label">{{ t.plannedFacilitiesLabel }}</div>
                                <div class="value">{{ t.plannedFacilitiesValue }}</div>
                            </div>
                            <div class="row-item small">
                                <div class="label">{{ t.purposeLabel }}</div>
                                <div class="value">{{ t.purposeNorthernLuzon }}</div>
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <div class="video-wrapper">
            <video autoplay loop muted playsinline preload="metadata" poster="/images/hero-img.jpg">
                <source src="/eishi/videos/farm.mp4" type="video/mp4" />
            </video>
        </div>
        <v-container>
            <v-row no-gutters>
                <v-col v-for="(image, index) in images" :key="index" cols="12" class="d-flex pa-2">
                    <v-img :src="image" height="300" cover />
                </v-col>
            </v-row>
            <v-row>
                <v-col class="mx-auto">
                    <div class="map-container">

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d586063.7455595126!2d120.00547478501534!3d16.031247512102407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391609ecf540463%3A0x44bc9c18460340e3!2sPangasinan!5e1!3m2!1sen!2sph!4v1764209764109!5m2!1sen!2sph"
                            width="100%" height="800" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </v-col>
            </v-row>
            <v-row class="mt-10 mb-10">
                <v-col class="mx-auto">
                    <p style="font-size: 2rem;">{{ t.relatedProperties }}</p>
                </v-col>
            </v-row>
            <v-row dense>
                <v-col v-for="(property, index) in translatedProperties" :key="index" cols="12">
                    <v-card class="overflow-hidden cursor-pointer" variant="text" @click="$router.push(property.route)">

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
            imageCards: [],
            propertyCards: [],
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
            images: [
                { type: 'image', src: '/eishi/pangasinan_farm/images/dji_fly_20250311_151954_0036_1741678753512_photo.webp' },
                { type: 'image', src: '/eishi/pangasinan_farm/images/dji_fly_20250311_152206_0041_1741678733665_photo.webp' },
                { type: 'image', src: '/eishi/pangasinan_farm/images/dji_fly_20250311_152212_0042_1741678730743_photo.webp' },
                { type: 'image', src: '/eishi/pangasinan_farm/images/dji_fly_20250311_152328_0046_1741678719333_photo.webp' },
                { type: 'image', src: '/eishi/pangasinan_farm/images/dji_fly_20250311_152442_0049_1741678708540_photo.webp' },
                { type: 'image', src: '/eishi/pangasinan_farm/images/dji_fly_20250311_160640_0074_1741681516533_photo.webp' },
                { type: 'image', src: '/eishi/pangasinan_farm/images/dji_fly_20250311_161732_0095_1741681475707_photo.webp' },
                { type: 'image', src: '/eishi/pangasinan_farm/images/dji_fly_20250311_161920_0098_1741681467332_photo.webp' },
                { type: 'image', src: '/eishi/pangasinan_farm/images/dji_fly_20250311_161950_0099_1741681464833_photo.webp' },
                { type: 'image', src: '/eishi/pangasinan_farm/images/dji_fly_20250311_162100_0102_1741681456944_photo.webp' },
            ],
        };
    },

    mounted() {
        this.checkMobileView(); // check on initial load
        window.addEventListener('resize', this.checkMobileView); // attach resize listener
        this.$nextTick(() => {
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
        })
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
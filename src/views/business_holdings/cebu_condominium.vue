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
</style>
<template>
    <!-- desktop view -->
    <v-container v-if="!isMobileView" style="padding-top: 10rem;">
        <v-row>
            <v-col cols="9" class="mx-auto">
                <div>
                    <p style="font-size: 4.5rem;">{{ t.cebuCondo }}</p style="font-size: 5rem;">
                    <p style="margin-top: 3rem; font-size: 1rem;" class="text-blue-grey-darken-2">
                        {{ t.cebuPremiumCondo }}
                    </p>
                </div>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="9" class="mx-auto text-right">
                <v-row>
                    <v-col cols="2" class="text-left">
                        <v-btn to="/tour/cebu-condominium" color="black" block>{{ t.startTour }}</v-btn>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col>
                        <span>
                            <v-icon>mdi-map-marker-outline</v-icon>
                            {{ t.cebuCondoLocation }}
                        </span>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="9" class="mx-auto">
                <v-parallax src="/eishi/cebu_condo/images/20240626_094939.webp" height="calc(100vh - 200px)">
                </v-parallax>
            </v-col>
        </v-row>

        <v-row>
            <v-col class="mx-auto" cols="9">
                <v-container>
                    <v-row>
                        <v-col>
                            <p class="text-body-1 text-blue-grey-darken-2 ">{{ t.cebuP1 }}</p>
                            <p class="text-body-1 text-blue-grey-darken-2 mt-4">{{ t.cebuP2 }}</p>
                        </v-col>
                        <v-col>
                            <div class="farm-table">
                                <div class="row-item">
                                    <div class="label">{{ t.solineaPropertyName }}</div>
                                    <div class="value">{{ t.solineaPropertyNameValue }}</div>
                                </div>

                                <div class="row-item">
                                    <div class="label">{{ t.solineaLocationLabel }}</div>
                                    <div class="value">{{ t.solineaLocationValue }}</div>
                                </div>

                                <div class="row-item">
                                    <div class="label">{{ t.solineaOwnedByLabel }}</div>
                                    <div class="value">{{ t.solineaOwnedByValue }}</div>
                                </div>

                                <div class="row-group">
                                    <div class="row-item small">
                                        <div class="label">{{ t.solineaNumberOfCondosLabel }}</div>
                                        <div class="value">{{ t.solineaNumberOfCondosValue }}</div>
                                    </div>

                                    <div class="row-item small">
                                        <div class="label">{{ t.solineaTowerLabel }}</div>
                                        <div class="value">{{ t.solineaTowerValue }}</div>
                                    </div>

                                    <div class="row-item small">
                                        <div class="label">{{ t.solineaResidencesLabel }}</div>
                                        <div class="value">{{ t.solineaResidencesValue }}</div>
                                    </div>
                                </div>

                                <div class="row-group">
                                    <div class="row-item small">
                                        <div class="label">{{ t.solineaTourismAccessLabel }}</div>
                                        <div class="value">{{ t.solineaTourismAccessValue }}</div>
                                    </div>

                                    <div class="row-item small">
                                        <div class="label">{{ t.solineaTransportConnectivityLabel }}</div>
                                        <div class="value">{{ t.solineaTransportConnectivityValue }}</div>
                                    </div>

                                    <div class="row-item small">
                                        <div class="label">{{ t.solineaPortAccessLabel }}</div>
                                        <div class="value">{{ t.solineaPortAccessValue }}</div>
                                    </div>
                                </div>
                            </div>
                        </v-col>


                    </v-row>
                    <v-row>
                        <v-col class="mx-auto">
                            <div class="video-wrapper">
                                <video autoplay loop muted playsinline preload="metadata" poster="/images/hero-img.jpg">
                                    <source src="/eishi/videos/condo.webm" type="video/mp4" />
                                </video>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row>


                        <v-col v-for="(image, index) in images" :key="index" cols="6" class="d-flex">
                            <div class="img-hover-wrapper">
                                <v-img :src="image" height="500" cover :ref="el => imageCards.push(el)">
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
                                <div class="img-hover-wrapper">
                                    <v-img :src="property.image" height="400" cover
                                        :ref="el => propertyCards.push(el)"></v-img>
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
                        <p style="font-size: 2.5rem;">{{ t.cebuCondo }}</p>
                        <p style="margin-top: 2rem; font-size: 1rem;" class="text-blue-grey-darken-2">
                            {{ t.cebuPremiumCondo }}
                        </p>
                    </div>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <span>
                        <v-icon>mdi-map-marker-outline</v-icon>
                        {{ t.cebuCondoLocation }}
                    </span>
                </v-col>
            </v-row>
        </v-container>
        <v-parallax src="/eishi/cebu_condo/images/20240626_094939.webp" height="calc(100vh - 200px)">
        </v-parallax>
        <v-container>
            <v-row>
                <v-col>
                    <p class="text-body-1 text-blue-grey-darken-2 ">{{ t.cebuP1 }}</p>
                    <p class="text-body-1 text-blue-grey-darken-2 mt-4">{{ t.cebuP2 }}</p>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-col>
                <div class="farm-table">
                    <div class="row-item">
                        <div class="label">{{ t.solineaPropertyName }}</div>
                        <div class="value">{{ t.solineaPropertyNameValue }}</div>
                    </div>

                    <div class="row-item">
                        <div class="label">{{ t.solineaLocationLabel }}</div>
                        <div class="value">{{ t.solineaLocationValue }}</div>
                    </div>

                    <div class="row-item">
                        <div class="label">{{ t.solineaOwnedByLabel }}</div>
                        <div class="value">{{ t.solineaOwnedByValue }}</div>
                    </div>

                    <div class="row-group">
                        <div class="row-item small">
                            <div class="label">{{ t.solineaNumberOfCondosLabel }}</div>
                            <div class="value">{{ t.solineaNumberOfCondosValue }}</div>
                        </div>

                        <div class="row-item small">
                            <div class="label">{{ t.solineaTowerLabel }}</div>
                            <div class="value">{{ t.solineaTowerValue }}</div>
                        </div>

                        <div class="row-item small">
                            <div class="label">{{ t.solineaResidencesLabel }}</div>
                            <div class="value">{{ t.solineaResidencesValue }}</div>
                        </div>
                    </div>

                    <div class="row-group">
                        <div class="row-item small">
                            <div class="label">{{ t.solineaTourismAccessLabel }}</div>
                            <div class="value">{{ t.solineaTourismAccessValue }}</div>
                        </div>

                        <div class="row-item small">
                            <div class="label">{{ t.solineaTransportConnectivityLabel }}</div>
                            <div class="value">{{ t.solineaTransportConnectivityValue }}</div>
                        </div>

                        <div class="row-item small">
                            <div class="label">{{ t.solineaPortAccessLabel }}</div>
                            <div class="value">{{ t.solineaPortAccessValue }}</div>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-container>
        <div class="video-wrapper">
            <video autoplay loop muted playsinline preload="metadata" poster="/images/hero-img.jpg">
                <source src="/eishi/videos/condo.webm" type="video/mp4" />
            </video>
        </div>
        <v-container>
            <v-row no-gutters>
                <v-col v-for="(image, index) in images" :key="index" cols="12" class="d-flex pa-2">
                    <v-img :src="image" height="300" cover class="scroll-zoom zoom-img" ref="scrollImages" />
                </v-col>
            </v-row>
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
                            <v-img :src="property.image" height="300" cover class="scroll-zoom zoom-img"
                                ref="scrollImages"></v-img>
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
            properties: [
                {
                    title: "Poultry Farm",
                    details: {
                        "Location": "Municipality of San Jose, Batangas",
                        "Sqm.": "3,500",
                        "Egg trays / day": "630"
                    },
                    image: "/eishi/batangas_tokyo_farm/images/1732160556378.webp",
                    route: "/business_holdings/batangas/poultry_farm"
                },
                {
                    title: "Pangasinan Farm",
                    details: {
                        "Location": "Municipality of Balungao",
                        "Sqm.": "240,500"
                    },
                    image: "/eishi/pangasinan_farm/images/dji_fly_20250311_151954_0036_1741678753512_photo.webp",
                    route: "/business_holdings/pangasinan_farm"
                },
                {
                    title: "Assigned Properties",
                    details: {
                        "Location": "San Jose Batangas, Muntinlupa City, Moron, Rizal"
                    },
                    image: "/eishi/assigned_properties/images/1732160485860.webp",
                    route: "/business_holdings/assigned_properties"
                },
                {
                    title: "Residential Lands",
                    details: {
                        "Location": "Tabuk City, Kalinga Province",
                        "Lot": "42"
                    },
                    image: "/eishi/kalinga_residential/images/DJI_0591-min.webp",
                    route: "/business_holdings/kalinga_residential"
                },
                {
                    title: "Cebu Condominiums",
                    details: {
                        "Location": "Cebu City, Central Business District and nearby the Metro Cebu Mall, Ayala Center and SM Cebu City",
                        "Residences": "1016"
                    },
                    image: "/eishi/cebu_condo/images/20240626_094216.webp",
                    route: "/business_holdings/cebu_condominium"
                },
                {
                    title: "Feed Mill",
                    details: {
                        "Description": "Operation of the Feed Mill Supporting the Poultry Farming Business. Our blended feed, produced in our own factories, ensures healthy and hygienic chicken growth, contributing to high-quality eggs."
                    },
                    image: "/eishi/feed_mill/images/feedmil04.webp",
                    route: "/business_holdings/feed_mill"
                },
                {
                    title: "Car Rental Business",
                    details: {
                        "Description": "Expansion of Car Rental Business in the Philippines. Modern Japanese vehicles, maintained with high standards of cleanliness and comfort, are highly appreciated by locals and visitors from overseas."
                    },
                    image: "/eishi/car_rental/images/car01.webp",
                    route: "/business_holdings/car_rental"
                }
            ],

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
                    img: "/eishi/Poultry Farm.webp",
                    title: "batangasPoultry",
                    link: "/business_holdings/batangas/poultry_farm",
                },
            ],
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
        };
    },

    mounted() {
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
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
                    <p style="font-size: 4.5rem;">{{ t.feedMillDetails.businessNameValue }}</p>
                    <p style="margin-top: 3rem; font-size: 1rem;" class="text-blue-grey-darken-2">
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
                <v-parallax src="/eishi/feed_mill/images/feedmil03.webp" height="calc(100vh - 200px)">
                </v-parallax>
            </v-col>
        </v-row>

        <v-row>
            <v-col class="mx-auto" cols="9">
                <v-container>
                    <v-row>
                        <v-col>
                            <p class="text-body-1 text-blue-grey-darken-2 ">
                                {{ t.feedMillText.paragraph1 }}

                            </p>
                            <p class="text-body-1 text-blue-grey-darken-2 mt-4">
                                {{ t.feedMillText.paragraph2 }}</p>
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
                    <v-row>
                        <v-col class="mx-auto">
                            <div class="video-wrapper">
                                <video autoplay loop muted playsinline preload="metadata" poster="/images/hero-img.jpg">
                                    <source src="/eishi/videos/feed mill.mp4" type="video/mp4" />
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
        <!-- desktop view -->
        <v-container>
            <v-row>
                <v-col>
                    <div>
                        <p style="font-size: 2.5rem;">{{ t.feedMillDetails.businessNameValue }}</p>
                        <p style="margin-top: 2rem; font-size: 1rem;" class="text-blue-grey-darken-2">
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
        <v-parallax src="/eishi/feed_mill/images/feedmil03.webp" height="calc(100vh - 200px)">
        </v-parallax>
        <v-container>
            <v-row>
                <v-col>
                    <p class="text-body-1 text-blue-grey-darken-2 ">
                        {{ t.feedMillText.paragraph1 }}

                    </p>
                    <p class="text-body-1 text-blue-grey-darken-2 mt-4">
                        {{ t.feedMillText.paragraph2 }}</p>
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
        <div class="video-wrapper">
            <video autoplay loop muted playsinline preload="metadata" poster="/images/hero-img.jpg">
                <source src="/eishi/videos/feed mill.mp4" type="video/mp4" />
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
                '/eishi/feed_mill/images/f1.webp',
                '/eishi/feed_mill/images/f2.JPG',
                '/eishi/feed_mill/images/f3.JPG',
                '/eishi/feed_mill/images/f4.JPG',
                '/eishi/feed_mill/images/f5.JPG',
                '/eishi/feed_mill/images/f6.JPG',
                '/eishi/feed_mill/images/f7.JPG',
                '/eishi/feed_mill/images/f8.JPG',
                '/eishi/feed_mill/images/f9.JPG',
                '/eishi/feed_mill/images/f10.JPG',
                '/eishi/feed_mill/images/f11.JPG',
                '/eishi/feed_mill/images/f12.JPG',
                '/eishi/feed_mill/images/f13.JPG',
                '/eishi/feed_mill/images/f14.JPG',
                '/eishi/feed_mill/images/f15.JPG',
                '/eishi/feed_mill/images/f16.JPG',
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
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

.map-wrapper {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    /* 16:9 */
    overflow: hidden;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
}

.map-wrapper iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
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
                    <v-row class="mb-10">
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



                            </div>
                        </v-col>

                    </v-row>
                    <v-row>
                        <v-col class="mx-auto">
                            <div class="video-wrapper">
                                <video autoplay loop muted playsinline preload="metadata" poster="/images/hero-img.jpg">
                                    <source src="/eishi/batangas_tokyo_farm/videos/1.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </v-col>
                    </v-row>
                    <section v-for="(section, index) in translatedSections" :key="section.key" :ref="section.key"
                        class="mb-16 mt-10">
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



                    <v-row class="my-10" justify="center">
                        <v-col cols="12">
                            <v-card elevation="6" rounded="lg">
                                <v-card-title class="d-flex align-center">
                                    <v-icon class="me-2" color="primary">mdi-map-marker</v-icon>
                                    <span class="text-h6 font-weight-medium">
                                        TOKYO1 FARM SlTIO PULO
                                    </span>
                                </v-card-title>

                                <v-divider />

                                <v-card-text class="pa-0">
                                    <div class="map-wrapper">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.3096626867014!2d121.0837639!3d13.880423299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd1276c1bf74a1%3A0xb096433be623caaf!2sTOKYO1%20FARM%20SlTIO%20PULO!5e0!3m2!1sen!2sph!4v1770646477053!5m2!1sen!2sph"
                                            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </v-card-text>

                                <v-card-actions class="px-4 pb-4">
                                    <v-icon size="18" class="me-1" color="grey-darken-1">
                                        mdi-map
                                    </v-icon>
                                    <span class="text-body-2 text-grey-darken-1">
                                        TOKYO1 FARM SlTIO PULO
                                    </span>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>


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
                                    <v-img :ref="el => propertyCards.push(el)" :src="property.image" height="400"
                                        cover></v-img>
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



                    </div>
                </v-col>

            </v-row>
        </v-container>


        <v-row class="mb-10">
            <v-col class="mx-auto">
                <div class="video-wrapper">
                    <video autoplay loop muted playsinline preload="metadata" poster="/images/hero-img.jpg">
                        <source src="/eishi/batangas_tokyo_farm/videos/1.mp4" type="video/mp4" />
                    </video>
                </div>
            </v-col>
        </v-row>

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

            <v-row class="my-10" justify="center">
                <v-col cols="12" md="10" lg="8">
                    <v-card elevation="6" rounded="xl">
                        <v-card-title class="d-flex align-center">
                            <v-icon class="me-2" color="primary">mdi-map-marker</v-icon>
                            <span class="text-h6 font-weight-medium">
                                Office Location
                            </span>
                        </v-card-title>

                        <v-divider />

                        <v-card-text class="pa-0">
                            <div class="map-wrapper">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.3096626867014!2d121.0837639!3d13.880423299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd1276c1bf74a1%3A0xb096433be623caaf!2sTOKYO1%20FARM%20SlTIO%20PULO!5e0!3m2!1sen!2sph!4v1770646477053!5m2!1sen!2sph"
                                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </v-card-text>

                        <v-card-actions class="px-4 pb-4">
                            <v-icon size="18" class="me-1" color="grey-darken-1">
                                mdi-map
                            </v-icon>
                            <span class="text-body-2 text-grey-darken-1">
                                TOKYO1 FARM SlTIO PULO
                            </span>
                        </v-card-actions>
                    </v-card>
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
        translatedSections() {
            return this.t.poultry_sections
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
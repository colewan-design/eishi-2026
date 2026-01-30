<style>
.property-table .row-item {
    padding: 12px 0;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    flex-direction: column;
}

.property-table .label {
    font-weight: 100;
    font-size: 0.75rem;
    color: #455a64;
    text-transform: uppercase;
    /* blue-grey-darken-2 tone */
    margin-bottom: 4px;
}

.property-table .value {
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

.bg-color-grey .v-field__overlay {
    background-color: #f5f5f5;
}

/* hide border */
.bg-color-grey .v-field__outline {
    opacity: 0;
}

/* show border when focused */
.bg-color-grey.v-field--active .v-field__outline,
.bg-color-grey:focus-within .v-field__outline {
    opacity: 1;
}

.v-input__prepend-inner .v-icon {
    font-size: 12px;
    /* set your desired size */
}

.video-background {
    position: absolute;
    /* relative to v-app now */
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    /* full viewport height */
    object-fit: cover;
    z-index: 0;
    /* behind nav/overlay */
}
</style>
<template>
    <v-col cols="8" class="mx-auto" v-if="!isMobileView" style="padding-top: 10rem;">
        <v-container>
            <v-row>
                <v-col class="mb-10">
                    <span style="font-size: 48px; font-weight: bold;">{{ t.exploreEishi }}</span> <br>
                    <span style="font-size: 48px; font-weight: bold;"> {{ t.diversePropertyHoldings }}</span>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="d-flex justify-center align-center">
                    <video autoplay loop muted playsinline style="width: 100%;" preload="metadata"
                        poster="/images/hero-img.jpg">
                        <source src="/eishi/videos/Eishi Sample Video.mp4" type="video/mp4" />
                    </video>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <span class="text-uppercase" style="font-size: 12px;">{{ t.location }}</span>
                    <v-select v-model="filters.location" :items="translatedLocations" :label="t.location"
                        variant="outlined" class="bg-color-grey" density="comfortable">
                        <template #prepend-inner>
                            <v-icon size="14">fi-rs-marker</v-icon>
                        </template>
                    </v-select>

                </v-col>

                <v-col>
                    <span class="text-uppercase" style="font-size: 12px;">{{ t.property }}</span>
                    <v-select v-model="filters.property" :items="translatedPropertyTypes" :label="t.property"
                        variant="outlined" class="bg-color-grey" density="comfortable">
                        <template #prepend-inner>
                            <v-icon size="14">fi-tr-house-chimney</v-icon>
                        </template>
                    </v-select>

                </v-col>

                <v-col>
                    <span class="text-uppercase" style="font-size: 12px;">{{ t.type }}</span>
                    <v-select v-model="filters.type" :items="translatedTypes" :label="t.type" variant="outlined"
                        class="bg-color-grey" density="comfortable">
                        <template #prepend-inner>
                            <v-icon size="14">fi-tr-filter</v-icon>
                        </template>
                    </v-select>

                </v-col>
                <v-col cols="1">
                    <v-btn class="mt-7" size="40" color="black">
                        <v-icon size="x-small">
                            fi-rs-search
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>

            <v-row dense>
                <v-col v-for="(property, index) in filteredProperties" :key="index" cols="6">
                    <v-card class="overflow-hidden cursor-pointer" variant="text" @click="$router.push(property.route)">
                        <v-img :src="property.image" height="400" cover :ref="el => imageCards.push(el)" />
                        <v-card-text>
                            <div class="property-table">
                                <div v-for="(value, key) in property.details" :key="key" class="row-item">
                                    <div class="label">{{ translatedProperties[key] || key }}</div>
                                    <div class="value">{{ value }}</div>
                                </div>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>


        </v-container>
    </v-col>
    <div v-if="isMobileView" style="padding-top: 5rem;">
        <v-container>
            <v-row>
                <v-col>
                    <span style="font-size: 36px; font-weight: bold;">{{ t.exploreEishi }}</span> <br>
                    <span style="font-size: 36px; font-weight: bold;"> {{ t.diversePropertyHoldings }}</span>
                </v-col>
            </v-row>
        </v-container>
        <video autoplay loop muted playsinline style="width: 100%;" preload="metadata" poster="/images/hero-img.jpg">
            <source src="/eishi/videos/Eishi Sample Video.mp4" type="video/mp4" />
        </video>
        <v-container>
            <span class="text-uppercase" style="font-size: 12px;">{{ t.location }}</span>
            <v-select v-model="filters.location" :items="translatedLocations" :label="t.location" variant="outlined"
                class="bg-color-grey" density="comfortable">
                <template #prepend-inner>
                    <v-icon size="14">fi-rs-marker</v-icon>
                </template>
            </v-select>


            <span class="text-uppercase" style="font-size: 12px;">{{ t.property }}</span>
            <v-select v-model="filters.property" :items="translatedPropertyTypes" :label="t.property" variant="outlined"
                class="bg-color-grey" density="comfortable">
                <template #prepend-inner>
                    <v-icon size="14">fi-tr-house-chimney</v-icon>
                </template>
            </v-select>


            <span class="text-uppercase" style="font-size: 12px;">{{ t.type }}</span>
            <v-select v-model="filters.type" :items="translatedTypes" :label="t.type" variant="outlined"
                class="bg-color-grey" density="comfortable">
                <template #prepend-inner>
                    <v-icon size="14">fi-tr-filter</v-icon>
                </template>
            </v-select>

            <v-btn class="mt-7" color="black" block size="x-large">
                <v-icon>
                    fi-rs-search
                </v-icon>
                Search Business
            </v-btn>


            <v-row dense style="padding-top: 5rem;">
                <v-col v-for="(property, index) in filteredProperties" :key="index" cols="12">
                    <v-card class="overflow-hidden cursor-pointer" variant="text" @click="$router.push(property.route)">
                        <!-- Image container -->
                        <div class="img-hover-wrapper">
                            <v-img :src="property.image" height="400" cover class="scroll-zoom zoom-img"
                                ref="scrollImages"></v-img>
                        </div>

                        <div class="property-table">
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
gsap.registerPlugin(ScrollTrigger)
export default {
    name: 'batangas_poultry_farm',
    computed: {
        translatedProperties() {
            return this.t.properties
        },
        translatedTypes() {
            return this.t.types
        },
        translatedLocations() {
            return this.t.locations
        },
        translatedPropertyTypes() {
            return this.t.propertyTypes
        },
        filteredProperties() {
            return this.translatedProperties.filter((p) => {
                const locationMatch =
                    !this.filters.location ||
                    p.details.Location?.includes(this.filters.location)

                const propertyMatch =
                    !this.filters.property ||
                    p.title.toLowerCase().includes(this.filters.property.toLowerCase())

                const typeMatch =
                    !this.filters.type ||
                    p.type === this.filters.type // if you add `type` field

                return locationMatch && propertyMatch && typeMatch
            })
        },

        ...mapState(useLanguageStore, ['t']),
    },
    data() {

        return {
            imageCards: [],
            filters: {
                location: null,
                property: null,
                type: null,
            },
            isMobileView: false,
        };
    },

    mounted() {
        this.checkMobileView(); // check on initial load
        window.addEventListener('resize', this.checkMobileView);
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
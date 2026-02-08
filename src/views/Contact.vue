<style>
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

.contact-card {
    transition: background-color 0.3s ease;
}

.contact-card:hover {
    background-color: black;
}

.contact-card:hover * {
    color: white !important;
}

.icon-wrapper {
    width: 40px;
    /* width of the icon */
    height: 40px;
    /* height of the icon */
    position: relative;
    overflow: hidden;
    /* restrict animation inside */
    margin: 0 auto;
    /* center horizontally */
}

.icon-carousel {
    position: relative;
    overflow: hidden;
}

.icon-front,
.icon-back {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
}

.icon-back {
    transform: translateY(100%);
}

.icon-carousel:hover .icon-front {
    transform: translateY(-100%);
}

.icon-carousel:hover .icon-back {
    transform: translateY(0);
}

.contact-grid {
    margin-top: 5rem;
}

.contact-item {
    height: 370px;
    width: 100%;
}

.v-parallax.contact-item {
    display: flex;
}

@media (max-width: 960px) {
    .contact-item {
        height: 300px;
    }
}

@media (max-width: 600px) {
    .contact-item {
        height: 260px;
    }
}
</style>
<template>
    <v-col cols="9" class="mx-auto" v-if="!isMobileView">
        <v-container style="margin-top: 5rem;">
            <v-row style="margin-top: 5rem;" class="contact-grid" dense>
                <v-col cols="12" md="4">
                    <v-parallax class="contact-item" src="/eishi/stock_images/1.avif"></v-parallax>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card variant="text"
                        class="contact-item contact-card d-flex flex-column align-center justify-center text-center pa-4 icon-carousel"
                        height="370">
                        <div class="icon-wrapper">
                            <span class="icon-front">
                                <v-icon>fi-rr-call-outgoing</v-icon>
                            </span>
                            <span class="icon-back">
                                <v-icon>fi-rr-call-outgoing</v-icon>
                            </span>
                        </div>

                        <div style="font-size: 12px;" class="text-grey-darken-1 mt-2">{{ t.contactForm.phoneLabel }}
                        </div>
                        <div style="font-size: 24px;" class="mt-1">+63 (917)-575-5044</div>
                        <div style="font-size: 16px;" class="text-grey-darken-1 mt-1">Mon–Fri, 9AM–6PM UTC</div>
                    </v-card>
                </v-col>

                <v-col cols="12" md="4">
                    <v-parallax class="contact-item" src="/eishi/stock_images/2.avif"></v-parallax>
                </v-col>
            </v-row>
            <v-sheet height="70vh">
                <v-row class="contact-grid" dense>
                    <v-col cols="12" md="4">
                        <v-card variant="text"
                            class="contact-item contact-card d-flex flex-column align-center justify-center text-center pa-4 icon-carousel"
                            height="370">
                            <div class="icon-wrapper">
                                <span class="icon-front">
                                    <v-icon>fi-rr-envelope</v-icon>
                                </span>
                                <span class="icon-back">
                                    <v-icon>fi-rr-envelope</v-icon>
                                </span>
                            </div>

                            <div style="font-size: 12px;" class="text-grey-darken-1 mt-2">{{ t.contactForm.emailLabel }}
                            </div>
                            <div style="font-size: 24px;" class="mt-1">eishiproperties@gmail.com </div>
                            <div style="font-size: 16px;" class="text-grey-darken-1 mt-1">{{ t.contactForm.responseTime
                                }}
                            </div>
                        </v-card>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-parallax class="contact-item" src="/eishi/stock_images/3.avif"></v-parallax>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-card variant="text"
                            class="contact-item contact-card d-flex flex-column align-center justify-center text-center pa-4 icon-carousel"
                            height="370">
                            <div class="icon-wrapper">
                                <span class="icon-front">
                                    <v-icon>fi-ts-cabin</v-icon>
                                </span>
                                <span class="icon-back">
                                    <v-icon>fi-ts-cabin</v-icon>
                                </span>
                            </div>

                            <div style="font-size: 12px;" class="text-grey-darken-1 mt-2">{{ t.contactForm.addressLabel
                                }}
                            </div>
                            <div style="font-size: 24px;" class="mt-1">JC 81 KM5, Pico, La Trinidad, Benguet</div>
                            <div style="font-size: 16px;" class="text-grey-darken-1 mt-1">Monday - Saturday: 9:00 AM -
                            </div>
                            <div style="font-size: 16px;" class="text-grey-darken-1 mt-1">6:00 PM Sunday: Closed</div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-sheet>

        </v-container>
    </v-col>
    <!-- mobile view -->
    <div v-if="isMobileView" style="padding-top: 5rem;">
        <v-parallax style="margin-top: 5rem; height: 20rem;" width="100%" src="/eishi/stock_images/1.avif"></v-parallax>

        <v-card variant="text"
            class="contact-item contact-card d-flex flex-column align-center justify-center text-center pa-4 icon-carousel"
            height="370">
            <div class="icon-wrapper">
                <span class="icon-front">
                    <v-icon>fi-rr-call-outgoing</v-icon>
                </span>
                <span class="icon-back">
                    <v-icon>fi-rr-call-outgoing</v-icon>
                </span>
            </div>

            <div style="font-size: 12px;" class="text-grey-darken-1 mt-2">{{ t.contactForm.phoneLabel }}
            </div>
            <div style="font-size: 24px;" class="mt-1">+63 (917)-575-5044</div>
            <div style="font-size: 16px;" class="text-grey-darken-1 mt-1">Mon–Fri, 9AM–6PM UTC</div>
        </v-card>
        <v-parallax style="height: 20rem;" src="/eishi/stock_images/2.avif"></v-parallax>


        <v-card variant="text"
            class="contact-card d-flex flex-column align-center justify-center text-center pa-4 icon-carousel"
            height="370">
            <div class="icon-wrapper">
                <span class="icon-front">
                    <v-icon>fi-rr-envelope</v-icon>
                </span>
                <span class="icon-back">
                    <v-icon>fi-rr-envelope</v-icon>
                </span>
            </div>

            <div style="font-size: 12px;" class="text-grey-darken-1 mt-2">{{ t.contactForm.emailLabel }}
            </div>
            <div style="font-size: 24px;" class="mt-1">eishiproperties@gmail.com </div>
            <div style="font-size: 16px;" class="text-grey-darken-1 mt-1">{{ t.contactForm.responseTime }}
            </div>
        </v-card>


        <v-parallax style="height: 20rem;" src="/eishi/stock_images/3.avif"></v-parallax>


        <v-card variant="text"
            class="contact-card d-flex flex-column align-center justify-center text-center pa-4 icon-carousel"
            height="370">
            <div class="icon-wrapper">
                <span class="icon-front">
                    <v-icon>fi-ts-cabin</v-icon>
                </span>
                <span class="icon-back">
                    <v-icon>fi-ts-cabin</v-icon>
                </span>
            </div>

            <div style="font-size: 12px;" class="text-grey-darken-1 mt-2">{{ t.contactForm.addressLabel }}
            </div>
            <div style="font-size: 24px;" class="mt-1">JC 81 KM5, Pico, La Trinidad, Benguet</div>
            <div style="font-size: 16px;" class="text-grey-darken-1 mt-1">Monday - Saturday: 9:00 AM -</div>
            <div style="font-size: 16px;" class="text-grey-darken-1 mt-1">6:00 PM Sunday: Closed</div>
        </v-card>

    </div>

</template>

<script>
import { mapState } from 'pinia';
import { useLanguageStore } from '@/stores/languageStore';
export default {
    name: 'HomeView',
    data() {

        return {
            isMobileView: false,
        };
    },
    computed: {
        ...mapState(useLanguageStore, ['t']),
    },
    mounted() {
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
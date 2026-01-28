<style scoped>
.partner-carousel-wrapper {
    overflow: hidden;
    width: 100%;
}

.partner-carousel {
    display: flex;
    flex-wrap: nowrap;
    animation: scroll-logos 20s linear infinite;
}

.partner-logo {
    min-width: 100px;
    /* smaller width */
    margin: 0 1rem;
    /* optional spacing */
}

.partner-logo v-img {
    height: 50px;
    /* reduce logo height */
}

@keyframes scroll-logos {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}
</style>

<template>
    <v-container fluid class="pa-0" style="position: relative;" v-if="!isMobileView">
        <v-row no-gutters>
            <!-- Full-screen background image -->
            <v-col class="pa-0" style="height: 100vh;">
                <div class="img-hover-wrapper" style="height: 100%;">
                    <v-img src="/eishi/pexels-neil-clark-ongchangco-2154700388-33407957.webp" cover height="100%"
                        width="100%" :ref="el => imageCards.push(el)"></v-img>
                </div>
            </v-col>


            <!-- Overlay form -->
            <v-col cols="4"
                style="position: absolute; top: 50%; left: 5%; transform: translateY(-50%); background: rgba(255,255,255,0.75); padding: 2rem; border-radius: 8px;">
                <h2>{{ t.getInTouch }}</h2>
                <v-form>
                    <v-text-field :label="t.contactForm.firstNameLabel" outlined dense></v-text-field>
                    <v-text-field :label="t.contactForm.emailLabel" outlined dense></v-text-field>
                    <v-textarea :label="t.contactForm.messageLabel" outlined dense rows="4"></v-textarea>
                    <v-btn color="black" class="mt-4" rounded>{{ t.send }}</v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>

    <v-container fluid class="ma-0 pa-0" v-if="!isMobileView">
        <!-- Partner Logos Section -->
        <v-row>
            <v-col class="mt-10 mx-auto" cols="4">
                <span style="font-size: 1.5rem; font-weight:bold">{{ t.ourPartner }}</span>
                <div class="partner-carousel-wrapper">
                    <div class="partner-carousel">
                        <div v-for="(logo, i) in repeatedLogos" :key="i"
                            class="partner-logo d-flex flex-column align-center mx-4">
                            <a v-if="logo.link" :href="logo.link" target="_blank" rel="noopener"
                                class="text-decoration-none text-black">
                                <v-img :height="70" :src="logo.img"></v-img>
                                <h4 class="font-weight-regular text-center mt-2">{{ logo.title }}</h4>
                            </a>
                            <div v-else>
                                <v-img :height="70" :src="logo.img"></v-img>
                                <h4 class="font-weight-regular text-center mt-2">{{ logo.title }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </v-col>
        </v-row>

        <!-- Call to Action -->
        <v-row>
            <v-col class="text-center mt-10 mb-10">
                <v-btn size="large" color="black" class="text-carousel btn-fixed-width" height="80" width="230">

                    <span class="text-front"> {{ t.becomePartner }}</span>
                    <span class="text-back"> {{ t.becomePartner }}</span>
                </v-btn>
            </v-col>
        </v-row>

        <!-- Footer Info Section -->
        <v-sheet class="bg-black py-10">
            <v-container>
                <v-row class="text-white" align="start" justify="space-between">
                    <v-col cols="12" md="4" class="text-center text-md-left mb-6 mb-md-0">
                        <v-img :width="200" aspect-ratio="16/9" cover src="/eishi/eishi logo 2.webp"
                            class="mx-auto mx-md-0" />
                    </v-col>

                    <v-col cols="12" sm="6" md="4" class="text-center text-md-left mb-6 mb-md-0">
                        <h3 class="mb-4">{{ t.location }}</h3>
                        <p>{{ t.mainOfficeAddress }}</p>
                        <p>{{ t.mainOfficeAddress2 }}</p>
                    </v-col>

                    <v-col cols="12" sm="6" md="4" class="text-center text-md-left">
                        <h3 class="mb-4">{{ t.contact }}</h3>
                        <p>{{ t.eishiGmail }}</p>
                        <p>(+63) 917-575-5044</p>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>
    </v-container>
    <!-- Mobile UI -->
    <v-container fluid class="pa-0" style="position: relative;" v-if="isMobileView">
        <v-row no-gutters>
            <!-- Full-screen background image -->
            <v-col class="pa-0" style="height: 100vh;">
                <div style="height: 100%;">
                    <v-img :ref="el => imageCards.push(el)"
                        src="/eishi/pexels-neil-clark-ongchangco-2154700388-33407957.webp" cover height="100%"
                        width="100%"></v-img>
                </div>
            </v-col>


            <!-- Overlay form -->
            <v-col cols="12" class="text-white mx-auto"
                style="position: absolute; top: 50%; transform: translateY(-50%); padding: 2rem; border-radius: 8px;">
                <h2 class="text-white">{{ t.getInTouch }}</h2>
                <v-form>
                    <v-text-field :label="t.contactForm.firstNameLabel" variant="outlined" dense></v-text-field>
                    <v-text-field :label="t.contactForm.emailLabel" variant="outlined" dense></v-text-field>
                    <v-textarea :label="t.contactForm.messageLabel" variant="outlined" dense rows="4"></v-textarea>
                    <v-btn block color="black" class="mt-4" rounded>{{ t.send }}</v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from 'pinia';
import { useLanguageStore } from '@/stores/languageStore';
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText)
export default {
    name: 'Footer',
    data() {
        return {
            imageCards: [],
            isMobileView: false,
            partner_logo: [
                { img: "/eishi/logo/epartners-logo.webp", title: "E.PARTNERS Co., Ltd.", link: "https://epartners-offshore.com/" },
                { img: "/eishi/logo/meishin-group.webp", title: "Meishin Group Co., Ltd.", link: "https://meishin-group.co.jp/" },
                { img: "/eishi/logo/hotel-osaka-logo.webp", title: "Hotel Osaka", link: "https://www.hostelosaka.net/" },
                { img: "/eishi/logo/domoganlawoffice-logo.webp", title: "Domogan & Associates Law Office", link: "" },
                { img: "/eishi/logo/dcm-logo.webp", title: "The Law Firm of Domogan, Chan and Mabalot", link: "" },
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
                            start: 'center center',
                            end: '+=200',
                            scrub: 2,
                            invalidateOnRefresh: true
                        }
                    }
                )
            })
        })


        this.checkMobileView();
    },
    computed: {
        ...mapState(useLanguageStore, ['t']),
        repeatedLogos() {
            // duplicate logos for seamless scrolling
            return [...this.partner_logo, ...this.partner_logo];
        },
    },
    methods: {
        checkMobileView() {
            this.isMobileView = this.$vuetify.display.mobile;
        },

    },
};
</script>

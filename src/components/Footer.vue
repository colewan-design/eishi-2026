<style scoped>
.mobile-contact {
    position: relative;
    color: white;
}

/* Cinematic dark fade */
.image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom,
            rgba(0, 0, 0, 0.25),
            rgba(0, 0, 0, 0.85));
}

/* Bottom-sheet form */
.form-sheet {
    position: absolute;
    bottom: env(safe-area-inset-bottom, 0);
    left: 0;
    right: 0;

    padding: 1.5rem;
    padding-bottom: 2rem;

    backdrop-filter: blur(12px);
    background: rgba(0, 0, 0, 0.65);

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}

/* Button */
.send-btn {
    background: linear-gradient(135deg,
            #111,
            #333);
    color: white;
}


.partner-heading {
    background: linear-gradient(90deg, #000000, #555555, #bbbbbb, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
    background-size: 200% 200%;
    /* for smooth animation */
    animation: gradient-fade 5s ease-in-out infinite alternate;
}

@keyframes gradient-fade {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}


.partner-heading {
    background-size: 200% 200%;
    /* ensures smooth gradient movement */
}

.partner-carousel-wrapper {
    overflow: hidden;
    width: 100%;
    position: relative;

    /* Add fading effect on sides */
    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.partner-carousel {
    display: flex;
    flex-wrap: nowrap;
    animation: scroll-logos 20s linear infinite;
}

.partner-logo {
    flex: 0 0 auto;
    /* prevent shrinking */
    min-width: 100px;
    margin: 0 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 1;
    transition: opacity 0.3s;
}

.partner-logo .logo-img {
    height: 70px;
}

/* Smooth scrolling animation */
@keyframes scroll-logos {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

/* Optional: fade logos when they are near the ends */
.partner-carousel-wrapper::before,
.partner-carousel-wrapper::after {
    content: "";
    position: absolute;
    top: 0;
    width: 10%;
    height: 100%;
    z-index: 10;
}

.partner-carousel-wrapper::before {
    left: 0;
    background: linear-gradient(to right, white, transparent);
}

.partner-carousel-wrapper::after {
    right: 0;
    background: linear-gradient(to left, white, transparent);
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
        <v-sheet height="50vh">
            <v-row>
                <v-col class="mt-10 mx-auto" cols="12">
                    <span class="partner-heading ml-2 text-h3 font-weight-bold">{{ t.ourPartner }}</span>

                    <div class="partner-carousel-wrapper">
                        <div class="partner-carousel">
                            <div v-for="(logo, i) in repeatedLogos" :key="i"
                                class="partner-logo d-flex flex-column align-center">
                                <a v-if="logo.link" :href="logo.link" target="_blank" rel="noopener"
                                    class="text-decoration-none text-black">
                                    <v-img :height="70" :src="logo.img" class="logo-img"></v-img>
                                    <h4 class="font-weight-regular text-center mt-2">{{ logo.title }}</h4>
                                </a>
                                <div v-else>
                                    <v-img :height="70" :src="logo.img" class="logo-img"></v-img>
                                    <h4 class="font-weight-regular text-center mt-2">{{ logo.title }}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-sheet>


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
        <v-sheet class="bg-black py-10" height="50vh">
            <v-container>
                <v-row class="text-white" align="start" justify="space-between">
                    <v-col cols="12" md="4" class="text-center text-md-left mb-6 mb-md-0">
                        <v-img :width="200" aspect-ratio="16/9" cover src="/eishi/eishi_logo-removebg-preview.webp"
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
    <v-container fluid class="pa-0 mobile-contact" v-if="isMobileView">
        <!-- Background Image -->
        <v-img src="/eishi/pexels-neil-clark-ongchangco-2154700388-33407957.webp" cover height="100vh">
            <!-- Dark cinematic overlay -->
            <div class="image-overlay"></div>

            <!-- Bottom Sheet Form -->
            <div class="form-sheet">
                <h2 class="text-h5 font-weight-bold mb-2">
                    {{ t.getInTouch }}
                </h2>

                <p class="text-body-2 mb-4 opacity-80">
                    Let’s start something great.
                </p>

                <v-form>
                    <v-text-field :label="t.contactForm.firstNameLabel" variant="outlined" density="compact"
                        color="white" />

                    <v-text-field :label="t.contactForm.emailLabel" variant="outlined" density="compact"
                        color="white" />

                    <v-textarea :label="t.contactForm.messageLabel" variant="outlined" density="compact" rows="3"
                        color="white" />

                    <v-btn block size="large" class="mt-4 send-btn" rounded="lg">
                        {{ t.send }}
                    </v-btn>
                </v-form>
            </div>
        </v-img>
    </v-container>

</template>

<script>
import { mapState } from 'pinia';
import { useLanguageStore } from '@/stores/languageStore';
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
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

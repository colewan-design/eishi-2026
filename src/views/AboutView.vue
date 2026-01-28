<style>
.scroll-scale {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.scroll-scale video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform-origin: center center;
}

.card-grid {
  border-left: 1px solid #cfd8dc;
  /* left border */
  border-right: 1px solid #cfd8dc;
  /* right border */
}

.card-grid>.v-container {
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  /* 12 columns */
  height: 20px;
  /* adjust card height */
}

.grid-section {
  border-left: 1px solid #cfd8dc;
  /* vertical line */
  height: 100%;
}

/* Optional: hide scrollbar */
.v-row.overflow-auto::-webkit-scrollbar {
  display: none;
}

.v-row.overflow-auto {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
  cursor: grab;
}

.hide-scrollbar.active {
  cursor: grabbing;
}

.sticky-text {
  position: sticky;
  top: 300px;
  /* distance from top */
  transition: transform 0.1s linear;
}

#title1,
#title2 {
  display: inline-block;
  /* allow horizontal transform */
}

.animated-text {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animated-text.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.video-wrapper video {
  width: 100%;
  max-width: 100%;
  height: auto;
}
</style>
<template>
  <v-container style="padding-top: 10rem; padding-bottom: 5rem" v-if="!isMobileView">
    <v-row>
      <v-col cols="9" class="mx-auto">
        <v-row>
          <v-col class="">
            <span ref="aboutTitle" style="font-size: 72px; font-weight: 400">{{ t.about }}</span>
          </v-col>

          <v-col cols="4" class="text-right">
            <div ref="aboutMeta">
              <span>{{ t.since2018Label }}</span><br />
              <span style="font-size: 14px" class="text-grey-darken-2">
                {{ t.since2018Description }}
              </span>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
  <v-container fluid class="pa-0 ma-0" v-if="!isMobileView">
    <v-row no-gutters>
      <v-col class="pa-0 ma-0">
        <div class="scroll-scale" ref="videoWrapper">
          <video ref="video" autoplay loop muted playsinline preload="metadata">
            <source src="/eishi/videos/3d Marketing.webm" type="video/mp4" />
          </video>
        </div>

      </v-col>
    </v-row>
  </v-container>

  <v-container style="padding-top: 5rem; padding-bottom: 5rem" v-if="!isMobileView">
    <v-row>
      <v-col cols="9" class="mx-auto">
        <v-row>
          <v-col cols="7">
            <h1 ref="title1">{{ t.bridgingExpertise }}</h1>
            <h1 ref="title2">{{ t.buildingOpportunities }}</h1>
          </v-col>
          <v-col class="text-justify">
            <p ref="desc1" class="text-grey-darken-2">{{ t.aboutP2 }}</p>
            <p ref="desc2" class="text-grey-darken-2" style="margin-top: 2rem">{{ t.aboutP3 }}</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>


  <div class="bg-black section-block" style="padding-top: 5rem; padding-bottom: 5rem" v-if="!isMobileView">
    <v-container style="padding-top: 5rem; padding-bottom: 5rem">
      <v-row>
        <v-col cols="9" class="mx-auto">
          <v-row>
            <v-col cols="7">
              <span ref="missionTitle" style="font-size: 36px; font-weight: 400">
                {{ t.missionVision }}
              </span>
            </v-col>
            <v-col class="text-justify">
              <span ref="missionDesc" class="d-block">
                {{ t.aboutP4 }}
              </span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <div class="section-block" style="padding-top: 5rem; padding-bottom: 5rem" v-if="!isMobileView">
    <v-container style="padding-top: 5rem; padding-bottom: 5rem">
      <v-row>
        <v-col cols="9" class="mx-auto">
          <v-row>
            <v-col cols="7">
              <span ref="whyUsTitle" style="font-size: 36px; font-weight: 400">
                {{ t.whyUs }}
              </span>
            </v-col>
            <v-col class="text-justify">
              <span ref="whyUsDesc" class="d-block">
                {{ t.aboutP5 }}
              </span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <div class="" style="padding-top: 5rem; padding-bottom: 5rem" v-if="!isMobileView">
    <v-container>
      <v-col cols="9" class="mx-auto">
        <v-row>
          <v-col cols="12" style="margin-bottom: 4rem">
            <span style="font-size: 48px; font-weight: 400">{{ t.ourPartner }}</span>
          </v-col>
          <v-col v-for="(partner, index) in partner_items" :key="index" cols="12" sm="6" md="4" lg="3">
            <v-card rounded="lg" height="100" variant="tonal"
              class="pa-2 hover-card d-flex align-center justify-center flex-sm-row flex-column text-center"
              @click="openPartnerLink(partner.link)" style="cursor: pointer">
              <v-img :src="partner.img" height="40" width="40" contain class="mr-sm-2 mb-2 mb-sm-0" loading="lazy">
                <template #placeholder>
                  <v-skeleton-loader type="image" />
                </template>
              </v-img>
              <span class="partner-title">
                {{ partner.title }}
              </span>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </div>

  <div style="padding-top: 5rem; padding-bottom: 5rem" v-if="!isMobileView">
    <v-container>
      <v-col cols="9" class="mx-auto">
        <v-row>
          <v-col cols="12" style="margin-bottom: 4rem">
            <span style="font-size: 48px; font-weight: 400">{{ t.journeyThroughTheYears }}</span>
          </v-col>

          <!-- Carousel Buttons -->
          <v-col cols="12" class="text-right mb-4">
            <v-btn class="mr-2" color="black" @click="scrollLeft">
              <v-icon>fi-br-angle-left</v-icon>
            </v-btn>
            <v-btn color="black" @click="scrollRight">
              <v-icon>fi-br-angle-right</v-icon>
            </v-btn>
          </v-col>

          <!-- Carousel -->
          <div ref="carousel" class="d-flex hide-scrollbar"
            style="overflow-x: auto; scroll-behavior: smooth; gap: 16px; flex-wrap: nowrap">
            <v-sheet v-for="(item, index) in timeline_cards" :key="index" width="450" class="ml-2 flex-shrink-0">
              <v-card variant="text" class="card-grid mt-5">
                <v-btn variant="tonal">{{ item.year }}</v-btn>
                <v-container class="pa-0 mt-5">
                  <div v-for="n in item.gridCount" :key="n" class="grid-section"></div>
                </v-container>

                <v-row class="mt-2">
                  <v-col cols="12" class="ml-5">
                    <span style="font-size: 24px">{{ item.title }}</span>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" class="d-flex justify-center">
                    <v-img class="ml-5 mr-5" :src="item.image" height="350" width="60%" cover loading="lazy">
                      <template #placeholder>
                        <v-skeleton-loader type="image" />
                      </template>
                    </v-img>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col class="ml-5 mr-5 text-grey-darken-2">
                    <span style="white-space: normal">{{ item.description }}</span>
                  </v-col>
                </v-row>
              </v-card>
            </v-sheet>
          </div>

          <!-- End Carousel -->
        </v-row>
      </v-col>
    </v-container>
  </div>

  <div style="padding-top: 5rem; padding-bottom: 5rem" class="bg-grey-lighten-3" v-if="!isMobileView">
    <v-container v-if="!isMobileView">
      <v-row>
        <v-col cols="9" class="mx-auto">
          <v-container>
            <v-row>
              <v-col cols="6" class="d-flex flex-column align-start pa-0">
                <v-container>
                  <v-row>
                    <span style="font-size: 2rem; ">
                      <h1 style="font-weight: 300;">{{ t.yourVission }}</h1>
                      <h1 style="font-weight: 300;">{{ t.ourMission }}</h1>
                    </span>
                  </v-row>
                  <v-row>
                    <v-col class="text-left ma-0 pa-0">
                      <v-parallax width="400px" src="/eishi/pexels-rickyrecap-1662159.webp"></v-parallax>
                    </v-col>
                  </v-row>
                  <v-row style="padding-top:2rem;font-size: 1rem;">
                    <v-col class="text-left ma-0 pa-0" cols="9">
                      <span class="">{{ t.missionDescription }}</span>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-btn to="/about" rounded size="x-large"
                      class="text-capitalize mt-12 text-carousel btn-fixed-width" height="80" width="300" color="black">

                      <span class="text-front">{{ t.moreAboutEishi }}</span>
                      <span class="text-back"> {{ t.moreAboutEishi }}</span>
                    </v-btn>
                  </v-row>
                </v-container>
              </v-col>
              <v-col cols="6">
                <v-container>
                  <v-row>
                    <v-col v-for="(item, index) in vission_cards" :key="index" cols="12" class="d-flex justify-end">
                      <v-card flat height="250px" width="500px" class="d-flex flex-column text-left pa-4">
                        <!-- Title at top -->
                        <span style="font-size: 2rem; font-weight: bold;">
                          {{ twoDigits(index + 1) }} | {{ item.title }}
                        </span>

                        <!-- Description at bottom -->
                        <span class="mt-auto text-blue-grey-darken-2">
                          {{ item.description }}
                        </span>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <div style="padding-top: 5rem; padding-bottom: 5rem" class="bg-black" v-if="!isMobileView">
    <v-container>
      <v-row>
        <v-col cols="9" class="mx-auto">
          <v-container style="height: 400vh; position: relative" class="text-center" ref="excitedSection">
            <div ref="textContainer" style="position: sticky; top: 300px; width: 100%; color: white">
              <div ref="excitedWorksTitle1" style="font-size:64px; display:inline-block">
                {{ t.excitedWorksTitle }}
              </div>

              <br />

              <div ref="excitedWorksTitle2" style="font-size:16px; margin-top:200px; display:inline-block">
                {{ t.excitedWorksDescription }}
              </div>
            </div>
            <!-- Left-aligned image -->
            <div style="width: 100%; top: 500px">
              <v-img src="/eishi/stock_images/12.webp" height="300" width="400" loading="lazy">
                <template #placeholder>
                  <v-skeleton-loader type="image" />
                </template>
              </v-img>
            </div>

            <!-- Right-aligned image -->
            <div style="margin-top: 50px; margin-left: 600px">
              <v-img src="/eishi/stock_images/13.webp" height="600" width="600" loading="lazy">
                <template #placeholder>
                  <v-skeleton-loader type="image" />
                </template>
              </v-img>
            </div>
            <!-- Left-aligned image -->
            <div style="width: 100%; margin-top: 50px">
              <v-img src="/eishi/stock_images/14.webp" height="300" width="400" loading="lazy">
                <template #placeholder>
                  <v-skeleton-loader type="image" />
                </template>
              </v-img>
            </div>

            <!-- Right-aligned image -->
            <div style="margin-top: 50px; margin-left: 600px">
              <v-img src="/eishi/stock_images/15.webp" height="800" width="600" loading="lazy">
                <template #placeholder>
                  <v-skeleton-loader type="image" />
                </template>
              </v-img>
            </div>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <div style="padding-top: 5rem; padding-bottom: 5rem" v-if="!isMobileView">
    <v-container>
      <v-row>
        <v-col cols="9" class="mx-auto">
          <v-container>
            <v-row>
              <v-col v-for="(item, index) in translatedStats" :key="index"
                :class="{ 'last-card': index === stats.length - 1 }">
                <v-card ref="clientCards" height="100vh" class="d-flex flex-column justify-start align-center"
                  style="position: relative; background-color: transparent" variant="flat">
                  <!-- grey static left border -->
                  <div style="position: absolute; left: 0; top: 0; width: 2px; height: 100%" class="bg-grey"></div>

                  <!-- animated black left border -->
                  <div ref="borderGrows" style="
                      position: absolute;
                      left: 0;
                      top: 0;
                      width: 2px;
                      height: 0;
                      background-color: black;
                    "></div>

                  <!-- grey static right border for last card -->
                  <div v-if="index === stats.length - 1" style="
                      position: absolute;
                      right: 0;
                      top: 0;
                      width: 2px;
                      height: 100%;
                      background-color: grey;
                    "></div>

                  <!-- card content -->
                  <div :style="{ marginTop: `${index * 100}px`, textAlign: 'center' }">
                    <span style="font-size: 16px" class="text-grey-darken-2">
                      {{ item.label }}
                    </span>
                    <br />
                    <span style="font-size: 48px">
                      {{ animatedValues[index] }}+
                    </span>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <div v-if="isMobileView" class="bg-grey-lighten-4">
    <v-container style="padding-top: 5rem; padding-bottom: 5rem">
      <v-row>
        <v-col class="mx-auto">
          <v-row>
            <v-col cols="12" class="animate__animated animate__slideInLeft">
              <span style="font-size: 48px; font-weight: 400">{{ t.about }}</span>
            </v-col>

            <v-col class="text-right animate__animated animate__slideInRight">
              <span>{{ t.since2018Label }}</span><br />
              <span style="font-size: 14px" class="text-grey-darken-2">
                {{ t.since2018Description }}
              </span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="pa-0 ma-0">
      <v-row no-gutters>
        <v-col class="pa-0 ma-0">
          <div class="video-wrapper">
            <video autoplay loop muted playsinline preload="metadata" poster="/images/hero-img.jpg">
              <source src="/eishi/videos/3d Marketing.webm" type="video/mp4" />
            </video>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container style="padding-top: 5rem; padding-bottom: 5rem">
      <v-row>
        <v-col class="mx-auto">
          <v-row>
            <v-col cols="12">
              <h1 ref="title1Mobile">{{ t.bridgingExpertise }}</h1>
              <h1 ref="title2Mobile">{{ t.buildingOpportunities }}</h1>
            </v-col>
            <v-col class="text-justify">
              <p>{{ t.aboutP2 }}</p>
              <p style="margin-top: 2rem">{{ t.aboutP3 }}</p>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <div class="bg-black">
      <v-container style=" padding-bottom: 5rem">
        <v-row>
          <v-col>
            <v-row>
              <v-col cols="12">
                <span style="font-size: 36px; font-weight: 400">
                  {{ t.missionVision }}
                </span>
              </v-col>
              <v-col class="text-justify">
                <span>
                  {{ t.aboutP4 }}
                </span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div style="padding-top: 5rem; padding-bottom: 5rem">
      <v-container style="padding-top: 5rem; padding-bottom: 5rem">
        <v-row>
          <v-col>
            <v-row>
              <v-col cols="12">
                <span ref="whyUsTitleMobile" style="font-size: 48px; font-weight: 400">
                  {{ t.whyUs }}
                </span>
              </v-col>
              <v-col class="text-justify">
                <span class="d-block">
                  {{ t.aboutP5 }}
                </span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="" style=" padding-bottom: 5rem">
      <v-container>
        <v-row>
          <v-col cols="12" style="margin-bottom: 4rem">
            <span style="font-size: 48px; font-weight: 400">{{ t.ourPartner }}</span>
          </v-col>
          <v-col v-for="(partner, index) in partner_items" :key="index" cols="12">
            <v-card flat :href="partner.link" style="cursor: pointer">
              <v-img :src="partner.img" height="200" contain class="pa-0" loading="lazy">
                <template #placeholder>
                  <v-skeleton-loader type="image" />
                </template>
              </v-img>
              <v-card-title class="pa-2 text-center">
                {{ partner.title }}
              </v-card-title>
            </v-card>

          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-card v-for="(item, index) in vission_cards" :key="index" cols="12" class="ma-4" flat>
      <v-container>
        <v-row>
          <v-col class="d-flex justify-end text-black bg-white">

            <div
              style="height: 300px; display: flex; flex-direction: column; justify-content: space-between; padding: 16px;">
              <!-- Title at top -->
              <span style="font-size: 2rem; font-weight: bold;">
                {{ twoDigits(index + 1) }} | {{ item.title }}
              </span>

              <!-- Description at bottom -->
              <span>
                {{ item.description }}
              </span>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <div class="bg-black">
      <v-container>
        <v-row>
          <v-col class="mx-auto">
            <v-container style="height: 400vh; position: relative" class="text-center">
              <div ref="textContainerMobile" style="position: sticky; top: 300px; width: 100%; color: white">
                <div style="font-size: 36px; display: inline-block">
                  {{ t.excitedWorksTitle }}
                </div>
                <br />
                <div style="font-size: 16px; margin-top: 200px; display: inline-block">
                  {{ t.excitedWorksDescription }}
                </div>
              </div>
              <!-- Image 1 – Left -->
              <div style="margin-top:300px;  float: right;">
                <v-img src="/eishi/stock_images/12.webp" height="120" width="180"
                  style="margin-left:0; margin-right:auto;" loading="lazy">
                  <template #placeholder>
                    <v-skeleton-loader type="image" />
                  </template>
                </v-img>
              </div>

              <!-- Image 2 – Right -->
              <div style="margin-top:300px; float: left;">
                <v-img src="/eishi/stock_images/13.webp" height="240" width="240"
                  style="margin-left:auto; margin-right:0;" loading="lazy">
                  <template #placeholder>
                    <v-skeleton-loader type="image" />
                  </template></v-img>
              </div>

              <!-- Image 3 – Left -->
              <div style="margin-top:300px;  float: right;">
                <v-img src="/eishi/stock_images/14.webp" height="180" width="220"
                  style="margin-left:0; margin-right:auto;" loading="lazy">
                  <template #placeholder>
                    <v-skeleton-loader type="image" />
                  </template>
                </v-img>
              </div>

              <!-- Image 4 – Right -->
              <div style="margin-top:300px; float: left;">
                <v-img src="/eishi/stock_images/15.webp" height="300" width="240"
                  style="margin-left:auto; margin-right:0;" loading="lazy">
                  <template #placeholder>
                    <v-skeleton-loader type="image" />
                  </template>
                </v-img>
              </div>


            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-container>
      <v-row>
        <v-col v-for="(item, index) in translatedStats" :key="index" cols="12">
          <v-card ref="clientCardsMobile" height="120" class="d-flex flex-column justify-center "
            style="position: relative; background-color: transparent" flat>
            <!-- top horizontal line -->
            <div style="position:absolute; top:0; left:0; width:100%; height:1px" class="bg-grey"></div>

            <!-- animated black top line -->
            <div ref="borderGrowsMobile" style="
            position:absolute;
            top:0;
            left:0;
            width:0;
            height:1px;
            background:black;
          "></div>

            <!-- bottom horizontal line (last row only) -->
            <div v-if="index === stats.length - 1" style="position:absolute; bottom:0; left:0; width:100%; height:1px"
              class="bg-grey"></div>

            <!-- content -->
            <div>
              <span class="text-grey-darken-2" style="font-size:14px">
                {{ item.label }}
              </span>
              <br />
              <span style="font-size:36px">
                {{ animatedValues[index] }}+
              </span>
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
  name: 'HomeView',
  data() {
    return {
      cards: [],
      vission_cards: [],
      timeline_cards: [],
      animatedValues: [],
      stats: [
        { label: 'Clients Served', value: 500 },
        { label: 'Verified Properties', value: 1200 },
        { label: 'Years Combined Experience', value: 50 },
        { label: 'Property Value Transacted', value: 300 },
      ],
      currentMove: 0,
      targetMove: 0,
      animationFrame: null,
      scrollAmount: 320,
      partner_items: [
        {
          img: '/eishi/logo/epartners-logo.webp',
          title: 'E.PARTNERS Co., Ltd.',
          link: 'https://epartners-offshore.com/',
        },
        {
          img: '/eishi/logo/meishin-group.webp',
          title: 'Meishin Group Co., Ltd.',
          link: 'https://meishin-group.co.jp/',
        },
        {
          img: '/eishi/logo/hotel-osaka-logo.webp',
          title: 'Hotel Osaka',
          link: 'https://www.hostelosaka.net/',
        },
        {
          img: '/eishi/logo/domoganlawoffice-logo.webp',
          title: 'Domogan & Associates Law Office',
          link: '',
        },
        {
          img: '/eishi/logo/dcm-logo.webp',
          title: 'The Law Firm of Domogan, Chan and Mabalot',
          link: '',
        },
      ],
      isMobileView: false,
    }
  },
  watch: {
    // watch the translation object
    t: {
      handler(newT) {
        this.cards = [
          { title: newT.builtOnTrustTitle, description: newT.builtOnTrustDescription },
          { title: newT.foodSecurityTitle, description: newT.foodSecurityDescription },
          { title: newT.foreignInvestmentsTitle, description: newT.foreignInvestmentsDescription },
          { title: newT.impactfulProjectsTitle, description: newT.impactfulProjectsDescription },
          { title: newT.expandingFarmsTitle, description: newT.expandingFarmsDescription },
          { title: newT.growthInnovationTitle, description: newT.growthInnovationDescription },
        ];
        this.updateTranslations()
      },
      deep: true, // ensures nested changes trigger
    }
  },
  computed: {
    ...mapState(useLanguageStore, ['t']),
    translatedStats() {
      return this.t.stats
    },
  },
  mounted() {
    this.$nextTick(() => {
      const wrapper = this.$refs.videoWrapper
      const video = this.$refs.video;
      gsap.set(video, { scale: 0.5 });

      gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: '+=200%',
          scrub: 2,
          pin: true,
          anticipatePin: 1
        }
      }).to(video, {
        scale: 1,
        ease: 'expo.out'
      });

      // ------------------------------
      // TITLES & DESCRIPTIONS ANIMATION
      // ------------------------------
      const sectionsToAnimate = [
        this.$refs.aboutTitle,
        this.$refs.aboutMeta,
        this.$refs.title1,
        this.$refs.title2,
        this.$refs.desc1,
        this.$refs.desc2,
        this.$refs.missionTitle,
        this.$refs.missionDesc,
        this.$refs.whyUsTitle,
        this.$refs.whyUsDesc,
        this.$refs.aboutTitleMobile,
        this.$refs.aboutMetaMobile,
        this.$refs.title1Mobile,
        this.$refs.title2Mobile,
        this.$refs.desc1Mobile,
        this.$refs.desc2Mobile,
        this.$refs.missionTitleMobile,
        this.$refs.missionDescMobile,
        this.$refs.whyUsTitleMobile,
        this.$refs.whyUsDescMobile
      ];

      sectionsToAnimate.forEach(el => {
        if (!el) return;
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            once: true
          },
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out'
        });
      });

      // ------------------------------
      // STATS ANIMATION
      // ------------------------------
      this.animatedValues = this.translatedStats.map(() => 0);
      this.animateStats();
    });

    const section = this.$refs.excitedSection.$el

    const excitedWorksTitle1 = this.$refs.excitedWorksTitle1
    const excitedWorksTitle2 = this.$refs.excitedWorksTitle2
    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom top',        // until bottom of container
        scrub: 1,                 // smooth slow movement
      }
    })
      .to(excitedWorksTitle1, {
        x: () => -window.innerWidth * 0.3, // move left
        ease: 'none'
      }, 0)
      .to(excitedWorksTitle2, {
        x: () => window.innerWidth * 0.3,  // move right
        ease: 'none'
      }, 0)

    document.fonts.ready.then(() => {
      this.$nextTick(() => {
        this.titleSplit = new SplitText(this.$refs.aboutTitle, {
          type: 'lines'
        })

        this.titleSplit.lines.forEach(line => {
          line.classList.add('linear-gradient-text')
        })

        gsap.from(this.titleSplit.lines, {
          yPercent: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.04,
          ease: 'expo.out'
        })
      })
    })

    this.updateTranslations();
    this.checkMobileView()
    window.addEventListener('resize', this.checkMobileView)
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobileView)
  },

  methods: {
    animateStats() {
      this.$refs.clientCards.forEach((cardRef, index) => {
        const cardEl = cardRef.$el || cardRef
        const targetValue = this.translatedStats[index].value

        const counter = { val: 0 }

        gsap.to(counter, {
          val: targetValue,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardEl,
            start: 'top 80%',
            once: true
          },
          onUpdate: () => {
            this.animatedValues[index] = Math.floor(counter.val)
          }
        })
      })
      this.$refs.clientCardsMobile.forEach((cardRef, index) => {
        const cardEl = cardRef.$el || cardRef
        const targetValue = this.translatedStats[index].value

        const counter = { val: 0 }

        gsap.to(counter, {
          val: targetValue,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardEl,
            start: 'top 80%',
            once: true
          },
          onUpdate: () => {
            this.animatedValues[index] = Math.floor(counter.val)
          }
        })
      })
    },
    openPartnerLink(link) {
      if (link) {
        // Only try to open if link is non-empty
        window.open(link, '_blank')
      }
    },

    updateTranslations() {
      // update vission cards
      this.vission_cards = [
        { title: this.t.builtOnTrustTitle, description: this.t.builtOnTrustDescription },
        { title: this.t.foodSecurityTitle, description: this.t.foodSecurityDescription },
        { title: this.t.foreignInvestmentsTitle, description: this.t.foreignInvestmentsDescription },
        { title: this.t.impactfulProjectsTitle, description: this.t.impactfulProjectsDescription },
        { title: this.t.expandingFarmsTitle, description: this.t.expandingFarmsDescription },
        { title: this.t.growthInnovationTitle, description: this.t.growthInnovationDescription },
      ]

      // update timeline cards only if it exists
      if (this.t.timelineCards && this.t.timelineCards.length > 0) {
        this.timeline_cards = this.t.timelineCards.map(card => ({
          year: card.year,
          title: card.title,
          description: card.description,
          image: card.image,
          gridCount: card.gridCount || 20,
        }))
      }
    },

    updateTargetMove() {
      const container = this.$refs.textContainer
      if (!container) return

      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // fraction scrolled in container
      let progress = (windowHeight - rect.top) / (windowHeight + rect.height)
      progress = Math.min(Math.max(progress, 0), 1)

      const maxMove = container.offsetWidth / 4
      this.targetMove = progress * maxMove // target horizontal movement
    },

    twoDigits(value) {
      return value < 10 ? '0' + value : value
    },
    scrollLeft() {
      this.$refs.carousel.scrollLeft -= this.scrollAmount
    },
    scrollRight() {
      this.$refs.carousel.scrollLeft += this.scrollAmount
    },
    checkMobileView() {
      this.isMobileView = this.$vuetify.display.mobile
    },
  },
}
</script>

<style>
.zoom-efect {
  transform: scale(1.05);
  transition: transform 0.5s ease;
}

.v-card {
  border-radius: 0 !important;
}

.hero-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  /* stack content vertically */
  justify-content: center;
  /* vertical centering */
  align-items: flex-start;
  /* align content to the left */
  padding-left: 5%;
  /* optional spacing from left edge */
  text-align: left;
  /* align text inside elements to left */
}

.v-application .v-app-bar {
  position: relative;
  /* ensure it stays above video */
  z-index: 10;
}


.hero-container h1 {
  font-size: 5rem;
  /* base size */
}

@media (min-width: 768px) {
  .hero-container h1 {
    font-size: 7rem;
    /* medium screens */
  }
}

@media (min-width: 1200px) {
  .hero-container h1 {
    font-size: 6rem;
    /* large screens */
  }
}


.card-features {
  width: 100%;
  height: 100vh;
}

.property-table {
  width: 80%;
  border-collapse: collapse;
  color: white;
}

.property-table td {
  padding: 30px 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  /* thinner horizontal line */
}


.title-row {
  font-weight: bold;
  text-align: center;
  font-size: 1.5rem;
  padding-bottom: 25px;
}

.stacked-field {
  border: none;
}

.stacked-field .label {
  font-size: 0.75rem;
  opacity: 0.7;
}

.stacked-field .value {
  font-size: 1rem;
}


.sticky-card {
  position: sticky;
  top: 0;
}


.intro-section {
  margin-top: 30vh;
  /* push below full-screen video */
  position: relative;
  z-index: 2;
}

.hero-container-mobile {
  position: relative;
  height: 60vh;
  /* full viewport height */
  width: 100%;
  z-index: 1;
}

.hero-content {
  height: 100%;
}

@keyframes fadeSlideUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-sequence {
  opacity: 0;
  /* start hidden */
  animation: fadeSlideUp 1s forwards;
}

/* Sequential delays */
.hero-text.animate-sequence {
  animation-delay: 0.3s;
}

.hero-subtext.animate-sequence {
  animation-delay: 1s;
}

.fade-card {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
}

.fade-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* mobile table */
.mobile-property-table {
  width: 100%;
  border-collapse: collapse;
}

.mobile-property-table td {
  padding: 16px 0;
}

.mobile-property-table tr {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

/* Remove bottom border for title row */
.mobile-property-table .mobile-title-row {
  border-bottom: none;
}

.mobile-title-row td {
  font-size: 2rem;
  font-weight: 600;
  padding-bottom: 20px;
}

.stacked-row .mobile-label {
  font-size: 0.75rem;
  opacity: 0.7;
  margin-bottom: 4px;
}

.stacked-row .mobile-value {
  font-size: 1rem;
  font-weight: 500;
}


.button-line-group .line {
  width: 10px;
  /* fixed line width */
  height: 2px;
  /* thickness */
  background-color: black;
  margin: 0;
  /* connected to buttons */
}

/* carouse */
.carousel-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 16px 0;
}

.carousel-wrapper {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  /* snap per slide */
  scrollbar-width: none;
  /* Firefox */
}

.carousel-wrapper::-webkit-scrollbar {
  display: none;
  /* Chrome/Safari */
}

.step-description {
  flex: 0 0 100%;
  scroll-snap-align: start;
  text-align: center;
  position: relative;
}

.text-carousel {
  position: relative;
  overflow: hidden;
  height: 60px;
  /* enough for title+desc */
}

.text-carousel .title,
.text-carousel .desc {
  position: absolute;
  width: 100%;
  line-height: 2rem;
}

.text-carousel-wrapper {
  position: relative;
  height: 50px;
  /* adjust to fit your text */
  overflow: hidden;
}

.text-carousel-item {
  position: absolute;
  width: 100%;
  text-align: center;
}
</style>
<template>
  <div v-if="!isMobileView">
    <div class="hero-container position-relative">
      <!-- Overlay Text -->
      <div class="overlay d-flex flex-column justify-center align-start text-left">
        <h1 ref="title" style="font-weight:300">
          {{ t.welcome }}
        </h1>
        <h3 ref="tagline" class="text-grey font-weight-bold">
          {{ t.webTagline }}
        </h3>
      </div>


    </div>
    <!-- desktop -->
    <div class="bg-grey-lighten-4">
      <v-container fluid style="padding-top: 10rem;padding-bottom: 10rem;">
        <v-row>
          <v-col class="mx-auto d-flex flex-column align-start" cols="9">
            <v-card class="mx-auto ma-4" variant="text">
              <p class="mb-5 scroll-text" ref="scrollText" style="line-height: 1; font-size: 3rem;">
                <span v-for="(letter, index) in letters" :key="index" class="antique letter"
                  style="letter-spacing: 1px;">
                  {{ letter.char }}
                </span>
              </p>
            </v-card>


            <v-btn to="/about" rounded size="x-large" class="text-capitalize mt-12 text-carousel btn-fixed-width"
              height="80" width="400" color="black">

              <span class="text-front"> {{ t.moreAboutEishi }}</span>
              <span class="text-back"> {{ t.moreAboutEishi }}</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <!-- Car Rental -->
    <div class="sticky-card" style="z-index: 1; height: 100vh;" ref="carRentalCard">
      <v-card class="bg-black" @click="$router.push('/business_holdings/car_rental')">
        <v-row align="center">
          <v-col cols="7" class="d-flex justify-center align-center">
            <v-container class="ma-10">
              <table class="property-table">
                <tbody>
                  <tr>
                    <td colspan="2" class="title-row">{{ t.carRental }}</td>
                  </tr>
                  <tr>
                    <td>{{ t.location }}</td>
                    <td>{{ t.carRentalLocation }}</td>
                  </tr>
                </tbody>
              </table>
            </v-container>
          </v-col>

          <v-col class="pa-0 ma-0">
            <v-img src="/eishi/car_rental/images/car01.webp" height="100vh" cover loading="lazy">
              <template #placeholder>
                <v-skeleton-loader type="image" />
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <!-- Feed Mill -->
    <div class="sticky-card" style="z-index: 1; height: 100vh;" ref="feedMillCard">
      <v-card class="bg-black" @click="$router.push('/business_holdings/feed_mill')">
        <v-row align="center">
          <v-col cols="7" class="d-flex justify-center align-center">
            <v-container class="ma-10">
              <table class="property-table">
                <tbody>
                  <tr>
                    <td colspan="2" class="title-row">
                      {{ t.feedMillDetails.businessNameValue }}
                    </td>
                  </tr>
                  <tr>
                    <td>{{ t.location }}</td>
                    <td>{{ t.sanJoseMunicipality }}</td>
                  </tr>
                </tbody>
              </table>
            </v-container>
          </v-col>

          <v-col class="pa-0 ma-0">
            <v-img src="/eishi/feed_mill/images/feedmil03.webp" height="100vh" cover loading="lazy">
              <template #placeholder>
                <v-skeleton-loader type="image" />
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <!-- Poultry Farm -->
    <div class="sticky-card" style="z-index: 1; height: 100vh;" ref="poultryCard">
      <v-card class="bg-black" @click="$router.push('/business_holdings/batangas/poultry_farm')">
        <v-row align="center">
          <v-col cols="7" class="d-flex justify-center align-center">
            <v-container class="ma-10">
              <table class="property-table">
                <tbody>
                  <tr>
                    <td colspan="2" class="title-row"> {{ t.poultryFarm }}</td>
                  </tr>
                  <tr>
                    <td>{{ t.location }}</td>
                    <td>{{ t.sanJoseMunicipality }}</td>
                  </tr>
                  <tr>
                    <td>{{ t.sqm }}</td>
                    <td>3,500</td>
                  </tr>
                  <tr>
                    <td>{{ t.eggPerDay }}</td>
                    <td>630</td>
                  </tr>
                </tbody>
              </table>
            </v-container>
          </v-col>
          <v-col class="pa-0 ma-0">
            <v-img src="/eishi/batangas_tokyo_farm/images/1732160556378.webp" height="100vh" cover loading="lazy">
              <template #placeholder>
                <v-skeleton-loader type="image" />
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <div class="sticky-card" style="z-index: 2; height: 100vh;" ref="pangasinanCard">
      <!-- Pangasinan Farm -->
      <v-card class="bg-black" @click="$router.push('/business_holdings/pangasinan_farm')">
        <v-row align="center">
          <v-col cols="7" class="d-flex justify-center align-center">
            <v-container class="ma-10">
              <table class="property-table">
                <tbody>
                  <tr>
                    <td colspan="2" class="title-row">{{ t.pangasinanFarm }}</td>
                  </tr>
                  <tr>
                    <td>{{ t.location }}</td>
                    <td>{{ t.balungaoMunicipality }}</td>
                  </tr>
                  <tr>
                    <td>{{ t.sqm }}</td>
                    <td>240,500</td>
                  </tr>
                </tbody>
              </table>
            </v-container>
          </v-col>
          <v-col class="pa-0 ma-0">
            <v-img src="/eishi/pangasinan_farm/images/dji_fly_20250311_151954_0036_1741678753512_photo.webp"
              height="100vh" cover loading="lazy">
              <template #placeholder>
                <v-skeleton-loader type="image" />
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <div class="sticky-card" style="z-index: 3; height: 100vh;" ref="assignedPropertiesCard">
      <!-- Assigned Properties -->
      <v-card class="bg-black" @click="$router.push('/business_holdings/assigned_properties')">
        <v-row align="center">
          <v-col cols="7" class="d-flex justify-center align-center">
            <v-container class="ma-10">
              <table class="property-table">
                <tbody>
                  <tr>
                    <td colspan="2" class="title-row">{{ t.assignedProperties }}</td>
                  </tr>
                  <tr>
                    <td>{{ t.location }}</td>
                    <td>{{ t.sanJoseMuntinlupaMoron }}</td>
                  </tr>
                </tbody>
              </table>
            </v-container>
          </v-col>
          <v-col class="pa-0 ma-0">
            <v-img src="/eishi/assigned_properties/images/1732160485860.webp" height="100vh" cover loading="lazy">
              <template #placeholder>
                <v-skeleton-loader type="image" />
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <div class="sticky-card" style="z-index: 4; height: 100vh;" ref="kalingaCard">
      <!-- Residential Lands -->
      <v-card class="bg-black" @click="$router.push('/business_holdings/kalinga_residential')">
        <v-row align="center">
          <v-col cols="7" class="d-flex justify-center align-center">
            <v-container class="ma-10">
              <table class="property-table">
                <tbody>
                  <tr>
                    <td colspan="2" class="title-row">{{ t.residentialLands }}</td>
                  </tr>
                  <tr>
                    <td>{{ t.location }}</td>
                    <td>{{ t.tabukKalinganProvince }}</td>
                  </tr>
                  <tr>
                    <td>{{ t.lot }}</td>
                    <td>42</td>
                  </tr>
                </tbody>
              </table>
            </v-container>
          </v-col>
          <v-col class="pa-0 ma-0">
            <v-img src="/eishi/kalinga_residential/images/DJI_0591-min.webp" height="100vh" cover loading="lazy">
              <template #placeholder>
                <v-skeleton-loader type="image" />
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-card>
    </div>

    <div class="sticky-card" style="z-index: 5; height: 100vh;" ref="cebuCard">
      <!-- Cebu Condominiums -->
      <v-card class="bg-black" @click="$router.push('/business_holdings/cebu_condominium')">
        <v-row align="center">
          <v-col cols="7" class="d-flex justify-center align-center">
            <v-container class="ma-10">
              <table class="property-table">
                <tbody>
                  <tr>
                    <td colspan="2" class="title-row">{{ t.cebuCondo }}</td>
                  </tr>
                  <tr>
                    <td>{{ t.location }}</td>
                    <td>{{ t.cebuDescription }}
                    </td>
                  </tr>
                  <tr>
                    <td>{{ t.residences }}</td>
                    <td>1016</td>
                  </tr>
                </tbody>
              </table>
            </v-container>
          </v-col>
          <v-col class="pa-0 ma-0">
            <v-img src="/eishi/cebu_condo/images/20240626_094216.webp" height="100vh" cover loading="lazy">
              <template #placeholder>
                <v-skeleton-loader type="image" />
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-card>
    </div>


    <v-container>
      <v-row>
        <v-col cols="9" class="mx-auto">
          <v-container>
            <v-row>
              <v-col cols="6" class="d-flex flex-column align-start pa-0">
                <v-container>
                  <v-row>
                    <div ref="vissionTitle" style="font-size: 2rem;">
                      <h1 style="font-weight: 300;">{{ t.yourVission }}</h1>
                      <h1 style="font-weight: 300;">{{ t.ourMission }}</h1>
                    </div>
                  </v-row>

                  <v-row>
                    <v-col class="text-left ma-0 pa-0">
                      <v-parallax width="400px" src="/eishi/pexels-rickyrecap-1662159.webp">

                      </v-parallax>
                    </v-col>
                  </v-row>
                  <v-row style="padding-top:2rem;font-size: 1rem;">

                    <v-col class="text-left ma-0 pa-0" cols="9">
                      <div class="" ref="missionDesc">{{ t.missionDescription }}</div>
                    </v-col>

                  </v-row>
                  <v-row>
                    <v-btn to="/about" rounded size="x-large"
                      class="text-capitalize mt-12 text-carousel btn-fixed-width" height="80" width="400" color="black">

                      <span class="text-front">{{ t.moreAboutEishi }}</span>
                      <span class="text-back"> {{ t.moreAboutEishi }}</span>
                    </v-btn>
                  </v-row>
                </v-container>
              </v-col>
              <v-col cols="6">
                <v-container>
                  <v-row>
                    <v-col v-for="(item, index) in cards" :key="index" cols="12" class="d-flex justify-end">
                      <div ref="cardRefs" class="d-flex flex-column text-left pa-4"
                        style="height: 250px; width: 500px;">
                        <span style="font-size: 2rem; font-weight: bold;">
                          {{ twoDigits(index + 1) }} | {{ item.title }}
                        </span>
                        <span class="mt-auto text-blue-grey-darken-2">
                          {{ item.description }}
                        </span>
                      </div>
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

  <!-- Mobile view cards -->

  <div v-if="isMobileView" class="mobile-wrapper">

    <!-- Hero -->
    <div class="hero-container-mobile">
      <v-container class="fill-height d-flex flex-column text-white mt-10 text-left">
        <h1 class="hero-text linear-gradient-text mb-2" style="font-size: 2.5rem;">
          {{ t.welcome }}
        </h1>
        <p class="hero-subtext mt-2 text-grey" style="text-align: left; align-self: flex-start;">
          {{ t.webTagline }}
        </p>
      </v-container>
    </div>


    <!-- Intro Text -->
    <v-container class="intro-section py-8">
      <v-card class="mx-auto ma-4" variant="text">
        <p class="mb-5 scroll-text font-weight-bold" ref="scrollText" style="line-height: 1; font-size: 2rem;">
          <span v-for="(letter, index) in letters" :key="index" class="antique letter" style="letter-spacing: 1px;">
            {{ letter.char }}
          </span>
        </p>
      </v-card>

      <v-btn to="/about" block color="black" size="large" rounded
        style="padding: 2rem;margin-top: 3rem; margin-bottom: 3rem;">
        {{ t.moreAboutEishi }}
      </v-btn>
    </v-container>

    <!-- Properties (Stacked Cards) -->
    <v-card class="bg-black">
      <v-row>
        <v-img src="/eishi/car_rental/images/car01.webp" height="300" cover loading="lazy">
          <template #placeholder>
            <v-skeleton-loader type="image" />
          </template>
        </v-img>
      </v-row>
      <v-row align="center">
        <v-col class="d-flex justify-center align-center">
          <v-container>
            <table class="mobile-property-table">
              <tbody>
                <tr class="mobile-title-row">
                  <td colspan="2">{{ t.carRental }}</td>
                </tr>

                <tr class="stacked-row">
                  <td colspan="2">
                    <div class="mobile-label">{{ t.location }}</div>
                    <div class="mobile-value">{{ t.carRentalLocation }}</div>
                  </td>
                </tr>
              </tbody>
            </table>
            <v-btn block class="text-black mt-10 mb-10 text-capitalize" size="x-large" height="60"
              @click="$router.push('/business_holdings/car_rental')">
              View Property
            </v-btn>
          </v-container>
        </v-col>
      </v-row>
    </v-card>
    <v-card class="bg-black">
      <v-row>
        <v-img src="/eishi/feed_mill/images/feedmil03.webp" height="300" cover loading="lazy">
          <template #placeholder>
            <v-skeleton-loader type="image" />
          </template>
        </v-img>
      </v-row>
      <v-row align="center">
        <v-col class="d-flex justify-center align-center">
          <v-container>
            <table class="mobile-property-table">
              <tbody>
                <tr class="mobile-title-row">
                  <td colspan="2">{{ t.feedMillDetails.businessNameValue }}</td>
                </tr>

                <tr class="stacked-row">
                  <td colspan="2">
                    <div class="mobile-label">{{ t.location }}</div>
                    <div class="mobile-value">{{ t.sanJoseMunicipality }}</div>
                  </td>
                </tr>
              </tbody>
            </table>
            <v-btn block class="text-black mt-10 mb-10 text-capitalize" size="x-large" height="60"
              @click="$router.push('/business_holdings/feed_mill')">
              View Property
            </v-btn>
          </v-container>
        </v-col>
      </v-row>
    </v-card>
    <!-- Poultry Farm -->
    <v-card class="bg-black">
      <v-row>
        <v-img src="/eishi/batangas_tokyo_farm/images/1732160556378.webp" height="300" cover loading="lazy">
          <template #placeholder>
            <v-skeleton-loader type="image" />
          </template>
        </v-img>
      </v-row>
      <v-row align="center">
        <v-col class="d-flex justify-center align-center">
          <v-container>
            <table class="mobile-property-table">
              <tbody>
                <tr class="mobile-title-row">
                  <td colspan="2">{{ t.poultryFarm }}</td>
                </tr>

                <tr class="stacked-row">
                  <td colspan="2">
                    <div class="mobile-label">{{ t.location }}</div>
                    <div class="mobile-value">{{ t.sanJoseMunicipality }}</div>
                  </td>
                </tr>

                <tr class="stacked-row">
                  <td colspan="2">
                    <div class="mobile-label">{{ t.sqm }}</div>
                    <div class="mobile-value">3,500</div>
                  </td>
                </tr>

                <tr class="stacked-row">
                  <td colspan="2">
                    <div class="mobile-label">{{ t.eggPerDay }}</div>
                    <div class="mobile-value">630</div>
                  </td>
                </tr>
              </tbody>
            </table>
            <v-btn block class="text-black mt-10 mb-10 text-capitalize" size="x-large" height="60"
              @click="$router.push('/business_holdings/batangas/poultry_farm')">
              View Property
            </v-btn>
          </v-container>
        </v-col>
      </v-row>
    </v-card>
    <!-- Pangasinan Farm -->
    <v-card class="bg-black">
      <v-row>
        <v-img src="/eishi/pangasinan_farm/images/dji_fly_20250311_151954_0036_1741678753512_photo.webp" height="300"
          cover loading="lazy">
          <template #placeholder>
            <v-skeleton-loader type="image" />
          </template>
        </v-img>
      </v-row>
      <v-row align="center">
        <v-col class="d-flex justify-center align-center">
          <v-container>
            <table class="mobile-property-table">
              <tbody>
                <tr class="mobile-title-row">
                  <td colspan="2">{{ t.pangasinanFarm }}</td>
                </tr>
                <tr class="stacked-row">
                  <td colspan="2">
                    <div class="mobile-label">{{ t.location }}</div>
                    <div class="mobile-value">{{ t.balungaoMunicipality }}</div>
                  </td>
                </tr>
                <tr class="stacked-row">
                  <td colspan="2">
                    <div class="mobile-label">{{ t.sqm }}</div>
                    <div class="mobile-value">240,500</div>
                  </td>
                </tr>
              </tbody>
            </table>
            <v-btn block class="text-black mt-10 text-capitalize" size="x-large" height="60"
              @click="$router.push('/business_holdings/pangasinan_farm')">
              View Property
            </v-btn>
          </v-container>
        </v-col>
      </v-row>
    </v-card>

    <!-- Assigned Properties -->
    <v-card class="bg-black">
      <v-row>
        <v-img src="/eishi/assigned_properties/images/1732160485860.webp" height="300" cover loading="lazy">
          <template #placeholder>
            <v-skeleton-loader type="image" />
          </template>
        </v-img>
      </v-row>
      <v-row align="center">
        <v-col class="d-flex justify-center align-center">
          <v-container>
            <table class="mobile-property-table">
              <tbody>
                <tr class="mobile-title-row">
                  <td colspan="2">{{ t.assignedProperties }}</td>
                </tr>
                <tr class="stacked-row">
                  <td colspan="2">
                    <div class="mobile-label">{{ t.location }}</div>
                    <div class="mobile-value">{{ t.sanJoseMuntinlupaMoron }}</div>
                  </td>
                </tr>
              </tbody>
            </table>
            <v-btn block class="text-black mt-10 text-capitalize" size="x-large" height="60"
              @click="$router.push('/business_holdings/assigned_properties')">
              View Property
            </v-btn>
          </v-container>
        </v-col>
      </v-row>
    </v-card>

    <!-- Residential Lands -->
    <v-card class="bg-black">
      <v-row>
        <v-img src="/eishi/kalinga_residential/images/DJI_0591-min.webp" height="300" cover loading="lazy">
          <template #placeholder>
            <v-skeleton-loader type="image" />
          </template>
        </v-img>
      </v-row>
      <v-row align="center">
        <v-col class="d-flex justify-center align-center">
          <v-container>
            <table class="mobile-property-table">
              <tbody>
                <tr class="mobile-title-row">
                  <td colspan="2">{{ t.residentialLands }}</td>
                </tr>
                <tr class="stacked-row">
                  <td colspan="2">
                    <div class="mobile-label">{{ t.location }}</div>
                    <div class="mobile-value">{{ t.tabukKalinganProvince }}</div>
                  </td>
                </tr>
                <tr class="stacked-row">
                  <td colspan="2">
                    <div class="mobile-label">{{ t.lot }}</div>
                    <div class="mobile-value">42</div>
                  </td>
                </tr>
              </tbody>
            </table>
            <v-btn block class="text-black mt-10 text-capitalize" size="x-large" height="60"
              @click="$router.push('/business_holdings/kalinga_residential')">
              View Property
            </v-btn>
          </v-container>
        </v-col>
      </v-row>
    </v-card>

    <!-- Cebu Condominiums -->
    <v-card class="bg-black">
      <v-row>
        <v-img src="/eishi/cebu_condo/images/20240626_094216.webp" height="300" cover loading="lazy">
          <template #placeholder>
            <v-skeleton-loader type="image" />
          </template>
        </v-img>
      </v-row>
      <v-row align="center">
        <v-col class="d-flex justify-center align-center">
          <v-container>
            <table class="mobile-property-table">
              <tbody>
                <tr class="mobile-title-row">
                  <td colspan="2">{{ t.cebuCondo }}</td>
                </tr>
                <tr class="stacked-row">
                  <td colspan="2">
                    <div class="mobile-label">{{ t.location }}</div>
                    <div class="mobile-value">{{ t.cebuDescription }}</div>
                  </td>
                </tr>
                <tr class="stacked-row">
                  <td colspan="2">
                    <div class="mobile-label">{{ t.residences }}</div>
                    <div class="mobile-value">1016</div>
                  </td>
                </tr>
              </tbody>
            </table>
            <v-btn block class="text-black mt-10 text-capitalize" height="60" size="x-large"
              @click="$router.push('/business_holdings/cebu_condominium')">
              View Property
            </v-btn>
          </v-container>
        </v-col>
      </v-row>
    </v-card>

    <!-- Mission -->
    <div class="bg-grey-lighten-4">
      <v-container class="py-10 d-flex flex-column justify-center" height="400">
        <h1 class="mb-4" style="">
          {{ t.yourVission }}<br />{{ t.ourMission }}
        </h1>


        <p class="text-body-1">
          {{ t.missionDescription }}
        </p>
      </v-container>

      <v-card v-for="(item, index) in cards" :key="index" cols="12" class="ma-4" flat>
        <v-container>
          <v-row>
            <v-col class="d-flex justify-end text-black bg-white">

              <div :class="cards"
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

      <v-container height="300" class="d-flex align-center justify-center" style="margin-top: 10rem;">
        <div>
          <span style="font-size: 3rem; font-weight: bold;">How Eishi</span>
          <br>
          <span style="font-size: 3rem; font-weight: bold;">Works</span>

          <v-row class="mt-10" justify="center">
            <v-col class="d-flex align-center justify-center" cols="10">
              <div class="button-line-group d-flex align-center">
                <v-btn size="large" height="60" color="black" @click="goToImageSlide(0)">1</v-btn>
                <div class="line"></div>
                <v-btn size="large" color="black" height="60" @click="goToImageSlide(1)">2</v-btn>
                <div class="line"></div>
                <v-btn size="large" color="black" height="60" @click="goToImageSlide(2)">3</v-btn>
                <div class="line"></div>
                <v-btn size="large" color="black" height="60" @click="goToImageSlide(3)">4</v-btn>
              </div>

            </v-col>
          </v-row>
        </div>

      </v-container>
      <v-container class="pb-10">
        <!-- Image carousel -->
        <div class="carousel-container">
          <div class="carousel-wrapper" ref="imageCarousel">
            <div class="step-description" v-for="(step, index) in eishi_steps" :key="index">
              <v-img :src="step.img" cover height="300" loading="lazy">
                <template #placeholder>
                  <v-skeleton-loader type="image" />
                </template>
              </v-img>
            </div>
          </div>
        </div>

        <!-- Text carousel -->
        <!-- Text carousel -->
        <div class="text-carousel-wrapper">
          <div v-for="(step, index) in eishi_steps" :key="index" class="text-carousel-item">
            <span class="title" :style="getTextTransformStyle(index, 'title')">{{ step.title }}</span><br>
          </div>
        </div>
        <div class="text-carousel-wrapper">
          <div v-for="(step, index) in eishi_steps" :key="index" class="text-carousel-item">
            <span class="desc" :style="getTextTransformStyle(index, 'desc')">{{ step.description }}</span>
          </div>
        </div>

      </v-container>


    </div>
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
  name: 'HomeView',
  data() {
    return {
      imageSlideIndex: 0,
      textSlideIndex: 0,
      imageAutoTimer: null,
      textAutoTimer: null,
      eishi_steps: [
        {
          img: "/images/browse.webp",
          title: "Browse Listings",
          description: "Explore all available properties and find the perfect fit for you."
        },
        {
          img: "/images/connect.webp",
          title: "Connect with us",
          description: "Reach out to our team to get more details and schedule a consultation."
        },
        {
          img: "/images/visit.webp",
          title: "Visit & Verify",
          description: "Visit the property in person and verify all details firsthand."
        },
        {
          img: "/images/partner.webp",
          title: "Become a Partner",
          description: "Join our network and enjoy benefits as a trusted partner."
        }
      ],


      cards: [],
      visibleCards: [],
      scrollProgress: 0,

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
        }
      ],
      letters: [],
      isMobileView: false,
      business_holdings: [
        { img: "/eishi/Poultry Farm.webp", title: "batangasPoultry", link: "/business_holdings/batangas/poultry_farm" },
        { img: "/eishi/Pangasinan Farm.webp", title: "pangasinanFarm", link: "/business_holdings/pangasinan_farm" },
        { img: "/eishi/1732160486501.webp", title: "assignedProperties", link: "/business_holdings/assigned_properties" },
        { img: "/eishi/Solinea3.webp", title: "kalingaResidential", link: "/business_holdings/kalinga_residential" },
        { img: "/eishi/DJI_0598-min.webp", title: "cebuCondo", link: "/business_holdings/cebu_condominium" },
      ],
    };
  },
  watch: {
    't.homeParagraph1': {
      handler() {
        this.updateLetters();
      },
      immediate: true,
    },
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
      immediate: true, // also run once on mount
      deep: true,
    },
  },
  computed: {
    ...mapState(useLanguageStore, ['t']),
    mobileProperties() {
      return [
        {
          title: this.t.poultryFarm,
          subtitle: this.t.sanJoseMunicipality,
          image: '/eishi/batangas_tokyo_farm/images/1732160556378.webp',
          route: '/business_holdings/batangas/poultry_farm'
        },
        {
          title: this.t.pangasinanFarm,
          subtitle: this.t.balungaoMunicipality,
          image: '/eishi/pangasinan_farm/images/dji_fly_20250311_151954_0036_1741678753512_photo.webp',
          route: '/business_holdings/pangasinan_farm'
        },
        {
          title: this.t.assignedProperties,
          subtitle: this.t.sanJoseMuntinlupaMoron,
          image: '/eishi/assigned_properties/images/1732160485860.webp',
          route: '/business_holdings/assigned_properties'
        },
        {
          title: this.t.residentialLands,
          subtitle: this.t.tabukKalinganProvince,
          image: '/eishi/kalinga_residential/images/DJI_0591-min.webp',
          route: '/business_holdings/kalinga_residential'
        },
        {
          title: this.t.cebuCondo,
          subtitle: this.t.cebuDescription,
          image: '/eishi/cebu_condo/images/20240626_094216.webp',
          route: '/business_holdings/cebu_condominium'
        }
      ]
    }
  },

  mounted() {
    this.$nextTick(() => {
      // Poultry Farm subtle movement
      gsap.to(this.$refs.poultryCard, {
        y: 50,              // move down 50px as you scroll
        ease: "power2.out",
        scrollTrigger: {
          trigger: this.$refs.poultryCard,
          start: "top bottom",   // when the top of card hits bottom of viewport
          end: "center center",  // until the card is centered
          scrub: 3
        }
      });

      // Pangasinan subtle movement
      gsap.to(this.$refs.pangasinanCard, {
        y: -50,             // move up 50px as you scroll
        ease: "power2.out",
        scrollTrigger: {
          trigger: this.$refs.pangasinanCard,
          start: "top bottom",
          end: "center center",
          scrub: 3
        }
      });
      // Pangasinan subtle movement
      gsap.to(this.$refs.carRentalCard, {
        y: -50,             // move up 50px as you scroll
        ease: "power2.out",
        scrollTrigger: {
          trigger: this.$refs.carRentalCard,
          start: "top bottom",
          end: "center center",
          scrub: 3
        }
      });
      // Pangasinan subtle movement
      gsap.to(this.$refs.feedMillCard, {
        y: -50,             // move up 50px as you scroll
        ease: "power2.out",
        scrollTrigger: {
          trigger: this.$refs.feedMillCard,
          start: "top bottom",
          end: "center center",
          scrub: 3
        }
      });
      // Pangasinan subtle movement
      gsap.to(this.$refs.kalingaCard, {
        y: -50,             // move up 50px as you scroll
        ease: "power2.out",
        scrollTrigger: {
          trigger: this.$refs.kalingaCard,
          start: "top bottom",
          end: "center center",
          scrub: 3
        }
      });
      // Pangasinan subtle movement
      gsap.to(this.$refs.cebuCard, {
        y: -50,             // move up 50px as you scroll
        ease: "power2.out",
        scrollTrigger: {
          trigger: this.$refs.cebuCard,
          start: "top bottom",
          end: "center center",
          scrub: 3
        }
      });
      // Pangasinan subtle movement
      gsap.to(this.$refs.assignedPropertiesCard, {
        y: -50,             // move up 50px as you scroll
        ease: "power2.out",
        scrollTrigger: {
          trigger: this.$refs.assignedPropertiesCard,
          start: "top bottom",
          end: "center center",
          scrub: 3
        }
      });


      const cards = this.$refs.cardRefs;
      cards.forEach(card => {
        gsap.from(card, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            once: true
          }
        });
      });

      // ------------------------------
      // TITLES & DESCRIPTIONS ANIMATION
      // ------------------------------
      const sectionsToAnimate = [
        this.$refs.vissionTitle,
        this.$refs.missionDesc,

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
    });


    this.$nextTick(() => {
      const letters = this.$refs.scrollText.querySelectorAll('.letter');

      gsap.set(letters, { color: '#ccc' }); // initial color

      gsap.to(letters, {
        color: '#000',
        stagger: 0.05,           // stagger each letter
        ease: 'power1.out',
        scrollTrigger: {
          trigger: this.$refs.scrollText,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 3,         // smoothly tie to scroll
        }
      });
    });
    /* TITLE: chars + words */
    const titleSplit = new SplitText(this.$refs.title, {
      type: 'chars,words'
    })
    titleSplit.chars.forEach(char => {
      char.classList.add('linear-gradient-text')
    })
    gsap.from(titleSplit.chars, {
      yPercent: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.02,
      ease: 'expo.out'
    })

    /* TAGLINE: lines */
    const taglineSplit = new SplitText(this.$refs.tagline, {
      type: 'lines',
      linesClass: 'line'
    })

    gsap.from(taglineSplit.lines, {
      yPercent: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      delay: 1,
      ease: 'expo.out'
    })
    this.updateTranslations();
    this.startImageAutoSlide();
    this.startTextAutoSlide();
    this.visibleCards = this.cards.map(() => false);

    this.updateLetters();
    const languageStore = useLanguageStore();

    // Get the text from the store
    const text = languageStore.t.homeParagraph1;

    // Split text into letters for animation
    this.letters = text.split('').map(char => ({ char, color: '#ccc' }));

    // Sticky card logic
    const cards = document.querySelectorAll('.sticky-card');
    const lastCard = cards[cards.length - 1];

    window.addEventListener('scroll', () => {
      cards.forEach((card, index) => {
        const nextCard = cards[index + 1];
        if (!nextCard) return;

        const cardRect = card.getBoundingClientRect();
        const nextRect = nextCard.getBoundingClientRect();

        if (nextRect.top <= 0) {
          card.style.position = 'relative';
        } else {
          card.style.position = 'sticky';
          card.style.top = '0';
        }
      });

      const lastRect = lastCard.getBoundingClientRect();
      if (lastRect.top <= 0) {
        lastCard.style.position = 'relative';
      } else {
        lastCard.style.position = 'sticky';
        lastCard.style.top = '0';
      }
    });

    // Mobile view check
    this.checkMobileView();
    window.addEventListener('resize', this.checkMobileView);
  },

  beforeUnmount() {
    this.stopImageAutoSlide();
    this.stopTextAutoSlide();
    window.removeEventListener('resize', this.checkMobileView);
  },

  methods: {
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

    // Images
    goToImageSlide(index) {
      const carousel = this.$refs.imageCarousel;
      if (!carousel) return;
      const slideWidth = carousel.children[0].offsetWidth;
      carousel.scrollTo({ left: slideWidth * index, behavior: 'smooth' });
      this.imageSlideIndex = index;
    },
    startImageAutoSlide() {
      this.stopImageAutoSlide();
      this.imageAutoTimer = setInterval(() => {
        this.imageSlideIndex = (this.imageSlideIndex + 1) % this.eishi_steps.length;
        this.goToImageSlide(this.imageSlideIndex);
      }, 3000);
    },
    stopImageAutoSlide() {
      if (this.imageAutoTimer) clearInterval(this.imageAutoTimer);
      this.imageAutoTimer = null;
    },

    // Text
    goToTextSlide(index) {
      this.textSlideIndex = index; // just change index, no horizontal slide
    },
    startTextAutoSlide() {
      this.stopTextAutoSlide();
      this.textAutoTimer = setInterval(() => {
        this.textSlideIndex = (this.textSlideIndex + 1) % this.eishi_steps.length;
      }, 3000);
    },
    stopTextAutoSlide() {
      if (this.textAutoTimer) clearInterval(this.textAutoTimer);
      this.textAutoTimer = null;
    },

    // Text animation
    getTextTransformStyle(index, type) {
      if (this.textSlideIndex === index) {
        return {
          transform: 'translateY(0)',
          opacity: 1,
          transition: 'all 0.6s ease',
          display: 'block',
        };
      } else {
        return {
          transform: type === 'title' ? 'translateY(100%)' : 'translateY(-100%)',
          opacity: 0,
          transition: 'all 0.6s ease',
          display: 'block',
        };
      }
    },

    scrollLeft() {
      const width = this.$refs.carousel.offsetWidth
      this.$refs.carousel.scrollBy({ left: -width, behavior: 'smooth' })
    },
    scrollRight() {
      const width = this.$refs.carousel.offsetWidth
      this.$refs.carousel.scrollBy({ left: width, behavior: 'smooth' })
    },
    updateLetters() {
      const languageStore = useLanguageStore();
      const text = languageStore.t.homeParagraph1;
      this.letters = text.split('').map(char => ({ char, color: '#ccc' }));
    },
    twoDigits(value) {
      return value < 10 ? '0' + value : value;
    },
    checkMobileView() {
      this.isMobileView = this.$vuetify.display.mobile;
    },
  },
};
</script>

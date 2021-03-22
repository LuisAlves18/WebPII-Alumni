<template>
  <div id="offers">
    <b-img
      class="headerImg"
      fluid
      src="../assets/offerPage/offerHeader1.jpg"
    ></b-img>
    <!-- <router-link to="/offers/jobs">Ofertas Profissionais</router-link> |
    <router-link to="/offers/internships">Estágios</router-link> |
    <router-link to="/offers/freelance">Freelance</router-link> |
    <router-link to="/offers/events">Eventos</router-link> |
    <router-link to="/offers/workshops">Workshops</router-link> -->
    <b-container class="containerOffers mt-5">
      <h3 class="text-left">Filtrar Oferta</h3>
      <b-row class="d-flex justify-content-center mt-3">        
        <div class="card col-lg-3 text-left filterCard">
          <div class="card-body">
            <h6>Tipo</h6>
            <div class="offersFilter">
              <tr v-for="type in this.$store.state.offers_type" :key="type.id">
                <input
                  type="checkbox"
                  :id="type.id"
                  :value="type.id"
                  v-model="checkedType"
                />
                <label class="radio-inline radioLabel" :for="type.id">{{
                  type.description
                }}</label
                ><br />
              </tr>
              <hr id="ruler" />
              <h6 class="d-flex">Curso</h6>
              <tr v-for="area in this.$store.state.areas" :key="area.id">
                <input
                  type="checkbox"
                  :id="area.id"
                  :value="area.id"
                  v-model="checkedArea"
                />
                <label class="radio-inline radioLabel" :for="area.id">{{
                  area.description
                }}</label
                ><br />
              </tr>
            </div>
          </div>
        </div>

        <div class="col-lg-9">
          <div class="offer-deck">
            <b-row>
              <tr v-for="offer in filteredOffers" :key="offer.id">
                <b-col col lg="9" md="8" class="mb-3">
                  <b-card
                    class="cardOffer"
                    :img-src="getLogobyId(offer.id_Company)"
                    img-left
                  >
                    <b-card-body>
                      <b-col>
                        <b-card-title class="d-flex justify-content-left">{{
                          getCompanyById(offer.id_Company)
                        }}</b-card-title>
                        <b-card-sub-title
                          class="d-flex justify-content-left mb-1"
                          >{{ getAreaById(offer.id_area) }}</b-card-sub-title
                        >
                        <b-card-text class="d-flex justify-content-left mt-3">
                          <ul>
                            <p class="text-left">
                              <i class="fas fa-list iconOffer"></i>
                              {{ getTypeById(offer.id_type_offer) }}
                            </p>

                            <p class="text-left">
                              <i class="fas fa-map-marker-alt iconOffer"></i>
                              {{ getLocationById(offer.id_Company) }}
                            </p>
                          </ul>
                        </b-card-text>
                      </b-col>
                      <b-col cols="6" class="d-flex justify-content-left">
                        <div>
                          <router-link
                            id="seeMoreOffer"
                            :to="{
                              name: 'OffersView',
                              params: { OfferId: offer.id },
                            }"
                            tag="b-button"
                          >
                            Ver Mais
                          </router-link>
                        </div>
                      </b-col>
                    </b-card-body>
                  </b-card>
                </b-col>
              </tr>
            </b-row>
          </div>
        </div>
      </b-row>
    </b-container>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "Offers",
  components: {},
  data() {
    return {
      checkedType: [],
      checkedArea: [],
    };
  },
  methods: {
    getLogobyId(id) {
      return this.$store.state.companies.find((company) => company.id === id)
        .logo;
    },
    getCompanyById(id) {
      return this.$store.state.companies.find((company) => company.id === id)
        .name;
    },
    getAreaById(id) {
      return this.$store.state.areas.find((area) => area.id === id).description;
    },
    getTypeById(id) {
      return this.$store.state.offers_type.find((type) => type.id === id)
        .description;
    },
    getLocationById(id) {
      return this.$store.state.companies.find((company) => company.id === id)
        .address;
    },
  },
  computed: {
    filteredOffers() {
      return this.$store.state.offers.filter((offer) => {
        let filterOffersType = true;
        let filterOffersArea = true;
        if (this.checkedType.length != 0) {
          for (let i = 0; i < this.checkedType.length; i++) {
            if (offer.id_type_offer == this.checkedType[i]) {
              filterOffersType = true;
            } else {
              filterOffersType = false;
            }
          }
        } else {
          filterOffersType = true;
        }
        if (this.checkedArea.length != 0) {
          for (let i = 0; i < this.checkedArea.length; i++) {
            if (offer.id_type_offer == this.checkedArea[i]) {
              filterOffersArea = true;
            } else {
              filterOffersArea = false;
            }
          }
        } else {
          filterOffersArea = true;
        }
        return filterOffersType && filterOffersArea;
      });
    },
  },
};
</script>

<style>
.headerImg {
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 0;
  margin: 0;
}

.filterCard {
  height: 25%;
}

ul {
  padding: 0;
}

.offersFilter {
  justify-content: center;
}
.radioLabel {
  padding-left: 5px;
}
.cardOffer {
  box-shadow: 0 0 10px #0f4c81;
  width: 50rem;
  height: 17rem;
}
.iconOffer {
  color: #e2583e !important;
}

#ruler {
  background-color: #0f4c81;
}
#btnFilter {
  margin-top: 1vh;
  margin-bottom: 1vh;
  background-color: #0f4c81;
}
#seeMoreOffer {
  background-color: #0f4c81;
}
</style>

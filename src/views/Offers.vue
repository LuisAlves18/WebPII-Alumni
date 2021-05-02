<template>
  <div id="offers">
    <div class="offersHeader">
      <b-img
        class="headerImg img-fluid"
        src="https://res.cloudinary.com/dsfbhbeyt/image/upload/v1619952911/offersHeader_pbki15.jpg"
      ></b-img>
      <div class="headerContent justify-content-center">
        <p class="offersTitle">Encontre o seu trabalho aqui</p>

        <div class="headerDropdowns row">
          <div class="typeDrop mb-3 col-lg-6 text-center">
            <label for="#dropdownType"> Tipo de Oferta</label>
            <div class="dropdown" id="dropdownType">
              <button
                class="btn dropdown-toggle buttonHeader"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Tipo de Oferta
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a
                  class="dropdown-item"
                  v-for="type in this.$store.state.offers_type"
                  :key="type.id"
                  >{{ type.description }}</a
                >
              </div>
            </div>
          </div>

          <div class="CursoDrop mb-3 col-lg-6 text-center">
            <label for="#dropdownCurso">Curso Frequentado</label>
            <div class="dropdown" id="dropdownCurso">
              <button
                class="btn dropdown-toggle buttonHeader"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Curso Frequentado
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a
                  class="dropdown-item"
                  v-for="area in this.$store.state.areas"
                  :key="area.id"
                  >{{ area.description }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <router-link to="/offers/jobs">Ofertas Profissionais</router-link> |
    <router-link to="/offers/internships">Estágios</router-link> |
    <router-link to="/offers/freelance">Freelance</router-link> |
    <router-link to="/offers/events">Eventos</router-link> |
    <router-link to="/offers/workshops">Workshops</router-link> -->
    <b-container class="containerOffers mt-5">
      <tr
        v-for="offer in filteredOffers"
        :key="offer.id"
        class="d-flex justify-content-center"
      >
        <b-card
          class="cardOffer mb-4"
          :img-src="getLogobyId(offer.id_Company)"
          img-left
        >
          <b-card-body>
            <div>
              <b-card-title class="d-flex justify-content-left">{{
                getCompanyById(offer.id_Company)
              }}</b-card-title>
              <b-card-sub-title class="d-flex justify-content-left mb-1">{{
                getAreaById(offer.id_area)
              }}</b-card-sub-title>
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
            </div>

            <div class="text-left">
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
          </b-card-body>
        </b-card>
      </tr>
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
        let checkedTypeLth = this.checkedType.length
        let checkedAreaLth = this.checkedArea.length
        if (checkedTypeLth != 0) {
          for (let i = 0; i < checkedTypeLth; i++) {
            if (offer.id_type_offer == this.checkedType[i]) {
              filterOffersType = true;
            } else {
              filterOffersType = false;
            }
          }
        } else {
          filterOffersType = true;
        }
        if (checkedAreaLth != 0) {
          for (let i = 0; i < checkedAreaLth; i++) {
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
template,
html {
  overflow-x: hidden;
}

.offersHeader {
  position: relative;
  display: inline-block;
}

.headerImg {
  display: block;
}

.offersTitle {
  color: white;
  font-weight: bold;
  font-size: 3.7vw;
  text-align: left;
}

.headerContent {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.typeDrop label {
  color: white;
  font-size: 1.8vw;
}

.CursoDrop label {
  font-size: 1.8vw;
  color: white;
}

.buttonHeader {
  border-radius: 5px;
  background-color: rgb(225, 93, 68) !important;
  color: white;
  
}

.buttonHeader:hover {
  color: white; 
}

.buttonHeader:focus {
  outline: none;
  box-shadow: none; 
 
}

.dropdown-item{
  cursor: pointer;
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

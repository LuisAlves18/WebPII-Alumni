<template>
  <div id="offers">
    <div
      class="bg-image headerContent justify-content-center"
      style="
        height: 60vh;
        width: 100vw;
        background-image: url('https://res.cloudinary.com/dsfbhbeyt/image/upload/v1619953742/carousel1_jktwrb.webp');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      "
    >
      <p class="offersTitle">Encontre o seu trabalho aqui</p>

      <div class="headerDropdowns row justify-content-lg-center">
        <div class="typeDrop col-lg-4">
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

        <div class="cursoDrop col-lg-4">
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
        <div class="companyFilter col-lg-4">
          <label for="searchCompany">Empresa</label>
          <input type="text" id="searchCompany" class="form-control filterCompanyInput" placeholder="Empresa" aria-label="Empresa">
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
          class="cardOffer mb-4 border-0"
          :img-src="offer.company.logo"
          img-left
        >
          <b-card-body>
            <div>
              <b-card-title class="d-flex justify-content-left">{{
                offer.company.name
              }}</b-card-title>
              <b-card-sub-title class="d-flex justify-content-left mb-1">{{
                getAreaById(offer.areaId)
              }}</b-card-sub-title>
              <b-card-text class="d-flex justify-content-left mt-3">
                <ul>
                  <p class="text-left">
                    <i class="fas fa-list iconOffer"></i>
                    {{ getTypeById(offer.typeOfferId) }}
                  </p>

                  <p class="text-left">
                    <i class="fas fa-map-marker-alt iconOffer"></i>
                    {{ offer.company.address }}
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
    async storeOffers() {
      await this.$store.dispatch("fetchAllOffers");
      console.log(this.$store.state.offers)
     
    },
  },
  mounted(){
    this.storeOffers()
  },
  computed: {
    
    filteredOffers() {
      console.log(this.$store.state.offers)
      return this.$store.state.offers.filter((offer) => {
        let filterOffersType = true;
        let filterOffersArea = true;
        let checkedTypeLth = this.checkedType.length;
        let checkedAreaLth = this.checkedArea.length;
        if (checkedTypeLth != 0) {
          for (let i = 0; i < checkedTypeLth; i++) {
            if (offer.typeOfferId == this.checkedType[i]) {
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
            if (offer.typeOfferId == this.checkedArea[i]) {
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

.dropdown-item {
  cursor: pointer;
}

.offersTitle {
  font-size: 3.5vmax;
  font-weight: bold;
  color: white;
  padding-top: 35px;
}

.typeDrop label {
  color: white;
  font-size: 3vmin;
}

.cursoDrop label {
  color: white;
  font-size: 3vmin;
}

.companyFilter label{
  color: white;
  font-size: 3vmin;
}

.filterCompanyInput{
  width: 200px !important;
  margin-left: auto;
  margin-right: auto;
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
  box-shadow: rgba(15, 76, 129, 0.4) 0px 10px 20px, rgba(200, 200, 200, 0.23) 0px 6px 6px;
  height: 17rem;
}
.iconOffer {
  color: #e2583e !important;
}

#seeMoreOffer {
  background-color: #0f4c81;
}
</style>

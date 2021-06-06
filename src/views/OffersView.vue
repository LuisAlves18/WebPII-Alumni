<template>
  <div class="container offerViewContainer">
    <div class="text-left">
      <router-link class="backOffers" :to="{ name: 'Offers' }">
        <i class="fas fa-long-arrow-alt-left"></i> Voltar</router-link
      >
    </div>

    <div class="row text-left infoContent">
      <div class="col-lg-3 infoCard">
        <h5>Cargo a que se candidata</h5>
        <div class="card cardInfo">
          <img
            class="card-img-top"
            :src="currentOffer.company.logo"
            alt="Card image cap"
          />
          <div class="card-body">
            <h6 class="text-center">
              {{ currentOffer.company.name }}
            </h6>
            <h6 class="card-text">Tipo de contrato</h6>
            <p>
              <i class="fas fa-file-contract offersIcon"></i>
              tipo de oferta
            </p>
            <h6 class="card-text">Localização</h6>
            <p>
              <i class="fas fa-map-marker-alt offersIcon"></i>
              {{ currentOffer.company.address }}
            </p>

            <h6 class="card-text">Contacto</h6>
            <p>
              <i class="fas fa-globe offersIcon"></i>
              <a class="ml-1 companyUrl">{{ currentOffer.emailContact }}</a>
            </p>
          </div>
        </div>
      </div>

      <div class="col-lg-9 detailsCard">
        <div class="companyInfo">
          <h5>Sobre a Empresa</h5>
          <div class="card cardCompanyInfo">
            <div class="card-body">
              <p class="card-text">
                {{ currentOffer.company.about }}
              </p>
            </div>
          </div>
        </div>

        <div class="offerInfo">
          <h5>Detalhes do Posto a Candidatar</h5>
          <div class="card cardOfferInfo">
            <div class="card-body">
              <p class="card-text">
                {{currentOffer.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</template>

<script>
/* eslint-disable */
import { OfferService } from '../services/offers_service';

export default {
  name: "OffersView",
  data() {
    return {
      currentOffer: "",
    };
  },
  created() {
   /*  this.currentOffer = this.$store.state.offers.find(
      (offer) => offer.id === this.$route.params.OfferId
    ); */
  },
  
  methods: {
    async getOneOffer(){
      
      this.currentOffer = await OfferService.fetchOneOffer(this.$route.params.OfferId)

    },
   /*  getLogobyId(id) {
      return this.currentOffer.find((company) => company.id === id)
        .logo;
    },
    getTypeById(id) {
      return this.currentOffer.find((type) => type.id === id)
        .description;
    },
    getLocationById(id) {
      return this.currentOffer.find((company) => company.id === id)
        .address;
    },
    getCompanyById(id) {
      return this.currentOffer.find((company) => company.id === id)
        .name;
    },
    getAboutById(id) {
      return this.currentOffer.find((company) => company.id === id)
        .about;
    }, */
  },
  mounted(){
    this.getOneOffer()
  }
};
</script>

<style>
.offerViewContainer {
  margin-top: 50px;
}

.backOffers {
  color: #ff4b2b;
}

.backOffers:hover {
  color: #ff4b2b;
  text-decoration: none;
}

.cardInfo {
  border: none;
  box-shadow: rgba(15, 76, 129, 0.4) 0px 10px 20px 0px,
    rgba(200, 200, 200, 0.23) 0px 6px 16px 0px;
}

.infoContent {
  margin-top: 30px;
}

.offersIcon {
  color: #ff4b2b;
}

.companyInfo {
  margin-bottom: 100px;
}

.cardCompanyInfo {
  border: none;
  box-shadow: rgba(15, 76, 129, 0.4) 0px 10px 20px 0px,
    rgba(200, 200, 200, 0.23) 0px 6px 16px 0px;
}

.cardOfferInfo {
  border: none;
  box-shadow: rgba(15, 76, 129, 0.4) 0px 10px 20px 0px,
    rgba(200, 200, 200, 0.23) 0px 6px 16px 0px;
}

.companyUrl {
  color: rgb(15, 76, 129);
  text-decoration: underline;
}

.companyUrl:hover {
  color: #ff4b2b;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  
}

/* .infoCard {
  margin-top: 100px;
}



.detailsCard {
  margin-top: 100px;
}

.offersIcon {
  padding: 0px;
  color: rgb(226, 88, 62);
}
.btnApply {
  background-color: rgb(15, 76, 129);

  color: white;
}
.companyInfo {
  margin-top: 32px;
}
.cardCompanyInfo {
  box-shadow: 0 0 10px #0f4c81;
}
.offerInfo {
  margin-top: 32px;
}

.cardOfferInfo {
  box-shadow: 0 0 10px #0f4c81;
} */
</style>
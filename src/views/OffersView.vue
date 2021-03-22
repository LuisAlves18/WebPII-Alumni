<template>
  <div id="offersview" class="container">
    <div class="row text-left">
      
      <div class="col-lg-4 infoCard">
        <h4>{{getCompanyById(currentOffer.id_Company)}}</h4>
        <h5>Cargo a que se candidata</h5>
        <div class="card">
          <img
            class="card-img-top"
            :src="getLogobyId(currentOffer.id_Company)"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-text">Tipo de contrato</h5>
            <p>
              <i class="fas fa-file-contract offersIcon"></i>
              {{ getTypeById(currentOffer.id_type_offer) }}
            </p>
            <h5 class="card-text">Localização</h5>
            <p>
              <i class="fas fa-map-marker-alt offersIcon"></i>
              {{ getLocationById(currentOffer.id_Company) }}
            </p>

            <h5 class="card-text">Contacto</h5>
            <p>
              <i class="fas fa-globe offersIcon"></i>
              <a class="ml-1">{{currentOffer.emailContact}}</a>
            </p>
          </div>
        </div>
      </div>

      <div class="col-lg-8 detailsCard">
        <div class="companyInfo">
          <h4>Sobre a Empresa</h4>
          <div class="card cardCompanyInfo">
            <div class="card-body">
              <p class="card-text">
                {{getAboutById(currentOffer.id_Company).split("'//'")[0]}}
              </p>
            </div>
          </div>
        </div>

        <div class="offerInfo">
          <h4>Detalhes do Posto a Candidatar</h4>
          <div class="card cardOfferInfo">
            <div class="card-body">
              <p class="card-text">
               {{getAboutById(currentOffer.id_Company).split("'//'")[1]}}
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
export default {
  name: "OffersView",
  data() {
    return {
      currentOffer: "",
    };
  },
  created() {
    this.currentOffer = this.$store.state.offers.find(
      (offer) => offer.id === this.$route.params.OfferId
    );
  },
  methods: {
    getLogobyId(id) {
      return this.$store.state.companies.find((company) => company.id === id)
        .logo;
    },
    getTypeById(id) {
      return this.$store.state.offers_type.find((type) => type.id === id)
        .description;
    },
    getLocationById(id) {
      return this.$store.state.companies.find((company) => company.id === id)
        .address;
    },
    getCompanyById(id) {
      return this.$store.state.companies.find((company) => company.id === id)
        .name;
    },
    getAboutById(id){
       return this.$store.state.companies.find((company) => company.id === id)
        .about;
    }
  },
};
</script>

<style>
.infoCard {
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
}
</style>
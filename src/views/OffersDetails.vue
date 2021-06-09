<template>
  <div id="offersView">
    <b-container class="d-flex justify-content-center">
      <b-row class="content">
        <b-col class="col-lg-4">
          <p class="d-flex justify-content-left">Imagem da Empresa</p>
          <b-card>
            <b-card-text>
              <b-img :src="filterCompany.logo"></b-img><br />
              <p>{{ filterCompany.name }}</p>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col class="col-lg-8">
          <p class="d-flex justify-content-left">Informações Oferta</p>
          <b-card>
            <b-card-text>
              <b-form @submit.prevent="editOffer">
                <b-row>
                  <b-col class="col-lg-12">
                    <b-input-group class="mb-3">
                      <b-form-textarea
                        id="txtdescription"
                        class="inputProf"
                        placeholder="Descrição"
                        v-model="send.description"
                      >
                      </b-form-textarea>
                    </b-input-group>
                  </b-col>
                  <b-col class="col-lg-6">
                    <b-input-group class="mb-3">
                      <b-form-input
                        type="email"
                        id="txtContactEmail"
                        class="inputProf"
                        placeholder="Email"
                        v-model="send.emailContact"
                      >
                      </b-form-input>
                    </b-input-group>
                    <b-input-group class="mb-3">
                      <b-form-select
                        v-model="send.typeOfferId"
                        :options="options"
                        size="sm"
                        class="mt-3"
                      ></b-form-select>
                    </b-input-group>
                    <b-input-group class="mb-3">
                      <b-form-select
                        v-model="send.areaId"
                        :options="options2"
                        size="sm"
                        class="mt-3"
                      ></b-form-select>
                    </b-input-group>
                  </b-col>
                  <b-col class="col-lg-6">
                    <b-input-group class="mb-3">
                      <b-form-input
                        type="text"
                        id="txtCompanyAddress"
                        class="inputProf"
                        placeholder="Localização"
                        :value="filterCompany.address"
                        disabled
                      >
                      </b-form-input>
                    </b-input-group>
                    <b-input-group class="mb-3">
                      <b-form-input
                        type="text"
                        id="txtDuration"
                        class="inputProf"
                        placeholder="Duração"
                        v-model="send.duration"
                      >
                      </b-form-input>
                    </b-input-group>
                    <b-input-group class="mb-3">
                      <b-button class="mb-3" id="btnAdd" type="submit"
                        >Alterar</b-button
                      >
                    </b-input-group>
                  </b-col>
                </b-row>
              </b-form>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "OffersDetails",
  data() {
    return {
      options: [],
      options2: [],
      send: {
        id: this.$store.state.offersProfileContent.id,
        companyId: this.$store.state.offersProfileContent.companyId,
        typeOfferId: this.$store.state.offersProfileContent.typeOfferId,
        areaId: this.$store.state.offersProfileContent.areaId,
        description: this.$store.state.offersProfileContent.description,
        emailContact: this.$store.state.offersProfileContent.emailContact,
        duration: this.$store.state.offersProfileContent.duration,
      },
    };
  },
  methods: {
    editOffer() {
      try {
        //chamar ação editOffer
        this.$store.dispatch("editOffer", this.$data.send);
        //saltar para a view Admin
        this.$router.push({ name: "Admin" });
      } catch (error) {
        alert(error);
      }
    },
  },
  computed: {
    filterCompany() {
      return this.$store.state.offers.find(
        (offer) => offer.id_Company == this.send.id_Company
      );
    },
  },
  created() {

      this.$store.state.offers_type.forEach((offerType) => {
        this.options.push({ value: offerType.id, text: offerType.description });
        return this.options;
      });
      this.$store.state.areas.forEach((area) => {
        this.options2.push({ value: area.id, text: area.description });
        return this.options;
      });
    },
  
};
</script>

<style>
</style>
<template>
  <div id="addOffer">
    <b-container class="d-flex justify-content-center">
      <b-row class="content">
        <b-col class="col-lg-4">
          <b-p class="d-flex justify-content-left">Imagem da Empresa</b-p>
          <b-card>
            <b-card-text>
              <!-- apresentar imagem da empresa selecionada -->
              <b-img :src="this.company.logo"></b-img><br />
              <!-- select das empresas + botão de adicionar empresa-->
              <b-form-select
                v-model="send.id_Company"
                size="sm"
                class="mt-3"
                @change="getCompany()"
              >
                <option
                  v-for="company in this.$store.state.companies"
                  :key="company.id"
                  :value="company.id"
                >
                  {{ company.name }}
                </option>
              </b-form-select>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col class="col-lg-8">
          <b-p class="d-flex justify-content-left">Informações Oferta</b-p>
          <b-card>
            <b-card-text>
              <b-form @submit.prevent="addOffer">
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
                        v-model="send.id_type_offer"
                        size="sm"
                        class="mt-3"
                      >
                        <option
                          v-for="type in this.$store.state.offers_type"
                          :key="type.id"
                          :value="type.id"
                        >
                          {{ type.description }}
                        </option>
                      </b-form-select>
                    </b-input-group>
                    <b-input-group class="mb-3">
                      <b-form-select
                        v-model="send.id_area"
                        size="sm"
                        class="mt-3"
                      >
                        <option
                          v-for="area in this.$store.state.areas"
                          :key="area.id"
                          :value="area.id"
                        >
                          {{ area.description }}
                        </option>
                      </b-form-select>
                    </b-input-group>
                  </b-col>
                  <b-col class="col-lg-6">
                    <b-input-group class="mb-3"
                      ><!-- preencher logo com address da empresa -->
                      <b-form-input
                        type="text"
                        id="txtCompanyAddress"
                        class="inputProf"
                        placeholder="Localização"
                        :value="this.company.address"
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
  name: "AddOffer",
  data() {
    return {
      send: {
        id: this.getNextId(),
        id_Company: "",
        id_type_offer: "",
        id_area: "",
        description: "",
        emailContact: "",
        duration: "",
      },
      company: "",
    };
  },
  computed: {
    filterCompany() {
      return this.$store.state.companies.find(
        (company) => company.id == this.id_Company
      );
    },
  },
  methods: {
    getNextId() {
      if (this.$store.state.offers.length == 0) {
        return 1;
      } else {
        return (
          this.$store.state.offers[this.$store.state.offers.length - 1].id + 1
        );
      }
    },
    getCompany() {
      this.company = this.$store.state.companies.find(
        (company) => company.id == this.send.id_Company
      );
    },
    addOffer() {
      try {
        //chamar ação addOffer
        this.$store.dispatch("addOffer", this.$data.send);

        //saltar para a view admin
        this.$router.push({ name: "Admin" });
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style>
</style>
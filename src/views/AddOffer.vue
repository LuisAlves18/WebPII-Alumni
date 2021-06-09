<template>
  <div id="addOffer">
    <b-container class="d-flex justify-content-center">
      <b-row class="content">
        <b-col class="col-lg-4">
          <p class="d-flex justify-content-left">Imagem da Empresa</p>
          <b-card>
            <b-card-text>
              <!-- apresentar imagem da empresa selecionada -->
              <b-img :src="this.company.logo"></b-img><br />
              <!-- select das empresas + botão de adicionar empresa-->
              <b-form-select
                v-model="send.companyId"
                size="sm"
                class="mt-3"
                @change="getCompany(send.companyId)"
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
          <p class="d-flex justify-content-left">Informações Oferta</p>
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
                        v-model="send.typeOfferId"
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
                        v-model="send.areaId"
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
import { CompanyService } from '../services/companies_service';
export default {
  
  name: "AddOffer",
  data() {
    return {
      send: {
        companyId: "",
        typeOfferId: "",
        areaId: "",
        description: "",
        emailContact: "",
        duration: "",
      },
      company: "",
      areas:[],
      offersType:[]
    };
  },
  mounted() {
    this.getAllCompanies()
    this.getAllAreas()
    this.getAllOffersType()

  },
  methods: {
    async getAllCompanies(){
      await this.$store.dispatch("fetchAllCompanies");
    },
    async getAllAreas(){
      
      await this.$store.dispatch("fetchAllAreas");
    
    },
   async getAllOffersType(){
     await this.$store.dispatch("fetchAllOffersType")
    },
    async getCompany(id){
      
      this.company = await CompanyService.fetchOneCompany(id)
      console.log("this.company",this.company)
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
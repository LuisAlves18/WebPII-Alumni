<template>
  <div id="companiesProfile">
    <b-container class="d-flex justify-content-center">
      <b-row class="content">
        <b-col class="col-lg-4">
          <p class="d-flex justify-content-left">Imagem da Empresa</p>
          <b-card>
            <b-card-text> <b-img :src="send.logo"></b-img><br /> </b-card-text>
          </b-card>
          <b-button class="d-flex justify-content-center" id="btnAddImage"
            >Editar Imagem</b-button
          >
        </b-col>
        <b-col class="col-lg-8">
          <p class="d-flex justify-content-left">Informações Empresa</p>
          <b-card>
            <b-card-text>
              <b-form @submit.prevent="editCompany">
                <b-row>
                  <b-col class="col-lg-6">
                    <b-input-group class="mb-3">
                      <b-form-input
                        type="text"
                        id="txtCompanyName"
                        class="inputProf"
                        placeholder="Nome"
                        v-model="send.name"
                      >
                      </b-form-input>
                    </b-input-group>
                    <b-input-group class="mb-3">
                      <b-form-input
                        type="text"
                        id="txtCompanyAddress"
                        class="inputProf"
                        placeholder="Localização"
                        v-model="send.address"
                      >
                      </b-form-input>
                    </b-input-group>
                    <b-input-group class="mb-3">
                      <b-form-input
                        type="text"
                        id="txtCompanyLinkedIN"
                        class="inputProf"
                        placeholder="LinkedIn"
                        v-model="send.linkedIN"
                      >
                      </b-form-input>
                    </b-input-group>
                  </b-col>
                  <b-col class="col-lg-6">
                    <b-input-group class="mb-3">
                      <b-form-input
                        type="email"
                        id="txtCompanyEmail"
                        class="inputProf"
                        placeholder="Email"
                        v-model="send.email"
                      >
                      </b-form-input>
                    </b-input-group>
                    <b-input-group class="mb-3">
                      <b-form-input
                        type="text"
                        id="txtWebSite"
                        class="inputProf"
                        placeholder="WebSite"
                        v-model="send.website"
                      >
                      </b-form-input>
                    </b-input-group>
                    <b-input-group class="mb-3">
                      <b-form-input
                        type="url"
                        id="logo"
                        class="inputProf"
                        placeholder="Logo link"
                        v-model="send.logo"
                      >
                      </b-form-input>
                    </b-input-group>
                  </b-col>
                  <b-input-group class="mb-3">
                    <b-button class="ml-3" id="btnAdd" type="submit"
                      >Alterar</b-button
                    >
                  </b-input-group>
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
  name: "CompaniesProfile",
  data() {
    return {
        currentCompany:'',
      send: {
        id: '',
        name: '',
        address:'',
        linkedIn: '',
        email: '',
        website: '',
        logo: '',
        about: '',
      },
    };
  },
  mounted(){
    this.getOneCompany()
  },
  methods: {
    async getOneCompany() {
      this.currentCompany = await CompanyService.fetchOneCompany(
        this.$store.state.companyProfileContent.id
      );
      this.send.id=this.currentCompany.id
      this.send.name=this.currentCompany.name
      this.send.address=this.currentCompany.address
      this.send.linkedIn=this.currentCompany.linkedIn
      this.send.email=this.currentCompany.email
      this.send.website=this.currentCompany.website
      this.send.logo=this.currentCompany.logo
      this.send.about=this.currentCompany.about
    console.log(this.send)
    },
    editCompany() {
      try {
        //chamar ação editCompany
        this.$store.dispatch("editCompany", this.$data.send);
        //saltar para a view Admin
        this.$router.push({ name: "Home" });
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style></style>

<template>
    <div id="addCompany">
        <h3>FORMULARIO PARA ADICIONAR EMPRESAS</h3>

        <b-container class="d-flex justify-content-center">
            <b-row class="content">
                <b-col class="col-lg-4">
                    <b-p class="d-flex justify-content-left">Imagem da Empresa</b-p>
                    <b-card>                       
                        <b-card-text>                           
                            <b-img src="https://via.placeholder.com/150"></b-img><br />
                        </b-card-text>
                    </b-card>
                    <b-button class="d-flex justify-content-center" id="btnAddImage">Adicionar Imagem</b-button>
                </b-col>
                <b-col class="col-lg-8">
                    <b-p class="d-flex justify-content-left">Informações Empresa</b-p>
                    <b-card>                       
                        <b-card-text>                           
                            <b-form @submit.prevent="addCompany">
                                <b-row>
                                    <b-col class="col-lg-6">
                                        <b-input-group class="mb-3">
                                            <b-form-input type="text" id="txtCompanyName" class="inputProf" placeholder="Nome" v-model="send.name">
                                            </b-form-input>
                                        </b-input-group>
                                        <b-input-group class="mb-3">
                                            <b-form-input type="text" id="txtCompanyAddress" class="inputProf" placeholder="Localização" v-model="send.address">
                                            </b-form-input>
                                        </b-input-group>
                                        <b-input-group class="mb-3">
                                            <b-form-input type="text" id="txtCompanyLinkedIN" class="inputProf" placeholder="LinkedIn" v-model="send.linkedIN">
                                            </b-form-input>
                                        </b-input-group>
                                    </b-col>
                                    <b-col class="col-lg-6">
                                        <b-input-group class="mb-3">
                                            <b-form-input type="email" id="txtCompanyEmail" class="inputProf" placeholder="Email" v-model="send.email">
                                            </b-form-input>
                                        </b-input-group>
                                        <b-input-group class="mb-3">
                                            <b-form-input type="text" id="txtWebSite" class="inputProf" placeholder="WebSite" v-model="send.website">
                                            </b-form-input>
                                        </b-input-group>
                                        <b-input-group class="mb-3">
                                            <b-button class="mb-3" id="btnAdd" type="submit">Inserir Empresa</b-button>
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
        name: 'AddCompany',
        data() {
            return {
                send: {
                    id: this.getNextId(),
                    name: '',
                    email: '',
                    address: '',
                    website: '',
                    logo: '',
                    linkedIN: ''
                }
            }
        },
        methods: {
            getNextId() {
                if (this.$store.state.companies.length == 0) {
                    return 1
                } else {
                    return this.$store.state.companies[this.$store.state.companies.length - 1].id + 1
                }
            },
            addCompany() {
                try {
                    //chamar ação addCompany
                    this.$store.dispatch("addCompany", this.$data.send);
                    //saltar para a view admin
                    this.$router.push({ name: "Admin" });
                } catch (error) {
                    alert(error);
                }
            }
        }
    }
</script>

<style>
.inputProf{
  background: transparent;
  border: none;
  border-bottom: 1px solid #0f4c81;
}
</style>
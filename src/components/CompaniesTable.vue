<template>
    <div id="companiesTable">
        <div >
            <table>
            <tr>
                <th>Nome Empresa</th>
                <th>Email Empresa</th>
                <th>Localização</th>
                <th>Ações</th>
            </tr>

            <tr v-for="company in companyContent" :key="company.id">
                <td>{{company.name}}</td>
                <td>{{company.email}}</td>
                <td>{{company.address}}</td>
                <td>
                    <b-button @click="seeMore(company)" class="btns mb-1">Ver Mais</b-button>
                    <b-button @click="removeCompany(company.id)" class="btns mb-1">Remover</b-button>
                </td>
            </tr>
        </table>
        <router-link :to="{name: 'AddCompany'}"><b-button id="routerLinkAddCompany" class="btns">Adicionar Empresa</b-button></router-link>
        </div>
        
        
    </div>
</template>

<script>
    export default {
        name: 'CompaniesTable',
        props: {
            companyContent: {
                type: Array
            }
        },
        mounted() {
            this.storeCompanies();
        },
        methods: {
            async storeCompanies() {
                await this.$store.dispatch("fetchAllCompanies");
                console.log(this.$store.state.companies);
            },
            removeCompany(company) {
                try {
                    //chamar ação removeCompany
                    this.$store.dispatch("removeCompany", company);
                    //saltar para a view refresh
                    this.$router.push({ name: "Home" });
                } catch (error) {
                    alert(error);
                }
            },
            seeMore(company) {
                this.$store.dispatch("seeMoreCompany", company);
                this.$router.push({ name: "CompanyProfile" });
            }
        }
    }
</script>

<style>
.btns {
    background-color: #0f4c81 !important;
  color: white !important;
}
</style>
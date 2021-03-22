<template>
    <div id="offersTable">
        <table>
            <tr>
                <th>Empresa</th>
                <th>Descrição</th>
                <th>Tipo de Oferta</th>
                <th>Ações</th>
            </tr>
            <tr v-for="offer in offersContent" :key="offer.id">
                <td>{{getCompanyOffer(offer.id_Company)}}</td>
                <td>{{offer.description}}</td>
                <td>{{getTypeOfferName(offer.id_type_offer)}}</td>
                <td>
                    <b-button @click="seeMoreOffer(offer)" class="btns">Detalhes</b-button>
                    <b-button @click="removeOffer(offer.id)" class="btns">Remover</b-button>
                </td>
            </tr>
        </table>
        <router-link :to="{name: 'AddOffer'}"><b-button id="routerAddOffer" class="btns">Criar Oferta</b-button></router-link>
    </div>
</template>

<script>
    export default {
        name: 'OffersTable',
        props: {
            offersContent: {
                type: Array
            }
        },
        methods: {
            getCompanyOffer(id) {
                return this.$store.state.companies.find(company => company.id == id).name
            },
            getTypeOfferName(id) {
                return this.$store.state.offers_type.find(type => type.id == id).description
            },
            seeMoreOffer(offer) {
                this.$store.dispatch('seeMoreOffer', offer)
                this.$router.push({name: 'OffersDetails'})
            },
            removeOffer(id) {
                this.$store.dispatch('removeOffer', id)
                this.$router.go();
            }
        }
    }
</script>

<style>

</style>
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
        <td>{{ offer.companyId }}</td>
        <td>{{ offer.description }}</td>
        <td>{{ offer.typeOfferId }}</td>
        <td>
          <b-button @click="seeMoreOffer(offer)" class="btns"
            >Detalhes</b-button
          >
          <b-button @click="removeOffer(offer.id)" class="btns"
            >Remover</b-button
          >
        </td>
      </tr>
    </table>

    <router-link :to="{ name: 'AddOffer' }"
      ><b-button id="routerAddOffer" class="btns"
        >Criar Oferta</b-button
      ></router-link
    >
  </div>
</template>

<script>
export default {
  name: "OffersTable",
  props: {
    offersContent: {
      type: Array,
    },
  },
  mounted() {
    this.storeOffers();
  },
  methods: {
    async storeOffers() {
      await this.$store.dispatch("fetchAllOffers");
      console.log(this.$store.state.offers);
    },
    
    seeMoreOffer(offer) {
      this.$store.dispatch("seeMoreOffer", offer);
      this.$router.push({ name: "OffersDetails" });
    },
    removeOffer(id) {
      this.$store.dispatch("removeOffer", id);
      //this.$router.go();
    },
  },
};
</script>

<style></style>

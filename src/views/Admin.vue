<template>
  <div id="admin">
    <h2>Gestão de Entidades</h2>
    <b-container class="d-flex justify-content-center">
      <b-row class="content">
        <b-col class="col-lg-4">
          <b-card>
            <b-card-text>
              <b-button @click="usersProp()" class="btns">Utilizadores</b-button
              ><br />
              <b-button @click="companiesProp()" class="btns">Empresas</b-button
              ><br />
              <b-button @click="offersProp()" class="btns">Ofertas</b-button
              ><br />
              <b-button @click="eventsProp()" class="btns">Eventos</b-button
              ><br />
            </b-card-text>
          </b-card>
        </b-col>
        <b-col class="col-lg-8">
          <b-card>
            <b-card-text>
              <div v-if="this.userContent.length != 0">
                <UsersTable :userContent="userContent"></UsersTable>
              </div>
              <div v-if="this.companyContent.length != 0">
                <CompaniesTable
                  :companyContent="companyContent"
                ></CompaniesTable>
              </div>
              <div v-if="this.eventsContent.length != 0">
                <EventsTable :eventsContent="eventsContent"></EventsTable>
              </div>
              <div v-if="this.offersContent.length != 0">
                <OffersTable :offersContent="offersContent"></OffersTable>
              </div>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
import UsersTable from "../components/UsersTable";
import CompaniesTable from "../components/CompaniesTable";
import EventsTable from "../components/EventsTable";
import OffersTable from "../components/OffersTable";
export default {
  name: "Admin",
  components: {
    UsersTable,
    CompaniesTable,
    EventsTable,
    OffersTable,
  },
  data() {
    return {
      userContent: [],
      companyContent: [],
      eventsContent: [],
      offersContent: [],
    };
  },
  mounted(){
    this.storeEvents()
    this.storeOffers()
  },
  methods: {
    async storeOffers() {
      await this.$store.dispatch("fetchAllOffers");
      console.log(this.$store.state.offers);
    },
    async storeEvents() {
      await this.$store.dispatch("fetchAllEvents");
    },
    usersProp() {
      this.companyContent = [];
      this.eventsContent = [];
      this.offersContent = [];
      this.userContent = this.$store.state.users.filter(
        (user) => user.type != "admin"
      );
    },

    companiesProp() {
      this.userContent = [];
      this.eventsContent = [];
      this.offersContent = [];
      this.companyContent = this.$store.state.companies;
    },
    eventsProp() {
      this.companyContent = [];
      this.userContent = [];
      this.offersContent = [];
      this.eventsContent = this.$store.state.events;
    },
    offersProp() {
      this.companyContent = [];
      this.userContent = [];
      this.eventsContent = [];
      this.offersContent = this.$store.state.offers;
    },
  },
};
</script>

<style>
.btns {
  background-color: #0f4c81 !important;
  color: white !important;
  width: 150px;
}
</style>

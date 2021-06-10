<template>
  <div>
    <b-container class="d-flex justify-content-center">
      <b-row class="content">
        <b-col class="col-lg-4">
          <b-p class="d-flex justify-content-left">Imagem do Evento</b-p>
          <b-card>
            <b-card-text>
              <b-img :src="currentEvent[0].event.photo"></b-img><br />
              <b-p>{{ currentEvent[0].event.name }}</b-p>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col class="col-lg-8">
          <b-p class="d-flex justify-content-left"
            >Utilizadores Inscritos/Pendentes</b-p
          >
          <b-card>
            <b-card-text>
              <table>
                <tr>
                  <th>Nome Utilizador</th>
                  <th>Email Utilizador</th>
                  <th>Estado</th>
                  <th>Ações</th>
                </tr>
                <tr v-for="enrollment in currentEvent" :key="enrollment.id">
                  <td>{{ enrollment.user.first_name }} {{enrollment.user.last_name}}</td>
                  <td>{{ enrollment.user.email }}</td>
                  <td>{{ getEnrollmentStatusName(enrollment.enrolled) }}</td>
                  <td v-if="enrollment.event.closed == true">
                    <span>
                      <b-button
                        class="mb-3"
                        id="btnAccept"
                        @click="givePoints(enrollment.eventId)"
                        >Atribuir Pontos</b-button
                      >
                    </span>
                    
                  </td>
                  <td v-else>Sem Ações.</td>
                </tr>
              </table>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
import { EventService } from '../services/events_service';
export default {
  name: "EnrollmentsUsersList",
  data() {
    return {
      /* photo: this.$store.state.eventsProfileContent.photo,
      eventName: this.$store.state.eventsProfileContent.name, */
      currentEvent: ''
    };
  },
  mounted(){
    this.getOneEventEnrollments()
  },
  /* computed: {
    filterEvent() {
      return this.$store.state.enrollments.filter(
        (enrollment) =>
          enrollment.idEvent == this.$store.state.eventsProfileContent.id
      );
    },
  }, */
  methods: {
    /* getUserNameById(id) {
      console.log(id);
      const fname = this.$store.state.users.find((user) => user.nrAluno == id)
        .fname;
      const lname = this.$store.state.users.find((user) => user.nrAluno == id)
        .lname;
      const fullName = fname + " " + lname;
      return fullName;
    },
    getUserEmailById(id) {
      return this.$store.state.users.find((user) => user.nrAluno == id).email;
    },
    acceptEnrollment(enrollment) {
      this.$store.dispatch("acceptEnrollment", enrollment);
      //this.$router.go();
    },
    cancelEnrollment(enrollment) {
      this.$store.dispatch("unsubscribeEvent", enrollment);
      //this.router.go();
    }, */
    async getOneEventEnrollments(){
      
      this.currentEvent = await EventService.fetchOneEventEnrollments(this.$store.state.eventsProfileContent.id)

    },
    getEnrollmentStatusName(status) {
      if (status == true) {
        return "Inscrito";
      } else {
        return "Pendente";
      }
    },
    givePoints(eventID) {
      try {
        this.$store.dispatch("fetchGivePoints", eventID);
        this.$router.push({ name: "Admin" });
      } catch (error) {
        alert(error);
      }
      
    }
  },
};
</script>

<style>
</style>
<template>
  <div>
    <b-container class="d-flex justify-content-center">
      <b-row class="content">
        <b-col class="col-lg-4">
          <b-p class="d-flex justify-content-left">Imagem do Evento</b-p>
          <b-card>
            <b-card-text>
              <b-img :src="photo"></b-img><br />
              <b-p>{{ this.eventName }}</b-p>
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
                <tr v-for="enrollment in filterEvent" :key="enrollment.idUser">
                  <td>{{ getUserNameById(enrollment.idUser) }}</td>
                  <td>{{ getUserEmailById(enrollment.idUser) }}</td>
                  <td>{{ enrollment.state }}</td>
                  <td v-if="enrollment.state != 'inscrito'">
                    <span>
                      <b-button
                        class="mb-3"
                        id="btnAccept"
                        @click="acceptEnrollment(enrollment)"
                        >Aceitar Inscrição</b-button
                      >
                    </span>
                    <span>
                      <b-button
                        class="mb-3"
                        id="btnCancel"
                        @click="cancelEnrollment(enrollment)"
                        >Cancelar Inscrição</b-button
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
export default {
  name: "EnrollmentsUsersList",
  data() {
    return {
      photo: this.$store.state.eventsProfileContent.photo,
      eventName: this.$store.state.eventsProfileContent.name,
    };
  },
  computed: {
    filterEvent() {
      return this.$store.state.enrollments.filter(
        (enrollment) =>
          enrollment.idEvent == this.$store.state.eventsProfileContent.id
      );
    },
  },
  methods: {
    getUserNameById(id) {
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
    },
  },
};
</script>

<style>
</style>
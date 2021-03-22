/* <template>
  <div class="profile">
    <b-container class="d-flex justify-content-center">
      <b-row class="content">
        <b-col class="col-lg-3">
          <h6 class="d-flex justify-content-left">Perfil</h6>
          <b-card id="persInfOver">
            <b-card-text>
              <b-img id="profPhoto" :src="send.photo"></b-img><br />
              <p>{{ send.fname }} {{ send.lname }}</p>
              <br />
              <p>{{ send.nrAluno }}</p>
              <hr />
              <h6>Redes Sociais</h6>
            </b-card-text>
          </b-card>
          <!-- <b-button
            class="d-flex justify-content-center"
            type="submit"
            id="btnAddFriend"
            >Adicionar Amigo</b-button
          > -->
        </b-col>
        <b-col class="col-lg-9">
          <h6 class="d-flex justify-content-left">Informações Pessoais</h6>
          <b-card id="persInf">
            <b-card-text>
              <b-form id="form-prof-change" @submit.prevent="editProfile">
                <b-row>
                  <b-col class="col-lg-6">
                    <b-input-group class="mb-3">
                      <b-form-input
                        type="email"
                        class="inputProf"
                        v-model="send.email"
                        placeholder="Email"
                      ></b-form-input>
                    </b-input-group>
                    <b-input-group class="mb-3">
                      <b-form-input
                        class="inputProf"
                        type="password"
                        placeholder="Password"
                        v-model="send.password"
                      ></b-form-input>
                    </b-input-group>

                    <b-input-group class="mb-3">
                      <b-form-input
                        type="text"
                        class="inputProf"
                        placeholder="Curriculum Vitae"
                        v-model="send.cv"
                      ></b-form-input>
                    </b-input-group>
                  </b-col>
                  <b-col class="col-lg-6">
                    <b-input-group class="mb-3">
                      <b-form-input
                        type="url"
                        class="inputProf"
                        placeholder="Facebook"
                        v-model="send.facebook"
                      ></b-form-input>
                    </b-input-group>

                    <b-input-group class="mb-3">
                      <b-form-input
                        type="url"
                        class="inputProf"
                        placeholder="Instagram"
                        v-model="send.instagram"
                      ></b-form-input>
                    </b-input-group>

                    <b-input-group class="mb-3">
                      <b-form-input
                        type="url"
                        class="inputProf"
                        placeholder="LinkedIn"
                        v-model="send.linkedin"
                      ></b-form-input>
                    </b-input-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-input-group class="mb-3">
                    <b-form-input
                      type="url"
                      class="inputProf"
                      placeholder="Foto"
                      v-model="send.photo"
                    ></b-form-input>
                  </b-input-group>
                </b-row>
                <b-row>
                  <b-col class="col-lg-3 justify-content-left d-flex">
                    <b-button type="submit" id="btnEdit">Editar</b-button>
                  </b-col>
                </b-row>
              </b-form>
            </b-card-text>
          </b-card>
          <b-card
            class="mt-3 tableEventsCard"
            v-if="filteredEnrollments().length != 0"
          >
            <b-card-text class="d-flex justify-content-center">
              <table class="tableEvents">
                <tr class="tableContent">
                  <th>Nome</th>
                  <th>Data</th>
                  <th>Hora</th>
                  <th>Cancelar</th>
                </tr>
                <tr
                  class="tableContent"
                  v-for="enrollment in filteredEnrollments()"
                  :key="enrollment.idEvent"
                >
                  <td>{{ getEventById(enrollment.idEvent) }}</td>
                  <td>
                    {{ getDateTimeById(enrollment.idEvent).split("/")[0] }}
                  </td>
                  <td>
                    {{ getDateTimeById(enrollment.idEvent).split("/")[1] }}
                  </td>
                  <td>
                    <button
                      @click="unsubscribeEvent(enrollment.idEvent)"
                      class="btn btnUnsubscribe"
                    >
                      Cancelar
                    </button>
                  </td>
                </tr>
              </table>
            </b-card-text>
          </b-card>
          <b-card v-else class="mt-3 tableEventsCard">
            <h4>Sem Inscrições em Eventos</h4>
          </b-card>
        </b-col>
      </b-row>
      <b-row> </b-row>
    </b-container>
  </div>
</template>

<style>
.content {
  margin-top: 5vh;
  width: 100vw;
}
#profPhoto {
  width: 8rem;
  height: 8rem;
}
.inputProf {
  background: transparent;
  border: none;
  border-bottom: 1px solid #0f4c81;
}
#persInfOver {
  margin-top: 2vh;
  width: 10vw;
}
#persInf {
  margin-top: 2vh;
  box-shadow: 0 0 15px #0f4c81;
}
#btnAddFriend {
  width: 10vw;
  margin-top: 1vh;
  border-radius: 0;
  background-color: #0f4c81;
}
.tableEventsCard {
  box-shadow: 0 0 15px #0f4c81;
}
#btnEdit,
#btnSave {
  margin-top: 2vh;
  border-radius: 0;
  background-color: #0f4c81;
}
/* td, th {

height:50px;
width: 150px;
text-align: center;
} */
</style>

<script>
export default {
  name: "Profile",
  data() {
    return {
      send: {
        nrAluno: this.$store.getters.getLoggedUser.nrAluno,
        fname: this.$store.getters.getLoggedUser.fname,
        lname: this.$store.getters.getLoggedUser.lname,
        email: this.$store.getters.getLoggedUser.email,
        password: this.$store.getters.getLoggedUser.password,
        curso: this.$store.getters.getLoggedUser.curso,
        estado: this.$store.getters.getLoggedUser.estado,
        cv: this.$store.getters.getLoggedUser.cv,
        facebook: this.$store.getters.getLoggedUser.facebook,
        instagram: this.$store.getters.getLoggedUser.instagram,
        linkedin: this.$store.getters.getLoggedUser.linkedin,
        photo: this.$store.getters.getLoggedUser.photo,
        pontos: this.$store.getters.getLoggedUser.pontos,
      },
    };
  },
  methods: {
    editProfile() {
      this.$store.dispatch("editProfile", this.$data.send);
    },
    filteredEnrollments() {
      return this.$store.state.enrollments.filter(
        (enrollment) =>
          enrollment.idUser === this.$store.getters.getLoggedUser.nrAluno
      );
    },
    getEventById(id) {
      return this.$store.state.events.find((event) => event.id === id).name;
    },
    getDateTimeById(id) {
      return this.$store.state.events.find((event) => event.id === id)
        .date_time_event;
    },
    unsubscribeEvent(eventId) {
      try {
        this.$store.dispatch("unsubscribeEvent", {
          idEvent: eventId,
          idUser: this.$store.getters.getLoggedUser.nrAluno,
        });
        alert("Inscrição cancelada com sucesso!");
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>
 
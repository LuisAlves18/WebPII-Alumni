<template>
  <div class="container profileConetnt">
    <div class="row">
      <div class="col-lg-3 leftProfile">
        <h4 class="d-flex justify-content-left">Perfil</h4>
        <div class="leftContent">
          
          <img
            class="img-fluid mt-3"
            :src="currentUser.photo"
          />
          <p class="mt-2">{{ send.first_name }} {{send.last_name }}</p>
          <label class="labelLeft">Número</label>
          <p>{{ send.alumni_number }}</p>
          <h6 class="pb-3">Redes Sociais</h6>
        </div>
      </div>

      <div class="col-lg-9 rightProfile">
        <h4 class="d-flex justify-content-left">Informações Pessoais</h4>
        <div class="card rightCard">
          <div class="container cardContent">
            <b-form id="form-prof-change" @submit.prevent="editProfile">
              <div class="row mb-3">
                <div class="col-lg-6">
                  <div class="input-group mb-3">
                    <input
                      type="email"
                      class="form-control inputProfile"
                      placeholder="Email"
                      v-model="send.email"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="input-group mb-3">
                    <input
                      type="password"
                      class="form-control inputProfile passwordProfile"
                      placeholder="Password"
                      v-model="send.password"
                    />
                  </div>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-lg-6">
                  <div class="input-group mb-3">
                    <input
                      type="url"
                      class="form-control inputProfile"
                      placeholder="Facebook"
                      v-model="send.facebook"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="input-group mb-3">
                    <input
                      type="url"
                      id="profileInstagram"
                      class="form-control inputProfile"
                      placeholder="Instgram"
                      v-model="send.instagram"
                    />
                  </div>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-lg-6">
                  <div class="input-group mb-3">
                    <input
                      type="url"
                      class="form-control inputProfile"
                      placeholder="LinkedIn"
                      v-model="send.linkedIn"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="input-group mb-3">
                    <input
                      type="url"
                      class="form-control inputProfile"
                      placeholder="Fotografia"
                      v-model="send.photo"
                    />
                  </div>
                </div>
              </div>
              <b-button
                      type="submit"></b-button>
            </b-form>
          </div>
        </div>
        <div class="profileEvents">
          <h4 class="d-flex justify-content-left">Seus Eventos</h4>
          <div class="card eventsCard">
            <div class="container cardContent">
              <div >
                <table class="tableEvents">
                  <tr class="tableContent">
                    <th>Nome</th>
                    <th>Data</th>
                    <th>Hora</th>
                    <th>Cancelar</th>
                  </tr>
                  <tr
                    class="tableContent"
                    v-for="enrollment in currentUser.enrollments"
                    :key="enrollment.id"
                  >
                    <td>{{ enrollment.event.name}}</td>
                    <td>
                      {{ enrollment.event.date_time_event.split("T")[0] }}
                    </td>
                    <td>
                      {{ enrollment.event.date_time_event.split("T")[1].split(":")[0] }}:{{ enrollment.event.date_time_event.split("T")[1].split(":")[1] }}
                    </td>
                    <td>
                      <router-link
                    id="seeMoreEvents"
                    :to="{ name: 'EventsView', params: { EventId: enrollment.event.id } }"
                    tag="b-button"
                  >
                    VER
                  </router-link>
                    </td>
                  </tr>
                </table>
              </div>
              <!-- <div v- class="mt-3 tableEventsCard">
                <h4>Sem Inscrições em Eventos</h4>
                <button class="btn btnApplyEvent">Ver Eventos</button>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.profileConetnt {
  margin-top: 50px;
}
.leftContent {
  background-color: #0f4c81;
  color: white;
  border-radius: 5px;
}

.labelLeft {
  margin-bottom: 0px;
}

.rightCard {
  border: 1px solid #0f4c81;
}

.inputProfile {
  background: transparent;
  border: none;
  border-bottom: 1px solid #0f4c81;
}

.inputProfile:focus{
  outline: none;
  box-shadow: none;
}

.btnProfile {
  background-color: #0f4c81;
  color: white;
}

.btnProfile:hover {
  color: white;
}

.btnProfile:focus {
  outline: none;
  box-shadow: none;
}
.profileEvents {
  margin-top: 20px;
}
.eventsCard {
  border: 1px solid #0f4c81;
}

.btnApplyEvent {
  background-color: #0f4c81;
  color: white;
}

.btnApplyEvent:hover {
  color: white;
}

.btnApplyEvent:focus {
  outline: none;
  box-shadow: none;
}
.cardContent {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>

<script>
import { UserService } from '../services/user_service';
export default {
  name: "Profile",
  data() {
    return {
      currentUser:'',
      send: {
        id:'',
        alumni_number:'',
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        courseId: '',
        statusId: '',
        cv: '',
        facebook: '',
        instagram: '',
        linkedIn: '',
        photo: '',
        points: '',
      },
    };
  },
  mounted(){
    this.getOneUser()
  },
  methods: {

    async getOneUser(){
      console.log("id do user a ser fetfhed",this.$store.state.loggedUser.id)
      this.currentUser = await UserService.fetchOneUserByID(this.$store.state.loggedUser.id)
      console.log("currentUser:",this.currentUser)
      this.send.id=this.currentUser.id
      this.send.alumni_number=this.currentUser.alumni_number
      this.send.first_name=this.currentUser.first_name
        this.send.last_name=this.currentUser.last_name
        this.send.email=this.currentUser.email
        this.send.password=this.currentUser.password
        this.send.courseId= this.currentUser.courseId
        this.send.statusId= this.currentUser.statusId
        this.send.cv= this.currentUser.cv
        this.send.facebook= this.currentUser.facebook
        this.send.instagram= this.currentUser.instagram
        this.send.linkedIn= this.currentUser.linkedIn
        this.send.photo= this.currentUser.photo
        this.send.points= this.currentUser.points

      

    },
    editProfile() {
      this.$store.dispatch("editProfile", this.$data.send);
      this.$router.push({ name: "Home" });
    },
    
  },
  
  
  
};
</script>
 
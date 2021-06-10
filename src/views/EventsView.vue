<template>
  <div id="EventsView">
    <div class="container-xl">
      <div class="row">
        <div class="col-lg-3 leftInfo">
          <h4 class="float-left mb-3">{{ currentEvent.event.name }}</h4>
          <img class="img-fluid" :src="currentEvent.event.photo" />
          <div class="eventDate">
            <p class="eventDay">{{ currentEvent.event.date_time_event.split("T")[0].split("-")[2] }} / {{ currentEvent.event.date_time_event.split("T")[0].split("-")[1] }}</p>
            <p class="eventTime">{{ currentEvent.event.date_time_event.split("T")[1].split(':')[0]}}:{{ currentEvent.event.date_time_event.split("T")[1].split(':')[1]}}H</p>
          </div>
          <div v-if="currentEvent.message">   
            <div v-if="currentEvent.message == 'logged'">
              <button
                @click="enrollEvent(currentEvent.event.id)"
                class="btn btnSubscribe"
              >
                Inscrever
              </button>
            </div>
            <div v-else-if="currentEvent.message == 'enrolled'">
              <span v-if="currentEvent.event.enrollments[0].enrolled == true">
                <button
                  @click="unsubscribeEvent(currentEvent.event.id)"
                  class="btn btnUnsubscribe"
                >
                Cancelar Inscrição
                </button>
              </span>
              <span v-else> 
                    <button
                      @click="payEnrollmentFullPrice(currentEvent.event)"
                      class="btn btnUnsubscribe"
                    >
                      Pagar Sem Desconto
                    </button>
                  <span v-if="currentEvent.event.enrollments[0].user.points > 0">
                    <button
                      @click="payEnrollmentDiscounted(currentEvent.event)"
                      class="btn btnUnsubscribe"
                    >
                      Pagar Com Desconto
                    </button>
                  </span>
              </span>
            </div>
          </div>
        </div>

        <div class="col-lg-9 rightInfo">
          <div class="text-left cardDetails">
            <b-card title="Detalhes">
              <div>
                <b>Descrição:</b> {{ currentEvent.event.description }} <br>
                <b>Preço:</b> {{currentEvent.event.price}} € <br>
                <span v-if="currentEvent.message && currentEvent.message == 'enrolled' && currentEvent.event.enrollments[0].enrolled != true">
                <b>Seus pontos disponiveis: </b> {{currentEvent.event.enrollments[0].user.points}} <br>
                <b>Preço com desconto: </b> {{currentEvent.event.price - (currentEvent.event.price * (currentEvent.event.enrollments[0].user.points / 100))}} €
                </span>
              </div>
            </b-card>
          </div>

          <div class="text-left cardLocation">
            <b-card title="Localização">
              <div>
                {{currentEvent.event.address}}
              </div>
            </b-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
/* eslint-disable */
import { EventService } from '../services/events_service';
export default {
  name: "EventsView",
  data() {
    return {
      currentEvent: "",
      enrolled: undefined,
      month: ""
    };
  },
  methods: {
    enrollEvent(eventId) {
      try {

        this.$store.dispatch("fetchAddEnrollment", eventId);
        this.$router.push({ name: "Events" });
        /* if (this.currentEvent.price == 0) {
          this.$store.dispatch("enrollEvent", {
            idEvent: eventId,
            idUser: this.$store.getters.getLoggedUser.nrAluno,
            state: "inscrito",
          });
          alert("Inscrição feita com sucesso!");
          this.$router.push({ name: "Events" });
        } else {
          this.$store.dispatch("enrollEvent", {
            idEvent: eventId,
            idUser: this.$store.getters.getLoggedUser.nrAluno,
            state: "pendente",
          });
          alert("Inscrição pendente! Por favor confirme o pagamento!");
          
        } */
      } catch (error) {
        alert(error);
      }
    },
      
    
    unsubscribeEvent(eventID) {
      try {
        this.$store.dispatch("fetchCancelEnrollment", eventID);

        /* this.$store.dispatch("unsubscribeEvent", {
          idEvent: eventId,
          idUser: this.$store.getters.getLoggedUser.nrAluno,
        });
        alert("Inscrição cancelada com sucesso!"); */
        this.$router.push({ name: "Events" });
      } catch (error) {
        alert(error);
      }
    },
    payEnrollmentFullPrice(event) {
      try {
        let points = event.enrollments[0].user.points - event.enrollments[0].user.points;
        this.$store.dispatch("fetchPayEnrollment", {eventID: event.id, discountPoints: points});
        this.$router.push({ name: "Events" });
      } catch (error) {
        alert(error);
      }
    },
    
    payEnrollmentDiscounted(event) {
      try {
        
        this.$store.dispatch("fetchPayEnrollment", {eventID: event.id, discountPoints: event.enrollments[0].user.points});
        this.$router.push({ name: "Events" });
      } catch (error) {
        alert(error);
      }
    },
    async getOneEvent(){
      
      this.currentEvent = await EventService.fetchOneEvent(this.$route.params.EventId)

    } 
  },
  created() {
    /* this.currentEvent = this.$store.state.events.find(
      (event) => event.id === this.$route.params.EventId
    ); */

    this.enrolled = this.$store.state.enrollments.find((enrollment) => {
      if (enrollment.idEvent == this.currentEvent.id) {
        if (enrollment.idUser == this.$store.getters.getLoggedUser.nrAluno) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    });

    //console.log('enrolled', this.enrolled);
  },
  mounted(){
    this.getOneEvent()
  }
};
</script>

<style>
.rightInfo {
  margin-top: 129px;
}

.leftInfo {
  margin-top: 80px;
}
.eventDay {
  background-color: rgb(226, 88, 62);
  color: white;
  margin-bottom: 0px;
}
.eventTime {
  background-color: rgb(40, 40, 40);
  color: white;
}
.btnSubscribe {
  color: white;
  background-color: rgb(15, 76, 129);
  width: 100%;
}
.btnSubscribe:hover {
  color: white;
}
.btnUnsubscribe{
  color:white;
  background-color: red;
}
.cardDetails {
  margin-bottom: 1rem;
  box-shadow: 0 0 10px #0f4c81;
}

.cardLocation {
  box-shadow: 0 0 10px #0f4c81;
}
</style>
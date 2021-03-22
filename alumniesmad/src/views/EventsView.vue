<template>
  <div id="EventsView">
    <div class="container-xl">
      <div class="row">
        <div class="col-lg-3 leftInfo">
          <h4 class="float-left mb-3">{{ currentEvent.name }}</h4>
          <img class="img-fluid" :src="currentEvent.photo" />
          <div class="eventDate">
            <p class="eventDay">{{ currentEvent.date_time_event.split("/")[0].split("-")[2] }} / {{ currentEvent.date_time_event.split("/")[0].split("-")[1] }}</p>
            <p class="eventTime">{{ currentEvent.date_time_event.split("/")[1]}}</p>
          </div>
          <div v-if="this.enrolled == undefined">
            <button
              @click="enrollEvent(currentEvent.id)"
              class="btn btnSubscribe"
            >
              Inscrever
            </button>
          </div>
          <div v-else>
            <button
              @click="unsubscribeEvent(currentEvent.id)"
              class="btn btnUnsubscribe"
            >
            Cancelar Inscrição
            </button>
          </div>
        </div>

        <div class="col-lg-9 rightInfo">
          <div class="text-left cardDetails">
            <b-card title="Detalhes">
              <div>
                {{ currentEvent.description }}
              </div>
            </b-card>
          </div>

          <div class="text-left cardLocation">
            <b-card title="Localização">
              <div>
                This is some content within the defaultthe card's border and
                this gray
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
        if (this.currentEvent.price == 0) {
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
          this.$router.push({ name: "Events" });
        }
      } catch (error) {
        alert(error);
      }
    },
      
    
    unsubscribeEvent(eventId) {
      try {
        this.$store.dispatch("unsubscribeEvent", {
          idEvent: eventId,
          idUser: this.$store.getters.getLoggedUser.nrAluno,
        });
        alert("Inscrição cancelada com sucesso!");
        this.$router.push({ name: "Events" });
      } catch (error) {
        alert(error);
      }
    }
  },
  created() {
    this.currentEvent = this.$store.state.events.find(
      (event) => event.id === this.$route.params.EventId
    );

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
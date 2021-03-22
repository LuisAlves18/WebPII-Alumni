<template>
  <div class="events">
    <b-container class="containerEvents">
      
      <b-img id="header" src="../assets/eventPage/events1.jpg" fluid></b-img>


  
      <h3 class="d-flex justify-content-center  mt-5 mb-5">Próximos Eventos</h3>
      <b-row>
        <div class="event-deck">
          <b-row class="d-flex justify-content-center">
            <tr v-for="event in this.$store.state.events" :key="event.id">
              <b-col col lg="12" md="8" class="d-flex justify-content-center mb-5 mr-auto ml-auto">

                <b-card
                  class="text-left mr-1 ml-3 mb-1"
                  tag="article"
                  :img-src="event.photo"
                  img-alt="Image"
                  img-left  
                >
                  <b-card-text>
                    <h6 class="d-flex justify-content-left">
                      {{ event.name }}
                    </h6>
                    <p>
                      <span id="cardDate" class="d-flex justify-content-left">{{
                        event.date_time_event.split("/")[0]
                      }}</span>
                    </p>
                    <p>
                      <span id="cardHour" class="d-flex justify-content-left">{{
                        event.date_time_event.split("/")[1]
                      }}</span>
                    </p>
                    <p id="cardDescp" class="d-flex justify-content-left">
                      {{ event.description }}
                    </p>
                  </b-card-text>
                  <router-link id="seeMoreEvents"
                    :to="{ name: 'EventsView', params: { EventId: event.id } }"
                    tag="b-button"
                  >
                    VER
                  </router-link>
                  
                </b-card>
              </b-col>
            </tr>
          </b-row>
        </div>
      </b-row>
    </b-container>
  </div>
</template>
<style>
.containerEvents{
  
  max-width: 100%;
  overflow-x: hidden;
  padding:0;
  margin: 0; 
}

.header{
   max-width: 100%;
   
}
article {
  box-shadow: 0 0 15px #0f4c81;
  max-width: 50rem;
  max-height: auto;


}
article img{
  max-width: 20vw;
}

#cardDate {
  margin: 0;
  height: 1vh;
  font-size: 12px;
}
#cardHour {
  height: 1vh;
  font-size: 12px;
}
#seeMoreEvents{
  color: white;
  background-color:#0f4c81;
}

</style>
<script>
export default {
  name: "Events",
  components: {},
};
</script>



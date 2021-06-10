<template>
  <div class="events">
    <b-container class="containerEvents">
      <b-img id="header" src="https://res.cloudinary.com/dsfbhbeyt/image/upload/v1619953704/events1_l0ueki.webp" fluid></b-img>

      <div class="filter-overlay ml-auto mr-auto">
        <div class="input-group mb-3 fltEventName">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
          </div>
          <input
            type="text"
            class="form-control"
            
            v-model="flrEventName"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>

      <h3 class="d-flex justify-content-center mt-5 mb-5">Próximos Eventos</h3>
      <b-row>
        <div class="event-deck">
          <b-row class="d-flex justify-content-center">
            <tr v-for="event in filteredEvents" :key="event.id">
              <b-col
                col
                lg="12"
                md="8"
                class="d-flex justify-content-center mb-5 mr-auto ml-auto"
              >
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
                        event.date_time_event.split("T")[0]
                      }}</span>
                    </p>
                    <p>
                      <span id="cardHour" class="d-flex justify-content-left">{{
                        event.date_time_event.split("T")[1].split(':')[0]
                      }}:{{
                        event.date_time_event.split("T")[1].split(':')[1]
                      }}H</span>
                    </p>
                    <p id="cardDescp" class="d-flex justify-content-left">
                      {{ event.description }}
                    </p>
                  </b-card-text>
                  <router-link
                    id="seeMoreEvents"
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
.containerEvents {
  max-width: 100%;
  overflow-x: hidden;
  padding: 0;
  margin: 0;
}

.header {
  max-width: 100%;
}
.filter-overlay {
  width:10vw;
  position: relative;
  top: -10vh;
}
.fltEventName {
  border: 0px;
}
article {
  box-shadow: 0 0 15px #0f4c81;
  max-width: 50rem;
  max-height: auto;
}
article img {
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
#seeMoreEvents {
  color: white;
  background-color: #0f4c81;
}
</style>
<script>
export default {
  name: "Events",
  data() {
    return {
      filteredEventsArr: [],
      flrEventName: "",
    };
  },
  
  methods:{
  async storeEvents() {
      await this.$store.dispatch("fetchAllEvents");
    },
  },
  mounted(){
    this.storeEvents()
  },
  computed: {
     filteredEvents() {    
      return this.$store.state.events.filter((event) => {
        if (event.name.includes(this.flrEventName)) {
          return true;
        }
      });
    }, 
  },
};

</script>

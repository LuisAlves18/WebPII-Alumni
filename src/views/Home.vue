<template>
  <div class="home">
    <div>
      <b-img
        id="landingImg"
        src="../assets/landingPage/carousel2.jpg"
        fluid
      ></b-img>
    </div>

    <div class="container">
      <h3 class="mt-5 mb-5">Notícias em Destaque</h3>
      <b-row class="d-flex justify-content-center">
        <b-col class="d-flex justify-content-center">
          <b-card
            img-src="../assets/landingPage/news1.png"
            img-alt="Card image"
            img-top
            title="Eleições para a Presidência"
            class="cardNews ml-4"
            style="max-width: 29vw"
          >
            <b-card-text class="newsText">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </b-card-text>
            <b-card-text class="newsSub text-muted"> 8 Fev 10:00 </b-card-text>
          </b-card>
        </b-col>
        <b-col class="d-flex justify-content-center">
          <b-card
            img-src="../assets/landingPage/news2.png"
            img-alt="Card image"
            img-top
            title="Inauguração da Biblioteca"
            title-class="text-left"
            class="cardNews"
            style="max-width: 29vw"
          >
            <b-card-text class="newsText">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </b-card-text>
            <b-card-text class="newsSub text-muted"> 5 Mar 17:00 </b-card-text>
          </b-card>
        </b-col>

        <b-col class="d-flex justify-content-center">
          <b-card
            img-src="../assets/landingPage/news3.png"
            img-alt="Card image"
            img-top
            title="Mad Game Jam"
            class="cardNews mr-4"
            style="max-width: 29vw"
          >
            <b-card-text class="newsText">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </b-card-text>
            <b-card-text class="newsSub text-muted"> 10 Mar 12:00 </b-card-text>
          </b-card>
        </b-col>
      </b-row>

      <h3 class="mt-5 mb-5">Próximos Eventos</h3>
      <div class="mr-auto ml-auto">
        <b-row>
          <tr
            class="col-lg-6"
            v-for="event in this.$store.state.events"
            :key="event.id"
          >


     


              <div class="row mb-3">
                <div class="alumniEventsList">
                  <div class="eventsDate">
                    <div class="eventsDay">
                      {{ event.date_time_event.split("/")[0].split("-")[2] }}
                    </div>
                    <div class="eventsMonth">
                      {{ getMonth(event) }}
                    </div>
                  </div>
                </div>
                <div class="eventsDescription">
                  <div class="eventsSummary text-left">
                    {{ event.description }}
                  </div>
                </div>
              </div>
    
          </tr>
        </b-row>
      </div>

      
    </div>

    
  </div>
</template>

<style>
#landingImg {
  width: 100%;
}
.cardNews {
  box-shadow: 0 0 15px #0f4c81;
}

.newsText {
  text-align: justify;
}
.newsSub {
  font-size: 10px;
  text-align: left;
  margin-top: -0.5vw;
}

.eventsDate {
  width: 70px;
  height: 5rem;
  float: left;
  background: #e2583e;
  opacity: 0.8;
  text-align: center;
}
.eventsDay {
  color: white;
  font-size: 30px;
}
.eventsMonth {
  color: white;
  font-size: 13px;
}
.eventsDescription {
  background: none repeat scroll 0 0 #000;
  color: white;
  float: left;
  height: 5rem;
  opacity: 0.8;
  padding: 10px;
  width: 85%;
}

</style>

<script>
/* eslint-disable */
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  methods: {
    getMonth(event) {
      let number = event.date_time_event.split("/")[0].split("-")[1];
      console.log(number);
      switch (number) {
        case `01`:
          this.month = "Janeiro";
          break;
        case `02`:
          this.month = "Fevereiro";
          break;
        case `03`:
          this.month = "Março";
          break;
        case `04`:
          this.month = "Abril";
          break;
        case `05`:
          this.month = "Maio";
          break;
        case `06`:
          this.month = "Junho";
          break;
        case `07`:
          this.month = "Julho";
          break;
        case `08`:
          this.month = "Agosto";
          break;
        case `09`:
          this.month = "Setembro";
          break;
        case `10`:
          this.month = "Outubro";
          break;
        case `11`:
          this.month = "Novembro";
          break;
        case `12`:
          this.month = "Dezembro";
          break;
      }
      return this.month;
    },
  },
};
</script>
 
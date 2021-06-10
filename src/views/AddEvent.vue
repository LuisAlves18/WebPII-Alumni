<template>
  <div id="addEvent">
    <h3>FORMULARIO PARA ADICIONAR EVENTOS</h3>

    <b-container class="d-flex justify-content-center">
      <b-row class="content">
        <b-col class="col-lg-4">
          <p class="d-flex justify-content-left">Imagem do Evento</p>
          <b-card>
            <b-card-text>
              <b-img :src="send.photo"></b-img><br />
              <b-form-input
                type="url"
                id="urlPhoto"
                class="inputProf"
                v-model="send.photo"
                required
              >
              </b-form-input>
              <!-- select para os tipos de eventos -->
              <b-form-select
                v-model="send.id_event_type"
                :options="options"
                size="sm"
                class="mt-3"
                required
              ></b-form-select>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col class="col-lg-8">
          <p class="d-flex justify-content-left">Informações Evento</p>
          <b-card>
            <b-card-text>
              
              <b-form @submit.prevent="createEvent">
                <b-row>
                  <b-col class="col-lg-6">
                    <b-input-group class="mb-3">
                      <b-form-input
                        type="text"
                        id="txtEventName"
                        class="inputProf"
                        placeholder="Nome"
                        v-model="send.name"
                      >
                      </b-form-input>
                    </b-input-group>
                    <b-input-group class="mb-3">
                      <b-form-input
                        type="text"
                        id="txtCompanyAddress"
                        class="inputProf"
                        placeholder="Localização"
                        v-model="send.address"
                      >
                      </b-form-input>
                    </b-input-group>
                    <b-input-group class="mb-3">
                      <b-form-input
                        type="date"
                        id="txtDate"
                        class="inputProf"
                        placeholder="Data"
                        v-model="send.date"
                      >
                      </b-form-input>
                    </b-input-group>
                    <b-input-group class="mb-3">
                      <b-form-input
                        type="date"
                        id="txtDateLimit"
                        class="inputProf"
                        placeholder="Data Limite"
                        v-model="send.date_limit"
                      >
                      </b-form-input>
                    </b-input-group>
                    <b-input-group class="mb-3">
                      <b-form-input
                        type="number"
                        min="0"
                        id="numberPrice"
                        class="inputProf"
                        placeholder="Preço"
                        v-model="send.price"
                      >
                      </b-form-input>
                    </b-input-group>
                    <b-input-group class="mb-3">
                      <b-form-input
                        type="number"
                        min="0"
                        id="numberLimit"
                        class="inputProf"
                        placeholder="Limite"
                        v-model="send.nrLimit"
                      >
                      </b-form-input>
                    </b-input-group>
                  </b-col>
                  <b-col class="col-lg-6">
                    <b-input-group class="mb-3">
                      <b-form-textarea
                        id="txtEventDescription"
                        rows="4"
                        maxrows="4"
                        class="inputProf"
                        placeholder="Descrição"
                        v-model="send.description"
                      >
                      </b-form-textarea>
                    </b-input-group>
                    <b-input-group class="mb-3">
                      <b-form-input
                        type="text"
                        id="txtLink"
                        class="inputProf"
                        placeholder="Link"
                        v-model="send.link"
                      >
                      </b-form-input>
                    </b-input-group>
                    <b-input-group class="mb-3">
                      <b-form-input
                        type="time"
                        id="txtTime"
                        class="inputProf"
                        placeholder="Hora"
                        v-model="send.time"
                      >
                      </b-form-input>
                    </b-input-group>
                    <b-input-group class="mb-3">
                      <b-button class="mb-3" type="submit" id="btnSave"
                        >Criar Evento</b-button
                      >
                    </b-input-group>
                  </b-col>
                </b-row>
              </b-form>
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
  name: "AddEvent",
  data() {
    return {
      send: {
         id_event_type: "",
        name:"",
        price: "",
        description: "",
        photo: "",
        date: "",
        time: "",
        date_limit: "",
        link:"",
        address: "",
        nrLimit: "",
      },
      eventsType: [],
      options: [],
    };
  },
  
  mounted() {
    this.getEventsType();
    this.$store.state.events_type.forEach((type) => {
      this.options.push({ value: type.id, text: type.description });
    });
  },
  methods: {
    async getEventsType() {
      await this.$store.dispatch("fetchAllEventTypes");
    },
    feedOptions() {
      console.log("options", this.options);
      console.log("eventsType", this.eventsType);
    },
    createEvent() {
      try {
        //chamar ação addCompany
        this.$store.dispatch("fetchAddEvent", this.$data.send);
        //saltar para a view home
        this.$router.push({ name: "Home" });
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style>
.inputProf {
  background: transparent;
  border: none;
  border-bottom: 1px solid #0f4c81;
}
</style>

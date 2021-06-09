<template>
  <div id="eventsDetails">
    <b-container class="d-flex justify-content-center">
      <b-row class="content">
        <b-col class="col-lg-4">
          <p class="d-flex justify-content-left">Imagem do Evento</p>
          <b-card>
            <b-card-text>
              <b-img :src="send.photo"></b-img><br />
              <p>{{this.send.id_event_type}}</p>
            </b-card-text>
          </b-card>
          <b-button class="d-flex justify-content-center" id="btnAddImage"
            >Editar Imagem</b-button
          >
        </b-col>
        <b-col class="col-lg-8">
          <p class="d-flex justify-content-left">Informações Empresa</p>
          <b-card>
            <b-card-text>
              <b-form @submit.prevent="editEvent">
                <b-row>
                  <b-col class="col-lg-6">
                    <b-input-group class="mb-3">
                      Nome do Evento
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
                      Localização
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
                      Data
                      <b-form-input
                        type="date"
                        id="txtDate"
                        class="inputProf"
                        placeholder="Data"
                        v-model="date"
                      >
                      </b-form-input>
                    </b-input-group>
                    <b-input-group class="mb-3">
                      Data Limite Inscrição
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
                      Preço
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
                      Limite Inscrições
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
                      Descrição
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
                      Link
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
                      Hora
                      <b-form-input
                        type="time"
                        id="txtTime"
                        class="inputProf"
                        placeholder="Hora"
                        v-model="time"
                      >
                      </b-form-input>
                    </b-input-group>
                    <b-input-group class="mb-3">
                      <b-button class="mb-3" type="submit" id="btnSave"
                        >Confirmar Alterações</b-button
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
  name: "EventsDetails",
  data() {
    return {
      send: {
        id: this.$store.state.eventsProfileContent.id,
        id_event_type: this.$store.state.eventsProfileContent.id_event_type,
        name: this.$store.state.eventsProfileContent.name,
        date: this.$store.state.eventsProfileContent.date,
        time: this.$store.state.eventsProfileContent.time,
        date_limit: this.$store.state.eventsProfileContent.date_limit,
        price: this.$store.state.eventsProfileContent.price,
        link: this.$store.state.eventsProfileContent.link,
        address: this.$store.state.eventsProfileContent.address,
        description: this.$store.state.eventsProfileContent.description,
        photo: this.$store.state.eventsProfileContent.photo,
        nrLimit: this.$store.state.eventsProfileContent.nrLimit,
        closed: this.$store.state.eventsProfileContent.closed,
      },
      date: "",
      time: "",
    };
  },
  created() {
    const splitDateTime = this.$store.state.eventsProfileContent.date_time_event.split(
      " "
    );
    this.date = splitDateTime[0];
    this.time = splitDateTime[1];
  },
  
  methods: {
    
    getEventTypeById(id) {
      return this.$store.state.events.find((event) => event.id_event_type == id)
        .description;
    },
    editEvent() {
      if (confirm("Pretende confirmar as alterações a este evento?")) {
        this.send.date_time_event = this.date + "/" + this.time;
        try {
          //chamar ação editEvent
          //this.$store.dispatch("editEvent", this.$data.send);
          //saltar para a view Admin
          this.$router.push({ name: "Admin" });
        } catch (error) {
          alert(error);
        }
      }
    },
  },
};
</script>

<style>
</style>
<template>
  <div id="addEvent">
    <h3>FORMULARIO PARA ADICIONAR EVENTOS</h3>

    <b-container class="d-flex justify-content-center">
      <b-row class="content">
        <b-col class="col-lg-4">
          <b-p class="d-flex justify-content-left">Imagem do Evento</b-p>
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
          <b-p>Convidados</b-p>
          <b-card>
            <b-card-text>
              <b-form @submit.prevent="addGuest">
                <b-row>
                  <b-col class="col-lg-6">
                    <b-input-group class="mb-3">
                      <b-form-input
                        type="text"
                        id="txtGuestName"
                        class="inputProf"
                        placeholder="Nome"
                        v-model="guest.name"
                      >
                      </b-form-input>
                    </b-input-group>
                  </b-col>
                  <b-col class="col-lg-6">
                    <b-input-group class="mb-3">
                      <b-form-input
                        type="text"
                        id="txtGuestCompany"
                        class="inputProf"
                        placeholder="Empresa"
                        v-model="guest.company"
                      >
                      </b-form-input>
                    </b-input-group>
                  </b-col>
                </b-row>
                <b-row>
                  <b-button type="submit" class="mb-3"
                    >Adicionar Convidado</b-button
                  >
                </b-row>
                <b-row>
                  <b-col class="col-lg-12">
                    <table>
                      <tr>
                        <th>Nome</th>
                        <th>Empresa</th>
                        <th>Ações</th>
                      </tr>
                      <tr v-for="guest in send.guests" :key="guest.id">
                        <td>{{ guest.name }}</td>
                        <td>{{ guest.company }}</td>
                        <td>
                          <b-button class="mb-3">Remover</b-button>
                        </td>
                      </tr>
                    </table>
                  </b-col>
                </b-row>
              </b-form>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col class="col-lg-8">
          <b-p class="d-flex justify-content-left">Informações Empresa</b-p>
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
                        v-model="date"
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
                        v-model="time"
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
        id: this.getNextId(),
        id_event_type: 0,
        name: "",
        date_time_event: "",
        date_limit: "",
        price: "",
        link: "",
        address: "",
        description: "",
        photo: "",
        nrLimit: 0,
        guests: [],
      },
      date: "",
      time: "",
      options: [
        {
          value: this.$store.state.events_type[0].id,
          text: this.$store.state.events_type[0].description,
        },
        {
          value: this.$store.state.events_type[1].id,
          text: this.$store.state.events_type[1].description,
        },
        {
          value: this.$store.state.events_type[2].id,
          text: this.$store.state.events_type[2].description,
        },
        {
          value: this.$store.state.events_type[3].id,
          text: this.$store.state.events_type[3].description,
        },
      ],
      guest: {
        id: 0,
        name: "",
        company: "",
      },
    };
  },
  methods: {
    getNextId() {
      if (this.$store.state.events.length == 0) {
        return 1;
      } else {
        return (
          this.$store.state.events[this.$store.state.events.length - 1].id + 1
        );
      }
    },
    getNextIdGuest() {
      if (this.send.guests.length == 0) {
        return 1;
      } else {
        return this.send.guests[this.send.guests.length - 1].id + 1;
      }
    },
    createEvent() {
      this.send.date_time_event = this.date + "/" + this.time;
      try {
        //chamar ação addEvent
        this.$store.dispatch("addEvent", this.$data.send);

        //saltar para a view admin
        this.$router.push({ name: "Admin" });
      } catch (error) {
        alert(error);
      }
    },
    addGuest() {
      this.guest.id = this.getNextIdGuest();
      const newGuest = {
        id: this.guest.id,
        idEvent: this.send.id,
        name: this.guest.name,
        company: this.guest.company,
      };
      this.send.guests.push(newGuest);
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
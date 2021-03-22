<template>
  <div id="profileView">
    <b-container class="d-flex justify-content-center">
      <b-row class="content">
        <b-col class="col-lg-4">
          <b-h6 class="d-flex justify-content-left">Perfil</b-h6>
          <b-card id="persInfOver">
            <b-card-text>
              <b-img :src="send.photo" id="Photo"></b-img><br />
              <b-p
                >{{ this.$store.state.userProfileContent.fname }}
                {{ this.$store.state.userProfileContent.lname }}</b-p
              >
              <br />
              <b-p>{{ this.$store.state.userProfileContent.nrAluno }}</b-p>
              <hr />
              <h6>Redes Sociais</h6>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col class="col-lg-8">
          <b-h6 class="d-flex justify-content-left">Informações Pessoais</b-h6>
          <b-card id="persInf">
            <b-card-text>
              <b-form id="form-prof-change">
                <b-row>
                  <b-col class="col-lg-6">
                    <b-input-group class="mb-3">
                      <b-form-input
                        type="text"
                        class="inputProf"
                        placeholder="Email"
                        :value="this.$store.state.userProfileContent.email"
                        readonly
                      ></b-form-input>
                    </b-input-group>
                    <b-input-group class="mb-3">
                      <b-form-input
                        class="inputProf"
                        type="text"
                        placeholder="Curso"
                        :value="this.$store.state.userProfileContent.curso"
                        readonly
                      ></b-form-input>
                    </b-input-group>

                    <b-input-group class="mb-3">
                      <b-form-input
                        type="file"
                        class="inputProf"
                        placeholder="Curriculum Vitae"
                      ></b-form-input>
                    </b-input-group>
                  </b-col>
                  <b-col class="col-lg-6">
                    <b-input-group class="mb-3">
                      <b-form-select
                        v-model="send.statusChange"
                        :options="options"
                        size="sm"
                        class="mt-3"
                      ></b-form-select>
                    </b-input-group>
                    <b-button
                      @click="updateStatus()"
                      id="btnStatusChange"
                      class="mb-3"
                      >Alterar Estado</b-button
                    >
                    <b-button
                      @click="removeUser(send.email)"
                      id="btnRemoveUser"
                      class="mb-3"
                      >Remover Utilizador</b-button
                    >
                  </b-col>
                </b-row>
                <b-row>
                  <b-col class="col-lg-12">
                    <b-input-group class="mb-3">
                      <b-form-input
                        type="url"
                        class="inputProf"
                        placeholder="Link da Foto"
                        v-model="send.photo"
                      ></b-form-input>
                    </b-input-group>
                  </b-col>
                </b-row>
              </b-form>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <b-row> </b-row>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "ProfileView",
  data() {
    return {
      send: {
        statusChange: this.$store.state.userProfileContent.estado,
        email: this.$store.state.userProfileContent.email,
        photo: this.$store.state.userProfileContent.photo,
      },
      options: [
        { value: "pendente", text: "Estado Pendente", disabled: true },
        { value: "disponivel", text: "Estado Disponivel" },
        { value: "bloqueado", text: "Estado Bloqueado" },
      ],
    };
  },
  methods: {
    removeUser(email) {
      try {
        //chamar ação removeUser
        this.$store.dispatch("removeUser", email);
        //saltar para a view ADmin
        this.$router.push({ name: "Admin" });
      } catch (error) {
        alert(error);
      }
    },
    updateStatus() {
      try {
        //chamar ação updateStatus
        this.$store.dispatch("updateStatus", this.$data.send);
        //saltar para a view Admin
        this.$router.push({ name: "Admin" });
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>

<style>
#Photo {
  width: 8rem;
  height: 8rem;
}
#btnStatusChange {
  margin-right: 5px;
}

#btnRemoveUser {
  margin-left: 5px;
}

#btnStatusChange,
#btnRemoveUser {
  background-color: #0f4c81 !important;
  color: white !important;
}
</style>
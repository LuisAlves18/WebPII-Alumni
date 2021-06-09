<template>
  <div id="profileView">
    <b-container class="d-flex justify-content-center">
      <b-row class="content">
        <b-col class="col-lg-4">
          <h6 class="d-flex justify-content-left">Perfil</h6>
          <b-card id="persInfOver">
            <b-card-text>
              <b-img :src="send.photo" id="Photo"></b-img><br />
              <p
                >{{ this.$store.state.userProfileContent.first_name }}
                {{ this.$store.state.userProfileContent.last_name }}</p
              >
              <br />
              <p>{{ this.$store.state.userProfileContent.alumni_number }}</p>
              <hr />
              <h6>Redes Sociais</h6>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col class="col-lg-8">
          <h6 class="d-flex justify-content-left">Informações Pessoais</h6>
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
                        :value="this.$store.state.userProfileContent.courseId"
                        readonly
                      ></b-form-input>
                    </b-input-group>

                    
                  </b-col>
                  <b-col class="col-lg-6">
                    <b-input-group class="mb-3">
                      <b-form-select
                        v-model="send.statusId"
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
        id:this.$store.state.userProfileContent.id,
        statusId: this.$store.state.userProfileContent.statusId,
        email: this.$store.state.userProfileContent.email,
        photo: this.$store.state.userProfileContent.photo,
      },
      options: [
        { value: 3, text: "Estado Pendente", disabled: true },
        { value: 1, text: "Estado Disponivel" },
        { value: 2, text: "Estado Bloqueado" },
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
        this.$store.dispatch("updateUserStatusByAdmin", this.$data.send);
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
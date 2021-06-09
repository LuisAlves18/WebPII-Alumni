<template>
  <div id="usersTable">
    <table class="table-secondary table-hover">
      <tr>
        <th>Número Aluno</th>
        <th>Nome</th>
        <th>Curso</th>
        <th>Estado</th>
        <th>Opções</th>
      </tr>

      <tr v-for="render in userContent" :key="render.email">
        <td>{{ render.alumni_number }}</td>
        <td>{{ render.first_name }} {{ render.last_name }}</td>
        <td>{{ render.courseId }}</td>
        <td>{{ render.statusId }}</td>
        <td id="tdButtons">
          <b-button @click="seeMore(render)" class="btns">Ver Mais</b-button>
          <b-button @click="removeUser(render.id)" class="btns"
            >Eliminar</b-button
          >
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "UsersTable",
  props: {
    userContent: {
      type: Array,
    },
  },
  mounted(){
    this.storeUsers()
  },
  methods: {
    async storeUsers() {
            await this.$store.dispatch("fetchAllUsers");
    },
    removeUser(userToRemove) {
      try {
        //chamar ação removeUser
        this.$store.dispatch("removeUser", userToRemove);
        //refresh
        //this.$router.go();
      } catch (error) {
        alert(error);
      }
    },
    seeMore(user) {
      this.$store.dispatch("seeMore", user);
      this.$router.push({ name: "ProfileView" });
    },
  },
};
</script>

<style>
</style>
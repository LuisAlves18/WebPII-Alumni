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
        <td>{{ render.nrAluno }}</td>
        <td>{{ render.fname }} {{ render.lname }}</td>
        <td>{{ render.curso }}</td>
        <td>{{ render.estado }}</td>
        <td id="tdButtons">
          <b-button @click="seeMore(render)" class="btns">Ver Mais</b-button>
          <b-button @click="removeUser(render.email)" class="btns"
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
  methods: {
    removeUser(userToRemove) {
      try {
        //chamar ação removeUser
        this.$store.dispatch("removeUser", userToRemove);
        //refresh
        this.$router.go();
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
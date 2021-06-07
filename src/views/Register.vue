<template>
  <div class="row">
    <div class="registerContent ml-auto mr-auto">
      <div class="registerHeader">
        <img src="../assets/logo/whiteLogo.png" />
      </div>
      <div class="registerForm">
        <form @submit.prevent="register">
          <div class="row justify-content-center">
            <input
              type="text"
              class="form-control col-lg-4 inputRegister"
              placeholder="Nome"
              aria-label="Nome"
              aria-describedby="basic-addon1"
              v-model="send.fname"
            />
            <input
              type="text"
              class="form-control col-lg-4 inputRegister"
              placeholder="Apelido"
              aria-label="Apelido"
              aria-describedby="basic-addon1"
              v-model="send.lname"
            />
          </div>
          <div class="row justify-content-center">
            <input
              type="password"
              class="form-control col-lg-4 inputRegister"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              v-model="send.password"
            />
            <input
              type="password"
              class="form-control col-lg-4 inputRegister"
              placeholder="Confirme a Password"
              aria-label="Confirme a Password"
              aria-describedby="basic-addon1"
              v-model="confPassword"
            />
          </div>
          <div class="row justify-content-center">
            <input
              type="email"
              class="form-control col-lg-4 inputRegister"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
              v-model="send.email"
            />
            <input
              type="text"
              class="form-control col-lg-4 inputRegister"
              placeholder="Número Alumni"
              aria-label="Número Alumni"
              aria-describedby="basic-addon1"
              v-model="send.nrAluno"
            />
          </div>
          <button type="submit" class="btn btnRegister" id="btnSubmit">
            Registar
          </button>
        </form>
      </div>
    </div>
  </div>

</template>

<style>
.registerContent {
  background: rgb(70, 117, 158);
  background: linear-gradient(
    0deg,
    rgba(70, 117, 158, 1) 0%,
    rgba(15, 76, 129, 1) 100%
  );
  width: 600px;
  padding: 50px 0 50px 0;
  margin-top: 80px;
  margin-bottom: 80px;
  border-radius: 20px;
}

.registerHeader {
  margin-bottom: 20px;
}

.registerHeader img {
  width: 120px;
}

.inputRegister {
  width: 60%;
  margin: 0 10px 5px 10px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
}
.inputRegister:focus {
  background-color: transparent;
  outline: none !important;
  outline-width: 0px !important;
}

.inputRegister::placeholder {
  color: white;
}
</style>

<script>
/* eslint-disable */
export default {
  name: "Register",
  data() {
    return {
      confPassword: "",
      send: {
        nrAluno: "",
        fname: "",
        lname: "",
        email: "",
        
        password: "",
        
        cv: "",
        facebook: "",
        instagram: "",
        linkedin: "",
        photo: "",
        points: 0,
        roleId: 2,
        statusId: 3, //estado pendente aguarda confirmação de admin
        courseId: '',
        areaId:'',
      },
    };
  },
  methods: {
    register() {
      try {
        //chamar ação registo
        if (this.send.password == this.confPassword) {
          this.$store.dispatch("register", this.$data.send);
          //saltar para a view Login
          this.$router.push({ name: "Login" });
        } else {
          alert("Passwords não coincidem!");
        }
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>


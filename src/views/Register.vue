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
              id="firstRegisterInput"
              placeholder="Nome"
              aria-label="Nome"
              aria-describedby="basic-addon1"
              v-model="send.first_name"
            />
            <input
              type="text"
              class="form-control col-lg-4 inputRegister"
              id="lastRegisterInput"
              placeholder="Apelido"
              aria-label="Apelido"
              aria-describedby="basic-addon1"
              v-model="send.last_name"
            />
          </div>
          <div class="row justify-content-center">
            <input
              type="password"
              class="form-control col-lg-4 inputRegister"
              id="passwordRegisterInput"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              v-model="send.password"
            />
            <input
              type="password"
              class="form-control col-lg-4 inputRegister"
              id="confirmRegisterInput"
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
              id="emailRegisterInput"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
              v-model="send.email"
            />
            <input
              type="text"
              class="form-control col-lg-4 inputRegister"
              id="numberRegisterInput"
              placeholder="Número Alumni"
              aria-label="Número Alumni"
              aria-describedby="basic-addon1"
              v-model="send.alumni_number"
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
        alumni_number: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        courseId:1,
        areaId:7,
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


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

  <!-- <div class="register">
    
    <router-link to="/auth/login">Login</router-link> |
    <router-link to="/auth/Register">Register</router-link>

    <b-container class="d-flex justify-content-center">
      <div>
        <b-card class="cardRegister">
          <b-card-title>
            <img src="../assets/logo/blueLogo.png" class="logoImg" />
          </b-card-title>
          <b-card-text>
            <b-form id="form-register" @submit.prevent="register">
              <b-row>
           
                <div class="col-lg-6">
                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text class="iconPrepend">
                        <i class="fas fa-user"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                      id="txtFirstName"
                      type="text"
                      placeholder="Nome Próprio"
                      v-model="send.fname"
                    ></b-form-input>
                  </b-input-group>

                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text class="iconPrepend">
                        <i class="fas fa-envelope"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>

                    <b-form-input
                      id="txtEmail"
                      type="text"
                      placeholder="email"
                      v-model="send.email"
                    ></b-form-input>
                  </b-input-group>

                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text class="iconPrepend">
                        <i class="fas fa-key"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>

                    <b-form-input
                      id="txtPassword"
                      type="password"
                      placeholder="Password"
                      v-model="send.password"
                    ></b-form-input>
                  </b-input-group>
                </div>
                
                <div class="col-lg-6">
                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text class="iconPrepend">
                        <i class="fas fa-user"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                      id="txtLastName"
                      type="text"
                      placeholder="Sobrenome"
                      v-model="send.lname"
                    ></b-form-input>
                  </b-input-group>

                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text class="iconPrepend">
                        <i class="fas fa-envelope"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>

                    <b-form-input
                      id="txtNumber"
                      type="text"
                      placeholder="Alumni Number"
                      v-model="send.nrAluno"
                    ></b-form-input>
                  </b-input-group>

                  <b-input-group class="mb-3">
                    <b-input-group-prepend>
                      <b-input-group-text class="iconPrepend">
                        <i class="fas fa-key"></i>
                      </b-input-group-text>
                    </b-input-group-prepend>

                    <b-form-input
                      id="inputConfPassword"
                      type="password"
                      placeholder="Confirmar Password"
                      v-model="confPassword"
                    ></b-form-input>
                  </b-input-group>
                </div>
              </b-row>
              <b-button type="submit" id="btnSubmit">Registar</b-button>
            </b-form>
          </b-card-text>
        </b-card>
      </div>
    </b-container>
  </div> -->
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
        fname: "",
        lname: "",
        email: "",
        nrAluno: "",
        password: "",
        type: "user",
        cv: "",
        facebook: "",
        instagram: "",
        linkedin: "",
        photo: "",
        estado: "pendente",
        curso: "",
        pontos: 0,
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


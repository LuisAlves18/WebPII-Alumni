
<template>
  <div class="register">
    
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
  </div>
</template>

<style>

/* body {
  background-image: url("../assets/back.svg");
  background-repeat: no-repeat;
  background-size: 100%;
} */
#form-area {
  background-color: white;
}
.cardRegister {
  box-shadow: 0 0 15px #0f4c81;
  width: 50vw !important;

  margin-top: 5vw;
}
.input{
  margin:0.5vh
}
.iconPrepend {
  background-color: #e2583e !important;
  color: white;
}

#btnSubmit {
  border-radius:16px;
  background-color: #e2583e;
  width: 100px;
  border: none;
}
#msgHelp {
  font-size: 13px;
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
        type: 'user',
        cv: '',
        facebook:'',
        instagram:'',
        linkedin:'',
        photo: '',
        estado: 'pendente',
        curso: '',
        pontos: 0
      }
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
          alert('Passwords não coincidem!')
        }
        
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>


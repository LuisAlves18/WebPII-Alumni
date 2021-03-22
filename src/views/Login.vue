<template>
  <div class="login">
    
    <router-link to="/auth/login">Login</router-link> |
    <router-link to="/auth/Register">Register</router-link>

    <b-container class="d-flex justify-content-center">
      <div>
        <b-card class="cardLogin">
          <b-card-title>
            <img src="../assets/logo/blueLogo.png" class="logoImg" />
          </b-card-title>
          <b-card-text>
            <b-form id="form-login" @submit.prevent="login">
              <div class="col-lg-12">
                <b-input-group class="mb-2">
                  <b-input-group-prepend>
                    <b-input-group-text class="iconPrepend iconLogin">
                      <i class="fas fa-envelope"></i>
                    </b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input
                    type="text"
                    class="inputLogin"
                    placeholder="Email"
                    v-model="email"
                  ></b-form-input>
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text class="iconPrepend iconLogin"
                      ><i class="fas fa-key"></i
                    ></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input
                    type="password"
                    class="inputLogin"
                    placeholder="Password"
                    v-model="password"
                  ></b-form-input>
                </b-input-group>
              </div>

              <b-button type="submit" id="btnSubmit">Login</b-button>
            </b-form>
            <p class="registerMsg">
              Ainda não tens conta?
              <span
                ><router-link :to="{ name: 'Register' }" class="registerAnchor"
                  >Registar</router-link
                ></span
              >
            </p>
          </b-card-text>
        </b-card>
      </div>
    </b-container>
  </div>
</template>
<style>
/* html {
  background-image: url("../assets/back.svg");
  background-repeat: no-repeat;
  background-size: 100%;
} */
.cardLogin {
  box-shadow: 0 0 15px #0f4c81;
  width: 30vw !important;
  margin-top: 5vw;
}
.iconLogin {
  background-color: #e2583e !important;
  color: white;
}
.inputLogin:focus {
  box-shadow: none !important;
  border: 1px solid rgb(102, 184, 255);
}
.logoImg {
  width: 150px;
  margin-bottom: 15px;
  margin-top: 15px;
}

#btnSubmit {
  border-radius: 5px;
  background-color: #e2583e;
  width: 100px;
  border: none;
}
#btnSubmit:focus {
  outline: none !important;
  box-shadow: none !important;
}
.registerMsg {
  padding-top: 15px;
  font-size: 13px;
}
.registerAnchor:hover {
  color: #e2583e;
  transition: 0.5s ease-in-out;
  text-decoration: none !important;
}
</style>
<script>
/* eslint-disable */
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      try {
        //chamar ação login
        this.$store.dispatch("login", this.$data);
        //saltar para a view Home
        this.$router.push({ name: "Home" });
      } catch (error) {
        alert(error);
      }
    },
  },
};
</script>



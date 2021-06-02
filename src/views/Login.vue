<template>
  <div class="row justify-content-center rowLogin">
    <div class="left">
      <div class="contentLeft">
        <form id="form-login" @submit.prevent="login">
          <h4>Sign In</h4>
          <input
            type="email"
            class="form-control inputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            v-model="email"
          />
          <input
            type="password"
            class="form-control inputPassword"
            aria-describedby="passwordHelp"
            placeholder="Password"
            v-model="password"
          />
          <button type="submit" class="btn btnLogin" id="btnSubmit">
            Login
          </button>
        </form>
      </div>
    </div>
    <div class="right">
      <div class="rightContent">
        <img class="imgLogin" src="../assets/logo/whiteLogo.png" />
        <p>
          O teu FUTURO começa agora! Propostas de Emprego, Eventos e muito mais
        </p>
        <button class="btn btnRegister">
          <router-link :to="{ name: 'Register' }" class="registerAnchor"
            >Registar</router-link
          >
        </button>
      </div>
    </div>
  </div>

  <!-- <div class="login">
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
  </div> -->
</template>
<style>
.rowLogin {
  margin-top: 100px;
  margin-bottom: 100px;
}
.left {
  width: 350px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: rgba(15, 76, 129, 0.4) 0px 10px 20px,
    rgba(200, 200, 200, 0.23) 0px 6px 6px;
}

.contentLeft {
  padding: 85px 30px 85px 30px;
}

.leftContent h4 {
  margin-bottom: 20px;
}

.inputEmail {
  margin-bottom: 10px;
}

.inputPassword {
  margin-bottom: 15px;
}

.btnLogin {
  background-color: #ff4b2b !important;
  color: white;
  border-radius: 500px !important;
  text-transform: uppercase;
}

.btnLogin:hover {
  color: white;
  text-decoration: underline;
}

.right {
  width: 350px;
  background: rgb(70, 117, 158);
  background: linear-gradient(
    0deg,
    rgba(70, 117, 158, 1) 0%,
    rgba(15, 76, 129, 1) 100%
  );
  color: white;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: rgba(15, 76, 129, 0.4) 0px 10px 20px 0px,
    rgba(200, 200, 200, 0.23) 0px 6px 16px 0px;
}

.rightContent {
  padding: 85px 30px 85px 30px;
}

.imgLogin {
  width: 90px;
  margin-bottom: 30px;
}

.btnRegister {
  color: white !important;
  border: 1px solid white;
  border-radius: 500px;
  text-transform: uppercase;
  margin-top: 12px;
}

.btnRegister:hover {
  color: white;
  text-decoration: underline;
}

.registerAnchor {
  color: white;
}

.registerAnchor:hover {
  color: white;
  text-decoration: underline;
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
<template>
  <nav class="navbar navbar-expand-lg">
    <a class="navbar-brand" href="#">
      <img src="../assets/logo/whiteLogo.png" width="90px" alt="" />
    </a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            <router-link class="navRouter" to="/">Home</router-link></a
          >
        </li>
        <li class="nav-item active">
          <a class="nav-link">
            <router-link class="navRouter" :to="{ name: 'Offers' }"
              >Ofertas</router-link
            >
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"
            ><router-link class="navRouter" :to="{ name: 'Events' }"
              >Eventos</router-link
            ></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"
            ><router-link class="navRouter" :to="{ name: 'Offers' }"
              >Social</router-link
            ></a
          >
        </li>
      </ul>

      <span v-if="!this.$store.getters.isLoggedUser">
        <router-link class="navRouter" :to="{ name: 'Login' }"
          >Login</router-link
        >
      </span>
      <div v-else>
        <b-nav-item-dropdown
          class="navDrop"
          :text="
            this.$store.getters.getLoggedUser.fname +
            this.$store.getters.getLoggedUser.lname
          "
          right
        >
          <b-dropdown-item>
            <router-link class="dropItem" :to="{ name: 'Profile' }"
              >Perfil</router-link
            >
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link class="dropItem" :to="{ name: 'Social' }"
              >Social</router-link
            >
          </b-dropdown-item>
          <b-dropdown-item>
            <span v-if="this.$store.getters.isLoggedAdmin">
              <router-link class="dropItem" :to="{ name: 'Admin' }"
                >Gestão de Entidades</router-link
              >
            </span>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link class="dropItem" @click.native="logout" to="/"
              >Logout</router-link
            >
          </b-dropdown-item>
        </b-nav-item-dropdown>
      </div>
    </div>
  </nav>

  <!-- <div id="navbar">
    <div id="nav">
      

      <router-link to="/">Home</router-link> |

      <router-link :to="{ name: 'Offers' }">Ofertas</router-link> |
      <span v-if="!this.$store.getters.isLoggedUser">
        <router-link :to="{ name: 'Login' }">Login</router-link> |
      </span>
      <span v-else>
        <router-link :to="{ name: 'Profile' }">Perfil</router-link> |
        <router-link :to="{ name: 'Social' }">Social</router-link> |
        <span>{{this.$store.getters.getLoggedUser.FName}} {{this.$store.getters.getLoggedUser.LName}}</span> |
        <router-link @click.native="logout" to="/">Logout</router-link> |
      </span>
      <span v-if="this.$store.getters.isLoggedAdmin">
        <router-link :to="{ name: 'Admin' }">Gestão de Entidades</router-link> |
      </span>
      <router-link :to="{ name: 'Highlights' }">Destaques</router-link>
      
    </div>
  </div> -->
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style>
.navbar {
  background-color: #0f4c81 !important;
  color: white !important;
}
.nav-link {
  margin-left: 30px;
}

.navRouter {
  color: white !important;
}
.navDrop {
  list-style: none !important;
}

.dropItem {
  color: rgb(30, 30, 30) !important;
}
a.dropdown-item:active {
  background: white !important;
}

.navRouter:hover {
  color: rgb(41, 171, 226) !important;
  transition: ease-in-out 0.3s !important;
  text-decoration: none;
}
</style>
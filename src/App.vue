<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view />
    <b-container>
      <Footer></Footer>
    </b-container>
  </div>
</template>
<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Archivo:wght@600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Archivo:wght@600;700&family=Lato&display=swap");
#app {
  font-family: "Lato", sans-serif;
  
  -webkit-font-smoothing: antialiased;
  font-display: auto;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h3 {
  font-family: "Archivo", sans-serif;
  font-weight: 700;
}

h4,
h5 {
  font-family: "Archivo", sans-serif;
  font-weight: 600;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


</style>

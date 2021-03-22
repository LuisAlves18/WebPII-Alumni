<template>
  <footer class="footer text-left text-lg-start">
    <!-- Grid container -->
    <div class="container p-4">
      <!--Grid row-->
      <div class="row">
        <!--Grid column-->
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Sobre Nós</h5>

          <p>
            
          </p>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Links Úteis</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" ><router-link to="/"><span id="footerRouter">Home</span></router-link></a>
            </li>
            <li>
              <a href="#!" id="footerRouter"><router-link :to="{ name: 'Offers' }"><span id="footerRouter">Ofertas</span></router-link></a>
            </li>
            <li>
              <a href="#!" id="footerRouter"><router-link :to="{ name: 'Events' }"><span id="footerRouter">Eventos</span></router-link></a>
            </li>
            <li>
                <a href="#!" id="footerRouter"><router-link  :to="{ name: 'Offers' }"><span id="footerRouter">Social</span></router-link></a>
            </li>
          </ul>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-0">Esmad</h5>
          <div class="moradaFooter">
            <p>Rua João de Deus</p>
            <p>Vila do Conde, 4470-005</p>
            <p>Portugal</p>
            <p>+35191423232</p>
          </div>
        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </div>
    <!-- Grid container -->
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style>

#footerRouter{
    color:black;
    text-decoration: none;
}
.footer {

  background-color: white;
  margin-top: 50px;
  border-top: 4px solid #0f4c81;
}
.moradaFooter {
  margin-top: 15px;
  line-height: 5px;
}
</style>
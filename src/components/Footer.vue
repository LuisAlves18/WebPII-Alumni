<template>
  <!-- Footer -->
  <footer class="text-lg-start bg-light text-muted footer">
    <!-- Section: Social media -->

    <!-- Section: Links  -->
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4 pt-4">Sobre Nós</h6>
            <p class="text-justify">
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 pt-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Links Úteis</h6>
            <p>
              <a href="#!" class="teste"
                ><router-link to="/"
                  ><span id="footerRouter">Home</span></router-link
                ></a
              >
            </p>
            <p>
              <a href="#!"
                ><router-link :to="{ name: 'Offers' }"
                  ><span id="footerRouter">Ofertas</span></router-link
                ></a
              >
            </p>
            <p>
              <a href="#!"
                ><router-link :to="{ name: 'Events' }"
                  ><span id="footerRouter">Eventos</span></router-link
                ></a
              >
            </p>
            <p>
              <a href="#!" class="tro"
                ><router-link :to="{ name: 'Offers' }"
                  ><span id="footerRouter">Social</span></router-link
                ></a
              >
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 pt-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">ESMAD</h6>
            <p><i class="fas fa-home me-3"></i> R. Dom Sancho I, 4480-876</p>
            <p>
              <i class="fas fa-envelope me-3"></i>
              geral@esmad.ipp.pt
            </p>
            <p><i class="fas fa-phone me-3"></i> +351 252 291 700</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
  </footer>
  <!-- Footer -->
  <!-- <footer class="footer text-left text-lg-start">
   
    <div class="container p-4">
    
      <div class="row">
      
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Sobre Nós</h5>
        </div>
       
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Links Úteis</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!"
                ><router-link to="/"
                  ><span id="footerRouter">Home</span></router-link
                ></a
              >
            </li>
            <li>
              <a href="#!" id="footerRouter"
                ><router-link :to="{ name: 'Offers' }"
                  ><span id="footerRouter">Ofertas</span></router-link
                ></a
              >
            </li>
            <li>
              <a href="#!" id="footerRouter"
                ><router-link :to="{ name: 'Events' }"
                  ><span id="footerRouter">Eventos</span></router-link
                ></a
              >
            </li>
            <li>
              <a href="#!" id="footerRouter"
                ><router-link :to="{ name: 'Offers' }"
                  ><span id="footerRouter">Social</span></router-link
                ></a
              >
            </li>
          </ul>
        </div>
        
        <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase mb-0">Esmad</h5>
          <div class="moradaFooter">
            <p>Rua João de Deus</p>
            <p>Vila do Conde, 4470-005</p>
            <p>Portugal</p>
            <p>+35191423232</p>
          </div>
        </div>
        
      </div>
   
    </div>
    
  </footer> -->
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
.footer {
  background-color: #0f4c81 !important;
  color: white !important;
}
#footerRouter {
  color: white;
}

/* #footerRouter {
  color: white;
  text-decoration: none;
}
.footer {
  background-color: #0f4c81;
  margin-top: 50px;
  color: white;
}
.moradaFooter {
  margin-top: 15px;
  line-height: 5px;
} */
</style>
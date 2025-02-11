<template>
  <div id="app" data-app>
    <div>
      <Navbar />
    </div>
    <div class="app-container">
      <router-view />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "./views/Navbar.vue";
import Footer from "./views/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
  name: "AppVue",
};
</script>
<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
}
</style>

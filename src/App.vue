<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <router-view />
    <FooterComponent></FooterComponent>
  </div>
</template>

<style lang="scss">
body {
  padding-bottom: 5%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  #home {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 20px;
  }
  /*.center {
    text-align: center;
  }
  .headline {
    text-transform: uppercase;
    margin: 4rem auto;
    font-size: 4rem;
  }

  h2 {
    color: #35495e;
    text-transform: capitalize;
    margin-bottom: 2rem;
  }*/
}
</style>
<script>
import HeaderComponent from "@/components/layout/HeaderComponent.vue";
import FooterComponent from "@/components/layout/FooterComponent.vue";
export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
};
</script>

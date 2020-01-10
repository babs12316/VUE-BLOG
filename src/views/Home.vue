<!--<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>

import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
-->

<template>
  <div>
    <Articles></Articles>
  </div>
</template>

<script>
import Articles from "./Articles.vue";
export default {
  name: "articles",
  components: {
    Articles
  }
};
</script>

<style lang="scss" scoped></style>

<template>
  <div id="app">
    <div id="nav">
      <h1 class="headline center">Vue blog</h1>
      <router-link to="/" id="home">Home</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
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
  .center {
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
  }
}
</style>

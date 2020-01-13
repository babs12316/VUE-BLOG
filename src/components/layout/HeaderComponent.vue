<template>
  <div class="header">
    <h1 class="headline center"><a href="/">Vue Blog</a></h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0px;
  width: 100%;
  background: slategray;
  h1 {
    a {
      color: #fff;
    }
    a:hover {
      text-decoration: none;
    }
  }
  .center {
    text-align: center;
  }
  .headline {
    text-transform: uppercase;
    font-size: 3rem;
    color: #fff;
  }
}
</style>

<template>
  <div id="footer">
    @Deepak
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#footer {
  position: fixed;
  bottom: 0px;
  font-size: 2rem;
  width: 100%;
  color: #fff;
  background: slategray;
  height: 5%;
  display: none;
}
@media only screen and (min-width: 768px) {
  #footer {
    display: inherit;
  }
}
</style>

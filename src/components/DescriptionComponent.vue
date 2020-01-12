<template>
  <div class="description">
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ["description"]
};
</script>

<style lang="scss" scoped>
.description {
  font-size: 15px;
  font-weight: 300;
  text-align: justify;
  width: 70%;
  margin: auto;
}
.description p {
  margin-top: 3%;
}
</style>

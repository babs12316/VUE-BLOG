<template>
  <div class="title">
    {{ title }}
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 14px;
}
</style>

<template>
    <div class="myimage">
          <img :src="image">
    </div>
</template>

<script>
    export default {
         props: ['image'],
    }
</script>

<style lang="scss" scoped>
img {
  display: block;
    margin: 0 auto 15px;
    width:100%;
}

</style>
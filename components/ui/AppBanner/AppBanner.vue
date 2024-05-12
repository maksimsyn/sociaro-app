<template lang="pug">
  .banner
    figure.banner__figure
      img(
        :src='src'
        width='1440'
        height='506'
        alt='Banner'
        ).banner__img
</template>

<script>
  export default {
    name: 'AppBanner',
    props: {
      src: {
        type: String,
        default: '',
        required: true,
      },
      width: {
        type: Number,
        default: 1440
      },
      height: {
        type: Number,
        default: 506
      }
    }
  };
</script>

<style lang="sass">
  @import "AppBanner"
</style>

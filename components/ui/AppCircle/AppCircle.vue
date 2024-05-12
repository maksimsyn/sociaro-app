<template lang="pug">
  figure.circle
    img(
      :src='src'
      ref='circle'
      :width='width'
      :height='height'
      ).circle__img
</template>

<script>
  export default {
    name: 'AppCircle',
    props: {
      src: {
        type: String,
        default: '',
        required: true,
      },
      width: {
        type: Number,
        default: 512,
      },
      height: {
        type: Number,
        default: 512
      },
    },
    mounted() {
      window.addEventListener('scroll', this.rotateCircle, {
        passive: true,
      });
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.rotateCircle);
    },
    methods: {
      rotateCircle() {
        const circlePosition = Math.round(window.pageYOffset / window.innerHeight * 100);
        this.$refs.circle.style.transform = `rotate(${circlePosition}deg)`;
      }
    }
  };
</script>

<style lang="sass">
  @import "AppCircle"
</style>

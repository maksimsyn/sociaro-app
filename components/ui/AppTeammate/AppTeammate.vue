<template lang="pug">
  article.teammate.tile
    strong.teammate__post {{post}}
    figure.teammate__figure.tile__figure
      canvas(:id='id')
      picture.teammate__picture
        img(
          ref='image'
          :src='imageFirst'
          width='292'
          height='300'
          :data-hover='imageSecond'
        ).teammate__img.tile__image
      figcaption.teammate__name.title.title_size_xs(v-html='name')
</template>

<script>
  import { gsap, CSSPlugin } from 'gsap/all';
  import nanoid from 'nanoid';
  import Scene from '@/plugins/about/Scene';
  gsap.registerPlugin(CSSPlugin);

  export default {
    name: 'AppTeammate',
    props: {
      imageFirst: {
        type: String,
        default: '',
        required: true,
      },
      imageSecond: {
        type: String,
        default: '',
        required: true,
      },
      post: {
        type: String,
        default: '',
        required: true,
      },
      name: {
        type: String,
        default: '',
        required: true,
      },
    },
    data() {
      return {
        id: null,
      };
    },
    mounted() {
      this.id = `teammate-{${nanoid()}`;
      this.$nextTick(() => {
        window.scene = new Scene(this.id, this.$refs.image);
      });
    },
  };
</script>

<style lang="sass">
  @import "AppTeammate"
</style>

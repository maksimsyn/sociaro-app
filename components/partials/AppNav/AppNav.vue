<template lang="pug">
  nav.main-nav(
    :class='{"main-nav_visible" : isNavVisible}'
  )
    .main-nav__inner
      figure.main-nav__figure
        picture.main-nav__picture
          img(src='/img/circle.svg' width='510' height='510').main-nav__img
      ul.main-nav__list
        li(
          v-for='(link, index) of links'
          :key='`link-${index}`'
          ).main-nav__item
          nuxt-link(
            :to='link.link'
            :data-name='link.name'
            ).main-nav__link {{link.name}}
      AppSocials.main-nav__socials
</template>

<script>
  import AppSocials from '@/components/ui/AppSocials/AppSocials';

  export default {
    name: 'AppNav',
    components: { AppSocials },
    props: {
      isNavVisible: {
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
        links: [
          {
            name: 'About',
            link: '/about',
          },
          {
            name: 'Projects',
            link: '/projects',
          },
          {
            name: 'Contacts',
            link: '/contacts',
          },
        ],
      };
    }
  };
</script>

<style lang="sass">
  @import "AppNav"
</style>

<template lang="pug">
  footer.page-footer
    .page-footer__container.container
      .page-footer__top
        .page-footer__col
          nuxt-link(to='/').page-footer__home
            img(src='/img/logo-white.svg' width='118' height='26' alt='Sociaro').page-footer__logo
          p.page-footer__desc Aute incididunt et nulla in cupidatat incididunt consequat dolore proident #[br] ad dolor. Veniam anim anim.
        .page-footer__col
          h2.page-footer__title Menu
          ul.page-footer__list
            li.page-footer__item
              nuxt-link(to='/').page-footer__link.page-footer__link_upper Home
            li.page-footer__item
              nuxt-link(to='/about').page-footer__link.page-footer__link_upper About
            li.page-footer__item
              nuxt-link(to='/projects').page-footer__link.page-footer__link_upper Projects
        .page-footer__col
          h2.page-footer__title Sociaro usa
          ul.page-footer__list
            li.page-footer__item
              a(
                target='_blank'
                rel='noopener noreferrer nofollow'
                href='https://www.google.ru/maps/place/1355+E+18th+St+%235N,+Brooklyn,+NY+11230,+%D0%A1%D0%A8%D0%90/@40.6173781,-73.9590453,17z/data=!3m1!4b1!4m5!3m4!1s0x89c244bf28d947d3:0xaf1097c730da770a!8m2!3d40.617374!4d-73.9568566'
                ).page-footer__link 1355 East 18th Street #5N #[br] Brooklyn, NY 11230
            li.page-footer__item
              a(href='tel:+1-929-332-96-51').page-footer__link +1-929-332-96-51
            li.page-footer__item
              a(href='mailto:hello@sociaro.com').page-footer__link hello@sociaro.com
        .page-footer__col
          h2.page-footer__title Sociaro russia
          ul.page-footer__list
            li.page-footer__item
              a(
                target='_blank'
                rel='noopener noreferrer nofollow'
                href='https://www.google.ru/maps/place/%D0%A1%D0%BF%D0%B0%D1%80%D1%82%D0%B0%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D0%BF%D0%B5%D1%80.,+2,+33,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+105082/@55.7755082,37.678104,17z/data=!3m1!4b1!4m5!3m4!1s0x46b5357e8e5ec689:0xe9e03d0b6f2d235!8m2!3d55.7755052!4d37.6802927'
                ).page-footer__link 33, 2c1, Spartakovskiy pereulok, #[br] Moscow, Russia, 105082
            li.page-footer__item
              a(href='tel:+7-495-229-42-54').page-footer__link +7-495-229-42-54
            li.page-footer__item
              a(href='mailto:hello@sociaro.com').page-footer__link hello@sociaro.com
        .page-footer__col
          form.page-footer__form
            input(type='search' placeholder='Search').page-footer__input.no-outline
            button(type='submit').page-footer__search
              svg-icon(
                name='icon-search'
                width='22'
                height='18'
              )
          .page-footer__socials
            span.page-footer__subject Follow us:
            ul.page-footer__socials-list
              li.page-footer__socials-item
                a(href='#' data-hover-icon).page-footer__socials-link
                  svg-icon(
                    name='icon-facebook-white'
                    width='8'
                    height='17'
                  )
              li.page-footer__socials-item
                a(href='#' data-hover-icon).page-footer__socials-link
                  svg-icon(
                    name='icon-twitter-white'
                    width='19'
                    height='13'
                  )
              li.page-footer__socials-item
                a(href='#' data-hover-icon).page-footer__socials-link
                  svg-icon(
                    name='icon-insta-white'
                    width='17'
                    height='17'
                  )
      .page-footer__bottom
        small.page-footer__copy.page-footer__small-link © 2024 © All rights reserved, Sociaro. 2020 | Moscow | New York
        nuxt-link(to='/').page-footer__small-link Terms of Use
        nuxt-link(to='/').page-footer__small-link Personal information
</template>

<script>
  import AppSocials from '@/components/ui/AppSocials/AppSocials';

  export default {
    name: 'AppFooter',
    components: { AppSocials },
  };
</script>

<style lang="sass">
  @import "AppFooter"
</style>

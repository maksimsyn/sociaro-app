<template lang="pug">
  section.intro
    .intro__content
      button(type='button' data-hover-icon).intro__scroll-down Scroll down
      button(type='button' data-hover-icon).intro__arrow.intro__arrow_left
        svg-icon(
          name='icon-arrow'
          width='7'
          hidht='14'
        )
      button(type='button' data-hover-icon).intro__arrow.intro__arrow_right
        svg-icon(
          name='icon-arrow'
          width='7'
          hidht='14'
        )
      client-only
        swiper(
          ref='swiper'
          :options='swiperOptions'
          @slideChange='onSlideChange'
        ).intro__slider
          swiper-slide(
            v-for='(slide, index) of slides'
            :key='`slide-${index}`'
            ).intro__slide
            .intro__box
              .intro__col.intro__col_left
                .intro__counter-wrapper
                  strong.intro__counter 0{{index + 1}}
                .intro__title-wrapper
                  h2.intro__title.title.title_size_m(v-html='slide.title')
                .intro__desc-wrapper
                  p.intro__desc(v-html='slide.desc')
                .intro__btn-wrapper
                  nuxt-link(:to='slide.link').intro__btn.btn.btn_color_red Learn more
              .intro__col.intro__col_right(data-hover-target)
                nuxt-link(to='/project').intro__link
                  figure.intro__figure
                    picture.intro__picture
                      img(:src='slide.img').intro__img
                      .intro__cover
</template>

<script>
  import { gsap, CSSPlugin } from 'gsap/all';
  gsap.registerPlugin(CSSPlugin);

  export default {
    name: 'AppIntro',
    data() {
      return {
        slides: [
          {
            label: 'nekki',
            title: 'Nekki Games',
            img: '/img/project-1.jpg',
            desc: '400% increase in purchases with an increase <br> in SRO by only 8%',
            link: '/project',
          },
          {
            label: 'instamart',
            title: 'Instamart',
            img: '/img/slide-2.jpg',
            desc: '400% increase in purchases with an increase <br>  in SRO by only 8%',
            link: '/project',
          },
          {
            label: 'plarium',
            title: 'Plarium',
            img: '/img/slide-3.jpg',
            desc: '400% increase in purchases with an increase <br>  in SRO by only 8%',
            link: '/project',
          },
        ],
        swiperOptions: {
          grabCursor: true,
          direction: 'horizontal',
          resistanceRatio: 1,
          slidesPerView: 1,
          longSwipes: true,
          touchRatio: 1,
          spaceBetween: 0,
          speed: 1000,
          navigation: {
            nextEl: '.intro__arrow_right',
            prevEl: '.intro__arrow_left'
          },
        },
      };
    },
    mounted() {
      this.$nextTick(() => {
        gsap.fromTo(document.querySelector('.intro__cover'),
          {
            duration: 1,
            scaleX: 1,
            transformOrigin: 'left'
          },
          {
            duration: 1,
            scaleX: 0,
            delay: 0.3,
            transformOrigin: 'right'
          }
          );
      });
    },
    methods: {
      onSlideChange() {
        const swiper = this.$refs.swiper.swiper;
        const index = swiper.activeIndex;
        gsap.fromTo(document.querySelectorAll(`.intro__slide:nth-of-type(${index + 1}) .intro__cover`),
          {
            duration: 1,
            scaleX: 1,
            transformOrigin: 'left'
          },
          {
            duration: 1,
            scaleX: 0,
            transformOrigin: 'left'
          }
        );
      }
    }
  };
</script>

<style lang="sass">
  @import "AppIntro"
</style>

<template lang="pug">
  .project
    .project__intro
      button(
        :style='{"color": slides[currentIntroSlide].color}'
        type='button'
        data-hover-icon
        v-scroll-to="{el: '#project-content', duration: 1000, ease: 'ease-in-out'}"
      ).project__scroll-down Scroll down to #[br] explore the project
        svg-icon(
          name='icon-arrow-long'
          width='8'
          height='54'
          :fill='slides[currentIntroSlide].color'
        )
      nuxt-link(
        to='/projects'
        data-hover-icon
        :style='{"color": slides[currentIntroSlide].color}'
      ).project__all-projects
        svg-icon(
          name='icon-arrow'
          width='7'
          height='14'
          :stroke='slides[currentIntroSlide].color'
        )
        | All project
      ul.project__pagination
        li(v-for='(btn, index) of slides').project__page
          button(
            type='button'
            data-hover-icon
            @click='setIntroSlide(index)'
            :class='{"project__page-btn_active" : currentIntroSlide === index}'
            :style='{"backgroundColor": slides[currentIntroSlide].color, "color": slides[currentIntroSlide].color}'
            ).project__page-btn
      client-only
        img(:src='slides[0].img' slot='placeholder').project__placeholder
        swiper(
          ref='projectSwiper'
          :options='introSliderOptions'
          @slideChange='setIntroCurrentSlide'
        ).project__intro-slider
          swiper-slide.project__intro-slide(
              v-for='(slide, index) of slides'
              :key='`slide-${index}`'
              :style="{ 'background-image': `url('${slide.img}')` }"
          )
            .project__slide-container.container
              h2(
                :style='{"color": slides[currentIntroSlide].color}'
                :data-animation='index === 0 ? "fade-up" : ""'
                data-delay='200'
                ).project__slide-title.title.title_size_m {{slide.title}}
              p(
                :style='{"color": slides[currentIntroSlide].color}'
                :data-animation='index === 0 ? "fade-up" : ""'
                data-delay='250'
                ).project__slide-text {{slide.text}}

    .project__content#project-content
      .project__heading.will-change(data-animation='fade-up' data-delay='200')
        .project__container.container
          .project__inner.project__inner_border-top
            .project__col.project__col_bordered.project__col_left
              p.project__text.project__text_mb Tinkoff Platinum #[br] credit card application
              time.project__subtitle 2017 - 2018
            .project__col.project__col_bordered.project__col_right
              p.project__lead Velit aliquip do sunt reprehenderit excepteur nisi nisi nisi ullamco excepteur ad. Pariatur amet officia enim id commodo deserunt consequat aute consectetur consequat et aliquip eveniam.
      .project__about.will-change(data-animation='fade-up' data-delay='250')
        .project__container.container
          .project__inner.project__inner_border-bottom
            .project__col.project__col_left.project__col_padding
              ul.project__grid
                li.project__grid-item
                  h3.project__subtitle Client
                  p.project__text Tinkoff Bank
                li.project__grid-item
                  h3.project__subtitle Channel
                  p.project__text Google Ads
                li.project__grid-item
                  h3.project__subtitle CEO
                  p.project__text Russian Federation
            .project__col.project__col_right.project__col_padding
              .project__box
                h3.project__subtitle Goal
                p.project__text Ipsum eu esse enim nostrud laboris voluptate in cillum voluptate ipsum aute cillum. Enim deserunt minim aliquip ipsum aute occaecat laboris ea. Aute excepteur id incididunt ex pariatur nostrud quis eiusmod. Nulla adipisicing qui amet  incididunt non cupidatat esse.
              .project__box
                h3.project__subtitle Achivements
                p.project__text 10,000+ applications monthly with a positive ROI
              ul.project__stats
                li(v-for='graph of graphs').project__stat
                  AppChart(:graph='graph')
      .project__goal.will-change(data-animation='fade-up' data-delay='200')
        AppCircle(:src='"/img/circle-dot.svg"' :width='436' :height='441').project__circle
        .project__container.container
          h2.project__title.title.title_size_s Goal
          p.project__lead.project__goal-lead Seitán, jaca, heura, quorn are a few of the foods that are currently trending. Some are millenary while others are products of the healthy food industry. Maybe you have heard of them or have had the privilege of trying them because the truth of it is that healthy eating is hard-hitting.
          .project__description
            p.project__small Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum ligula, hendrerit non dolor varius, sagittis tincidunt eros. Morbi quis tellus viverra, egestas ipsum vel, venenatis nisi. Maecenas eget nisl lectus. Nulla sit amet tempus leo.
            p.project__small Donec sit amet elit nec nisl viverra fermentum nec ut metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse consectetur tortor magna, et malesuada augue accumsan sed. Ut auctor orci id faucibus faucibus. Nam luctus erat in turpis sodales tempus. Ut auctor orci id faucibus faucibus.

    AppSlider(:slides='goals' data-animation='fade-up' data-delay='200').project__goals.will-change

    AppVideo(:link='"https://www.youtube.com/embed/GOrbaqwdFFM?rel=0"' data-animation='fade-up' data-delay='200').project__video.will-change

    .project__solutions.will-change(data-animation='fade-up' data-delay='200')
      .project__container.container
        h2.project__title.title.title_size_xs solutions
        p.project__lead.project__solutions-lead Seitán, jaca, heura, quorn are a few of the foods that are currently trending. Some are millenary while others are products of the healthy food industry. Maybe you have heard of them or have had the privilege of trying them because the truth of it is that healthy eating is hard-hitting.
        .project__subtext
          h3.project__subject Lorem ipsum
          p.project__solution-text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum ligula, hendrerit non dolor varius, sagittis tincidunt eros. Morbi quis tellus viverra, egestas ipsum vel, venenatis nisi. Maecenas eget nisl lectus. Nulla sit amet tempus leo.
          ul.project__solution-list
            li.project__solution-item Lorem ipsum
            li.project__solution-item Lorem ipsum
            li.project__solution-item Lorem ipsum
            li.project__solution-item Lorem ipsum
            li.project__solution-item Lorem ipsum
            li.project__solution-item Lorem ipsum
            li.project__solution-item Lorem ipsum
            li.project__solution-item Lorem ipsum

    AppBanner(:src='"/img/banner.jpg"').project__banner
    AppPagination.project__projects
</template>

<script>
  import sal from 'sal.js';
  import AppPagination from '@/components/ui/AppPagination/AppPagination';
  import AppSlider from '@/components/ui/AppSlider/AppSlider';
  import AppVideo from '@/components/ui/AppVideo/AppVideo';
  import AppChart from '@/components/ui/AppChart/AppChart';
  import AppCircle from '@/components/ui/AppCircle/AppCircle';
  import AppBanner from '@/components/ui/AppBanner/AppBanner';

  export default {
    name: 'AppProject',
    components: { AppBanner, AppCircle, AppChart, AppVideo, AppSlider, AppPagination },
    data() {
      return {
        currentIntroSlide: 0,
        introSliderOptions: {
          slidesPerView: 1,
          speed: 1000,
          effect: 'fade',
          fadeEffect: {
            crossFade: true
          },
        },
        slides: [
          {
            title: 'tinkoff bank',
            text: 'Aliqua ex eu do et cillum culpa consequat officia voluptate. Adipisicing pariatur aute pariatur aliqua voluptate velit do deserunt tempor minim.',
            img: '/img/project-1.jpg',
            color: '#ffffff',
          },
          {
            title: 'tinkoff bank2',
            text: 'Aliqua ex eu do et cillum culpa consequat officia voluptate. Adipisicing pariatur aute pariatur aliqua voluptate velit do deserunt tempor minim.',
            img: '/img/project.jpg',
            color: '#030303',
          },
          {
            title: 'tinkoff bank3',
            text: 'Aliqua ex eu do et cillum culpa consequat officia voluptate. Adipisicing pariatur aute pariatur aliqua voluptate velit do deserunt tempor minim.',
            img: '/img/project.jpg',
            color: '#030303',
          },
          {
            title: 'tinkoff bank4',
            text: 'Aliqua ex eu do et cillum culpa consequat officia voluptate. Adipisicing pariatur aute pariatur aliqua voluptate velit do deserunt tempor minim.',
            img: '/img/project.jpg',
            color: '#030303',
          },
          {
            title: 'tinkoff bank5',
            text: 'Aliqua ex eu do et cillum culpa consequat officia voluptate. Adipisicing pariatur aute pariatur aliqua voluptate velit do deserunt tempor minim.',
            img: '/img/project.jpg',
            color: '#030303',
          },
        ],
        goals: [
          {
            title: `ad campaign <br> visuals`,
            img: '/img/goal-1.jpg',
          },
          {
            title: `ad campaign <br> visuals`,
            img: '/img/goal-2.jpg',
          },
          {
            title: `ad campaign <br> visuals`,
            img: '/img/goal-1.jpg',
          },
          {
            title: `ad campaign <br> visuals`,
            img: '/img/goal-2.jpg',
          },
          {
            title: `ad campaign <br> visuals`,
            img: '/img/goal-1.jpg',
          },
          {
            title: `ad campaign <br> visuals`,
            img: '/img/goal-2.jpg',
          },
          {
            title: `ad campaign <br> visuals`,
            img: '/img/goal-2.jpg',
          },
          {
            title: `ad campaign <br> visuals`,
            img: '/img/goal-1.jpg',
          },
          {
            title: `ad campaign <br> visuals`,
            img: '/img/goal-2.jpg',
          },
          {
            title: `ad campaign <br> visuals`,
            img: '/img/goal-1.jpg',
          },
          {
            title: `ad campaign <br> visuals`,
            img: '/img/goal-2.jpg',
          },
        ],
        graphs: [
          {
            value: 65,
            title: 'Pariatur nostrud <br> quis eiusmod'
          },
          {
            value: 35,
            title: 'Pariatur nostrud <br> quis eiusmod'
          },
          {
            value: 81,
            title: 'Pariatur nostrud <br> quis eiusmod'
          },
        ],
      };
    },
    mounted() {
      this.$nextTick(() => {
        if (this.slides[this.currentIntroSlide].color === '#ffffff') {
          this.$store.commit('setWhiteHeader', true);
        } else {
          this.$store.commit('setWhiteHeader', false);
        }
        sal();
      });
    },
    methods: {
      setIntroSlide(index) {
        const swiper = this.$refs.projectSwiper.swiper;
        swiper.slideTo(index, 1000);
      },
      setIntroCurrentSlide() {
        const swiper = this.$refs.projectSwiper.swiper;
        const activeIndex = swiper.activeIndex;
        this.currentIntroSlide = activeIndex;

        if (this.slides[activeIndex].color === '#ffffff') {
          this.$store.commit('setWhiteHeader', true);
        } else {
          this.$store.commit('setWhiteHeader', false);
        }
      },
    },
  };
</script>

<style lang="sass">
  @import "AppProject"
</style>

<template lang="pug">
  .slider
    client-only
      swiper(
        ref='goalSwiper'
        :options='goalSliderOptions'
        @slideChange='onGoalsSliderChange'
        @setTranslate='onGoalsSliderTranslate'
      ).slider__slider
        swiper-slide(
          v-for='(slide, index) of slides'
          :ref='`slide${index}`'
          :key='`slide-${index}`'
        ).slider__goal-slide
          .slider__goal-slide-box(data-hover-icon)
            h2(v-html='slide.title').slider__goal-title.title.title_size_xs
            figure.slider__goal-img
              img(:src='slide.img' width='500' height='240').slider__img
    .slider__goal-drag
      button(
        type='button'
        @click='setGoalSlide(currentGoal - 1)'
        data-hover-icon
        ).slider__goal-arrow.slider__goal-arrow_left
        svg-icon(
          width='7'
          height='14'
          name='icon-arrow'
        )
      .slider__dragger(
        ref='scroller'
        )
        .slider__dragger-bound(
          ref='scrollerThumb'
          :style='{width: getThumbWidth}'
          data-hover-icon
          )
      button(
        type='button'
        @click='setGoalSlide(currentGoal + 1)'
        data-hover-icon
        ).slider__goal-arrow.slider__goal-arrow_right
        svg-icon(
          width='7'
          height='14'
          name='icon-arrow'
        )
</template>

<script>
  import { gsap, CSSPlugin, Draggable } from 'gsap/all';
  import swiperTranslateTo from '@/plugins/swiperTranslateTo';
  const VanillaTilt = () => import('vanilla-tilt');

  export default {
    name: 'AppSlider',
    props: {
      slides: {
        type: Array,
        default: () => [],
        required: true,
      }
    },
    data() {
      return {
        goalSliderOptions: {
          spaceBetween: 34,
          slidesPerView: 'auto',
          speed: 1000,
        },
        isDragging: false,
        isMounted: false,
        currentGoal: 0,
        tilt: null,
      };
    },
    computed: {
      getThumbWidth() {
        if (this.isMounted) {
          const scroller = this.$refs.scroller;
          return `${scroller.getBoundingClientRect().width / this.slides.length}px`;
        }
        return '200px';
      }
    },
    async mounted() {
      this.isMounted = true;
      this.tilt = await VanillaTilt();
      this.tilt.init(document.querySelectorAll('.slider__goal-slide'), {
        glare: true,
        'max-glare': 0.8,
        speed: 1000,
        reverse: true,
      });

      this.doubleRaf(() => {
        const scroller = this.$refs.scroller;
        const scrollerThumb = this.$refs.scrollerThumb;
        const firstSlide = this.$refs.slide0[0].$el;
        gsap.registerPlugin(CSSPlugin, Draggable);
        this.$refs.goalSwiper.swiper.translateTo = swiperTranslateTo;
        const shrinkSlides = () => {
          gsap.to(
            '.slider__goal-slide-box',
            0.3,
            {
              scale: 0.8,
              delay: 0,
            }
          );
        };
        const growSlides = () => {
          gsap.to(
            '.slider__goal-slide-box',
            0.3,
            {
              scale: 1,
              delay: 0.2,
            }
          );
        };
        const onDragStart = () => {
          this.isDragging = true;
          shrinkSlides();
          document.querySelectorAll('.slider__goal-slide').forEach((item) => {
            item.classList.add('swiper-slide-active');
          });
        };
        const onDragEnd = () => {
          this.isDragging = false;
          growSlides();
        };
        const onDrag = () => {
          const x = draggable[0].x;
          const screenWidth = window.screen.width - parseInt(window.getComputedStyle(firstSlide)['margin-left'], 10);
          const fullWidth = (500 * this.slides.length) + (34 * this.slides.length - 1);
          const scrollerWidth = scrollerThumb.getBoundingClientRect().width;
          const scrollWidth = scroller.getBoundingClientRect().width;
          const maxScreenX = fullWidth - screenWidth;
          const maxScrollerX = scrollWidth - scrollerWidth;
          const screenX = parseInt(x, 10) * maxScreenX / maxScrollerX;
          this.$refs.goalSwiper.swiper.translateTo(-screenX, 100, false, true);
        };
        const draggable = Draggable.create(
          '.slider__dragger-bound', {
            type: 'x',
            cursor: 'e-resize',
            bounds: '.slider__dragger',
            onDrag,
            onDragStart,
            onDragEnd,
          }
        );
      });
    },
    methods: {
      doubleRaf(callback) {
        requestAnimationFrame(() => {
          requestAnimationFrame(callback);
        });
      },
      setGoalSlide(index) {
        this.$refs.goalSwiper.swiper.slideTo(index, 1000);
      },
      onGoalsSliderTranslate(translate) {
        const firstSlide = this.$refs.slide0[0].$el;
        const offset = Math.abs(translate);
        const screenWidth = window.screen.width - parseInt(window.getComputedStyle(firstSlide)['margin-left'], 10);
        const newSlide = Math.floor(offset / screenWidth);
        if (newSlide !== this.current) {
          this.currentGoal = newSlide;
        }
      },
      onGoalsSliderChange() {
        if (!this.isDragging) {
          const scroller = this.$refs.scroller;
          const swiper = this.$refs.goalSwiper.swiper;
          const activeIndex = swiper.activeIndex;
          this.currentGoal = activeIndex;
          const thumbWidth = parseInt(this.getThumbWidth, 10);
          const scrollerWidth = scroller.getBoundingClientRect().width;
          const offset = (scrollerWidth / 100) * swiper.progress * 100;
          gsap.to(
            '.slider__dragger-bound',
            1,
            {
              x: `${offset > scrollerWidth - thumbWidth ? scrollerWidth - thumbWidth : offset}`,
              ease: 'power4.out'
            }
          );
        }
      }
    }
  };
</script>

<style lang="sass">
  @import "AppSlider"
</style>

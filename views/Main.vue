<template lang="pug">
  main(role='main').page-content
    AppIntro
</template>

<script>
  import { gsap, CSSPlugin } from 'gsap/all';
  import AppIntro from '@/components/ui/AppIntro/AppIntro';
  import getScrollbarWidth from '@/utils/getScrollbarWidth';
  gsap.registerPlugin(CSSPlugin);

  export default {
    name: 'Main',
    components: { AppIntro },
    mounted() {
      document.querySelector('.intro').addEventListener('mousewheel', this.goToProject, { passive: true });
    },
    beforeRouteLeave(to, from, next) {
      if (to.name === 'project') {
        document.querySelectorAll('.intro__picture').forEach((item) => {
          item.style.position = 'static';
        });
        document.querySelectorAll('.intro__cover').forEach((item) => {
          item.style.display = 'none';
        });
        document.querySelectorAll('.intro__img').forEach((item) => {
          item.style.transition = 'none';
          item.style.opacity = '1';
        });
        const currentSlide = document.querySelector('.swiper-slide-active');
        const image = currentSlide.querySelector('img');
        const coords = image.getBoundingClientRect();
        gsap.fromTo(
          image,
          {
            position: 'absolute',
            top: coords.y,
            left: coords.x,
            width: coords.width,
            height: coords.height,
            duration: 0,
          },
          {
            top: 0,
            left: 0,
            width: window.screen.width - getScrollbarWidth(),
            height: '100vh',
            duration: 1,
            ease: 'power2.out',
            onComplete: next
          },
        );
      } else {
        next();
      }
    },
    methods: {
      goToProject(e) {
        if (e.deltaY > 0) {
          this.$router.push({
            path: '/project',
          });
          document.querySelector('.intro').removeEventListener('mousewheel', this.goToProject);
        }
      }
    }
  };
</script>

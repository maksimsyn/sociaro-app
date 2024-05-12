<template lang="pug">
  main(role='main').page-content
    AppProjectList(:inTransition='inTransition')
</template>

<script>
  import { gsap, CSSPlugin } from 'gsap/all';
  import AppProjectList from '@/components/ui/AppProjectList/AppProjectList';
  import getScrollbarWidth from '@/utils/getScrollbarWidth';
  gsap.registerPlugin(CSSPlugin);

  export default {
    name: 'Projects',
    components: { AppProjectList },
    data() {
      return {
        inTransition: false,
      };
    },
    beforeRouteLeave(to, from, next) {
      if (to.name === 'project') {
        this.inTransition = true;
        const currentProject = document.querySelector('.projects__col.projects__col_right');
        const coords = currentProject.getBoundingClientRect();
        gsap.fromTo(document.querySelectorAll('.projects__item'),
          {
            opacity: 1,
            y: 0,
          },
          {
            opacity: 0,
            y: 50,
            stagger: {
              amount: 0.5,
            },
          });
        gsap.fromTo(
          currentProject,
          {
            position: 'fixed',
            top: coords.y,
            left: coords.x,
            width: coords.width,
            height: coords.height,
            duration: 0,
            maxWidth: 'none',
            transform: 'none',
            zIndex: 2,
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
  };
</script>

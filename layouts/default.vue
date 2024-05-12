<template lang="pug">
  #app
    .cursor#cursor(ref='cursor')
      span(ref='cursorText').cursor__text view
    AppHeader(ref='header' :isWhite='isHeaderWhite')
    nuxt
    AppFooter(v-if='!isFooterHidden')
    AppPreloader
</template>

<script>
  import { gsap, CSSPlugin } from 'gsap/all';
  import throttle from 'lodash.throttle';
  import AppHeader from '@/components/partials/AppHeader/AppHeader';
  import AppPreloader from '@/components/ui/AppPreloader/AppPreloader';
  import AppFooter from '@/components/partials/AppFooter/AppFooter';
  gsap.registerPlugin(CSSPlugin);

  export default {
    components: { AppFooter, AppPreloader, AppHeader },
    computed: {
      isFooterHidden() {
        const route = this.$route;

        return ['index', 'projects'].includes(route.name);
      },
      isHeaderWhite() {
        const route = this.$route;

        return ['about'].includes(route.name) || this.$store.state.isHeaderWhite;
      }
    },
    watch: {
      async $route() {
        await this.$nextTick();
        this.doubleRaf(() => {
          const cursor = this.$refs.cursor;
          const header = this.$refs.header;
          const isMenuOpened = header.isNavVisible;
          if (isMenuOpened) {
            header.toggleNavVisibility();
          }
          gsap.to(cursor, {
            width: 32,
            height: 32,
            backgroundColor: 'transparent',
            force3D: true
          });
          this.initialSetup();
        });
      }
    },
    mounted() {
      document.body.addEventListener('mousedown', function() {
        document.body.classList.add('using-mouse');
        document.body.classList.remove('using-keyboard');
      });
      document.body.addEventListener('keydown', function() {
        document.body.classList.add('using-keyboard');
        document.body.classList.remove('using-mouse');
      });

      let lastHeight = window.innerHeight;
      let vh = window.innerHeight * 0.01;

      document.documentElement.style.setProperty('--vh', `${vh}px`);

      window.addEventListener('resize', throttle(() => {
        if (window.innerWidth > window.innerHeight ||
          Math.abs(lastHeight - window.innerHeight) > 200) {
          vh = window.innerHeight * 0.01;
          document.documentElement.style.setProperty('--vh', `${vh}px`);
          lastHeight = window.innerHeight;
        }
      }, 300), { passive: true });

      this.initialSetup();
    },
    methods: {
      initialSetup() {
        this.$nextTick(() => {
          let cursorClientX = -100;
          let cursorClientY = -100;
          const currentWidth = 16;
          const cursor = this.$refs.cursor;
          const cursorText = this.$refs.cursorText;
          const hoverTargets = document.querySelectorAll('[data-hover-target]');
          const hoverIcons = document.querySelectorAll('[data-hover-icon]');
          const hideCursorTargets = document.querySelectorAll('[data-hover-hide]');

          gsap.set(cursorText, {
            opacity: 0,
            scale: 0,
          });

          const hideCursorText = () => {
            gsap.to(cursorText, {
              opacity: 0,
              scale: 0,
            });
          };

          const showCursorText = () => {
            gsap.to(cursorText, {
              opacity: 1,
              scale: 1,
            });
          };

          hideCursorText();

          const initCursor = () => {
            document.addEventListener('mousemove', (e) => {
              cursorClientX = e.clientX;
              cursorClientY = e.clientY;
            });

            const render = () => {
              gsap.set(cursor, {
                x: cursorClientX - currentWidth,
                y: cursorClientY - currentWidth,
                force3D: true
              });
              requestAnimationFrame(render);
            };
            requestAnimationFrame(render);
          };

          initCursor();

          hoverTargets.forEach((item) => {
            item.addEventListener('mouseenter', () => {
              gsap.to(cursor, {
                width: 96,
                height: 96,
                backgroundColor: '#FF0047',
                force3D: true
              });
              showCursorText();
            });
            item.addEventListener('mouseleave', () => {
              gsap.to(cursor, {
                width: 32,
                height: 32,
                backgroundColor: 'transparent',
                force3D: true
              });
              hideCursorText();
            });
          });

          hoverIcons.forEach((item) => {
            item.addEventListener('mouseenter', () => {
              gsap.to(cursor, {
                backgroundColor: '#FF0047',
                opacity: 0.4,
              });
            });
            item.addEventListener('mouseleave', () => {
              gsap.to(cursor, {
                backgroundColor: 'transparent',
                opacity: 1,
              });
            });
          });

          hideCursorTargets.forEach((item) => {
            item.addEventListener('mouseenter', () => {
              gsap.to(cursor, {
                autoAlpha: 0
              });
            });
            item.addEventListener('mouseleave', () => {
              gsap.to(cursor, {
                autoAlpha: 1
              });
            });
          });
        });
      },
      doubleRaf(callback) {
        requestAnimationFrame(() => {
          requestAnimationFrame(callback);
        });
      }
    }
  };
</script>

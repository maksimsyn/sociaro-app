<template lang="pug">
  .projects
    button(type='button').projects__down
      svg-icon(
        name='icon-arrow'
        width='7'
        height='14'
        stroke='#030303'
      )
    button(type='button').projects__next
      svg-icon(
        name='icon-arrow-long'
        width='8'
        height='54'
        fill='#030303'
      )
    .projects__col.projects__col_right
      ul.projects__pic-list
        li(v-for='(project, index) of projects').projects__pic-item
          figure(:ref='`pic${index}`').projects__figure
            picture.projects__picture
              img(:src='project.img' width='827' height='403' :alt='project.name').projects__img
    .projects__container.container(data-scroll)
      .projects__inner(data-scroll-content)
        .projects__col.projects__col_left
          ul.projects__list
            li(
              v-for='(project, index) of projects'
              ).projects__item
              nuxt-link(
                :data-name='project.name'
                :data-counter='`${index + 1 >= 10 ? "" : 0}${index + 1}`'
                :to='project.link'
                @mouseover.native='onMouseOver(index)'
                @mouseleave.native='hideAllPics'
                ).projects__link.title.title_size_m {{project.name}}
</template>

<script>
  import { gsap, CSSPlugin } from 'gsap/all';
  gsap.registerPlugin(CSSPlugin);

  export default {
    name: 'AppProjectList',
    props: {
      inTransition: {
        type: Boolean,
        default: false,
        required: true,
      },
    },
    data() {
      return {
        projects: [
          {
            name: 'Mediasync',
            link: '/project',
            img: '/img/slide-2.jpg'
          },
          {
            name: 'The sync',
            link: '/project',
            img: '/img/project-1.jpg'
          },
          {
            name: 'TNT',
            link: '/project',
            img: '/img/slide-2.jpg'
          },
          {
            name: 'Tinkoff bank',
            link: '/project',
            img: '/img/slide-3.jpg'
          },
          {
            name: 'Rixos hotel',
            link: '/project',
            img: '/img/project-1.jpg'
          },
          {
            name: 'Mercedes',
            link: '/project',
            img: '/img/slide-2.jpg'
          },
          {
            name: 'The sync',
            link: '/project',
            img: '/img/slide-3.jpg'
          },
          {
            name: 'TNT',
            link: '/project',
            img: '/img/slide-2.jpg'
          },
          {
            name: 'Tinkoff bank',
            link: '/project',
            img: '/img/slide-3.jpg'
          },
          {
            name: 'Rixos hotel',
            link: '/project',
            img: '/img/project-1.jpg'
          },
          {
            name: 'Mercedes',
            link: '/project',
            img: '/img/slide-2.jpg'
          },
          {
            name: 'The sync',
            link: '/project',
            img: '/img/slide-3.jpg'
          },
        ],
        currentIndex: null,
      };
    },
    mounted() {
      const math = {
        lerp: (a, b, n) => {
          return (1 - n) * a + n * b;
        },
        norm: (value, min, max) => {
          return (value - min) / (max - min);
        }
      };

      const config = {
        height: window.innerHeight,
        width: window.innerWidth
      };

      class Smooth {
        constructor() {
          this.bindMethods();

          this.data = {
            ease: 0.1,
            current: 0,
            last: 0
          };

          this.dom = {
            el: document.querySelector('[data-scroll]'),
            content: document.querySelector('[data-scroll-content]')
          };

          this.rAF = null;

          this.init();
        }

        bindMethods() {
          ['scroll', 'run', 'resize']
            // eslint-disable-next-line no-return-assign
            .forEach(fn => this[fn] = this[fn].bind(this));
        }

        setStyles() {
          // Object.assign(this.dom.el.style, {
          //   position: 'fixed',
          //   top: 0,
          //   left: 0,
          //   height: '100%',
          //   width: '100%',
          //   overflow: 'hidden'
          // });
        }

        setHeight() {
          // document.body.style.height = `${this.dom.content.offsetHeight}px`;
        }

        resize() {
          this.setHeight();
          this.scroll();
        }

        preload() {
          imagesLoaded(this.dom.content, (instance) => {
            this.setHeight();
          });
        }

        scroll() {
          this.data.current = window.scrollY;
        }

        run() {
          this.data.last = math.lerp(this.data.last, this.data.current, this.data.ease);
          if (this.data.last < 0.1) {
            this.data.last = 0;
          }

          const diff = this.data.current - this.data.last;
          const acc = diff / config.width;
          const velo = +acc;
          const skew = velo * 12.5;

          this.dom.content.style.transform = `skewY(${skew}deg)`;

          this.requestAnimationFrame();
        }

        on() {
          this.setStyles();
          this.setHeight();
          this.addEvents();

          this.requestAnimationFrame();
        }

        off() {
          this.cancelAnimationFrame();

          this.removeEvents();
        }

        requestAnimationFrame() {
          this.rAF = requestAnimationFrame(this.run);
        }

        cancelAnimationFrame() {
          cancelAnimationFrame(this.rAF);
        }

        destroy() {
          document.body.style.height = '';

          this.data = null;

          this.removeEvents();
          this.cancelAnimationFrame();
        }

        // resize() {
        //   this.setHeight()
        // }

        addEvents() {
          window.addEventListener('resize', this.resize, { passive: true });
          window.addEventListener('scroll', this.scroll, { passive: true });
        }

        removeEvents() {
          window.removeEventListener('resize', this.resize, { passive: true });
          window.removeEventListener('scroll', this.scroll, { passive: true });
        }

        init() {
          this.preload();
          this.on();
        }
      }

      const smooth = new Smooth();

      gsap.fromTo(document.querySelectorAll('.projects__item'),
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          stagger: {
            amount: 0.5,
          },
          delay: 0.3
        });
    },
    methods: {
      hideAllPics() {
        if (!this.inTransition) {
          this.currentIndex = null;
          const refs = this.$refs;
          const elems = Object.values(refs).map(item => item[0]);
          gsap.to(elems, {
            opacity: 0,
            zIndex: 0
          });
        }
      },
      onMouseOver(index) {
        if (!this.inTransition) {
          this.currentIndex = index;
          const ref = `pic${index}`;
          const el = this.$refs[ref];
          this.hideAllPics();
          gsap.fromTo(
            el,
            {
              scale: 1.2,
              opacity: 0,
            },
            {
              opacity: 1,
              duration: 0.6,
              scale: 1,
              zIndex: 1,
              ease: 'power2.out'
            }
          );
        }
      }
    }
  };
</script>

<style lang="sass">
  @import "AppProjectList"
</style>

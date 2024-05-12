<template lang="pug">
  .video(ref='video')
    button(
      @click='playVideo'
      type='button'
      ref='play'
      data-hover-icon
      ).video__play
    lazy-youtube-video(
      ref='projectVideo'
      :src='link'
    )
</template>

<script>
  import { gsap, CSSPlugin } from 'gsap/all';
  gsap.registerPlugin(CSSPlugin);

  export default {
    name: 'AppVideo',
    props: {
      link: {
        type: String,
        default: '',
        required: true,
      }
    },
    mounted() {
      const hoverMouse = ($el) => {
        const $self = $el;
        let hover = false;
        const offsetHoverMax = 1.2;
        const offsetHoverMin = 1;

        const attachEventsListener = () => {
          this.$refs.video.addEventListener('mousemove', (e) => {
            const hoverArea = hover ? offsetHoverMax : offsetHoverMin;

            // cursor
            const cursor = {
              x: e.clientX,
              y: e.clientY
            };

            // size
            const width = $self.getBoundingClientRect().width;
            const height = $self.getBoundingClientRect().height;

            // position
            const offset = $self.getBoundingClientRect();
            const elPos = {
              x: offset.left + width / 2,
              y: offset.top + height / 2
            };

            // comparison
            const x = cursor.x - elPos.x;
            const y = cursor.y - elPos.y;

            // dist
            const dist = Math.sqrt(x * x + y * y);

            // mutex hover
            let mutHover = false;

            // anim
            if (dist < width * hoverArea) {
              mutHover = true;
              if (!hover) {
                hover = true;
              }
              onHover(x, y);
            }

            // reset
            if (!mutHover && hover) {
              onLeave();
              hover = false;
            }
          });
        };

        const onHover = (x, y) => {
          gsap.to($self, 0.4, {
            x: x * 0.8,
            y: y * 0.8,
            // scale: .9,
            rotation: x * 0.05,
            ease: 'power2.out'
          });
        };
        const onLeave = () => {
          gsap.to($self, 0.7, {
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0,
            ease: 'elastic.out(1.2, 0.4)'
          });
        };

        attachEventsListener();
      };

      hoverMouse(this.$refs.play);
    },
    beforeDestroy() {
      const frame = this.$refs.projectVideo.$el.querySelector('.y-video__inner');
      frame.removeEventListener('mouseover', this.hideCursor);
      frame.removeEventListener('mouseleave', this.showCursor);
    },
    methods: {
      hideCursor() {
        const cursor = document.getElementById('cursor');
        gsap.to(cursor, {
          autoAlpha: 0
        });
      },
      showCursor() {
        const cursor = document.getElementById('cursor');
        gsap.to(cursor, {
          autoAlpha: 1
        });
      },
      playVideo() {
        const self = this;
        const btn = this.$refs.play;
        gsap.to(
          btn,
          {
            autoAlpha: 0,
            onComplete: () => {
              const frame = self.$refs.projectVideo.$el.querySelector('.y-video__inner');
              frame.addEventListener('mouseover', self.hideCursor);
              frame.addEventListener('mouseleave', self.showCursor);
              self.$refs.projectVideo.$el.click();
            }
          }
        );
      },
    }
  };
</script>

<style lang="sass">
  @import "AppVideo"
</style>

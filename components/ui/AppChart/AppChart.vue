<template lang="pug">
  .chart
    figure(ref='graph' data-animation).chart__graph
      .chart__holder
        svg.chart__chart(viewBox='0 0 36 36')
          defs
            linearGradient(:id='id' x1='48.5307', y1='153', x2='111.248', y2='16.2572', gradientUnits='userSpaceOnUse')
              stop(stop-color='#FF3F00')
                stop(offset='1', stop-color='#FF0047')
          path.circular__circle(d='M18 2.0845\
                          a 15.9155 15.9155 0 0 1 0 31.831\
                          a 15.9155 15.9155 0 0 1 0 -31.831' stroke='#CFDFE2')
          path.circular__path(:stroke='`url(#${id})`' :stroke-dasharray='`${currentPercent}, 100`', d='M18 2.0845\
                          a 15.9155 15.9155 0 0 1 0 31.831\
                          a 15.9155 15.9155 0 0 1 0 -31.831')
        strong.chart__value {{Number(currentPercent).toFixed(0)}}%
    .chart__caption(v-html='graph.title')
</template>

<script>
  import nanoid from 'nanoid';
  import { gsap } from 'gsap/all';

  export default {
    name: 'AppChart',
    props: {
      graph: {
        type: Object,
        default: () => {},
        required: true,
      }
    },
    data() {
      return {
        id: null,
        initialValue: {
          value: 0
        },
        currentPercent: 0,
        observer: null,
      };
    },
    mounted() {
      this.id = `id-${nanoid()}`;
      this.observer = new MutationObserver((mutations) => {
        for (const m of mutations) {
          const newValue = m.target.getAttribute(m.attributeName);
          this.$nextTick(() => {
            this.onClassChange(newValue, m.oldValue);
          });
        }
      });

      this.observer.observe(this.$refs.graph, {
        attributes: true,
        attributeOldValue: true,
        attributeFilter: ['class'],
      });
    },
    beforeDestroy() {
      this.observer.disconnect();
    },
    methods: {
      onClassChange(classAttrValue) {
        const classList = classAttrValue.split(' ');
        if (classList.includes('animated')) {
          const initialValue = this.initialValue;
          const endValue = this.graph.value;
          const self = this;
          gsap.to(initialValue, 1.4, {
            value: endValue,
            roundProps: 'value',
            ease: 'power4.out',
            onUpdate() {
              self.currentPercent = initialValue.value;
            }
          });
        }
      }
    }
  };
</script>

<style lang="sass">
  @import "AppChart"
</style>

<template lang="pug">
  section.contacts
    AppCircle(:src='"/img/circle-filled.svg"' :width='510' :height='510' ref='circleFilled').contacts__circle.contacts__circle_filled
    AppCircle(:src='"/img/circle.svg"' :width='510' :height='510' ref='circleDashed').contacts__circle.contacts__circle_dashed
    .contacts__container.container
      h1(data-animation='fade-up' data-delay='200').contacts__title.title.title_size_l Let's work #[br] together
      p(data-animation='fade-up' data-delay='300').contacts__desc Even on the busiest day we'll find a moment to treat you to #[br] a cup of hot coffee and discuss your tasks.
      form(@submit.prevent='onSubmit' data-animation='fade-up' data-delay='400').contacts__form
        .contacts__form-group
          label(for='name').contacts__label
            strong.contacts__subject Hi, my name is*
          input(
            type='text'
            placeholder='Michael Scott'
            id='name'
            v-model='form.name'
            required
            ).contacts__input.no-outline
        .contacts__form-group
          label(for='from').contacts__label
            strong.contacts__subject I'm from
          input(
            type='text'
            placeholder='Dunder Mifflin'
            id='from'
            v-model='form.company'
            ).contacts__input.no-outline
          strong.contacts__subject company
        .contacts__form-group.contacts__form-group_col
          label(for='from').contacts__label
            strong.contacts__subject I would like to speak about
          .contacts__checkboxes
            .contacts__checkbox-group
              input(type='checkbox' id='marketing' v-model='form.theme' value='marketing').contacts__checkbox.visually-hidden
              label(for='marketing').contacts__checkbox-label.btn.btn_color_black Marketing
            .contacts__checkbox-group
              input(type='checkbox' id='design' v-model='form.theme' value='web design').contacts__checkbox.visually-hidden
              label(for='design').contacts__checkbox-label.btn.btn_color_black Web design
            .contacts__checkbox-group
              input(type='checkbox' id='pr' v-model='form.theme' value='pr').contacts__checkbox.visually-hidden
              label(for='pr').contacts__checkbox-label.btn.btn_color_black PR campaign
            .contacts__checkbox-group
              input(type='checkbox' id='other' v-model='form.theme' value='other').contacts__checkbox.visually-hidden
              label(for='other').contacts__checkbox-label.btn.btn_color_black Other
        .contacts__form-group
          label(for='tel').contacts__label
            strong.contacts__subject You can call me on
          input(type='tel' placeholder='+1 885 885 63' id='tel' v-model='form.tel').contacts__input.no-outline
        .contacts__form-group
          label(for='email').contacts__label
            strong.contacts__subject Or e-mail me *
          input(type='email' placeholder='thebestboss@gmail.com' id='email' v-model='form.email' required).contacts__input.no-outline
        button(type='submit' :class='{"contacts__submit_hidden" : isSuccess}').contacts__submit.btn.btn_color_red send
        p(v-show='isSuccess').contacts__message Your message was sent successfully. #[br] Thanks!
</template>

<script>
  import { gsap, CSSPlugin } from 'gsap/all';
  import sal from 'sal.js';
  import AppCircle from '../AppCircle/AppCircle';
  gsap.registerPlugin(CSSPlugin);

  export default {
    name: 'AppContacts',
    components: { AppCircle },
    data() {
      return {
        form: {
          name: '',
          company: '',
          theme: [],
          tel: '',
          email: '',
        },
        isSuccess: false,
      };
    },
    mounted() {
      sal();
      const filled = this.$refs.circleFilled.$el;
      const dashed = this.$refs.circleDashed.$el;
      gsap.set(
        filled,
        {
          x: '100%'
        }
      );
      gsap.set(
        dashed,
        {
          x: '120%'
        }
      );

      this.$nextTick(() => {
        setTimeout(() => {
          gsap.to(
            filled,
            1,
            {
              x: 0
            }
          );
          gsap.to(
            dashed,
            1,
            {
              x: 0,
              delay: 0.3,
              onComplete: () => {
                dashed.style.animationDelay = '1.2s';
                dashed.style.animation = 'spin 2s ease-in-out';
              }
            }
          );
        }, 100);
      });

      const input = document.querySelectorAll('.contacts__input');
      const buffer = [];
      for (let i = 0; input.length > i; i++) {
        buffer[i] = document.createElement('div');
        buffer[i].className = 'contacts__buffer';
        input[i].parentNode.insertBefore(buffer[i], input[i].nextSibling);

        input[i].oninput = function() {
          this.nextElementSibling.innerHTML = this.value;
          this.style.width = this.nextElementSibling.clientWidth + 'px';
        };
      }
    },
    methods: {
      onSubmit() {
        this.isSuccess = true;
      }
    }
  };
</script>

<style lang="sass">
  @import "AppContacts"
</style>

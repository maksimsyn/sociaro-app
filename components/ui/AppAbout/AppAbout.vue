<template lang="pug">
  .about
    .about__intro
      .about__wrapper.container
        button(
          type='button'
          data-hover-icon
          v-scroll-to="{el: '#about-content', duration: 1000, ease: 'ease-in-out'}"
          ).about__scroll-down Scroll down to #[br] explore the project
          svg-icon(
            name='icon-arrow-long'
            width='8'
            height='54'
            fill='#ffffff'
          )
        button(
          type='button'
          data-hover-icon
          v-scroll-to="{el: '#about-content', duration: 1000, ease: 'ease-in-out'}"
          ).about__next
          svg-icon(
            name='icon-arrow'
            width='7'
            height='14'
          )
        .about__intro-content
          h1(
            data-animation='fade-up'
            data-delay='200'
            ).about__title.title.title_size_m.about__title_white.about__intro-title.will-change company
          p(data-animation='fade-up' data-delay='250').about__text.will-change Aliqua ex eu do et cillum culpa consequat officia voluptate. Adipisicing pariatur aute pariatur aliqua voluptate velit do deserunt tempor minim.
    .about__content#about-content
      section.about__block
        AppCircle(:src='"/img/circle.svg"' :width='510' :height='510').about__circle
        .about__container.container
          h2(data-animation='fade-up' data-delay='200').about__title.title.title_size_s.will-change solutions
          p(data-animation='fade-up' data-delay='250').about__lead.will-change Seitán, jaca, heura, quorn are a few of the foods that are currently trending. Some are millenary while others are products of the healthy food industry. Maybe you have heard of them or have had the privilege of trying them because the truth of it is that healthy eating is hard-hitting.
          p(data-animation='fade-up' data-delay='300').about__desc.will-change However, this concept has recently been changing. Adopting a healthy nutritious lifestyle does not only mean going on a strict diet as a regimen to lose weight and get a better body. It also is also an option that eliminates the consumption of animal products due to a certain philosophy of life.
      section.about__block
        .about__container.container
          h2(data-animation='fade-up' data-delay='200').about__title.title.title_size_s.will-change team
          ul(data-animation='fade-up' data-delay='250').about__team.will-change
            li(v-for='teammate of team').about__team-item
              AppTeammate(
                :imageFirst='teammate.imageFirst'
                :imageSecond='teammate.imageSecond'
                :post='teammate.post'
                :name='teammate.name'
              )
      section.about__block
        .about__container.container
          h2(data-animation='fade-up' data-delay='200').about__title.title.title_size_s.will-change clients
          .about__inner.will-change(data-animation='fade-up' data-delay='250')
            .about__col.about__col_left
              p.about__lead.about__lead_nom Laborum adipisicing enim id irure quis ullamco dolore mollit anim dolor esse.
            .about__col.about__col_right
              button(type='button' data-hover-icon).about__arrow.about__arrow_left
                svg-icon(
                  name='icon-arrow'
                  width='7'
                  hidht='14'
                )
              client-only
                swiper(
                  :options='logoSliderOptions'
                ).about__logos
                  swiper-slide(
                    v-for='(slide, index) of 3'
                    :key='`slide-${index}`'
                    ).about__logo-slide
                    ul.about__logo-list
                      li.about__logo-item
                        img(src='/img/logos/cannes-lions.svg' width='106' height='46').about__company-logo
                      li.about__logo-item
                        img(src='/img/logos/github.svg' width='107' height='30').about__company-logo
                      li.about__logo-item
                        img(src='/img/logos/airbnb.svg' width='126' height='40').about__company-logo
                      li.about__logo-item
                        img(src='/img/logos/flickr.svg' width='92' height='29').about__company-logo
                      li.about__logo-item
                        img(src='/img/logos/vine.svg' width='89' height='34').about__company-logo
                      li.about__logo-item
                        img(src='/img/logos/amazon.svg' width='161' height='33').about__company-logo
              button(type='button' data-hover-icon).about__arrow.about__arrow_right
                svg-icon(
                  name='icon-arrow'
                  width='7'
                  hidht='14'
                )

      section.about__block.about__block_grey.about__portfolio
        .about__container.container
          .about__heading
            h2(data-animation='fade-up' data-delay='200').about__title.title.title_size_s.will-change awards
            h3(data-animation='fade-up' data-delay='250').about__subtitle.will-change Celebrating 15 years in Mobile Marketing
        .grid.about__awards.will-change(data-animation='fade-up' data-delay='300')
          client-only
            swiper(
              ref='awardsSwiper'
              :options='awardsSliderOptions'
            ).about__awards-slider
              swiper-slide(
                v-for='(slide, index) of 3'
                :key='`slide-${index}`'
              ).about__awards-slide
                h4.about__year 2019
                .about__projects
                  ul.about__awards-list
                    li.about__awards-item
                      h5.about__awards-title  International Mobile Conference
                    li.about__awards-item
                      ul.about__awards-sublist
                        li.about__awards-subitem
                          a(href='#' data-hover-icon).about__project-link.link Best mobile marketing agency - Gold
                            img(src='/img/slide-1.jpg').about__project-img
                        li.about__awards-subitem
                          a(href='#' data-hover-icon).about__project-link.link Best lorem  ipsum
                            img(src='/img/slide-2.jpg').about__project-img
                        li.about__awards-subitem
                          a(href='#' data-hover-icon).about__project-link.link Best lorem  ipsum
                            img(src='/img/slide-3.jpg').about__project-img
                  ul.about__awards-list
                    li.about__awards-item
                      h5.about__awards-title  marketing awards
                    li.about__awards-item
                      ul.about__awards-sublist
                        li.about__awards-subitem
                          a(href='#').about__project-link.link Best mobile marketing agency - Gold
                            img(src='/img/slide-1.jpg').about__project-img
                        li.about__awards-subitem
                          a(href='#').about__project-link.link Best lorem  ipsum
                            img(src='/img/slide-2.jpg').about__project-img
                        li.about__awards-subitem
                          a(href='#').about__project-link.link Best lorem  ipsum
                            img(src='/img/slide-3.jpg').about__project-img
                  ul.about__awards-list
                    li.about__awards-item
                      h5.about__awards-title  awwards
                    li.about__awards-item
                      ul.about__awards-sublist
                        li.about__awards-subitem
                          a(href='#').about__project-link.link Anoa
                            img(src='/img/slide-1.jpg').about__project-img
                        li.about__awards-subitem
                          a(href='#').about__project-link.link Off Barcelona
                            img(src='/img/slide-2.jpg').about__project-img

</template>

<script>
  import { gsap, CSSPlugin } from 'gsap/all';
  import * as THREE from 'three';
  import sal from 'sal.js';
  import AppCircle from '@/components/ui/AppCircle/AppCircle';
  import AppTeammate from '@/components/ui/AppTeammate/AppTeammate';
  gsap.registerPlugin(CSSPlugin);

  export default {
    name: 'AppAbout',
    components: { AppTeammate, AppCircle },
    data() {
      return {
        awardsSliderOptions: {
          slidesPerView: 'auto',
          spaceBetween: 30,
          freeMode: true,
          centeredSlides: true,
          speed: 1000,
        },
        logoSliderOptions: {
          speed: 1000,
          navigation: {
            nextEl: '.about__arrow_right',
            prevEl: '.about__arrow_left'
          },
        },
        team: [
          {
            imageFirst: '/img/team-1.jpg',
            imageSecond: '/img/team-2.jpg',
            post: 'CEO',
            name: 'IVAN <br> Petrov'
          },
          {
            imageFirst: '/img/team-2.jpg',
            imageSecond: '/img/team-1.jpg',
            post: 'Content manager',
            name: ' Eugene <br> ovchinnikov'
          },
          {
            imageFirst: '/img/team-3.jpg',
            imageSecond: '/img/team-2.jpg',
            post: 'designer',
            name: 'olga <br> Petrova'
          },
          {
            imageFirst: '/img/team-4.jpg',
            imageSecond: '/img/team-2.jpg',
            post: 'Head of PR',
            name: 'anna <br> komarova'
          },
        ],
      };
    },
    mounted() {
      this.$nextTick(() => {
        sal();
        // eslint-disable-next-line camelcase,no-extend-native
        Number.prototype.map = function(in_min, in_max, out_min, out_max) {
          // eslint-disable-next-line camelcase
          return ((this - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
        };
        class EffectShell {
          constructor(container = document.body, itemsWrapper = null) {
            this.container = container;
            this.itemsWrapper = itemsWrapper;
            if (!this.container || !this.itemsWrapper) { return; }
            this.setup();
            this.initEffectShell().then(() => {
              console.log('load finished here');
              this.isLoaded = true;
              if (this.isMouseOver) { this.onMouseOver(this.tempItemIndex); }
              this.tempItemIndex = null;
            });
            this.createEventsListeners();
          }

          setup() {
            window.addEventListener('resize', this.onWindowResize.bind(this), false);

            // renderer
            this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            this.renderer.setSize(this.viewport.width, this.viewport.height);
            this.renderer.setPixelRatio = window.devicePixelRatio;
            this.container.appendChild(this.renderer.domElement);
            this.renderer.domElement.id = 'about-canvas';

            // scene
            this.scene = new THREE.Scene();

            // camera
            this.camera = new THREE.PerspectiveCamera(
              40,
              this.viewport.aspectRatio,
              0.1,
              100
            );
            this.camera.position.set(0, 0, 3);

            // mouse
            this.mouse = new THREE.Vector2();

            // console.log(this.viewSize)
            // let pg = new THREE.PlaneBufferGeometry(
            //   this.viewSize.width,
            //   this.viewSize.height,
            //   1,
            //   1
            // )
            // let pm = new THREE.MeshBasicMaterial({ color: 0xff0000 })
            // let mm = new THREE.Mesh(pg, pm)
            // this.scene.add(mm)

            // time
            this.timeSpeed = 2;
            this.time = 0;
            this.clock = new THREE.Clock();

            // animation loop
            this.renderer.setAnimationLoop(this.render.bind(this));
          }

          render() {
            // called every frame
            this.time += this.clock.getDelta() * this.timeSpeed;
            this.renderer.render(this.scene, this.camera);
          }

          initEffectShell() {
            const promises = [];

            this.items = this.itemsElements;

            const THREEtextureLoader = new THREE.TextureLoader();
            this.items.forEach((item, index) => {
              // create textures
              promises.push(
                this.loadTexture(
                  THREEtextureLoader,
                  item.img ? item.img.src : null,
                  index
                )
              );
            });

            return new Promise((resolve, reject) => {
              // resolve textures promises
              Promise.all(promises).then((promises) => {
                // all textures are loaded
                promises.forEach((promise, index) => {
                  // assign texture to item
                  this.items[index].texture = promise.texture;
                });
                resolve();
              });
            });
          }

          createEventsListeners() {
            this.items.forEach((item, index) => {
              item.element.addEventListener(
                'mouseover',
                this._onMouseOver.bind(this, index),
                false
              );
            });

            this.container.addEventListener(
              'mousemove',
              this._onMouseMove.bind(this),
              false
            );
            this.itemsWrapper.addEventListener(
              'mouseleave',
              this._onMouseLeave.bind(this),
              false
            );
          }

          _onMouseLeave(event) {
            this.isMouseOver = false;
            this.onMouseLeave(event);
          }

          _onMouseMove(event) {
            // get normalized mouse position on viewport
            this.mouse.x = (event.clientX / this.viewport.width) * 2 - 1;
            this.mouse.y = -(event.clientY / this.viewport.height) * 2 + 1;

            this.onMouseMove(event);
          }

          _onMouseOver(index, event) {
            this.tempItemIndex = index;
            this.onMouseOver(index, event);
          }

          onWindowResize() {
            this.camera.aspect = this.viewport.aspectRatio;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(this.viewport.width, this.viewport.height);
          }

          onUpdate() {}

          onMouseEnter(event) {}

          onMouseLeave(event) {}

          onMouseMove(event) {}

          onMouseOver(index, event) {}

          get viewport() {
            const width = this.container.clientWidth;
            const height = this.container.clientHeight;
            const aspectRatio = width / height;
            return {
              width,
              height,
              aspectRatio
            };
          }

          get viewSize() {
            // fit plane to screen
            // https://gist.github.com/ayamflow/96a1f554c3f88eef2f9d0024fc42940f

            const distance = this.camera.position.z;
            const vFov = (this.camera.fov * Math.PI) / 180;
            const height = 2 * Math.tan(vFov / 2) * distance;
            const width = height * this.viewport.aspectRatio;
            return { width, height, vFov };
          }

          get itemsElements() {
            // convert NodeList to Array
            const items = [...this.itemsWrapper.querySelectorAll('.link')];

            // create Array of items including element, image and index
            return items.map((item, index) => ({
              element: item,
              img: item.querySelector('img') || null,
              index
            }));
          }

          loadTexture(loader, url, index) {
            // https://threejs.org/docs/#api/en/loaders/TextureLoader
            return new Promise((resolve, reject) => {
              if (!url) {
                resolve({ texture: null, index });
                return;
              }
              // load a resource
              loader.load(
                // resource URL
                url,

                // onLoad callback
                (texture) => {
                  resolve({ texture, index });
                },

                // onProgress callback currently not supported
                undefined,

                // onError callback
                (error) => {
                  console.error('An error happened.', error);
                  reject(error);
                }
              );
            });
          }
        }

        class StretchEffect extends EffectShell {
          constructor(container = document.body, itemsWrapper = null, options = {}) {
            super(container, itemsWrapper);
            if (!this.container || !this.itemsWrapper) { return; }

            options.strength = options.strength || 0.25;
            this.options = options;

            this.init();
          }

          init() {
            this.position = new THREE.Vector3(0, 0, 0);
            this.scale = new THREE.Vector3(1, 1, 1);
            this.geometry = new THREE.PlaneBufferGeometry(1, 1, 32, 32);
            this.uniforms = {
              uTexture: {
                value: null
              },
              uOffset: {
                value: new THREE.Vector2(0.0, 0.0)
              },
              uAlpha: {
                value: 0
              }
            };
            this.material = new THREE.ShaderMaterial({
              uniforms: this.uniforms,
              vertexShader: `
        uniform vec2 uOffset;

        varying vec2 vUv;

        vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {
          float M_PI = 3.1415926535897932384626433832795;
          position.x = position.x + (sin(uv.y * M_PI) * offset.x);
          position.y = position.y + (sin(uv.x * M_PI) * offset.y);
          return position;
        }

        void main() {
          vUv =  uv + (uOffset * 2.);
          vec3 newPosition = position;
          newPosition = deformationCurve(position,uv,uOffset);
          gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
        }
      `,
              fragmentShader: `
        uniform sampler2D uTexture;
        uniform float uAlpha;

        varying vec2 vUv;

        vec2 scaleUV(vec2 uv,float scale) {
          float center = 0.5;
          return ((uv - center) * scale) + center;
        }

        void main() {
          vec3 color = texture2D(uTexture,scaleUV(vUv,0.8)).rgb;
          gl_FragColor = vec4(color,uAlpha);
        }
      `,
              transparent: true
            });
            this.plane = new THREE.Mesh(this.geometry, this.material);
            this.scene.add(this.plane);
          }

          onMouseEnter() {
            if (!this.currentItem || !this.isMouseOver) {
              this.isMouseOver = true;
              // show plane
              gsap.to(this.uniforms.uAlpha, 0.5, {
                value: 1,
                ease: 'power4.out'
              });
            }
          }

          onMouseLeave(event) {
            gsap.to(this.uniforms.uAlpha, 0.5, {
              value: 0,
              ease: 'power4.out'
            });
          }

          onMouseMove(event) {
            // project mouse position to world coodinates
            const x = this.mouse.x.map(
              -1,
              1,
              -this.viewSize.width / 2,
              this.viewSize.width / 2
            );
            const y = this.mouse.y.map(
              -1,
              1,
              -this.viewSize.height / 2,
              this.viewSize.height / 2
            );

            // update position
            this.position = new THREE.Vector3(x, y, 0);
            gsap.to(this.plane.position, 1, {
              x,
              y,
              ease: 'power4.out',
              onUpdate: this.onPositionUpdate.bind(this)
            });
          }

          onPositionUpdate() {
            // compute offset
            const offset = this.plane.position
              .clone()
              .sub(this.position)
              .multiplyScalar(-this.options.strength);
            this.uniforms.uOffset.value = offset;
          }

          onMouseOver(index, e) {
            if (!this.isLoaded) { return; }
            this.onMouseEnter();
            if (this.currentItem && this.currentItem.index === index) { return; }
            this.onTargetChange(index);
          }

          onTargetChange(index) {
            // item target changed
            this.currentItem = this.items[index];
            if (!this.currentItem.texture) { return; }

            // compute image ratio
            const imageRatio =
              this.currentItem.img.naturalWidth / this.currentItem.img.naturalHeight;
            this.scale = new THREE.Vector3(imageRatio, 1, 1);
            this.uniforms.uTexture.value = this.currentItem.texture;
            this.plane.scale.copy(this.scale);
          }
        }

        const container = document.querySelector('.about__portfolio');
        const itemsWrapper = document.querySelector('.grid');

        // Preload images
        const preloadImages = () => {
          return new Promise((resolve, reject) => {
            imagesLoaded(document.querySelectorAll('.about__project-img'), resolve);
          });
        };
        // And then..
        preloadImages().then(() => {
          // Remove the loader
          const effect = new StretchEffect(container, itemsWrapper, { strength: 0.25 });
        });
      });
    }
  };
</script>

<style lang="sass">
  @import "AppAbout"
</style>

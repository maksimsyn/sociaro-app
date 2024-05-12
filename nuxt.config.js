const pollyfils = [
  'Object.entries',
  'CustomEvent',
  'Array.from',
  'IntersectionObserver',
  'IntersectionObserverEntry',
  'Element.prototype.closest',
  'NodeList.prototype.forEach',
  'Array.prototype.forEach',
  'Node.prototype.contains',
].join('%2C');

export default {
  mode: 'universal',
  generate: {
    dir: 'dist',
    routes: ['/', '/about', '/project', '/projects'],
  },
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'ru',
      dir: 'ltr',
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'format-detection', content: 'date=no' },
      { name: 'format-detection', content: 'address=no' },
      { name: 'format-detection', content: 'email=no' },
      { name: 'google', content: 'notranslate' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: `https://polyfill.io/v3/polyfill.min.js?features=${pollyfils}`, body: true },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~assets/sass/main',
  ],
  styleResources: {
    sass: [
      './assets/sass/dev.sass'
    ]
  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/libs/picturefill.js', ssr: false },
    { src: '~/plugins/libs/svg4everybody.js', ssr: false },
    { src: '~/plugins/libs/swiper.js', ssr: false },
    { src: '~/plugins/libs/gmap.js', ssr: false },
    { src: '~/plugins/libs/sal.js', ssr: false },
    { src: '~/plugins/libs/scrollto.js', ssr: false },
    { src: '~/plugins/libs/lazy-yt.js', ssr: true },
    { src: '~/plugins/libs/imagesloaded.js', ssr: false },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/svg-sprite',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', ['@nuxtjs/router', { path: 'router', DefaultRouter: true }]],
  /*
   ** Build configuration
   */
  build: {
    babel: {
      plugins: ['@babel/plugin-proposal-optional-chaining', '@babel/plugin-proposal-nullish-coalescing-operator'],
    },
    transpile: ['gsap', /^vue2-google-maps($|\/)/, 'vue-lazy-youtube-video', 'three'],
    extractCSS: true,
    postcss: {
      plugins: {
        'postcss-initial': {},
        'postcss-momentum-scrolling': [
          'scroll',
          'auto'
        ],
        'postcss-object-fit-images': {},
        'postcss-focus': {},
        'autoprefixer': {
          grid: true,
          supports: false
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push(
        {
          test: /\.(glsl|vs|fs|vert|frag)$/,
          exclude: /node_modules/,
          use: [
            'raw-loader',
            'glslify-loader',
          ],
        },
      );
    }
  }
};

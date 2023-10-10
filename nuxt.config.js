export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Filip Izydorczyk',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Hi! I am Filip and I work as a software developer. I am focused on web development, but I enjoy getting out of my comfort zone and trying other aspects of IT in my free time. Professionally, I did lots of different frontend and backend jobs. Mostly I work with javascript / typescript and Java (specifically using Springboot).',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:title', content: 'Filip Izydorczyk Blog' },
      { property: 'og:type', content: 'website' },
      { property: 'og:URL', content: 'https://www.filipizydorczyk.pl' },
      {
        property: 'og:image',
        content: 'https://www.filipizydorczyk.pl/img/profile.jpg',
      },
      {
        property: 'og:description',
        content:
          'Hi! I am Filip and I work as a software developer. I am focused on web development, but I enjoy getting out of my comfort zone and trying other aspects of IT in my free time. Professionally, I did lots of different frontend and backend jobs. Mostly I work with javascript / typescript and Java (specifically using Springboot).',
      },
      { property: 'twitter:title', content: 'Filip Izydorczyk Blog' },
      {
        property: 'twitter:description',
        content:
          'Hi! I am Filip and I work as a software developer. I am focused on web development, but I enjoy getting out of my comfort zone and trying other aspects of IT in my free time. Professionally, I did lots of different frontend and backend jobs. Mostly I work with javascript / typescript and Java (specifically using Springboot).',
      },
      {
        property: 'twitter:image',
        content: 'https://www.filipizydorczyk.pl/img/profile.jpg',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.svg' },
      { rel: 'stylesheet', type: 'text/css', href: 'main.css' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: ['~/components', '~/icons', '~/sections'],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // https://v2.nuxt.com/docs/configuration-glossary/configuration-generate/
  generate: {
    subFolders: false,
  },
}

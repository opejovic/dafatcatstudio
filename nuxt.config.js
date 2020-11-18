export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  mode: 'spa',
  router: {
    base: '/',
    services: '/services'
  },

  //

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'DaFatCat',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#bca1f7', height: '2px', throttle: 0 },
  router: {
    linkExactActiveClass: "exact-active-link",
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~assets/index.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}

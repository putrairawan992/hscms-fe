import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - HCMS',
    title: 'HCMS',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet',href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap'},
      { rel: 'stylesheet',href: 'https://fonts.googleapis.com/css?family=Nunito:ital,wght@1,900&display=swap'},
      { rel: 'stylesheet',href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;1,300&display=swap'},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/api.js',
    '~/plugins/alert.js',
    '~/plugins/loader.js',
    '~/plugins/helper.js',
    '~/plugins/notifier.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/auth',
    '@nuxtjs/axios',
    "@nuxtjs/dotenv",
    "@nuxtjs/vuetify",
    ['@nuxtjs/moment',{  
        /* module options */ 
        defaultLocale: 'id',
        locales: ['id']
    }],
    // [  "@nuxtjs/recaptcha", {
    //     hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
    //     language: 'indonesia',   // Recaptcha language (v2)
    //     mode: 'base',       // Mode: 'base', 'enterprise'
    //     version: '1.1.2',    // Version
    //     size: 'normal',        // Size: 'compact', 'normal', 'invisible' (v2)
    //     siteKey: process.env.SITE_KEY,
    // }]
  ],

  axios: {
    baseURL: process.env.BASE_URL,
  },
  
  router: {
    middleware: ['auth']
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          logout: false,
          user: { url: 'auth/userlogin', method: 'get', propertyName: 'data' },
          login: { url: 'auth/login', method: 'post', propertyName: 'access_token' },
        }
      }
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: "#259eae",
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  server: {
    port: process.env.PORT
  }
}

// https://nuxt.com/docs/api/configuration/nuxt-config

const isProduction = process.env.NODE_ENV === 'production'

export default defineNuxtConfig({
  devtools: {enabled: !isProduction},

  runtimeConfig: {
    public: {
      app: {
        title: process.env.NUXT_PUBLIC_APP_NAME,
        description: process.env.NUXT_PUBLIC_APP_DESCRIPTION,
      },
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
  ],

  ssr: false,

  app: {
    head: {
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'zh-CN',
      },
      titleTemplate: `%s - ${ process.env.NUXT_PUBLIC_APP_NAME }`,
      viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
      meta: [
        {name: 'description', content: process.env.NUXT_PUBLIC_APP_DESCRIPTION},
      ],
    },
  },

  css: [
    '@arco-design/web-vue/dist/arco.css',
    '~/assets/css/app.scss',
  ],

  components: {
    global: true,
    pathPrefix: false,
    dirs: ['~/components/global'],
  },

  // https://nuxt.com/modules/device
  device: {
    refreshOnResize: true,
  },

  // https://nuxt.com/modules/tailwindcss
  tailwindcss: {
    configPath: '~tailwind.config.js', viewer: !isProduction,
    config: {darkMode: 'selector'},
  },

  compatibilityDate: '2024-08-17',
})
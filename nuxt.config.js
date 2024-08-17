// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  runtimeConfig: {
    public: {
      appName: null,
      apiBaseUrl: null,
    },
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/device'],
  ssr: false,

  app: {
    head: {
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'zh-CN',
      },
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
    configPath: '~tailwind.config.js', viewer: true,
  },
})
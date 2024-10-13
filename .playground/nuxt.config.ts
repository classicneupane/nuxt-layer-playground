import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  extends: ['..'],
  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@nuxt/test-utils/module'
  ],
  build: {
    transpile: ['vuetify']
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  }
})

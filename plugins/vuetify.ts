import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'
import '@fortawesome/fontawesome-free/css/all.css'
import { mdi } from "vuetify/lib/iconsets/mdi";
// import '@mdi/font/css/materialdesignicons.css' 

const projectTheme = {
  dark: false,
  colors: {
    primary: '#C9C9C9',
    secondary: '#82B1FF',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'projectTheme',
      themes: {
        projectTheme,
      }
    },
    icons: {
      defaultSet: 'fa',
      aliases,
      sets: {
        fa,
        mdi,
      }
    },
    components,
    directives,
  })
  nuxtApp.vueApp.use(vuetify)
})
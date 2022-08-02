import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    vite: {

        define: {
            "process.env.DEBUG": false,
        },
    },
    // serverMiddleware: [
    //     // Will register file from project server-middleware directory to handle /api/* requests
    //     { path: "/api", handler: "~/api/index.js" },
    // ],
    css: ["vuetify/lib/styles/main.sass", "@/assets/styles/main.scss"],
    build: {
        transpile: ["vuetify"],
    },

    modules: ["@nuxt/content"],
    content: {
        // https://content.nuxtjs.org/api/configuration
    },
})

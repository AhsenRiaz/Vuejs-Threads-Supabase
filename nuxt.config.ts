// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "nuxt-icon",
    "@nuxtjs/supabase",
    "@pinia/nuxt",
    "@vite-pwa/nuxt",
  ],
  supabase:{
    url:process.env.SUPABASE_URL,
    key:process.env.SUPABASE_ANON_KEY,
    redirectOptions:{
      login:'/login',
      callback:'/'
    }
  },
  runtimeConfig: {
    public: {
      BUCKET_URL: process.env.BUCKET_URL,
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});

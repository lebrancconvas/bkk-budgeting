import type { NuxtConfig } from "@nuxt/types";
import { createMetadata } from "./utils/metadata";
const BASE_PATH = process.env.BASE_PATH || "";
const { title, meta } = createMetadata();

const config: NuxtConfig = {
  target: "static",

  head: {
    title,
    meta,
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  css: ["@wevisdemo/ui/styles/typography.css", "@wevisdemo/ui/styles/components.css"],

  plugins: [
    "~/plugins/clickOutside.client.ts",
    "~/plugins/vueCookies.ts",
    "~/plugins/nocoDb.ts",
  ],

  components: false,

  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/svg",
    "@nuxtjs/style-resources",
    "@nuxtjs/moment",
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyCwIBLPmMURCSdqe_rQqC4gFrUtteLwbfI",
          authDomain: "participatory-budgeting-a5f34.firebaseapp.com",
          databaseURL:
            "https://participatory-budgeting-a5f34-default-rtdb.asia-southeast1.firebasedatabase.app",
          projectId: "participatory-budgeting-a5f34",
          storageBucket: "participatory-budgeting-a5f34.appspot.com",
          messagingSenderId: "412280397430",
          appId: "1:412280397430:web:d2fd56e866108d5c3c0957",
        },
        services: {
          database: true,
        },
      },
    ],
  ],

  moment: {
    locales: ["th"],
  },

  build: {
    quiet: false,
    transpile: ["@wevisdemo/ui/vue2", "axios"],
    standalone: false,
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/axios", "@nuxtjs/pwa"],

  extends: ["@nuxtjs/eslint-config-typescript"],

  publicRuntimeConfig: {
    path: {
      base: BASE_PATH,
      images: `${BASE_PATH}/images`,
    },
    ncAuthApiSecret: process.env.NC_AUTH_API_SECRET,
  },

  privateRuntimeConfig: {
    ncAuthApiSecret: process.env.NC_AUTH_API_SECRET,
  },

  router: {
    base: BASE_PATH || "/",
  },

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  pwa: {
    manifest: {
      lang: "en",
    },
  },
};

export default config;

require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");

export default {
  env: {
    API_KEY
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  markdownit: {
    html: true,
    injected: true,
    preset: 'default',
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  srcDir: 'src/',
  generate: {
    routes() {
      const careers = axios
        .get("https://yasutomog.microcms.io/api/v1/careers", {
          headers: { "X-API-KEY": process.env.API_KEY }
        })
        .then(res => {
          return res.data.contents.map(career => {
            return "/careers/" + career.id;
          });
        });
      const posts = axios
        .get("https://yasutomog.microcms.io/api/v1/posts", {
          headers: { "X-API-KEY": process.env.API_KEY }
        })
        .then(res => {
          return res.data.contents.map(post => {
            return "/careers/posts/" + post.id;
          });
        });
      return Promise.all([careers, posts]).then(values => {
        return values.join().split(",");
      });
    }
  }
}

const path = require("path");
module.exports = {
    css: {
      loaderOptions: {
        scss: {}
      }
    },
    productionSourceMap: false,
    configureWebpack: {
        resolve: {
            alias: {
                src: path.resolve(__dirname, "src")
            }
        }
    },
    transpileDependencies: [ "vuetify" ],
    pluginOptions: {
      i18n: {
        locale: "en",
        fallbackLocale: "en",
        localeDir: "locales",
        enableInSFC: true
      }
    }
}
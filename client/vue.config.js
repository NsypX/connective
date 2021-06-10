const path = require("path")
const webpack = require("webpack")
const BundleTracker = require("webpack-bundle-tracker")

module.exports = {
  configureWebpack: {
    context: __dirname,
    entry: "./assets/js/index",
    output: {
    //   // path: path.resolve("../server/server/assets/webpack_bundles/"),
      filename: "[name]-[hash].js",
    },
    outputDir: path.resolve("../server/server/assets/webpack_bundles/"),

    plugins: [new BundleTracker({ filename: "./webpack-stats.json" })],
  },

  devServer: {
    disableHostCheck: true,
  },

  pluginOptions: {
    i18n: {
      locale: "he",
      fallbackLocale: "he",
      localeDir: "locales",
      enableInSFC: false,
    },
  },

  // // whitenoise related
  // transpileDependencies: ["vuetify"],
  // publicPath: "/static/spa/", // Should be STATIC_URL + path/to/build
  // // outputDir: path.resolve(
  // //   __dirname,

  // // ), // Output to a directory in STATICFILES_DIRS
  // outputDir: "/workspace/connective/server/spa_backend/spa",
  // filenameHashing: false, // Django will hash file names, not webpack
  // runtimeCompiler: true, // See: https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  // devServer: {
  //   writeToDisk: true, // Write files to disk in dev mode, so Django can serve the assets
  // },
}

/* eslint-disable */
const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "../docs"),
  publicPath: "/vue-fusiongrid/",
  configureWebpack: {
    resolve: {
      symlinks: false
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set("vue$", path.join(__dirname, "node_modules/vue"));
    config.resolve.alias.set("vue-fusiongrid$", path.join(__dirname, "node_modules/vue-fusiongrid"));
  }
};

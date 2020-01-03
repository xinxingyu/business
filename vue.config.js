// vue.config.js

const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: true,
  css: {
    requireModuleExtension: true
  },
  // transpileDependencies: ["view-design", "view"],
  chainWebpack: config => {
    // config.entry("polyfill").add("babel-polyfill");
    config.resolve.alias
      .set("@$", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("layout", resolve("src/layout"))
      .set("base", resolve("src/base"))
      .set("static", resolve("src/static"));
    // .set("swiperjs", resolve("node_modules/swiper/js/swiper.min.js"));
  }
};

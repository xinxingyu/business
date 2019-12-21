import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Swiper from "swiper"; //插件
import "swiper/css/swiper.min.css"; //css样式
import "./assets/fonts/font.module.less";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

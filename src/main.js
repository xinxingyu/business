// import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Tab, Tabs } from "vue-tmn-tabs";
import "./assets/swiper/swiper.min.css";
// import "./assets/fonts/font.module.less";
// import "view-design/dist/styles/iview.css";
// import ViewUI from "view-design";
// import { Button, Table } from "view-design";

// Vue.use(ViewUI);

// Vue.component("Button", Button);
// Vue.component("Table", Table);

import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe).use(SwipeItem);
// Vue.component("Button", Button);

Vue.component("tab", Tab);
Vue.component("tabs", Tabs);

Vue.config.productionTip = false;
Vue.prototype.$EventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

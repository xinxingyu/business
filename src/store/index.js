import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isOpen: false
  },
  mutations: {
    handleMenuStatus(state, value) {
      state.isOpen = value;
    }
  },
  actions: {
    handleMenuStatus({ commit }, { status }) {
      commit("handleMenuStatus", status);
    }
  },
  modules: {},
  getters: {}
});

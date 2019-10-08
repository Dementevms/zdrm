import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    inputSlider: {
      namespaced: true,
      state: {
        time: null
      },
      mutations: {
        setTime(state, data) {
          state.time = data;
        }
      },
      actions: {
        setTime({ commit }, data) {
          console.log('Storetime: ', data);
          commit("setTime", data);
        }
      }
    }
  },
  state: {},
  mutations: {},
  actions: {}
});

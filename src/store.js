import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    inputSlider: {
      namespaced: true,
      state() {
        return {
          valueControlA: null,
          valueControlB: null
        }
      },
      mutations: {
        setControlsValues(state, data) {
          state.valueControlA = data.valueControlA;
          state.valueControlB = data.valueControlB;
        },
        setControlAValue(state, value) {
          state.valueControlA = value;
        }
      },
      actions: {
        setControlsValues({ commit }, data) {
          console.log("setControlsValues: ", data);
          commit("setControlsValues", data);
        },
        setControlAValue({ commit }, value) {
          console.log("setControlAValue: ", value);
          commit("setControlAValue", value);
        },
      }
    }
  },
  state: {},
  mutations: {},
  actions: {}
});

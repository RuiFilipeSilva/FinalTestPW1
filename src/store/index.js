import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    races: [],
    selectId:""
  },
  getters: {
    lastId(state) {
      return state.races.length ?
        state.races[state.races.length - 1].id :
        0;
    },
    idSelect(state) {
      return state.selectId;
    },
  },
  mutations: {
    ADD_RACE(state, payload) {
      state.races.push({
        id: payload.idRace,
        name: payload.nameUser,
        raceName: payload.nameRace,
        time: payload.timeRace,
        type: payload.typeRace,
        obs: payload.obsRace
      })
      localStorage.setItem("races", JSON.stringify(this.state.races))
    },
    CHANGE(state, payload) {
      for (let i in state.races) {
        if (state.races[i].id == payload.idRace) {
          state.races[i].name = payload.editName;
          state.races[i].raceName = payload.editRace;
          state.races[i].time = payload.editTime;
          state.races[i].type = payload.editType;
          state.races[i].obs = payload.editObs;
        }
      }
      localStorage.setItem("races", JSON.stringify(this.state.races))
    },

  },
  actions: {},
  modules: {}
});
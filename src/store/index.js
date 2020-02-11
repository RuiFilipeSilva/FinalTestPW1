import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    races: [],
    selectId: "",
    products: [{
        type: 1,
        name: "Computador",
        price: 750
      },
      {
        type: 1,
        name: "I-Phone",
        price: 1000
      },
      {
        type: 1,
        name: "SmartWatch",
        price: 250
      },
      {
        type: 2,
        name: "t-shirt",
        price: 10
      },
      {
        type: 2,
        name: "Calças",
        price: 20
      },
      {
        type: 2,
        name: "Casaco",
        price: 50
      },
      {
        type: 3,
        name: "Guitarra",
        price: 200
      },
      {
        type: 3,
        name: "Piano",
        price: 500
      },
      {
        type: 3,
        name: "Violino",
        price: 1000
      },
    ],
    orders: []
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
    lastIdOrders(state) {
      return state.orders.length ?
        state.orders[state.orders.length - 1].id : 0;
    }
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
    ADD_ORDER(state, payload) {
      state.orders.push({
        id: payload.idOrder,
        name: payload.nameUser,
        orderName: payload.nameOrder,
        products: payload.chkProducts,
        total: payload.totalPrice,
      })
      localStorage.setItem("orders",JSON.stringify(this.state.orders))
    }

  },
  actions: {},
  modules: {}
});
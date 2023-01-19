import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    dataListing: [],
    subTotal: 0,
  },
  getters: {
    currentListing: (state) => state.dataListing,
    currentSubtotal: (state) => state.subTotal,
  },
  mutations: {
    SET_DATA(state, payload) {
      state.dataListing = payload;
    },
    SET_SUBTOTAL(state, payload) {
      state.subTotal = payload;
    },
    ADD_DATA(state, payload) {
      state.dataListing = payload;
    },
  },
  actions: {
    async getData() {
      try {
        const res = await axios.get(`http://localhost:3000/items`);

        let payload = res.data;

        let result = payload.reduce(function (r, a) {
          r[a.tanggal] = r[a.tanggal] || [];
          r[a.tanggal].push(a);
          return r;
        }, Object.create(null));
        store.commit("SET_DATA", result);
      } catch (e) {
        console.error(e.error);
      }
    },
    async getCalc(commit, payload) {
      store.commit("SET_SUBTOTAL", payload);
    },
    async addData({ commit }, payload) {
      payload.id = Date.now();
      axios
        .post("http://localhost:3000/items", payload)
        .then((response) => {
          commit("ADD_DATA", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});

export default store;

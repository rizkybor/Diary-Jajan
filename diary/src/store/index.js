import { createStore } from "vuex";

const store = createStore({
    state:{
        dataListing: []
    },
    getters:{
        currentListing: (state) => state.dataListing,
    },
    mutations:{
        SET_DATA(state, payload){
            state.dataListing = payload
        }
    },
    actions:{
        async getData(commit, payload){
           let result = payload.reduce(function (r, a){
            r[a.tanggal] = r[a.tanggal] || [];
            r[a.tanggal].push(a);
            return r;
           }, Object.create(null))
           store.commit("SET_DATA", result)
        }
    }
})

export default store
import { createStore } from "vuex";

const store = createStore({
    state:{
        dataListing: [],
        subTotal: 0
    },
    getters:{
        currentListing: (state) => state.dataListing,
        currentSubtotal: (state) => state.subTotal
    },
    mutations:{
        SET_DATA(state, payload){
            state.dataListing = payload
        },
        SET_SUBTOTAL(state, payload){
            state.subTotal = payload
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
        },
        async getCalc(commit, payload){
           store.commit("SET_SUBTOTAL", payload)
            
        }
    }
})

export default store
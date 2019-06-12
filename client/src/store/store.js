import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    count: ''
}

const getters = {
    count: state => state.count,
}

const mutations = {
    count: (state, count) => {
        state.count = count
    }
}

const actions = {
    countAction: (ctx, count) => {
        ctx.commit('count', count)
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store
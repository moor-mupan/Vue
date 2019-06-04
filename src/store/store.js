import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  articles: [
    {
      id: '001',
      title: '文章1',
      time: '2019-12-12',
      content: '撒倒萨大阿萨达'
    },
    {
      id: '002',
      title: '文章2',
      time: '2019-1-12',
      content: '撒Dada倒萨大阿萨达'
    },
  ]
}

const getters = {
  articles: state => {
    return state.articles 
  }
}

const mutations = {
  add: (state, data) => {
    state.push(data)
  }
}

const actions = {
  addAction: (ctx, data) => {
    ctx.commit('add', data)
  }
}

const store = new Vuex.Store({
	state,
  getters,
  mutations,
  actions
})

export default store
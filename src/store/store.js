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
  ],
  users: [
    {
      id: '001',
      userName: 'M先生',
      email: '1778405746@qq.com',
      pass: '123'
    }
  ]
}

const getters = {
  articles: state => state.articles,
  users: state => state.users
}

const mutations = {
  add: (state, data) => {
    state.articles.push(data)
  },
  replace: (state, data) => {
    // map方法会修改原数组
    state.articles.map((article, idx) => {
      if (article.id === data.id) {
        article.content = data.content         
        article.title = data.title         
        article.time = data.time     
      }
    })
  },
  register: (state, userInfo) => {
    state.users.push(userInfo)
  }
}

const actions = {
  addAction: (ctx, data) => {
    ctx.commit('add', data)
  },
  replaceAction: (ctx, data) => {
    ctx.commit('replace', data)
  },
  registerAction: (ctx, userInfo) => {
    ctx.commit('register', userInfo)
  }
}

const store = new Vuex.Store({
	state,
  getters,
  mutations,
  actions
})

export default store
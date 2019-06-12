import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    count: '',
    articles: [],
    users: [{
        id: '001',
        userName: 'M先生',
        email: '1778405746@qq.com',
        pass: '123'
    }]
}

const getters = {
    articles: state => state.articles,
    count: state => state.count,
    users: state => state.users
}

const mutations = {
    count: (state, count) => {
        state.count = count
    },
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
    countAction: (ctx, count) => {
        ctx.commit('count', count)
    },
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
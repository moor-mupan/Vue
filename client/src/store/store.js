import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    articles: [{
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
        {
            id: '003',
            title: '文章3',
            time: '2019-1-12',
            content: `"<ol>\n<li><span style="color: #c23636;">阿达的自行车正常薪资操作成中兄次之阿达的自行车正常薪资操作成中兄<em><strong>次之阿达的自行车正常薪资操作成中兄次之阿达的自行车正<span style="background-color: #2880b9;">常薪资操作成中兄次之阿达的自行车正常薪资操作成中兄次之阿达的自行车正常薪资操作成中兄次之阿达的自行车正常薪资操作成中</span>兄次之阿达的自行车正常薪资操作成中兄次之阿达的自行车正常薪资操作</strong></em>成中兄次之阿达的自行车正常薪资操作成中兄次之阿达的自行车正常薪资操作</span>成中兄次之阿达的自行车正常薪资操作成中兄次之阿达的自行车正常薪资操作成中兄次之阿达的自行车正常薪资操作成中兄次之阿达的自行车正常薪资操作成中兄次之阿达的自行车<span style="background-color: #f29d12;">正<span style="text-decoration: underline;">常薪资操作成中兄次之阿达的自行车正常薪资操作成中兄次之阿达的自行车正常薪资操作成中兄次之阿达的自行车正常薪资操作成中兄次之阿达的自行车正常薪资操作成中兄次之阿达的自行车正常薪资操作成中兄次之阿达的自行车正常薪资操作成中兄次之阿达</span>的自行车正常薪资操作成中兄次之阿达的自行车正常薪资操作成中兄次之阿达的自行车正常薪资操作成中兄次之阿达的自行车正常薪资操</span>作成中兄次之阿达的自行车正常薪资操作成中兄次之阿达的自行车正常薪资操作成中兄次之阿达的自行车正常薪资操作成中兄次之阿达的自行车正常薪资操作<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2153937626,1074119156&amp;fm=27&amp;gp=0.jpg" alt="" width="500" height="375" />成中兄次之阿达的自行车正常薪资操作成中兄次之阿达的自行车正常薪资操作成中兄🤪次之阿达的自行车正常薪资操作成中兄次之阿达的自行车正常薪资操作成中兄😋的自行车正常薪资操作成中兄次之阿达的自行车正常薪资操作成中兄次之阿达的自行车正常薪资操作成中兄次之阿达的自行车正常薪资操作成中兄次之🔢☺️\n<table style="border-collapse: collapse; width: 100%;" border="1">\n<tbody>\n<tr>\n<td style="width: 33.3333%;">&nbsp;</td>\n<td style="width: 33.3333%;">&nbsp;</td>\n<td style="width: 33.3333%;">&nbsp;</td>\n</tr>\n<tr>\n<td style="width: 33.3333%;">&nbsp;</td>\n<td style="width: 33.3333%;">&nbsp;</td>\n<td style="width: 33.3333%;">&nbsp;</td>\n</tr>\n<tr>\n<td style="width: 33.3333%;">&nbsp;</td>\n<td style="width: 33.3333%;">&nbsp;</td>\n<td style="width: 33.3333%;">&nbsp;</td>\n</tr>\n<tr>\n<td style="width: 33.3333%;">&nbsp;</td>\n<td style="width: 33.3333%;">&nbsp;</td>\n<td style="width: 33.3333%;">&nbsp;</td>\n</tr>\n<tr>\n<td style="width: 33.3333%;">&nbsp;</td>\n<td style="width: 33.3333%;">&nbsp;</td>\n<td style="width: 33.3333%;">&nbsp;</td>\n</tr>\n<tr>\n<td style="width: 33.3333%;">&nbsp;</td>\n<td style="width: 33.3333%;">&nbsp;</td>\n<td style="width: 33.3333%;">&nbsp;</td>\n</tr>\n<tr>\n<td style="width: 33.3333%;">&nbsp;</td>\n<td style="width: 33.3333%;">&nbsp;</td>\n<td style="width: 33.3333%;">&nbsp;</td>\n</tr>\n<tr>\n<td style="width: 33.3333%;">&nbsp;</td>\n<td style="width: 33.3333%;">&nbsp;</td>\n<td style="width: 33.3333%;">&nbsp;</td>\n</tr>\n<tr>\n<td style="width: 33.3333%;">&nbsp;</td>\n<td style="width: 33.3333%;">&nbsp;</td>\n<td style="width: 33.3333%;">&nbsp;</td>\n</tr>\n<tr>\n<td style="width: 33.3333%;">&nbsp;</td>\n<td style="width: 33.3333%;">&nbsp;</td>\n<td style="width: 33.3333%;">&nbsp;</td>\n</tr>\n</tbody>\n</table>\n</li>\n<li><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2153937626,1074119156&amp;fm=27&amp;gp=0.jpg" alt="" width="500" height="375" /></li>\n</ol>"`
        },
    ],
    users: [{
        id: '001',
        userName: 'M先生',
        email: '1778405746@qq.com',
        pass: '123'
    }]
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
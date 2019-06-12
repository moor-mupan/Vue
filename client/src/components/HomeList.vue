<template>
  <el-card>
    <div class="item" v-for="item in articles" :key="item.articleId">
      <p class="title">{{item.articleTitle}}</p>
      <p class="time">{{item.articleCreateTime}}</p>
      <div class="btn-area">
        <el-button type="text" @click="detailHandle(item.articleId)">查看</el-button>
        <el-button type="text" @click="editHandle(item.articleId)">编辑</el-button>
      </div>
    </div>
    <div class="noData" v-show="!articles.length">暂无数据</div>
  </el-card>
</template>

<script>
import axios from 'axios'
import formatTime from '../assets/js/common'

let _this;
export default {
  name: "HomeList",
  data() {
    return {
      articles: []
    }
  },
  methods: {
    detailHandle(id) {
      this.$router.push("/home/detail/" + id);
    },
    editHandle(id) {
      this.$router.push("/home/publish/" + id);
    },

    getArticles() {
      const obj = {
        pageIndex: 1, 
        pageSize: 10
      };
      axios.post("/articles/getArticles", obj)
      .then(res => {
        let list = res.data.Data.list;
        _this.$store.dispatch('countAction', list.length)
        
        const articles = list.map((item, idx) => {
          item.articleCreateTime = formatTime(item.articleCreateTime)
          return item
        })
        _this.articles = articles;
      });
    }
  },
  created() {
    _this = this;
  },
  mounted() {
    _this.getArticles()
  },
};
</script>

<style scoped>
.btn-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.el-button {
  padding: 6px 20px;
}
.el-button + .el-button {
  margin-left: 0;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  padding: 0 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.title {
  width: 300px;
}
.noData {
  text-align: center;
}
</style>

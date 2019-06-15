<template>
  <div class="Articles">
    <el-container>
      <el-header>
        <mine-header @logout="logout"></mine-header>
      </el-header>
      <el-main>
        <div class="article-detail" v-if="showContent">
          <div class="detail-title">{{title}}</div>
          <div class="detail" v-html="content"></div>
          <el-button class="back_one" @click="back">返回</el-button>
        </div>
        <div v-else class="table-box">
          <el-table :data="tableData" border height="360px" >
            <el-table-column sortable prop="artitleCreateTime" label="日期" fixed="left"></el-table-column>
            <el-table-column sortable prop="articleAuthor" label="作者"></el-table-column>
            <el-table-column sortable prop="articleTitle" label="标题"></el-table-column>
            <el-table-column label="操作" fixed="right">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="look(scope.row.articleId)">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-button class="back_two" @click="backPublish" v-show="!showContent">返回</el-button>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
let _this;

export default {
  name: "Articles",
  data() {
    return {
      tableData: [],
      title: "",
      content: "<h2>测试</h2><p>测试内容</p>",
      showContent: false
    };
  },
  methods: {
    look(articleId) {
      _this._axios(
        "post",
        "/articles/getArticleDetail",
        { articleId: articleId },
        function(res) {
          _this.showContent = true;
          _this.title = res.data.Data.Item.articleTitle;
          _this.content = res.data.Data.Item.artitleContent;
        }
      );
    },
    back() {
      _this.showContent = false;
    },
    backPublish() {
      _this.$router.push("/publish");
    },
    logout() {
      _this._axios("post", "/users/logout", {}, function(res) {
        _this.$router.push("/");
      });
    },
    getArticles() {
      _this._axios("post", "/articles/getArticles", {}, function(res) {
        const nowData = res.data.Data.list;
        nowData.map((item, idx) => {
          // item.artitleCreateTime = new Date(parseInt(item.artitleCreateTime)).toLocaleDateString().replace(/\//g, '-')
          const DateAll = new Date(parseInt(item.artitleCreateTime));
          let years = DateAll.getFullYear();
          let month = parseInt(DateAll.getMonth()) + 1;
          let date = DateAll.getDate();
          if (month < 10) {
            month = "0" + month;
          }
          if (date < 10) {
            date = "0" + date;
          }
          item.artitleCreateTime = years + "-" + month + "-" + date;
          return item;
        });
        _this.tableData = nowData;
        console.log(nowData);
      });
    }
  },
  mounted() {
    _this = this;
    _this.getArticles();
  },
  components: {
    MineHeader: () => import("../components/MineHeader")
  }
};
</script>

<style scoped>
.table-box{
  background-color: #fff;
  padding: 10px;
  border-radius: 6px;
  box-sizing: border-box;
}
.article-detail {
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: grid;
  grid-template-rows: 30px 340px auto;
  grid-gap: 20px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 6px;
}
.detail-title {
  text-align: center;
  border-bottom: 1px solid #ddd;
  line-height: 30px;
}
.back_one {
  width: 70px;
}
.back_two {
  margin-top: 20px;
}
</style>

<template>
  <el-container class="home">
    <el-header height="60px">
      <h2 class="home-user">M先生</h2>
    </el-header>
    <el-container>
      <el-aside width="160px">
        <el-card>
          <div>昵称：M先生</div>
          <div>园龄：2月</div>
          <div>粉丝：1</div>
          <div>关注：0</div>
        </el-card>
      </el-aside>
      <el-container>
        <el-main>
          <el-tabs @tab-click="tabClick">
            <el-tab-pane label="发表文章">
              <keep-alive>
                <router-view></router-view>
              </keep-alive>
            </el-tab-pane>
            <el-tab-pane label="文章列表">
              <router-view></router-view>
            </el-tab-pane>
          </el-tabs>
        </el-main>
        <el-footer>
          <Foot></Foot>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Foot from "../components/Foot";
export default {
  name: "Home",
  components: { Foot },
  methods: {
    tabClick(e) {
      if (e.label === "发表文章") {
        this.$router.push("/home/publish");
        // 重载编辑器
        this.$router.go(0);
      } else if (e.label === "文章列表") {
        this.$router.push("/home/list");
      }
    }
  }
};
</script>

<style scoped>
.home-user {
  line-height: 60px;
  font-size: 30px;
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
}

/* element-ui */
.el-container,
.el-aside {
  height: 100%;
}
.el-main{
  max-width: 1200px;
}
.el-aside {
  border-right: 1px solid #eee;
}
.el-card.is-always-shadow,
.el-card.is-hover-shadow:focus,
.el-card.is-hover-shadow:hover {
  box-shadow: none;
}
.el-card {
  border: none;
  line-height: 30px;
}
</style>


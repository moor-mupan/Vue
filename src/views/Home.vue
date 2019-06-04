<template>
  <el-container class="home">
    <el-header height="60px">
      <h2 class="home-user">M先生</h2>
      <div class="home-login" @click="loginOut">退出登录</div>
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
          <div class="tab">
            <el-button
              class="tab-item"
              size="small"
              :class="{active: isActive}"
              @click="tanHandle('1')"
            >发布文章</el-button>
            <el-badge :value="count" class="item">
              <el-button
                class="tab-item"
                size="small"
                :class="{active: !isActive}"
                @click="tanHandle('2')"
              >文章列表</el-button>
            </el-badge>
          </div>
          <router-view></router-view>
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
  data() {
    return {
      isActive: true
    };
  },
  computed: {
    count() {
      return this.$store.getters.articles.length;
    }
  },
  methods: {
    tanHandle(idx) {
      let path = this.$route.path;
      if (idx == 1) {
        this.isActive = true;
        this.$router.push("/home/publish/id");
      } else {
        this.$router.push("/home/list");
        this.isActive = false;
      }
    },
    loginOut () {
      this.$router.push('/')
    }
  },
  mounted() {
    let path = this.$route.path;
    if (path == "/home/list") {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }
};
</script>

<style scoped>
.home-user {
  display: inline-block;
  line-height: 60px;
  font-size: 30px;
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
}
.home-login{
  display: inline-block;
  padding: 10px 20px;
  margin-left: 60px;
  border-radius: 6px;
}
.home-login:active{
  text-decoration: underline;
  background-color: #ddd;
}
.tab {
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(0, 0, 0, .2);
}
.active {
  background-color: rgba(212, 212, 248, .6) !important;
}
/* element-ui */
.el-container,
.el-aside {
  height: 100%;
}
.el-header{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
}
.el-main {
  max-width: 1200px;
  padding: 10px 20px;
}
.el-aside {
  border-right: 1px solid rgba(0, 0, 0, .2);
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
.el-badge {
  margin: 0 20px;
}
</style>


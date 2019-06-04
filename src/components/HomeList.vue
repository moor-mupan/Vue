<template>
  <el-card>
    <div class="item" v-for="item in articels" :key="item.id">
      <p class="title">{{item.title}}</p>
      <p class="time">{{item.time}}</p>
      <div class="btn-area">
        <el-button type="text" @click="detailHandle(item.id)">查看</el-button>
        <el-button type="text" @click="editHandle(item.id)">编辑</el-button>
      </div>
    </div>
    <div class="noData" v-show="!articels.length">暂无数据</div>
  </el-card>
</template>

<script>
import { constants } from 'fs';
let _this;
export default {
  name: "HomeList",
  computed: {
    articels() {
      return _this.$store.getters.articles;
    }
  },
  methods: {
    detailHandle(id) {
      this.$router.push("/home/detail/" + id);
    },
    editHandle(id) {
      this.$router.push("/home/publish/" + id);
    }
  },
  created() {
    _this = this;
  }
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
  border-bottom: 1px solid rgba(0, 0, 0, .2);
}
.title {
  width: 300px;
}
.noData {
  text-align: center;
}
</style>

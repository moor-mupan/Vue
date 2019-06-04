<template>
  <div>
    <div class="pd10">
      <h1 class="pd10">标题</h1>
      <el-input v-model="title" type="text" placeholder="文章标题" clearable></el-input>
    </div>
    <div class="pd10">
      <h1 class="pd10">内容</h1>
      <el-form :model="form">
        <el-form-item>
          <el-input type="textarea" id="mytextarea" v-model="form.content"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="publishHandle">发表</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomePublish",
  data() {
    return {
      title: "",
      form: {
        content: ""
      }
    };
  },
  methods: {
    publishHandle() {
      console.log("提交");
    }
  }
};
</script>

<style scoped>
</style>


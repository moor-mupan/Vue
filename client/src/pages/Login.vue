<template>
  <div class="login">
    <el-form
      class="form"
      :model="form"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
    >
      <el-form-item label="邮箱" prop="email">
        <el-input type="text" v-model="form.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input type="password" v-model="form.pwd" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button @click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { constants } from 'fs';
let _this = this;
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "1778405746@qq.com",
        pwd: "123"
      },
      rules: {
        email: [],
        pwd: []
      }
    };
  },
  methods: {
    login() {
      const user = {
        userEmail: _this.form.email,
        userPwd: _this.form.pwd
      };
      if (!_this.form.email || !_this.form.pwd) {
        _this.$message({
          type: 'error',
          message: '邮箱或密码不能为空'
        })
        return
      }
      _this._axios("post", "/users/login", user, function(res) {
        _this.$router.push("/publish");
      });
    },
    register() {
      _this.$message("正在努力开发中！");
    }
  },
  mounted() {
    _this = this;
  }
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 300px;
  justify-content: center;
  align-items: center;
}
</style>


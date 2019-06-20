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
      <el-form-item label="用户名" prop="email">
        <el-input type="text" v-model="form.name" placeholder='注册时必填！' autocomplete="off"></el-input>
      </el-form-item>
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
let _this = this;
export default {
  name: "Login",
  data() {
    return {
      form: {
        name: '',
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
          type: "error",
          message: "邮箱或密码不能为空"
        });
        return;
      }
      _this._axios("post", "/users/login", user, function(res) {
        _this.$router.push("/publish");
      });
    },
    register() {
      const user = {
        userName: _this.form.name,
        userEmail: _this.form.email,
        userPwd: _this.form.pwd
      };
      if (!_this.form.email || !_this.form.pwd || !_this.form.name) {
        _this.$message({
          type: "error",
          message: "用户名、邮箱或密码不能为空"
        });
        return;
      }
      _this._axios("post", "/users/register", user, function(res) {
        _this.$message({
          type: "success",
          message: res.data.Msg
        });
        _this.login();
      });
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
  grid-template-columns: 360px;
  justify-content: center;
  align-items: center;
}
</style>


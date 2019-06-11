<template>
  <el-form :model="form" ref="form" :rules="rules" class="login">
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="form.email" clearable></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="form.pass" clearable></el-input>
    </el-form-item>
    <el-form-item>
      <el-button @click="loginHandle">登录</el-button>
      <el-button @click="registerHandle">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
let _this;
export default {
  data() {
    const emailRule = (rule, value, callback) => {
      const reg = /^[0-9a-z]{6,12}@{1}[a-z]{2,4}(\.com|\.com\.cn)$/g;
      if (value === "") {
        callback(new Error("请输入邮箱"));
      } else if (!reg.test(value)) {
        callback(new Error("邮箱格式错误"));
      } else {
        callback();
      }
    };
    const passRule = (rule, value, callback) => {
      const reg = /\W/g; //查找非单词字符
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (reg.test(value)) {
        callback(new Error("密码只能由数字和字母组成！"));
      } else if (value.length > 12 || value.length < 2) {
        callback(new Error("密码长度为6-12位"));
      } else {
        callback();
      }
    };
    return {
      form: {
        email: "1778405746@qq.com",
        pass: "123"
      },
      rules: {
        email: [{ required: true, validator: emailRule, trigger: "blur" }],
        pass: [{ required: true, validator: passRule, trigger: "blur" }]
      }
    };
  },
  methods: {
    loginHandle() {
      _this.$refs.form.validate(valid => {
        if (valid) {
          // 执行校验成功后的操作
          let users = _this.$store.getters.users;
          let user = users.filter((user, idx) => {
            return user.email === _this.form.email;
          });
          let userPass = users.filter((user, idx) => {
            return user.pass === _this.form.pass;
          });
          if (user.length === 0) {
            _this.$message.error("该账号未注册！");
            return;
          }
          if (userPass.length === 0) {
            _this.$message.error("密码错误！");
            return;
          }
          // _this.form = {
          //   email: '',
          //   pass: ''
          // }
          _this.$router.push("/home/publish/id");
        } else {
          return false;
        }
      });
    },
    registerHandle() {
      _this.$refs.form.validate(valid => {
        if (valid) {
          // 执行校验成功后的操作
          _this.$message.success('暂时无法注册新账号！')
          // _this.form = {
          //   email: "",
          //   pass: ""
          // };
        } else {
          return false;
        }
      });
    }
  },
  mounted() {
    _this = this;
  }
};
</script>

<style>
.login {
  width: 300px;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 6px;
  padding: 10px;
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>

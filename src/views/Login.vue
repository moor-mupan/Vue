<template>
  <el-form :model="from" :rules="rules" ref="form" class="login">
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="from.email" clearable></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input v-model="from.pass" clearable></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="loginHandle">登录</el-button>
      <el-button @click="registerHandle">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
let _this
export default {
  data() {
    const emailRule = (rule, value, callback) => {
              const reg = /^[0-9a-z]{6, 12}@{1}[a-z]{2,4}(\.com|\.com\.cn)$/g
              if (value === '') {
                callback(new Error('请输入邮箱'))
              } else if (reg.test(value)) {
                callback(new Error('邮箱格式错误'))
              } else {
                callback()
              }
          }
    const passRule = (rule, value, callback) => {
              const reg = /\W/g   //查找非单词字符
              if (value === '') {
                callback(new Error('请输入密码'))
              } else if (reg.test(value)) {
                callback(new Error('密码只能由数字和字母组成！'))
              } else if (value.length > 12 || value.length < 6) {
                callback(new Error('密码长度为6-12位'))
              } else {
                callback()
              }
          }      
    return {
      from: {
        email: "",
        pass: ""
      },
      rules: {
        email: [
          { required: true, validator: emailRule, trigger: "blur" },
        ],
        pass: [
           { required: true, validator: passRule, trigger: "blur" },
        ]
      }
    };
  },
  methods: {
    loginHandle() {
      _this.$refs.form.validate((valid) => {
          if (valid) {
            // 执行校验成功后的操作
            alert('login');
            _this.from = {
              email: '',
              pass: ''
            }
          } else {
            return false;
          }
        });
    },
    registerHandle() {
      _this.$refs.form.validate((valid) => {
          if (valid) {
            // 执行校验成功后的操作
            alert('register');
            _this.from = {
              email: '',
              pass: ''
            }
          } else {
            return false;
          }
        });
    }
  },
  mounted () {
    _this = this
  }
};
</script>

<style>
  .login{
    width: 300px;
    border: 1px solid #eee;
    border-radius: 6px;
    padding: 10px;
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>

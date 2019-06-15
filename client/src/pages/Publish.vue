<template>
  <div class="publish">
    <el-container>
      <el-header>
        <mine-header @logout='logout'></mine-header>
      </el-header>
      <el-main>
        <el-form :model="form" :rules="rules" ref="form" label-width="100px">
          <el-form-item label="标题" prop="title">
            <el-input type="text" v-model="form.title" placeholder="请输入标题" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="内容" prop="content">
            <Editor id="tinymce" v-model="tinymceHtml" :init="editorInit"></Editor>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="publish">发表</el-button>
            <el-button @click="look">查看</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import tinymce from "tinymce/tinymce";
import "tinymce/themes/silver/theme";
import Editor from "@tinymce/tinymce-vue";
import { fips } from 'crypto';

let _this;
export default {
  name: "Publish",
  data() {
    return {
      form: {
        title: ""
      },
      rules: {
        title: []
      },
      tinymceHtml: "",
      editorInit: {
        height: 330,
        plugins:
          "link lists image code table colorpicker textcolor wordcount contextmenu",
        toolbar:
          "bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat"
      }
    };
  },
  methods: {
    publish() {
      const data = {
        articleTitle: _this.form.title,
        artitleContent: _this.tinymceHtml
      }
      if (!_this.form.title || !_this.tinymceHtml) {
        _this.$message({
          type: 'error',
          message: '标题或内容不能为空'
        })
        return
      }
      _this._axios('post', '/articles/addArticle', data, function (res) {
          _this.form.title = ''
          _this.tinymceHtml = ''
      })
    },
    look() {
      _this.$router.push("/articles");
    },
    logout() {
      _this._axios("post", "/users/logout", {}, function(res) {
        console.log(res);
        _this.$router.push("/");
      });
    }
  },
  mounted() {
    _this = this;
  },
  components: {
    MineHeader: () => import("../components/MineHeader"),
    Editor
  }
};
</script>

<style scoped>
.publish /deep/ .tox .tox-statusbar {
  display: none !important;
}
</style>

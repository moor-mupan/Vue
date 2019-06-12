<template>
  <div>
    <div class="pd10">
      <h1 class="pd10" >标题</h1>
      <el-input v-model="article.articleTitle" type="text" placeholder="文章标题" clearable></el-input>
      <el-input v-model="article.articleId" ></el-input>
    </div>
    <div class="pd10">
      <h1 class="pd10">内容</h1>
      <div class="content">
        <el-form ref="form" class="editor">
          <el-form-item>
            <editor id="tinymce" v-model="article.articleContent" :init="init"></editor>
          </el-form-item>
          <el-form-item>
            <el-button @click="publishHandle">发布</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
        <p class="editor-content" v-html="article.articleContent"></p>
      </div>
    </div>
  </div>
</template>

<script>
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
import axios from "axios";

export default {
  name: "HomePublish",
  components: { Editor },
  data() {
    return {
      article: {},
      init: {
        contextmenu: "link image imagetools table spellchecker",
        min_height: 480,
        max_height: 480,
        plugins: [
          "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker autoresize",
          "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
          "save table directionality emoticons template paste"
        ],
        toolbar:
          "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons"
      }
    };
  },
  methods: {
    publishHandle() {
      const article = this.article
      axios.post('/articles/saveArticle', article)
      .then(res => {
        if (res.data.Status == 0) {
          this.$message({
          message: res.data.Msg,
          type: 'success'
        });
        }
      })
    },
    editArticle() {
      const articleId = this.$route.params.id;
      if (articleId === "id") {
        this.title = ''
        this.tinymceHtml = ''
        return;
      }
      axios
        .get("/articles/getArticleDetail", { params: { articleId } })
        .then(res => {
          if (res.data.Status == 0) {
            const article = res.data.Data.Item
            this.article = article
          }
        });
    }
  },
  mounted() {
    tinymce.init({})
    this.editArticle()
  }
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
}
.editor {
  width: 50%;
}
.editor-content {
  width: 50%;
  height: 480px;
  white-space: pre-wrap;
  overflow: auto;
  margin-left: 20px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  box-sizing: border-box;
}
</style>


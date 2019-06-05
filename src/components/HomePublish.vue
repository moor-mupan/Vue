<template>
  <div>
    <div class="pd10">
      <h1 class="pd10">标题</h1>
      <el-input v-model="title" type="text" placeholder="文章标题" clearable></el-input>
    </div>
    <div class="pd10">
      <h1 class="pd10">内容</h1>
      <div class="content">
        <el-form ref="form" class="editor">
          <el-form-item>
            <editor id="tinymce" v-model="tinymceHtml" :init="init"></editor>
          </el-form-item>
          <el-form-item>
            <el-button @click="publishHandle">发布</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
        <p class="editor-content" v-html="tinymceHtml"></p>
      </div>
    </div>
  </div>
</template>

<script>
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";

export default {
  name: "HomePublish",
  components: { Editor },
  data() {
    return {
      title: "",
      tinymceHtml: "",
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
      let idx = this.$store.getters.articles.length + 1;
      let date = new Date();
      let time = date.toLocaleDateString().replace(/\//g, "-");
      let content = this.tinymceHtml;
      let data = {};
      const pathId = this.$route.params.id;
      if (pathId !== "id") {
        data = {
          id: pathId,
          title: this.title,
          content: content,
          time: time
        };
        this.$store.dispatch("replaceAction", data);
        this.title = "";
        this.tinymceHtml = "";
        this.$message.success("成功");
        return;
      }

      if (!this.title.trim()) {
        this.$message.error("请输入文章标题");
        return;
      }
      data = {
        id: "00" + idx,
        title: this.title,
        content: content,
        time: time
      };
      this.$store.dispatch("addAction", data);
      this.title = "";
      this.tinymceHtml = "";
      this.$message.success("成功");
    }
  },
  mounted() {
    tinymce.init({});
    const { id } = this.$route.params;
    if (id === "id") {
      return;
    }
    const articles = this.$store.getters.articles;
    const articleArr = articles.filter(article => {
      return article.id === id;
    });
    console.log(articleArr);
    this.title = articleArr[0].title;
    this.tinymceHtml = articleArr[0].content;
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


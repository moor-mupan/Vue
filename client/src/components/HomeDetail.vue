<template>
  <div class="pd10">
    <h3 class="title pd10">{{article.articleTitle}}</h3>
    <div v-html="article.articleContent"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeDetail",
  data() {
    return {
      article: {}
    };
  },
  methods: {
    getArticleDetail() {
      const articleId = this.$route.params.id;
      axios
        .get("/articles/getArticleDetail", { params: { articleId: articleId } })
        .then(res => {
          if (res.data.Status == 0) {
            this.article = res.data.Data.Item;
          }
        });
    }
  },
  mounted() {
    this.getArticleDetail();
  }
};
</script>

<style scoped>
.title {
  text-align: center;
}
</style>

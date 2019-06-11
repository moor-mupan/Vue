<template>
  <div class="pd10">
    <h3 class="title pd10">{{article.title}}</h3>
    <div v-html="article.content"></div>
  </div>
</template>

<script>
export default {
  name: "HomeDetail",
  data() {
    return {
      article: {
        title: '',
        content: ''
      }
    };
  },
  computed: {},
  mounted() {
    let content = this.$store.getters.articles.filter(val => {
      return val.id === this.$route.path.replace(/\/home\/detail\//g, "");
    });
    this.article.content = content[0].content;
    this.article.title = content[0].title;
  }
};
</script>

<style scoped>
.title{
  text-align: center;
}
</style>

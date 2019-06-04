<template>
  <el-card class="box-card">
    <div v-for="item in articels" :key="item.id">{{item.title}}</div>
  </el-card>
</template>

<script>
export default {
  name: "HomeList",
  computed: {
    articels () {
      return this.$store.getters.articels
    }
  },
  mounted () {
    console.log(this.$store.getters.articels)
  }
};
</script>

<style scoped>
</style>

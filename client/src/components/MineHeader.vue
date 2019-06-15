<template>
  <div class="header">
    <div class="logout">
      <div class="name">{{userName ? userName : '昵称'}}</div>
      <div @click="logout">登出</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MineHeader",
  data() {
    return {
      userName: ""
    };
  },
  methods: {
    logout() {
      this.$emit("logout");
    }
  },
  mounted() {
    const userName = document.cookie.split(';')[1].split('=')[1];
    // decodeURI
    this.userName = decodeURI(userName).replace(/\"/g, '')
  }
};
</script>

<style scoped>
.header {
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
}
.name {
  margin-right: 20px;
}
.logout {
  height: 100%;
  display: flex;
}
</style>


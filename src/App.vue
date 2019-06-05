<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html,
body {
  position: relative;
  padding: 0;
  margin: 0;
  height: 100%;
  /* 修改博客主题背景图片 */
  /* background: url('../static/imgs/bg1.jpg') center center no-repeat; */
  /* background: url("../static/imgs/bg2.jpg") center center no-repeat; */
  background: url("../static/imgs/bg3.jpg") center center no-repeat;
  background-size: 100% 100%;
}
.el-main,
.el-card,
.el-input__inner,
.el-button,
.tox .tox-menubar,
.tox .tox-toolbar,
.tox .tox-dialog-wrap__backdrop,
.tox .tox-edit-area__iframe {
  background-color: transparent !important;
}
.el-input__inner {
  border: 1px solid rgba(0, 0, 0, 0.2);
}
#app {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 1280px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.9) !important;
}
@media screen and (max-width: 1280px) {
  #app {
    width: 1028px;
  }
}
/* 编辑框底部去除 */
.tox .tox-statusbar {
  display: none !important;
}
</style>

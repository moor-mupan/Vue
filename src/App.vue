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
body,
#app {
  padding: 0;
  margin: 0;
  height: 100%;
}
*{
  background-color: transparent !important;
}
#app {
  background: url("../static/imgs/bg2.jpg") center center no-repeat !important;
  background-size: 100% 100%;
}
</style>

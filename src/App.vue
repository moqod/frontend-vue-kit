<template>
  <div id="app" class="app">
    <img
        src="./assets/img/logo.png"
        height="200"
        width="200"
        alt="logo"
    >
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style src="./App.less" scoped lang="less"></style>

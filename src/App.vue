<template>
  <div id="app" class="app">
    <HeaderBlock></HeaderBlock>
    <div class="main">
      <router-view></router-view>
    </div>
    <FooterBlock></FooterBlock>
  </div>
</template>

<script>
  import Header from './components/Header/index';
  import Footer from './components/Footer/index';

  export default {
    name: 'app',
    components: {
      HeaderBlock: Header,
      FooterBlock: Footer
    }
  };
</script>

<style src="./App.style.less" scoped lang="less"></style>
<style src="./assets/less/core/normalize.css" scoped lang="less"></style>

<template>
  <div
    id="app"
    class="app"
  >
    <HeaderBlock />
    <div class="main">
      <router-view />
    </div>
    <FooterBlock />
  </div>
</template>

<script>
import Header from './components/Header/index'
import Footer from './components/Footer/index'

export default {
  name: 'App',
  components: {
    HeaderBlock: Header,
    FooterBlock: Footer
  }
}
</script>

<style src="./App.less" scoped lang="less"></style>
<style src="./assets/less/core/normalize.css" scoped lang="less"></style>

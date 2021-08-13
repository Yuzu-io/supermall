<template>
  <div id="app">
    <keep-alive include="Home">
<router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './components/content/mainTabbar/MainTabBar.vue';

export default {
  components: {
    MainTabBar,
  },
}
</script>

<style scoped>
@import './assets/css/base.css';
</style>

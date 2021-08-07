<template>
  <tab-bar>
    <tab-bar-item v-for="item in list"
                  :key="item"
                  :path="item.path">
      <img slot="item-icon"
           :src="item.src"
           alt="">
      <img slot="item-icon-active"
           :src="item.src_active"
           alt="">
      <div slot="item-text">{{item.text}}</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from './tabbar/Tabbar.vue'
import TabBarItem from './tabbar/TabBarItem.vue'


export default {
  data () {
    return {
      list: [
        {
          path: '/home',
          src: require('@/assets/img/tabbar/home.png'),
          src_active: require('@/assets/img/tabbar/home_active.png'),
          text: '首页'
        },
        {
          path: '/category',
          src: require('@/assets/img/tabbar/category.png'),
          src_active: require('@/assets/img/tabbar/category_active.png'),
          text: '分类'
        },
        {
          path: '/shop',
          src: require('@/assets/img/tabbar/shopcart.png'),
          src_active: require('@/assets/img/tabbar/shopcart_active.png'),
          text: '购物车'
        },
        {
          path: '/profile',
          src: require('@/assets/img/tabbar/profile.png'),
          src_active: require('@/assets/img/tabbar/profile_active.png'),
          text: '我的'
        },
      ]
    }
  },
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
</style>
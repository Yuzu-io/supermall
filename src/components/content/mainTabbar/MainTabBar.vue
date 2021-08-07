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
import TabBar from '../../common/tabbar/Tabbar.vue'
import TabBarItem from '../../common/tabbar/TabBarItem.vue'


export default {
  data () {
    return {
      list: [
        {
          path: '/home',
          src: require('@/assets/img/tabbar/home.svg'),
          src_active: require('@/assets/img/tabbar/home_active.svg'),
          text: '首页'
        },
        {
          path: '/category',
          src: require('@/assets/img/tabbar/category.svg'),
          src_active: require('@/assets/img/tabbar/category_active.svg'),
          text: '分类'
        },
        {
          path: '/shopcart',
          src: require('@/assets/img/tabbar/shopcart.svg'),
          src_active: require('@/assets/img/tabbar/shopcart_active.svg'),
          text: '购物车'
        },
        {
          path: '/profile',
          src: require('@/assets/img/tabbar/profile.svg'),
          src_active: require('@/assets/img/tabbar/profile_active.svg'),
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
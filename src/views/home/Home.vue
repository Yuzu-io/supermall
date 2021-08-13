<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']"
                 @tabClick="tabClick"
                 ref="tabControlFixed"
                 class="fixed"
                 v-show="isTabFixed"></tab-control>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <home-swiper :banners="banners"
                   @swiperImageLoad="swiperImageLoad"></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-feature-view></home-feature-view>
      <tab-control :titles="['流行','新款','精选']"
                   @tabClick="tabClick"
                   ref="tabControl"></tab-control>

      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick"
              v-show="isShowBackTop"></back-top>

  </div>
</template>

<script>
// 公共组件
import NavBar from '../../components/common/navbar/NavBar.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import TabControl from '../../components/content/tabControl/TabControl.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import BackTop from '../../components/content/backTop/BackTop.vue'

// home子组件
import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecommendView from './childComps/HomeRecommendView.vue'
import HomeFeatureView from './childComps/HomeFeatureView.vue'

// 业务js
import { getHomeMultidata, getHomeGoods } from '../../network/home'
import { debounce } from '../../common/utils'


export default {
  name: 'Home',
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    }
  },
  computed: {
    showGoods () {
      return this.goods[this.currentType].list
    }
  },
  components: {
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,

    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
  },
  activated () {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    // 回来时刷新
    this.$refs.scroll.refresh()
  },
  deactivated () {
    this.saveY = this.$refs.scroll.getScrollY()
  },
  created () {
    // 1、请求多个数据
    this.getHomeMultidata()

    // 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },
  mounted () {
    // 1、监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 500)
    this.$bus.$on('itemImageLoad', () => {
      // 闭包
      refresh()
    })

  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    tabClick (index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
      this.$refs.tabControlFixed.currentIndex = index
      this.$refs.tabControl.currentIndex = index
    },
    backClick () {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500)
    },
    contentScroll (position) {
      // 1、判断BackTop是否显示
      this.isShowBackTop = Math.abs(position.y) > 1000

      // 2、决定tabControl是否吸顶(position:fixed)
      this.isTabFixed = Math.abs(position.y) > this.tabOffsetTop
    },
    loadMore () {
      this.getHomeGoods(this.currentType)
    },
    swiperImageLoad () {
      // 获取tabControl的tabOffsetTop
      // 所有的组件都有个属性 $el:用于获取组件中的元素的
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    },


    /**
     * 网络请求相关的方法
     */
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp()
        // 刷新
        this.$refs.scroll.refresh()
      })
    }

  },

}
</script>

<style scoped>
#home {
  /* padding: 44px 0 0 0; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999; */
}

.fixed {
  position: relative;
  z-index: 99;
  background-color: #fff;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}

/* .content {
  height: calc(100% - 93px);
  overflow: hidden;
  margin: 43px 0 0 0;
} */
</style>
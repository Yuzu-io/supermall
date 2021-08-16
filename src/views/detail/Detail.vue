<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"
                    @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="detail-wrapper"
            ref="scroll"
            @scroll="contenScroll"
            :probe-type="3">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo"
                         @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info ref="param"
                         :paramInfo="paramInfo"></detail-param-info>
      <detail-comment-info ref="comment"
                           :commentInfo="commentInfo"></detail-comment-info>
      <goods-list ref="recommend"
                  class="detail-goods-list"
                  :goods="recommend"></goods-list>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamInfo from './childComps/DetailParamInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'

import Scroll from '../../components/common/scroll/Scroll.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'

import { getDetail, getRecommend, Goods, Shop, GoodsParam } from '../../network/detail'
import { itemListenerMixin } from '../../common/mixin'

export default {
  name: 'Detail',
  mixins: [itemListenerMixin],
  data () {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themeTopYs: [],
      currentIndex: 0
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,

    Scroll,
    GoodsList,
  },
  created () {
    // 保存传入的iid
    this.iid = this.$route.query.iid

    // 根据iid请求详细数据
    getDetail(this.iid).then(res => {
      // console.log(res);
      const data = res.result
      // 1、获取顶部轮播数据
      this.topImages = data.itemInfo.topImages

      // 2、获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      // 3、创建店铺信息对象
      this.shop = new Shop(data.shopInfo)

      // 4、获取商品详细信息
      this.detailInfo = data.detailInfo

      // 5、获取参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      // 取出评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
    })

    // 请求推荐数据
    getRecommend().then(res => {
      // console.log(res);
      this.recommend = res.data.list
    })

  },
  methods: {
    imageLoad () {
      this.$refs.scroll.refresh()

      // 
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.param.$el.offsetTop - 44)
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44)
      // console.log(this.themeTopYs);
    },
    titleClick (index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500)
    },
    contenScroll (position) {
      // 1、获取y值
      const positionY = -position.y
      // 2、positionY和主题中的值进行对比
      let length = this.themeTopYs.length - 1
      for (let i = 0; i < this.themeTopYs.length; i++) {
        if (this.currentIndex !== i && ((i < length && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) || (i === length && positionY > this.themeTopYs[i]))) {
          this.currentIndex = i
          this.$refs.nav.currentIndex = this.currentIndex
        }
      }
    }
  },
  mounted () {
  },
  destroyed () {
    this.$bus.$off('itemImageLoad', this.itemImgListstener);
  },
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9999;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 999;
  background-color: #fff;
}
.detail-wrapper {
  height: calc(100% - 44px);
  background-color: #fff;
}
</style>
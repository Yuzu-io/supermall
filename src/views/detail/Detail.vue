<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="detail-wrapper" ref="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo"
                         @imageLoad="imageLoad"></detail-goods-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'

import Scroll from '../../components/common/scroll/Scroll.vue'

import { getDetail, Goods, Shop } from '../../network/detail'

export default {
  name: 'Detail',
  data () {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {}
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,

    Scroll,
  },
  created () {
    // 保存传入的iid
    this.iid = this.$route.query.iid

    // 根据iid请求详细数据
    getDetail(this.iid).then(res => {
      console.log(res);
      const data = res.result
      // 1、获取顶部轮播数据
      this.topImages = data.itemInfo.topImages

      // 2、获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      // 3、创建店铺信息对象
      this.shop = new Shop(data.shopInfo)

      // 4、获取商品详细信息
      this.detailInfo = data.detailInfo

    })
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()
    }
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
}
</style>
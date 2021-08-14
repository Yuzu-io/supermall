<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :topImages="topImages"></detail-swiper>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'

import { getDetail } from '../../network/detail'

export default {
  name: 'Detail',
  data () {
    return {
      iid: null,
      topImages: []
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper
  },
  created () {
    // 保存传入的iid
    this.iid = this.$route.query.iid

    // 根据iid请求详细数据
    getDetail(this.iid).then(res => {
      console.log(res);
      // 1、获取顶部轮播数据
      this.topImages= res.result.itemInfo.topImages
    })
  },
}
</script>

<style scoped>
</style>
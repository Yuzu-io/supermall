<template>
  <div class="shop-cart">
    <shop-cart-nav-bar></shop-cart-nav-bar>
    <scroll class="shop-cart-content" ref="scroll">
      <shop-cart-list v-for="(item,index) in cartList"
                      :key="index" :item-info="item"></shop-cart-list>
    </scroll>

  </div>
</template>

<script>
import Scroll from '../../components/common/scroll/Scroll.vue'
import ShopCartList from './childComps/ShopCartList.vue'
import ShopCartNavBar from './childComps/ShopCartNavBar.vue'

import { mapGetters } from 'vuex'

export default {
  components: { ShopCartNavBar, ShopCartList, Scroll },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated(){
    this.$refs.scroll.refresh()
  }

}
</script>

<style scoped>
.shop-cart {
  height: 100vh;
}
.shop-cart-content {
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>
<template>
  <div class="shop-cart">
    <shop-cart-nav-bar></shop-cart-nav-bar>
    <scroll class="shop-cart-content"
            ref="scroll">
      <shop-cart-list v-for="(item,index) in cartList"
                      :key="index"
                      :item-info="item"></shop-cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import Scroll from '../../components/common/scroll/Scroll.vue'

import ShopCartList from './childComps/ShopCartList.vue'
import ShopCartNavBar from './childComps/ShopCartNavBar.vue'
import CartBottomBar from './childComps/CartBottomBar.vue'

import { mapGetters } from 'vuex'

export default {
  components: {
    ShopCartNavBar,
    ShopCartList,
    CartBottomBar,

    Scroll
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated () {
    this.$refs.scroll.refresh()
  }

}
</script>

<style scoped>
.shop-cart {
  height: 100vh;
}
.shop-cart-content {
  height: calc(100% - 93px - 40px);
  overflow: hidden;
}
</style>
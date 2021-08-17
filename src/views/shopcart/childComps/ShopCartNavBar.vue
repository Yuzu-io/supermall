<template>
  <nav-bar class="nav-bar">
    <div slot="center">购物车({{cartLength}})</div>
  </nav-bar>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar.vue'

import {mapGetters} from 'vuex'

export default {
  components: { NavBar },
  data () {
    return {
      
    }
  },
  computed: {
    // 两种语法
    ...mapGetters([
      'cartLength'
    ]),
    // ...mapGetters({
    //   length:'cartLength'
    // })
  },
}
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
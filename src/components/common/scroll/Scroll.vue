<template>
  <div class="wrapper"
       ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
  },
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    // 1、创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,
      click: true,
      probeType: this.probeType
    })

    // 2、监听滚动的位置
    this.scroll.on('scroll',(position)=>{
      // console.log(position);
      this.$emit('scroll',position)
    })

  },
  methods: {
    scrollTo (x, y, time) {
      this.scroll.scrollTo(x, y, time)
    }
  },
}
</script>

<style scoped>
</style>
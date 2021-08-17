import { debounce } from './utils'
import BackTop from '../components/content/backTop/BackTop.vue'

export const itemListenerMixin = {
  data () {
    return {
      itemImgListstener: null
    }
  },
  mounted () {
    // 1、监听item中图片加载完成
    let refresh = debounce(this.$refs.scroll.refresh, 500)

    // 对我们监听的事件进行保存
    this.itemImgListstener = () => {
      // 闭包
      refresh()
    }
    this.$bus.$on('itemImageLoad', this.itemImgListstener);
  },
}

export const backTopMixin = {
  components: {
    BackTop,
  },
  data () {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    backClick () {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500)
    },
  },
}
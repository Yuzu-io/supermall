<template>
  <div>
    <nav-bar>
      <div slot="left"
           class="back"
           @click="backClick">
        <img src="../../../assets/img/common/back.svg"
             alt="">
      </div>
      <div slot="center"
           class="title">
        <div class="title-item"
             v-for="(item,index) in titles"
             :key="index"
             :class="{active:index === currentIndex}"
             @click="titleClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../../components/common/navbar/NavBar.vue'

export default {
  components: { NavBar },
  data () {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick (index) {
      this.currentIndex = index
    },
    backClick(){
      this.$router.back()
    }
  },
}
</script>

<style scoped>
.back img {
  vertical-align: middle;
}
.title {
  display: flex;
}
.title-item {
  flex: 1;
  font-size: 13px;
}
.active {
  color: var(--color-high-text);
}
</style>
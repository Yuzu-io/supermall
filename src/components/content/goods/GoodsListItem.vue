<template>
  <div class="goods-item"
       @click="itemClick">
    <img :src="showImage"
         alt=""
         @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default: {}
    },
  },
  methods: {
    imageLoad () {
      this.$bus.$emit('itemImageLoad')

      // 方法一
      // if (this.$route.path.indexOf('/home') !== -1) {
      //   this.$bus.$emit('homeItemImageLoad')
      // }else if(this.$route.path.indexOf('/detail') !== -1){
      //   this.$bus.$emit('detailItemImageLoad')
      // }
    },
    itemClick () {
      this.$router.push({
        path: '/detail',
        query: {
          iid: this.goodsItem.iid
        }
      })
    }
  },
  computed: {
    showImage () {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
}
</script>

<style scoped>
.goods-item {
  padding: 0 0 40px 0;
  position: relative;
  width: 45%;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0 0 3px 0;
}
.goods-info .price {
  color: var(--color-high-text);
  margin: 0 20px 0 0;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/common/collect.svg") no-repeat 0 0/14px
    14px;
}
</style>
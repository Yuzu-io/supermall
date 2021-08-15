<template>
  <div class="shop-info"
       v-if="Object.keys(shop).length !== 0">
    <div class="shop-top">
      <img :src="shop.logo">
      <div class="title">{{shop.name}}</div>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">{{shop.sells|saveNum}}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{shop.goodsCount}}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score"
              :key="index">
            <td>{{item.name}}</td>
            <td class="score"
                :class="{'score-better':item.isBetter}">{{item.score}}</td>
            <td class="better"
                :class="{'better-more':item.isBetter}">{{item.isBetter? '高' : '低'}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {

    }
  },
  filters: {
    saveNum (value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + '万'
    }
  }
}
</script>

<style scoped>
.shop-info{
border-bottom: 4px solid #ededed;
margin: 0 0 20px 0;
}
.shop-top {
  margin: 20px 0;
  display: flex;
  align-items: center;
}
.shop-top img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 20px 0 10px;
}
.shop-top .title {
  color: #000;
  font-size: 16px;
}

.shop-middle {
  display: flex;
  font-size: 14px;
  color: #000;
}
.shop-middle .shop-middle-item {
  flex: 1;
}
.shop-middle .shop-middle-left {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  border-right: 1px solid #eaeaea;
}
.shop-middle-left .sells-count,
.shop-middle-left .goods-count {
  margin: 10px 0;
}
.shop-middle-right table {
  margin: 0 0 0 20px;
}
.shop-middle-right .score {
  padding: 0 10px;
  color: LimeGreen;
}
.shop-middle-right .better {
  padding: 0;
  color: #fff;
  background-color: LimeGreen;
}

.shop-middle-right .score-better {
  color: Red;
}
.shop-middle-right .better-more {
  background-color: red;
}

.shop-bottom {
  text-align: center;
  padding: 20px 0;
}
.shop-bottom .enter-shop {
  display: inline-block;
  background-color: #f2f2f2;
  padding: 10px 50px;
  border-radius: 100px;
}
</style>
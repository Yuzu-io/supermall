<template>
  <div class="cart-bottom-bar">
    <div class="check-content">
      <check-button class="check-buttom"
                    :is-checked="isSelectAll"
                    @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>
    <div class="price">
      合计: {{totalPrice}}
    </div>
    <div class="caculate" @click="caculClick">
      去计算({{checkLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from '../../../components/content/checkButton/CheckButton.vue'
export default {
  data () {
    return {
      isChecked: false
    }
  },
  components: {
    CheckButton
  },
  computed: {
    totalPrice () {
      return '￥' + this.$store.getters.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkLength () {
      return this.$store.getters.cartList.filter(item => {
        return item.checked
      }).reduce((quantity, item) => {
        return quantity + item.count
      }, 0)
    },

    isSelectAll () {
      // return !(this.$store.getters.cartList.filter(item => !item.checked).length)
      return !this.$store.getters.cartList.find(item => !item.checked) && this.$store.getters.cartList.length !== 0

    }

  },
  methods: {
    checkClick() {
      if(this.isSelectAll){
        this.$store.getters.cartList.forEach(item=>item.checked = false)
      }
      else{
        this.$store.getters.cartList.forEach(item=>item.checked = true)
      }
    },
    caculClick(){
      this.$toast.show('请选择购买的商品',2000)
    }
  },
}
</script>

<style scoped>
.cart-bottom-bar {
  height: 40px;
  background-color: #eee;
  position: relative;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
}

.check-content {
  display: flex;
  align-items: center;
  margin: 0 0 0 5px;
}

.check-buttom {
  width: 16px;
  height: 16px;
  line-height: 16px;
  margin: 0 5px 0 0;
}

.caculate {
  color: #fff;
  background-color: red;
  padding: 0 10px;
}
</style>
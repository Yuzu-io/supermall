export default {
  addCart (context, payload) {
    return new Promise((resolve,reject)=>{
      // payload 新添加的商品
    let oldProduct = null
    for (let item of context.state.cartList) {
      if (item.iid === payload.iid) {
        // 浅拷贝
        oldProduct = item
      }
    }
    if (oldProduct) {
      // oldProduct.count += 1
      context.commit('addCounter',oldProduct)
      resolve('当前商品数量+1')
    }
    else {
      payload.count = 1
      // state.cartList.push(payload)
      context.commit('addToCart',payload)
      resolve('加入购物车成功')
    }
    })
  }
}
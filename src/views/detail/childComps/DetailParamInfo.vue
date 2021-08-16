<template>
  <div v-if="Object.keys(paramInfo).length !== 0"
       class="params-wrap">
    <div class="paramInfo-sizes"
         v-for="(item, index) in paramInfo.sizes"
         :key="item+index">
      <div v-for="(list, index) in item"
           class="flex"
           :key="list+index">
        <div v-for="(listitem, index) in list"
             :key="listitem+index"
             class="rule-list-item">
          {{listitem}}
        </div>
      </div>
    </div>
    <div class="paramInfo-info"
         v-for="(info, index) in paramInfo.infos"
         :key="index">
      <div>{{info.key}}</div>
      <div class="info-list-high">{{info.value}}</div>
    </div>
    <div class="info-img"
         v-if="paramInfo.image.length !==0">
      <img :src="paramInfo.image"
           alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  props: {
    paramInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.params-wrap{
  border-bottom: 4px solid #ededed;
  padding: 10px 0 0 0;
}
.paramInfo-sizes {
  display: flex;
  flex-direction: column;
}
.paramInfo-sizes .flex {
  display: flex;
  margin: 0 20px;
  padding: 10px 0;
  border-bottom: 1px solid #eaeaee;
}
.paramInfo-sizes .flex:last-child {
  border-bottom: 3px solid #eaeaee;
}
.paramInfo-sizes .flex .rule-list-item {
  flex: 1;
}
.paramInfo-info{
  display: flex;
  align-items: center;
  margin: 0 20px;
  padding: 10px 0;
  border-bottom: 1px solid #eaeaee;
}
.paramInfo-info div{
  flex: 1;
}
.paramInfo-info .info-list-high{
  color: var(--color-high-text);
}
</style>

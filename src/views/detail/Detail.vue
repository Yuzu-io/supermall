<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'


export default {
  name: 'Detail',
  data () {
    return {
      iid: null
    }
  },
  components: {
    DetailNavBar,
  },
  created () {
    this.iid = this.$route.query.iid
  },
}
</script>

<style scoped>
</style>
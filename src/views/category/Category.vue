<template>
  <div>
    <h2>分类</h2>
    <div class="wrapper"
         ref="wrapperCate">
      <ul class="content">
        <div class="box1" @click="itemClick">按钮</div>
        <li>商品类别1</li>
        <li>商品类别2</li>
        <li>商品类别3</li>
        <li>商品类别4</li>
        <li>商品类别5</li>
        <li>商品类别6</li>
        <li>商品类别7</li>
        <li>商品类别8</li>
        <li>商品类别9</li>
        <li>商品类别10</li>
        <li>商品类别11</li>
        <li>商品类别12</li>
        <li>商品类别13</li>
        <li>商品类别14</li>
        <li>商品类别15</li>
        <li>商品类别16</li>
        <li>商品类别17</li>
        <li>商品类别18</li>
        <li>商品类别19</li>
        <li>商品类别20</li>
        <li>商品类别21</li>
        <li>商品类别22</li>
        <li>商品类别23</li>
        <li>商品类别24</li>
        <li>商品类别25</li>
        <li>商品类别26</li>
        <li>商品类别27</li>
        <li>商品类别28</li>
        <li>商品类别29</li>
        <li>商品类别30</li>
        <li>商品类别31</li>
        <li>商品类别32</li>
        <li>商品类别33</li>
        <li>商品类别34</li>
        <li>商品类别35</li>
        <li>商品类别36</li>
        <li>商品类别37</li>
        <li>商品类别38</li>
        <li>商品类别39</li>
        <li>商品类别40</li>
        <li>商品类别41</li>
        <li>商品类别42</li>
        <li>商品类别43</li>
        <li>商品类别44</li>
        <li>商品类别45</li>
        <li>商品类别46</li>
        <li>商品类别47</li>
        <li>商品类别48</li>
        <li>商品类别49</li>
        <li>商品类别50</li>
        <li>商品类别51</li>
        <li>商品类别52</li>
        <li>商品类别53</li>
        <li>商品类别54</li>
        <li>商品类别55</li>
        <li>商品类别56</li>
        <li>商品类别57</li>
        <li>商品类别58</li>
        <li>商品类别59</li>
        <li>商品类别60</li>
        <li>商品类别61</li>
        <li>商品类别62</li>
        <li>商品类别63</li>
        <li>商品类别64</li>
        <li>商品类别65</li>
        <li>商品类别66</li>
        <li>商品类别67</li>
        <li>商品类别68</li>
        <li>商品类别69</li>
        <li>商品类别70</li>
        <li>商品类别71</li>
        <li>商品类别72</li>
        <li>商品类别73</li>
        <li>商品类别74</li>
        <li>商品类别75</li>
        <li>商品类别76</li>
        <li>商品类别77</li>
        <li>商品类别78</li>
        <li>商品类别79</li>
        <li>商品类别80</li>
        <li>商品类别81</li>
        <li>商品类别82</li>
        <li>商品类别83</li>
        <li>商品类别84</li>
        <li>商品类别85</li>
        <li>商品类别86</li>
        <li>商品类别87</li>
        <li>商品类别88</li>
        <li>商品类别89</li>
        <li>商品类别90</li>
        <li>商品类别91</li>
        <li>商品类别92</li>
        <li>商品类别93</li>
        <li>商品类别94</li>
        <li>商品类别95</li>
        <li>商品类别96</li>
        <li>商品类别97</li>
        <li>商品类别98</li>
        <li>商品类别99</li>
        <li>商品类别100</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  data() {
    return {
      scroll: null
    }
  },
  methods: {
    itemClick() {
      console.log('打印');
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapperCate,{
      probeType:3,
      pullUpLoad:true,
      // 如果是要点击非按钮元素想要添加
      click:true
    })

   this.scroll.on('scroll',(position)=>{
      // console.log(position);
    })

    this.scroll.on('pullingUp',()=>{
      console.log('上拉加载更多');
    })

  },
}
</script>

<style scoped>
.wrapper{
  height: 300px;
  background-color: #bfa;
  overflow: hidden;
}
.box1{
  background-color: red;
  width: 50px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  text-align: center;
}
</style>
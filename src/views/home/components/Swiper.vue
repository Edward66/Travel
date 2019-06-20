<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img"
             :src=item.imgUrl
             alt="去哪儿门票">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true, // 循环轮播
        },
        swiperList: [{
          id: '0001',
          imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/e440c31af79c0b9d1a1e84c577205562.jpg_750x200_0729c45b.jpg',
        }, {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/9c/ba7b402ad572c902.jpg_750x200_a83ca8d6.jpg',
        }]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active /* 样式穿透，不受scoped的限制了 */
    background: #fff !important

  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 27.25% /* 高度相比宽度会自动撑开31.25%*/
    background: #eee

    .swiper-img
      width: 100%

</style>

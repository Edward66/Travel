<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
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
    props: {
      list: Array
    },
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true, // 循环轮播
        },
      }
    },
    computed: {
      showSwiper () {
        //swiper最初是通过空数组创建的,所以会导致默认显示最后一个页面。下面是让真正的数据过来之后才创建。
        return this.list.length
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
    padding-bottom: 31.25% /* 高度相比宽度会自动撑开31.25%*/
    background: #eee

    .swiper-img
      width: 100%

</style>

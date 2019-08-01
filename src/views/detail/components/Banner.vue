<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img"
           src="http://img1.qunarzz.com/sight/p0/201403/11/157a60a6859cb12d8a88c81113055c93.jpg_600x330_a20acc2d.jpg">
      <div class="banner-info">
        <div class="banner-title">
          联邦空中花园
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe6df;</span>
          39
        </div>
      </div>
    </div>

    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></common-gallary>
  </div>

</template>

<script>
  import CommonGallary from 'common/gallary/Gallary'

  export default {
    name: 'DetailBanner',
    components: {
      CommonGallary
    },
    data () {
      return {
        showGallary: false, // 点击banner区域的时候才显示画廊
        imgs: ['http://img1.qunarzz.com/sight/p0/1906/e7/e7276de002459b50a3.img.jpg_r_800x800_5cdd4127.jpg'
          , 'http://img1.qunarzz.com/sight/p0/1906/e8/e88430aafb498100a3.img.jpg_r_800x800_fbb53873.jpg']
      }
    },
    methods: {
      handleBannerClick () {
        this.showGallary = true
      },
      handleGallaryClose () {
        this.showGallary = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%

    .banner-img
      width 100%

    .banner-info
      display flex
      position: absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)) // rgba最后一个是不透明度

      .banner-title
        font-size .32rem
        padding 0 .2rem
        flex 1

      .banner-number
        height .32rem
        line-height .32rem
        margin-top .14rem
        padding 0 .4rem
        border-radius .2rem
        background rgba(0, 0, 0, .8)
        font-size .24rem

        .banner-icon
          font-size .24rem


</style>

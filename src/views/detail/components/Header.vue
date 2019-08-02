<template>
  <div>
    <router-link
      class="header-abs"
      tag="div"
      to="/"
      v-show="showAbs"
    >
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>

</template>

<script>
  export default {
    name: 'DetailHeader',
    data () {
      return {
        showAbs: true,
        opacityStyle: {
          opacity: 0
        }
      }
    },
    methods: {
      handleScroll () {
        const top = document.documentElement.scrollTop
        if (top > 60) {
          let opacity = top / 140
          opacity = opacity > 1 ? 1 : opacity
          this.opacityStyle = {opacity}
          this.showAbs = false
        } else {
          this.showAbs = true
        }
      }
    },
    activated () { // 用了keep-alive，页面一被展示，activated就会执行
      window.addEventListener('scroll', this.handleScroll)
    },
    deactivated () { // 页面即将被隐藏或者替换成新的页面的时候,这个组件的deactivated会被执行
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header-abs
    width .8rem
    height .8rem
    line-height .8rem
    position absolute
    left .2rem
    top .2rem
    border-radius .4rem
    text-align center
    background rgba(0, 0, 0, .8)

    .header-abs-back
      font-size .4rem
      color: #fff

  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #fff
    background: $bgColor
    font-size .32rem

    .header-fixed-back
      position: absolute
      top 0
      left 0
      width .64rem
      font-size .4rem
      color #fff
      text-align center


</style>

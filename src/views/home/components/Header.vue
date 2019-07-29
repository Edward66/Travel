<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon  ">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      {{ this.city }}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'HomeHeader',
    props: {
      city: String
    }
  }
</script>

<!--scoped：只对当前的组件有效-->
<!--1rem = html font-size = 50px; rem是基于html字体大小的-->
<style lang="stylus" scoped>
  /*styles是在webpack.base.conf中配置的，在css中使用要在前面加波浪线~。修改了webpack的配置一定要重启服务器*/
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: .86rem // 43px
    background: $bgColor
    color: #fff

    .header-left
      width: .64rem
      float: left

      .back-icon
        text-align: center
        font-size: .4rem

    .header-input
      flex: 1
      line-height: .64rem
      height: .64rem
      margin-top: .12rem
      margin-left: .64rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc

    .header-right
      width: 1.24rem
      float: right
      text-align: center

      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>

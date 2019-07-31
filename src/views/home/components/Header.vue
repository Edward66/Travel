<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon  ">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>

</template>

<script>
  import {mapState, mapGetters} from 'vuex'

  export default {
    name: 'HomeHeader',
    computed: {
      ...mapState(['city']), // 把vuex的数据映射到computed的计算属性里，把city这个数据映射到名字叫做city的计算属性中。
      ...mapGetters(['doubleCity'])
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
    line-height: $headerHeight
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
      min-width: 1.04rem
      padding 0.1rem
      float: right
      text-align: center
      color: #fff

      .arrow-icon
        margin-left: -.04rem
        font-size: .24rem
</style>

<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li
        v-for="item of list"
        class="item border-bottom"
        :key="item.id"
      >
        <div class="item-img-wrap">
          <img class="item-img"
               :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeWeekend',
    props: {
      list: Array
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    line-height: .8rem
    background: #eee
    text-indent: 0

  .item-img-wrap
    overflow: hidden
    height: 0
    padding-bottom: 36.4% // 基于父元素的宽度。高和宽之比是36.4%。


    .item-img
      width: 100%

  .item-info
    padding: .1rem

    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipse()

    .item-desc
      line-height: .4rem
      color: #ccc
      ellipse()


</style>


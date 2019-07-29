<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li
        v-for="item of recommendList"
        class="item border-bottom"
        :key="item.id"
      >
        <img class="item-img"
             :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeRecommend',
    data () {
      return {
        recommendList: [{
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1606/74/74f937d6d4b0d4cb90.water.jpg_200x200_63a86b4c.jpg',
          title: '白鹿温泉加加勒比水上乐园',
          desc: '激情石家庄首站'
        },
          {
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1606/74/74f937d6d4b0d4cb90.water.jpg_200x200_63a86b4c.jpg',
            title: '白鹿温泉加加勒比水上乐园',
            desc: '激情石家庄首站'
          },
          {
            id: '0003',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1606/74/74f937d6d4b0d4cb90.water.jpg_200x200_63a86b4c.jpg',
            title: '白鹿温泉加加勒比水上乐园',
            desc: '激情石家庄首站'
          }]
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: 0

  .item
    display: flex
    height: 1.9rem
    overflow: hidden

    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem

    .item-info
      flex: 1
      padding: .1rem
      min-width: 0 // flex布局中保证内容不超出外层容器

      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipse()

      .item-desc
        line-height: .4rem
        ellipse()
        color: #ccc

      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #ffffff;


</style>

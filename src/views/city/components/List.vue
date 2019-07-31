<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ this.currentCity}}</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>

      <!--       :key和下一层级的重复是没有关系的-->
      <div
        class="area"
        v-for="(item,key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >{{ innerItem.name }}

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll' // 上下拉动
  import {mapState, mapMutations} from 'vuex'

  export default {
    name: 'CityList',
    props: {
      hot: Array,
      cities: Object,
      letter: String
    },
    computed: {
      ...mapState({
        currentCity: 'city', // 把vuex里的city这个公有数据，映射到这个组件的计算属性里，映射过来的名字叫做currentCity
      })
    },
    methods: {
      handleCityClick (city) {
        this.changeCity(city)
        this.$router.push('/')
      },
      ...mapMutations(['changeCity'])  // 把changeCity这个mutation映射到这个组件里名字叫做changeCity的方法里
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.wrapper)
    },
    watch: {
      letter () {
        if (this.letter) {
          const element = this.$refs[this.letter][0] // 获取到字母对应的区域 -> [div.area][0] Bscroll用到的参数必须是DOM元素
          this.scroll.scrollToElement(element) // better-scroll提供
        }
      }
    }

  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl";
  .border-topbottom
    &:before
      border-color #ccc

    &:after
      border-color #ccc

  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0

  .border-bottom
  &:before
    border-color #ccc


  .title
    line-height .54rem
    padding-left .2rem
    font-size .26rem
    background #eee
    color #666

  .button-list
    overflow hidden
    padding: .1rem .6rem .1rem .1rem

    .button-wrapper
      float left
      width 33.33%

      .button
        margin .1rem
        padding .1rem 0
        text-align center
        border .02rem solid #ccc
        border-radius .06rem

  .item-list
    .item
      line-height .76rem
      padding-left .2rem

</style>

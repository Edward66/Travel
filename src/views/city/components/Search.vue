<template>
  <div>
    <div class="search">
      <input v-model="keyword" type="text" class="search-input" placeholder="输入城市名或拼音"/>
    </div>

    <div
      class="search-content"
      ref="search"
      v-show="keyword"
    >
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{ item.name }}
        </li>

        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>

      </ul>
    </div>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  import {mapMutations} from 'vuex'

  export default {
    name: 'CitySearch',
    props: {
      cities: Object
    },
    data () {
      return {
        keyword: '',
        list: [],
        timer: null
      }
    },
    methods: {
      handleCityClick (city) {
        this.changeCity(city)
        this.$router.push('/')
      },
      ...mapMutations(['changeCity'])  // 把changeCity这个mutation映射到这个组件里名字叫做changeCity的方法里
    },
    computed: {
      hasNoData () {
        return !this.list.length
      }
    },
    watch: {
      keyword () {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        if (!this.keyword) {
          this.list = []
          return
        }
        this.timer = setTimeout(() => {
          const result = []
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                result.push(value)
              }
            })
          }
          this.list = result
        }, 100)
      }
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.search) //  传DOM元素
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .search
    background $bgColor
    padding 0 .1rem
    height .72rem

    .search-input
      box-sizing border-box
      width 100%
      height .62rem
      line-height .62rem
      padding 0 .1rem
      color #666

      border-radius.06rem
      text-align center

  .search-content
    z-index 1
    overflow hidden
    position absolute
    top 1.58rem
    bottom 0
    right 0
    left 0
    background #eee

    .search-item
      color #666
      padding-left .2rem
      background #fff
      line-height .62rem

</style>

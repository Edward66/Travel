<template>
  <ul class="list">
    <!--    prevent阻止touchstart的默认行为，这样滚动字母表的时候就不会有上下拖动的效果了-->
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'CityAlphabet',
    props: {
      cities: Object
    },
    computed: {
      letters () {
        const letters = []
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters // ['A','B','C']
      }
    },
    data () {
      return {
        touchStatus: false,
        startY: 0,
        timer: null
      }
    },
    // 当ajax获取数据后,alphabet会重新渲染,然后updated()会被执行
    updated () {
      this.startY = this.$refs['A'][0].offsetTop
    },
    methods: {
      handleLetterClick (e) {
        this.$emit('change', e.target.innerText) // 每次点击都会向外触发事件
      },
      handleTouchStart (e) {
        this.touchStatus = true
      },
      handleTouchMove (e) {
        // 函数截留能大大节省handleTouchMove的执行频率
        if (this.touchStatus) {
          if (this.timer) {
            clearTimeout(this.timer) // 清空上一次的Timeout
          }
          // 延迟16毫秒再去执行
          this.timer = setTimeout(() => {
            const touchY = e.touches[0].clientY - 79  //touches[0]里是手指的一些信息。获取手指到最顶部的高度。79是顶部绿色区域的高度
            const index = Math.floor((touchY - this.startY) / 20)  // 20是每个字母的高度。手指到A底部，index称为1，没加20，index就加1
            if (index >= 0 && index < this.letters.length) {
              this.$emit('change', this.letters[index])
            }
          }, 8)
        }
      },
      handleTouchEnd (e) {
        this.touchStatus = false
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .list
    display flex
    flex-direction column
    justify-content center
    width.4rem
    position absolute
    top 1.58rem
    bottom 0
    right 0

    .item
      line-height .4rem
      text-align center
      color $bgColor

</style>

<template>
  <transition name="fade">
    <slot></slot>
  </transition>
</template>

<script>
  export default {
    name: 'FadeAnimatio n'
  }
</script>
<style lang="stylus" scoped>
  /*
   * v-enter：定义上半场过渡的初始状态；在过渡开始前被添加，在过渡开始时会被移除
   * v-enter-to：定义上半场过渡的结束状态；在过渡开始时被添加，在过渡完成时会被移除
   * v-enter-active：这里包含了上面的v-enter、v-enter-to两个时间段，在这里可以对上半场过渡定义过渡时间、曲线等
   * v-leave：定义下半场过渡的初始状态；在过渡开始前被添加，在过渡开始时会被移除
   * v-leave-to：定义下半场过渡的结束状态；在过渡开始时被添加，在过渡完成时会被移除
   * v-leave-active：这里包含了上面的v-leave、v-leave-to两个时间段，在这里可以对下半场过渡定义过渡时间、曲线等
   */

  // opacity 默认是1，0.5秒后变成0
  .fade-enter, .fade-leave-to
    opacity 0

  .fade-enter-active, .fade-leave-active
    transition opacity .5s

</style>

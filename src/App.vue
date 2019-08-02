<template>
  <!-- keep-alive是vue自带的标签，意思是路由的内容被加载过一次之后就放到内存，再进路由就从内存取，不用重新渲染了 -->
  <!-- 详情页不用做缓存-->
  <keep-alive exclude="Detail">
    <router-view/>
  </keep-alive>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

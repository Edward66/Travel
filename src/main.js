// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick' // 解决移动端300毫秒点击延迟的问题
import 'styles/reset.css'  // 初始化的css
import 'styles/border.css'  // 解决一像素边框的问题，收藏起来，以后用得到
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body) // 使用fastClick

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})

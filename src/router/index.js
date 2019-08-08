import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/Home'),  // 异步加载。访问哪里加载哪里的js，不会加载其他的
  },
// 当app.js很小的时候，就不用异步加载,那样额外发的http请求比首页多加载一点js代码的代价要高。
// 只有app文件特别大的时候才用，至少超过1MB。
    {
      path: '/city',
      name: 'City',
      component: () => import('@/views/city/City')
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/views/detail/Detail')
    }],
  scrollBehavior (to, from, savePosition) {
    return {x: 0, y: 0} // 每次进行页面切换的时候始终回到最顶部
  }
})

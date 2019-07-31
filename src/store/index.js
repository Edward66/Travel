import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters: { // 类似于组件中的computed，需要根据state里的数据算出新的数据的时候使用,避免数据冗余
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})

export default {
  changeCity (state, city) {
    state.city = city
    // 防止关闭本地存储或隐身模式浏览器抛异常
    try {
      localStorage.city = city
    } catch (e) {
    }
  }
}

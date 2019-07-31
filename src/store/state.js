// 防止关闭本地存储或隐身模式浏览器抛异常
let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
}

export default {
  city: defaultCity
}

import Vue from 'vue'
// 不同的浏览器标签实现相同的渲染效果
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 国际化
import locale from 'element-ui/lib/locale/lang/en' // lang i18n
// 全局样式
import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
// svg图标
import '@/icons' // icon
// 路由前置守卫，控制一些权限的
import '@/permission' // permission control

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

// set ElementUI lang to EN
Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)
// 控制台饶益格生产的提示
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

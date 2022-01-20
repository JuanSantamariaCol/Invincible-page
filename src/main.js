import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue,IconsPlugin} from 'bootstrap-vue'
import Router from 'vue-router'
import Characters from './components/Characters'
import Home from './components/Home'
import SeeMore from './components/SeeMore'
import About from './components/About'
import PageNotFound from './components/PageNotFound'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Router)

Vue.config.productionTip = false

//Creacion de las rutas
const routes =[ 
  {path:'/Home',component:Home},
  {path:'/',component:Home},
  {path:'/Characters',component:Characters},
  {path:'/SeeMore',component:SeeMore},
  {path:'/About',component:About},
  {path:'*',component:PageNotFound},

];

//Creacion del router
const router = new Router({ 
  routes,
  mode:'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import Router from 'vue-router'

/*Componentes*/
import Home from './components/Home'
import Blog from './components/Blog'
import Servicios from './components/Servicios'
import Err404 from './components/Err404'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/Servicios',
      name: 'Servicios',
      component: Servicios
    },
    {
      path: '*',
      name: 'Err404',
      component: Err404
    }
  ],
  /*Hace que las rutas aparezcan sin #*/
  mode: 'history'
})
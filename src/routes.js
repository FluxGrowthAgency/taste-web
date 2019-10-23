import Vue from 'vue'
import Router from 'vue-router'

/*Componentes*/
import Home from './components/Home'
import Blog from './components/Blog'
import Err404 from './components/Err404'

import Btl from './components/Btl'
import Consultancy from './components/Consultancy'
import Digital from './components/Digital'
import Prim from './components/Prim'


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
      path: '/btl',
      name: 'Btl',
      component: Btl
    },
    {
      path: '/consultancy',
      name: 'Consultancy',
      component: Consultancy
    },
    {
      path: '/digital',
      name: 'Digital',
      component: Digital
    },
    {
      path: '/prim',
      name: 'Prim',
      component: Prim
    },
    {
      path: '*',
      name: 'Err404',
      component: Err404
    }
  ],
  // Cada nuevo cambio de router te lleva al inicio
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  // Hace que las rutas aparezcan sin #
  mode: 'history'
})
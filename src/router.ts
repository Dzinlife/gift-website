import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Preview from './views/Preview.vue'
import UniqueArticle from './views/UniqueArticle.vue'
import Project from './views/Project.vue'
import Lang from './views/Lang.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/en-us'
    },
    {
      path: '/:lang(en-us|zh-cn|ja-jp)',
      component: Lang,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: 'preview',
          name: 'preview',
          component: Preview
        },
        {
          path: 'aboutus',
          name: 'aboutus',
          component: UniqueArticle
        },
        {
          path: 'services',
          name: 'services',
          component: UniqueArticle
        },
        {
          path: 'project/:uid',
          name: 'project',
          component: Project
        },
        {
          path: 'ourbrands',
          name: 'ourbrands',
          component: UniqueArticle
        },
        {
          path: 'ourbrands/:uid',
          name: 'brand',
          component: UniqueArticle
        },
        {
          path: 'partnership',
          name: 'partnership',
          component: UniqueArticle
        },
        {
          path: 'contact',
          name: 'contact',
          component: UniqueArticle
        }
      ]
    }
  ]
})

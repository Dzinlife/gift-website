<template>
  <header>
    <transition name="fade">
      <router-link :to="{name: 'home', params: {lang}}" v-if="!showMenu">
        <img src="~@/assets/logo.svg"/>
      </router-link>
    </transition>
    <transition name="fade">
      <div class="langs" v-if="showMenu">
        <router-link :to="routeByLanguage('en-us')">En</router-link>
        <router-link :to="routeByLanguage('zh-cn')">中</router-link>
        <router-link :to="routeByLanguage('ja-jp')">日</router-link>
      </div>
    </transition>
    <div class="menu-button" @click="showMenu = !showMenu"/>
    <transition name="fade">
      <div class="menu" v-if="showMenu">
        <ul v-if="data" @click="showMenu = false">
          <router-link :to="`/${lang}/aboutus`">
            <li><h1>{{data.data.about_us_label}}</h1></li>
          </router-link>
          <router-link :to="{name:'services', params: {lang}}">
            <li><h1>{{data.data.services_label}}</h1></li>
          </router-link>
          <!-- <router-link :to="{name:'projects'}">
            <li><h1>{{data.data.projects_label}}</h1></li>
          </router-link> -->
          <!-- <router-link :to="{name:'ourbrands', params: {lang}}"> -->
          <li class="submenu-label" @click.stop="showSubmenu === 'our_brands' ? showSubmenu = null : showSubmenu = 'our_brands'">
            <div class="submenu-title">
              <h1>{{data.data.our_brands_label}}</h1>
            </div>
            <transition name="fold">
              <ul class="submenu" v-if="showSubmenu === 'our_brands'" :style="{height: data.data.our_brands_submenu.length * 76 + 'px'}">
                <li v-for="(n, i) in data.data.our_brands_submenu" :key="i" @click.stop="handleClickSubmenu(n.link.url)">
                  {{n.brand_title}}
                </li>
              </ul>
            </transition>
          </li>
          <!-- </router-link> -->
          <router-link :to="{name:'partnership', params: {lang}}">
            <li><h1>{{data.data.partnership_label}}</h1></li>
          </router-link>
          <router-link :to="{name:'contact', params: {lang}}">
            <li><h1>{{data.data.contact_label}}</h1></li>
          </router-link>
        </ul>
      </div>
    </transition>
  </header>
</template>

<style lang="stylus" scoped>
.fold-enter-active, .fold-leave-active
  transition: .4s

.fold-enter, .fold-leave-to
  opacity 0
  height 0 !important

.langs
  position absolute
  left 26px
  a
    margin 0 6px
    font-size 20px
    text-decoration none
    color black
    font-weight bold
header
  height 100px
  background white
  display flex
  align-items center
  z-index 100
  position fixed
  top 0
  left 0
  right 0
  padding 0 32px
  &:after
    content ''
    position absolute
    left 32px
    right 32px
    height 4px
    background black
    display block
    bottom 0
  img
    width 116px
    margin-top 8px
.menu-button
  height 44px
  width 44px
  background url('~@/assets/menu.svg')
  background-size auto 30px
  background-position center right
  margin-left auto
  background-repeat no-repeat

.menu
  position fixed
  width 100%
  left 0
  top 100px
  bottom 0
  background white
  z-index 99
  box-sizing border-box
  padding 0 32px
  overflow auto
  ul
    padding 0
    list-style none
    margin 0
    a
      color black
      text-decoration none
    li
      height 76px
      box-sizing border-box
      border-bottom 4px solid black
      display flex
      align-items center
      h1
        margin-top 1em
    .submenu-label
      display block
      height auto
      .submenu-title
        display flex
        height 72px
        align-items center
.submenu
  li
    border-bottom 1px solid black !important
    font-size 20px
    font-weight bold
    padding-left 32px
    &:first-child
      border-top 4px solid black
    &:last-child
      border-bottom none
      margin-bottom -1px

</style>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import * as api from '@/api'

function touchMoveHandler (e) {
  e.preventDefault()
}

@Component
export default class Header extends Vue {
  showMenu = false
  data = null as any
  lang = null as string | null
  showSubmenu = null as string | null

  async created () {
    this.lang = this.$route.params.lang
    this.data = await api.getSingle('menu', {
      lang: this.lang
    })
  }

  @Watch('$route')
  async onRouteChange () {
    this.showMenu = false
    this.lang = this.$route.params.lang
    this.data = await api.getSingle('menu', {
      lang: this.lang
    })
  }

  @Watch('showMenu')
  onshowMenuchange (val) {
    if (val) {
      document.body.style.overflow = 'hidden'
      document.body.addEventListener('touchmove', touchMoveHandler, {
        passive: true
      })
    } else {
      document.body.style.overflow = 'auto'
      document.body.removeEventListener('touchmove', touchMoveHandler)
    }
  }

  routeByLanguage (lang: string) {
    const { name, params } = this.$route
    const route = JSON.parse(JSON.stringify({ name, params }))
    route.params.lang = lang
    return route
  }

  handleClickSubmenu (url: string) {
    location.href = url
  }
}
</script>

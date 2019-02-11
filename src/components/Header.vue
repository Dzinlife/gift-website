<template>
  <header>
    <router-link to="/">
      <img src="~@/assets/logo.svg"/>
    </router-link>
    <div class="menu-button" @click="showMenu = !showMenu"/>
    <transition name="fade">
      <div class="menu" v-if="showMenu">
        <ul v-if="data" @click="showMenu = false">
          <router-link :to="{name:'aboutus'}">
            <li><h1>{{data.data.about_us_label}}</h1></li>
          </router-link>
          <router-link :to="{name:'services'}">
            <li><h1>{{data.data.services_label}}</h1></li>
          </router-link>
          <!-- <router-link :to="{name:'projects'}">
            <li><h1>{{data.data.projects_label}}</h1></li>
          </router-link> -->
          <router-link :to="{name:'ourbrands'}">
            <li><h1>{{data.data.our_brands_label}}</h1></li>
          </router-link>
          <router-link :to="{name:'partnership'}">
            <li><h1>{{data.data.partnership_label}}</h1></li>
          </router-link>
          <router-link :to="{name:'contact'}">
            <li><h1>{{data.data.contact_label}}</h1></li>
          </router-link>
        </ul>
      </div>
    </transition>
  </header>
</template>

<style lang="stylus" scoped>
header
  height 100px
  // border-bottom 4px solid black
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
  top 104px
  bottom 0
  background white
  z-index 99
  box-sizing border-box
  padding 0 32px
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

</style>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import * as api from '@/api'

@Component
export default class Header extends Vue {
  showMenu = false
  data = null as any

  async created () {
    this.data = await api.getSingle('menu')
  }

  @Watch('$route')
  onRouteChange () {
    this.showMenu = false
  }
}
</script>

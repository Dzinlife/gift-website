<template>
  <header>
    <img src="~@/assets/logo.svg"/>
    <div class="menu-button" @click="showMenu = !showMenu"/>
    <transition name="fade">
      <div class="menu" v-if="showMenu">
        <ul>
          <li><h1>OUR BRANDS</h1></li>
          <li><h1>PROJECTS</h1></li>
          <li><h1>OUR BRANDS</h1></li>
          <li><h1>CONTACT</h1></li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<style lang="stylus" scoped>
header
  height 100px
  border-bottom 4px solid black
  background white
  display flex
  align-items center
  z-index 100
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
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  showMenu = false
}
</script>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="stylus">
html
  font-family 'Avenir Next', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased

body
  padding 0 32px
  font-size 11px
  line-height 1.7
  max-width 800px
  margin 0 auto

h1
  font-size 20px
  letter-spacing 0.05em
  line-height 28px
  margin-top 30px

h2
  font-size 18px
  line-height 24px
  letter-spacing 0.06em

h3
  font-size 16.5px
  line-height 21px
  letter-spacing 0.07em

h4
  font-size 15px
  line-height 19px
  letter-spacing 0.08em

h5
  font-size 12px
  line-height 15px
  letter-spacing 0.09em

ul
  padding-left 14px
</style>

<style lang="stylus">
// #app
</style>

<script lang="ts">
import { Component, Prop, Vue, Provide } from 'vue-property-decorator'

@Component
export default class App extends Vue {
}
</script>

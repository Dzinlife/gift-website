<template>
  <div id="app">
    <website-header class="header"/>
    <router-view class="view"/>
    <website-footer class="footer"/>
  </div>
</template>

<style lang="stylus">
html
  font-family 'Avenir Next', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  height 100%

body
  font-size 11px
  line-height 1.7
  margin 0
  height 100%
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

h6
  font-size 11px
  line-height 14px
  letter-spacing 0.10em

ul
  padding-left 14px
</style>

<style lang="stylus">
#app
  padding-top 100px
  min-height 100%
  box-sizing border-box
  display flex
  flex-direction column

.footer
  margin-top auto

.view
  width 100%
  padding 0 32px
  max-width 800px
  box-sizing border-box
  margin 0 auto
  padding-bottom 30px

.fade-enter-active, .fade-leave-active
  transition: opacity .2s

.fade-enter, .fade-leave-to
  opacity: 0
</style>

<script lang="ts">
import { Component, Prop, Vue, Provide } from 'vue-property-decorator'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

@Component({
  components: {
    WebsiteHeader: Header,
    WebsiteFooter: Footer
  }
})
export default class App extends Vue {
}
</script>

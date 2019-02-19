<template lang="pug">
.lightbox
  LightBox(:imgs="imgs" ":index"="galleryIndex")
  .control-nav
    .nav-dot(v-for="(n, i) in imgs.length" :key="i" :class="{active: i === galleryIndex}")
  .control
    button.prev(@click="galleryIndex -= 1" :class="{disabled: galleryIndex <= 0}")
    .divider
    button.next(@click="galleryIndex += 1" :class="{disabled: galleryIndex >= this.imgs.length - 1}")
</template>

<script>
import LightBox from './LightBox.vue'

export default {
  name: 'light-box-control',
  components: {
    LightBox
  },
  props: {
    imgs: {
      default: []
    },
    value: {
      default: 0
    }
  },
  watch: {
    galleryIndex (next, prev) {
      if (next < 0 || next > this.imgs.length - 1) {
        this.galleryIndex = prev
      }
      this.$emit('input', this.galleryIndex)
    }
  },
  methods: {
  },
  data () {
    return {
      galleryIndex: this.value
    }
  }
}

</script>

<style lang="stylus" scoped>
.control-nav
  position absolute
  width 100%
  display flex
  justify-content center
  bottom 26px

.nav-dot
  height 4px
  width @height
  border-radius 1px
  background black
  margin 0 3px
  &.active
    background #ccc

.lightbox
  position relative
  margin-bottom 8px
.control
  position absolute
  width 77px
  height 56px
  right 10px
  bottom 0
  display flex
  align-items center
  button
    border none
    height 100%
    flex 1
    display block
    background transparent
    background-position center
    background-repeat no-repeat
    outline none
    transition 0.3s ease-in-ou1
  .prev
    left 0
    background-image url("~@/assets/left_black.svg")
    &.disabled
      background-image url("~@/assets/left_grey.svg")
  .divider
    width 0
    height 18px
    border-right dotted 1px black
  .next
    right 0
    background-image url("~@/assets/right_black.svg")
    &.disabled
      background-image url("~@/assets/right_grey.svg")
</style>

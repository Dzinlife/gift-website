<template>
  <div v-if="data && data.length" class="list">
    <div class="list-item" v-for="(n, i) in data" :key="i">
      <div class="list-img">
        <img :src="n.image.url"/>
      </div>
      <div class="list-info">
        <h4>{{n.name}}</h4>
        <c-content :data="n.description"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import * as api from '@/api'
import Content from './Content.vue'

@Component({
  components: {
    CContent: Content
  }
})
export default class List extends Vue {
  // beforeCreate () {
  //   this.$options.components!.CArticle = Article
  // }
  html = null as string | null
  @Prop() data
}
</script>

<style scoped lang="stylus">
.list
  border-top solid 1px black
  // border-bottom solid 1px black
  padding 32px 0
  margin-top 28px

.list-item
  display flex
  // margin 0 -8px
  & + .list-item
    border-top dotted 1px black
    margin-top 27px
    padding-top 27px

.list-info
  margin-left 16px
  flex 0.618 0
  h4
    margin-top 0
    line-height 1
    margin-bottom -4px

.list-img
  flex 0.382 0
  min-width 0
  img
    width 100%
    vertical-align bottom
</style>

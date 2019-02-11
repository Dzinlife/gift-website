<template>
  <div v-if="data && data.length">
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
export default class CompactList extends Vue {
  // beforeCreate () {
  //   this.$options.components!.CArticle = Article
  // }
  html = null as string | null
  @Prop() data
}
</script>

<style scoped lang="stylus">
.list-item
  display flex
  margin 0 -8px
  margin-top 13px

.list-info
  margin 0 8px
  flex 0.618 0
  h4
    margin-top 0
    line-height 1
    margin-bottom -4px

.list-img
  flex 0.382 0
  margin 0 8px
  min-width 0
  img
    width 100%
</style>

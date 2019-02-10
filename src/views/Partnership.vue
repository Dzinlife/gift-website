<template>
  <div class="partnership" v-if="data">
    <h1>{{data.data.title[0].text}}</h1>
    <div class="partnership-item" v-for="(n, i) in data.data.list" :key="i">
      <div class="partnership-img">
        <img :src="n.image.url"/>
      </div>
      <div class="partnership-info">
        <h4>{{n.name}}</h4>
        <c-content :data="n.description"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { State } from 'vuex-class'
import { getById } from '@/api/req'
import Content from '@/components/Content.vue'

@Component({
  components: {
    CContent: Content
  }
})
export default class Partnership extends Vue {
  @State home
  data = null as any

  @Watch('home', { immediate: true })
  async onLoad (home) {
    if (!home) return
    this.data = await getById(this.partnership.id)
  }

  get partnership () {
    if (!this.home) return
    return this.home.data.partnership
  }
}
</script>

<style scoped lang="stylus">
.partnership-item
  display flex
  margin 0 -8px
  margin-top 13px

.partnership-info
  margin 0 8px
  flex 0.618 0
  h4
    margin-top -2px
    line-height 1
    margin-bottom -4px

.partnership-img
  flex 0.382 0
  margin 0 8px
  min-width 0
  img
    width 100%
</style>

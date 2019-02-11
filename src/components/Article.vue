<template>
  <div class="article" v-if="data">
    <template v-for="(n, key) in data.data">
      <component :is="componentNameByKey(key)" :key="key" :data="n"/>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { State } from 'vuex-class'
import { getById } from '@/api/req'
import Content from '@/components/Content.vue'
import Section from '@/components/Section.vue'
import ArticleList from '@/components/ArticleList.vue'
import Image from '@/components/Image.vue'
import List from '@/components/List.vue'
import CompactList from '@/components/CompactList.vue'
import Subtitle from '@/components/Subtitle.vue'

@Component({
  components: {
    CContent: Content,
    CSection: Section,
    ArticleList,
    CImage: Image,
    List,
    CompactList,
    Subtitle
  }
})
export default class Article extends Vue {
  @State home
  @Prop() id?: string
  @Prop() fetchedData?: any
  data = null as any

  @Watch('id', { immediate: true })
  async onId (val) {
    this.data = await getById(val)
  }

  @Watch('fetchedData', { immediate: true })
  async onData (val) {
    if (val) {
      this.data = JSON.parse(JSON.stringify(val))
    } else {
      this.data = null
    }
  }

  componentNameByKey (key: string) {
    const type = key.split('_')[0]
    switch (type) {
      case 'title':
        return 'c-section'
      case 'content':
        return 'c-content'
      case 'articlelist':
        return 'article-list'
      case 'image':
        return 'c-image'
      case 'compact-list':
        return 'compact-list'
      case 'list':
        return 'list'
      case 'subtitle':
        return 'subtitle'
      default:
        return null
    }
  }
}
</script>

<style scoped lang="stylus">

</style>

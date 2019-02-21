<template>
  <div class="article" v-if="data">
    <template v-for="(n, key) in data.data">
      <component :is="componentNameByKey(key)" :key="key" :data="n"/>
    </template>
    <a v-if="data.data.more && data.data.more.url" :target="data.data.more.target" :href="data.data.more.url">
      <div class="more-button"><h4>{{data.data['more-text']}}</h4></div>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { getById } from '@/api/req'
import Content from '@/components/Content.vue'
import Section from '@/components/Section.vue'
import ArticleList from '@/components/ArticleList.vue'
import Image from '@/components/Image.vue'
import List from '@/components/List.vue'
import CompactList from '@/components/CompactList.vue'
import Subtitle from '@/components/Subtitle.vue'
import Gallery from '@/components/Gallery.vue'

@Component({
  components: {
    CContent: Content,
    CSection: Section,
    ArticleList,
    CImage: Image,
    List,
    CompactList,
    Subtitle,
    Gallery
  }
})
export default class Article extends Vue {
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
      case 'gallery':
        return 'gallery'
      default:
        return null
    }
  }
}
</script>

<style scoped lang="stylus">
a
  text-decoration none

.more-button
  height 60px
  background #00ff72
  color black
  display flex
  align-items center
  justify-content center
  margin-top 30px
  h4
    margin 0
</style>

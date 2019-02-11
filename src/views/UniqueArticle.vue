<template>
  <div class="unique-article">
    <c-article v-if="data" :fetchedData="data"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject, Watch } from 'vue-property-decorator'
import Article from '@/components/Article.vue'
import { getById, getByUID, getSingle } from '@/api/req'

@Component({
  components: {
    CArticle: Article
  }
})
export default class UniqueArticle extends Vue {
  data = null as any

  @Watch('$route', { immediate: true })
  async load () {
    this.data = null
    switch (this.$route.name) {
      case 'aboutus':
        this.data = await getSingle('about_us')
        break
      case 'brand':
        this.data = await getByUID('brand', this.$route.params.uid)
        break
      case 'contact':
        this.data = await getSingle('contact')
        break
      case 'ourbrands':
        this.data = await getSingle('ourbrands')
        break
      case 'partnership':
        this.data = await getSingle('partnership')
        break
      case 'services':
        this.data = await getSingle('services')
        break
    }
  }
}
</script>

<style lang="stylus" scoped>
.unique-article
  padding-bottom 100px
</style>

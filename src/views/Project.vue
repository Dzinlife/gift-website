<template>
  <div class="project">
    <c-article v-if="article" :fetchedData="article" :key="$route.params.uid"/>
    <div class="nav">
      <router-link :to="{name: 'project', params: {uid: prev && prev.uid}}" :style="{visible: prev ? 'visible' : 'none'}">
        <div class="prev" v-if="prev" :style="{backgroundImage: `url('${prev.data.gallery[0].image.url}')`}">
          <div class="mask">PREV</div>
        </div>
      </router-link>
      <router-link :to="{name: 'project', params: {uid: next && next.uid}}" :style="{visible: next ? 'visible' : 'none'}">
        <div class="next" v-if="next" :style="{backgroundImage: `url('${next.data.gallery[0].image.url}')`}">
          <div class="mask">NEXT</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.project
  width 100%

.nav
  display flex
  margin 0 -3px

  a
    flex 1
    margin 0 3px
    display block
.prev, .next
  height 100%
  position relative
  background-size cover
  background-position center
  &:after
    content ''
    display block
    padding-top 64%
  img
    width 100%
  .mask
    position absolute
    height 100%
    width 100%
    left 0
    top 0
    background rgba(black, 0.3)
    color white
    display flex
    align-items center
    justify-content center
    font-size 15px
    font-weight bold
</style>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import * as api from '@/api'
import Prismic from 'prismic-javascript'
import Article from '@/components/Article.vue'

@Component({
  components: {
    CArticle: Article
  }
})
export default class Preview extends Vue {
  article = null as any
  next = null as any
  prev = null as any
  navReady = false

  @Watch('$route')
  reload () {
    this.prev = null
    this.next = null
    this.article = null
    this.navReady = false
    this.load()
  }

  created () {
    this.load()
  }

  async load () {
    const lang = this.$route.params.lang
    this.article = await api.getByUID('project', this.$route.params.uid, { lang })

    const { id } = this.article

    await api.getByQuery(
      Prismic.Predicates.at('document.type', 'project'),
      {
        orderings: '[document.last_publication_date]',
        pageSize: 1,
        after: id,
        lang
      })
      .then(res => {
        if (res.results.length) {
          this.next = res.results[0]
        }
      })

    await api.getByQuery(
      Prismic.Predicates.at('document.type', 'project'),
      {
        orderings: '[document.last_publication_date desc]',
        pageSize: 1,
        after: id,
        lang
      })
      .then(res => {
        if (res.results.length) {
          this.prev = res.results[0]
        }
      })
    this.navReady = true
  }
}
</script>

<template>
  <div class="project" v-if="article">
    <c-article :fetchedData="article" :key="$route.params.uid"/>
    <div class="link-area">
      <a class="link" v-if="article.data.grey_link.url" :target="article.data.grey_link.target" :href="article.data.grey_link.url">{{article.data.grey_link_text}}</a>
      <div class="share" @click="showSharePanel = !showSharePanel">
        SHARE
        <transition name="fade">
          <div class="share-panel" v-if="showSharePanel">
            <VueGoodshareFacebook has_icon/>
            <VueGoodshareTumblr has_icon/>
            <VueGoodshareTwitter has_icon/>
          </div>
        </transition>
      </div>
    </div>
    <div class="divider"></div>
    <div class="nav">
      <router-link :to="{name: 'project', params: {uid: prev && prev.uid}}" :style="!prev && {visible: 'none', pointerEvents: 'none'}">
        <div class="prev" v-if="prev" :style="{backgroundImage: `url('${prev.data.gallery[0].image.url}')`}">
          <div class="mask">PREV</div>
        </div>
      </router-link>
      <router-link :to="{name: 'project', params: {uid: next && next.uid}}" :style="!next && {visible: 'none', pointerEvents: 'none'}">
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

.link-area
  height 60px
  display flex
  font-size 15px
  margin 0 -3px
  > *
    margin 0 3px

.link
  height 100%
  display flex
  align-items center
  justify-content center
  flex 1
  background #ccc
  font-weight bold
  text-decoration none
  color black

.share
  height 100%
  display flex
  align-items center
  justify-content center
  flex 1
  background #ccc
  font-weight bold
  position relative
  .share-panel
    position absolute
    right 0
    left 0
    height 100%
    display flex
    align-items center
    justify-content center
    line-height 0
    background white
    border 2px solid #ccc
    bottom 0
    box-sizing border-box
    > a
      padding-left 4px
      padding-right 4px
      &.twitter__design__flat
        padding-left 3px
        padding-right 5px

.divider
  height 4px
  background black
  margin 32px 0

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
import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue'
import VueGoodshareTumblr from 'vue-goodshare/src/providers/Tumblr.vue'
import VueGoodshareTwitter from 'vue-goodshare/src/providers/Twitter.vue'
// import VueGoodshareWeibo from "vue-goodshare/src/providers/Weibo.vue"

@Component({
  components: {
    CArticle: Article,
    VueGoodshareFacebook,
    VueGoodshareTumblr,
    VueGoodshareTwitter
    // VueGoodshareWeibo
  }
})
export default class Project extends Vue {
  article = null as any
  next = null as any
  prev = null as any
  navReady = false
  showSharePanel = false

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

    if (!(this.article && this.article.id)) return
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

  mounted () {
  }
}
</script>

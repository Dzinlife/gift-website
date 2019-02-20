<template>
  <div v-if="data">
    <div class="article-wrapper" v-for="(n, i) in data" :key="i" >
      <c-article :id="n.article.id"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Article from './Article.vue'

@Component
export default class ArticleList extends Vue {
  beforeCreate () {
    this.$options.components!.CArticle = Article
  }
  html = null as string | null
  @Prop() data
}
</script>

<style lang="stylus" scoped>
.article-wrapper
  & + .article-wrapper
    border-top 1px solid black
    padding-top 32px
    margin-top 32px
</style>

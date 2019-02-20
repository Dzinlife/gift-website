<template>
  <div class="home" v-if="home">
    <c-article :id="home.data.about_us.id"/>
    <hr>
    <c-article :id="home.data.services.id"/>
    <hr>
    <c-article :id="home.data.our_brands.id"/>
    <hr>
    <c-article :id="home.data.projects.id"/>
    <hr>
    <c-article :id="home.data.partnership.id"/>
    <hr>
    <c-article :id="home.data.contact.id"/>
    <hr>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Inject } from 'vue-property-decorator'
import * as api from '@/api'
import Article from '@/components/Article.vue'

@Component({
  components: {
    CArticle: Article
  }
})
export default class Home extends Vue {
  home = null as any

  created () {
    api.getSingle('ho', { lang: this.$route.params.lang }).then(res => {
      this.home = res
    })
  }
}
</script>

<style lang="stylus">
hr
  display block
  border none
  height 4px
  background black
  margin-top 32px
</style>

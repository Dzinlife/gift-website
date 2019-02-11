<template>
  <div class="home" v-if="home">
    <c-article :id="home.data.about_us.id"/>
    <hr>
    <c-article :id="home.data.services.id"/>
    <hr>
    <c-article :id="home.data.our_brands.id"/>
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
import { State } from 'vuex-class'
import Article from '@/components/Article.vue'
import AboutUs from './AboutUs.vue'
import Services from './Services.vue'
import Contact from './Contact.vue'
import Partnership from './Partnership.vue'
import OurBrands from './OurBrands.vue'

@Component({
  components: {
    CArticle: Article,
    AboutUs,
    Services,
    Contact,
    Partnership,
    OurBrands
  }
})
export default class Home extends Vue {
  @State home

  get aboutUs () {
    return this.home.data.about_us
  }

  get services () {
    return this.home.data.services
  }

  get brands () {
    return this.home.data.brands
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

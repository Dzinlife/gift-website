<template>
  <div class="about-us" v-if="data">
    <h1>{{data.data.title[0].text}}</h1>
    <c-content :data="data.data.content"/>
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
export default class AboutUs extends Vue {
  @State home
  data = null as any

  @Watch('home', { immediate: true })
  async onLoad (home) {
    if (!home) return
    this.data = await getById(this.aboutUs.id)
  }

  get aboutUs () {
    if (!this.home) return
    return this.home.data.about_us
  }
}
</script>

<style scoped lang="stylus">

</style>

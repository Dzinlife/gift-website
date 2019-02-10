<template>
  <div class="contact" v-if="data">
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
export default class Contact extends Vue {
  @State home
  data = null as any

  @Watch('home', { immediate: true })
  async onLoad (home) {
    if (!home) return
    this.data = await getById(this.contact.id)
  }

  get contact () {
    if (!this.home) return
    return this.home.data.contact
  }
}
</script>

<style scoped lang="stylus">

</style>

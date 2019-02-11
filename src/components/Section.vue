<template>
  <div v-html="html">
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'
import * as api from '@/api'
import PrismicDOM from 'prismic-dom'

@Component
export default class Section extends Vue {
  html = null as string | null
  @Prop() data
  @Watch('data', { immediate: true })
  onData (val) {
    if (!val) return
    this.html = PrismicDOM.RichText.asHtml(val)
  }
}
</script>

<template>
  <div v-if="data && isGroupContent(data)">
    <template v-for="(n, i) in data">
      <c-section :data="n.section" :key="i"/>
      <div class="hr" v-if="i < data.length - 1" :key="`${i}-hr`"></div>
    </template>
  </div>
  <c-section v-else-if="data && (typeof data === 'object')" :data="data"/>
</template>

<style lang="stylus" scoped>
.hr
  height 1px
  background black
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import * as api from '@/api'
import Section from './Section.vue'

@Component({
  components: {
    CSection: Section
  }
})
export default class Content extends Vue {
  @Prop() data
  isGroupContent (data) {
    return data.every(n => 'section' in n)
  }
}
</script>

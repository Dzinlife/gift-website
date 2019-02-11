<template>
  <c-section v-if="data" class="subtitle" :data="data"/>
</template>

<style lang="stylus" scoped>
.subtitle
  >>>
    h1, h2, h3, h4, h5, h6
      color #a6a6a6
      margin-top -1.3em
      font-weight 600

</style>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import Section from './Section.vue'

@Component({
  components: {
    CSection: Section
  }
})
export default class Subtitle extends Vue {
  @Prop() data
}
</script>

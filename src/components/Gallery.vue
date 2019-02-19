<template>
  <div v-if="data">
    <light-box-control :imgs="data.map(n => n.image.url)"/>
  </div>
</template>

<style lang="stylus" scoped>
img
  width 100%
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import LightBoxControl from './LightBoxControl.vue'

@Component({
  components: {
    LightBoxControl
  }
})
export default class CImage extends Vue {
  @Prop() data
}
</script>

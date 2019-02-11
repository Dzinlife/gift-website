<template>
  <img :src="data.url" v-if="data">
</template>

<style lang="stylus" scoped>
img
  width 100%
</style>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class CImage extends Vue {
  @Prop() data
}
</script>

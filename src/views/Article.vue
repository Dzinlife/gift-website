<template>
  <div class="article" v-if="data">
    <template v-for="(n, key) in data.data">
      <component :is="componentNameByKey(key)" :key="key" :data="n"/>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { State } from 'vuex-class'
import { getById } from '@/api/req'
import Content from '@/components/Content.vue'
import Section from '@/components/Section.vue'

@Component({
  components: {
    CContent: Content,
    CSection: Section
  }
})
export default class Article extends Vue {
  @State home
  @Prop() id!: string
  data = null as any

  @Watch('id', { immediate: true })
  async onLoad (val) {
    this.data = await getById(val)
  }

  componentNameByKey (key: string) {
    const type = key.split('_')[0]
    switch (type) {
      case 'title':
        return 'c-section'
      case 'content':
        return 'c-content'
      default:
        return null
    }
  }
}
</script>

<style scoped lang="stylus">

</style>

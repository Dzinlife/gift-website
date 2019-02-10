<template>
  <div>PREVIEW</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as api from '@/api'

@Component
export default class Preview extends Vue {
  created () {
    api.preview()
  }
}
</script>

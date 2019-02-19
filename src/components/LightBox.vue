<template lang="pug">
.light-box(:style="{height: `${height}px`, transition: heightTransition ? 'height 0.3s ease-out' : 'none'}")
  .img-wrapper(
    v-for="(src,i) in imgs"
    ":style"="imgStyle(i)"
  )
    img(:src="src" "ref"="imgs")
</template>

<script>

function lowPass (current, target) {
  const alpha = 0.88
  const result = alpha * current + (1.0 - alpha) * target
  return result
}

export default {
  name: 'light-box',
  props: {
    imgs: {
      default: []
    },
    index: {
      default: 0
    }
  },
  mounted () {
    this.setHeight()
    this.$refs.imgs.forEach(this.getDemension)
    window.addEventListener('resize', this.setHeight)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.setHeight)
    this.demensions.forEach((n, i) => {
      clearInterval(this.demensions[i])
    })
  },
  computed: {
  },
  watch: {
    index (next, prev) {
      if (next < 0 || next > this.imgs.length - 1) return

      this.setHeight(true)

      clearTimeout(this.timer)
      this.indexInterpolation = lowPass(this.indexInterpolation, next)
    },
    indexInterpolation (next, prev) {
      if (Math.abs(next - this.index) < 0.001) {
        this.timer = setTimeout(_ => {
          this.indexInterpolation = this.index
        }, 16)
      } else {
        this.timer = setTimeout(_ => {
          this.indexInterpolation = lowPass(next, this.index)
        }, 16)
      }
    },
    demensions () {
      this.setHeight()
    }
  },
  methods: {
    getDemension (img, i) {
      this.demensions[i] = setInterval(_ => {
        if (img.naturalWidth) {
          clearInterval(this.demensions[i])
          this.$set(this.demensions, i, [img.naturalWidth, img.naturalHeight])
        }
      }, 10)
    },
    setHeight (transition) {
      if (!this.demensions[this.index]) return

      const { offsetWidth, offsetHeight } = this.$refs.imgs[this.index]
      // const [w,h] = this.demensions[this.index]
      // const ratio = w/h
      // const height = offsetWidth / ratio

      // console.log(height, offsetHeight)

      if (this.height !== offsetHeight) {
        if (transition === true) {
          this.heightTransition = true
        } else {
          this.heightTransition = false
        }
        this.height = offsetHeight
      }
    },
    imgStyle (i) {
      let offset = 0
      const distance = i - this.indexInterpolation
      if (distance < -1) {
        offset = -1
      } else if (distance > 1) {
        offset = 1
      } else {
        offset = distance
      }

      var zMax = this.imgs.length - 1
      var zMaxIndex = Math.round(this.indexInterpolation)
      var z = zMax - Math.abs(i - zMaxIndex)

      return {
        // transform: `translate3d(${ distance * 100}%,0,${-Math.abs(distance) * 160}px) rotate3d(0,1,0,${-distance * 30}deg)`,
        transform: `translate3d(${distance * 100}%,0,0)`,
        zIndex: z
      }
    },
    prev () {
    },
    next () {
    }
  },
  data () {
    return {
      height: 380,
      heightTransition: false,
      indexInterpolation: this.index,
      demensions: new Array(this.imgs.length)
    }
  }
}

</script>

<style lang="stylus" scoped>
.light-box
  position relative
  overflow hidden
  // transition height 0.3s ease-out
  perspective 500px
.img-wrapper
  position absolute
  width 100%
  left 0
  top 0
img
  width 100%
  display block
</style>

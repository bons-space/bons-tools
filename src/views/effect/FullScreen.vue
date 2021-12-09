<template>
  <main>
    <section class="left">left</section>
    <section ref="fullScreenEle" class="main-content">
      main-content
      <el-button @click="handleFullScreen">全屏切换</el-button>
    </section>
    <section class="right">right</section>
  </main>
</template>

<script lang="ts">
  import { ref } from 'vue'
  // 局部全屏
  export default {
    name: 'FullScreen',
    setup() {
      const isFull = ref<Boolean>(false)
      const fullScreenEle = ref<HTMLElement | null>(null)

      const handleFullScreen = () => {
        if (!document.fullscreenEnabled) {
          console.log('你的浏览器不支持全屏模式！')
          return
        }
        if (isFull.value) {
          if (document.exitFullscreen) {
            document.exitFullscreen()
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen()
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen()
          }
        } else {
          // 谷歌浏览器 firefox
          if (fullScreenEle.value && fullScreenEle.value.requestFullscreen) {
            fullScreenEle.value.requestFullscreen()
          }
          // safari浏览器
          else if (fullScreenEle.value && (fullScreenEle.value as HTMLElement).webkitRequestFullScreen) {
            fullScreenEle.value.webkitRequestFullScreen()
          }
          // 兼容浏览器
          else if (fullScreenEle.value && (fullScreenEle.value as HTMLElement).mozRequestFullscreen) {
            fullScreenEle.value.mozRequestFullscreen()
          }
        }
        isFull.value = !isFull.value
      }

      return {
        isFull,
        fullScreenEle,
        handleFullScreen
      }
    }
  }
</script>

<style scoped lang="scss">
  main {
    width: 100%;
    padding: 20px;
    display: flex;
    height: calc(100vh - 200px);

    .left,
    .right {
      width: 300px;
      background: #2b91af;
      color: #fff;
      font-size: 34px;
      height: 100%;
      text-align: center;
    }

    .main-content {
      flex: 1;
      height: 100%;
      background: #248459;
      color: #fff;
      font-size: 34px;
    }
  }
</style>

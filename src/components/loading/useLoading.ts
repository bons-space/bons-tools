import { createApp } from 'vue'
import Loading from './Loading.vue'

export default () => {
  let loadingApp: any = null
  const loadingStack :number[] = []

  const loadingStart = () => {
    if (loadingStack.length > 0) {
      loadingStack.push(1)
      return
    }
    loadingApp = createApp(Loading)
    loadingApp.mount(document.createElement('div'))
    loadingStack.push(1)
    return loadingApp
  }

  const loadingEnd = () => {
    loadingStack.pop()
    if (loadingStack.length === 0) {
      loadingApp.unmount()
    }
  }
  return {
    loadingStart,
    loadingEnd,
  }
}

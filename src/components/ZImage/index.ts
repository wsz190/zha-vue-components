import { App } from 'vue'
import ZImage from './ZImage.vue'
ZImage.install = (app: App) => {
  app.component(ZImage.name, ZImage)
}

export default ZImage
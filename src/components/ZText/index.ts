import { App } from 'vue'
import ZText from './ZText.vue'
ZText.install = (app: App) => {
  app.component(ZText.name, ZText)
}

export default ZText
import { App } from 'vue'
import ZShape from './ZShape.vue'
ZShape.install = (app: App) => {
  app.component(ZShape.name, ZShape)
}

export default ZShape
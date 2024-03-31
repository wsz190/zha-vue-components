import ZText from './components/ZText'
import ZImage from './components/ZImage'
import ZShape from './components/ZShape'
import FinalPage from './components/FinalPage'
const components = [
  ZText,
  ZImage,
  ZShape,
  FinalPage
]

const install = (app: any) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  ZText,
  ZImage,
  ZShape,
  FinalPage,
  install
}
export default {
  install
}
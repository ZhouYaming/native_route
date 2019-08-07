import Reactotron,{overlay, openInEditor, networking} from 'reactotron-react-native'
import { mst } from "reactotron-mst"
import store from "./store/root"

const Reacto = Reactotron
  .configure({
    name: "React Native 叫我爸爸"
  }) // controls connection & communication settings
  // .useReactNative()
  .use(mst())
  .use(overlay())
  .use(openInEditor())
  .use(networking())
  .connect() // let's connect!
  .trackMstNode(store,'store')  
// Reactotron.log(Reactotron,'Reactotron')  
export default Reacto

// 挂载
global._logger = Reactotron
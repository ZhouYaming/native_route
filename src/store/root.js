import loginStore from './login'
import settingStore from './setting/index'
import { types , onSnapshot , addMiddleware } from "mobx-state-tree"

const store = types.model("store").props({
    loginStore:types.optional(loginStore,{name:'xx',age:'10'}),
    settingStore:types.optional(settingStore,{version:'0',config:[]})
}).create({})


// 打印store
onSnapshot(store, snapshot => {
    console.dir(snapshot)
})

// 中间件 时间旅行
const disposer = addMiddleware(store,(call,next,about)=>{
    console.log(`action ${call.name} was invoked`,`params:`,call.args)
    next(call)
})


export default store
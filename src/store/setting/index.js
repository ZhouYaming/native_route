import { types } from 'mobx-state-tree'

const teemp = types.model('todo',{
    name:types.string
})

const settingStore = types.model('settingStore',{
    version:types.string,
    config: types.array(teemp)
}).actions(self => {
        setVersion = (params) =>{
            self.version = params      
        }
        saveConfig = (params) =>{
            self.config = params
        }
        return { setVersion,saveConfig }
})


export default settingStore

// action change params
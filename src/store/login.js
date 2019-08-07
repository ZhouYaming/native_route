import { types } from 'mobx-state-tree'

const loginStore = types.model('loginStore',{
    name: types.string,
    age: types.string
}).actions(self => {
    changeParams = (params) =>{
        self.age = params.age
        self.name = params.age
    }
    return { changeParams }
})


export default loginStore
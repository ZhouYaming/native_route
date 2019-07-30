import { NavigationActions, StackActions } from 'react-navigation'

// 自定义全局路由对象 用于设定路由模块的功能 

class NaivigeApi {
    constructor(){
        this.api = global.NaivigeApi
    }
    update = () =>{
        this.api = global.NaivigeApi
    }

    navigate = (routeName,params)=>{
        if( !this.api ) return
        // 判断是否有token 是否跳转首页 路由拦截
        this.api.dispatch(
            NavigationActions.navigate({
                routeName,
                params,
            })
        )
    }
    reset = (routeName) =>{
        if( !this.api ) return
        const resetAction = StackActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({routeName})
            ]
        }) 
        this.api.dispatch(resetAction)
    }
}

export default new NaivigeApi()
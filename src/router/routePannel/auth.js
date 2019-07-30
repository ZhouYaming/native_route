import React from 'react'
// auth 路由包括 userAuth && guide
import UserAuth from '../../containers/auth/userAuth'
import Guide from '../../containers/auth/guide'


const baseNoHeaderOptions = {
    header:null
}
// auth 模块
export const authConfig = {
    userAuth:{
        screen:UserAuth,
        navigationOptions:baseNoHeaderOptions
    },
    guide:{
        screen:Guide,
        navigationOptions:baseNoHeaderOptions
    }
}
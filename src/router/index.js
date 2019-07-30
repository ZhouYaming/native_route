// 路由对象
import React from 'react'
import { createStackNavigator, createAppContainer , createBottomTabNavigator } from 'react-navigation'
// utils
import { getFirstDefaultRoute  , getSecondTabOptions , getTabNavigationOptions } from "./utils" 

import { authConfig } from "./routePannel/auth"
import { homeConfig } from './routePannel/home'
import { repayConfig } from './routePannel/repay'
import { myAccountConfig } from "./routePannel/myAccount"

// auth
const AuthStack = createStackNavigator(authConfig)

// root > home  
const HomeConfig = createStackNavigator(homeConfig,{
    initialRouteName:"home",
    navigationOptions:getSecondTabOptions
})
// root > repay
const repayStack = createStackNavigator(repayConfig,{
    navigationOptions:getSecondTabOptions
})
// root > myAccount
const myAccountStack = createStackNavigator(myAccountConfig,{
    navigationOptions:getSecondTabOptions
})

const HomeStack = createBottomTabNavigator({
    home:HomeConfig,
    repay:repayStack,
    myAccount:myAccountStack
},{
    navigationOptions:getTabNavigationOptions
})

const rootStack = createStackNavigator({
    root:HomeStack,
    auth:AuthStack
},{
    headerMode:"none",
    initialRouteName:getFirstDefaultRoute
})
//#endregion ================================================================================
export default createAppContainer(rootStack)
//顶层路由出口

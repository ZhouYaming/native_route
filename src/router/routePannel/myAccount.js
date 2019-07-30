
import React from 'react'
import MyAccount from "../../containers/botTab/myAccount"
import AboutUs from "../../containers/botTab/myAccount/aboutUs"
import AccountInfo from "../../containers/botTab/myAccount/accountInfo"
import HelpInfo from "../../containers/botTab/myAccount/helpInfo"
import LoanRecord from "../../containers/botTab/myAccount/loanRecord"
import Settings from "../../containers/botTab/myAccount/settings"



import { getNavigationOptions } from './_config'

const baseNoHeaderOptions = {
    header:null
}

// 样式类型2
const styleType = {
    backgroundColor:'#FF9A2F'
}

export const myAccountConfig = {
    myAccount:{
        screen:MyAccount,
        navigationOptions:getNavigationOptions('myAccount',styleType)
    },
    aboutUs:{
        screen:AboutUs,
        navigationOptions:getNavigationOptions('aboutUs',styleType)
    },
    accountInfo:{
        screen:AccountInfo,
        navigationOptions:getNavigationOptions('accountInfo',styleType)
    },
    helpInfo:{
        screen:HelpInfo,
        navigationOptions:getNavigationOptions('accountInfo',styleType)
    },
    loanRecord:{
        screen:LoanRecord,
        navigationOptions:getNavigationOptions('loanRecord',styleType)
    },
    settings:{
        screen:Settings,
        navigationOptions:getNavigationOptions('settings',styleType)
    },
}
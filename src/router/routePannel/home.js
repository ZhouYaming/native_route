import React from 'react'

import Home from "../../containers/botTab/home/apply"
import MyProfile from "../../containers/botTab/home/myProfile"
import Account from "../../containers/botTab/home/process/account"
import Contact from "../../containers/botTab/home/process/contact"
import Id from "../../containers/botTab/home/process/id"
import LoanConfirm from "../../containers/botTab/home/process/loanConfirm"
import Person from "../../containers/botTab/home/process/person"
import Work from "../../containers/botTab/home/process/work"
import Login from '../../containers/auth/login'
import LoginAgreement from '../../containers/auth/loginAgreement'

import { getNavigationOptions } from './_config'

const baseNoHeaderOptions = {
    header:null
}

// login 底色
const styleBg = {
    backgroundColor:'#EFEFEF'
}

// 样式类型2
const styleType = {
    backgroundColor:'#FF9A2F'
}

// home 路由配置
export const homeConfig = {
    login:{
        screen:Login,
        navigationOptions:getNavigationOptions('login',styleBg)
    },
    loginAgreement:{
        screen:LoginAgreement,
        navigationOptions:getNavigationOptions('loginAgreement',styleType)
    },
    home:{
        screen:Home,
        navigationOptions:baseNoHeaderOptions
    },
    myProfile:{
        screen:MyProfile,
        navigationOptions:getNavigationOptions('myProfile',styleType)
    },
    account:{
        screen:Account,
        navigationOptions:getNavigationOptions('account',styleType)
    },
    id:{
        screen:Id,
        navigationOptions:getNavigationOptions('id',styleType)
    },
    work:{
        screen:Work,
        navigationOptions:getNavigationOptions('work',styleType)
    },
    contact:{
        screen:Contact,
        navigationOptions:getNavigationOptions('contact',styleType)
    },
    loanConfirm:{
        screen:LoanConfirm,
        navigationOptions:getNavigationOptions('loanConfirm',styleType)
    },
    person:{
        screen:Person,
        navigationOptions:getNavigationOptions('person',styleType)
    }
}
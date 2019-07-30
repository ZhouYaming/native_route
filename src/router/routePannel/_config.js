import React from 'react'

import Title from "../component/title"
import LeftBack from "../component/leftBack"
import Right from '../component/right'

export const baseHeaderStyle = {
    shadowOpacity: 0,
    elevation: 0,
    borderBottomWidth: 0, 
}

// 没有左边返回标签
const noHeaderLeft = ['login','myAccount']
// 没有标题 和右标签
const noTitleOrRight = ['login']
// 只有标签
const hasTitle = ['myAccount']
/**
 * routeName : 路由名
 * style : 样式
 */
export const getNavigationOptions = (routeName , style) =>{
    const objOptions = {}

    objOptions.headerStyle = {
        ...baseHeaderStyle,
        backgroundColor:style.backgroundColor
    }

    objOptions.headerLeft = noHeaderLeft.includes(routeName) ? null : <LeftBack/>
    
    if(hasTitle.includes(routeName)){
        objOptions.headerTitle = <Title title={routeName}/>
        return objOptions
    }
    if(!noTitleOrRight.includes(routeName)){
        objOptions.headerTitle = <Title title={routeName}/>
        objOptions.headerRight = <Right/>
    }

    return objOptions
}
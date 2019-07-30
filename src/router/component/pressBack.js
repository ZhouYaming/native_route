import React from 'react'
import { BackHandler } from "react-native"
import { withNavigation } from "react-navigation"
import navigateApi from '../navigateApi'

// 禁止路由回退 一旦进入该路由就不允许后退
const NoBackRoute = [ 'home' ]
class ProccessBack extends React.Component{

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress)
    }
    // 找到当前路由

    getRoute = (temp) =>{
        const r =  temp.routes[temp.index]
        if(r.routes){
            return  this.getRoute(r)
        }
        return r.routeName
    }

    onBackPress = () =>{
        const temp = navigateApi.api.state.nav
        if( NoBackRoute.includes(this.getRoute(temp))){// 限制路由跳转
            return true
        }
    }

    render(){
        return this.props.children
    }
}

export default ProccessBack
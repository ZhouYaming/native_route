import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import style from "./index.style"
// import console = require('console');
import { NativeModules } from "react-native";

class Account extends React.Component{
    componentDidMount(){
        this.jtenter = this.props.navigation.addListener('didFocus',this.enterInfo)
        this.jtleave = this.props.navigation.addListener('didBlur',this.leaveInfo)
    }
    componentWillMount(){
        this.jtenter && this.jtenter.remove()
        this.jtleave && this.jtleave.remove()
    }
    enterInfo = () =>{
        NativeModules.countModule.startCount('account')
    }
    leaveInfo = () =>{
        NativeModules.countModule.endCount('account')
    }

    render () { 
        return (
            <View style={style.views}>
                <Text>
                    这是账户信息页!
                </Text>
                <Text onPress={this.linkLoginPage}>点击跳转登陆页面</Text>
                {/* <Text onPress={this.linkNextPage}>点击跳转登陆页面</Text> */}
            </View>
        )
    }
    linkLoginPage = () =>{
        console.log(this.props.navigation,"11")
        this.props.navigation.goBack()
    }
}

export default Account
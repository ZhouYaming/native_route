import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import style from "./index.style"
import { NativeModules } from "react-native";

class Person extends React.Component{
    componentDidMount(){
        this.jtenter = this.props.navigation.addListener('didFocus',this.enterInfo)
        this.jtleave = this.props.navigation.addListener('didBlur',this.leaveInfo)
    }
    componentWillUnmount(){
        this.jtenter && this.jtenter.remove()
        this.jtleave && this.jtleave.remove()
    }
    enterInfo = () =>{
        NativeModules.countModule.startCount('person')
    }
    leaveInfo = () =>{
        NativeModules.countModule.endCount('person')
    }
    
    render () { 
        return (
            <View style={style.views}>
                <Text>
                    这是个人信息页!
                </Text>
                <Text onPress={this.linkLoginPage}>点击跳转登陆页面</Text>
                {/* <Text onPress={this.linkNextPage}>点击跳转登陆页面</Text> */}
            </View>
        )
    }
    linkLoginPage = () =>{
        this.props.navigation.navigate('work')
    }
}

export default Person
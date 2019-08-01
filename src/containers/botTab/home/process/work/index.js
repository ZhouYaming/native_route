import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import style from "./index.style"
import { NativeModules } from "react-native";

class Work extends React.Component{
    componentDidMount(){
        this.jtenter = this.props.navigation.addListener('didFocus',this.enterInfo)
        this.jtleave = this.props.navigation.addListener('didBlur',this.leaveInfo)
    }
    componentWillMount(){
        this.jtenter && this.jtenter.remove()
        this.jtleave && this.jtleave.remove()
    }
    enterInfo = () =>{
        NativeModules.countModule.startCount('work')
    }
    leaveInfo = () =>{
        NativeModules.countModule.endCount('work')
    }
    
    render () { 
        return (
            <View style={style.views}>
                <Text>
                    这是工作信息页!
                </Text>
                <Text onPress={this.linkLoginPage}>点击跳转登陆页面</Text>
                {/* <Text onPress={this.linkNextPage}>点击跳转登陆页面</Text> */}
            </View>
        )
    }
    linkLoginPage = () =>{
        this.props.navigation.replace('contact')
    }
}

export default Work
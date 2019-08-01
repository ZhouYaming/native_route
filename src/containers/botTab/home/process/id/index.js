import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import style from "./index.style"
import { NativeModules } from "react-native";

class Id extends React.Component{
    componentDidMount(){
        this.jtenter = this.props.navigation.addListener('didFocus',this.enterInfo)
        this.jtleave = this.props.navigation.addListener('didBlur',this.leaveInfo)
    }
    componentWillMount(){
        this.jtenter && this.jtenter.remove()
        this.jtleave && this.jtleave.remove()
    }
    enterInfo = () =>{
        NativeModules.countModule.startCount('id')
    }
    leaveInfo = () =>{
        NativeModules.countModule.endCount('id')
    }
    
    render () { 
        return (
            <View style={style.views}>
                <Text>
                    这是身份信息页!
                </Text>
                <Text onPress={this.linkLoginPage}>点击跳转登陆页面</Text>
                {/* <Text onPress={this.linkNextPage}>点击跳转登陆页面</Text> */}
            </View>
        )
    }
    linkLoginPage = () =>{
        this.props.navigation.navigate('person')
    }
}

export default Id
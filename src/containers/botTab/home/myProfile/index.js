import React from 'react'
import { View, Text } from 'react-native'
import style from "./index.style"
import { NativeModules } from "react-native";

class MyProfile extends React.Component{
    componentDidMount(){
        this.jtenter = this.props.navigation.addListener('didFocus',this.enterInfo)
        this.jtleave = this.props.navigation.addListener('didBlur',this.leaveInfo)
    }
    componentWillMount(){
        this.jtenter && this.jtenter.remove()
        this.jtleave && this.jtleave.remove()
    }

    enterInfo = () =>{
        NativeModules.countModule.count('my_profile')
    }


    leaveInfo = () =>{
        NativeModules.countModule.count('my_profile')
    }

    render () { 
        return (
            <View style={style.views}>
                <Text>
                    这是资料状态页!
                </Text>
                
                <Text onPress={this.linkNextPage('id')}>身份信息页</Text>
                <Text onPress={this.linkNextPage('person')}>个人信息页</Text>
                <Text onPress={this.linkNextPage('work')}>工作信息页</Text>
                <Text onPress={this.linkNextPage('contact')}>联系人信息页</Text>
                <Text onPress={this.linkNextPage('account')}>账户信息页</Text>
            </View>
        )
    }
    linkNextPage = (r) =>() =>{
        // console.log("home","to login")
        this.props.navigation.navigate(r)
    }
}

export default MyProfile
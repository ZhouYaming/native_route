import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import style from "./index.style"


class Contact extends React.Component{

    render () { 
        return (
            <View style={style.views}>
                <Text>
                    这是联系人页!
                </Text>
                <Text onPress={this.linkLoginPage}>点击跳转登陆页面</Text>
                {/* <Text onPress={this.linkNextPage}>点击跳转登陆页面</Text> */}
            </View>
        )
    }
    linkLoginPage = () =>{
        this.props.navigation.replace('account')
    }
}

export default Contact
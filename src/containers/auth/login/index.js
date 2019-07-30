import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import style from "./index.style"


class Login extends React.Component{
    render () { 
        return (
            <View style={style.views}>
                <Text>
                    这是登陆页!
                </Text>
                <Text onPress={this.linkNextPage}>点击跳转协议页面</Text>
            </View>
        )
    }
    linkNextPage = () =>{
        this.props.navigation.navigate('loginAgreement')
    }
}

export default Login
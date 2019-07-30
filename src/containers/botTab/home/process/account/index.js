import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import style from "./index.style"
// import console = require('console');


class Account extends React.Component{

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
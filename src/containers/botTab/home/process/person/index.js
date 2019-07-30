import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import style from "./index.style"


class Person extends React.Component{

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
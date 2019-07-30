import React from 'react'
import { View, Text } from 'react-native'
import style from "./index.style"


class MyProfile extends React.Component{

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
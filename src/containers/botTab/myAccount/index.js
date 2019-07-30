import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import style from "./index.style"
import { changeStatusBar , changeStatusBar2} from "../../../global/method"
import navigateApi from "../../../router/navigateApi"

class MyAccount extends React.Component{

    render () { 
        return (
            <View style={style.views}>
                <Text>
                    这是我的账户页!
                </Text>
                <Text onPress={this.linkNextPage('aboutUs')}>关于我们页</Text>
                <Text onPress={this.linkNextPage('accountInfo')}>账户信息页</Text>
                <Text onPress={this.linkNextPage('helpInfo')}>帮助中心页</Text>
                <Text onPress={this.linkNextPage('loanRecord')}>贷款记录页</Text>
                <Text onPress={this.linkNextPage('settings')}>设置页</Text>
            </View>
        )
    }
    linkNextPage = (r) => ()=>{
        navigateApi.navigate(r)
        // this.props.navigation.navigate(r)
    }
}

export default MyAccount
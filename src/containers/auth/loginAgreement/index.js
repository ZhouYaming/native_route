import React from 'react'
import { View, Text } from 'react-native'
import style from "./index.style"


class loginAgreement extends React.Component{
    render () { 
        return (
            <View style={style.views}>
                <Text>
                    这是登陆协议页!
                </Text>
                {/* <Text onPress={this.linkNextPage}>点击跳转下个页面</Text> */}
            </View>
        )
    }
    linkNextPage = () =>{
        this.props.navigation.navigate('')
    }
}

export default loginAgreement
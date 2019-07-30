import React from 'react'
import { View, Text } from 'react-native'
import style from "./index.style"

class RepayWay extends React.Component{
    render () { 
        return (
            <View style={style.views}>
                <Text>
                    这是还款页!
                </Text>
                <Text onPress={this.linkLoginPage}>点击跳转还款详情页面</Text>
            </View>
        )
    }
    linkLoginPage = () =>{
        this.props.navigation.navigate('repayDetail')
    }
}

export default RepayWay
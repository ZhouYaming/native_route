import React from 'react'
import { View, Text } from 'react-native'
import style from "./index.style"

class AccountInfo extends React.Component{
    render () { 
        return (
            <View style={style.views}>
                <Text>
                    这是账户信息页!
                </Text>
            </View>
        )
    }
}

export default AccountInfo
import React from 'react'
import { View, Text } from 'react-native'
import style from "./index.style"

class Setting extends React.Component{
    render () { 
        return (
            <View style={style.views}>
                <Text>
                    这是设置页!
                </Text>
            </View>
        )
    }
}

export default Setting
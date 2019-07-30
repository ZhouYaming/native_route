import React from 'react'
import { View, Text } from 'react-native'
import style from "./index.style"

class HelpInfo extends React.Component{
    render () { 
        return (
            <View style={style.views}>
                <Text>
                    这是帮助中心页!
                </Text>
            </View>
        )
    }
}

export default HelpInfo
import React from 'react'
import { View, Text } from 'react-native'
import style from "./index.style"

class AboutUs extends React.Component{
    render () { 
        return (
            <View style={style.views}>
                <Text>
                    这是关于我们页!
                </Text>
            </View>
        )
    }
}

export default AboutUs
import React from 'react'
import { View, Text } from 'react-native'
import style from "./index.style"

class LoanRecord extends React.Component{
    render () { 
        return (
            <View style={style.views}>
                <Text>
                    这是贷款记录页!
                </Text>
            </View>
        )
    }
}

export default LoanRecord
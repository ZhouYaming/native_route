import React from 'react'
import {  View, Text  } from "react-native"


function Title({title}){

    return (
        <View style={{ flex:1, alignSelf:'center'}}>
            <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold', textAlign: 'center'}}>
                {title}
            </Text>
        </View>
    )
}

export default Title

// title 标题
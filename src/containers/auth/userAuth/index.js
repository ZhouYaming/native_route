import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import style from "./index.style"


class UserAuth extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.ts = this.props.navigation.addListener('didFocus',()=>{
            StatusBar.setBarStyle('light-content');
            StatusBar.setBackgroundColor("#FEC942")
        })
    }
    componentWillMount(){
        this.ts && this.ts.remove()
    }
    render () { 
        return (
            <View style={style.views}>
                <Text>
                    这是授权页!
                </Text>
                <Text onPress={this.linkNextPage}>点击跳转引导页</Text>
            </View>
        )
    }
    linkNextPage = () =>{
        this.props.navigation.navigate('guide')
    }
}

export default UserAuth
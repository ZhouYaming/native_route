import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import style from "./index.style"


class Guide extends React.Component{
    componentDidMount(){
        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor("#FFF")
    }
    async componentWillMount(){
        StatusBar.setBarStyle('light-content');
        StatusBar.setBackgroundColor("#FEC942")
    }
    render () { 
        return (
            <View style={style.views}>
                <Text>
                    这是引导页!
                </Text>
                <Text onPress={this.linkNextPage}>点击跳转下个页面</Text>
            </View>
        )
    }
    linkNextPage = () =>{
        this.props.navigation.navigate('home')
    }
}

export default Guide
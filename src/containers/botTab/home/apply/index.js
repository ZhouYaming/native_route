import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import style from "./index.style"
import { changeStatusBar , changeStatusBar2} from "../../../../global/method"

class Home extends React.Component{
    constructor(props){
        super(props)
        // console.log(props.navigation && props.navigation.replace('userAuth'))
    }

    componentDidMount(){
        changeStatusBar2()
    }
    componentWillUnmount(){
        changeStatusBar()
    }

    render () { 
        return (
            <View style={style.views}>
                <Text>
                    这是首页!
                </Text>
                <Text onPress={this.linkLoginPage}>点击跳转登陆页面</Text>
                {/* <Text onPress={this.linkNextPage}>点击跳转登陆页面</Text> */}
                <Text onPress={this.linkLoginPage2}>点击跳转资料状态页</Text>
            </View>
        )
    }
    linkLoginPage = () =>{
        console.log("home","to login")
        this.props.navigation.navigate('login')
    }
    linkLoginPage2 = () =>{
        this.props.navigation.navigate('myProfile')
    }
}

export default Home
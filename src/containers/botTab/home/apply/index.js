import React from 'react'
import { View, Text, StatusBar , Image } from 'react-native'
import style from "./index.style"
import { changeStatusBar , changeStatusBar2} from "../../../../global/method"
import { observer,inject } from 'mobx-react'
import IMG from "../../../../assets/back.png"
import Reactotron from 'reactotron-react-native'

@inject('store')
@observer
class Home extends React.Component{

    componentDidMount(){
        changeStatusBar2()
        console.log(this.props,'12')
    }
    componentWillUnmount(){
        changeStatusBar()
    }

    render () { 
        // Reactotron.log()
        return (
            <View style={style.views}>
                <Text>
                    这是首页!
                </Text>
                <Image style={{width:100}} source={IMG}/>
                <Text onPress={this.linkLoginPage}>点击跳转登陆页面</Text>
                {/* <Text onPress={this.linkNextPage}>点击跳转登陆页面</Text> */}
                <Text onPress={this.linkLoginPage2}>点击跳转资料状态页</Text>
                <Text onPress={this.changeAge}>
                    点我点我!{this.props.store.loginStore.age}
                </Text>
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

    changeAge = () =>{
        this.props.store.loginStore.changeParams({name:'xxxx',age:new Date().getMilliseconds() + ''})
    }
}

export default Home
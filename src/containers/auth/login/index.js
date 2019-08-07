import React from 'react'
import { View, Text, TextInput,Button } from 'react-native'
import style from "./index.style"
import { observable } from 'mobx'
import { inject, observer  } from "mobx-react"
// import console = require('console');
import { loginRequest } from "../../../manipulation/auth"

@observer
class Login extends React.Component{
    @observable account = ''
    @observable password = ''

    render () { 
        return (
            <View style={style.views}>
                <Text>
                    这是登陆页!
                </Text>
                <Text>账号:</Text><TextInput style={style.text_Style} onChange={this.changeAccount}/>
                <Text>密码:</Text><TextInput style={style.text_Style} onChange={this.changePassword}/>
                <Text onPress={this.linkNextPage}>点击跳转协议页面</Text>
                <Button title={'提交'} onPress={this.submit}></Button>
            </View>
        )
    }
    linkNextPage = () =>{
        this.props.navigation.navigate('loginAgreement')
    }
    changeAccount = (e) =>{
        this.account = e.target.value
    }
    changePassword = (e) =>{
        this.password = e.target.value
    }
    submit = async() =>{
        const params = { account:this.account, password:this.password}
        console.log(params,'params')
        await loginRequest(params,this.loginSuccessCb)
    }
    loginSuccessCb = () =>{
        alert('ok')
    }
}

export default Login
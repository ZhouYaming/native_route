import React from 'react'
import { View, Text } from 'react-native'
import style from "./index.style"
import { inject , observer } from 'mobx-react'
@inject('store')
@observer
class RepayWay extends React.Component{
    render () { 
        return (
            <View style={style.views}>
                <Text>
                    这是还款页!
                </Text>
                <Text onPress={this.changeCurrentVersion}>
                    当前版本{this.props.store.settingStore.version}!
                </Text>
                <Text onPress={this.linkLoginPage}>点击跳转还款详情页面</Text>
            </View>
        )
    }
    changeCurrentVersion = () =>{
        this.props.store.settingStore.setVersion(new Date().getMilliseconds()+'')
    }

    linkLoginPage = () =>{
        this.props.navigation.navigate('repayDetail')
    }
}

export default RepayWay
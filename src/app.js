import React,{ Component } from 'react'
import { View } from 'react-native'
import Reactotron from 'reactotron-react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Router from './router/index'
import ProccessBack from './router/component/pressBack'
import navigateApi from './router/navigateApi'


export default class App extends Component{

    async componentDidMount(){
        await navigateApi.update()
    }

    render() {
        // console.log(999999,this.props)
        Reactotron.log('hello rendering world')
        return(
            <View style={{flex:1,backgroundColor:Colors.light}}>
                <ProccessBack>
                    <Router ref = {(navigate)=>{ global.NaivigeApi = navigate}}/>
                </ProccessBack>
            </View>
        )
      }
}

import('./tool').then(() => console.log('Reactotron Configured'))
  
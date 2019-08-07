import React from 'react'
import { Provider } from 'mobx-react'
import rootStore from './store/root'
import "./tool"

import Reactotron from 'reactotron-react-native'

import App from "./app"
// Reactotron.log(Reactotron.overlay,'R')
class Root extends React.Component{

    render (){
        console.log(rootStore,'rootStore')
        return (
            <Provider store = {rootStore}>
                <App/>
            </Provider>
        )
    }
}
export default __DEV__ ? Reactotron.overlay(Root) : Root


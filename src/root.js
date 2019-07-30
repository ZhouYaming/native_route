import React,{ Component } from 'react'
import { Provider } from 'mobx-react'
import navigateApi from './router/navigateApi'

import App from "./app"

class Root extends React.Component{


    render (){
        return (
            <Provider>
                <App/>
            </Provider>
        )
    }
}
export default Root


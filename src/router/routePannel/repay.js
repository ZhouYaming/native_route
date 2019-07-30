import React from 'react'
import RepayWay from "../../containers/botTab/repay/repayWay"
import RepayDetail from "../../containers/botTab/repay/repayDetail"

import Title from "../component/title"
import LeftBack from "../component/leftBack"
import Right from '../component/right'

export const repayConfig =  {
    repayWay:{
        screen:RepayWay,
        navigationOptions:{
            headerStyle:{
                shadowOpacity: 0,
                elevation: 0,
                borderBottomWidth: 0, 
                backgroundColor: '#fff',
            }
        }
    },
    repayDetail:{
        screen:RepayDetail,
        navigationOptions:{
            headerTitle: <Title title="repayDetail"/>,
            headerRight:<Right/>,
            headerLeft:<LeftBack/>,
            headerStyle:{
                shadowOpacity: 0,
                elevation: 0,
                borderBottomWidth: 0, 
                backgroundColor: '#FF9A2F',
            }
        }
    },
}
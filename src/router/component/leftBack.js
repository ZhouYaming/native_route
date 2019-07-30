import React from 'react'
import { TouchableOpacity,  View, Image } from "react-native"
import { withNavigation } from "react-navigation"
import back from "../../assets/back.png"

class LeftBack extends React.Component{

    handleRoute = () =>{
        this.props.navigation.goBack(null)
    }

    render(){
        return(
            <TouchableOpacity onPress={this.handleRoute}> 
                <View  style={{
                    paddingLeft: 14,
                    width: 56,
                    // flex: 1,
                    justifyContent: 'center',
                    position:"relative",
                    zIndex:100,
                }}>
                    <Image source={back} style={{ width: 10, height: 16 }} />
                </View>
            </TouchableOpacity>
            
        )
    }
}
export default withNavigation(LeftBack)

// 返回
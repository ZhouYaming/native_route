
// 路由层公共函数
import { StatusBar } from 'react-native'
// 设置 statusBar 样式 
export const changeStatusBar = () =>{
    StatusBar.setBarStyle('dark-content');
    StatusBar.setBackgroundColor("#FFF")
}

export const changeStatusBar2 = () =>{
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor("#FEC942")
}


const AUTH  = 'auth'
const ROOT = 'root'
// 重定向路由
export const getFirstDefaultRoute = (() =>{
    const temp = (new Date().getSeconds())%2 === 0
    return temp ? AUTH : ROOT
})()


// 获取当前路由 
export const getCurrentRoute = (temp) =>{
    const r =  temp.routes[temp.index]
    if(r.routes){
        return  getCurrentRoute(r)
    }
    return r.routeName
}

// 隐藏二级tab标签
export const getSecondTabOptions =  ({ navigation }) => {
    let tabBarVisible = navigation.state.index > 0 ? false : true
    return { tabBarVisible }
}


// 设置不同的tab bar
const routeYellow = [ 'repayDetail', 'home', 'myAccount','loginAgreement']
const routeWhite = [ 'repayWay', 'login']

// 由于每次都执行避免多次执行造成不必要损耗 ,依靠后者会继承前者的样式的特点减少调用次数
export const getTabNavigationOptions = (n) =>{ 
    const route = getCurrentRoute(n.navigation.state)
    if(routeWhite.includes(route) ){
        changeStatusBar()
    }
    if( routeYellow.includes(route)){
        changeStatusBar2()
    }
}
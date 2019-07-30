import { StatusBar } from 'react-native'

export const changeStatusBar = () =>{
    StatusBar.setBarStyle('dark-content');
    StatusBar.setBackgroundColor("#FFF")
}

export const changeStatusBar2 = () =>{
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor("#FEC942")
}
import React from "react";
import {SafeAreaView,StyleSheet} from 'react-native'
import  Constant  from "expo-constants";

export const AppScreen = ({style,children},...styles) =>{
return(
    <SafeAreaView style={StyleSheet.screen}>
        {children}
    </SafeAreaView>
)
}

const styles  = StyleSheet.create({
    screen:{
        marginTop:Constant.statusBarHeight
    }
})                

export default AppScreen
import React from 'react'
import { View, Text,StyleSheet, Image } from 'react-native'
import {AppScreen} from './AppScreen'
import {Button, TextInput} from 'react-native-paper'
import {HomeScreen} from './HomeScreen'
import {AuthNav} from '../Navigations/AuthNav'
import { BackgroundImage } from 'react-native-elements/dist/config'

const LoginScreen=({navigation})=> {
    return (
        <AppScreen style={styles.screen}>

            <Text style={{fontSize:20, textAlign:"center", margin:20}}>Login to continue</Text>

            <BackgroundImage style={{height:200,width:"90%", alignItems:"center", margin:"auto", justifyContent:"center"}} source={require("../../assets/login-bg-car.jpg")}/>


            <View style={styles.form}>
            
                <TextInput mode="outlined" label="Email"/>
                <TextInput mode="outlined" color="black" label="Password"/>
            
          </View>
          <View style={{marginVertical:10,padding:10}}>
              <Button mode="contained" color='black' icon="email" style={{padding:10}}  onPress={()=> navigation.navigate("HomeScreen")}>Login</Button>
          </View>
    </AppScreen>
    )
}
export default LoginScreen

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    form:{
        padding:10,
        width:"100%",
        borderRadius:10,  
}
})
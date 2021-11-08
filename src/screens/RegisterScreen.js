import React from 'react'
import { StyleSheet,Text,View } from 'react-native'
import { BackgroundImage } from 'react-native-elements/dist/config'
import {AppScreen} from './AppScreen'
import {Button, TextInput} from 'react-native-paper'

export const RegisterScreen = ({navigation})=>{
    return (
        <AppScreen style={styles.screen}>
            <Text style={{fontSize:20, textAlign:"center", margin:20}}>Register now!</Text>
            <BackgroundImage style={{height:200,width:"90%", alignItems:"center", margin:"auto", justifyContent:"center"}} source={require("../../assets/login-bg-car.jpg")}/>

            <View style={styles.form}>
                <TextInput mode="outlined" label="Username"/>
                <TextInput mode="outlined" label="Email"/>
                <TextInput mode="outlined" color="black" label="Password"/>
                <TextInput mode="outlined" color="black" label="Repeart Password"/>
          </View>
          <View style={{marginVertical:10,padding:10}}>
              <Button mode="contained" color='black' icon="email" style={{padding:10}}  onPress={()=> navigation.navigate("HomeScreen")}>Register</Button>
          </View>
    </AppScreen>
    )
}
export default RegisterScreen
const styles = StyleSheet.create({})
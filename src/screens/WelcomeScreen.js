import React from 'react'
import { StyleSheet,View,Text} from 'react-native'
import {Button} from 'react-native-paper'
import AppScreen from './AppScreen'
import { BackgroundImage } from 'react-native-elements/dist/config'

export const MainWelcomeScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
             <AppScreen style={styles.screen}>
               <View>
               <BackgroundImage style={{height:200,width:"90%", alignItems:"center", margin:"auto", justifyContent:"center"}} source={require("../../assets/login-bg-car.jpg")}/>
               </View>
                <View style={styles.btnContainer}>
                    <Button style={styles.btn} color="green" mode="contained" icon="email" onPress={()=> navigation.navigate("Login") }>Login</Button>
                    <Button style={styles.btn} mode="contained" color="black" icon="email" onPress={()=> navigation.navigate("Register")}>Register</Button>
                </View>
            </AppScreen>
        </View>
    )
}

// export default MainWelcomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
    },
    screen:{
      justifyContent:"center",
      alignContent:"center"
  },
  btnContainer:{
      padding:10,
      width:"100%",
  },
  btn:{
      padding:10,
      marginVertical:8
  }

})
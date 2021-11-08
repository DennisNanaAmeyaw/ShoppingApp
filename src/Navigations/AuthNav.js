import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import {MainWelcomeScreen} from '../screens/WelcomeScreen'
import HomeScreen from '../screens/HomeScreen'
import CartScreen from '../screens/CartScreen'
import UserScreen from '../screens/UserScreen'
import AppScreen from '../screens/AppScreen'
import {TabNav} from '../Navigations/TabNav'
const Stack = createStackNavigator()

export const AuthNav = () =>{
    return(
        <Stack.Navigator screenOption={{headerShown:false}}>
            <Stack.Screen name="Main" component={MainWelcomeScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
           <Stack.Screen name="HomeScreen" component={TabNav}/>

        </Stack.Navigator>
    )
}
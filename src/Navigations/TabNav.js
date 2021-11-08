import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import CartScreen from '../screens/CartScreen'
import UserScreen from '../screens/UserScreen'
import {AntDesign} from '@expo/vector-icons'
import { StackNav } from './StackNav'
import { AuthNav } from './AuthNav'

const Tab =  createBottomTabNavigator()

// tab icons
const TabIcons = {
    Home:"home",
    Cart:"shoppingcart",
    User:"user",
}
export const TabNav =  () =>{
    return(
        <Tab.Navigator tabBarOptions={{showLabel:false}} screenOptions={{showLabel : false,tabBarShowLabel:false}}
         screenOptions={({route})=>({tabBarIcon:({size,color})=>{
            const iconName  = TabIcons[route.name]
            return <AntDesign name = {iconName} size = {size} color = {color}/>
         }
        })}>
            <Tab.Screen name = "Home" component = {StackNav}/>
            <Tab.Screen name = "Cart" component = {CartScreen}/>
            <Tab.Screen name = "User" component = {UserScreen}/>

        </Tab.Navigator>
    )
}
export default TabNav
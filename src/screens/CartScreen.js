import React from 'react'
import { StyleSheet,View,Text, ViewPropTypes,FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import cartItems from '../components/CartItems/cartItems'
import { AuthNav } from '../Navigations/AuthNav'
import {AppScreen} from './AppScreen'
 
const CartScreen  = () =>{
    const cart = useSelector(state=>state.cart.items)
    return(
        <View style={styles.container}>  
            <AppScreen style={{flex:1}}>
              <FlatList
                 data={cartItems}
                 keyExtractor={(item)=>item.id}
                 renderItem={({item})=> <cartItems items={item}/>}
              />
              <View></View>
            </AppScreen>
        </View>
    )
}

export default CartScreen
const styles  = StyleSheet.create({
    container:{

    }
})
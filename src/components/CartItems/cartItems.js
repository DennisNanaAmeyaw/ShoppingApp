import React from 'react'
import { StyleSheet,View,Text,Image } from 'react-native'
import { IconButton } from '../../IconButton/iconButton'

export const cartItems = ({items}) =>{
       const {image,title,price,qty,totalAmount}=items

        const dispatch = useDispatch()
        const incrementQuantity =()=>{
            dispatch(cartActions.addToCart(items))
        }
        const decrementQuantity =()=>{
            dispatch(cartActions.removeItem(items))
        }
    return(
        <View style={styles.container}>
           <View style={styles.imageContainer}>
               <Image style={styles.image} source={{uri:image}}/>
           </View>
           <View style={styles.body}>
             <Text style={styles.title}>{title}</Text>
             <Text style={styles.price}>Ghc{price}</Text>
             <Text style={styles.totalAmount}>GHc{totalAmount}</Text>
           </View>
        <View style={styles.rightContent}>
            <IconButton onPress={decrementQuantity} iconName="minus" size={40}/>
            <Text style={styles.qty}>{qty}</Text>
            <IconButton onPress={incrementQuantity} iconName="plus" size={40} backgroundColor="#5655" color="#000"/>
            </View>
           </View>
    )
}

export default cartItems;

const styles = StyleSheet.create({
    container:{
              flexDirection:"row",
              alignItems:"center",
              backgroundColor:"white",
              padding:10,
               
    },
   imageContainer:{
              height:70,
              width:70,
              marginRight:17

   },  
   image:{
             width:"100%",
             height:"100%"
   },
   body:{
       flex:2
   },
   rightContent:{
       flexDirection:"row",
       alignItems:"center",
   },
   qty:{
       marginHorizontal:17,
       
   },
   
title:{
       fontSize:20,
       fontWeight:"700"

   },
   price:{
       fontSize:20,
       fontWeight:"700"

   },
   totalAmount:{
       fontSize:20,
       fontWeight:"700"

   },
})
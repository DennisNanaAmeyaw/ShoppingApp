import React from "react";
import { StyleSheet,View,Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button, List } from "react-native-paper";
import { add } from "react-native-reanimated";
import { useDispatch } from "react-redux";
import { AppCard } from "../components/AppCard/AppCard";
import { cartActions } from "../Redux/Cart.redux";
import AppScreen from "./AppScreen";
  


const DetailedScreen = ({route}) =>{
    const {product} = route.params
        const dispatch=useDispatch()
    const addToCart = ()=>{
          dispatch(cartActions.addtoCart(product))

    }
    return(
        <AppScreen>
             <ScrollView>
                <View>
                <AppCard style={styles.card1} imgContainer={styles.imgContainer} title={product.title} price={product.price} image={product.image} items={product}/>
            </View>
            <View style={styles.btnContainer}>
                <Button icon="shopping" onPress={addToCart} mode="contained" style={styles.btn}>Add to Cart</Button>
                </View>
                <List.Section title={`${product.title} Details`}>
                    <List.Accordion title="Product Information" left={()=> <List.Icon icon="information"/>}>
                        <List.Item description = {product.description}/>
                    </List.Accordion>
                    <List.Accordion title="Shoe Sizes" left={()=> <List.Icon icon="shoe-prints"/>}>
                        <List.Item description = {product.size}/>
                    </List.Accordion>
                    
                <List.Accordion title="Ratings" left={()=> <List.Icon icon="star"/>}>
                        <List.Item description = {product.rating}/>
                    </List.Accordion>
                    <List.Accordion title="Promotion Information" left={()=> <List.Icon icon="folder"/>}>
                        <List.Item description = {product.promoInfo}/>
                    </List.Accordion>
                    </List.Section>
            </ScrollView>
        </AppScreen>
    )
}

export default DetailedScreen

const styles = StyleSheet.create({
    
    card1:{
       backgroundColor:"black",
       width:"100%",
       marginHorizontal:0,
       borderRadius:8,
    },
    imgContainer:{  
        height:780,
    },
    btnContainer:{
        padding:20,
    },
    btn:{
        padding:10,
        backgroundColor:"black"
    },


})

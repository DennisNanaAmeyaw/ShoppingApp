import React from 'react'
import {Image,Text,View,TouchableOpacity,StyleSheet} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import { Favorite } from "../favorites/Favorite"
     
export const AppCard= ({title,price,image,items,onPress,style,imgContainer}) =>{
    return(
        <TouchableOpacity onPress={onPress} style={[styles.card,{...style}]}>
          <Favorite product={items}/>
            <View style={[styles.imgContainer,{imgContainer}]}>
                <Image source={{uri:image}} style={{height:"70%", width: "100%"}}></Image>
            </View>
            <View style = {styles.cardBody}>
                <View style = {styles.cardContent}>
                    <Text style={styles.title}>{title}</Text> 
                    <Text style={styles.price}>{price}</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                    <AntDesign name="star" size="18" color="orange"/>
                    <AntDesign name="star" size="18" color="orange"/>
                    <AntDesign name="star" size="18" color="orange"/>
                    <AntDesign name="star" size="18" color="orange"/>
                    <AntDesign name="star" size="18" color="orange"/>
         </View>
            </View>
        </TouchableOpacity>
    )

}
// export default AppCard
// styles
const styles = StyleSheet.create({
    card:{
        width:280,
        backgroundColor:"red",
        paddingBottom:10,
  marginHorizontal:7,
  borderRadius:10,

    },
    imageContainer:{
        height:800
    },
    cardBody:{
        padding:10
    },
    cardContent:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginVertical:10,
    },
    title:{
        fontSize:20,
        fontWeight:"500"
    },
    price:{
        fontWeight:"400",
    }

})
import React, {useContext} from 'react'
import {FlatList,StyleSheet,Text,View} from 'react-native'
import { ProductContext, ProductContextProvider } from '../context/ProductContext'
import { ActivityIndicator } from 'react-native-paper'
import { AppScreen } from './AppScreen'
import {AppCard} from '../components/AppCard/AppCard'


const HomeScreen = ({navigation}) =>{
     const {isLoading,products} = useContext(ProductContext)

if(isLoading){
    return(
        <View styles = {styles.prodLoading}> 
            <ActivityIndicator animating={true} size = "large" color = "red"  marginTop="50%"/>
             {/* <Text style={{marginVertical:10}}>Loading Products</Text> */}
        </View>
    )
}
// const prods = useContext(ProductContext)
return(
    <AppScreen>
<View>
  <Text>SHOES</Text>
    <FlatList horizontal showsHorizontalScrollIndicator={false}
              data={products} keyExtractor={(item) => item.id} 
              renderItem={({item})=>  
              <AppCard  
              title={item.title} 
              price={item.price} 
              image={item.image}
              items={item}

              onPress={()=> navigation.navigate("Details",{product:item})}
              />}/>
 </View>
    </AppScreen>
) 
}
export default HomeScreen

const styles = StyleSheet.create({
    prodLoading:{
        flex:1,
        flexDirection:"row",
              justifyContent:"center",
               alignItems:"center",
 
    }
})
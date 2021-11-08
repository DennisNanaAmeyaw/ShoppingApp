import React , {useContext} from 'react'
import { TouchableOpacity , StyleSheet} from 'react-native'
import {AntDesign} from  '@expo/vector-icons'
import {FavoriteContext} from '../../context/Favorite.context'

export const Favorite = ({product}) =>{
  const {add,remove,isFavored} = useContext(FavoriteContext)
    // checking if favorites is already selected
       const isSaved = isFavored.find(e => e.id === product.id)
  return(
        <TouchableOpacity style={styles.favs} onPress={()=>!isSaved ? add(product) : remove(product) }>
            <AntDesign size={40} color="orange" name={!isSaved?"hearto" : "heart"}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({ 
   favs: {
        position: "absolute",
        left:10,
        top:30,
        zIndex:100

   }
})

export default Favorite
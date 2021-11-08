import React from 'react'
import { TouchableOpacity } from 'react-native'
import {AntDesign} from '@expo/vector-icons'

export const IconButtons=({onPress,iconName,backgroundColor="white",size=70,color="#eee"})=>{
    return(
        <TouchableOpacity style={{
            height:size,
            width:size,
            borderRadius:size/2,
            backgroundColor,
            justifyContent:"center",
            alignItem:"center",

        }}>
            <AntDesign name={iconName} size={size*0.4} color={color}/>
        <AntDesign name="plus" size={24} color="red"/>
        </TouchableOpacity>
    )
}
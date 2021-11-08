import React from "react";
import { createStackNavigator,TransitionPresets } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailedScreen from "../screens/DetailedScreen";

const Stack = createStackNavigator()

export const StackNav = () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false,...TransitionPresets.ModalPresentationIOS} }>
            <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
            <Stack.Screen name="Details" component={DetailedScreen}></Stack.Screen>
             {/* <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen> */}
</Stack.Navigator>
    )
}

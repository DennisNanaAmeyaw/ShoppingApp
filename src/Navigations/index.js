import React from 'react';
import  {NavigationContainer} from '@react-navigation/native'
import { TabNav } from './TabNav';
import {AuthNav} from '../Navigations/AuthNav'
export const AppNavigation = ()=>{
    return(
        <NavigationContainer>
            {/* <TabNav/> */}
            <AuthNav/>
            </NavigationContainer>
    )
}

export default AppNavigation
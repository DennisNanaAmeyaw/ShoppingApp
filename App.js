import React from 'react'
import { ProductContextProvider } from './src/context/ProductContext';
import { AppNavigation } from './src/Navigations'
import {useFonts as useLato} from '@expo-google-fonts/lato'
import {Provider} from 'react-redux'
import {store} from './src/Redux/store'
import { FavoriteContextProvider } from './src/context/Favorite.context';

const App = () => {
  //  const [latoFonts] =useLato({
  //    Lato_400Regular
  //  })

  //  if(!latoFonts){
  //    return null
  //  }

 return (
 <Provider store={store}>
   <FavoriteContextProvider>
     <ProductContextProvider>
        <AppNavigation/>
     </ProductContextProvider>
   </FavoriteContextProvider> 
</Provider> 
)
}
 export default App
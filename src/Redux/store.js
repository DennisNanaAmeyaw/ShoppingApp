import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './Cart.redux'

 
export const store = configureStore({
    reducer:{
        cart : cartSlice.reducer
    } 
})

  export default store
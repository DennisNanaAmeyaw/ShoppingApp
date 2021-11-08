import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    items:[],
    totalPrice:0,
    totalQuantity:0,
}
export const cartSlice = () =>({
  name:"cart",
  initialState,
  reducers:{
  addtoCart(state,action){
    // adding product to cart
    const newItem = action.payload
    // check if product already exist in cart
    const exists = state.items.find(p=>p.id===newItem.id)
    // increment cart
     state.totalQuantity++
    if(!exists){
        state.items.push({
            ...newItem,
            qty:1,
            totalAmount:newItem.price
        })
        // udpate cart total price
        state.totalPrice=newItem.price
        
    }
    else{
        // increment quantity
        exists.qty++
        state.totalPrice = state.totalPrice += newItem.price
        exists.totalAmount = exists.totalAmount * exists.qty
    }

},
   removeItem(state,action){
       const itemToRemove = action.payload
    //    if item exist in cart , look here
    const itemExists = state.items.find(p=>p.id===itemToRemove.id)
    // remove product from cart when a product exist in cart 
    if(itemExists.qty === 1){
       state.items=state.items.filter(item => item.id != itemToRemove.id)
       state.totalPrice=state.totalPrice-itemToRemove.price
    }else{
        itemExists.qty--
        itemExists.totalAmount= itemExists.totalAmount-items.ToRemove.price
        state.totalPrice = state.totalPrice - itemExists.price 
    }
   }    
  }

})

export const cartActions = cartSlice.actions 
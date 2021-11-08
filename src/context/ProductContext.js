import React,{createContext,useState,useEffect} from 'react'
import {data} from '../model/ProductModel'

export const ProductContext  = createContext()
export const ProductContextProvider = ({children}) =>{
    const [isLoading,setIsloading] = useState(true)
    setTimeout(()=>{
        setIsloading(false)

    },3000)
    return(
        <ProductContext.Provider
        value={{
            isLoading,
            products:data
       }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext
import React,{createContext,useState} from 'react'

export const FavoriteContext  = createContext()
export const FavoriteContextProvider = ({children})=>{
    const [isFavored,setIsFavored] = useState([])
    
    // favorites     
    const addFavs   = (product)=>{
        setIsFavored([...isFavored,product])
    }

    // fav.remove
    const removeFavs = (product) =>{
        const newFavs = isFavored.filter((p)=>p.id !== product.id)
        setIsFavored(newFavs)

    }

    return(
        <FavoriteContext.Provider
          value={{
              isFavored,
              add:addFavs,
              remove: removeFavs,
          }}
          >
            {children}
        </FavoriteContext.Provider>
    )
}
// export default FavoriteContextProvider
export default FavoriteContext
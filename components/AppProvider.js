import React, { useContext, useState} from 'react';

export const StateContext = React.createContext();

export function useStateContext(){
  return useContext(StateContext)
}

export function AppProvider({children}){
    const [cartMenu, setCartMenu] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addCart = (title,price,image,id) =>{
        setCartItems([...cartItems, {title,price,image,id}]);
        setCartMenu(true)
   
    }

    const removeCart = (id) =>{
     let list = cartItems.filter((item) => id != item.id)
      setCartItems(list);
 
  }

  return(
    <StateContext.Provider
    value={{
        cartMenu,
        setCartMenu,
        cartItems,
        setCartMenu,
        addCart,
        removeCart


    }}>
      {children}
    </StateContext.Provider>
  )
}
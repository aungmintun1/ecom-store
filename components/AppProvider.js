import React, { useContext, useState} from 'react';

export const StateContext = React.createContext();

export function useStateContext(){
  return useContext(StateContext)
}

export function AppProvider({children}){
    const [cartMenu, setCartMenu] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addCart = (title,price,image) =>{
        setCartItems([...cartItems, {title,price,image}]);
        setCartMenu(true)
   
    }

  return(
    <StateContext.Provider
    value={{
        cartMenu,
        setCartMenu,
        cartItems,
        setCartMenu,
        addCart,
      


    }}>
      {children}
    </StateContext.Provider>
  )
}
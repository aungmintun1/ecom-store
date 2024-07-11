import React, { useContext, useState} from 'react';

export const StateContext = React.createContext();

export function useStateContext(){
  return useContext(StateContext)
}

export function AppProvider({children}){
    const [cartMenu, setCartMenu] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addCart = (title,price,image,id,quantity) =>{
        setCartItems([...cartItems, {title,price,image,id,quantity}]);
        setCartMenu(true)
   
    }

    const removeCart = (id) =>{
     let list = cartItems.filter((item) => id != item.id)
      setCartItems(list);
 
  }

  let productDB = [
    {
      title:"Blue T-shirt",
      price: 25.00, 
      image: "/img/shop/1.jpg",
      id: 1
    },
    {
      title:"Running Shoes",
      price: 120.00, 
      image: "/img/shop/2.jpg",
      id: 2
    },
    {
      title:"Sport Bag",
      price: 90.00, 
      image: "/img/shop/3.jpg",
      id: 3
    },
    {
      title:"Casual Blue Shoes",
      price: 100.00, 
      image: "/img/shop/4.jpg",
      id: 4
    }

  ]

  
    // <Product title="Blue T-shirt" price={92.00} image='img/shop/1.jpg' id={1} quantity={3}/>
    // <Product title="Running Shoes" price={92.00} image='img/shop/2.jpg' id={2} quantity={1}/>
    
    // <Product title="Sport Bag" price={92.00} image='img/shop/3.jpg'  id={3} quantity={1}/>
    
    // <Product title="Casual Blue Shoes" price={92.00} image='img/shop/4.jpg' id={4} quantity={1}/>

    // {
    //   title:"",
    //   price: , 
    //   image: "",
    //   id: 

    // }

  return(
    <StateContext.Provider
    value={{
        cartMenu,
        setCartMenu,
        cartItems,
        setCartItems,
        addCart,
        removeCart,
        productDB,



    }}>
      {children}
    </StateContext.Provider>
  )
}
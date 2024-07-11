import React, { useContext, useState} from 'react';

export const StateContext = React.createContext();

export function useStateContext(){
  return useContext(StateContext)
}

export function AppProvider({children}){
    const [cartMenu, setCartMenu] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addCart = (title,price,image,id,quantity,size) =>{
        setCartItems([...cartItems, {title,price,image,id,quantity,size}]);
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
    },
    {
      title:"Grey Beanie",
      price: 20.00, 
      image: "/img/shop/5.jpg",
   
      id: 5
    },
    {
      title:"Purple Winter Coat",
      price: 150.00, 
      image: "/img/shop/6.jpg",
    
      id: 6
    },
    {
      title:"Casual Blue Sneakers",
      price: 100.00, 
      image: "/img/shop/7.jpg",
     
      id: 7
    },
    {
      title:"Blue Puffer Jacket",
      price: 125.00, 
      image: "/img/shop/8.jpg",
      
      id: 8
    },
    {
      title: "Sling Backpack",
      price: 90.00,
      image: "/img/shop/9.jpg",
      id: 9,
      size: "medium",
    
    },
    {
      title: "Luxury Watch",
      price: 200.00,
      image: "/img/shop/10.jpg",
      id: 10,
 
    },
    {
      title: "Denim Hat",
      price: 50.00,
      image: "/img/shop/11.jpg",
      id: 11,
  
    },
    {
      title: "White Sneakers",
      price: 100.00,
      image: "/img/shop/12.jpg",
      id: 12,

    },
    {
      title: "Grey Watch",
      price: 125.00,
      image: "/img/shop/13.jpg",
      id: 13,
      size: "medium",
      
    },
    {
      title: "Hiking Boots",
      price: 90.00,
      image: "/img/shop/14.jpg",
      id: 14,
     
    },
    {
      title: "Beanie Hat",
      price: 20.00,
      image: "/img/shop/15.jpg",
      id: 15,
    
    },
    {
      title: "Purple T-shirt",
      price: 25.00,
      image: "/img/shop/16.jpg",
      id: 16,
   
    },
    {
      title: "Colorful Jacket",
      price: 125.00,
      image: "/img/shop/17.jpg",
      id: 17,
      size: "medium",
      
    },
    {
      title: "Yellow Baseball Cap",
      price: 20.00,
      image: "/img/shop/18.jpg",
      id: 18,
 
    },
    {
      title: "Black Hoodie",
      price: 90.00,
      image: "/img/shop/19.jpg",
      id: 19,
    
    },
    {
      title: "Long Orange Cardigan",
      price: 90.00,
      image: "/img/shop/20.jpg",
      id: 20,
   
    }
  ]

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
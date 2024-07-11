import { useStateContext } from '../AppProvider'
import { useEffect, useState } from "react";
import { loadStripe } from '@stripe/stripe-js';

const Cart = () =>{
const stripePromise = loadStripe('pk_test_51OkouIJ4pPgw30DxgN8tgYwaYgMotVCdDNnyFdSKagZtuSyeZQ3hE6bOm6vRWqtJt5WLBv3cPV0nhZRK8NQ1MO7600nAH4nQyD');
const globalState= useStateContext();

const handleCheckout = async () => {
  const stripe = await stripePromise;

  console.log('this is the ' + process.env.STRIPE_SECRET_KEY);

  const response = await fetch('/api/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({cartItems: globalState.cartItems}),
  });

  const session = await response.json();

  const result = await stripe.redirectToCheckout({
    sessionId: session.id,
  });

  if (result.error) {
    console.error('this is the error' + result.error.message);
  }
  
};



    useEffect(() =>{
		if(globalState.cartMenu) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'auto';
		}
	}, [globalState.cartMenu])

 const loopItems = () =>{
  return globalState.cartItems.map((item) => {
        return <CartItem title={item.title} price={item.price} image={item.image} id={item.id} quantity={item.quantity} size={item.size}/>
    
    })
 }   

const total = () =>{
  let sum=0;
   globalState.cartItems.forEach((item) => {
    let totalPrice = item.quantity*item.price
     sum += totalPrice;
})

return sum;
 }

    return (
        <>

<div className={`cart-container ${globalState.cartMenu ? 'active-cart' : ''}`}>
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <button className="close-button" onClick={()=>globalState.setCartMenu(false)}>
          <i className="fas fa-times"></i>
        </button>
      </div>
      <div className='item-container'>
        {loopItems()}
      </div>

      <div className="cart-subtotal">
        <h4 className='total-text'>Subtotal</h4>
        <p className='total-amount'>${total().toFixed(2)}</p>
      </div>
      <button onClick={handleCheckout} className="btn btn-dark btn-block">Check Out</button>
      </div>


        </>
)

}

const CartItem = (props) => {
  const globalState= useStateContext();

  const changeQuantity = (id, type) => {

    let currentQ = globalState.cartItems.find((item) => item.id === id);
    
    if (type==='add') {
      currentQ.quantity += 1;
    }

    else if (type==='subtract'){

     if(currentQ.quantity > 1) 
      currentQ.quantity -= 1;

     else {
       let list = globalState.cartItems.filter((item) => id != item.id)
      return globalState.setCartItems(list);
     }
    }

      let newItems = globalState.cartItems.map((item) => {
        if (item.id === currentQ.id) {
          return { ...item, quantity: currentQ.quantity }; // Correctly create a new item with updated quantity
        }
        return item;
      });
      console.log(newItems)
      globalState.setCartItems(newItems)
     
  
  };
  
	return (
        <div className="cart-item">
        <img src={props.image} alt="Product" className="cart-item-image " />
        <div className="cart-item-details">
          <h4>{props.title}</h4>
          <p>${props.price.toFixed(2)}</p>
          {props.size ? <p>Size: {props.size}</p> : ''}
          <div className="cart-item-controls">
            <button onClick={()=>changeQuantity(props.id,'subtract')}  className="btn btn-outline-secondary">
              <i className="fas fa-trash" ></i>
            </button>
            <span className="item-quantity">{props.quantity}</span>
            <button className="btn btn-outline-secondary" onClick={()=>changeQuantity(props.id,'add')} >

              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
	);
};



export default Cart;
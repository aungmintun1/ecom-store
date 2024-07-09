import { useStateContext } from '../AppProvider'
import { useEffect, useState } from "react";
const Cart = () =>{

const globalState= useStateContext();
   const [subtotal, setSubTotal] = useState(0);


    useEffect(() =>{
		if(globalState.cartMenu) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'auto';
		}
	}, [globalState.cartMenu])

 const loopItems = () =>{
  return globalState.cartItems.map((item) => {
        return <CartItem title={item.title} price={item.price} image={item.image} id={item.id}/>
    
    })
 }   

 const total = () =>{
  let sum=0;
   globalState.cartItems.forEach((item) => {
     sum += item.price
})

return sum
   
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
        <p className='total-amount'>${total()}</p>
      </div>
      <button className="btn btn-dark btn-block">Check Out</button>
      </div>


        </>
)

}

const CartItem = (props) => {
  const globalState= useStateContext();
  const [totalItems, setTotalItems] = useState(1);
	return (
        <div className="cart-item">
        <img src={props.image} alt="Product" className="cart-item-image " />
        <div className="cart-item-details">
          <h4>{props.title}</h4>
          <p>${props.price}</p>
          <p>size: {props.id}</p>
          <div className="cart-item-controls">
            <button onClick={()=> totalItems <= 1 ? globalState.removeCart(props.id) : setTotalItems(totalItems-1)} className="btn btn-outline-secondary">
              <i className="fas fa-trash" ></i>
            </button>
            <span className="item-quantity">{totalItems}</span>
            <button className="btn btn-outline-secondary" onClick={()=> setTotalItems(totalItems+1)}>
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
	);
};



export default Cart;
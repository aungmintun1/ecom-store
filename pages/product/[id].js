import React from 'react'
import Header from "../../components/Header/header";
import Cart from "../../components/Cart/cart";
import Footer from "../../components/Footer/footer";
import { useStateContext } from '../../components/AppProvider';

export default function ProductPage(props) {
  const globalState= useStateContext();

  let productId = Number(props.query.id); // Convert the id to a number

  let product = globalState.productDB.find((item) => item.id === productId);

  return (
    <>
    {/* <Header/>
    <Cart/> */}
    <div>product page</div>
    <p>{props.query.id}</p>
    <p>{product.title}</p>
    <p>{product.price}</p>
  
    {/* <Footer/> */}
    </>
  )
}

export async function getServerSideProps(context) {

	return {
		props: { query: context.query }, 
	};
}
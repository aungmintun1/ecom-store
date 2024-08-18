import React from 'react'
import Header from "../../components/Header/header";
import Cart from "../../components/Cart/cart";
import Footer from "../../components/Footer/footer";
import Product from "../../components/Product/product";

import { useStateContext } from '../../components/AppProvider';
import { useState } from "react";

export default function ProductPage(props) {
  const globalState= useStateContext();

  let productId = Number(props.query.id); // Convert the id to a number

  let product = globalState.productDB.find((item) => item.id === productId);

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (value >= 1) { // Ensure the value does not go below 1
      setQuantity(value);
    }
  };

  
  const [size, setSize] = useState('Small');

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };


  return (
    <>
    <Header/>
    <Cart/>

    <section class="container sproduct my-5 pt-5">
        <div class="row mt-5">
            <div class="col-lg-5 col-md-12 col-12">
                <img class="img-fluid w-100 pb-1" src={product.image} id="MainImg" alt="main image"/>
            </div>

            <div class="col-lg-6 col-md-12 col-12">
                <h6>Home / {product.title}</h6>
                <h3 class="py-4">{product.title}</h3>
                <h2>${product.price.toFixed(2)}</h2>

                {props.query.type === "clothing" && 
                      <select className="my-3" value={size} onChange={handleSizeChange}>
                      <option value="">Select Size</option>
                      <option value="XL">XL</option>
                      <option value="XXL">XXL</option>
                      <option selected value="Small">Small</option>
                      <option value="Medium">Medium</option>
                      <option value="Large">Large</option>
                      </select>
                }
          
                <input type="number" value={quantity} onChange={handleQuantityChange} min="1" max="12"/>
                <button class="buy-btn" onClick={()=> globalState.addCart(product.title, product.price, product.image, product.id, quantity, size)} >Add To Cart</button>
                <h4 class="mt-5 mb-4">Product Details</h4>
                <span>The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.</span>
            </div>
        </div>
    </section>

    <section id="featured" class="my-5 pb-5">
        <div class="container text-center mt-5 py-5">
            <h3>Related Products</h3>
            <hr class="mx-auto"/>
        </div>
        <div class="row mx-auto container-fluid">
            <Product title="Casual White Shoes" price={125.00} image='/img/featured/1.jpg' id={21} size="medium" type="clothing" />
            <Product title="Casual Red Shoes" price={125.00} image='/img/featured/2.jpg' id={22}  type="clothing" />   
            <Product title="Blue Bookbag" price={90.00} image='/img/featured/3.jpg'  id={23} type="item" />
            <Product title="Pink Beanie" price={20.00} image='/img/featured/4.jpg' id={24}  type="item" />

            {/* <div class="product text-center col-lg-3 col-md-4 col-12">
                <img class="img-fluid mb-3" src="/img/featured/1.jpg" alt=""/>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h5 class="p-name">Sport Boots</h5>
                <h4 class="p-price">$92.00</h4>
                <button class="buy-btn">Buy Now</button>
            </div>
            <div class="product text-center col-lg-3 col-md-4 col-12">
                <img class="img-fluid mb-3" src="/img/featured/2.jpg" alt=""/>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h5 class="p-name">Sport Boots</h5>
                <h4 class="p-price">$92.00</h4>
                <button class="buy-btn">Buy Now</button>
            </div>
            <div class="product text-center col-lg-3 col-md-4 col-12">
                <img class="img-fluid mb-3" src="/img/featured/3.jpg" alt=""/>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h5 class="p-name">Sport Boots</h5>
                <h4 class="p-price">$92.00</h4>
                <button class="buy-btn">Buy Now</button>
            </div>
            <div class="product text-center col-lg-3 col-md-4 col-12">
                <img class="img-fluid mb-3" src="/img/featured/4.jpg" alt=""/>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h5 class="p-name">Sport Boots</h5>
                <h4 class="p-price">$92.00</h4>
                <button class="buy-btn">Buy Now</button>
            </div> */}
        </div>
    </section>

  
    <Footer/>
    </>
  )
}

export async function getServerSideProps(context) {

	return {
		props: { query: context.query }, 
	};
}
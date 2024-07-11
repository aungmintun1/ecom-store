import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Cart from "../components/Cart/cart";
import Product from "../components/Product/product";
import Link from 'next/link'

export default function Home() {

    return (
   <>
     <Header/>
     <Cart/>
     <section id="home">
        <div class="container">
            <h5>NEW ARRAIVALS</h5>
            <h1><span>Best Price</span> This Year</h1>
            <p>Shoomatic offers your very comfortable time<br></br> on walking and exercises.</p>
            <Link href='/shop'>
            <button>Shop Now</button>
            </Link>
        </div>
    </section>

    <section id="brand" class="container">
        <div class="row m-0 py-5">
            <img class="img-fluid col-lg-2 col-md-4 col-6" src="img/brand/1.png" alt=""/>
            <img class="img-fluid col-lg-2 col-md-4 col-6" src="img/brand/2.png" alt=""/>
            <img class="img-fluid col-lg-2 col-md-4 col-6" src="img/brand/3.png" alt=""/>
            <img class="img-fluid col-lg-2 col-md-4 col-6" src="img/brand/4.png" alt=""/>
            <img class="img-fluid col-lg-2 col-md-4 col-6" src="img/brand/5.png" alt=""/>
            <img class="img-fluid col-lg-2 col-md-4 col-6" src="img/brand/6.png" alt=""/>
        </div>
    </section>

    <section id="new" class="w-100">
        <div class="row p-0 m-0">
            <div class="one col-lg-4 col-md-12 col-12 p-0">
                <img class="img-fluid" src="img/new/1.jpg" alt=""/>
                <div class="details">
                    <h2>Extreme Rare Sneakers</h2>
                    <Link href='/shop'>
                    <button class="text-uppercase">Shop now</button>
                    </Link>
                </div>
            </div>
            <div class="one col-lg-4 col-md-12 col-12 p-0">
                <img class="img-fluid" src="img/new/5.jpg" alt=""/>
                <div class="details">
                    <h2>Awesome Blank Outfit</h2>
                    <Link href='/shop'>
                    <button class="text-uppercase">Shop now</button>
                    </Link>
                </div>
            </div>
            <div class="one col-lg-4 col-md-12 col-12 p-0">
                <img class="img-fluid" src="img/new/3.jpg" alt=""/>
                <div class="details">
                    <h2>Sportwear Up To 50% Off</h2>
                    <Link href='/shop'>
                    <button class="text-uppercase">Shop now</button>
                    </Link>
                </div>
            </div>
        </div>
    </section>

    <section id="featured" class="my-5 pb-5">
        <div class="container text-center mt-5 py-5">
            <h3>Our Featured</h3>
            <hr class="mx-auto"/>
            <p>Here you can check out our new products with fair price on rymo.</p>
        </div>
        <div class="row mx-auto container-fluid">
        <Product title="Casual White Shoes" price={125.00} image='/img/featured/1.jpg' id={21}  size="medium" type="clothing" />
            <Product title="Casual Red Shoes" price={125.00} image='/img/featured/2.jpg' id={22}  type="clothing" />   
            <Product title="Blue Bookbag" price={90.00} image='/img/featured/3.jpg'  id={23} type="item" />
            <Product title="Pink Beanie" price={20.00} image='/img/featured/4.jpg' id={24}  type="item" />
        </div>
    </section>

    <section id="banner" class="my-5 py-5">
        <div class="container">
            <h4>MID SEASON'S SALE</h4>
            <h1>Autumn Collection<br></br>UP TO 20% OFF</h1>
            <Link href='/shop'>
            <button class="text-uppercase">Shop Now</button>
            </Link>
        </div>
    </section>

    <section id="clothes" class="my-5">
        <div class="container text-center mt-5 py-5">
            <h3>Clothing</h3>
            <hr class="mx-auto"/>
            <p>Here you can check out our new products with fair price on rymo.</p>
        </div>
        <div class="row mx-auto container-fluid">
        <Product title="Colorful Jacket" price={125.00} image='img/shop/17.jpg' id={17}  size="medium" type="clothing" />
        <Product title="Yellow Baseball Cap" price={20.00} image='img/shop/18.jpg' id={18}  type="item" />  
        <Product title="Black Hoodie" price={90.00} image='img/shop/19.jpg'  id={19}  type="clothing" />
        <Product title="Long Orange Cardigan" price={90.00} image='img/shop/20.jpg' id={20}  type="clothing" />

            {/* <div class="product text-center col-lg-3 col-md-4 col-12">
                <img class="img-fluid mb-3" src="img/clothes/1.jpg" alt=""/>
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
                <img class="img-fluid mb-3" src="img/clothes/2.jpg" alt=""/>
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
                <img class="img-fluid mb-3" src="img/clothes/3.jpg" alt=""/>
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
                <img class="img-fluid mb-3" src="img/clothes/1.jpg" alt=""/>
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

    <section id="watches" class="my-5">
        <div class="container text-center mt-5 py-5">
            <h3>Accessories</h3>
            <hr class="mx-auto"/> 
            <p>Here you can check out our new products with fair price on rymo.</p>
        </div>
        <div class="row mx-auto container-fluid">
        <Product title="Luxury Watch" price={200.00} image='img/shop/10.jpg' id={10}  type="item" />
        <Product title="Grey Watch" price={125.00} image='img/shop/13.jpg' id={13}  size="medium" type="item" />
        <Product title="Sport Bag" price={90.00} image='img/shop/3.jpg'  id={3}  type="item" />
        <Product title="Beanie Hat" price={20.00} image='img/shop/15.jpg'  id={15}  type="item" />
            {/* <div class="product text-center col-lg-3 col-md-4 col-12">
                <img class="img-fluid mb-3" src="img/watches/1.jpg" alt=""/>
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
                <img class="img-fluid mb-3" src="img/watches/2.jpg" alt=""/>
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
                <img class="img-fluid mb-3" src="img/watches/3.jpg" alt=""/>
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
                <img class="img-fluid mb-3" src="img/watches/1.jpg" alt=""/>
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

    <section id="shoes" class="my-5 pb-5">
        <div class="container text-center mt-5 py-5">
            <h3>Shoes</h3>
            <hr class="mx-auto"/>
            <p>Here you can check out our new products with fair price on rymo.</p>
        </div>
        <div class="row mx-auto container-fluid">
        <Product title="Casual Blue Shoes" price={100.00} image='img/shop/4.jpg' id={4} type="clothing" />
        <Product title="White Sneakers" price={100.00} image='img/shop/12.jpg' id={12}  type="clothing" />
        <Product title="Hiking Boots" price={90.00} image='img/shop/14.jpg' id={14} type="clothing" />   
        <Product title="Casual Red Shoes" price={125.00} image='/img/featured/2.jpg' id={22}  type="clothing" />   
        </div>
    </section>

<Footer/>

   </>
    )
  }
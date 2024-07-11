import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import Cart from "../components/Cart/cart";
import Product from "../components/Product/product";

export default function Shop() {

    return (
    <>
    
        <Header/>
        <Cart/>
  
          <section id="featured" class="my-5 py-5">
        <div class="container mt-5 py-5">
            <h2 class="font-weight-bold">Our Featured</h2>
            <hr/>
            <p>Here you can check out our new products with fair price on rymo.</p>
        </div>
        <div class="row mx-auto container">

            <Product title="Blue T-shirt" price={25.00} image='img/shop/1.jpg' id={1} size="medium" type="clothing" />
            <Product title="Running Shoes" price={125.00} image='img/shop/2.jpg' id={2} type="clothing" />   
            <Product title="Sport Bag" price={90.00} image='img/shop/3.jpg'  id={3}  type="item" />
            <Product title="Casual Blue Shoes" price={100.00} image='img/shop/4.jpg' id={4} type="clothing" />

            <Product title="Grey Beanie" price={20.00} image='img/shop/5.jpg' id={5}  size="medium" type="item" />
            <Product title="Purple Winter Coat" price={150.00} image='img/shop/6.jpg' id={6}  type="clothing" />   
            <Product title="Casual Blue Sneakers" price={100.00} image='img/shop/7.jpg'  id={7} type="clothing" />
            <Product title="Blue Puffer Jacket" price={125.00} image='img/shop/8.jpg' id={8}  type="clothing" />


            <Product title="Sling Backpack" price={90.00} image='img/shop/9.jpg' id={9}  size="medium" type="item" />
            <Product title="Luxury Watch" price={200.00} image='img/shop/10.jpg' id={10}  type="item" />   
            <Product title="Denim Hat" price={50.00} image='img/shop/11.jpg'  id={11}  type="item" />
            <Product title="White Sneakers" price={100.00} image='img/shop/12.jpg' id={12}  type="clothing" />


            <Product title="Grey Watch" price={125.00} image='img/shop/13.jpg' id={13}  size="medium" type="item" />
            <Product title="Hiking Boots" price={90.00} image='img/shop/14.jpg' id={14} type="clothing" />   
            <Product title="Beanie Hat" price={20.00} image='img/shop/15.jpg'  id={15}  type="item" />
            <Product title="Purple T-shirt" price={25.00} image='img/shop/16.jpg' id={16}  type="clothing" />


            <Product title="Colorful Jacket" price={125.00} image='img/shop/17.jpg' id={17}  size="medium" type="clothing" />
            <Product title="Yellow Baseball Cap" price={20.00} image='img/shop/18.jpg' id={18}  type="item" />   
            <Product title="Black Hoodie" price={90.00} image='img/shop/19.jpg'  id={19}  type="clothing" />
            <Product title="Long Orange Cardigan" price={90.00} image='img/shop/20.jpg' id={20}  type="clothing" />

            <Product title="Casual White Shoes" price={125.00} image='/img/featured/1.jpg' id={21}  size="medium" type="clothing" />
            <Product title="Casual Red Shoes" price={125.00} image='/img/featured/2.jpg' id={22}  type="clothing" />   
            <Product title="Blue Bookbag" price={90.00} image='/img/featured/3.jpg'  id={23} type="item" />
            <Product title="Pink Beanie" price={20.00} image='/img/featured/4.jpg' id={24}  type="item" />

        

            <nav aria-label="...">
                <ul class="pagination mt-5">
                    <li class="page-item disabled">
                        <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item" aria-current="page">
                        <a class="page-link" href="#">2</a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
        
    <Footer/>
    </>

    )
  }
import React from 'react'
import Header from "../components/Header/header";
import Cart from "../components/Cart/cart";
import Footer from "../components/Footer/footer";
export default function blog() {
  return (
   <>
        <Header/>
        <Cart/>
        <section id="blog-home">
        <div class="container pt-5 mt-5">
            <h2 class="font-weight-bold pt-5">Blogs</h2>
            <hr/>
        </div>
    </section>

    <section id="blog-container" class="container pt-5">
        <div class="row">
            <div class="post col-lg-6 col-md-6 col-12 pb-5">
                <div class="post-img">
                    <img class="w-100 img-fluid" src="/img/blog/1.jpg" alt=""/>
                </div>
                <h3 class="text-center font-weight-normal pt-3">The best ways to change your summer wardrobe into autumn wardrobe.</h3>
                <p class="text-center">Jan 11, 2021</p>
            </div>
            <div class="post col-lg-6 col-md-6 col-12 pb-5">
                <div class="post-img">
                    <img class="w-100 img-fluid" src="/img/blog/2.jpg" alt=""/>
                </div>
                <h3 class="text-center font-weight-normal pt-3">Men's fashion in leather.</h3>
                <p class="text-center">Jan 11, 2021</p>
            </div>
            <div class="post col-lg-6 col-md-6 col-12 pb-5">
                <div class="post-img">
                    <img class="w-100 img-fluid" src="/img/blog/3.jpg" alt=""/>
                </div>
                <h3 class="text-center font-weight-normal pt-3">DIYer and TV host Trisha Hershberger’s journey through gaming keeps evolving.</h3>
                <p class="text-center">Jan 11, 2021</p>
            </div>
            <div class="post col-lg-6 col-md-6 col-12 pb-5">
                <div class="post-img">
                    <img class="w-100 img-fluid" src="/img/blog/4.jpg" alt=""/>
                </div>
                <h3 class="text-center font-weight-normal pt-3">The best ways to change your summer wardrobe into autumn wardrobe.</h3>
                <p class="text-center">Jan 11, 2021</p>
            </div>
            <div class="col-lg-12 col-md-12 col-12 pb-5">
                <div class="post-img">
                    <img class="w-100 img-fluid" src="/img/blog/banner.webp" alt=""/>
                </div>
            </div>

            <div class="post col-lg-4 col-md-6 col-12 pb-5">
                <div class="post-img">
                    <img class="w-100 img-fluid" src="/img/blog/1.webp" alt=""/>
                </div>
                <h4 class="font-weight-normal pt-3">The best ways to change your summer wardrob.</h4>
            </div>
            <div class="post col-lg-4 col-md-6 col-12 pb-5">
                <div class="post-img">
                    <img class="w-100 img-fluid" src="/img/blog/3.webp" alt=""/>
                </div>
                <h4 class="font-weight-normal pt-3">Lenovo’s smarter devices stoke professional passions</h4>
            </div>
            <div class="post col-lg-4 col-md-6 col-12 pb-5">
                <div class="post-img">
                    <img class="w-100 img-fluid" src="/img/blog/2.webp" alt=""/>
                </div>
                <h4 class="font-weight-normal pt-3">Take a 3D tour through a Microsoft datacenter</h4>
            </div>
        </div>
    </section>
    <Footer/>
   </>
  )
}

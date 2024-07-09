import { useStateContext } from '../AppProvider'

const Product = (props) => {
    const globalState= useStateContext();
	return (
       <>
        <div class="product col-lg-3 col-md-4 col-12 text-center">
                <img class="mb-3 img-fluid" src={props.image} alt=""/>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h5 class="p-name">{props.title}</h5>
                <h4 class="p-price">${props.price.toFixed(2)}</h4>
                <button onClick={() => globalState.addCart(props.title, props.price, props.image)} class="buy-btn">Buy Now</button>
            </div>
        </>
	);
};

export default Product;
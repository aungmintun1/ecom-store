import { useStateContext } from '../AppProvider'
import Link from 'next/link'

const Header = (props) => {
    const globalState= useStateContext();
	return (
       <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 fixed-top z-index-1">
            <div className="container">
               <Link href="/">
                <img src="/img/logo1.png" alt=""/>
               </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span><i id="bar" className="fas fa-bars"></i></span>
              </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
    
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/shop">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/blog">Blog</a>
                        </li>
                        <li className="nav-item">
                            <i onClick={()=> globalState.setCartMenu(true)} className="fal fa-shopping-bag"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
	);
};

export default Header;
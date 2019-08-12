import React from 'react';
import {FaBars, FaCartPlus} from 'react-icons/fa';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import "bootstrap/dist/css/bootstrap.min.css";

const Header = (status) => {
    const { auth, name } = status;
    /* Will work according to user authentication status */
    if(auth){
        return <DisplayAuth userName={ name }/>
    }
    else{
        return <DisplayUnauth/>
    }
}
/* Unauthenticated display for the header : 
    Requirements:
        Title

        Login
        Create Account
        Contact        
        FAQ
        Support
        Contact
        Checkout
*/
const DisplayUnauth = () => {
    return(
        <nav>
            <ul class="navigation">
                <div class="nav-left">
                    <h3>NotBevmo.com</h3>
                </div>
                <div class="nav-right">
                    <li><a href="#" class="icon"><FaCartPlus/></a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Support</a></li> 
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Create Account</a></li>
                    <li><a href="#">Log in</a></li>
                </div>
            </ul>
        </nav>
    )
}

/* Authenticated display for header: 
    Requirements: 
        Title

        {Users Name instead of log in}
        FAQ
        Support
        Contact
        Checkout

        <ul class="navigation">
                    
                    <div class="nav-left">
                        <h3>NotBevmo.com</h3>
                    </div>
                    <div class="nav-right">
                        <li><a href="#" class="icon"><FaCartPlus/></a></li>
                        <li><a href="#">Contact</a></li> 
                        <li><a href="#">Support</a></li> 
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Hello, {user.userName}</a></li>
                    </div>
                </ul>
*/
const DisplayAuth = (user) => {

    
    return(
        <ProductConsumer>
            {value => {
                const { cartItems, handleSidebar, handleCart } = value; // destructure components form context ES6
                return(
                    <NavWrapper>
                        <div class="nav-center"> 
                            <FaBars className="nav-icon" onClick={ handleSidebar}/>
                            <h2>NotBevmo.com</h2>
                            <div class="nav-cart">
                                <FaCartPlus className="nav-icon" onClick={ handleCart }>     
                                </FaCartPlus>
                                <div className="cart-items">{ cartItems }</div>
                            </div>
                        </div>          
                    </NavWrapper>
                );
            }}
        </ProductConsumer>
    )
}

/* ------------- Styled Components ------------ */

const NavWrapper = styled.nav`
    position: -webkit-sticky;
    position: sticky;
    top:0;
    width: 100%;
    padding: 1rem 1.5rem;
    background: var(--mainGrey);
    border-bottom: 3px solid var(--primaryColor);
    .nav-center {
        display:flex;
        align-items:center;
        justify-content: space-between;
        max-width:1170px;
        margin: 0 auto;
    }
    .nav-icon {
        font-size: 1.5rem;
        cursor: pointer; 
    }
    .nav-cart {
        position:relative;
    }
    .cart-items {
        background: var(--primaryColor);
        color: var(--mainWhite);
        font-size: 0.8rem;
        position: absolute;
        top: -8px; /* */
        right: -8px;
        padding:0 5px;
        border-radius: 50%;
    }
`;
export default Header
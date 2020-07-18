import React from 'react';
import {FaBars, FaCartPlus} from 'react-icons/fa';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => { 
    return(
        <ProductConsumer>
            {value => {
                const { cartItems, handleSidebar, handleCart} = value; // destructure components form context ES6
                return(
                    <NavWrapper>
                        <div class="nav-center"> 
                            <FaBars className="nav-icon" onClick={ handleSidebar}/>
                            <h2>NotBevmo.com</h2>
                            <div class="nav-cart">
                                <FaCartPlus className="nav-icon" onClick={ handleCart } />  
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
import React from 'react'
import styled from 'styled-components';
import { ProductConsumer } from '../context'

export default function Sidecart(){
    return(
        <ProductConsumer>
            {value => {
                const { openCart, closeCart, cart} = value;
                return (
                <CartWrapper show={ openCart } onClick={ closeCart }>
                        <p>cart items</p>
                </CartWrapper>
                );
            }}
        </ProductConsumer>
    );
}

/* ---------------- STYLED COMPONENTS --------------- */
const CartWrapper = styled.nav`
    position: fixed;
    top: 81px;
    right: 0;
    width: 100%;
    height: 100%;
    background: var(--mainGray);
    z-index: 1;
    border-left: 2px solid var(--primaryColor);
    transform: ${props => (props.show ? "translateX(0)": 
    "translateX(100%)")};
    transition: var(--mainTransition);
    @media (min-width: 576px){
        width: 20rem;
    }
`;
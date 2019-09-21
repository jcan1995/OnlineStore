import React from "react";
import Styled from 'styled-components';
import { ProductConsumer } from '../context';

const HomePage = () => {
    return (
        <ProductConsumer>
            {value => {
                const { isAuth, userName } = value; // ES6 Destructuring Assignment
                
                /* Conditional Render for un/authenticated users */
                if(isAuth){
                    return <DisplayAuth userName ={ userName }/>
                }
                else{
                    return <DisplayUnauth/>
                }
            }}
        </ProductConsumer>
    );
}

/* This will display the home page for unauthenticated users*/
const DisplayUnauth = () => {
    return(
        <div class="body">
                <h1> Welcome! </h1> 
                <p>Sign up today and recieve a 20% discount on your offer!</p>
        </div>
    );
}

/* This will display the home page for authenticated users */
const DisplayAuth = (data) => {
     const { userName } = data; // ES6 Desctructuring assignments
    return(
        <div class="body">
            <h1>Hello, { userName }</h1> 
            <p>Send your friends an invite to join and we will give you 15% Off when they sign up!</p>
            <Button class="main-button">Click me to get beer</Button>
        </div>
    )
}

/*--------- Styled-components -------------*/
const Color = `#f15025`;
const Button = Styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid var(--primaryColor);
    color: var(--primaryColor);
    margin: 0 1rem;
    font-size: ${ props => (props.large ? "3rem" : "1rem")};
`;

export default HomePage
import React from "react";
import Styled from 'styled-components';
import { ProductConsumer } from '../context';

const HomePage = (prop) => {
    const { name, auth} = prop; // ES6 Destructuring Assignment

    /* Conditional Render for un/authenticated users */
    if(auth){
        return <DisplayAuth name={ name }/>
    }
    else{
        return <DisplayUnauth/>
    }
}

/* This will display the home page for unauthenticated users:
    Requirements: 
        - User should be prompted to sign up to recieve discount

    <h1>Welcome, Sign up to recieve 20% Off todays purchase!</h1>
*/
const DisplayUnauth = () => {
    return(
        <div class="body">
            <ProductConsumer>{ value => <h1>{ value }</h1> }</ProductConsumer>
        </div>
    )
}

/* This will display the home page for unauthenticated users:
    Requirements: 
        - User should be prompted to invite friends to recieve discount
*/
const DisplayAuth = (data) => {
    const { name } = data;
     // ES6 Desctructuring assignments
    return(
        <div class="body">
            <ProductConsumer>{ value => <h1>Hello, { name }</h1> }</ProductConsumer>
            <p>Send your friends an invite to join and we will give you 15% Off when they sign up!</p>
            <Button>Click me to get beer</Button>
        </div>
    )
}

/*--------- Styled-components -------------*/
const Color = `#f15025`;
const Button = Styled.button`
    color: white;
    background: ${ Color };
    font-size: ${ props => (props.large ? "3rem" : "1rem")};
`;

export default HomePage
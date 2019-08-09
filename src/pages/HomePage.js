import React from "react";

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
*/
const DisplayUnauth = () => {
    return(
        <div class="body">
            <h1>Welcome, Sign up to recieve 20% Off todays purchase!</h1>
        </div>
    )
}

/* This will display the home page for unauthenticated users:
    Requirements: 
        - User should be prompted to invite friends to recieve discount
*/
const DisplayAuth = (data) => {
    const { name } = data; // ES6 Desctructuring assignments
    return(
        <div class="body">
            <h1>Hello, { name }</h1>
            <p>Send your friends an invite to join and we will give you 15% Off when they sign up!</p>
        </div>
    )
}

export default HomePage
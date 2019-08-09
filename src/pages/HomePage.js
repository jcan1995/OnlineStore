import React from "react";

const HomePage = (prop) => {

    console.log(prop); // to see what we are recieving form the prop

    /* Conditional Render for un/authenticated users */
    if(prop.auth){
        return <DisplayAuth name={prop.name}/>
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
    console.log(data.name); // to check what we are receiving from data.name
    return(
        <div class="body">
            <h1>Hello, {data.name}</h1>
            <p>Send your friends an invite to join and we will give you 15% Off when they sign up!</p>
        </div>
    )
}

export default HomePage
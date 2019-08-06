fuction Greeting(props){
    // we want to create a check for user being loggged in
    const isLoggedIn = props.isLoggedIn; // change this when josh sets prop

    // conditional for greeting
    if(isLoggedIn){
        return <h3>Welcome {props.name}<h3/>
    }
}
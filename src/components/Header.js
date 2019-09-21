import React from 'react';
import {FaCartArrowDown} from 'react-icons/fa';

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
                    <li><a href="#" class="icon"><FaCartArrowDown/></a></li>
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
*/
const DisplayAuth = (user) => {
    return(
        <nav>
            <ul class="navigation">
                <div class="nav-left">
                    <h3>NotBevmo.com</h3>
                </div>
                <div class="nav-right">
                    <li><a href="#" class="icon"><FaCartArrowDown/></a></li>
                    <li><a href="#">Contact</a></li> 
                    <li><a href="#">Support</a></li> 
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Hello, {user.userName}</a></li>
                </div>
            </ul>
        </nav>

    )
}

export default Header
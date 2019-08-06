import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome } from 'react-icons/fa';
import Header from './Header';

/* imports from our pages */
import About from '../pages/AboutPage';
import Cart from '../pages/CartPage';
import Contact from '../pages/ContactPage';
import Default from '../pages/Default';
import Home from '../pages/HomePage';
import Products from '../pages/Products';
import SingleProductPage from '../pages/SingleProductPage';



class App extends Component {

  render() {

    let isAuth = true; /* <---- pass in the user authentication token here */
    let userName = "John Doe"; /* <--- we need to pass in the name of the user */

    return (
      
      <div class="app">
        <Header auth={isAuth} name={userName}/>

        <Home auth={isAuth} name={userName}/>
      </div> 
      
    );
  }

}

export default App;

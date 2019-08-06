import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome } from 'react-icons/fa';
import Header from './Header';

/* imports from our pages */
import About from '../pages/AboutPage';


class App extends Component {

  render() {

    let isAuth = true; /* <---- pass in the user authentication token here */
    let userName = "John Doe"; /* <--- we need to pass in the name of the user */

    return (
      
      <div>
        <Header auth={isAuth} name={userName}/>
      </div> 
      
    );
  }

}

export default App;

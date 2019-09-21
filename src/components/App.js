import React, { Component } from 'react';
import './App.css';
import Header from './Header';

/* imports from our pages */
import Home from '../pages/HomePage';

class App extends Component {

  state = {auth: false}

  componentDidMount(){
    let res = true;
    this.setState({auth: res});
  }

  render() {

    let isAuth = this.state.auth; /* <---- pass in the user authentication token here */
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

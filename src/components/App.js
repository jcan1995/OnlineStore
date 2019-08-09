import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './Header';

/* imports from our pages */
import Home from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';

class App extends Component {

  state = {auth: true}

  componentDidMount() {
    let res = true;
    this.setState({auth: res});
  }

  render() {

    let isAuth = this.state.auth; /* <---- pass in the user authentication token here */
    let userName = "John Doe"; /* <--- we need to pass in the name of the user */

    return (
      <div class="app">
        <BrowserRouter>
          <div>
              <Header auth={ isAuth } name={ userName }/>
              <Route exact path="/"
                    render={(props) => <Home {...props} auth={isAuth} name={userName}/>}
              />
              <Route path="/contact" component={ ContactPage }/> 
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

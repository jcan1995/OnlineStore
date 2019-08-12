import React, { Component } from 'react';
import './App.css';
import { Route,Switch, BrowserRouter } from 'react-router-dom';
import Header from './Header';

/* imports from our pages */
import Home from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import Notfound from '../pages/NotFound';
import Sidecart from './Sidecart';
import Footer from './Footer';
import Sidebar from './Sidebar';


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
        <Header auth={ isAuth } name={ userName }/>
        <Sidebar/>
        <Sidecart/>
        <BrowserRouter>
            <Switch>
              <Route exact path="/"
                    render={(props) => <Home {...props} auth={isAuth} name={userName}/>}
              />
              <Route path="/contact" component={ ContactPage }/> 
              <Route component={ Notfound } />
            </Switch>
        </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}

export default App;

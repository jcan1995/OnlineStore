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

  render() {
    return (
      <div class="app">
        <Header/>
        <Sidebar/>
        <Sidecart/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/contact" component={ ContactPage }/> 
          <Route component={ Notfound } />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;

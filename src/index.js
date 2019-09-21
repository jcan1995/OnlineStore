/*import ... from ... => es6 import syntax*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ProductProvider } from './context';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>,
  document.getElementById('app')
);

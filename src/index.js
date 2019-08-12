/*import ... from ... => es6 import syntax*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ProductProvider } from './context'
ReactDOM.render(
  <ProductProvider>
    <App />
  </ProductProvider>,
  document.getElementById('app')
);

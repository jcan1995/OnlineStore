import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHome } from 'react-icons/fa';
import Header from './Header';
import styled from "styled-components";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <FaHome/>
        <Button large>click me!</Button>
      </div>
    );
  }

}


const color = '#f15025';

const Button = styled.button`
  background: ${color};
  border-radius: 3px;
  border: none;
  color: white;
  font-size: ${props => (props.large?"3rem":"1rem")};
`
export default App;

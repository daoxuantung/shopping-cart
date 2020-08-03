import React from 'react';
import Logo from '../../images/logo.png';

import Navbar from '../Navbar/Navbar';
import Home from '../../pages/Home';

import { Container } from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const Header = (props) => {
  return (
    <div className="Header" >
      <Router>
        <Container className="p-0">
          <Navbar logo={Logo} />
          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        </Container>
        <Switch>
          <Route path="/shopping-cart/cart">
            <Cart />
          </Route>
          <Route path="/shopping-cart/about">
            <About />
          </Route>
          <Route path="/shopping-cart/products">
            <Products />
          </Route>
          <Route path="/shopping-cart">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Header;

function Cart() {
  return (
    <div ></div>
  )
}

function About() {
  return (
    <div ></div>
  )
}

function Products() {
  return (
    <div ></div>
  )
}
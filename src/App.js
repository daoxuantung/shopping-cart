import React from 'react';

import Logo from './images/logo.png';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';

import { Container } from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="App" >
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
          <Route exact path="/shopping-cart">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

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




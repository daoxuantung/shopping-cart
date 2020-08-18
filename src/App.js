import React from 'react';

import Logo from './images/logo.png';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import { ProductProvider } from './contexts/Product';
import { CartProvider } from './contexts/Cart';

import { Container } from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cart from './pages/Cart';
import Account from './pages/Account';

export default function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <div className="App" >
          <Router>
            <Container className="p-0">
              <Navbar logo={Logo} />
            </Container>
            <Switch>
              <Route exact path="/shopping-cart">
                <Home />
              </Route>
              <Route path="/shopping-cart/products">
                <Products />
              </Route>
              <Route path="/shopping-cart/account">
                <Account />
              </Route>
              <Route path="/shopping-cart/cart">
                <Cart />
              </Route>
            </Switch>
          </Router>
        </div>
      </CartProvider>
    </ProductProvider >
  );
}



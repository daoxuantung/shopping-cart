import React from 'react';

import Logo from './images/logo.png';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import { ProductProvider } from './contexts/Product';
import { CartProvider } from './contexts/Cart';
import { UserProvider } from './contexts/User';

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
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <div className="App" >
            <Router>
              <Switch>
                <Route exact path="/">
                  <Container className="p-0">
                    <Navbar logo={Logo} />
                  </Container>
                  <Home />
                </Route>
                <Route path="/products">
                  <Container className="p-0">
                    <Navbar logo={Logo} />
                  </Container>
                  <Products />
                </Route>
                <Route path="/login">
                  <Account />
                </Route>
                <Route path="/cart">
                  <Container className="p-0">
                    <Navbar logo={Logo} />
                  </Container>
                  <Cart />
                </Route>
              </Switch>
            </Router>
          </div>
        </CartProvider>
      </ProductProvider >
    </UserProvider>
  );
}



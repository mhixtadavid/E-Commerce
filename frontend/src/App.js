import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SignInScreen from './screens/SignInScreen';


function App() {

  const cart = useSelector(state => state.cart);
  const {cartItems} = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  }

  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
        <div>
            <Link className="brand" to="/">KaydeeShop</Link>
        </div>
        <div>
            <Link to="/cart">Cart {cartItems.length > 0 && (
              <span className = "badge">{cartItems.length}</span> )}
              </Link>
              {
                userInfo ? (
                  <div className = "dropdown">
                    <Link to ="#">{userInfo.name} <i className="fa fa-caret-down"></i> </Link>
                    <ul className= " dropdown-content">
                      <Link to ="#signout" onClick={signoutHandler}>Sign Out</Link>
                    </ul>
                  </div>
                ) :
                  <Link to="/signin">Sign In</Link>               
              }
        </div>
    </header>

    <main>
      <Route path = "/cart/:id?" component = {CartScreen}></Route>
      <Route path = "/product/:id" component = {ProductScreen}></Route>
      <Route path = "/" component = {HomeScreen} exact></Route>
      <Route path = "/signin" component = {SignInScreen}></Route> 
    </main>

    <footer className="row center">
        All Rights Reserved
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../components/App.css'

import Navbar from '../components/Navbar'
import ProductList from '../components/Product-List'
import Details from '../components/Details'
import Cart from '../components/Cart'
import Default from '../components/Default'
import Modal from '../components/Modal'


const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ProductList}></Route>
        <Route path='/details' component={Details}></Route>
        <Route path='/cart' component={Cart}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Modal />

    </>
  );
}

export default App;

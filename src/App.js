import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar.js';
import ProductList from './components/ProductList/ProductList.js';
import Details from './components/Details/Details.js';
import Cart from './components/Cart/Cart.js';
import Default from './components/Default/Default.js';
import Modal from './components/Modal/Modal.js';
import {Switch,Route} from 'react-router-dom';
function App() {
  return (
  
<React.Fragment>
<NavBar/>
<Switch>
   <Route path='/' exact component={ProductList}/>
  <Route path='/details' component={Details}/>
  <Route path='/cart' component={Cart}/>
  <Route  component={Default}/>
  
  
</Switch>
<Modal/>



  
</React.Fragment>
  
  );
}

export default App;

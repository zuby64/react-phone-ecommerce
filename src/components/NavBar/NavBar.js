import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/icons/product.png';
import{ ButtonContainer} from '../common/Button.js';
import {NavWrapper} from '../common/NavWrapper.js';
export default class NavBar extends Component {
    render() {
        return (
         
         <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
          <Link to='/'>
          
          <img src={logo} alt="store" className="navbar-brand"/>
          </Link>
          <ul className="navbar-nav align-items-center">

         <li className="nav-item ml-5">
             <Link to='/' className='nav-link'>Products</Link>
         </li>

          </ul>
          <Link to="/cart" className="ml-auto"><ButtonContainer>
              <span className="mr-2"><i className='fa fa-cart-plus'></i></span>
              
              Cart Button </ButtonContainer></Link>


         </NavWrapper>
        )
    }
}



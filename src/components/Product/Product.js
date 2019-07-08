import React, { Component } from 'react';
import {ProductWrapper} from '../common/productwrapper/ProductWrapper.js';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../contextapi/Context.js';
import PropTypes from 'prop-types';

export default class Product extends Component {
    
    render() {
        const {id,title,img,price,inCart}=this.props.product;
        
        return (
            <ProductWrapper className="col-9 max-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                 {value=>(   <div className="img-container p-5" onClick={()=>{
                     value.handleDetail(id);
                
                
                }}>
                        <Link to="/details">
                    <img src={img} alt="product" className="card-img-top"/>
                    </Link>
                    <button className="cart-btn" disabled={inCart ? true:false} onClick={()=>{
                        value.addToCart(id);
                        value.openModel(id);
                        
                        }}>
                    {  inCart?(<p className="text-capitalize mb-0" disabled>in Cart </p>):(<i className="fa fa-cart-plus"></i>)}
                        </button>
                        </div>) }
             
                </ProductConsumer>
                {/**  card footer*/}
                <div className="class-footer d-flex  justify-content-between">

                <p className="align-self-center mb-0">{title}</p>
                <h5 className="text-blue font-italic  mb-0">
               <span className="mr-1">$</span>
                      {price}

                </h5>
                </div>
                </div>
   
            </ProductWrapper>
        )
    }
}
//it is possible that if someone gets access to our data and changes it struture or changes some thing in it
// we can detect such changes through proptypes which comes built in with react
          
Product.propTypes = {
  product:PropTypes.shape({
    id: PropTypes.number,
    img:PropTypes.string,
    title:PropTypes.string,
    price:PropTypes.number,
    inCart:PropTypes.bool,
  }).isRequired

  };


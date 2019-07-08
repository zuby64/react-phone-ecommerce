import React, { Component } from 'react';
import {ProductConsumer} from '../contextapi/Context.js';
import {Link} from 'react-router-dom';
import {ButtonContainer} from '../common/Button.js';
import Title from '../title/Title.js';

export default class Details extends Component {
    render() {
        return (
           <ProductConsumer>
               {value=>{
             const {id,company,img,info,price,title,inCart}= value.detailProduct;
             return(
                 <div className="container">
                  {/**title */}
                   
                   <div className="col-10 mx-auto text-center text-slanted  text-blue my-5">
                       <h1>{title}</h1>
                   </div>
                   
                   <div className="row">
                       
                   </div>
                   
                   {/** end of title */}
                   {/**product info */}
                   
                   <div className="row">
                       {/*product image*/}
                       <div className="col-10  col-md-6 mx-auto my-3 ">
                           <img src={img} className="img-fluid" alt='product'/>
                       </div>
                      {/**product text */}
                       <div className="col-10  col-md-6 mx-auto my-3 text-capitalize">
                           <h2>model:{title}</h2>
                           <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                               made by:
                                <span className="text-uppercase">{company}</span>
                           </h4>
                           <h4 className="text-blue">

                               <strong>price: <span>$</span>
                               { price }
                               </strong>
                           </h4>
                           <p className="text-capitalize font-weight-bold mb-0 mt-3">
                               some info about the product:
                           </p>
                           <p className="text-muted lead">
                               {info}
                           </p>
                           {/**buttons */}
                           <div>
                           <Link to="/">

                               <ButtonContainer>
                                   Back to Products
                               </ButtonContainer>
                           </Link>
                           <ButtonContainer disabled={inCart?true:false} onClick={()=>{
                               value.addToCart(id);
                           }}
                           cart
                           >
                          {  inCart? "in Cart":"add to cart"}

                           </ButtonContainer>

                           </div>
                           </div>
                           {/**product text end */}
                   </div>
                   


                 </div>
             )
               }}
           </ProductConsumer>
        )
    }
}

import React, { Component } from 'react';
import Title from '../title/Title.js';
import {ProductConsumer} from '../contextapi/Context.js';
import Product from '../Product/Product.js';


 
export default class ProductList extends Component {

  
    render() {
        return (
         <React.Fragment>

             <div className="py-5">
               
               <div className="container">
                   {/*product row*/}
                   <Title name="our" title="product"/>
                
                   
                   <div className="row">
                       <ProductConsumer>
                       {   (value)=>{
                           

                          return value.products.map(product=>{

                            return <Product key={product.id} product={product}/>
                          })
                       }}

                       </ProductConsumer>
                   </div>
                   
               </div>
               
                
             </div>
         </React.Fragment>
        )
    }
}

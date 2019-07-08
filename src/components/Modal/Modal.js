import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../contextapi/Context.js';
import {ButtonContainer} from '../common/Button.js';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
         <ProductConsumer>
           {
               value=>{
              const {modelOpen,closeModel,openModel}=value;
              const {img,title,price}=value.modelProduct;
              if(!modelOpen){
                     return null;
              }
                else{
                

                
                  return(  <ModelContainer>
                       
                      
                      <div className="container">
                          
                          <div className="row">
                              <div id="model" className="col-8 mx-auto col-md-6 col-lg-4 text-center p-5">
                                  
                                  <h5>item added to the cart</h5>
                                  <img className='img-fluid' alt='Product' src={img}/>
                                  <h5>{title}</h5>
                                  <h5 className='text-muted'>Price: ${price}</h5>
                                  <Link to='/'>
                                  <ButtonContainer onClick={()=>{closeModel()}}>Store</ButtonContainer>
                                    
                                  </Link>
                                  <br></br>

                                  <Link to='/cart'>
                                  <ButtonContainer cart onClick={()=>{closeModel()}}>Go to cart</ButtonContainer>
                                    
                                  </Link>

                              </div>
                          </div>
                          
                          
                      </div>
                      
                    </ModelContainer>
                  );
                }
               }
           }

         </ProductConsumer>
        )
    }
}

  const ModelContainer = styled.div`
   position:fixed;
   top:0;
   left:0;
   right:0;
   bottom:0;
   background:rgba(0,0,0,0.3);
   display: flex;
   align-items: center;
   justify-content: center;
   #model{

    background:var(--mainWhite);
   }



`

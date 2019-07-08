import React, { Component } from 'react';
import {storeData,detailProduct} from '../../data/data.js';

const productContext = React.createContext();
//provider...we give data to the provider which stores it with itself
//consumer...the consumer then uses that data which is provided to it
//main purpose of this class is to return the provider
 class ProductDataProvider extends Component {
   state={
     products:[],
     detailProduct:detailProduct,
     cart:[],
     modelOpen:false,
     modelProduct:detailProduct,
     cartSubTotal:0,
     cartTax:0,
     cartTotal:0,


   }
   componentDidMount(){
     this.setProducts();
    
     
   }
   setProducts=()=>{
     let temproducts=[];
     storeData.forEach((item)=>{
       const singleItem={...item};
       temproducts=[...temproducts,singleItem];//problem is in this line
    
     });
    
    this.setState({products:temproducts})
   }

   getItem=(id)=>{
          const product=this.state.products.find(item=>item.id===id);
          return product;
   }

   handleDetail=(id)=>{
   const product=this.getItem(id);
   this.setState(()=>{
   return {detailProduct:product};
   });
   }
   addToCart=(id)=>{
   let temProducts = [...this.state.products];
   const index= temProducts.indexOf(this.getItem(id));
   const product=temProducts[index];
   product.inCart=true;
   product.count=1;
   const price=product.price;
   product.total=price;
   this.setState(()=>{
     return { products:temProducts,cart:[...this.state.cart,product]};
   },()=>{this.addTotal()});
   }

   openModel= id =>{
        const product= this.getItem(id);
         this.setState(()=>{
            return { modelProduct:product,modelOpen:true}
         });

   }

   closeModel=id=>{
     this.setState(()=>{
            return { modelOpen:false}
     })
   }
   Increment=(id)=>{

     let temCart=[...this.state.cart];
     const selected = temCart.find((item)=>item.id===id);
     const index= temCart.indexOf(selected);
     const product=temCart[index];
    product.count=product.count+1;
    product.total=product.count*product.price;
    
    this.setState(()=>{return{ cart:[...temCart]}},()=>{this.addTotal()})
   }

   Decrement=(id)=>{

    let temCart=[...this.state.cart];
     const selected = temCart.find((item)=>item.id===id);
     const index= temCart.indexOf(selected);
     const product=temCart[index];
     product.count=product.count-1;
     if(product.count===0){
       this.RemoveItem(id);

     }else
     {
      product.total=product.count*product.price;
      this.setState(()=>{return{cart:[...temCart]}},()=>{this.addTotal()});
     
     }

   }

   RemoveItem=(id)=>{

    let temProducts=[...this.state.products];
    let temCart=[...this.state.cart];
    temCart=temCart.filter(item=>item.id!==id);
    const index=temProducts.indexOf(this.getItem(id));
    let removeProduct=temProducts[index];
    removeProduct.inCart=false;
    removeProduct.count=0;
    removeProduct.total=0;
    this.setState(()=>{
      return{ cart:[...temCart],products:[...temProducts]}
    },()=>{this.addTotal();})
   }
   ClearCart=()=>{
    this.setState({cart:[]});
    this.setProducts();
    this.addTotal();
   }
   addTotal=()=>{
     let subtotal=0;
      this.state.cart.map(item=>(subtotal += item.total));
      let temTex=subtotal*0.1;
      const tax = parseFloat(temTex.toFixed(2));
      const total =subtotal+tax;
      this.setState({cartSubTotal:subtotal,cartTax:tax,cartTotal:total,});
   }
    render() {
        return (
          <productContext.Provider value={{...this.state,handleDetail:this.handleDetail,
          
          addToCart:this.addToCart,
          openModel:this.openModel,
          closeModel:this.closeModel,
          Increment:this.Increment,
          Decrement:this.Decrement,
          RemoveItem:this.RemoveItem,
          ClearCart:this.ClearCart,

          
          }}>
                {this.props.children}
                
          </productContext.Provider>
        )
    }
}

const ProductConsumer = productContext.Consumer;
export { ProductDataProvider,ProductConsumer};

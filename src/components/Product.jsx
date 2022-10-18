import React, { useEffect, useState } from "react";
import App from "../App";
import ProductList from "./ProductList";
import "../style/Product.css";
import Cart from "./Cart";



const Product = ({setOpenModal, productObj}) => {

  const [cartOpen, setCartOpen] = useState(false);


  return (
    <>
      <div className="modalBackground">
            <div className="modalContainer">
              <div className="titleCloseBtn">
                
                {/*CLOSE BUTTON*/}
                <button
                  onClick={() => {
                    setOpenModal(false);
                  }}
                >
                  X
                </button>
              </div>
              <div className="title">
              </div>
              <div className="body">
                <div className="product-images">
                  {productObj.images.map(image => (
                    <img
                    key={productObj.id}
                    src={image.src}
                    alt={image.title} 
                    style={{width: "100px"}} 
                    />
                  ))}
                </div>
                <div className="product-details">
                  <h2>{productObj.title}</h2>
                    <p>{productObj.price}</p>
                    <button
                      onClick={()=> {
                        //setOpenModal(false)
                        setCartOpen(true)

                    }}>
                    Add to cart
                    </button>
                    <p>{productObj.description}</p>
                </div>  
              </div>
              <div className="footer">
                <button
                  onClick={() => {
                    setOpenModal(false);
                  }}
                  id="cancelBtn"
                >
                  Cancel
                </button>
                <button>Continue</button>
        
              </div>
            </div>
            {cartOpen &&
            <Cart setCartOpen={setCartOpen}>
            </Cart> 
        }    
          </div>
    </>
  );
}

export default Product;
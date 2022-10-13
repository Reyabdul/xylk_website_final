import React, { useEffect, useState } from "react";
import ProductList from "./ProductList";
import "../style/Product.css";



const Product = ({setOpenModal, productObj}) => {

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
                    src={image.src}
                    alt={image.title} 
                    style={{width: "100px"}} 
                    />
                  ))}
                </div>
                <div className="product-details">
                  <h2>{productObj.title}</h2>
                    <button
                    
                    >
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
          </div>
    </>
  );
}

export default Product;
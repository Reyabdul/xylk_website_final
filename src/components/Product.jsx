import React, { useEffect, useState } from "react";
import Client from "shopify-buy";
import ProductList from "./ProductList";
import "../style/Modal.css";

const SHOPIFY_KEY = process.env.REACT_APP_SHOPIFY_KEY;

const client = Client.buildClient({
    storefrontAccessToken: SHOPIFY_KEY,
    domain: "xylk.myshopify.com"
});


const Product = ({setOpenModal, productObj}) => {
    //const [productData, setProductData] = useState([]);

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
                  {productObj.title}
                  {productObj.description}
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
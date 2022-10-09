import React, { useEffect, useState } from "react";import Client from "shopify-buy";
import "../style/Modal.css";

const SHOPIFY_KEY = process.env.REACT_APP_SHOPIFY_KEY;

const client = Client.buildClient({
    storefrontAccessToken: SHOPIFY_KEY,
    domain: "xylk.myshopify.com"
});

const Modal = ({setOpenModal}) => {

  const [rawData, setRawData] = useState([]);


  const fetchAllProducts = () => {
      client.product.fetchAll().then((res) => {
          console.log(res);
          setRawData(res);
      }).catch((error) => {
          console.log(error);
      })
  };

  useEffect(() => {
      fetchAllProducts();
  }, []);


  return (
    <>
      {rawData.map((product, i) => { //map over the intial raw data object
         return <div className="modalBackground">
            <div className="modalContainer">
              <div className="titleCloseBtn">
                
                {/*CLSOSE BUTTON*/}
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
                <ul key={product.id}>
                  <li>{product.title}</li>
                  <li>{product.id}</li>
                  <li>{product.description}</li>
                </ul>

              
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
        })};
    </>
  );
}

export default Modal;
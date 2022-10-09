\import React, { useEffect, useState } from "react";
import Client from "shopify-buy";
import "../style/Modal.css";

const SHOPIFY_KEY = process.env.REACT_APP_SHOPIFY_KEY;

const client = Client.buildClient({
    storefrontAccessToken: SHOPIFY_KEY,
    domain: "xylk.myshopify.com"
});

const Modal = ({setOpenModal}) => {

  //shopify product data
  const [rawData, setRawData] = useState([]);

  //Shopify product data that will display in the modal
  const [modalData, setModalData] = useState(null);


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
                {product.title}
                {product.description}
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
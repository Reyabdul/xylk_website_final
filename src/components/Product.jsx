import React, { useEffect, useState } from "react";
import Client from "shopify-buy";
import "../style/Product.css";
import Cart from "./Cart";

//Shopify Data
const SHOPIFY_KEY = process.env.REACT_APP_SHOPIFY_KEY;

const client = Client.buildClient({
  storefrontAccessToken: SHOPIFY_KEY,
  domain: "xylk.myshopify.com"
});


const Product = ({ setOpenModal, productObj, checkoutId }) => {

  //open 'cart' modal
  const [cartOpen, setCartOpen] = useState(false);

  //setting input quantity for cart
  const [itemQty, setItemQty] = useState('');

  //cart line items
  const lineItemsToAdd = [
    {
      variantId: productObj.variants,
      quantity: itemQty,
      customAttributes: [{ key: "MyKey", value: "MyValue" }],
      cost: productObj.price,
    }
  ];

  console.log(lineItemsToAdd)

  //handles the input for 'qty' that goes into 'lineItemsToAdd. 
  const handleChange = e => {
    setItemQty(e.target.value);
  }

  //adding items to 'cart'
  const addToCart = () => {
    client.checkout.addLineItems(checkoutId, lineItemsToAdd).then((checkout) => {
      
      
      console.log(checkout.lineItems); // Array with one additional line item
    });
  }

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
          
          {/*BODY*/}
          <div className="body">

            {/*image container*/}
            <div className="product-images">
              {productObj.images.map(image => (
                <img
                  key={productObj.id}
                  src={image.src}
                  alt={image.title}
                  style={{ width: "100px" }}
                />
              ))}
            </div>

            {/*product description container*/}
            <div className="product-details">
              <h2>{productObj.title}</h2>
                <p>{productObj.price}</p>
                <p>{productObj.variants}</p>
              
              {/*Item qty input*/} 
              <div className="itemQty">
                <input type="number" id="itemQty" name="itemQty" min="0" max="20" onChange={handleChange} value={itemQty} />
                {/*Add to cart button*/} 
                <button
                  onClick={() => {
                    //setOpenModal(false)
                    setCartOpen(true)
                    addToCart();
                  }}>
                  Add to cart
                </button>
              </div>
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

          </div>
        </div>

        {/*Opens the cart modal with information*/} 
        {cartOpen &&
          <Cart setCartOpen={setCartOpen}>
          </Cart>
        }
      </div>
    </>
  );
}

export default Product;
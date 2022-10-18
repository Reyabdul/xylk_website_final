import React, { useEffect, useState } from "react";
import Client from "shopify-buy";
import Product from "./Product";

const SHOPIFY_KEY = process.env.REACT_APP_SHOPIFY_KEY;

const client = Client.buildClient({
    storefrontAccessToken: SHOPIFY_KEY,
    domain: "xylk.myshopify.com"
});

//Modal 'open' state
const [modalOpen, setModalOpen] = useState(false);

const Cart = () => {

    const checkoutCart = () => {

        client.checkout.create().then((checkout) => {
            // Do something with the checkout
            console.log(checkout);
          });
    };

    return (

        <>

            <div className="cart-container">
                
            </div>

        </>

    )
}


export default Cart;
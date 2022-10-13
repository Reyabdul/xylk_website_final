import React, { useEffect, useState } from "react";
import Client from "shopify-buy";
import Product from "./Product";

const SHOPIFY_KEY = process.env.REACT_APP_SHOPIFY_KEY;

const client = Client.buildClient({
    storefrontAccessToken: SHOPIFY_KEY,
    domain: "xylk.myshopify.com"
});


const Checkout = () => {

    const cart = () => {
        client.checkout.create().then((checkout) => {
            // Do something with the checkout
            console.log(checkout);
          });
    }

    return (

        <>
            <div className="shopping-container">

            </div>
        </>

    )
}


export default Checkout;
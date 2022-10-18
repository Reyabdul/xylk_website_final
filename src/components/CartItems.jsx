import React, { useEffect, useState } from "react";
import Client from "shopify-buy";

const SHOPIFY_KEY = process.env.REACT_APP_SHOPIFY_KEY;

const client = Client.buildClient({
    storefrontAccessToken: SHOPIFY_KEY,
    domain: "xylk.myshopify.com"
});

const CartItems = () => {




    return (

        <>

            <div className="cart-container">
                
            </div>

        </>

    )
}


export default CartItems;
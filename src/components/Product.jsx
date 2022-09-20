import React, { useEffect, useState } from "react";
import Client from "shopify-buy";

const SHOPIFY_KEY = process.env.REACT_APP_SHOPIFY_KEY;

const client = Client.buildClient({
    storefrontAccessToken: SHOPIFY_KEY,
    domain: "xylk.myshopify.com"
});


const Product = () => {
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
        <div>
            
        </div>
    )
};

export default Product;
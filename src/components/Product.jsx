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

    //take out modal and mak product.jsx handle the product modal
    //In product.jsx make each image have its own unique product details

    return (
        <>
          <ul>
            <div className="container">
            {rawData.map((product, i) => (
                <div className='item' key={product.id}>
                    <li>
                        <img 
                            src={product.images[0].src} 
                            alt={product.title} 
                            style={{width: "100px"}}
                        />
                    </li>
                </div>
            ))}
            </div>
          </ul>
        </>
    )
};

export default Product;
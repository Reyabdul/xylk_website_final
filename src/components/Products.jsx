import React, { useEffect, useState } from "react";
import Client from "shopify-buy";

const SHOPIFY_KEY = process.env.REACT_APP_SHOPIFY_KEY;

const client = Client.buildClient({
    storefrontAccessToken: SHOPIFY_KEY,
    domain: "xylk.myshopify.com"
});

const Products = () => {
    const [rawData, setRawData] = useState([]);

    const fetchAllProducts = () => {
        client.product.fetchAll().then((res) => {
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
            {rawData.map((product, i) => { //map over the intial raw data object
                // console.log(product);
                return <ul key = {i}>
                    <li>{product.title}</li>
                    <li>{product.id}</li>
                    {product.images.map((image) => {
                        return <img src = {image.src} style={{width: "100px"}}/>
                    })}
                </ul>
            })}
        </div>
    )
}

export default Products;

    //this is code we will be needing in the future for project 2: it returns the collections that contain all project 2 products
    // const fetchCollections = () => {
    //     client.collection.fetchAllWithProducts().then((res) => {
    //         console.log(res);
    //     })
    // }
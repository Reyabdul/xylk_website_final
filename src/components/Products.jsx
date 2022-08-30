import React, { useEffect, useState } from "react";
import Client from "shopify-buy";

const storefrontAccessToken = process.env.storefrontAccessToken;
const client = Client.buildClient({
    storefrontAccessToken: "storefrontAccessToken",
    domain: "xylk.myshopify.com"
});


const Products = () => {
    //testing 'State Hooks'
    //const [data, setData] = useState("");

    const fetchAllProducts = () => {
        client.product.fetchAll().then((res) => {
            console.log(res);
            //setData(res.data);`
        });
    };

    //this is code we will be needing in the future for project 2: it returns the collections that contain all project 2 products
    // const fetchCollections = () => {
    //     client.collection.fetchAllWithProducts().then((res) => {
    //         console.log(res);
    //     })
    // }

    useEffect(() => {
        fetchAllProducts();
    })

    return (
        /*
        <div id = "products-list">
            <ul>
                {client.product.map(m => (
                    <li>
                        <img src={m.url} alt={m.name} width="100" />
                    </li>
                ))}
            </ul>
        </div>
        */
        <div id = "products-list">
        {Object.values(fetchAllProducts).map((value, index) => {
            return (
              <div key={index}>
                <ul>
                    <li>
                        {console.log(value)}
                        <img src={fetchAllProducts.images} />
                    </li>
                </ul>
                <hr />
              </div>
            );
        })}
    </div>
    );
}

export default Products;
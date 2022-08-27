import React, { useEffect } from "react";
import Client from "shopify-buy";

const client = Client.buildClient({
    storefrontAccessToken: "745e3927ecd9dc159a10c086fbd07540",
    domain: "xylk.myshopify.com"
});


const Products = () => {

    const fetchAllproducts = () => {
        client.product.fetchAll().then((res) => {
            console.log(res);
        });
    };

    useEffect(() => {
        fetchAllproducts();
    })

    return (
        <div id = "products-list">
            <ul></ul>
        </div>
    )
}

export default Products;
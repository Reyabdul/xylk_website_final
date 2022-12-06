import React, { useEffect, useState, useRef } from "react";
import Scene from "./Scene";
import Matter from "matter-js";
import "../styles/product.css"       


const Products = ({productData}) => {

    //open the store url
    const openProductWindow = (e) => {
        console.log(e.target.dataset.url)
        window.location.href = e.target.dataset.url;
    }

    return (
        
            <div>
                {productData.map((product, i) => {
                    return (
                        <div className="bags" key={product.id}>
                            <img 
                                className="image-send" 
                                data-url={product.onlineStoreUrl} 
                                src={product.images[0].src} 
                                onClick={(e) => openProductWindow(e)}
                                style={{display: "none"}}
                            />
                        </div>
                    )
                })}
            </div>
    )


}

export default Products;
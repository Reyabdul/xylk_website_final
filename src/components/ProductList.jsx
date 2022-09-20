import React, { useEffect, useState } from "react";
import Client from "shopify-buy";
import Modal from "./Modal";


const SHOPIFY_KEY = process.env.REACT_APP_SHOPIFY_KEY;

const client = Client.buildClient({
    storefrontAccessToken: SHOPIFY_KEY,
    domain: "xylk.myshopify.com"
});

const ProductList = () => {
    const [rawData, setRawData] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);


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

        <>
        <div className="container">
          {rawData.map((product, i) => (
            <div className='item' key={product.id} >
                <img 
                    src={product.images[0].src} 
                    alt={product.title} 
                    style={{width: "100px"}} 
                    onClick={()=> 
                        setModalOpen(true)}
                />
            </div>
          ))}
        {modalOpen &&
        <Modal setOpenModal={setModalOpen}>
            
        </Modal>}    
        </div>



      </>
    )    
}


export default ProductList;

    //this is code we will be needing in the future for project 2: it returns the collections that contain all project 2 products
    // const fetchCollections = () => {
    //     client.collection.fetchAllWithProducts().then((res) => {
    //         console.log(res);
    //     })
    // }
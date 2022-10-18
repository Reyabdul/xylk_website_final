import React, { useState } from "react";
import Product from "./components/Product";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart"
import "./style/App.css";

const App = () => {
  
  //displaying cart modal
  const [cartData, setCartData] = useState([]);



    return (
      <div className="App">
        <ProductList />
  
      </div>
    );
  }
export default App;
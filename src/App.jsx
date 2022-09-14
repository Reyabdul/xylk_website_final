import React, {useState} from "react";
import ProductList from "./components/ProductList";
import "./App.css";

const App = () => {
    
    //leave as false so it doesn't open intially

    return (
      <div className="App">
        <ProductList />
        {/*
        <button
          className="openModalBtn"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Open
        </button>
  
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
                */}
      </div>

    );
  }
  
export default App;
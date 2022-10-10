import React, { useEffect, useState } from "react";
import "../style/Modal.css";

const Modal = ({setOpenModal}) => {


  return (
    <>
      <div className="modalBackground">
            <div className="modalContainer">
              <div className="titleCloseBtn">
                
                {/*CLOSE BUTTON*/}
                <button
                  onClick={() => {
                    setOpenModal(false);
                  }}
                >
                  X
                </button>
              </div>
              <div className="title">
              </div>
              <div className="body">

              </div>
              <div className="footer">
                <button
                  onClick={() => {
                    setOpenModal(false);
                  }}
                  id="cancelBtn"
                >
                  Cancel
                </button>
                <button>Continue</button>
        
              </div>
            </div>
          </div>
    </>
  );
}

export default Modal;
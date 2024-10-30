// import React, { Fragment } from 'react'
import ReactDOM from "react-dom";
import Card from "./Card";
import { useModalContext } from "../context/modal-context"
import './model.css'

const Modal = ({className, children}) => {
    const {showModal, closeModalHandler} = useModalContext();
  return ( 
    <>
        {
            showModal && ReactDOM.createPortal(<>
                <section id="backdrop" onClick={closeModalHandler}></section>
                <Card className={className}>{children}</Card>
                </>, document.querySelector('#overlays'))
        }
    </>
  )
}

export default Modal
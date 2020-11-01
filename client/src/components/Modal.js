import React, { useState } from 'react'
import ReactDom from 'react-dom';
import classes from './Modal.module.css'

const Modal = ({open, close, children}) => {

    if(open) {
        return ReactDom.createPortal((
             <>
                <div className={classes.backdrop} onClick={() => close(false)}/>
                <div className={classes.box}>{children}</div>
            </>
        ), document.getElementById("modal"))
    }

    return null;
    
}

export default Modal

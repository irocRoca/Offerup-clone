import React, { useState } from 'react'
import ReactDom from 'react-dom';
import classes from './Modal.module.css'

const Modal = ({open, close, children}) => {
    const handleClose = () => {
        document.body.classList.remove(classes.body)
        close(false)

    }

    if(open) {
        document.body.classList.add(classes.body);

        return ReactDom.createPortal((
             <>
                <div className={classes.backdrop} onClick={handleClose}/>
                <div className={classes.box}>{children}</div>
            </>
        ), document.getElementById("modal"))
    }
    return null;
    
}

export default Modal

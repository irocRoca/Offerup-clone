import React, { useState } from 'react'
import Modal from './Modal'


const ListItem = ({Component, text}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = (e) =>{
        setIsOpen(true);
    }

    return (
        <>
            <li onClick={handleClick}>{text}</li>
            {isOpen && <Modal open={isOpen} close={setIsOpen}><Component /></Modal>}
         </>
    )
}

export default ListItem

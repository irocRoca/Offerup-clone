import React from 'react'
import classes from './ItemDetails.module.css'

const ItemDetails = () => {
    return (
        <div>
            <div className={classes.description}>
                <h3 className={classes.title}>Dos mesitas de marmol</h3>
                <h6 className={classes.location}>Homestead, FL</h6>
                <h6 className={classes.time}>Posted 1 minute ago </h6>
                <button className={classes.btn}>Make Offer</button>
                <button className={classes.btn} style={{background: 'white', color: "#00ab80"}}>Ask</button>
            </div>
        </div>
    )
}

export default ItemDetails;
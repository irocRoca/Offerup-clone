import React from 'react'
import classes from './Card.module.css';

const Card = ({imgUrl, title, price, location}) => {
    return (
        <div className={classes.item_link}>
            <div className={classes.item_container}>
                <div style={{breakInside: "avoid"}}>
                    <img className={classes.image} src={imgUrl} alt="item for sale" />
                </div>
                <div className={classes.information}>
                    <h2 className={classes.title}>{title}</h2>
    <h4 className={classes.price}>${price}</h4>
    <h6 className={classes.location}>{location}</h6>
                </div>
            </div>
        </div>
    )
}

export default Card;
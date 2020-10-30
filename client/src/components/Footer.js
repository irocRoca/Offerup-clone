import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <div className={classes.background}>
            <ul className={classes.list}>
                <li className={classes.list_item}>Explore</li>
                <li className={classes.list_item}>Terms</li>
                <li className={classes.list_item}>Privacy</li>
                <li className={classes.list_item}>Help</li>
                <li className={classes.list_item}>Safe Trade Spots</li>
            </ul>
            <div>
                <a href="/" className={classes.social}><span><i class="fab fa-facebook"></i></span></a>
                <a href="/" className={classes.social}><span><i class="fab fa-twitter"></i></span></a>
                <a href="/" className={classes.social}><span><i class="fab fa-linkedin"></i></span></a>
                <a href="/" className={classes.social}><span><i class="fab fa-instagram"></i></span></a>
                <a href="/" className={classes.social}><span><i class="fab fa-pinterest"></i></span></a>
            </div>
            <span className={classes.copyright}>copy 2020 OfferUp,Inc.</span>
        </div>
    )
}

export default Footer;

import React, { useState } from 'react'
import { Hamburger } from '../Hamburger/Hamburger';
import Login from '../Login';
import Modal from '../Modal';
import Signup from '../Signup';
import classes from './Header.module.css';
import Listitem from '../ListItem'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = (e) =>{
        setIsOpen(true);
    }

    return (
        <div className={classes.header}>
            <div>
                <h1 className={classes.logo}>OfferUp</h1>
                <img className={classes.logoImg} src="https://assets.offerup.com/web/images/header/offer-ring@2x.0b79cdd8.png" alt="logo"/>
            </div>
            <div className={classes.search}>
                <div className={classes.contain_search}>
                <span className={classes.search_icon}>
                    <i className="fas fa-search"></i>
                    </span>
                    <input placeholder="Search Offerup" className={classes.input_search}></input>
                </div>
                <div className={classes.contain_location}>
                    <span className={classes.search_icon}><i className="fas fa-map-marker-alt"></i></span>
                    <input className={classes.input_location} placeholder="Nearby" ></input> 
                    <button className={classes.btn}>GO</button>
                </div>
            </div>
            <div>
                <span className={classes.burger}>
                <Hamburger />
                </span>
                <ul className={classes.list}>
                    <li className={classes.list_item}>Sell</li>
                    <li className={classes.list_item}>About</li>
                    <Listitem Component={Login} text="Log in"/>
                    <Listitem Component={Signup} text="Sign up"/>
                </ul>
            </div>
        </div>
    )
}

export default Header;

import React from 'react'
import classes from './ItemDetails.module.css'

const ItemDetails = () => {
    return (
        <div>
            <div className={classes.description}>
                <h3 className={classes.title}>Dos mesitas de marmol</h3>
                <h6 className={classes.location}>Homestead, FL</h6>
                <h6 className={classes.time}>Posted 1 minute ago </h6>
                <div>
                <button className={classes.btn}>Make Offer</button>
                <button className={classes.btn} style={{background: 'white', color: "#00ab80"}}>Ask</button>
                <hr className={classes.line} />
                <div className={classes.userBtn}>
                    <button className={classes.sbtn}> <span className={classes.sicon} ><i class="far fa-heart"></i></span>Save</button>
                    <button className={classes.sbtn}><span className={classes.sicon} ><i class="fas fa-share-square"></i></span>Share</button>
                </div>
                <hr className={classes.line} />
                <div className={classes.userInfo}>
                    <div><img className={classes.avatar} src="https://images.offerup.com/luMqlOBXwidSIIO_eQIBkPR3ldI=/400x400/smart/5414/o62482143_95213.jpg" alt="avatar" /></div>
                    <div className={classes.user}>
                        <div className={classes.userName}>Username</div>
                        <div className={classes.rating}>Rating: <span><i class="fas fa-star-half-alt"></i></span></div>
                    </div>
                </div>
                <hr className={classes.line} />
                </div>

                <div className={classes.details}> 
                    <div><h4 className={classes.condition}>Used (Normal war)</h4></div>
                    <div><p className={classes.info}>Description of the item or any information about it.</p></div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetails;
import React from 'react'
import classes from './Signup.module.css'

const Signup = () => {
    return (
        <div className={classes.container}>
            <div className={classes.register}>
                <h2 >Sign up</h2>
            </div>
            <div className={classes.register}>
                <img className={classes.logo} src="https://assets.offerup.com/web/images/logo-stacked@2x.b3f7603c.png" alt="offerup logo"/>
            </div>
            <form className={classes.form}>
                <div className={classes.input_container}>
                    <label className={classes.label} >Email</label>
                <input className={classes.input} type="email" />
                </div>
                <div className={classes.input_container}>
                    <label className={classes.label} >Username</label>
                <input className={classes.input} type="text" />
                </div>
                <div className={classes.input_container}>
                    <label className={classes.label} >Password</label>
                <input className={classes.input} type="password" />
                </div>
                <button className={classes.btn}>Sign up</button>
            </form>
            <div className={classes.text}>Already have an account?<span>Login</span></div>
            <div className={classes.privacy}>By signing up or logging in, you agree to the
OfferUp <span>Terms of Service</span> and <span>Privacy Policy</span>.</div>
        </div>
    )
}

export default Signup;
import React, { useState } from 'react'
import classes from './Signup.module.css'
import useForm from './useForm';
import axios from '../config/axios';
import validate from '../config/validate';

const Signup = () => {
    const { handleChange, values} = useForm();
    const [errors, setErrors] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values))
        console.log(errors)
        if(Object.keys(errors).length === 0){
            axios.post('/user/create', values).then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err.message)
            })
        }
        console.log('we have errors')
            // if sucessfull need to close modal

    }

    return (
        <div className={classes.container}>
            <div className={classes.register}>
                <h2 >Sign up</h2>
            </div>
            <div className={classes.register}>
                <img className={classes.logo} src="https://assets.offerup.com/web/images/logo-stacked@2x.b3f7603c.png" alt="offerup logo"/>
            </div>
            <form className={classes.form} onSubmit={handleSubmit} >
                <div className={classes.input_container}>
                    <label className={classes.label} style={errors.email && { color: '#e05666'}} >Email</label>
                <input name="email" style={errors.email && { border: '1px solid #e05666'}} className={classes.input} type="email" value={values.email} onChange={handleChange}/>
                {errors.email && <p className={classes.error}>{errors.email}</p>}
                </div>
                <div className={classes.input_container}>
                    <label className={classes.label} style={errors.username && { color: '#e05666'}}>Username</label>
                <input name="username" style={errors.username && { border: '1px solid #e05666'}} className={classes.input} type="text" value={values.username} onChange={handleChange} />
                {errors.username && <p className={classes.error}>{errors.username}</p>}
                </div>
                <div className={classes.input_container}>
                    <label className={classes.label} style={errors.password && { color: '#e05666'}} >Password</label>
                <input name="password" style={errors.password && { border: '1px solid #e05666'}} className={classes.input} type="password" value={values.password} onChange={handleChange} />
                {errors.password && <p className={classes.error}>{errors.password}</p>}
                </div>
                <button className={classes.btn}>Sign up</button>
            </form>
            <div className={classes.text}>Already have an account?<span>Login</span></div>
            <div className={classes.privacy}>By signing up or logging in, you agree to the OfferUp <span>Terms of Service</span> and <span>Privacy Policy</span>.</div>
        </div>
    )
}

export default Signup;
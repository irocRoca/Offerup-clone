import {useState} from 'react'
import validate from '../config/validate'

const useForm = () => {
    const [values, setValues] = useState({
        email: "",
        username: "",
        password: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({...values, [name]: value})
    }

    const handleSubmit = (e, submitForm) => {
        e.preventDefault();
        setErrors(validate(values))
        if(Object.keys(errors).length === 0){
            console.log("left here")
            submitForm();
        }
    }

    return { handleChange, values, errors, handleSubmit }
}

export default useForm

export default function validate(values) {
    let errors = {};

    if(!values.email){
        errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
      }

    if(!values.username){
        errors.username = "Username is required";
    }

    if(!values.password){
        errors.password = "Password is required";
    } else if(values.password.length < 6) {
        errors.password = "Password must be at least 6 characters"
    }

    return errors
}
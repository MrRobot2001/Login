const valid = ({email, password}) => {
    const err = {}
    if(!email){
        err.error = "Please add your email."
    }else if(!validateEmail(email)){
        err.error = "Email format is incorrect."
    }   
    if(!password){
        err.error = "Please add your password."
    }else if(password.length<6){
        err.error = "Password must be at least 6 characters."
    }
    
    return {
        errMsg: err,
        errLength: Object.keys(err).length
    }
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export default valid;
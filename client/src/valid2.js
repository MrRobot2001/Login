const valid2 = ({email, mobile, username}) => {
    const err = {}
    if(!username){
        err.error = "Please add your user name."
    }else if(username.replace(/ /g, "").length>25){
        err.error = " User name is up to 25 characters long."
    }
    if(!email){
        err.error = "Please add your email."
    }else if(!validateEmail(email)){
        err.error = "Email format is incorrect."
    }   
    if(!mobile){
        err.error = "Please add your Mobile Number."
    }else if(mobile.length !== 10){
        err.error = "Only 10 digit number valid."
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

export default valid2;
import axios from 'axios';



export const loginUser = (credentials, history, setFieldError, setSubmitting) => {
//check and get some data

    // axios post()
    const user ={
        name: "George",
        "email": "geo@gmail.com"
    }

    const status = true;

    if (status === true){
        //Allow access && redirect

    } else {
        //Return error to the user

    }

}

export const signupUser = (credentials, history, setFieldError, setSubmitting) => {


}

export const logoutUser = () => {


}
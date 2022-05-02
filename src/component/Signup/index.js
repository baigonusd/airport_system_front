// import React from 'react';
// import {  
//   StyledFormArea, 
//   StyledFormButton, 
//   StyledTitle, 
//   colors, 
//   StyledContainer, 
//   ButtonGroup, 
//   ExtraText, 
//   TextLink
// } from '../Styles';

// //formik and yup
// import { Formik, Form } from 'formik';
// import { TextInput } from '../FormLib';
// import * as Yup from 'yup';
// import 'yup-phone';

// //icons
// import {
//   FiMail, 
//   FiLock, 
//   FiUser, 
//   FiPhone, 
//   FiCalendar, 
//   FiCreditCard
// } from 'react-icons/fi';

// //auth and redux
// import {connect} from 'react-redux';
// import {signupUser} from "./../../auth/actions/userActions";
// import {useNavigate} from "react-router-dom";


// const lowercaseRe = /(?=.*[a-z])/;
// const uppercaseRe = /(?=.*[A-Z])/;
// const numericRe = /(?=.*[0-9])/;
// //const symbolRe = / (?=.*[!@#\$%\^&\*])/; .matches(symbolRe, 'and one symbol')
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// const Signup = ({signupUser}) => {
//   const history = useNavigate();
//   return (
//     <>
//     <div> 
//       <StyledContainer>
      
//       {/* <Icon to="/"> Airport System</Icon> */}
//       <StyledFormArea>
//         <StyledTitle color={colors.theme} size={30}> Sign Up </StyledTitle>
//         <Formik
//         initialValues={{
//             firstName: "",
//             lastName: "",
//             //gender: "male",
//             email: "",
//             iin: "", 
//             password: "",
//             confirmPassword: "",
//             phoneNumber: ""
            
          
//         }}
//         validationSchema={
//           Yup.object({
//             firstName: Yup.string().required("Required"),
//             lastName: Yup.string().required("Required"),
//             email: Yup.string()
//             .email("Invalid email address")
//             .required("Required"),
//             iin: Yup.string()
//             .matches(phoneRegExp, 'iin is not valid')
//             .min(12, 'Must be 12 digit')
//             .max(12, 'Must be 12 digit')
//             .required("IIN field is Required"),
//             password: Yup.string()
//             .matches(lowercaseRe, 'One lowercase Required!')
//             .matches(uppercaseRe, 'one uppercase required!')
//             .matches(numericRe, 'one number required!')
//             .min(8, "Password is too short")
//             .max(15, "Password is too long")
//             .required("Required"),
//             confirmPassword: Yup.string()
//             .required("Required")
//             .oneOf([Yup.ref("password")], "Passwords must match"),
//             phoneNumber: Yup.string()
//             .phone( null, true, 'phone Number is invalid')
//             .required("Required")
            
//           })
//         }

//         onSubmit={(values, {setSubmitting, setFieldError}) => {
//           console.log(values);
//           signupUser(values, history, 
//             setFieldError, setSubmitting);
//         }}
        
//         >
//           {() => (
//             <Form>
//              <TextInput 
//               name="firstName"
//               type="text"
//               label="First Name"
//               placeholder="Joe"
//               icon={<FiUser/>}
//               />

//               <TextInput 
//               name="lastName"
//               type="text"
//               label="Last Name"
//               placeholder="Simpson"
//               icon={<FiUser/>}
//               />

//               <TextInput 
//               name="email"
//               type="text"
//               label="Email Address"
//               placeholder="joe@example.com"
//               icon={<FiMail/>}
//               />

//               <TextInput 
//               name="iin"
//               type="text"
//               label="IIN"
//               placeholder="990101789741"
//               icon={<FiCreditCard/>}
//               />

//              <TextInput 
//               name="password"
//               type="password"
//               label="Password"
//               placeholder="********"
//               icon={<FiLock/>}
//               />

//             <TextInput 
//               name="confirmPassword"
//               type="password"
//               label="Confirm Password"
//               placeholder="********"
//               icon={<FiLock/>}
//               />

//             <TextInput 
//               name="phoneNumber"
//               type="phone"
//               label="Phone number"
//               placeholder="+7 777 222 55 55"
//               icon={<FiPhone/>}
//               />

            
              

//               <ButtonGroup>
//                 <StyledFormButton type="submit">
//                   Sign Up
//                 </StyledFormButton>
//               </ButtonGroup>

              

//             </Form>
//           )}
//         </Formik>
//         <ExtraText>
//           Already nave an account? <TextLink to="/signin">Sign In</TextLink>
//         </ExtraText>
//       </StyledFormArea>
      
//       </StyledContainer>
//     </div>
//     </>
    
//   );
// };

// export default connect(null, {signupUser}) (Signup);

import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from './auth/actions/auth';
import axios from 'axios';

const Signup = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: ''
    });

    const { first_name, last_name, email, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            signup(first_name, last_name, email, password, re_password);
            setAccountCreated(true);
        }
    };

    

    if (isAuthenticated) {
        return <Redirect to='/' />
    }
    if (accountCreated) {
        return <Redirect to='/login' />
    }

    return (
        <div className='container mt-5'>
            <h1>Sign Up</h1>
            <p>Create your Account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='First Name*'
                        name='first_name'
                        value={first_name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Last Name*'
                        name='last_name'
                        value={last_name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email*'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Password*'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Confirm Password*'
                        name='re_password'
                        value={re_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Register</button>
            </form>
            <
            <p className='mt-3'>
                Already have an account? <Link to='/login'>Sign In</Link>
            </p>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Signup);
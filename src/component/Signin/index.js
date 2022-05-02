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

// //icons
// import {
//   FiMail, 
//   FiLock
// } from 'react-icons/fi';

// //auth and redux
// import {connect} from 'react-redux';
// import {loginUser} from "./../../auth/actions/userActions";
// import {useNavigate} from "react-router-dom";


// const Login = ({loginUser}) => {
//   const history = useNavigate();
//   return (
//     <>
//     <div> 
//       <StyledContainer>
      
//       {/* <Icon to="/"> Airport System</Icon> */}
//       <StyledFormArea>
//         <StyledTitle color={colors.theme} size={25}> Sign in to your account </StyledTitle>
//         <Formik
//         initialValues={{
//           email: "",
//           password: "",
//         }}
//         validationSchema={
//           Yup.object({
//             email: Yup.string().email("Invalid email address")
//             .required("Required"),
//             password: Yup.string()
//             .min(8, "Password is too short")
//             .max(15, "Password is too long")
//             .required("Required"),
//           })
//         }

//         onSubmit={(values, {setSubmitting, setFieldError}) => {
//           console.log(values);
//           loginUser(values, history, setFieldError, setSubmitting);
//         }}
        
//         >
//           {() => (
//             <Form>
//               <TextInput 
//               name="email"
//               type="text"
//               label="Email Address"
//               placeholder="joe@example.com"
//               icon={<FiMail/>}
//               />

//              <TextInput 
//               name="password"
//               type="password"
//               label="Password"
//               placeholder="********"
//               icon={<FiLock/>}
//               />

//               <ButtonGroup>
//                 <StyledFormButton type="submit">
//                   Sign In
//                 </StyledFormButton>
//               </ButtonGroup>

              

//             </Form>
//           )}
//         </Formik>
//         <ExtraText>
//           Forgetten password? <TextLink to="/forgottenpassword">Reset it</TextLink>
//         </ExtraText>
//         <ExtraText>
//           New here? <TextLink to="/signup">Signup</TextLink>
//         </ExtraText>
//       </StyledFormArea>
      
//       </StyledContainer>
//     </div>
//     </>
    
//   );
// };

// export default connect(null, {loginUser})(Login);
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from './auth/actions/auth';
import axios from 'axios';

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '' 
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login(email, password);
    };

   
  

    if (isAuthenticated) {
        return <Redirect to='/' />
    }

    return (
        <div className='container mt-5'>
            <h1>Sign In</h1>
            <p>Sign into your Account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
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
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn-primary' type='submit'>Login</button>
            </form>
            <button className='btn btn-danger mt-3' onClick={continueWithGoogle}>
                Continue With Google
            </button>
            <br />
            <button className='btn btn-primary mt-3' onClick={continueWithFacebook}>
                Continue With Facebook
            </button>
            <p className='mt-3'>
                Don't have an account? <Link to='/signup'>Sign Up</Link>
            </p>
            <p className='mt-3'>
                Forgot your Password? <Link to='/reset-password'>Reset Password</Link>
            </p>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
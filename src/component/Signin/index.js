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

import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../auth/actions/auth";
import axios from "axios";

// const Navigate = useNavigate()



const sendData = async (url, data) => {
  const response = await fetch(url, {
    headers: {
        'Content-Type': 'application/json',
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response}`);
  }
  return await response.json();
};

const sendUser = () => {
  const form = document.querySelector(".form-group");
  const data = {
    email: "testov.test@mail.ru",
    password: "123456",
  };
//   if(form){
//       form.addEventListener("submit", (e) => {
//     e.preventDefault();
    // const user = JSON.stringify(data);
    setTimeout(sendData("http://localhost:8000/api/v1/users/login/", data), 2000);
//   });
// }
};
const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container mt-5">
      <h1>Sign In</h1>
      <p>Sign into your Account</p>
      <form className="form-group">
        <input
          className="form-control"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
          required
        />

        <input
          className="form-control"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
          minLength="6"
          required
        />

        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>

      <p className="mt-3">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
      <p className="mt-3">
        Forgot your Password? <Link to="/reset-password">Reset Password</Link>
      </p>
    </div>
  );
};
sendUser();
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});  
export default connect(mapStateToProps, { login })(Login);
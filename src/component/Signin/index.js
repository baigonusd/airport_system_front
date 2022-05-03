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
import { ReactDOM } from "react";

// const Navigate = useNavigate()

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendUser();
  };
  const sendData = async (url, data) => {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
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
    const user = JSON.stringify(inputs);
    sendData("http://localhost:8000/api/v1/users/login/", user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your email:
        <input
          type="email"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Enter your password:
        <input
          type="password"
          name="password"
          value={inputs.password || ""}
          onChange={handleChange}
          minLength='6'
          required
        />
      </label>
      <input type="submit" />
    </form>
  );
}

export default MyForm;
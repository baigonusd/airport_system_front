import React from 'react';
import {  
  StyledFormArea, 
  StyledFormButton, 
  StyledTitle, 
  colors, 
  StyledContainer, 
  ButtonGroup, 
  ExtraText, 
  TextLink
} from '../Styles';

//formik and yup
import { Formik, Form } from 'formik';
import { TextInput } from '../FormLib';
import * as Yup from 'yup';
import 'yup-phone';

//icons
import {
  FiMail, 
  FiLock, 
  FiUser, 
  FiPhone, 
  FiCalendar, 
  FiCreditCard
} from 'react-icons/fi';

//auth and redux
import {connect} from 'react-redux';
import {signupUser} from "./../../auth/actions/userActions";
import {useNavigate} from "react-router-dom";


const lowercaseRe = /(?=.*[a-z])/;
const uppercaseRe = /(?=.*[A-Z])/;
const numericRe = /(?=.*[0-9])/;
//const symbolRe = / (?=.*[!@#\$%\^&\*])/; .matches(symbolRe, 'and one symbol')
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const Signup = ({signupUser}) => {
  const history = useNavigate();
  return (
    <>
    <div> 
      <StyledContainer>
      
      {/* <Icon to="/"> Airport System</Icon> */}
      <StyledFormArea>
        <StyledTitle color={colors.theme} size={30}> Sign Up </StyledTitle>
        <Formik
        initialValues={{
            firstName: "",
            lastName: "",
            //gender: "male",
            email: "",
            iin: "", 
            password: "",
            confirmPassword: "",
            phoneNumber: "",
            dateOfBirth: ""
          
        }}
        validationSchema={
          Yup.object({
            firstName: Yup.string().required("Required"),
            lastName: Yup.string().required("Required"),
            email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
            iin: Yup.string()
            .matches(phoneRegExp, 'iin is not valid')
            .min(12, 'Must be 12 digit')
            .max(12, 'Must be 12 digit')
            .required("IIN field is Required"),
            password: Yup.string()
            .matches(lowercaseRe, 'One lowercase Required!')
            .matches(uppercaseRe, 'one uppercase required!')
            .matches(numericRe, 'one number required!')
            .min(8, "Password is too short")
            .max(15, "Password is too long")
            .required("Required"),
            confirmPassword: Yup.string()
            .required("Required")
            .oneOf([Yup.ref("password")], "Passwords must match"),
            phoneNumber: Yup.string()
            .phone( null, true, 'phone Number is invalid')
            .required("Required"),
            dateOfBirth: Yup.date().required("Required")
          })
        }

        onSubmit={(values, {setSubmitting, setFieldError}) => {
          console.log(values);
          signupUser(values, history, 
            setFieldError, setSubmitting);
        }}
        
        >
          {() => (
            <Form>
             <TextInput 
              name="firstName"
              type="text"
              label="First Name"
              placeholder="Joe"
              icon={<FiUser/>}
              />

              <TextInput 
              name="lastName"
              type="text"
              label="Last Name"
              placeholder="Simpson"
              icon={<FiUser/>}
              />

              <TextInput 
              name="email"
              type="text"
              label="Email Address"
              placeholder="joe@example.com"
              icon={<FiMail/>}
              />

              <TextInput 
              name="iin"
              type="text"
              label="IIN"
              placeholder="990101789741"
              icon={<FiCreditCard/>}
              />

             <TextInput 
              name="password"
              type="password"
              label="Password"
              placeholder="********"
              icon={<FiLock/>}
              />

            <TextInput 
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              placeholder="********"
              icon={<FiLock/>}
              />

            <TextInput 
              name="phoneNumber"
              type="phone"
              label="Phone number"
              placeholder="+7 777 222 55 55"
              icon={<FiPhone/>}
              />

            <TextInput 
              name="dateOfBirth"
              type="date"
              label="Date of Birth"
              //placeholder="joe@example.com"
              icon={<FiCalendar/>}
              />

              <ButtonGroup>
                <StyledFormButton type="submit">
                  Sign Up
                </StyledFormButton>
              </ButtonGroup>

              

            </Form>
          )}
        </Formik>
        <ExtraText>
          Already nave an account? <TextLink to="/signin">Sign In</TextLink>
        </ExtraText>
      </StyledFormArea>
      
      </StyledContainer>
    </div>
    </>
    
  );
};

export default connect(null, {signupUser}) (Signup);
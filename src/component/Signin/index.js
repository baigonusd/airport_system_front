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

//icons
import {
  FiMail, 
  FiLock
} from 'react-icons/fi';

//auth and redux
import {connect} from 'react-redux';
import {loginUser} from "./../../auth/actions/userActions";
import {useNavigate} from "react-router-dom";


const Login = ({loginUser}) => {
  const history = useNavigate();
  return (
    <>
    <div> 
      <StyledContainer>
      
      {/* <Icon to="/"> Airport System</Icon> */}
      <StyledFormArea>
        <StyledTitle color={colors.theme} size={25}> Sign in to your account </StyledTitle>
        <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={
          Yup.object({
            email: Yup.string().email("Invalid email address")
            .required("Required"),
            password: Yup.string()
            .min(8, "Password is too short")
            .max(15, "Password is too long")
            .required("Required"),
          })
        }

        onSubmit={(values, {setSubmitting, setFieldError}) => {
          console.log(values);
          loginUser(values, history, setFieldError, setSubmitting);
        }}
        
        >
          {() => (
            <Form>
              <TextInput 
              name="email"
              type="text"
              label="Email Address"
              placeholder="joe@example.com"
              icon={<FiMail/>}
              />

             <TextInput 
              name="password"
              type="password"
              label="Password"
              placeholder="********"
              icon={<FiLock/>}
              />

              <ButtonGroup>
                <StyledFormButton type="submit">
                  Sign In
                </StyledFormButton>
              </ButtonGroup>

              

            </Form>
          )}
        </Formik>
        <ExtraText>
          Forgetten password? <TextLink to="/forgottenpassword">Reset it</TextLink>
        </ExtraText>
        <ExtraText>
          New here? <TextLink to="/signup">Signup</TextLink>
        </ExtraText>
      </StyledFormArea>
      
      </StyledContainer>
    </div>
    </>
    
  );
};

export default connect(null, {loginUser})(Login);
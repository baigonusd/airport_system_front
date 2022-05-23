import React, { useState } from 'react';
import {link, Navigate} from 'react-router-dom';
import {connect} from 'react-redux';
import { 
  StyledFormArea, 
  StyledFormButton, 
  StyledTitle, 
  colors, 
  StyledContainer, 
  ButtonGroup, 
  ExtraText, 
  TextLink,
  StyledTextInput
} from '../Styles';
//import PhoneInput from 'react-phone-input-2'

import {login} from './../../auth/actions/auth';


const Login = ({login,  isAuthenticated }) => {
  const [formData, setFromData] = useState({
    email: '',
    phoneNumber: '',
    password: ''
  });

  const {email, phoneNumber, password} = formData;

  //const [errors, setErrors] = useState({});

  const onChange = e => setFromData({
    ...formData,
    [e.target.name]: e.target.value
  });

  const onSubmit = e =>{
    e.preventDefault();
    login(email, phoneNumber, password)
  };

  if (isAuthenticated) {
    return <Navigate to='/' />
}
  return (
    <div> 
      <StyledContainer>
      {/* <Icon to="/"> Airport System</Icon> */}
      <StyledFormArea>
        <StyledTitle color={colors.theme} size={25}> Sign in to your account </StyledTitle>
        
            <form onSubmit={ e => onSubmit(e)}>
              <StyledTextInput 
              name="email"
              type='email'
              label={"Email Address"}
              placeholder="Email Address"
              value={email}
              onChange={ e => onChange(e)}
              required
              />

              {/* <PhoneInput
               placeholder="Enter phone number"
               specialLabel={''}
               country={'kz'}
               inputStyle={{
                 borderColor: (props.touched && props.error) && "red"
               }}
               {...props}
               />
               {(props.touched && props.error) && <p style={{color:'red'}} >{props.error}</p> } */}
           
              {/* name="phoneNumber"
              type="phone"
              label="Phone number"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={ e => onChange(e)}
              required
              /> */}
              
              <StyledTextInput 
              name="password"
              type="password"
              label='Password'
              placeholder="Password"
              value={password}
              onChange={ e => onChange(e)}
              required
              />

              <ButtonGroup>
                <StyledFormButton type="submit">
                  Sign In
                </StyledFormButton>
              </ButtonGroup>
            </form>
          
        <ExtraText>
          Forgot your password? <TextLink to="/reset-password">Reset it</TextLink>
        </ExtraText>
        <ExtraText>
          New here? <TextLink to="/signup">Signup</TextLink>
        </ExtraText>


      </StyledFormArea>
      
      </StyledContainer>
    </div>

  );

};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
// export default connect(null,{login} ) (Login);




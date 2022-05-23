import React from 'react';
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

//auth and redux
import {connect} from 'react-redux';
import {signup} from "./../../auth/actions/auth";
import {Navigate} from "react-router-dom";
import { useState } from 'react';




const Signup = ({ signup, isAuthenticated }) => {
  
  const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        iin: '',
        phoneNumber: '',
        docNumber: '',
        password: '',
        re_password: ''
    });

    const { 
      first_name, 
      last_name, 
      email, 
      iin, 
      phoneNumber, 
      docNumber, 
      password, 
      re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            signup(first_name, last_name, email, iin, phoneNumber, docNumber, password, re_password);
            setAccountCreated(true);
        }
    };

    // const handleChangeInput = (e) => {
    //   const re = /^[0-9\b]+$/; //rules
    //   if (e.target.value === "" || re.test(e.target.value)) {
    //     setPhoneNumber(e.target.value);
    //   }

 


  if (isAuthenticated) {
        return <Navigate to='/' />
  };

  if (accountCreated) {
        return <Navigate to='/signin' />
  };

  return (
    <>
    <div> 
      <StyledContainer>
      {/* <Icon to="/"> Airport System</Icon> */}
      <StyledFormArea>
        <StyledTitle color={colors.theme} size={30}> Sign Up </StyledTitle>
        <form onSubmit={e => onSubmit(e)}>
          
            
             <StyledTextInput 
              type='text'
              placeholder='First Name'
              name='first_name'
              value={first_name}
              onChange={e => onChange(e)}
              required
              />
              <StyledTextInput 
              type='text'
              placeholder='Last Name'
              name='last_name'
              value={last_name}
              onChange={e => onChange(e)}
              required
              />
              <StyledTextInput 
              type='email'
              placeholder='Email*'
              name='email'
              value={email}
              onChange={e => onChange(e)}
              required
              />
              <StyledTextInput 
              type='number'
              pattern="[0-9]*"
              placeholder='iin'
              name='IIN'
              value={iin}
              maxLength="11"
              onChange={e => onChange(e)}
              required
              />
              <StyledTextInput 
              type='number'
              pattern="[0-9]*"
              placeholder='Doc Number'
              name='docNumber'
              value={docNumber}
              maxLength="12"
              onChange={e => onChange(e)}
              required
              />
              <StyledTextInput 
              type='number'
              pattern="[0-9]*"
              placeholder='Phone Number'
              name='phoneNumber'
              value={phoneNumber}
              maxLength="12"
              onChange={e => onChange(e)}
              required
              />
              
              
             <StyledTextInput 
              type='password'
              placeholder='Password*'
              name='password'
              value={password}
              onChange={e => onChange(e)}
              minLength='8'
              required
              />

            <StyledTextInput 
              type='password'
              placeholder='Confirm Password*'
              name='re_password'
              value={re_password}
              onChange={e => onChange(e)}
              minLength='8'
              required
              
              />

            

              <ButtonGroup>
                <StyledFormButton type="submit">
                  Sign Up
                </StyledFormButton>
              </ButtonGroup>
        </form>
        <ExtraText>
          Already nave an account? <TextLink to="/signin">Sign In</TextLink>
        </ExtraText>
      </StyledFormArea>
      
      </StyledContainer>
    </div>
    </>
    
  );
};




const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Signup);

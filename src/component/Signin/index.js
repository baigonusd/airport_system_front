import React, { useEffect, useState } from 'react';
import {link, Navigate} from 'react-router-dom';
import {connect} from 'react-redux';
//import {Icon} from '../Styles.js';
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

import {login} from './../../auth/actions/auth';
//import classes from './signin.css';

const Login = ({login,  isAuthenticated, detail }) => {
  const [formData, setFromData] = useState({
    email: '',
    phoneNumber: '',
    password: ''
  });

  const {email, phoneNumber, password} = formData;

  const [formErrors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  //const [isOpen, setOpen] = useState(null);
  const onChange = e => setFromData({
    ...formData,
    [e.target.name]: e.target.value
  });

  const onSubmit = e =>{
    e.preventDefault();
    // console.log(`is empty ${Object.keys(formErrors).length === 0}`)
    login(email, phoneNumber, password);
    
  };


  

  
  if (isAuthenticated) {
    return <Navigate to='/welcome' />
  }
  if(detail === null || detail === 'null'){
    return (
      <div> 
        <StyledContainer>
        
        <StyledFormArea>
        {/* <Icon to="/"> Airport System</Icon> */}
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
                
                
                <StyledTextInput 
                name="password"
                type="password"
                label='Password'
                placeholder="Password"
                value={password}
                onChange={ e => onChange(e)}
                required
                />
                <ExtraText>{formErrors.password}</ExtraText>

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
}else{
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
              
              <StyledTextInput 
              name="password"
              type="password"
              label='Password'
              placeholder="Password"
              value={password}
              onChange={ e => onChange(e)}
              required
              />
              <ExtraText>
                {detail}
              </ExtraText>
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
}
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  detail: state.auth.detail
});

export default connect(mapStateToProps, {login})(Login);
// export default connect(null,{login} ) (Login);




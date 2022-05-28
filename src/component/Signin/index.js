import React, { useEffect, useState } from 'react';
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


import {login} from './../../auth/actions/auth';

const Login = ({login,  isAuthenticated }) => {
  const [formData, setFromData] = useState({
    email: '',
    phoneNumber: '',
    password: ''
  });

  const {email, phoneNumber, password} = formData;

  //const [errors, setErrors] = useState({});
  const [isOpen, setOpen] = useState(null);
  const onChange = e => setFromData({
    ...formData,
    [e.target.name]: e.target.value
  });

const onSubmit = e =>{
  // const config = {
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // };
  // try {
  //   const[token, setToken] = useState(null);
  //   useEffect(() => {
  //     localStorage.setItem(token, res.data.token);
  //   }, [res.dats.token, token]);
  //   const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/users/login/`, body, config );
  // } catch (err) {
  //   console.log(err)
  // }
    e.preventDefault();
    login(email, phoneNumber, password)
  };

  if (isAuthenticated) {
    return <Navigate to='/welcome' />
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

export default connect(mapStateToProps, {login})(Login);
// export default connect(null,{login} ) (Login);




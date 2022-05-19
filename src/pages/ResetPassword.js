import React, { useState } from 'react';
import {Navigate} from 'react-router-dom';
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
} from '../component/Styles'


import {reset_password} from '../auth/actions/auth';


const ResetPassword = ({reset_password}) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFromData] = useState({
    email: ''
  });

  const {email} = formData;

  
  const onChange = e => setFromData({
    ...formData,
    [e.target.name]: e.target.value
  });

  const onSubmit = e =>{
    e.preventDefault();
    reset_password(email)
    setRequestSent(true);
  };

  if (requestSent){
    return <Navigate to='/' />

  }

  return (
    <div> 
      <StyledContainer>
      {/* <Icon to="/"> Airport System</Icon> */}
      <StyledFormArea>
        <StyledTitle color={colors.theme} size={25}> Request Password Reset: </StyledTitle>
        
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

              

              <ButtonGroup>
                <StyledFormButton type="submit">
                  Reset 
                </StyledFormButton>
              </ButtonGroup>
            </form>
          
       


      </StyledFormArea>
      
      </StyledContainer>
    </div>

  );

};

export default connect(null,{reset_password} ) (ResetPassword);




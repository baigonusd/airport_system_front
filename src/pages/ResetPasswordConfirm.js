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
  StyledTextInput
} from '../component/Styles'


import {reset_password_confirm} from '../auth/actions/auth';


const ResetPasswordConfirm = ({reset_password_confirm}) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFromData] = useState({
    password: '',
    re_new_password: ''
  });

  const { password, re_new_password } = formData;
  
  const onChange = e => setFromData({
    ...formData,
    [e.target.name]: e.target.value
  });

  const onSubmit = e =>{
    e.preventDefault();
    console.log(password)
    // const token = match.params.token;
    reset_password_confirm(password, re_new_password);
    setRequestSent(true);
    //return <Navigate to='/' />
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
              type='password'
              placeholder='New Password'
              name='password'
              value={password}
              onChange={e => onChange(e)}
              minLength='8'
              required
              />

              <StyledTextInput
              type='password'
              placeholder='Confirm New Password'
              name='re_new_password'
              value={re_new_password}
              onChange={e => onChange(e)}
              minLength='8'
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
export default connect(null,{reset_password_confirm} ) (ResetPasswordConfirm);




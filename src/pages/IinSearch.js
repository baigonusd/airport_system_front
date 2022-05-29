import React, { useState } from 'react';
import {  
  StyledFormArea, 
  StyledFormButton, 
  StyledTitle, 
  colors, 
  ExtraText,
  StyledContainer, 
  ButtonGroup, 
  StyledTextInput
} from '../component/Styles'
import {NavLink} from 'react-router-dom';
import { getIin } from '../auth/actions/auth';

const IinSearch = ({getIin}) => {
    const [formData, setFormData] = useState({
        iin: ''
    });

    const {iin} = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });

    const onSubmit = e => {
        e.preventDefault();
        getIin(iin);
    };

  return (
    <>
    <div> 
      <StyledContainer>
      {/* <Icon to="/"> Airport System</Icon> */}
      <StyledFormArea>
        <StyledTitle color={colors.theme} size={30}> Enter your IIN </StyledTitle>
        <form onSubmit={e => onSubmit(e)}>
              <StyledTextInput 
              type='text'
              pattern="[0-9]*"
              placeholder='IIN'
              name='iin'
              minLength="12"
              onChange={e => onChange(e)}
              required
              />
              <ExtraText>
                IIN consists of only 12 digits
              </ExtraText>
              <ButtonGroup>
                <StyledFormButton type="submit">
                  Search
                  <NavLink to='/' />
                </StyledFormButton>
              </ButtonGroup>
        </form>
      </StyledFormArea>
      
      </StyledContainer>
    </div>
    </>
    
  );
};
export default IinSearch;
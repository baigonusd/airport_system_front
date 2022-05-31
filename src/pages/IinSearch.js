import React, { useState } from 'react';
import {
  StyledFormArea,
  StyledFormButton,
  StyledTitle,
  colors,
  ExtraText,
  StyledContainer,
  ButtonGroup,
  StyledTextInput,
  StyledError
} from '../component/Styles'
import { NavLink } from 'react-router-dom';
import { getIin } from '../auth/actions/auth';

const IinSearch = ({ getIin }) => {
  const [formData, setFormData] = useState({
    iin: ''
  });

  const { iin } = formData;
  const [formErrors, setErrors] = useState({});

  const onChange = e => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });

  const onSubmit = e => {
    e.preventDefault();
    setErrors(validate(formData));
    
    getIin(iin);
  };

  const validate = (values) => {
    const errors = {};
    // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // const reg = /^[A-Za-z]+$/i; ///^[a-z]+$/i;

    if (!values.iin) {
      errors.iin = "IIN is required!";
    } else if (values.iin.length != 12) {
      errors.iin = "This is not a valid iin format!";
    }

    return errors;
  };

  return (
    <>
      <div>
        <StyledContainer>
          {/* <Icon to="/"> Airport System</Icon> */}
          <StyledFormArea>
            <StyledTitle color={colors.theme} size={30}> Enter your IIN </StyledTitle>
            <form onSubmit={e => onSubmit(e)}>
            <ExtraText>
                IIN consists of only 12 digits
              </ExtraText>
              <StyledTextInput
                type='text'
                pattern="[0-9]"
                placeholder='IIN'
                name='iin'
                maxLength="12"
                onChange={e => onChange(e)}
                required
              />
              
              <StyledError>{formErrors.iin}</StyledError>
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
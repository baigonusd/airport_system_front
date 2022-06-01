import React, { useState } from 'react';
import {searchTicket} from './../../auth/actions/auth';
import {connect} from 'react-redux';
import {Navigate} from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
} from '../Styles';
import { NavLink } from 'react-router-dom';

const Search = ({searchTicket}) => {
  let navigate = useNavigate();
  const [formErrors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    ticket_id:'',
    iin: ''
  });
  const { ticket_id, iin } = formData;
  const onChange = e => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });

  const onSubmit = e => {
    e.preventDefault();
    setErrors(validate(formData));
    searchTicket(iin, ticket_id);
    navigate("/employee-ticket");
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
            <StyledTitle color={colors.theme} size={30}> Search </StyledTitle>
            <form onSubmit={e => onSubmit(e)}>
              <StyledTextInput
                type='text'
                placeholder='Ticket ID'
                name='ticket_id'
                pattern="[0-9]*"
                value={ticket_id}
                onChange={e => onChange(e)}
                required
              />
              <StyledTextInput
                type='text'
                pattern="[0-9]*"
                placeholder='IIN'
                name='iin'
                value={iin}
                size="12"
                onChange={e => onChange(e)}
                required
              />
              <StyledError>{formErrors.iin}</StyledError>
              <ExtraText>
                IIN consists of only 12 digits
              </ExtraText>
              
              <ButtonGroup>
                <StyledFormButton type="submit">
                  Search
                  <NavLink to='/welcome' />
                </StyledFormButton>
              </ButtonGroup>
            </form>
          </StyledFormArea>

        </StyledContainer>
      </div>
    </>

  );
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, {searchTicket})(Search);
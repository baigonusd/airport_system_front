import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
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
  StyledError,
} from "../component/Styles";
import { NavLink } from "react-router-dom";
import { getIin } from "../auth/actions/auth";
import { setIin } from "../auth/actions/auth";
import Camera from "../component/Camera/camera";

const IinSearch = ({ getIin, setIin, employee_ticket }) => {
  const [formData, setFormData] = useState({
    iin: "",
  });
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
  const { iin } = formData;
  const [formErrors, setErrors] = useState({});

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formData));

    getIin(iin);
    setIin(iin);
    console.log(`is empty ${JSON.parse(employee_ticket).length}`);

    // if (employee_ticket === []) {
    //   return <Navigate to='/signin' />
    // }else{
    //   return <Navigate to='/' />
    // }
  };

  // let navigate = useNavigate();

  return (
    <>
      <div>
        <StyledContainer>
          {/* <Icon to="/"> Airport System</Icon> */}
          <StyledFormArea>
            <StyledTitle color={colors.theme} size={30}>
              {" "}
              Enter your IIN{" "}
            </StyledTitle>
            <form onSubmit={(e) => onSubmit(e)}>
              <ExtraText>IIN consists of only 12 digits</ExtraText>
              <StyledTextInput
                type="text"
                pattern="[0-9]*"
                placeholder="IIN"
                name="iin"
                size="12"
                value={iin}
                onChange={(e) => onChange(e)}
                required
              />

              <StyledError>{formErrors.iin}</StyledError>
              <ButtonGroup>
                {/* <StyledFormButton type="submit">Search</StyledFormButton> */}
                <Camera iin={iin} />
              </ButtonGroup>
            </form>
          </StyledFormArea>
        </StyledContainer>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  employee_ticket: state.auth.employee_ticket,
});

export default connect(mapStateToProps, { getIin, setIin })(IinSearch);

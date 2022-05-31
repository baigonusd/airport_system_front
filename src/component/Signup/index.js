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
  StyledTextInput,
  ErrorText,
  StyledError
} from '../Styles';

//auth and redux
import {connect} from 'react-redux';
import {signup} from "./../../auth/actions/auth";
import {Navigate} from "react-router-dom";
import {useState} from 'react';

const Signup = ({ signup, isAuthenticated }) => {
  const [formErrors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        iin: '',
        mobile_phone: '',
        number_of_doc: '',
        password: '',
        re_password: '',
        gender: '',
        role: '4',
        scan_udv: 'C:/Users/aruzh/Desktop/4 kurs/Diploma project/FaceRecognition-main/airport_system_front-master/src/Aru 2.jpg'
    });

    const { 
      name,
      surname,
      email,
      mobile_phone,
      number_of_doc,
      iin,
      gender,
      password,
      re_password,
      role,
      scan_udv } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
          e.preventDefault(); 
          setErrors(validate(formData));
          console.log(`is empty ${Object.keys(formErrors).length === 0}`);
          setIsSubmit(true);

        if (password === re_password && password.length >= 8) {
          signup(
            name,
            surname,
            email,
            mobile_phone,
            number_of_doc,
            iin,
            gender,
            password,
            re_password,
            role,
            scan_udv);
          setAccountCreated(true);
        }
    };

    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      const reg = /^[A-Za-z]+$/i; ///^[a-z]+$/i;
      const phoneRegExp = /^[\d ()+-]+$/;
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }
      if (!values.name) {
        errors.name = "Name is required!";
      } else if (!reg.test(values.name)) {
        errors.name = "This is not a valid name format!";
      }
      if (!values.surname) {
        errors.surname = "Surname is required!";
      } else if (!reg.test(values.surname)) {
        errors.surname = "This is not a valid Last Name format!";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be more than 8 characters";
      } 
      if (!values.re_password) {
        errors.re_password = "Password is required";
      } else if (values.re_password.length < 8) {
        errors.re_password = "Password must be more than 8 characters";
      } 
      if (!values.iin){
      errors.iin = "IIN is required!";
    } else if (values.iin.length != 12 ) {
      errors.iin = "This is not a valid iin format!";
    }
    if (!values.number_of_doc){
      errors.number_of_doc = "IIN is required!";
    } else if (values.number_of_doc.length != 9) {
      errors.number_of_doc = "This is not a valid doc num format!";
    }
    if (!values.mobile_phone){
      errors.mobile_phone = "Mobile number is required!";
    } else if (!phoneRegExp.test(values.mobile_phone.length)) {
      errors.mobile_phone = "This is not a valid mobile phone format!";
    }

      return errors;
    };
  
 

  // const handleChangeInput = (e) => {
  //   const re = /^[0-9\b]+$/; //rules
  //   if (e.target.value === "" || re.test(e.target.value)) {
  //     setPhoneNumber(e.target.value);
  //   }

  // if (isAuthenticated) {
  //       return <Navigate to='/' />
  // };

  if (accountCreated) {
    return <Navigate to='/verify-code' />
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
              name='name'
              value={name}
              onChange={e => onChange(e)}
              //required
              />
              <StyledError>{formErrors.name}</StyledError>

              <StyledTextInput 
              type='text'
              placeholder='Last Name'
              name='surname'
              value={surname}
              onChange={e => onChange(e)}
              //required
              />
              <StyledError>{formErrors.surname}</StyledError>
              <StyledTextInput
                type='email'
                placeholder='Email'
                name='email'
                value={email}
                onChange={e => onChange(e)}
                //required
              />
              <StyledError>{formErrors.email}</StyledError>
              <StyledTextInput 
              type='text'
              pattern="[0-9]*"
              placeholder='iin'
              name='iin'
              value={iin}
              size="11"
              maxLength="12"
              onChange={e => onChange(e)}
              //required
              />
              <StyledError>{formErrors.iin}</StyledError>
              <StyledTextInput 
              type='text'
              pattern="[0-9]*"
              placeholder='Doc Number'
              name='number_of_doc'
              value={number_of_doc}
              maxLength="9"
              onChange={e => onChange(e)}
              //required
              />
              <StyledError>{formErrors.number_of_doc}</StyledError>
              <input 
              type="radio" 
              name="gender" 
              value={1}
              onChange={e => onChange(e)} />Male
              <input 
              type="radio" 
              name="gender" 
              value={2}
              onChange={e => onChange(e)}
              required />Female
              <StyledError>{formErrors.password}</StyledError>
              <StyledTextInput 
              type='text'
              //pattern="[0-9+]*"
              placeholder='Phone Number'
              name='mobile_phone'
              value={mobile_phone}
              maxLength="12"
              onChange={e => onChange(e)}
              required
              />
              <StyledError>{formErrors.mobile_phone}</StyledError>

             <StyledTextInput 
              type='password'
              placeholder='Password*'
              name='password'
              value={password}
              onChange={e => onChange(e)}
              //minLength='8'
              //required
              />
              <StyledError>{formErrors.password}</StyledError>

            <StyledTextInput 
              type='password'
              placeholder='Confirm Password*'
              name='re_password'
              value={re_password}
              onChange={e => onChange(e)}
              //minLength='8'
              //required
              />
              <StyledError>{formErrors.re_password}</StyledError>
              

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
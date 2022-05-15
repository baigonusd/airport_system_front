// import React from 'react';
// import { 
//   StyledFormArea, 
//   StyledFormButton, 
//   StyledTitle, 
//   colors, 
//   StyledContainer, 
//   ButtonGroup, 
//   ExtraText, 
//   TextLink
// } from './Styles';

// //formik and yup
// import { Formik, Form } from 'formik';
// import { TextInput } from './FormLib';
// import * as Yup from 'yup';

// //icons
// import {
//   FiMail, 
//   FiLock
// } from 'react-icons/fi';

// //auth and redux
// import {connect} from 'react-redux';
// import {loginUser} from "./../../auth/actions/userActions";
// import {useNavigate} from "react-router-dom";


// const ForgottenPass = ({loginUser}) => {
//   const history = useNavigate();
//   return (
//     <>
//     <div> 
//       <StyledContainer>
      
//       {/* <Icon to="/"> Airport System</Icon> */}
//       <StyledFormArea>
//         <StyledTitle color={colors.theme} size={25}> 
//         Password Reset 
//         </StyledTitle>
//         <Formik
//         initialValues={{
//           email: userEmail,
//           redirectUrl: "http://localhost:3000/passwordreset"
//         }}
//         validationSchema={
//           Yup.object({
//             email: Yup.string().email("Invalid email address")
//             .required("Required"),
           
//           })
//         }

//         onSubmit={(values, {setSubmitting, setFieldError}) => {
//           console.log(values);
//           loginUser(values, history, setFieldError, setSubmitting);
//         }}
        
//         >
//           {() => (
//             <Form>
//               <TextInput 
//               name="email"
//               type="text"
//               label="Enter your Email Address"
//               placeholder="joe@example.com"
//               icon={<FiMail/>}
//               />

            
//               <ButtonGroup>
//                 <StyledFormButton type="submit">
//                   Sign In
//                 </StyledFormButton>
//               </ButtonGroup>

              

//             </Form>
//           )}
//         </Formik>
//       </StyledFormArea>
      
//       </StyledContainer>
//     </div>
//     </>
    
//   );
// };

// export default connect(null, {loginUser})(ForgottenPass);


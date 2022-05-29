import React from "react";
import SignIn from "../component/Signin";
import ScrollToTop from "../component/ScrollToTop";
import Camera from "../component/Camera/camera";
import Ticket from "../component/Ticket/Ticket";
const SigninPage = () => {
  return (
    <>
      <Camera />
      <Ticket />
      <ScrollToTop />
      <SignIn />
    </>
  );
};

export default SigninPage;

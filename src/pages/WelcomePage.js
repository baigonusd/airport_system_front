<<<<<<< HEAD
import React from 'react';
import { 
    StyledTitle,
    StyledFormArea, 
    StyledFormButton,  
    colors, 
    StyledContainer, ButtonGroup, ExtraText, TextLink, StyledButton
  } from '../component/Styles';


//BAGGAGE PAGE WELCOME PAGE UBRAT'
const WelcomePage = () => {
  return (
    <div> 
        <div 
        style={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "transparent",
            width: "100%",
            padding: "15px",
            display: "flex",
            justifyContent: "flex-start",
        }}></div>

        <StyledFormArea bg={colors.dark2}>
        <StyledTitle size={65}> WELCOME USER </StyledTitle>
        <ButtonGroup>
            <StyledButton to="#">Logout</StyledButton>
        </ButtonGroup>
        </StyledFormArea>
        
        
      
      
    </div>
    
  )
}

export default WelcomePage
=======
import { StrictMode } from "react";
import React from 'react'
import Logo from "../component/Icons/Logo";
import List from "../component/List";
import data from "../data";
import "../styles.css";


export default function WelcomePage() {
  return (
      <StrictMode>
        <div className="page">
          <Logo />
          <main>
            <List tickets={data} />
          </main>
        </div>
      </StrictMode>
    )
  };
  
>>>>>>> 4ad0a59a0f0088dd73f02de73ea2a719e218e8a2

import React from 'react';
import { 
    StyledFormArea, 
    StyledFormButton, 
    StyledTitle, 
    colors, 
    StyledContainer, ButtonGroup, ExtraText, TextLink, StyledButton
  } from '../component/Styles';



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
      <StyledContainer>
      <StyledFormArea color='red'>
        <StyledTitle size={25}> WELCOME USER </StyledTitle>
        <ButtonGroup>
            <StyledButton to="#">Logout</StyledButton>
        </ButtonGroup>
        
        </StyledFormArea>
        </StyledContainer>
      
      
    </div>
    
  )
}

export default WelcomePage
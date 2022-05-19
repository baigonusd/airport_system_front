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
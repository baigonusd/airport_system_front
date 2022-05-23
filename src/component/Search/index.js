import React from 'react';
import {  
  StyledFormArea, 
  StyledFormButton, 
  StyledTitle, 
  colors, 
  ExtraText,
  StyledContainer, 
  ButtonGroup, 
  StyledTextInput
} from '../Styles';
import {NavLink} from 'react-router-dom';

const Search = () => {



    const onSubmit = e => {
        e.preventDefault();
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
              required
              />
              <StyledTextInput 
              type='text'
              pattern="[0-9]*"
              placeholder='IIN'
              name='iin'
              size="12"
              required
              />
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
export default Search;
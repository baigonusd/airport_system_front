import React from 'react';
import {
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer,  
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink  } from './FooterElements';

const Footer = () => {
    
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                    
                        <FooterLinkTitle> About Us</FooterLinkTitle>
                        <FooterLink to='/signin'>How it works</FooterLink>
                        <FooterLink to='/signin'>Terms of service</FooterLink>
                        <FooterLink to='/signin'>Terms of service</FooterLink>
                        <FooterLink to='/signin'>Terms of service</FooterLink>
                        
                    
                    </FooterLinkItems>
                    <FooterLinkItems>
                    
                        <FooterLinkTitle> About Us</FooterLinkTitle>
                        <FooterLink to='/signin'>How it works</FooterLink>
                        <FooterLink to='/signin'>Terms of service</FooterLink>
                        <FooterLink to='/signin'>Terms of service</FooterLink>
                        <FooterLink to='/signin'>Terms of service</FooterLink>
                    </FooterLinkItems>                   
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>
        
     </FooterContainer>  
  )
}

export default Footer;
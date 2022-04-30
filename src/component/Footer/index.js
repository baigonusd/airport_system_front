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
                    <FooterLinksWrapper>
                        <FooterLinkTitle> About Us</FooterLinkTitle>
                        <FooterLink to='/signin'>How it works</FooterLink>
                        <FooterLink to='/signin'>Terms of service</FooterLink>
                    </FooterLinksWrapper>
                    </FooterLinkItems>
                    <FooterLinkItems>
                    <FooterLinksWrapper>
                        <FooterLinkTitle> About Us</FooterLinkTitle>
                        <FooterLink to='/signin'>How it works</FooterLink>
                        <FooterLink to='/signin'>Terms of service</FooterLink>
                    </FooterLinksWrapper>
                    </FooterLinkItems>
                    
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>
        
     </FooterContainer>  
  )
}

export default Footer;
import React from 'react'
import Icon1 from '../../images/svg-2.svg'
import Icon2 from '../../images/1.svg'
import Icon3 from '../../images/svg-11.svg'
import { 
    ServicesContainer, 
    ServicesH1,  
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2, 
    ServicesP} from './SevicesElements' ;

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1> Our Functions </ServicesH1>
        <ServicesWrapper>
            <ServicesCard> 
            <ServicesIcon src={Icon1}/>
            <ServicesH2> Step 1 </ServicesH2>
            <ServicesP> The user can register on the website by entering their own credentials. </ServicesP>
            </ServicesCard>
            <ServicesCard> 
            <ServicesIcon src={Icon2}/>
            <ServicesH2> Step 2 </ServicesH2>
            <ServicesP> When registering on the site, a user needs to scan an own face.  </ServicesP>
            </ServicesCard>
            <ServicesCard> 
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Step 3</ServicesH2>
            <ServicesP>  After successful registration on the website, the user can track tickets and baggage status. </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;
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
            <ServicesP> Redjisdjvfnjsnvsjfnvjfn. dkkfnvjsnv jvkm </ServicesP>
            </ServicesCard>
            <ServicesCard> 
            <ServicesIcon src={Icon2}/>
            <ServicesH2> Step 2 </ServicesH2>
            <ServicesP> You can check your baggage status. </ServicesP>
            </ServicesCard>
            <ServicesCard> 
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Step 3</ServicesH2>
            <ServicesP> You can cheeeeeeeck </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services;
import React, {useState} from 'react';
import Video from '../../video/video1.mp4';
import { Button } from '../ButtonElement';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';


const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


  return (
    <HeroContainer>
        <HeroBg> 
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
        <HeroH1>Online Check-in</HeroH1>
        <HeroP>
            Signup for check-in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Curabitur et hendrerit mauris, ut venenatis tellus. Praesent iaculis tincidunt gravida. 
            Suspendisse elementum magna odio, vel volutpat turpis vehicula quis.
        </HeroP>
        <HeroBtnWrapper>
            <Button 
            to='signup' 
            onMouseEnter={onHover}
            onMouseLeave={onHover} 
            primary='true'
            dark='true'          
            >
            Get Started {hover ? <ArrowForward /> : <ArrowRight/>}
            </Button>
        </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;
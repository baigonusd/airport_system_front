import React, {useState} from 'react';
import HeroSection from '../component/HeroSection';
import InfoSection from '../component/InfoSection';
import { homeObjOne, homeObjTwo } from '../component/InfoSection/Data';
import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';
import Services from '../component/Services';
import Footer from '../component/Footer';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };



  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle}/>
    <HeroSection />
    <InfoSection {...homeObjOne}/>
    <InfoSection {...homeObjTwo}/>
    <Services />
    <Footer />
    </>
  );
};

export default Home;

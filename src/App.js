
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import React from 'react';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import WelcomePage from './pages/WelcomePage';


 function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ < Home />} />
        <Route exact path="/signin" element={ < SigninPage />} />
        <Route exact path="/signup" element={< SignupPage />}/>
        <Route exact path="/welcome" element={<WelcomePage/>}/>
      </Routes>
      {/* <Home />  */}
      
    </Router>
  );
};

export default App;

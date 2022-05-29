
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import WelcomePage from './pages/WelcomePage';
import BaggagePage from './pages/BaggagePage';
import SearchPage from './pages/SearchPage';
import ResetPasswordPage from './pages/ResetPassword';
import ResetPasswordConfirmPage from './pages/ResetPasswordConfirm';
import VerifyCodePage from './pages/VerifyCode';
import IinSearch from './pages/IinSearch';
import EmployeeWelcome from './pages/EmployeeWelcome';

import {Provider} from 'react-redux';
import store from './store';



 function App() { 
  return (
    <Provider store={store}>
      <Router>
      <Routes>
        <Route exact path="/" element={ <Home/>} />
        <Route exact path="/signin" element={ <SigninPage />} />
        <Route exact path="/signup" element={<SignupPage />}/>
        <Route exact path="/welcome" element={<WelcomePage/>}/>
        <Route exact path="/baggage" element={<BaggagePage/>}/>
        <Route exact path="/search" element={<SearchPage/>}/>
        <Route exact path="/reset-password" element={<ResetPasswordPage/>}/>
        <Route exact path="/reset-password-confirm" element={<ResetPasswordConfirmPage/>}/>
        <Route exact path="/verify-code" element={<VerifyCodePage/>}/>
        <Route export path="/iin-search" element={<IinSearch/>}/>
        <Route export path="/employee-ticket" element={<EmployeeWelcome/>}/>
      </Routes> 
      {/* <Home />  */}
      
    </Router>
    </Provider>
  );
};

export default App;
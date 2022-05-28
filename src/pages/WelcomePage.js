import { StrictMode } from "react";
import React from 'react'
import Logo from "../component/Icons/Logo";
import List from "../component/List";
import "../styles.css";
import {connect} from 'react-redux';
import {getTicket} from '../auth/actions/auth';
import data from "../data";
const WelcomePage = ({getTicket,isAuthenticated, access, tickets}) => {
  console.log(isAuthenticated);
  if (isAuthenticated) {
    const token = access;
    console.log(token)
    getTicket(token)
    const ticket_list = JSON.parse(tickets);
    console.log(ticket_list);
    return (
        <StrictMode>
          <div className="page">
            <Logo />
            <main>
              <List tickets={ticket_list} />
            </main>
          </div>
        </StrictMode>
    )
  }
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  access: state.auth.access,
  tickets: state.auth.tickets
});

export default connect(mapStateToProps, {getTicket})(WelcomePage);
  
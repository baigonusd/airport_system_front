import { StrictMode } from "react";
import React from 'react'
import Logo from "../component/Icons/Logo";
//import List from "../component/List";
import "../styles.css"
import {connect} from 'react-redux';
import {getTicket} from '../auth/actions/auth';
import Tickets from "../component/Tickets";
const EmployeeWelcome = ({getTicket, access, tickets}) => {
  
  
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
              <Tickets tickets={ticket_list} />
            </main>
          </div>
        </StrictMode>
    )
  
};
const mapStateToProps = state => ({
  access: state.auth.access,
  tickets: state.auth.tickets
});

export default connect(mapStateToProps, {getTicket})(EmployeeWelcome);
  
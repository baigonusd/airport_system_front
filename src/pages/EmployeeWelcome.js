import { StrictMode } from "react";
import React from "react";
import Logo from "../component/Icons/Logo";
import List from "../component/List/Employee";
import "../styles.css";
import {connect} from 'react-redux';
import classes from "../component/Tickets/styles.module.css";
const EmployeeWelcome = ({employee_ticket}) => {
    const ticket_list = JSON.parse(employee_ticket);
    console.log(`saved tickets: ${ticket_list}`);
    return (
        <StrictMode>
          <div className="page">
            <Logo />
            <div className={classes.name}>{`${ticket_list[0].passenger_name} ${ticket_list[0].passenger_surname}`}</div>
            <main>
              <List tickets={ticket_list} />
            </main>
          </div>
        </StrictMode>
    )
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  employee_ticket: state.auth.employee_ticket
});

export default connect(mapStateToProps)(EmployeeWelcome);
  

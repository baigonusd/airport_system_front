import { StrictMode } from "react";
import React from 'react'
import More from "../component/More";
import Baggage from "../component/Baggage";
import {getBaggage} from '../auth/actions/auth';
import {connect} from 'react-redux';
import baggage_data from "../baggage_data";
import "../styles.css";

const WelcomePage = ({getBaggage,isAuthenticated}) => {
  if (isAuthenticated) {
    const token = window.localStorage.getItem("token");
    getBaggage(token)
    const baggage_data = JSON.parse(window.localStorage.getItem("baggages"));
    const selected_ticket = JSON.parse(window.localStorage.getItem("selected_ticket"));
    return (
          <div className="page">
            <main>
            {baggage_data.map((baggage) => (
              <Baggage
                id={baggage.id}
                weight={baggage.weight}
                bag_status={baggage.status}
              />
            ))}
            </main>
          </div>
      )
  }
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {getBaggage})(WelcomePage);
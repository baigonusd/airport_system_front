import React from 'react'
import { StrictMode } from "react";
import Logo from "../component/Icons/Logo";
import Baggage from "../component/Baggage";
import {connect} from 'react-redux';
import "../styles.css";
import More from "../component/More";
import {getBaggage} from "../auth/actions/auth";
import {Navigate} from 'react-router-dom';

const BaggagePage = ({getBaggage, isAuthenticated, baggages, tickets, access, selected_ticket}) => {
  if (isAuthenticated) {
    getBaggage(selected_ticket, access)
    const baggage_data = JSON.parse(baggages);
    const ticket_list = JSON.parse(tickets);
    for (let i = 0; i < ticket_list.length; i++) {
      if(ticket_list[i].id === selected_ticket){
        var data = ticket_list[i];
      }
    }
    if(baggage_data === null){
      return (
            <StrictMode>
              <div className="page">
                <Logo />
                <main>
                <More key={data.id}
                  from_location={data.flight_from_location}
                  to_location={data.flight_to_location}
                  airline_name={data.flight_airline}
                  time_start={data.flight_time_start}
                  time_finish = {data.flight_time_finish}
                  status = {data.status} />
                </main>
              </div>
            </StrictMode>
      )
    }else{
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
            <More key={data.id}
              from_location={data.flight_from_location}
              to_location={data.flight_to_location}
              airline_name={data.flight_airline}
              time_start={data.flight_time_start}
              time_finish = {data.flight_time_finish}
              status = {data.status}
            />
          </main>
        </div>
  )
    }
  }else{
    return <Navigate to='/signin' />
  }
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  baggages: state.auth.baggages,
  selected_ticket: state.auth.selected_ticket,
  tickets: state.auth.tickets,
  access: state.auth.access
});

export default connect(mapStateToProps, {getBaggage})(BaggagePage);
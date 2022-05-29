import React from 'react'
import Baggage from "../component/Baggage";
import {connect} from 'react-redux';
import "../styles.css";
import More from "../component/More";
import {getBaggage} from "../auth/actions/auth";

const BaggagePage = ({getBaggage, baggages, tickets, access, selected_ticket}) => {
  getBaggage(selected_ticket, access)
  const baggage_data = JSON.parse(baggages);
  const ticket_list = JSON.parse(tickets);
  for (let i = 0; i < ticket_list.length; i++) {
    if(ticket_list[i].id === selected_ticket){
      var data = ticket_list[i];
    }
  }
  return (
        <div className="page">
            {baggage_data.map((baggage) => (
              <Baggage
                id={baggage.id}
                weight={baggage.weight}
                bag_status={baggage.status}
              />
            ))}
            <More key={data.id}
              from_location={data.from_location}
              to_location={data.to_location}
              airline_name={data.airline_name}
              time_start={data.time_start}
              time_finish = {data.time_finish}
              status = {data.status}
            />
        </div>
  )
};
const mapStateToProps = state => ({
  baggages: state.auth.baggages,
  selected_ticket: state.auth.selected_ticket,
  tickets: state.auth.tickets,
  access: state.auth.access
});

export default connect(mapStateToProps, {getBaggage})(BaggagePage);
import { StrictMode } from "react";
import React from 'react'
import More from "../component/More";
import selected_ticket from "../selected_ticket";
import Baggage from "../component/Baggage";
import baggage_data from "../baggage_data";
import "../styles.css";

export default function BaggagePage() {
  return (
        <div className="page">
          <main>
          {baggage_data.map((baggage) => (
          <Baggage
            id={baggage.id}
            weight={baggage.weight}
            bag_status={baggage.bag_status}
          />
          ))}
          {selected_ticket.map((data) => (
            <More key={data.id}
            from_location={data.from_location}
            to_location={data.to_location}
            airline_name={data.airline_name}
            time_start={data.time_start}
            time_finish = {data.time_finish}
            status = {data.status}
          />
          ))}
          </main>
        </div>
    )
  };
  
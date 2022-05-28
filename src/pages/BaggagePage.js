import { StrictMode } from "react";
import React from 'react'
import More from "../component/More";
import Baggage from "../component/Baggage";
import {getBaggage} from '../auth/actions/auth';
import {connect} from 'react-redux';
import baggage_data from "../baggage_data";
import "../styles.css";

const BaggagePage = ({getBaggage, access, baggages}) => {
  getBaggage(access)
  const baggage_data = JSON.parse(baggages);
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
};
const mapStateToProps = state => ({
  access: state.auth.access,
  baggages: state.auth.baggages
});

export default connect(mapStateToProps, {getBaggage})(BaggagePage);
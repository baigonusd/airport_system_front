import classes from "./styles.module.css";
import {link, Navigate} from 'react-router-dom';
import {NavBtn, NavBtnLink} from '../Navbar/NavBarElements';
import { 
  StyledFormButton, 
  ButtonGroup
} from '../Styles';
import { useNavigate } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import {connect} from 'react-redux';
export const Ticket = ({ticket}) => {
  return (
    <section className={classes.container}>
      <div className={classes.price}>{`${ticket.from_location} - ${ticket.to_location}`}</div>
      <div className={classes.info}>
        <div className={classes.item}>
          <h3>Airline</h3>
          <span>{ticket.airline_name}</span>
        </div>
        <div className={classes.item}>
          <h3>Departure</h3>
          <span>{ticket.time_start}</span>
        </div>
        <div className={classes.item}>
          <h3>Arrival</h3>
          <span>{ticket.time_finish}</span>
        </div>
        <div className={classes.item}>
          <h3>Status</h3>
          <span>{ticket.status}</span>
        </div>
        <NavBtn>
          <NavBtnLink to='/baggage'>More</NavBtnLink>
        </NavBtn>
      </div>
    </section>
  );
};

export default Ticket;
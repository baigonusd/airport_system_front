import classes from "./styles.module.css";
import {link, Navigate} from 'react-router-dom';
import {NavBtn, NavBtnLink} from '../Navbar/NavBarElements';
import { useNavigate } from "react-router-dom";
import { 
  StyledFormButton, 
  ButtonGroup
} from '../Styles';
import {selectTicket} from "../../auth/actions/auth";
import {connect} from 'react-redux';
import styled from "styled-components";
const StyledButton = styled.button`
  margin-top: 20px;
  background: #36c6d9;
  border-radius: 24px;
  border: none;
  outline: none;
  width: 312px;
  height: 48px;
`;
export const Ticket = ({ticket, selectTicket, access}) => {
  const status = (ticket_status) => {
    if (ticket_status === 1) return "Not used"
    if (ticket_status === 2) return "Registration"
    if (ticket_status === 3) return "Security control"
    if (ticket_status === 4) return "Used"
    if (ticket_status === 5) return "Baggage"
  };
  let navigate = useNavigate();
  return (
    <section className={classes.container}>
      <div className={classes.price}>{`${ticket.flight_from_location} - ${ticket.flight_to_location}`}</div>
      <div className={classes.info}>
        <div className={classes.item}>
          <h3>Airline</h3>
          <span>{ticket.flight_airline}</span>
        </div>
        <div className={classes.item}>
          <h3>Departure</h3>
          <span>{ticket.flight_time_start}</span>
        </div>
        <div className={classes.item}>
          <h3>Arrival</h3>
          <span>{ticket.flight_time_finish}</span>
        </div>
        <div className={classes.item}>
          <h3>Status</h3>
          <span>{status(ticket.status)}</span>
        </div>
        <StyledButton
          onClick={() => {
            selectTicket(access, ticket.flight)
            navigate("/baggage");
          }}>
            More
        </StyledButton>
        {/* <NavBtn>
          <NavBtnLink to='/baggage'>More</NavBtnLink>
        </NavBtn> */}
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  access: state.auth.access,
});

export default connect(mapStateToProps, {selectTicket})(Ticket);

import classes from "./styles.module.css";
import { useNavigate } from "react-router-dom";
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
export const Ticket = ({ticket}) => {
  const get_status = (bag_status) => {
    if (bag_status === 1) return "At the departure airport"
    if (bag_status === 2) return "Loading on the plane"
    if (bag_status === 3) return "On the plane"
    if (bag_status === 4) return "Unloading from the plane"
    if (bag_status === 5) return "At the arrival airport"
    if (bag_status === 6) return "Arrested"
  };
  let navigate = useNavigate();
  console.log(`ticket: ${ticket.flight_from_location}`);
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
              <span>{get_status(ticket.status)}</span>
            </div>
            <StyledButton
              onClick={() => {
                navigate("/");
              }}>
                CHECK-IN
            </StyledButton>
          </div>
        </section>
  );
};

// const mapStateToProps = state => ({
//   tickets: state.auth.tickets,
// });

export default Ticket;

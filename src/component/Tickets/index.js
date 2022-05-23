import classes from "./styles.module.css";
import {NavBtn, NavBtnLink} from '../Navbar/NavBarElements';
const Ticket = ({ from_location, to_location, airline_name, time_start, time_finish, status}) => {
  return (
    
    <section className={classes.container}>
      <div className={classes.price}>{`${from_location} - ${to_location}`}</div>
      <div className={classes.info}>
        <div className={classes.item}>
          <h3>Airline</h3>
          <span>{airline_name}</span>
        </div>
        <div className={classes.item}>
          <h3>Departure</h3>
          <span>{time_start}</span>
        </div>
        <div className={classes.item}>
          <h3>Arrival</h3>
          <span>{time_finish}</span>
        </div>
        <div className={classes.item}>
          <h3>Status</h3>
          <span>{status}</span>
        </div>
        <NavBtn>
          <NavBtnLink to='/baggage'>More</NavBtnLink>
        </NavBtn>
      </div>
    </section>
  );
};

export default Ticket;

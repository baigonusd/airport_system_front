import classes from "./styles.module.css";
import airline_pic from "../../images/airline.svg";
import plane from "../../images/plane.jpg";
import line from "../../images/line.png";
import vector from "../../images/vector.png";
import flight from "../../images/flight.png";
const More = ({from_location, to_location, airline_name, time_start, time_finish, status}) => {
  const get_status = (ticket_status) => {
    if (ticket_status === 1) return "Not used"
    if (ticket_status === 2) return "Registration"
    if (ticket_status === 3) return "Security control"
    if (ticket_status === 4) return "Used"
    if (ticket_status === 5) return "Baggage"
  };
  const time = (date) => {
    var new_date = new Date(date);
    return `${new_date.toLocaleTimeString()}`;
  };
  const date_format = (date) => {
    var new_date = new Date(date);
    return `${new_date.toLocaleDateString()}`;
  };
  return (
    <section className={classes.container}>
      <div className={classes.info}>
        <div className={classes.price}>{`${from_location} - ${to_location}`}</div>
        <img src={airline_pic} />
      </div>
      <div className={classes.info}>
        <div className={classes.item}>
          <span>{time(time_start)}</span>
          <h3>{from_location}</h3>
          <h3>{date_format(time_start)}</h3>
        </div>
        <img src={flight}/>
        <div className={classes.item}>
          <span>{time(time_finish)}</span>
          <h3>{to_location}</h3>
          <h3>{date_format(time_finish)}</h3>
        </div>
      </div>
      <div className={classes.info}>
        <div className={classes.item}>
          <h3>Flight status</h3>  
          <h1>{get_status(status)}</h1>
        </div>
      </div>
    </section>
    
    
  );
};

export default More;

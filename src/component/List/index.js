import Ticket from "../Tickets";
import classes from "./styles.module.css";

const List = ({ tickets }) => {
  return (
    <div className={classes.container}>
      {tickets.map((ticket) => (
        <Ticket
          key={ticket.id}
          from_location={ticket.from_location}
          to_location={ticket.to_location}
          airline_name={ticket.airline_name}
          time_start={ticket.time_start}
          time_finish = {ticket.time_finish}
          status = {ticket.status}
        />
      ))}
    </div>
  );
};

export default List;

import Ticket from "../Tickets/EmployeeTicket";
import classes from "./styles.module.css";

const List = ({ tickets }) => {
  return (
    <div className={classes.container}>
      {tickets.map((ticket) => (
        <Ticket ticket = {ticket}
        />
      ))}
    </div>
  );
};

export default List;

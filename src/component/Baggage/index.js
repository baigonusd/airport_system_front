import classes from "./styles.module.css";

const Baggage = ({id, weight, bag_status}) => {
  const status = (bag_status) => {
    if (bag_status === 1) return "At the departure airport"
    if (bag_status === 2) return "Loading on the plane"
    if (bag_status === 3) return "On the plane"
    if (bag_status === 4) return "Unloading from the plane"
    if (bag_status === 5) return "At the arrival airport"
    if (bag_status === 6) return "Arrested"
  };
  return (
    <section className={classes.container}>
        <h1>{`Baggage №${id}`}</h1>
        <div className={classes.info}>
          <div className={classes.item}>
            <h3>Weight</h3>
            <span>{weight}</span>
          </div>
          <div className={classes.item}>
            <h3>Status</h3>
            <span>{status(bag_status)}</span>
          </div>
        </div>
    </section>
  );
};

export default Baggage;

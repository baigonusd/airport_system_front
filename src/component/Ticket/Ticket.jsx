import styled from "./ticket.module.css";
import { useEffect, useState } from "react";
import BookMark from "../Bookmark/Bookmark";
import Modal from "../Modal/Modal";

const Ticket = () => {
  let i = 0;
  const [plane, setPlane] = useState();
  const [seat, setSeat] = useState(false);
  const getResource = async (url) => {
    return fetch(url).then((res) => {
      return res.ok ? res.json() : Promise.reject(res);
    });
  };
  useEffect(() => {
    getResource("http://127.0.0.1:8000/api/v1/track/boarding/?flight=1").then(
      (data) => setPlane(data)
    );
  }, []);
  useEffect(() => {
    console.log(plane);
  }, [plane]);

  const handleToggleBookMark = (userId) => {
    const updatedPlane = Object.keys(plane).reduce((acc, key) => {
      if (key === userId) {
        plane[key] = !plane[key];
      }
      return { ...acc, [key]: plane[key] };
    }, {});
    setPlane(updatedPlane);
  };
  const classname = (i) => {
    if (i <= 5) {
      return `${styled.right}`;
    } else if (i > 5 && i <= 10) {
      return `${styled.left}`;
    } else if (i <= 15 && i > 10) {
      return `${styled.right}`;
    } else if (i > 15 && i <= 20) {
      return `${styled.left}`;
    } else if (i <= 25 && i > 20) {
      return `${styled.right}`;
    } else if (i > 25 && i <= 30) {
      return `${styled.leftSide}`;
    }
  };
  return plane ? (
    <>
      <button className={styled.btn} onClick={() => setSeat(true)}>
        Open
      </button>
      <Modal active={seat}>
        <div className={styled.hs}>
          <div className={styled.one}>
            <h1 className={styled.one}>A</h1>
            <h1 className={styled.two}>B</h1>
          </div>
          <div className={styled.two}>
            <h1 className={styled.one}>C</h1>
            <h1 className={styled.two}>D</h1>
          </div>
          <div className={styled.one}>
            <h1 className={styled.one}>E</h1>
            <h1 className={styled.two}>F</h1>
          </div>
        </div>
        <div className={styled.container}>
          {Object.keys(plane).map((value) => {
            {
              i = i + 1;
            }
            return (
              <div className={classname(i)}>
                <BookMark
                  seatBookMark={plane[value]}
                  seatId={value}
                  handleToggleBookMark={handleToggleBookMark}
                />
              </div>
            );
          })}
        </div>
        <button className={styled.btn} onClick={() => setSeat(false)}>
          Save
        </button>
      </Modal>
    </>
  ) : (
    ""
  );
};

export default Ticket;

import React from "react";
import styled from "./modal.module.css";

const Modal = ({ active, setActive, children }) => {
  console.log(active);
  return (
    <div
      className={
        active.camera ? `${styled.modal} ${styled.active} ` : `${styled.modal}`
      }
      onClick={() => setActive(false)}
    >
      <div
        className={styled.modal_content}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;

import React from "react";
import styled from "./modal.module.css";

const Modal = ({ active, children }) => {
  return (
    <div
      className={
        active ? `${styled.modal} ${styled.active} ` : `${styled.modal}`
      }
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

const BookMark = ({ seatBookMark, seatId, handleToggleBookMark }) => {
  if (seatBookMark) {
    return (
      //   <svg
      //     style={{ cursor: "pointer" }}
      //     onClick={() => handleToggleBookMark(seatId)}
      //     xmlns="http://www.w3.org/2000/svg"
      //     width="40"
      //     height="40"
      //     fill="currentColor"
      //     className="bi bi-chat-square-heart-fill"
      //     viewBox="0 0 16 16"
      //   >
      //     <path d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm6 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
      //   </svg>
      // <svg
      //   style={{ cursor: "pointer" }}
      //   onClick={() => handleToggleBookMark(seatId)}
      //   xmlns="http://www.w3.org/2000/svg"
      //   id="Layer_1"
      //   data-name="Layer 1"
      //   viewBox="0 0 24 24"
      //   width="40"
      //   height="40"
      // >
      //   <path d="M16.043,14H7.957A4.963,4.963,0,0,0,3,18.957V24H21V18.957A4.963,4.963,0,0,0,16.043,14Z" />
      //   <circle cx="12" cy="6" r="6" />
      // </svg>
      <svg
        style={{ cursor: "pointer" }}
        onClick={() => handleToggleBookMark(seatId)}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        width="40"
        height="40"
      >
        <path d="M106.667,0h298.667C464.244,0,512,47.756,512,106.667v298.667C512,464.244,464.244,512,405.333,512H106.667  C47.756,512,0,464.244,0,405.333V106.667C0,47.756,47.756,0,106.667,0z" />
      </svg>
    );
  }

  return (
    // <svg
    //   style={{ cursor: "pointer" }}
    //   onClick={() => handleToggleBookMark(seatId)}
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="40"
    //   height="40"
    //   fill="currentColor"
    //   className="bi bi-chat-square"
    //   viewBox="0 0 16 16"
    // >
    //   <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
    // // </svg>
    // <svg
    //   style={{ cursor: "pointer" }}
    //   onClick={() => handleToggleBookMark(seatId)}
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 24 24"
    //   width="40"
    //   height="40"
    // >
    //   <g id="_01_align_center" data-name="01 align center">
    //     <path d="M21,24H19V18.957A2.96,2.96,0,0,0,16.043,16H7.957A2.96,2.96,0,0,0,5,18.957V24H3V18.957A4.963,4.963,0,0,1,7.957,14h8.086A4.963,4.963,0,0,1,21,18.957Z" />
    //     <path d="M12,12a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,12ZM12,2a4,4,0,1,0,4,4A4,4,0,0,0,12,2Z" />
    //   </g>
    // </svg>
    <svg
      style={{ cursor: "pointer" }}
      onClick={() => handleToggleBookMark(seatId)}
      xmlns="http://www.w3.org/2000/svg"
      id="Outline"
      viewBox="0 0 24 24"
      width="40"
      height="40"
    >
      <path d="M19,0H5A5,5,0,0,0,0,5V19a5,5,0,0,0,5,5H19a5,5,0,0,0,5-5V5A5,5,0,0,0,19,0Zm3,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3Z" />
    </svg>
  );
};

export default BookMark;

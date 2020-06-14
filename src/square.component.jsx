import React, { Fragment } from "react";
import "./square.styles.css";
const Square = ({ val, id, onHandleClick }) => {
  return (
    <>
      <button id={id} type="button" className="square" onClick={onHandleClick}>
        {val}
      </button>
    </>
  );
};

export default Square;

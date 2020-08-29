/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from "react";
import "./button.css";

const Buttons = (props) => {
    return (
        <div>
            <div className="button-container">{props.name}</div>
            <br />
        </div>
    );
};

export default Buttons;

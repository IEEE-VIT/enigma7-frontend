/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React from "react";
import "./button.css";

const Buttons = (props) => {
    return (
        <div>
            <button className="button-container">{props.name}</button>
            <br />
        </div>
    );
};

export default Buttons;

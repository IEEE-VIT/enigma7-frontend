/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
import React from "react";
import "./button.css";
import { useHistory } from "react-router-dom";

const Buttons = ({ redirect, name }) => {
    const history = useHistory();
    const route = () => {
        history.push(`/${redirect}`);
    };
    return (
        <div onClick={route}>
            <div className="button-container cursor">{name}</div>
            <br />
        </div>
    );
};

export default Buttons;

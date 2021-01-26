import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "antd";
import "./NotFound.css";
import character from "../../images/character.gif";

const NotFound = () => (
    <div className="not-found-page">
        {/* <div style={{ fontSize: "200px", color: "#26df21" }}>404</div> */}
        <img className="character" src={character} alt="" />
        <Typography.Title style={{ color: "#26df21", textAlign: "center" }}>
            {">>"} Error 404: Page Not Found
        </Typography.Title>
        <Button style={{ marginBottom: "15rem" }} className="login-btn cursor">
            <Link to="/">Take me home</Link>
        </Button>
    </div>
);

export default NotFound;

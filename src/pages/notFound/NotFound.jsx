import React from "react";
import { Link } from "react-router-dom";
import { Button, Typography } from "antd";
import "./NotFound.css";

const NotFound = () => (
    <div className="page not-found-page">
        <div style={{ fontSize: "200px", color: "#26df21" }}>404</div>
        <Typography.Title style={{ color: "#26df21" }}>
            Not Found!
        </Typography.Title>
        <Button className="login-btn">
            <Link to="/">Go Home</Link>
        </Button>
    </div>
);

export default NotFound;

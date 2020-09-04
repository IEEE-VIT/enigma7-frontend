import React from "react";
import { Typography, Layout } from "antd";
import "./navbar.css";

const { Header } = Layout;

const NavBar = () => {
    return (
        <Header className="header">
            <Typography.Title level={3} className="nav-text">
                Esc
            </Typography.Title>
            <Typography.Title level={3} className="nav-heading">
                ENIGMA
            </Typography.Title>
            <Typography.Title level={3} className="question-mark nav-text">
                ?
            </Typography.Title>
        </Header>
    );
};

export default NavBar;

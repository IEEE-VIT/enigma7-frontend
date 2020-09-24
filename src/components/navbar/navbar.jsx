import React from "react";
import { Typography, Layout } from "antd";
import "./navbar.css";
import { useHistory } from "react-router-dom";

const { Header } = Layout;

const NavBar = () => {
    const history = useHistory();

    const onEscPress = () => {
        history.push("/menu");
    };

    return (
        <Header className="header">
            <Typography.Title
                onClick={onEscPress}
                level={3}
                className="nav-text"
            >
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

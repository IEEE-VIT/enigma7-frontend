import React, { useEffect } from "react";
import { Typography, Layout } from "antd";
import "./navbar.css";
import { useHistory } from "react-router-dom";

const { Header } = Layout;

const NavBar = () => {
    const history = useHistory();

    const onEscPress = () => {
        history.push("/menu");
    };

    useEffect(() => {
        localStorage.setItem("prevPage", window.location.pathname);
    }, []);

    return (
        <Header className="header">
            <Typography.Title
                onClick={onEscPress}
                level={3}
                className="nav-text cursor"
            >
                Esc
            </Typography.Title>
            <Typography.Title level={3} className="nav-heading">
                ENIGMA
            </Typography.Title>
            <Typography.Title
                onClick={() => {
                    history.push("/instructions");
                }}
                level={3}
                className="question-mark nav-text cursor"
            >
                i
            </Typography.Title>
        </Header>
    );
};

export default NavBar;

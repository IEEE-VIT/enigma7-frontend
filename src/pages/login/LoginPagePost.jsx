/* eslint-disable camelcase */
import React from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import LoginNav from "../../components/loginNav/LoginNav";

import "./login.css";

const LoginPagePost = () => {
    return (
        <div className="login-page page">
            <div className="login-header">
                <LoginNav />
                <div className="login-header-background">
                    01000001 01110000 01110000 01110010 01100101 01100011
                    01101001 01100001 01110100 01100101 00100000 01111001
                    01101111 01110101 01110010 00100000 01100011 01110101
                    01110010 01101001 01101111 01110011 01101001 01110100
                    01111001 00101110 00100000 01001110 01101111 01110100
                    00100000 01100001 01101100 01101100 00100000 01110000
                    01101100 01100001 01100011 01100101 01110011 00100000
                    01110111 01101001 01101100 01101100 00100000 01100111
                    01110101 01101001 01100100 01100101 00100000 01111001
                    01101111 01110101 00100000 01110100 01101111 00100000
                    01110100 01101000 01100101 00100000 01100101 01101110
                    01100100 00100000 01100010 01110101 01110100 00100000
                    01110011 01101111 01101101 01100101 00100000 01100100
                    01101111 00101110 00100000 01000001 01101100 01110111
                    01100001 01111001 01110011 00100000 01101100 01101111
                    01101111 01101011 00100000 01101111 01110101 01110100
                    00100000 01100110 01101111 01110010 00100000 01100011
                    01101100 01110101 01100101 01110011
                </div>
                <div className="login-heading">
                    <Typography className="login-title">ENIGMA</Typography>
                    <Typography className="login-subtitle">
                        online cryptic hunt
                    </Typography>
                </div>
            </div>
            <div className="login-bottom">
                <Typography.Title
                    level={3}
                    style={{ color: "#1DB818", marginBottom: "3rem" }}
                >
                    04 DEC - 06 DEC, 2020
                </Typography.Title>
                <Typography.Title level={3} style={{ color: "#1DB818" }}>
                    Congratulations to the winners!
                </Typography.Title>
                <Typography.Title
                    level={3}
                    style={{ color: "#1DB818", marginBottom: "5rem" }}
                >
                    1. ARC4N3 (1705 points)
                    <br /> 2. cyclonite (1695 points)
                    <br /> 3. ronnie36 (1690 points)
                </Typography.Title>

                <Link to="/partners" className="cursor">
                    <u>Thanks to our Sponsors and Partners</u>
                </Link>
            </div>
        </div>
    );
};

export default LoginPagePost;

import React from "react";
import { Layout } from "antd";
import Buttons from "../../components/button/button";
import "./main.css";
import logo from "../../images/enigma.svg";

const MainPage = () => {
    return (
        <Layout className="page">
            <div className="container-box">
                <div className="heading-group">
                    <img src={logo} alt="enigma.svg" />
                </div>
                <div className="buttons">
                    <Buttons name="Questions" />
                    <Buttons name="Profile" />
                    <Buttons name="Story" />
                    <Buttons name="Leaderboard" />
                </div>
            </div>
        </Layout>
    );
};

export default MainPage;

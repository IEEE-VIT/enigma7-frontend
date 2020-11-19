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
                    <Buttons redirect="Questions" name="Questions" autofocus />
                    <Buttons redirect="profile" name="Profile" />
                    <Buttons redirect="story" name="Story" />
                    <Buttons redirect="leaderboard" name="Leaderboard" />
                </div>
            </div>
        </Layout>
    );
};

export default MainPage;

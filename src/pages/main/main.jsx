import React from "react";
import { Typography } from "antd";
import Buttons from "../../components/button/button";
import "./main.css";
// import logo from "../../images/enigma.svg";

const MainPage = () => {
    return (
        <div className="page main-page">
            {/* <div className="heading-group">
                    <img src={logo} alt="enigma.svg" />
                </div> */}
            <div className="login-header">
                <div className="login-header-background">
                    10101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100110010010101101010100101001100100101011010101001010011001001010110101010010100
                </div>
                <div className="login-heading">
                    <Typography className="login-title">ENIGMA</Typography>
                    <Typography className="login-subtitle">
                        online cryptic hunt
                    </Typography>
                </div>
            </div>
            <div className="main-buttons">
                <Buttons redirect="Questions" name="Questions" />
                <Buttons redirect="profile" name="Profile" />
                <Buttons redirect="story" name="Story" />
                <Buttons redirect="leaderboard" name="Leaderboard" />
            </div>
        </div>
    );
};

export default MainPage;

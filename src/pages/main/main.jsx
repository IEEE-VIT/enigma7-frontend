import React, { useEffect } from "react";
import { Layout } from "antd";
import { useHistory } from "react-router-dom";
import Buttons from "../../components/button/button";
import "./main.css";
import logo from "../../images/enigma.svg";
import isMobile from "../../utils/checkMobile";
// import Footer from "../../components/Footer/Footer";

const MainPage = () => {
    const history = useHistory();

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (isMobile()) {
            return history.push("/download");
        }
        // eslint-disable-next-line
    }, []);
    return (
        <Layout className="page">
            <div className="container-box">
                <div className="heading-group">
                    <img src={logo} alt="enigma.svg" />
                </div>
                <div className="buttons">
                    <Buttons redirect="Questions" name="Questions" autofocus />
                    <Buttons redirect="leaderboard" name="Leaderboard" />
                    <Buttons redirect="story" name="Story" />
                    <Buttons redirect="profile" name="Profile" />
                </div>
            </div>
            {/* <Footer /> */}
        </Layout>
    );
};

export default MainPage;

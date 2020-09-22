import React, { useEffect, useRef } from "react";
import { Layout } from "antd";
import Buttons from "../../components/button/button";
import "./main.css";
import logo from "../../images/enigma.svg";
import useKeyPress from "../../hooks/useKeyPress";

const MainPage = () => {
    const questions = useRef(null);
    const profile = useRef(null);
    const story = useRef(null);
    const leaderboard = useRef(null);

    useEffect(() => {
        questions.current.focus();
    }, []);

    if (useKeyPress("ArrowDown")) {
        profile.current.focus();
        story.current.focus();
        leaderboard.current.focus();
    }

    if (useKeyPress("ArrowUp")) {
        questions.current.focus();
    }
    return (
        <Layout className="page">
            <div className="container-box">
                <div className="heading-group">
                    <img src={logo} alt="enigma.svg" />
                </div>
                <div className="buttons">
                    <Buttons
                        ref={questions}
                        redirect="Questions"
                        name="Questions"
                        autofocus
                    />
                    <Buttons ref={profile} redirect="profile" name="Profile" />
                    <Buttons ref={story} redirect="story" name="Story" />
                    <Buttons
                        ref={leaderboard}
                        redirect="leaderboard"
                        name="Leaderboard"
                    />
                </div>
            </div>
        </Layout>
    );
};

export default MainPage;

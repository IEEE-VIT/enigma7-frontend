import { Button, Typography } from "antd";
import React from "react";
// import { useHistory } from "react-router-dom";
import LoginNav from "../../components/loginNav/LoginNav";
import useKeyPress from "../../hooks/useKeyPress";
import character from "../../images/character.gif";

import "./ThankYouPage.css";

const ThankYouPage = () => {
    const onLogout = () => {
        localStorage.clear();
        window.location.reload();
    };

    if (useKeyPress("l")) {
        onLogout();
    }
    return (
        <div className="page timer-page-full" style={{ background: "#030103" }}>
            <LoginNav />
            <div
                className="timer-page-full"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflowY: "scroll",
                }}
            >
                <img className="character" src={character} alt="" />
                <Typography.Title
                    level={4}
                    style={{
                        color: "#26DF21",
                        textAlign: "center",
                        maxWidth: 700,
                        margin: "1rem",
                    }}
                >
                    4747: ENIGMA has come to an end. Thank you for your sincere
                    efforts to get me out. Prizes on your way.
                </Typography.Title>
                <Button className="login-btn cursor">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://forms.gle/pQjiUq8MinXzbFjB6"
                        className="cursor"
                    >
                        Feedback
                    </a>
                </Button>
            </div>
        </div>
    );
};

export default ThankYouPage;

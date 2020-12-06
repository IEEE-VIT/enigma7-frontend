import { Button, Typography } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import LoginNav from "../../components/loginNav/LoginNav";
import useKeyPress from "../../hooks/useKeyPress";
import character from "../../images/character.gif";

const ThankYouPage = () => {
    const history = useHistory();

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
                <Button
                    onClick={() => {
                        history.push("/leaderboard");
                    }}
                    className="cursor login-btn"
                >
                    <div className="cursor">Check leaderboard</div>
                </Button>
                <Typography.Title
                    level={5}
                    style={{
                        color: "#26DF21",
                        textAlign: "center",
                        marginTop: "3rem",
                    }}
                    onClick={onLogout}
                    className="cursor"
                >
                    Press &apos;L&apos; to logout
                </Typography.Title>
            </div>
        </div>
    );
};

export default ThankYouPage;

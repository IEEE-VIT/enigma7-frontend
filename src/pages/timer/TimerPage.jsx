/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from "react";
import { Button, Statistic } from "antd";
import "./timer.css";
import { useHistory } from "react-router-dom";
import useKeyPress from "../../hooks/useKeyPress";

const { Countdown } = Statistic;

const Timer = () => {
    const history = useHistory();
    const [startNow, setStartNow] = useState(false);
    const [deadline, setDeadline] = useState(false);

    useEffect(() => {
        setDeadline(1607098800000);
    }, []);
    if (useKeyPress("Enter") && startNow) {
        // console.log("done");
        history.push("/menu");
    }
    const onFinish = () => {
        // console.log("finished!");
        setStartNow(true);
    };

    const onLogout = () => {
        // console.log("You have logged out");
        localStorage.clear();
        history.push("/");
    };

    // console.log(deadline);
    return (
        <div className="timer-page page">
            <div className="timer-heading">
                You have succesfully registered for Enigma 7.0 <br />
                The ultimate cryptic hunt starts in
            </div>
            <Countdown
                format="DD:HH:mm:ss"
                value={deadline}
                onFinish={onFinish}
            />
            {!startNow ? (
                <Button
                    onClick={onLogout}
                    type="primary"
                    className="logout-btn login-btn"
                >
                    Logout
                </Button>
            ) : (
                <div>
                    <div
                        className="timer-start-now"
                        onClick={() => history.push("/menu")}
                    >
                        START NOW
                    </div>
                    <div className="timer-footer">Press ENTER to continue</div>
                </div>
            )}
        </div>
    );
};

export default Timer;

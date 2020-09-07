/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from "react";
import { Statistic } from "antd";
import "./timer.css";
import { useHistory } from "react-router-dom";
import useKeyPress from "../../hooks/useKeyPress";

const { Countdown } = Statistic;

const Timer = () => {
    const history = useHistory();
    const [startNow, setStartNow] = useState(false);
    const [deadline, setDeadline] = useState(false);

    useEffect(() => {
        setDeadline(Date.now() + 1000 * 10);
    }, []);
    if (useKeyPress("Enter") && startNow) {
        console.log("done");
        history.push("/menu");
    }
    const onFinish = () => {
        console.log("finished!");
        setStartNow(true);
    };
    return (
        <div className="timer-page page">
            <div className="timer-heading">
                The ultimate cryptic hunt starts in
            </div>
            <Countdown value={deadline} onFinish={onFinish} />
            {!startNow ? (
                <div> </div>
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

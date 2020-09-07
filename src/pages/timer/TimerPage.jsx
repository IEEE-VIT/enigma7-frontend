import React, { useState } from "react";
import { Statistic } from "antd";
import "./timer.css";
import { useHistory } from "react-router-dom";
import useKeyPress from "../../hooks/useKeyPress";

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 10;

const Timer = () => {
    const history = useHistory();
    const [startNow, setStartNow] = useState(false);
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
                    <div className="timer-start-now">START NOW</div>
                    <div className="timer-footer">Press ENTER to continue</div>
                </div>
            )}
        </div>
    );
};

export default Timer;

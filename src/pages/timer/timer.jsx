import React, { useState } from "react";
import { Statistic } from "antd";
import "./timer.css";

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 10;

const Timer = () => {
    const [startNow, setStartNow] = useState(false);
    const onFinish = () => {
        console.log("finished!");
        setStartNow(true);
    };
    return (
        <div className="timer-page">
            <div className="timer-heading">
                The ultimate cryptic hunt starts in
            </div>
            <Countdown
                format="HH:mm:ss:SSS"
                value={deadline}
                onFinish={onFinish}
                valueStyle={{
                    background: "rgba(24, 47, 36, 0.3)",
                    color: "#26DF21",
                    fontSize: "50px",
                }}
            />
            {!startNow ? (
                <div> </div>
            ) : (
                <div className="timer-start-now">START NOW</div>
            )}
            <div className="timer-footer">Press ENTER to continue</div>
        </div>
    );
};

export default Timer;

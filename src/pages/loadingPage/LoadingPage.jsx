import { Typography } from "antd";
import React from "react";
import Loading from "../../images/loading.svg";

const LoadingPage = () => {
    return (
        <div
            className="page"
            style={{
                width: "100%",
                flexDirection: "column",
                background: "#182F24",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <img style={{ width: "100%" }} src={Loading} alt="loader" />
            <Typography.Title style={{ color: "#ffffff" }}>
                Loading
            </Typography.Title>
        </div>
    );
};

export default LoadingPage;

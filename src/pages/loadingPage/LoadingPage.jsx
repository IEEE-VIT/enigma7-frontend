import React from "react";

const LoadingPage = () => {
    return (
        <div
            className="page"
            style={{
                width: "100%",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div className="spinner" />
        </div>
    );
};

export default LoadingPage;

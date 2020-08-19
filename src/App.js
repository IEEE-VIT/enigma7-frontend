import React from "react";
import { Layout } from "antd";
import Timer from "./pages/timer/timer";

const App = () => {
    return (
        <Layout
            style={{
                background: "inherit",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Timer />
        </Layout>
    );
};

export default App;

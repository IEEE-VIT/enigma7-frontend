import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import Timer from "./pages/timer/timer";
import Question from "./pages/question/question";
import Profile from "./pages/profile/profile";
import Story from "./pages/story/story";

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
            <Switch>
                <Route exact path="/" component={Question} />
                <Route exact path="/startNow" component={Timer} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/story" component={Story} />
            </Switch>
        </Layout>
    );
};

export default App;

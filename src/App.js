import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import Timer from "./pages/timer/timer";
import Question from "./pages/question/question";
import Login from "./pages/login/login";
import FirstLogin from "./pages/firstLogin/firstLogin";

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
                <Route exact path="/login" component={Login} />
                <Route exact path="/firstLogin" component={FirstLogin} />
            </Switch>
        </Layout>
    );
};

export default App;

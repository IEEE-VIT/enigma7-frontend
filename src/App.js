import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import Timer from "./pages/timer/TimerPage";
import Question from "./pages/question/QuestionPage";
import Login from "./pages/login/LoginPage";
import FirstLogin from "./pages/firstLogin/FirstLoginPage";

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

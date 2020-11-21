import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import TimerPage from "./pages/timer/TimerPage";
import LoginPage from "./pages/login/LoginPage";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
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
                <Route exact path="/" component={LoginPage} />
                <ProtectedRoute
                    exact
                    path="/startNow"
                    component={TimerPage}
                    redirect="/"
                />
                <ProtectedRoute
                    exact
                    path="/firstLogin"
                    component={FirstLogin}
                    redirect="/"
                />
            </Switch>
        </Layout>
    );
};

export default App;

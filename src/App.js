import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import TimerPage from "./pages/timer/TimerPage";
import LoginPage from "./pages/login/LoginPage";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import FirstLogin from "./pages/firstLogin/FirstLoginPage";
import NotFound from "./pages/notFound/NotFound";
import Privacy from "./pages/privacy/Privacy";

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
                    path="/start-now"
                    component={TimerPage}
                    redirect="/"
                />
                <ProtectedRoute
                    exact
                    path="/first-login"
                    component={FirstLogin}
                    redirect="/"
                />
                <Route path="/privacy" exact component={Privacy} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    );
};

export default App;

import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import LeaderBoardPage from "./pages/leaderboard/LeaderBoardPage";
// import TimerPage from "./pages/timer/TimerPage";
import LoginPage from "./pages/login/LoginPage";
import FirstLoginPage from "./pages/firstLogin/FirstLoginPage";
import NotFound from "./pages/notFound/NotFound";
// import Privacy from "./pages/privacy/Privacy";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import Partners from "./pages/partners/Partners";
import ThankYouPage from "./pages/thankYou/ThankYouPage";

import "./pages/timer/timer.css";
import "./pages/profile/profile.css";
import "./pages/question/question.css";
import "./pages/story/story.css";
import "./pages/main/main.css";

const App = () => {
    const reload = () => window.location.reload();
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
                {/* <ProtectedRoute
                    redirect="/"
                    exact
                    path="/profile"
                    component={ProfilePage}
                />
                <ProtectedRoute
                    redirect="/"
                    exact
                    path="/story"
                    component={StoryPage}
                />
                <ProtectedRoute
                    redirect="/"
                    exact
                    path="/menu"
                    component={MainPage}
                /> */}

                {/* <ProtectedRoute
                    redirect="/"
                    exact
                    path="/Questions"
                    component={QuestionPage}
                />
                <ProtectedRoute
                    redirect="/"
                    exact
                    path="/new-story"
                    component={NewStoryPage}
                /> */}
                {/* <ProtectedRoute
                    exact
                    path="/start-now"
                    component={TimerPage}
                    redirect="/"
                /> */}
                {/* <ProtectedRoute
                    redirect="/"
                    exact
                    path="/instructions"
                    component={InfoPage}
                /> */}
                <ProtectedRoute
                    redirect="/"
                    exact
                    path="/leaderboard"
                    component={LeaderBoardPage}
                />
                <ProtectedRoute
                    redirect="/"
                    exact
                    path="/first-login"
                    component={FirstLoginPage}
                />
                <ProtectedRoute
                    redirect="/"
                    exact
                    path="/"
                    component={ThankYouPage}
                />
                {/* <Route exact path="/download" component={DownloadApp} /> */}
                <Route exact path="/partners" component={Partners} />
                <Route path="/apple-app-site-association" onEnter={reload} />
                <Route exact path="/" component={LoginPage} />
                {/* <Route path="/privacy" exact component={Privacy} /> */}
                <Route component={NotFound} />
            </Switch>
        </Layout>
    );
};

export default App;

import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import ProfilePage from "./pages/profile/profilePage";
import StoryPage from "./pages/story/storyPage";
import MainPage from "./pages/main/main";
import LeaderBoardPage from "./pages/leaderboard/LeaderBoardPage";
import TimerPage from "./pages/timer/TimerPage";
import QuestionPage from "./pages/question/QuestionPage";
import LoginPage from "./pages/login/LoginPage";
import FirstLoginPage from "./pages/firstLogin/FirstLoginPage";

const App = () => {
    localStorage.setItem(
        "key",
        "Token 30fba45c588ed7904a70da44cce083c54968ec5f"
    );
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
                <Route exact path="/profile">
                    <ProfilePage />
                </Route>
                <Route exact path="/story">
                    <StoryPage />
                </Route>
                <Route exact path="/menu">
                    <MainPage />
                </Route>
                <Route exact path="/leaderboard">
                    <LeaderBoardPage />
                </Route>

                <Route exact path="/Questions">
                    <QuestionPage />
                </Route>
                <Route exact path="/startNow">
                    <TimerPage />
                </Route>

                <Route exact path="/firstLogin">
                    <FirstLoginPage />
                </Route>
                <Route exact path="/">
                    <LoginPage />
                </Route>
            </Switch>
        </Layout>
    );
};

export default App;

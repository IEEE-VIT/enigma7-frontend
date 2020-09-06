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
                <Route exact path="/profile" component={ProfilePage} />
                <Route exact path="/story" component={StoryPage} />
                <Route exact path="/main" component={MainPage} />
                <Route exact path="/leaderboard" component={LeaderBoardPage} />
                <Route exact path="/" component={QuestionPage} />
                <Route exact path="/startNow" component={TimerPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/firstLogin" component={FirstLoginPage} />
            </Switch>
        </Layout>
    );
};

export default App;

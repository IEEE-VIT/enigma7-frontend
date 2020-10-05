import React, { useState } from "react";
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

import { getAllLeaderboard } from "./utils/requests";

const App = () => {
    const [leader, setLeaderboard] = useState([]);

    const getData = async () => {
        const resL = await getAllLeaderboard();

        setLeaderboard(resL.leader);
    };

    getData();
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
                <Route exact path="leaderboard">
                    <LeaderBoardPage leader={leader} />
                </Route>
                <Route exact path="/Questions">
                    <QuestionPage />
                </Route>
                <Route exact path="/startNow">
                    <TimerPage />
                </Route>
                {/* <Route exact path="/login">
                    <LoginPage/>
                </Route> */}
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

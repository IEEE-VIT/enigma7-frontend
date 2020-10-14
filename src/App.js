import React, { useState, useEffect } from "react";
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
import { getLeaderboard } from "./utils/requests";

const App = () => {
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await getLeaderboard();
            setLeaderboard(res);
            console.log(res);
            console.log(leaderboard);
        };
        getData();
    }, []);

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
                <Route
                    exact
                    path="/leaderboard"
                    render={() => {
                        if (leaderboard.length > 0) {
                            return <LeaderBoardPage leaders={leaderboard} />;
                        }
                        return null;
                    }}
                />

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

import React from "react";
import { Layout } from "antd";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import NavBar from "../../components/navbar/navbar";
import "./leaderboard.css";
import useKeyPress from "../../hooks/useKeyPress";

const LeaderBoardPage = () => {
    const history = useHistory();
    const leaders = (response) => {
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}/leaderboard`, {
            headers: {
                Authorization: response.Authorization,
            },
        })
            .then((res) => {
                return res;
            })
            .catch((e) => {
                console.log(e);
            });
    };
    if (useKeyPress("Escape")) {
        history.push("/menu");
    }
    return (
        <Layout className="page leader">
            <NavBar />
            <div className="flex-container">
                <div className="leaderboard-container">
                    <h1>Leaderboard</h1>
                    <table>
                        <thead>
                            <tr>
                                <th className="col">Rank</th>
                                <th className="username col">UserName</th>
                                <th className="col">Solved</th>
                                <th className="col">Score</th>
                            </tr>
                        </thead>
                        <tbody className="leaderboard-body">
                            {leaders.map((leader) => {
                                return (
                                    <tr
                                        key={leader.id}
                                        className="leaderboard-row"
                                    >
                                        <td className="col">{leader.rank}.</td>
                                        <td className="username col">
                                            {leader.username}
                                        </td>
                                        <td className="col">{leader.solved}</td>
                                        <td className="col">{leader.score}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
};

export default LeaderBoardPage;

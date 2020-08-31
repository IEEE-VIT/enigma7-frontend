import React, { useState } from "react";
import { Layout } from "antd";
import NavBar from "../../components/navbar/navbar";
import "./leaderboard.css";
import { leaderlist } from "../../leaderlist";

const LeaderBoard = () => {
    const [leaders] = useState(leaderlist);

    return (
        <Layout className="page">
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

export default LeaderBoard;

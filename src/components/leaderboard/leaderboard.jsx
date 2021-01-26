import React from "react";
import { Layout } from "antd";
import NavBar from "../navbar/navbar";
import "./leaderboard.css";

const LeaderBoard = ({ leaders }) => {
    const i = 1;

    return (
        <Layout className="page">
            <NavBar />
            <div className="flex-container leader">
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
                                    <tr key={i} className="leaderboard-row">
                                        <td className="col">
                                            {leaders.indexOf(leader) + 1}.
                                        </td>
                                        <td className="username col">
                                            {leader.username}
                                        </td>
                                        <td className="col">
                                            {leader.question_answered}
                                        </td>
                                        <td className="col">{leader.points}</td>
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

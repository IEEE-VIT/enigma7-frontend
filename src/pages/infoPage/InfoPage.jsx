import React from "react";
import { Typography } from "antd";
import { useHistory } from "react-router-dom";
import useKeyPress from "../../hooks/useKeyPress";

import infoPowerups from "../../images/infoPowerups.svg";

const InfoPage = () => {
    const history = useHistory();
    if (useKeyPress("Enter")) {
        history.push(localStorage.getItem("prevPage"));
    }
    return (
        <div className="page instructions-page">
            <Typography.Title style={{ color: "#26DF21" }}>
                Instructions
            </Typography.Title>
            <ul
                style={{
                    fontSize: "17px",
                    listStyleType: "square",
                    maxWidth: "70vw",
                }}
            >
                <li>
                    ENIGMA 7.0 is an online cryptic hunt where players solve a
                    series of challenging riddles and puzzles to win exciting
                    prizes.
                </li>
                <li>
                    The points earned on answering each question are completely
                    relative to the competition - the earlier you solve a
                    question, the higher your score will be. These points
                    determine your position on the leaderboard.
                </li>
                <li>
                    Upon using a hint, a one-time penalty of 10 points shall be
                    applied on the points earned from the corresponding
                    question.
                </li>
                <li>
                    Every player will have xp (experience points) which can be
                    redeemed to use power ups.
                </li>
                <li>
                    xp does not play a part in determining the leaderboard
                    position and is different from “points” mentioned.
                </li>
                <li>
                    All players start with 0 xp and can collect a maximum of 100
                    xp.
                </li>
                <li>
                    Players earn 10 xp every hour and 5 xp upon solving a
                    question.
                </li>
                <li>The xp stops generating after the 14th question</li>
                <li>
                    You have one opportunity to redeem 20 xp for using any of
                    our instagram filters and tagging us{" "}
                    <a href="https://www.instagram.com/ieeevitvellore/?hl=en">
                        <u>@ieeevitvellore</u>
                    </a>{" "}
                    during the event.
                </li>
                <li>
                    There are three different power ups that players can redeem
                    from the collected xp.
                </li>
                <img
                    style={{ height: "5rem", margin: "1rem" }}
                    src={infoPowerups}
                    alt="info"
                />
                <li>
                    The first power up, Free hint (consumes 50 xp), gives the
                    player the hint to the question without the penalty to their
                    points.
                </li>
                <li>
                    The second power up, Skip question (consumes 75 xp), the
                    players can skip the current question but will not be
                    awarded any points.
                </li>
                <li>
                    The third power up, Close answer (consumes 100 xp), the
                    players can successfully move to the next question by
                    entering a close answer and there will be a penalty of 10
                    points for the question.
                </li>
                <li>
                    Any form of malpractice shall be dealt with extreme
                    seriousness. We are constantly trying to enhance the
                    experience and security of the system. Your cooperation is
                    highly appreciated.
                </li>
            </ul>
            <footer
                style={{ fontSize: 20, placeSelf: "center", marginTop: "4rem" }}
            >
                Press ENTER to continue
            </footer>
        </div>
    );
};

export default InfoPage;

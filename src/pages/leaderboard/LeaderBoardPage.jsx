import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useKeyPress from "../../hooks/useKeyPress";
import { getLeaderboard } from "../../utils/requests";
import LeaderBoard from "../../components/leaderboard/leaderboard";

const LeaderBoardPage = () => {
    const history = useHistory();
    if (useKeyPress("Escape")) {
        history.push("/menu");
    }
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

    return <LeaderBoard leaders={leaderboard} />;
};

export default LeaderBoardPage;

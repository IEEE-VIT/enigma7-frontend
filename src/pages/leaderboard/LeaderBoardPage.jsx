import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useKeyPress from "../../hooks/useKeyPress";
import { getLeaderboard } from "../../utils/requests";
import LeaderBoard from "../../components/leaderboard/leaderboard";
import LoadingPage from "../loadingPage/LoadingPage";
import isMobile from "../../utils/checkMobile";

const LeaderBoardPage = () => {
    // loading page
    const [loadingPage, setLoadingPage] = useState(true);

    const history = useHistory();

    // eslint-disable-next-line consistent-return
    useEffect(() => {
        if (isMobile()) {
            return history.push("/download");
        }
        // eslint-disable-next-line
    }, []);

    if (useKeyPress("Escape")) {
        history.push("/thank-you");
    }
    const [leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await getLeaderboard();
            setLeaderboard(res);
            setLoadingPage(false);
            // console.log(res);
        };
        getData();
    }, []);

    if (loadingPage) {
        return <LoadingPage />;
    }

    return <LeaderBoard style={{ overflowX: "none" }} leaders={leaderboard} />;
};

export default LeaderBoardPage;

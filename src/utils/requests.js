/* eslint-disable import/prefer-default-export */
import api from "./axios";

export const getAllLeaderboard = async () => {
    const res = await api.get("/leaderboards");
    return res.data;
};

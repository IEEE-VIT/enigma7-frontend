/* eslint-disable import/prefer-default-export */
import { api } from "./axios";

const key = localStorage.getItem("key");

export const getLeaderboard = async () => {
    const res = await api.get("/game/leaderboard", {
        headers: {
            Authorization: key,
        },
    });
    return res.data;
};
